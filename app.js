/* Protótipo local - dados ficam somente neste navegador via localStorage. */
const STORAGE_KEY = 'ondulatoria-v3';
const plan = {
  name: 'Ondulatória',
  goal: 'Correção postural e definição',
  validFrom: '2026-06-25',
  validUntil: '2026-08-10',
  periodization: {
    '01': { reps: '5 a 8', rest: '90 s a 120 s', css: 'type-01' },
    '02': { reps: '8 a 12', rest: '60 s a 90 s', css: 'type-02' },
    '03': { reps: '12 a 15', rest: '45 s a 60 s', css: 'type-03' },
    '04': { reps: '15 a 20', rest: '30 s a 40 s', css: 'type-04' }
  },
  cycle: {
    start: '2026-06-22',
    // Semana 1 começou na segunda-feira, 22/06/2026, com Tipo 01.
    // Semana 2 começou em 29/06 com Tipo 02; em 06/07 volta ao Tipo 01.
    types: ['01', '02']
  },
  workouts: {
    A: [
      ['A1','dead bug','3 x 12','https://www.youtube.com/shorts/HrxOWhPdsOY','Fazer com cadência: 3 s na subida e 3 s na descida.'],
      ['A2','abd. suspenso','3 x 10','https://www.youtube.com/shorts/Z4h2aIJGzFA',''],
      ['A3','Puxada frontal - pegada neutra','3 x periodização','https://www.youtube.com/watch?v=tZSw0Y0R3jw&list=PL6KmC8RDDr9_mUmUHRmqlYfeWOvdx5UQj&index=53','Sequência de ativações.'],
      ['A4','Remada sentada - pegada pronada','4 x periodização','https://www.youtube.com/watch?v=qw4FCBAA8DE&list=PL6KmC8RDDr9_mUmUHRmqlYfeWOvdx5UQj&index=31','Primeiro retrair as escápulas; depois puxar o peso.'],
      ['A5','Crucifixo reto com halteres','3 x periodização','https://www.youtube.com/watch?v=gYh3r3x4tis','Manter os ombros estáveis do início ao fim, em neutro.'],
      ['A6','Remada articulada neutra','3 x periodização','https://www.youtube.com/shorts/lwLr-OF109s','Sequência de ativações.'],
      ['A7','Face pull','3 x 10','https://www.youtube.com/shorts/l_b3WS3DS0U','Primeiro retrair e depois puxar.'],
      ['A8','Francês no cabo','3 x 12','https://www.youtube.com/shorts/LGdppdG-hsA','']
    ],
    B: [
      ['B1','Cadeira abdutora inclinada à frente','4 x 10','https://www.youtube.com/watch?v=Io2AiAvAdmY&list=PL6KmC8RDDr9_mUmUHRmqlYfeWOvdx5UQj&index=10',''],
      ['B2','Glúteo na polia com a perna estendida','3 x 8-12','https://www.youtube.com/watch?v=X4E_1uPxXdw&list=PL6KmC8RDDr9_mUmUHRmqlYfeWOvdx5UQj&index=74',''],
      ['B3','Hack machine','3 x periodização','https://www.youtube.com/watch?v=-m7kAB6XPk4&list=PL6KmC8RDDr9_mUmUHRmqlYfeWOvdx5UQj&index=19',''],
      ['B4','Mesa flexora','3 x periodização','https://www.youtube.com/watch?v=wmx3aCFbAsg&list=PL6KmC8RDDr9_mUmUHRmqlYfeWOvdx5UQj&index=24',''],
      ['B5','Leg 180°','3 x periodização','https://www.youtube.com/watch?v=pfJEaQRhRC4&list=PL6KmC8RDDr9_mUmUHRmqlYfeWOvdx5UQj&index=21',''],
      ['B6','Panturrilha 180°','3 x 15','https://www.youtube.com/shorts/N3FYMTnRAQM','']
    ],
    C: [
      ['C1','Abs. curto no banco declinado','3 x 10-12','https://www.youtube.com/watch?v=SbsYE6s7no8&list=PL6KmC8RDDr9_mUmUHRmqlYfeWOvdx5UQj&index=77',''],
      ['C2','Elevação frontal em Y','3 x 8-12','https://www.youtube.com/watch?v=f3lRic54uSE&list=PL6KmC8RDDr9_mUmUHRmqlYfeWOvdx5UQj&index=94',''],
      ['C3','Elevação lateral na máquina','3 x periodização','https://www.youtube.com/watch?v=GjXIfditfnM&list=PL6KmC8RDDr9_mUmUHRmqlYfeWOvdx5UQj&index=38',''],
      ['C4','Elevação lateral com halter','3 x periodização','https://www.youtube.com/watch?v=kgPeE09m5D8&list=PL6KmC8RDDr9_mUmUHRmqlYfeWOvdx5UQj&index=36',''],
      ['C5','Remada serrote','3 x periodização','https://www.youtube.com/watch?v=_kLoDq5O1BM&list=PL6KmC8RDDr9_mUmUHRmqlYfeWOvdx5UQj&index=30','Primeiro a retração de escápula; depois puxar.'],
      ['C6','Bíceps Spider','3 x 10-12','https://www.youtube.com/watch?v=8LZrbM73b1k&list=PL6KmC8RDDr9_mUmUHRmqlYfeWOvdx5UQj&index=113','Máxima retração de escápula.'],
      ['C7','Tríceps pulley com corda','3 x 10-12','https://www.youtube.com/watch?v=43HmWmexLvw&list=PL6KmC8RDDr9_mUmUHRmqlYfeWOvdx5UQj&index=101','']
    ],
    D: [
      ['D1','Recuo alternado','3 x 10-12','https://www.youtube.com/shorts/SNR4pqTP7Co',''],
      ['D2','Elevação pélvica unilateral','3 x 12','https://www.youtube.com/shorts/H_aWIaCxXBE',''],
      ['D3','Agachamento livre','3 x periodização','https://www.youtube.com/watch?v=IJA5r-XOFLE&list=PL6KmC8RDDr9_mUmUHRmqlYfeWOvdx5UQj&index=2',''],
      ['D4','Stiff B-Stance (stiff unilateral)','3 x periodização','https://www.youtube.com/watch?v=MWgoLL6CxEE&list=PL6KmC8RDDr9_mUmUHRmqlYfeWOvdx5UQj&index=111',''],
      ['D5','Leg Press Angular','3 x periodização','https://www.youtube.com/watch?v=-lBxz2JQwoU&list=PL6KmC8RDDr9_mUmUHRmqlYfeWOvdx5UQj&index=117','']
    ]
  },
  guides: [
    ['Pés','Cuidar com o afastamento demasiado dos pés e com a abdução exagerada (ponta do pé muito para fora).','◒'],
    ['Joelhos','Manter os joelhos alinhados às pontas dos pés, evitando rotação para dentro ou para fora.','⌁'],
    ['Quadril e pelve','Não exagerar a amplitude: evitar retroversão pélvica e a perda da ativação do bracing.','⌁'],
    ['Coluna','Preservar as curvaturas da coluna e manter o bracing ativado.','↕'],
    ['Ombros','Manter rotação externa e deixar as escápulas acompanharem o movimento quando orientado.','◌'],
    ['Bíceps e tríceps','Escápulas em neutro e bracing ativo; o cotovelo é a articulação que deve se mover.','↔'],
    ['Costas e peitoral','Nas puxadas, abaixar e retrair escápulas antes de flexionar os cotovelos. Nas remadas, retrair antes de puxar. No peitoral, escápulas estáticas em neutro ou leve retração, salvo orientação diferente.','⇄'],
    ['Panturrilhas','Manter o pé em neutro, evitando a queda para dentro; direcionar força para a borda lateral do pé.','⌄'],
    ['Abdominais','Expirar ao máximo na fase concêntrica; não apoiar a cervical e preservar a tensão no abdômen.','◍']
  ]
};

