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
    types: ['02', '02', '01', '01']
  },
  workouts: {
    A: [
      ['A1','Dead bug','3 x 12','https://www.youtube.com/shorts/HrxOWhPdsOY','Fazer com cadência: 3 s na subida e 3 s na descida.'],
      ['A2','Abd. suspenso','3 x 10','https://www.youtube.com/shorts/Z4h2aIJGzFA',''],
      ['A3','Puxada frontal · pegada neutra','3 x periodização','https://www.youtube.com/watch?v=tZSw0Y0R3jw&list=PL6KmC8RDDr9_mUmUHRmqlYfeWOvdx5UQj&index=53','Sequência de ativações.'],
      ['A4','Remada sentada · pegada pronada','4 x periodização','https://www.youtube.com/watch?v=qw4FCBAA8DE&list=PL6KmC8RDDr9_mUmUHRmqlYfeWOvdx5UQj&index=31','Primeiro retrair as escápulas; depois puxar o peso.'],
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
let timerHandle = null;

function defaultState() {
  return { sessions: {}, personalNotes: {}, lastSelectedDate: todayISO() };
}
function loadState() {
  try { return { ...defaultState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') }; }
  catch { return defaultState(); }
}
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function todayISO() {
  const d = new Date();
  const offset = d.getTimezoneOffset();
  return new Date(d.getTime() - offset * 60000).toISOString().slice(0, 10);
}
function parseDate(dateString) {
  const [y,m,d] = dateString.split('-').map(Number);
  return new Date(y, m - 1, d, 12);
}
function formatDate(dateString) {
  return parseDate(dateString).toLocaleDateString('pt-BR', { day:'2-digit', month:'short', year:'numeric' }).replace('.', '');
}
function formatShortDate(dateString) {
  return parseDate(dateString).toLocaleDateString('pt-BR', { day:'2-digit', month:'2-digit' });
}
function dayDiff(fromDate, toDate) {
  return Math.floor((parseDate(toDate) - parseDate(fromDate)) / 86400000);
}
function escapeHtml(value='') {
  return String(value).replace(/[&<>'"]/g, ch => ({ '&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;' }[ch]));
}
function clamp(num, min, max) { return Math.min(Math.max(num, min), max); }
function formatDuration(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}
function periodFor(dateString) {
  const cycleStart = plan.cycle.start;
  const daysSinceStart = dayDiff(cycleStart, dateString);
  if (daysSinceStart < 0) return { type: null, week: null, meta: null, starts: null, ends: null };
  const weekIndex = Math.floor(daysSinceStart / 7);
  const type = plan.cycle.types[weekIndex % plan.cycle.types.length];
  const starts = new Date(parseDate(cycleStart).getTime() + weekIndex * 7 * 86400000);
  const ends = new Date(starts.getTime() + 6 * 86400000);
  const toISO = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  return { type, week: weekIndex + 1, meta: plan.periodization[type], starts: toISO(starts), ends: toISO(ends) };
}
function isPeriodized(raw='') { return raw.toLowerCase().includes('periodização'); }
function resolvedPrescription(raw, dateString) {
  const period = periodFor(dateString);
  if (!isPeriodized(raw)) return raw;
  return `${raw.replace('periodização', `${period.meta.reps} reps`)} · Tipo ${period.type}`;
}
function periodizedCount(workout) { return plan.workouts[workout].filter(ex => isPeriodized(ex[2])).length; }
function getSessionKey(date, workout) { return `${date}_${workout}`; }
function getSession(date, workout, create=false) {
  const key = getSessionKey(date, workout);
  if (!state.sessions[key] && create) {
    state.sessions[key] = {
      key, date, workout, status: 'started', startedAt: Date.now(), endedAt: null,
      currentIndex: 0, exercises: {}
    };
  }
  return state.sessions[key] || null;
}
function activeSession() {
  return Object.values(state.sessions).find(s => s.status === 'started') || null;
}
function pendingExercises() {
  const all = [];
  for (const session of Object.values(state.sessions)) {
    if (!['started', 'partial'].includes(session.status)) continue;
    for (const ex of plan.workouts[session.workout]) {
      const record = session.exercises[ex[0]] || {};
      if (!record.done) all.push({ session, ex, record });
    }
  }
  return all;
}
function completedSessionsThisMonth() {
  const now = todayISO().slice(0, 7);
  return Object.values(state.sessions).filter(s => s.status === 'completed' && s.date.startsWith(now)).length;
}
function totalWorkoutCount() {
  return Object.values(state.sessions).filter(s => s.status === 'completed').length;
}
function showToast(message) {
  const t = document.getElementById('toast');
  t.textContent = message;
  t.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => t.classList.remove('show'), 2400);
}
function navActive() {
  document.querySelectorAll('[data-nav]').forEach(b => b.classList.toggle('active', b.dataset.nav === view.name));
}
function renderWorkoutCard(letter) {
  const exs = plan.workouts[letter];
  return `<button class="workout-card" data-action="open-workout" data-workout="${letter}">
    <span class="letter">${letter}</span>
    <h3>Treino ${letter}</h3>
    <p>${exs.length} exercícios</p>
    <div class="mini-tags">
      <span class="mini-tag">${periodizedCount(letter)} ondulatórios</span>
      <span class="mini-tag alt">${exs.length - periodizedCount(letter)} fixos</span>
    </div>
  </button>`;
}
function workoutFocus(letter) {
  return ({ A:'costas, peitoral e tríceps', B:'glúteos e posteriores', C:'ombros, costas e braços', D:'membros inferiores' })[letter] || 'treino';
}
function renderHome() {
  const p = periodFor(view.date);
  const pending = pendingExercises();
  const active = activeSession();
  return `
    <section class="card hero">
      <p class="small">SEMANA ${p.week || '—'} · ${p.starts ? `${formatShortDate(p.starts)} a ${formatShortDate(p.ends)}` : ''}</p>
      <h2>Tipo ${p.type || '—'}</h2>
      <p>${p.meta ? `${p.meta.reps} repetições e ${p.meta.rest} de intervalo.` : 'Sem período cadastrado para a data selecionada.'}</p>
      <div class="pill-row">
        <span class="pill">↕ ${p.type === '01' ? 'Ondulatória em Tipo 01' : 'Ondulatória em Tipo 02'}</span>
        <span class="pill">Válido até ${formatShortDate(plan.validUntil)}</span>
      </div>
      <div class="hero-actions">
        <button class="secondary-button" data-nav="workouts">Ver treinos</button>
        <button class="secondary-button" data-action="set-date">Trocar data</button>
      </div>
    </section>

    ${active ? `<section><div class="section-head"><h2>Treino em andamento</h2></div><div class="card active-session-card"><div><h3>Treino ${active.workout}</h3><p>Começou às ${new Date(active.startedAt).toLocaleTimeString('pt-BR',{hour:'2-digit', minute:'2-digit'})} · ${plan.workouts[active.workout].filter(ex => active.exercises[ex[0]]?.done).length}/${plan.workouts[active.workout].length} concluídos</p></div><button class="primary-button" data-action="resume-session" data-date="${active.date}" data-workout="${active.workout}">Retomar</button></div></section>` : ''}

    <section>
      <div class="section-head"><h2>Seu painel</h2></div>
      <div class="quick-grid">
        <article class="card quick-card"><div class="metric">${completedSessionsThisMonth()}</div><p>treinos concluídos neste mês</p></article>
        <article class="card quick-card"><div class="metric">${pending.length}</div><p>exercícios pendentes aguardando conclusão</p></article>
        <article class="card quick-card"><div class="metric">${totalWorkoutCount()}</div><p>sessões concluídas desde o início do app</p></article>
        <article class="card quick-card"><div class="metric">${Object.keys(plan.workouts).length}</div><p>treinos ativos no seu plano atual</p></article>
      </div>
    </section>

    <section>
      <div class="section-head"><h2>Treinos</h2><button class="text-button" data-nav="workouts">Ver todos</button></div>
      <div class="workout-grid">${Object.keys(plan.workouts).map(renderWorkoutCard).join('')}</div>
    </section>

    <section>
      <div class="section-head"><h2>Pendências</h2></div>
      ${pending.length ? `<div class="card pending-card"><div class="pending-circle">◷</div><div><h3>${pending.length} exercício${pending.length > 1 ? 's' : ''} aguardando conclusão</h3><p>Os exercícios não concluídos continuam salvos para você retomar depois.</p><div class="inline-actions"><button class="primary-button" data-nav="pending">Abrir pendências</button></div></div></div>` : `<div class="card empty"><div class="empty-icon">✓</div><h2>Nada pendente</h2><p>Quando você salvar um treino parcialmente concluído, os exercícios que faltaram aparecem aqui.</p></div>`}
    </section>`;
}
function renderWorkouts() {
  return `<div class="page-header"><button class="back-button" data-nav="home">‹</button><div><h2>Seus treinos</h2><p>Abra qualquer treino para consultar. Ele só começa quando você tocar em “Começar treino”.</p></div></div><div class="workout-grid">${Object.keys(plan.workouts).map(renderWorkoutCard).join('')}</div>`;
}
function renderWorkoutDetail() {
  const workout = view.workout;
  const exs = plan.workouts[workout];
  const p = periodFor(view.date);
  const session = getSession(view.date, workout, false);
  return `
    <div class="page-header"><button class="back-button" data-nav="workouts">‹</button><div><h2>Treino ${workout}</h2><p>${workoutFocus(workout)} · ${exs.length} exercícios</p></div></div>
    <article class="card overview-card">
      <div class="badge-row"><span class="badge periodic ${p.meta.css}">↕ Tipo ${p.type} · ${p.meta.reps} reps</span><span class="badge fixed">${periodizedCount(workout)} exercícios ondulatórios</span></div>
      <div class="overview-grid">
        <div class="meta-box"><span>Faixa da semana</span><b>${p.meta.reps} repetições</b></div>
        <div class="meta-box"><span>Intervalo</span><b>${p.meta.rest}</b></div>
      </div>
      <div class="inline-actions">
        ${session && session.status === 'started' ? `<button class="primary-button" data-action="resume-session" data-date="${session.date}" data-workout="${session.workout}">Retomar treino</button>` : `<button class="primary-button" data-action="start-workout" data-workout="${workout}">Começar treino</button>`}
        <button class="ghost-button" data-action="set-date">Mudar data</button>
      </div>
      <div class="exercise-summary-list">
        ${exs.map(ex => renderExerciseSummary(ex, view.date)).join('')}
      </div>
    </article>`;
}
function renderExerciseSummary(ex, dateString) {
  const [code, title, rx, , note] = ex;
  const periodic = isPeriodized(rx);
  const period = periodFor(dateString);
  return `<div class="exercise-row"><div class="exercise-row-top"><div><div class="exercise-code">${code}</div><h3 class="exercise-title">${escapeHtml(title)}</h3></div><div class="badge-row">${periodic ? `<span class="badge periodic ${period.meta.css}">↕ ONDULATÓRIO</span>` : `<span class="badge fixed">fixo</span>`}</div></div><p class="exercise-prescription">${escapeHtml(resolvedPrescription(rx, dateString))}</p>${note ? `<div class="exercise-note"><strong>Atenção:</strong> ${escapeHtml(note)}</div>` : ''}</div>`;
}
function renderSession() {
  const workout = view.workout;
  const session = getSession(view.date, workout, false);
  if (!session) {
    view.name = 'workoutDetail';
    return renderWorkoutDetail();
  }
  const exs = plan.workouts[workout];
  session.currentIndex = clamp(session.currentIndex || 0, 0, exs.length - 1);
  const current = exs[session.currentIndex];
  const [code, title, rx, video, note] = current;
  const record = session.exercises[code] || {};
  const personal = state.personalNotes[code] || '';
  const doneCount = exs.filter(ex => session.exercises[ex[0]]?.done).length;
  const percent = Math.round(doneCount / exs.length * 100);
  const periodic = isPeriodized(rx);
  const p = periodFor(session.date);
  return `
    <div class="page-header"><button class="back-button" data-action="back-to-workout">‹</button><div><h2>Treino ${workout}</h2><p>Sessão de ${formatDate(session.date)}</p></div></div>
    <div class="session-frame">
      <article class="card session-top-card">
        <div class="session-header-row">
          <div><h3>Em andamento</h3><p>${doneCount}/${exs.length} exercícios concluídos</p></div>
          <div class="timer-pill"><span>tempo</span><b id="sessionTimer">${formatDuration(Date.now() - session.startedAt)}</b></div>
        </div>
        <div class="progress-wrap"><div class="progress-label"><span>Progresso</span><span>${percent}%</span></div><div class="progress-bar"><i style="width:${percent}%"></i></div></div>
      </article>

      <div class="exercise-pager">${exs.map((ex, idx) => {
        const isDone = !!session.exercises[ex[0]]?.done;
        const currentClass = idx === session.currentIndex ? 'current' : (isDone ? 'done' : '');
        return `<button class="exercise-dot ${currentClass}" data-action="jump-ex" data-index="${idx}">${idx + 1}</button>`;
      }).join('')}</div>

      <article class="card current-exercise-card">
        <div class="badge-row">
          <span class="badge ${periodic ? `periodic ${p.meta.css}` : 'fixed'}">${periodic ? `↕ ONDULATÓRIO · Tipo ${p.type}` : 'fixo'}</span>
          ${record.done ? '<span class="badge done">concluído</span>' : ''}
        </div>
        <p class="exercise-code">${code} · Exercício ${session.currentIndex + 1} de ${exs.length}</p>
        <h3 class="big-title">${escapeHtml(title)}</h3>
        <p class="subline">${escapeHtml(resolvedPrescription(rx, session.date))}</p>
        ${note ? `<div class="exercise-note"><strong>Atenção:</strong> ${escapeHtml(note)}</div>` : ''}
        <div class="inline-actions"><a class="secondary-button" href="${video}" target="_blank" rel="noopener">Ver vídeo ↗</a><button class="ghost-button" data-action="toggle-done" data-code="${code}">${record.done ? 'Desmarcar' : 'Marcar como feito'}</button></div>
        <div class="field-grid">
          <div class="field"><label>Carga</label><input data-action="update-field" data-code="${code}" data-field="load" inputmode="decimal" placeholder="kg" value="${escapeHtml(record.load || '')}"></div>
          <div class="field"><label>Séries</label><input data-action="update-field" data-code="${code}" data-field="sets" inputmode="numeric" placeholder="3" value="${escapeHtml(record.sets || '')}"></div>
          <div class="field"><label>Reps</label><input data-action="update-field" data-code="${code}" data-field="reps" inputmode="numeric" placeholder="10" value="${escapeHtml(record.reps || '')}"></div>
        </div>
        <div class="field" style="margin-top:12px"><label>Observação pessoal</label><textarea data-action="personal-note" data-code="${code}" placeholder="Ex.: base mais aberta, não perder o bracing…">${escapeHtml(personal)}</textarea></div>
        <div class="nav-stepper"><button class="small-nav" data-action="prev-ex">‹</button><p class="small-note">Use as setas para navegar exercício por exercício, sem ficar rolando a página inteira.</p><button class="small-nav" data-action="next-ex">›</button></div>
      </article>

      <div class="session-actions"><button class="secondary-button" data-action="save-partial">Guardar pendências</button><button class="primary-button" data-action="finish-session">Concluir treino</button></div>
    </div>`;
}
function renderPending() {
  const list = pendingExercises();
  const filtered = view.pendingFilter === 'all' ? list : list.filter(x => x.session.workout === view.pendingFilter);
  return `<div class="page-header"><button class="back-button" data-nav="home">‹</button><div><h2>Pendências</h2><p>Exercícios de sessões que ainda não foram concluídos.</p></div></div><div class="filter-row">${['all','A','B','C','D'].map(f => `<button class="filter ${view.pendingFilter === f ? 'active' : ''}" data-action="pending-filter" data-filter="${f}">${f === 'all' ? 'Todos' : `Treino ${f}`}</button>`).join('')}</div>${filtered.length ? `<section class="exercise-summary-list">${filtered.map(({session, ex}) => `<article class="card pending-item"><button class="pending-check" data-action="complete-pending" data-date="${session.date}" data-workout="${session.workout}" data-code="${ex[0]}">✓</button><div style="flex:1"><h3>${escapeHtml(ex[1])}</h3><p>Treino ${session.workout} · iniciado em ${formatDate(session.date)} · ${escapeHtml(resolvedPrescription(ex[2], session.date))}</p></div><button class="text-button" data-action="resume-partial" data-date="${session.date}" data-workout="${session.workout}">Abrir</button></article>`).join('')}</section>` : `<section class="card empty"><div class="empty-icon">✓</div><h2>Nada pendente</h2><p>Os exercícios incompletos ficarão listados aqui quando você guardar um treino pela metade.</p></section>`}`;
}
function renderGuide() {
  return `<div class="page-header"><button class="back-button" data-nav="home">‹</button><div><h2>Guia de execução</h2><p>Lembretes gerais enviados pela sua personal.</p></div></div><section class="exercise-summary-list">${plan.guides.map(([title,text,icon]) => `<article class="card guide-card"><div class="guide-icon">${icon}</div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`).join('')}</section>`;
}
function render() {
  clearInterval(timerHandle);
  const app = document.getElementById('app');
  if (view.name === 'home') app.innerHTML = renderHome();
  else if (view.name === 'workouts') app.innerHTML = renderWorkouts();
  else if (view.name === 'workoutDetail') app.innerHTML = renderWorkoutDetail();
  else if (view.name === 'session') app.innerHTML = renderSession();
  else if (view.name === 'pending') app.innerHTML = renderPending();
  else if (view.name === 'guide') app.innerHTML = renderGuide();
  navActive();
  bindEvents();
  initTimer();
}
function initTimer() {
  if (view.name !== 'session') return;
  const session = getSession(view.date, view.workout, false);
  const el = document.getElementById('sessionTimer');
  if (!session || !el) return;
  const update = () => { el.textContent = formatDuration((session.endedAt || Date.now()) - session.startedAt); };
  update();
  timerHandle = setInterval(update, 1000);
}
function bindEvents() {
  document.querySelectorAll('[data-nav]').forEach(btn => btn.addEventListener('click', () => {
    view.name = btn.dataset.nav;
    render();
  }));
  document.querySelectorAll('[data-action="set-date"]').forEach(btn => btn.addEventListener('click', () => {
    const val = prompt('Qual data você quer consultar? Use AAAA-MM-DD.', view.date);
    if (val && /^\d{4}-\d{2}-\d{2}$/.test(val)) {
      view.date = val;
      state.lastSelectedDate = val;
      saveState();
      render();
    }
  }));
  document.querySelectorAll('[data-action="open-workout"]').forEach(btn => btn.addEventListener('click', () => {
    view.workout = btn.dataset.workout;
    view.name = 'workoutDetail';
    render();
  }));
  document.querySelectorAll('[data-action="back-to-workout"]').forEach(btn => btn.addEventListener('click', () => {
    view.name = 'workoutDetail';
    render();
  }));
  document.querySelectorAll('[data-action="start-workout"]').forEach(btn => btn.addEventListener('click', () => {
    view.workout = btn.dataset.workout;
    getSession(view.date, view.workout, true);
    view.name = 'session';
    saveState();
    showToast('Treino iniciado. Bom treino!');
    render();
  }));
  document.querySelectorAll('[data-action="resume-session"],[data-action="resume-partial"]').forEach(btn => btn.addEventListener('click', () => {
    view.workout = btn.dataset.workout;
    view.date = btn.dataset.date;
    const s = getSession(view.date, view.workout, false);
    if (s && s.status === 'partial') s.status = 'started';
    saveState();
    view.name = 'session';
    render();
  }));
  document.querySelectorAll('[data-action="jump-ex"]').forEach(btn => btn.addEventListener('click', () => {
    const s = getSession(view.date, view.workout, false);
    if (!s) return;
    s.currentIndex = Number(btn.dataset.index);
    saveState();
    render();
  }));
  document.querySelectorAll('[data-action="prev-ex"]').forEach(btn => btn.addEventListener('click', () => {
    const s = getSession(view.date, view.workout, false);
    if (!s) return;
    s.currentIndex = clamp((s.currentIndex || 0) - 1, 0, plan.workouts[s.workout].length - 1);
    saveState();
    render();
  }));
  document.querySelectorAll('[data-action="next-ex"]').forEach(btn => btn.addEventListener('click', () => {
    const s = getSession(view.date, view.workout, false);
    if (!s) return;
    s.currentIndex = clamp((s.currentIndex || 0) + 1, 0, plan.workouts[s.workout].length - 1);
    saveState();
    render();
  }));
  document.querySelectorAll('[data-action="toggle-done"]').forEach(btn => btn.addEventListener('click', () => {
    const s = getSession(view.date, view.workout, false);
    if (!s) return;
    const code = btn.dataset.code;
    const current = s.exercises[code] || {};
    s.exercises[code] = { ...current, done: !current.done, completedAt: !current.done ? Date.now() : null };
    saveState();
    showToast(s.exercises[code].done ? 'Exercício marcado como concluído.' : 'Exercício desmarcado.');
    render();
  }));
  document.querySelectorAll('[data-action="update-field"]').forEach(el => el.addEventListener('input', () => {
    const s = getSession(view.date, view.workout, false);
    if (!s) return;
    const code = el.dataset.code;
    const field = el.dataset.field;
    s.exercises[code] = { ...(s.exercises[code] || {}), [field]: el.value };
    saveState();
  }));
  document.querySelectorAll('[data-action="personal-note"]').forEach(el => el.addEventListener('input', () => {
    state.personalNotes[el.dataset.code] = el.value;
    saveState();
  }));
  document.querySelectorAll('[data-action="save-partial"]').forEach(btn => btn.addEventListener('click', () => {
    const s = getSession(view.date, view.workout, false);
    if (!s) return;
    s.status = 'partial';
    s.endedAt = Date.now();
    saveState();
    showToast('Treino guardado. O que faltou foi para Pendências.');
    view.name = 'home';
    render();
  }));
  document.querySelectorAll('[data-action="finish-session"]').forEach(btn => btn.addEventListener('click', () => {
    const s = getSession(view.date, view.workout, false);
    if (!s) return;
    const exs = plan.workouts[s.workout];
    const missing = exs.filter(ex => !s.exercises[ex[0]]?.done).length;
    if (missing && !confirm(`Ainda há ${missing} exercício${missing > 1 ? 's' : ''} sem marcar. Quer concluir mesmo assim? Eles irão para Pendências.`)) return;
    s.status = missing ? 'partial' : 'completed';
    s.endedAt = Date.now();
    saveState();
    showToast(missing ? 'Treino salvo com pendências.' : 'Treino concluído!');
    view.name = 'home';
    render();
  }));
  document.querySelectorAll('[data-action="pending-filter"]').forEach(btn => btn.addEventListener('click', () => {
    view.pendingFilter = btn.dataset.filter;
    render();
  }));
  document.querySelectorAll('[data-action="complete-pending"]').forEach(btn => btn.addEventListener('click', () => {
    const s = getSession(btn.dataset.date, btn.dataset.workout, false);
    if (!s) return;
    const code = btn.dataset.code;
    s.exercises[code] = { ...(s.exercises[code] || {}), done: true, completedAt: Date.now() };
    const exs = plan.workouts[s.workout];
    if (exs.every(ex => s.exercises[ex[0]]?.done)) s.status = 'completed';
    saveState();
    showToast('Exercício marcado como concluído.');
    render();
  }));
  const resetBtn = document.getElementById('resetBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Isso vai apagar os registros de teste desta versão no navegador. Continuar?')) {
        state = defaultState();
        saveState();
        view = { name: 'home', workout: null, date: todayISO(), pendingFilter: 'all' };
        render();
        showToast('Dados de teste apagados.');
      }
    });
  }
}
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
render();
