/* Ondulatória V16: envio automático, não destrutivo, da ficha 03 ao Supabase.
   - O armazenamento local permanece a fonte durante este piloto.
   - Chaves V13 e V14, backups e histórico migrado são SOMENTE LEITURA.
   - Nenhuma senha é armazenada neste código.
   - Nunca envia dados se o usuário não estiver autenticado.
*/
(() => {
  'use strict';
  const URL = 'https://njngekktobpeuonpmiyi.supabase.co';
  const PUBLISHABLE_KEY = 'sb_publishable_pEd4YdU51mUDwlziNgckGg_yrgPXJzR';
  const SOURCE = 'ondulatoria-v15-sessoes';
  const CLIENT_ID = key => `${SOURCE}::${key}`;
  const $ = id => document.getElementById(id);
  let client = null, user = null, syncing = false, scheduled = null, rerun = false;
  let syncStatus = 'offline', syncMessage = 'Os treinos são salvos no aparelho. Conecte a conta para enviar à nuvem.';
  let lastSyncedAt = null, syncedCount = 0, syncedExercises = 0, syncedSets = 0;
  let isClosing = false;

  function elStatus() {
    const b = $('cloudBtn');
    const indicator = $('cloudStatusText');
    const labels = {
      offline:'☁', login:'☁', waiting:'☁…', syncing:'☁↻',
      done:'☁✓', error:'☁!'
    };
    if (b) { b.textContent = labels[syncStatus] || '☁ Nuvem'; b.title = syncMessage; b.setAttribute('aria-label', 'Sincronização: '+syncMessage); }
    if (indicator) indicator.textContent = syncMessage;
    if ($('cloudLogin')) $('cloudLogin').hidden = !!user;
    if ($('cloudLogged')) $('cloudLogged').hidden = !user;
    if ($('cloudAccount')) $('cloudAccount').textContent = user?.email || 'Conta autenticada';
    if ($('cloudCounters')) $('cloudCounters').textContent = lastSyncedAt
      ? `${syncedCount} sessão(ões), ${syncedExercises} exercício(s) e ${syncedSets} série(s) da ficha 03 enviados. Último envio: ${lastSyncedAt.toLocaleString('pt-BR')}.`
      : 'Os 47 treinos antigos já migrados não serão alterados. Seus dados novos serão enviados quando houver conexão.';
    if ($('cloudSyncNow')) $('cloudSyncNow').disabled = syncing;
  }
  function report(kind, message) { syncStatus=kind; syncMessage=message; elStatus(); }
  function localData() {
    // Leitura do estado de trabalho; NÃO altera localStorage.
    const raw = localStorage.getItem(SOURCE);
    if (!raw) return {sessions:{},personalNotes:{}};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed!=='object' || !parsed.sessions || typeof parsed.sessions!=='object') throw Error('O histórico local está em formato inesperado. Exporte um backup e interrompa a sincronização.');
    return {sessions:parsed.sessions,personalNotes:parsed.personalNotes||{}};
  }
  function toIso(ms) {
    if (!Number.isFinite(Number(ms)) || Number(ms)<=0) return null;
    const d = new Date(Number(ms));
    return Number.isNaN(+d)?null:d.toISOString();
  }
  function validNumberString(v, type) {
    const s=String(v??'').trim().replace(',','.');
    if (s==='') return null;
    if (!/^\d+(?:\.\d+)?$/.test(s)) return null;
    const n=Number(s);
    if (!Number.isFinite(n) || n<0) return null;
    if (type==='reps') return Number.isSafeInteger(n) && n<=1000 ? n : null;
    return n<=9999999.99?Math.round(n*100)/100:null;
  }
  function gather() {
    const d=localData();
    const validSession=(s,k) => {
      if(!s || !/^\d{4}-\d{2}-\d{2}_[ABCD]$/.test(k) || !/^\d{4}-\d{2}-\d{2}$/.test(s.date) || !['A','B','C','D'].includes(s.workout))
        throw Error('Foi encontrado um registro com data ou treino inválido. A nuvem não foi alterada; salve um backup.');
      if(k!==`${s.date}_${s.workout}`) throw Error('Identificação de sessão divergente. A sincronização foi suspensa para proteger os dados.');
    };
    for(const [key,s] of Object.entries(d.sessions))validSession(s,key);
    return d;
  }
  async function checked(q, step) {
    const {data,error}=await q;
    if(error) throw Error(`${step}: ${error.message}`);
    return data;
  }
  async function doSync() {
    if(!user || !client) {report('login','Entre na sua conta para iniciar a sincronização.');return;}
    if(!navigator.onLine) {report('waiting','Sem internet. Registros permanecem no iPhone e serão reenviados quando houver conexão.');return;}
    if(syncing){rerun=true;return;}
    syncing=true;rerun=false;
    report('syncing','Enviando registros da ficha atual ao Supabase…');
    try {
      // Captura uma foto consistente; mudanças durante o envio serão reenviadas no próximo ciclo.
      const local=gather();
      const owner=user.id;
      if(!owner)throw Error('Conta inválida. Entre novamente.');
      const detail={
        user_id:owner,source_key:SOURCE,title:'Ondulatória 03',
        valid_from:plan.validFrom, valid_until:plan.validUntil,
        archived:false,prescription:plan
      };
      const plans=await checked(client.from('ond_plans').upsert(detail,{onConflict:'user_id,source_key'}).select('id'), 'Planejamento');
      if(!plans || plans.length!==1)throw Error('Não consegui confirmar a identificação do planejamento.');
      const planId=plans[0].id;
      const allSessions=Object.entries(local.sessions);
      const sessionRows=allSessions.map(([key,s])=>{
        const ms=Number(s.elapsedMs);
        const goodDuration=['partial','completed'].includes(s.status) && Number.isFinite(ms) && ms>=0 && ms<=4*60*60*1000;
        return {
          user_id:owner,plan_id:planId,client_session_id:CLIENT_ID(key),
          workout_code:s.workout,session_date:s.date,
          status:['started','partial','completed'].includes(s.status)?s.status:'partial',
          started_at:toIso(s.startedAt),ended_at:toIso(s.endedAt),
          active_seconds:goodDuration?Math.round(ms/1000):null,
          duration_is_verified:goodDuration,
          legacy_original:s
        };
      });
      let sessionIds=new Map();
      if(sessionRows.length){
        const got=await checked(client.from('ond_sessions').upsert(sessionRows,{onConflict:'user_id,client_session_id'})
          .select('id,client_session_id'),'Sessões');
        for(const s of got||[])sessionIds.set(s.client_session_id,s.id);
        if(sessionIds.size!==sessionRows.length)throw Error('Quantidade de sessões enviada não confere. O aplicativo tentará novamente sem apagar os dados locais.');
      }
      const exerciseRows=[];
      for(const [key,s] of allSessions){
        const parent=sessionIds.get(CLIENT_ID(key));
        const workoutDef=plan.workouts[s.workout]||[];
        const nameMap=new Map(workoutDef.map(x=>[x[0],x[1]]));
        for(const [code,r] of Object.entries(s.exercises||{})){
          if(!r || typeof r!=='object') continue;
          if(!nameMap.has(code))throw Error(`Exercício inesperado ${code}. Nenhum registro local foi alterado.`);
          exerciseRows.push({
            user_id:owner,session_id:parent,exercise_code:code,exercise_name:nameMap.get(code),
            display_order:Number(code.match(/\d+$/)?.[0]||0),done:!!r.done,completed_at:toIso(r.completedAt),
            legacy_load:r.load===undefined?null:String(r.load),
            legacy_sets:r.sets===undefined?null:String(r.sets),
            legacy_reps:r.reps===undefined?null:String(r.reps),
            personal_note:String(local.personalNotes[plan.id+':'+code]||''),legacy_original:r
          });
        }
      }
      let exerciseIds=new Map();
      if(exerciseRows.length){
        // Lotes pequenos para manter os limites de respostas do Supabase e redes móveis.
        for(let i=0;i<exerciseRows.length;i+=50){
          const batch=exerciseRows.slice(i,i+50);
          const got=await checked(client.from('ond_exercises').upsert(batch,{onConflict:'session_id,exercise_code'})
            .select('id,session_id,exercise_code'),'Exercícios');
          for(const x of got||[])exerciseIds.set(`${x.session_id}::${x.exercise_code}`,x.id);
        }
        if(exerciseIds.size!==exerciseRows.length)throw Error('Os exercícios não foram todos confirmados na nuvem. Os registros locais foram mantidos.');
      }
      const setRows=[];const countByExercise=new Map();
      for(const [key,s] of allSessions){
        const sessId=sessionIds.get(CLIENT_ID(key));
        for(const [code,r] of Object.entries(s.exercises||{})){
          if(!r || !Array.isArray(r.series)) continue;
          const exerciseId=exerciseIds.get(`${sessId}::${code}`);
          if(!exerciseId)throw Error('Exercício sem referência de banco.');
          countByExercise.set(exerciseId,r.series.length);
          r.series.forEach((item,i)=>setRows.push({
            user_id:owner,exercise_id:exerciseId,set_number:i+1,
            load_kg:validNumberString(item?.load,'kg'),
            repetitions:validNumberString(item?.reps,'reps'),
            done:!!item?.done,voided_at:null
          }));
        }
      }
      if(setRows.length){
        for(let i=0;i<setRows.length;i+=60){
          const got=await checked(client.from('ond_sets').upsert(setRows.slice(i,i+60),{onConflict:'exercise_id,set_number'})
            .select('id'),'Séries');
          if((got||[]).length!==Math.min(60,setRows.length-i)) throw Error('O número de séries confirmadas não corresponde ao enviado.');
        }
      }
      // Séries removidas da UI não são apagadas do histórico na nuvem.
      // A marcação voided_at é lógica e mantém o registro para auditoria.
      for(const [exerciseId,length] of countByExercise){
        const {error}=await client.from('ond_sets').update({voided_at:new Date().toISOString()})
          .eq('user_id',owner).eq('exercise_id',exerciseId).gt('set_number',length).is('voided_at',null);
        if(error)throw Error(`Marcar séries antigas como removidas: ${error.message}`);
      }
      const noteRows=Object.entries(local.personalNotes)
        .filter(([key])=>key.startsWith(plan.id+':'))
        .map(([key,text])=>({user_id:owner,plan_id:planId,exercise_code:key.slice(plan.id.length+1),note:String(text??'')}));
      if(noteRows.length){
        const n=await checked(client.from('ond_notes').upsert(noteRows,{onConflict:'user_id,plan_id,exercise_code'})
          .select('id'),'Anotações');
        if((n||[]).length!==noteRows.length)throw Error('Nem todas as anotações foram confirmadas na nuvem.');
      }
      syncedCount=sessionRows.length;syncedExercises=exerciseRows.length;syncedSets=setRows.length;
      lastSyncedAt=new Date();
      report('done',`Sincronizado! ${syncedCount} sessão(ões), ${syncedExercises} exercício(s) e ${syncedSets} série(s) da ficha 03 enviados. O histórico anterior permanece preservado.`);
    }catch(error){
      report('error',`Sincronização pendente: ${error.message}. Os registros permanecem no iPhone. Tente novamente quando puder.`);
    }finally{
      syncing=false;elStatus();
      if(rerun && user) schedule(1000);
    }
  }
  function schedule(delay=12000){
    clearTimeout(scheduled);
    if(!user)return;
    if(syncing){rerun=true;return;}
    if(!navigator.onLine){report('waiting','Sem internet. Seus registros estão no iPhone, aguardando envio.');return;}
    // A UI não pode mostrar 'Em dia' quando há edição local ainda não enviada.
    report('waiting','Alterações salvas no iPhone; aguardando sincronização com o Supabase…');
    scheduled=setTimeout(()=>{scheduled=null;doSync();},delay);
  }
  function openPanel(){const el=$('cloudModal');if(!el)return;el.hidden=false;elStatus();$('cloudEmail')?.focus();}
  function closePanel(){if($('cloudModal'))$('cloudModal').hidden=true;}
  async function refreshLogin(){
    if(!client)return;
    try{
      const {data,error}=await client.auth.getUser();
      if(error)throw error;
      user=data?.user||null;
      if(user){report('waiting','Conta conectada. Conferindo os registros da ficha 03…');schedule(1000);}
      else report('login','Sua conta ainda não está conectada neste navegador. Os treinos continuam salvos no iPhone.');
    }catch(error){user=null;report('login','Não consegui validar a conta: '+error.message+'. Seus treinos locais estão preservados.');}
  }
  async function login(){
    if(!client){report('error','A biblioteca do Supabase não carregou. Abra com internet e tente novamente.');return;}
    const email=$('cloudEmail').value.trim();const password=$('cloudPassword').value;
    if(!email || !password){report('login','Informe o e-mail e a senha definidos para sua conta Ondulatória.');return;}
    $('cloudSignIn').disabled=true;
    try{
      const {data,error}=await client.auth.signInWithPassword({email,password});
      if(error)throw error;
      user=data.user;
      $('cloudPassword').value='';
      report('waiting','Conta conectada. Sincronizando registros existentes…');
      schedule(300);
    }catch(error){report('login','Não consegui entrar: '+error.message+'. Se você só usou links por e-mail, crie uma senha na página Minha conta.');}
    finally{$('cloudSignIn').disabled=false;}
  }
  async function logout(){
    if(!client)return;
    if(!confirm('Sair da nuvem neste aparelho? Os dados locais continuarão salvos, mas os novos treinos não serão enviados até entrar novamente.'))return;
    isClosing=true;
    clearTimeout(scheduled);scheduled=null;
    const {error}=await client.auth.signOut();
    user=null;lastSyncedAt=null;
    isClosing=false;
    report('login',error?`Não consegui sair: ${error.message}`:'Você saiu da conta. Seus treinos permanecem salvos no iPhone.');
  }
  function bindControls(){
    $('cloudBtn')?.addEventListener('click',openPanel);
    $('cloudClose')?.addEventListener('click',closePanel);
    $('cloudModal')?.addEventListener('click',e=>{if(e.target===$('cloudModal'))closePanel();});
    $('cloudSignIn')?.addEventListener('click',login);
    $('cloudPassword')?.addEventListener('keydown',e=>{if(e.key==='Enter')login();});
    $('cloudSignOut')?.addEventListener('click',logout);
    $('cloudSyncNow')?.addEventListener('click',()=>schedule(100));
    window.addEventListener('ondulatoria:local-saved',()=>schedule(12000));
    window.addEventListener('ondulatoria:finalized',()=>schedule(250));
    window.addEventListener('online',()=>{if(user)schedule(1000);});
    document.addEventListener('visibilitychange',()=>{if(!document.hidden && user)schedule(1800);});
  }
  bindControls();
  if(!window.supabase?.createClient){
    report('error','Não consegui carregar o serviço de nuvem. Seu app continua funcionando e os treinos ficam salvos no iPhone. Abra com internet e recarregue para sincronizar.');
    return;
  }
  try{
    client=window.supabase.createClient(URL,PUBLISHABLE_KEY,{
      auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true,flowType:'implicit'}
    });
    // Não executar chamadas assíncronas dentro do callback de autenticação.
    client.auth.onAuthStateChange((event)=>{
      if(isClosing)return;
      if(['SIGNED_IN','SIGNED_OUT','INITIAL_SESSION','TOKEN_REFRESHED'].includes(event))setTimeout(refreshLogin,0);
    });
    refreshLogin();
  }catch(error){report('error','Erro ao iniciar a conexão: '+error.message+'. Seus treinos continuam salvos localmente.');}
})();