let state = loadState();
let view = { name: 'home', workout: null, date: todayISO(), pendingFilter: 'all' };

function defaultState() { return { sessions: {}, personalNotes: {}, lastSelectedDate: todayISO() }; }
function loadState() { try { return { ...defaultState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') }; } catch { return defaultState(); } }
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function todayISO() { const d = new Date(); const offset = d.getTimezoneOffset(); return new Date(d.getTime() - offset * 60000).toISOString().slice(0,10); }
function escapeHtml(value='') { return String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch])); }
function parseDate(dateString) { const [y,m,d] = dateString.split('-').map(Number); return new Date(y, m-1, d, 12); }
function formatDate(dateString) { return parseDate(dateString).toLocaleDateString('pt-BR',{ day:'2-digit', month:'short', year:'numeric'}).replace('.', ''); }
function dayDiff(fromDate, toDate) { return Math.floor((parseDate(toDate) - parseDate(fromDate)) / 86400000); }
function periodFor(dateString) {
  const cycleStart = plan.cycle.start;
  const daysSinceStart = dayDiff(cycleStart, dateString);
  if (daysSinceStart < 0) return { type: null, week: null, key: null, meta: null, starts: null, ends: null };
  const weekIndex = Math.floor(daysSinceStart / 7);
  const type = plan.cycle.types[weekIndex % plan.cycle.types.length];
  const starts = new Date(parseDate(cycleStart).getTime() + weekIndex * 7 * 86400000);
  const ends = new Date(starts.getTime() + 6 * 86400000);
  const toISO = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  return { type, week: weekIndex + 1, key: `ciclo-${weekIndex + 1}`, meta: plan.periodization[type], starts: toISO(starts), ends: toISO(ends) };
}
function resolvedPrescription(raw, dateString) { const period=periodFor(dateString); if (!raw.includes('periodização')) return raw; return raw.replace('periodização', period.meta ? `${period.meta.reps} repetições` : 'periodização'); }
function getSessionKey(date, workout) { return `${date}_${workout}`; }
function getSession(date, workout, create=true) {
  const key=getSessionKey(date, workout);
  if (!state.sessions[key] && create) {
    state.sessions[key] = { key, date, workout, status:'started', startedAt: Date.now(), exercises:{} };
  }
  return state.sessions[key];
}
function activeSessions() { return Object.values(state.sessions).filter(s=>s.status==='started'); }
function pendingExercises() {
  const all=[];
  for (const session of Object.values(state.sessions)) {
    if (!['started','partial'].includes(session.status)) continue;
    for (const ex of plan.workouts[session.workout]) {
      const record=session.exercises[ex[0]] || {};
      if (!record.done) all.push({ session, ex, record });
    }
  }
  return all;
}
function completedSessionsThisMonth() {
  const now=todayISO().slice(0,7);
  return Object.values(state.sessions).filter(s=>s.status==='completed' && s.date.startsWith(now)).length;
}
function totalWorkoutCount() { return Object.values(state.sessions).filter(s=>s.status==='completed').length; }
function showToast(message) { const t=document.getElementById('toast'); t.textContent=message; t.classList.add('show'); clearTimeout(showToast.timer); showToast.timer=setTimeout(()=>t.classList.remove('show'), 2400); }
function navActive() { document.querySelectorAll('[data-nav]').forEach(b => b.classList.toggle('active', b.dataset.nav===view.name)); }

function render() {
  const app=document.getElementById('app');
  if (view.name==='home') app.innerHTML=renderHome();
  else if (view.name==='workouts') app.innerHTML=renderWorkouts();
  else if (view.name==='session') app.innerHTML=renderSession();
  else if (view.name==='pending') app.innerHTML=renderPending();
  else if (view.name==='guide') app.innerHTML=renderGuide();
  navActive(); bindEvents();
}

function renderHome() {
  const date=view.date || todayISO(); const p=periodFor(date); const pending=pendingExercises(); const started=activeSessions();
  const currentText = p.type ? `Tipo ${p.type}` : 'Sem tipo informado';
  const detail = p.meta ? `${p.meta.reps} repetições · intervalo de ${p.meta.rest}` : 'Escolha uma semana cadastrada no plano.';
  return `
    <section class="card hero">
      <p class="small">${formatDate(date)} · Semana ${p.week}</p>
      <h2>${currentText}</h2>
      <p>${detail}</p>
    </section>

    <section>
      <div class="section-head"><h2>Semana de treino</h2><button class="text-button" data-action="set-date">Alterar data</button></div>
      <div class="card period-card">
        <div><span class="label">Periodização ativa</span><h3>${p.type ? `TIPO ${p.type}` : 'Não cadastrada'}</h3><p>${p.meta ? `${p.meta.reps} repetições · ${p.meta.rest} de intervalo` : 'O ciclo é contado a partir da segunda-feira, 22 de junho de 2026.'}</p></div>
        ${p.meta ? `<div class="period-chip ${p.meta.css}">${p.meta.reps}<br><small>reps</small></div>` : `<div class="period-chip">—</div>`}
      </div>
      <p class="small-note">Os exercícios indicados como “periodização” assumem automaticamente a faixa de repetições da semana.</p>
    </section>

    <section>
      <div class="section-head"><h2>Resumo</h2></div>
      <div class="quick-grid">
        <div class="card quick-card"><div class="metric">${completedSessionsThisMonth()}</div><p>treinos concluídos neste mês</p></div>
        <div class="card quick-card"><div class="metric">${pending.length}</div><p>exercícios pendentes para retomar</p></div>
      </div>
    </section>

    ${pending.length ? `<section><div class="section-head"><h2>Para não esquecer</h2><button class="text-button" data-nav="pending">Ver tudo</button></div><div class="card pending-card"><div class="pending-circle">◷</div><div><h3>${pending.length} exercício${pending.length!==1?'s':''} pendente${pending.length!==1?'s':''}</h3><p>${escapeHtml(pending.slice(0,2).map(x=>x.ex[1]).join(' · '))}${pending.length>2?'…':''}</p></div></div></section>` : ''}

    ${started.length ? `<section><div class="section-head"><h2>Em andamento</h2></div>${started.map(s=>renderOpenSession(s)).join('')}</section>` : ''}

    <section>
      <div class="section-head"><h2>Qual treino você vai fazer?</h2><button class="text-button" data-nav="workouts">Ver todos</button></div>
      <div class="workout-grid">${Object.keys(plan.workouts).map(letter=>renderWorkoutCard(letter)).join('')}</div>
    </section>

    <section>
      <div class="section-head"><h2>Planejamento do ciclo</h2></div>
      ${renderCalendar()}
    </section>

    <section>
      <div class="section-head"><h2>Cardio e mobilidade</h2></div>
      <div class="card quick-card"><div class="metric">30–60</div><p>minutos semanais de aeróbio moderado. Referência do plano: média de 120 bpm e intensidade que deixe você ofegante.</p></div>
      <div class="card quick-card" style="margin-top:10px"><div class="metric">15–30 s</div><p>por alongamento antes de todos os treinos.</p></div>
    </section>`;
}
function renderOpenSession(s) {
  const exs=plan.workouts[s.workout]; const done=exs.filter(ex=>s.exercises[ex[0]]?.done).length; const percent=Math.round(done/exs.length*100);
  return `<button class="card pending-card full" style="text-align:left;margin-bottom:10px" data-action="open-session" data-date="${s.date}" data-workout="${s.workout}"><div class="pending-circle">${s.workout}</div><div style="flex:1"><h3>Treino ${s.workout} em andamento</h3><p>${formatDate(s.date)} · ${done}/${exs.length} exercícios concluídos</p><div class="progress-bar"><i style="width:${percent}%"></i></div></div><strong>›</strong></button>`;
}
function renderWorkoutCard(letter) { const list=plan.workouts[letter]; return `<button class="workout-card" data-action="start-workout" data-workout="${letter}"><span class="letter">${letter}</span><h3>Treino ${letter}</h3><p>${list.length} exercícios · iniciar hoje</p></button>`; }
function renderCalendar() {
  const start = parseDate(plan.cycle.start);
  const end = parseDate(plan.validUntil);
  const count = Math.floor((end - start) / (7 * 86400000)) + 1;
  const weeks = Array.from({ length: count }, (_, index) => {
    const starts = new Date(start.getTime() + index * 7 * 86400000);
    const ends = new Date(starts.getTime() + 6 * 86400000);
    const toISO = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    const period = periodFor(toISO(starts));
    return { number: index + 1, starts: toISO(starts), ends: toISO(ends), period };
  });
  return `<div class="card cycle-list">${weeks.map(w => `<div class="cycle-row ${w.period.type === periodFor(view.date).type && w.period.week === periodFor(view.date).week ? 'current' : ''}"><div class="cycle-number">S${w.number}</div><div class="cycle-info"><strong>${formatDate(w.starts)} – ${formatDate(w.ends)}</strong><span>${w.period.meta.reps} repetições · ${w.period.meta.rest}</span></div><div class="period-chip ${w.period.meta.css}">Tipo ${w.period.type}</div></div>`).join('')}</div>`;
}
function renderWorkouts() { return `<div class="page-header"><button class="back-button" data-nav="home">‹</button><div><h2>Seus treinos</h2><p>Abra um treino ou retome uma sessão.</p></div></div><div class="workout-grid">${Object.keys(plan.workouts).map(letter=>renderWorkoutCard(letter)).join('')}</div><section><div class="section-head"><h2>Como está a semana?</h2></div><div class="card period-card"><div><span class="label">${formatDate(view.date)}</span><h3>${periodFor(view.date).type ? `Tipo ${periodFor(view.date).type}` : 'Sem programação'}</h3><p>${periodFor(view.date).meta ? `${periodFor(view.date).meta.reps} repetições · ${periodFor(view.date).meta.rest}` : 'Altere a data na página inicial.'}</p></div>${periodFor(view.date).meta?`<div class="period-chip ${periodFor(view.date).meta.css}">${periodFor(view.date).meta.reps}</div>`:''}</div></section>`; }
function renderSession() {
  const { workout, date }=view; const session=getSession(date,workout); const exs=plan.workouts[workout]; const p=periodFor(date); const done=exs.filter(ex=>session.exercises[ex[0]]?.done).length; const percent=Math.round(done/exs.length*100);
  return `<div class="page-header"><button class="back-button" data-nav="home">‹</button><div><h2>Treino ${workout}</h2><p>${formatDate(date)} · ${p.type?`Tipo ${p.type}`:'sem tipo definido'}</p></div></div>
  <div class="card training-meta"><div class="meta-pill"><span>Repetições do ciclo</span><b>${p.meta?p.meta.reps:'—'}</b></div><div class="meta-pill"><span>Intervalo</span><b>${p.meta?p.meta.rest:'—'}</b></div><div style="grid-column:1/-1" class="progress-wrap"><div class="progress-label"><span>Progresso da sessão</span><span>${done}/${exs.length}</span></div><div class="progress-bar"><i style="width:${percent}%"></i></div></div></div>
  <section class="exercise-list">${exs.map(ex=>renderExercise(session,ex,date)).join('')}</section>
  <div class="session-actions"><button class="secondary-button" data-action="save-partial">Guardar pendências</button><button class="primary-button" data-action="finish-session">Concluir treino</button></div>`;
}
function renderExercise(session, ex, date) {
  const [code,title,rx,video,note]=ex; const r=session.exercises[code]||{}; const personal=state.personalNotes[code]||''; const prescribed=resolvedPrescription(rx,date); const done=!!r.done;
  return `<article class="card exercise-card ${done?'done':''}" data-exercise-card="${code}"><div class="exercise-top"><input class="checkbox" type="checkbox" data-action="toggle-exercise" data-code="${code}" ${done?'checked':''} aria-label="Concluir ${escapeHtml(title)}"><div><div class="exercise-code">${code}</div><h3 class="exercise-title">${escapeHtml(title)}</h3><p class="exercise-prescription">${escapeHtml(prescribed)}</p></div><a class="video-link" href="${video}" target="_blank" rel="noopener">Vídeo ↗</a></div>${note?`<div class="exercise-note"><strong>Atenção:</strong> ${escapeHtml(note)}</div>`:''}<div class="exercise-controls"><div class="field"><label>Carga</label><input data-action="update-field" data-code="${code}" data-field="load" inputmode="decimal" placeholder="kg" value="${escapeHtml(r.load||'')}"></div><div class="field"><label>Séries feitas</label><input data-action="update-field" data-code="${code}" data-field="sets" inputmode="numeric" placeholder="ex.: 3" value="${escapeHtml(r.sets||'')}"></div><div class="field"><label>Reps feitas</label><input data-action="update-field" data-code="${code}" data-field="reps" inputmode="numeric" placeholder="ex.: 10" value="${escapeHtml(r.reps||'')}"></div></div><details class="details"><summary>Adicionar observação pessoal</summary><div class="field"><label>Lembrete para este exercício</label><textarea data-action="personal-note" data-code="${code}" placeholder="Ex.: base mais aberta, olhar para frente…">${escapeHtml(personal)}</textarea></div></details></article>`;
}
function renderPending() { const list=pendingExercises(); const filtered=view.pendingFilter==='all'?list:list.filter(x=>x.session.workout===view.pendingFilter); return `<div class="page-header"><button class="back-button" data-nav="home">‹</button><div><h2>Pendências</h2><p>Exercícios de sessões que você ainda não concluiu.</p></div></div><div class="filter-row">${['all','A','B','C','D'].map(f=>`<button class="filter ${view.pendingFilter===f?'active':''}" data-action="pending-filter" data-filter="${f}">${f==='all'?'Todos':`Treino ${f}`}</button>`).join('')}</div>${filtered.length?`<section class="exercise-list">${filtered.map(({session,ex,record})=>`<article class="card pending-item"><button class="pending-check" data-action="complete-pending" data-date="${session.date}" data-workout="${session.workout}" data-code="${ex[0]}" title="Marcar como feito">✓</button><div style="flex:1"><h3>${escapeHtml(ex[1])}</h3><p>Treino ${session.workout} · iniciado em ${formatDate(session.date)} · ${escapeHtml(resolvedPrescription(ex[2],session.date))}</p></div><button class="text-button" data-action="open-session" data-date="${session.date}" data-workout="${session.workout}">Abrir</button></article>`).join('')}</section>`:`<section class="card empty"><div class="empty-icon">✓</div><h2>Nada pendente</h2><p>Quando você guardar uma sessão incompleta, os exercícios não concluídos vão aparecer aqui.</p></section>`}`; }
function renderGuide() { return `<div class="page-header"><button class="back-button" data-nav="home">‹</button><div><h2>Guia de execução</h2><p>Lembretes gerais enviados pela personal.</p></div></div><section class="exercise-list">${plan.guides.map(([title,text,icon])=>`<article class="card guide-card"><div class="guide-icon">${icon}</div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`).join('')}</section><section><div class="section-head"><h2>Regras do plano</h2></div><article class="card guide-card"><h3>Repetições e proximidade da falha</h3><p>Acima de 10 repetições: fazer até a falha técnica, exceto em pirâmide crescente. Abaixo de 10: parar entre 1 e 2 repetições antes da falha.</p></article><article class="card guide-card" style="margin-top:10px"><h3>Técnica antes da carga</h3><p>Não sacrificar técnica e amplitude para adicionar carga. Alongamentos e mobilidade prescritos fazem parte do treino.</p></article></section>`; }

function bindEvents() {
  document.querySelectorAll('[data-nav]').forEach(btn=>btn.addEventListener('click',()=>{ view.name=btn.dataset.nav; render(); }));
  document.querySelectorAll('[data-action="set-date"]').forEach(btn=>btn.addEventListener('click',()=>{
    const val=prompt('Qual data você quer consultar? Use AAAA-MM-DD.', view.date); if(val && /^\d{4}-\d{2}-\d{2}$/.test(val)) { view.date=val; state.lastSelectedDate=val; saveState(); render(); }
  }));
  document.querySelectorAll('[data-action="start-workout"]').forEach(btn=>btn.addEventListener('click',()=>{ view.workout=btn.dataset.workout; view.date=view.date||todayISO(); getSession(view.date,view.workout); saveState(); view.name='session'; render(); }));
  document.querySelectorAll('[data-action="open-session"]').forEach(btn=>btn.addEventListener('click',()=>{ view.workout=btn.dataset.workout; view.date=btn.dataset.date; view.name='session'; render(); }));
  document.querySelectorAll('[data-action="toggle-exercise"]').forEach(el=>el.addEventListener('change',()=>{
    const s=getSession(view.date,view.workout); const code=el.dataset.code; s.exercises[code] = { ...(s.exercises[code]||{}), done:el.checked, completedAt:el.checked?Date.now():null }; saveState(); render();
  }));
  document.querySelectorAll('[data-action="update-field"]').forEach(el=>el.addEventListener('input',()=>{
    const s=getSession(view.date,view.workout); const code=el.dataset.code; const field=el.dataset.field; s.exercises[code] = { ...(s.exercises[code]||{}), [field]:el.value }; saveState();
  }));
  document.querySelectorAll('[data-action="personal-note"]').forEach(el=>el.addEventListener('input',()=>{ state.personalNotes[el.dataset.code]=el.value; saveState(); }));
  document.querySelectorAll('[data-action="save-partial"]').forEach(btn=>btn.addEventListener('click',()=>{ const s=getSession(view.date,view.workout); s.status='partial'; s.partialAt=Date.now(); saveState(); showToast('Sessão salva. O que faltou foi para Pendências.'); setTimeout(()=>{ view.name='home'; render(); }, 450); }));
  document.querySelectorAll('[data-action="finish-session"]').forEach(btn=>btn.addEventListener('click',()=>{ const s=getSession(view.date,view.workout); const exs=plan.workouts[view.workout]; const missing=exs.filter(ex=>!s.exercises[ex[0]]?.done).length; if(missing && !confirm(`Ainda há ${missing} exercício${missing>1?'s':''} sem marcar. Quer concluir mesmo assim? Eles irão para Pendências.`)) return; s.status=missing?'partial':'completed'; s.endedAt=Date.now(); saveState(); showToast(missing?'Treino salvo com pendências.':'Treino concluído! Muito bem.'); setTimeout(()=>{view.name='home';render()}, 450); }));
  document.querySelectorAll('[data-action="pending-filter"]').forEach(btn=>btn.addEventListener('click',()=>{ view.pendingFilter=btn.dataset.filter; render(); }));
  document.querySelectorAll('[data-action="complete-pending"]').forEach(btn=>btn.addEventListener('click',()=>{ const s=getSession(btn.dataset.date,btn.dataset.workout,false); const code=btn.dataset.code; s.exercises[code] = { ...(s.exercises[code]||{}), done:true, completedAt:Date.now() }; const exs=plan.workouts[s.workout]; if(exs.every(ex=>s.exercises[ex[0]]?.done)) s.status='completed'; saveState(); showToast('Exercício marcado como concluído.'); render(); }));
  document.getElementById('resetBtn').addEventListener('click',()=>{ if(confirm('Isso vai apagar todos os registros de teste salvos neste navegador. Continuar?')) { state=defaultState(); saveState(); view={name:'home',workout:null,date:todayISO(),pendingFilter:'all'}; render(); showToast('Dados de teste apagados.'); } });
}
if ('serviceWorker' in navigator && location.protocol !== 'file:') { window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{})); }
render();
