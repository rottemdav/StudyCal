(() => {
  'use strict';
  // Keep the existing storage key so renaming preserves saved material and progress.
  const KEY = 'theorem-garden-v1';
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const uid = () => crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2);
  const icons = {
    spark:'<path d="m10 2 2.4 6.6L19 11l-6.6 2.4L10 20l-2.4-6.6L1 11l6.6-2.4L10 2Z"/><path d="m18 2 .8 2.2L21 5l-2.2.8L18 8l-.8-2.2L15 5l2.2-.8Z"/>',
    map:'<rect x="8" y="1" width="6" height="5" rx="1"/><rect x="1" y="15" width="6" height="5" rx="1"/><rect x="15" y="15" width="6" height="5" rx="1"/><path d="M11 6v4H4v5m7-5h7v5"/>',
    book:'<path d="M11 5C7 2 3 3 1 4v15c3-1.5 6-1 10 1m0-15c4-3 8-2 10-1v15c-3-1.5-6-1-10 1V5Z"/>',
    settings:'<path d="m8 2 1-1h4l1 3 3 1 3-1 2 4-2 2v3l2 2-2 4-3-1-3 1-1 3H9l-1-3-3-1-3 1-2-4 2-2v-3L0 8l2-4 3 1 3-1Z" transform="translate(1 0) scale(.9)"/><circle cx="11" cy="11" r="3"/>',
    download:'<path d="M11 2v12m-4-4 4 4 4-4M3 15v5h16v-5"/>',
    search:'<circle cx="9" cy="9" r="6"/><path d="m14 14 6 6"/>',
    edit:'<path d="m14 3 4 4L7 18l-5 1 1-5L14 3Zm-1 1 4 4M11 20h9"/>',
    check:'<path d="m4 11 5 5L19 5"/>',
    info:'<circle cx="11" cy="11" r="9"/><path d="M11 10v6m0-10v.1"/>',
    leaf:'<path d="M5 18C-1 6 10 1 20 2c0 10-4 19-13 15M3 21 15 7"/>'
  };
  function hydrate(root=document) {
    $$('[data-icon]', root).forEach(el => {el.innerHTML = `<svg aria-hidden="true" viewBox="0 0 22 22">${icons[el.dataset.icon] || ''}</svg>`;});
    $$('.math',root).forEach(el => {
      const raw = el.textContent;
      try { if(window.katex) window.katex.render(raw,el,{throwOnError:true,displayMode:el.dataset.display!=='inline',strict:'ignore',trust:false}); }
      catch {el.textContent=raw;el.title='הנוסחה מוצגת כטקסט. יש לבדוק את תחביר הנוסחה בעורך.';}
    });
  }
  let state, storageAvailable=true, initialWarning='';
  function validate(data) {
    if(!data || data.version !== 1 || !Array.isArray(data.courses) || !Array.isArray(data.items) || !data.courses.length || data.courses.length>100 || data.items.length>5000) throw Error('יש לבחור קובץ גיבוי של Memorizer בגרסה 1, הכולל לפחות קורס אחד.');
    const courseIds=new Set(),itemIds=new Set();
    data.courses.forEach(c=>{if(!c || typeof c.id!=='string' || typeof c.name!=='string' || !c.name.trim() || courseIds.has(c.id))throw Error('הגיבוי כולל קורס לא תקין או כפול.');courseIds.add(c.id);});
    const types=['Theorem','Claim','Formula','Definition'];
    data.items.forEach(i=>{
      if(!i || typeof i.id!=='string' || itemIds.has(i.id) || !courseIds.has(i.course) || !types.includes(i.type) || !Array.isArray(i.links) || !i.links.every(l=>typeof l==='string') || ['title','topic','statement','formula','question','explanation'].some(k=>typeof i[k]!=='string') || !i.title.trim() || (!i.statement.trim()&&!(i.propertiesEnabled&&i.properties?.length))) throw Error('באחד מפריטי החומר חסרים שדות חובה או שהקורס שלו אינו תקין.');
      if((i.propertiesEnabled!==undefined&&typeof i.propertiesEnabled!=='boolean')||(i.properties!==undefined&&(!Array.isArray(i.properties)||i.properties.length>100||i.properties.some(p=>typeof p!=='string'||!p.trim()||p.length>10000)))||(i.propertiesEnabled&&!i.properties?.length))throw Error('רשימת התכונות אינה תקינה.');
      if(!Array.isArray(i.choices) || i.choices.length!==4 || !i.choices.every(c=>typeof c==='string') || !Number.isInteger(i.answer) || i.answer<0 || i.answer>3 || (i.question.trim() && i.choices.some(c=>!c.trim())))throw Error('לכל שאלת תרגול נדרשות ארבע אפשרויות ותשובה נכונה תקינה.');
      itemIds.add(i.id);
    });
    data.items.forEach(i=>{if(i.links.some(id=>id===i.id || !data.items.some(j=>j.id===id && j.course===i.course)))throw Error('אחד הקשרים מפנה לפריט חסר או לפריט מקורס אחר.');});
    const progress={};
    for(const [id,p] of Object.entries(data.progress||{})){
      if(!itemIds.has(id))continue;
      if(!p || !Number.isInteger(p.attempts) || !Number.isInteger(p.correct) || p.attempts<0 || p.correct<0 || p.correct>p.attempts || typeof p.lastCorrect!=='boolean' || !Number.isFinite(p.lastSeen))throw Error('נתוני ההתקדמות בתרגול אינם תקינים.');
      progress[id]={attempts:p.attempts,correct:p.correct,lastCorrect:p.lastCorrect,lastSeen:p.lastSeen};
    }
    const normalized = window.addConditionalContent(window.localizeExamples({version:1,courses:data.courses.map(c=>({id:c.id,name:c.name,demo:!!c.demo})),items:data.items.map(i=>({...i,links:[...new Set(i.links)]})),progress,sessions:[],contentPacks:Object.fromEntries(Object.entries(data.contentPacks||{}).filter(([,v])=>Number.isInteger(v)&&v>=0)),selectedCourse:courseIds.has(data.selectedCourse)?data.selectedCourse:data.courses[0].id}));
    window.removeRetiredGaussianCards(normalized);
    return normalized;
  }
  let retiredCardsRemoved = false;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      state = validate(saved);
      const remainingIds = new Set(state.items.map(item => item.id));
      retiredCardsRemoved = saved.items.some(item => !remainingIds.has(item.id));
    } else {
      state = structuredClone(window.SEED);
    }
  } catch {
    state = structuredClone(window.SEED);
    initialWarning = 'לא ניתן לקרוא את הנתונים השמורים. מוצג חומר לדוגמה. אפשר לייבא גיבוי כדי לשחזר את החומרים שלך.';
  }
  state = window.addConditionalContent(state);
  let unitFilter='conditional-moments';
  let view=['practice','map','material'].includes(location.hash.slice(1))?location.hash.slice(1):'practice';
  let mode='mixed',session=null,filter='All',search='',selectedId='',editingId=null,toastTimer;
  const course = () => state.courses.find(c=>c.id===state.selectedCourse) || state.courses[0];
  const courseItems = () => state.items.filter(i=>i.course===course().id);
  const selectedUnit = () => window.signalsUnitFor(unitFilter);
  const items = () => courseItems().filter(i=>course().id!=='signals'||unitFilter==='all'||(i.unit===selectedUnit()&&(window.SIGNAL_UNITS[unitFilter]||i.topic===unitFilter)));
  const quizItems = () => items().filter(i=>i.question.trim());
  const weakItems = () => quizItems().filter(i=>state.progress[i.id] && !state.progress[i.id].lastCorrect);
  const isLearned = i => state.progress[i.id]?.lastCorrect && state.progress[i.id].correct>=2;
  const math = f => f?`<div class="formula"><div class="math">${esc(f)}</div></div>`:'';
  // Escape prose and math separately; user-entered HTML is never interpreted.
  function materialText(value) {
    const text=String(value??'');
    const escapedAt=index=>{let count=0;while(index>0&&text[--index]==='\\')count++;return count%2===1;};
    const openings=/\$\$|\$|\\\(|\\\[/g;
    let html='',cursor=0,match;
    while((match=openings.exec(text))){
      const start=match.index,open=match[0];
      if(escapedAt(start))continue;
      const close=({'\\(':'\\)','\\[':'\\]'})[open]||open;
      let end=text.indexOf(close,start+open.length);
      while(end!==-1&&(escapedAt(end)||(open==='$'&&(text[end-1]==='$'||text[end+1]==='$'))))end=text.indexOf(close,end+close.length);
      if(end===-1)continue;
      const raw=text.slice(start+open.length,end);
      if(!raw.trim())continue;
      const display=open==='$$'||open==='\\[';
      html+=esc(text.slice(cursor,start))+`<span class="math statement-math${display?' statement-math-block':''}" data-display="${display?'block':'inline'}" dir="ltr">${esc(raw)}</span>`;
      cursor=end+close.length;openings.lastIndex=cursor;
    }
    return html+esc(text.slice(cursor));
  }
  const typeLabel = t => ({Theorem:'משפט',Claim:'טענה',Formula:'נוסחה',Definition:'הגדרה'}[t] || t);
  const propertyList = i => i.propertiesEnabled&&i.properties?.length?`<ol class="material-properties">${i.properties.map(p=>`<li dir="auto">${materialText(p)}</li>`).join('')}</ol>`:'';
  function propertyRow(value='') {
    return `<div class="property-row"><label>תכונה <span class="property-number"></span><textarea name="property" rows="2" maxlength="10000" dir="auto">${esc(value)}</textarea></label><button type="button" class="icon-button" data-action="remove-property" aria-label="הסרת תכונה">×</button></div>`;
  }
  function updatePropertyEditor(){
    const enabled=$('#properties-enabled').checked;
    $('#properties-editor').hidden=!enabled;
    $('#editor-fields textarea[name="statement"]').required=!enabled;
    $$('#property-rows .property-row').forEach((row,index)=>{$('.property-number',row).textContent=index+1;$('textarea',row).required=enabled;});
  }
  const sourceInfo = i => {
    if(!Array.isArray(i.sources)||!i.sources.length)return '';
    const origin={direct:'מתוך התרגול',derived:'נגזר מהתרגול',supplement:'נוסחת השלמה',edited:'נערך'}[i.origin]||'מקור';
    return `<details class="source-info"><summary>מקור · ${origin}</summary>${i.sources.map(s=>`<div class="source-entry"><span class="source-file" dir="ltr">${esc(s.file)}</span><span>עמ׳ ${esc(Array.isArray(s.pages)?s.pages.join(', '):'')} · ${esc(s.section)}</span></div>`).join('')}</details>`;
  };
  const typeSymbol = t => ({Theorem:'∴',Claim:'⊢',Formula:'ƒ',Definition:'≔'}[t] || '∴');
  function toast(msg){$('#toast').textContent=msg;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),4000);}
  function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch{storageAvailable=false;toast('האחסון בדפדפן אינו זמין או מלא. יש לייצא גיבוי כדי לשמור את השינויים.');}if(!storageAvailable){$('.sidebar-bottom').innerHTML='<span class="status-dot"></span> השינויים לא נשמרו';}}
  function courseControl(){
    const topics=[...new Set(courseItems().filter(i=>i.unit==='conditional-moments').map(i=>i.topic))];
    const unit=course().id==='signals'?`<select id="unit-select" class="course-select unit-select" aria-label="יחידת לימוד">${Object.entries(window.SIGNAL_UNITS).map(([id,label])=>`<option value="${esc(id)}" ${unitFilter===id?'selected':''}>${esc(label)}</option>`).join('')}${topics.map(t=>`<option value="${esc(t)}" ${unitFilter===t?'selected':''}>${esc(t)}</option>`).join('')}<option value="all" ${unitFilter==='all'?'selected':''}>כל חומר הקורס</option></select>`:'';
    return `<div class="course-control"><label class="sr-only" for="course-select">בחירת קורס</label><select id="course-select" class="course-select">${state.courses.map(c=>`<option value="${esc(c.id)}" ${c.id===course().id?'selected':''}>${esc(c.name)}</option>`).join('')}</select><button class="icon-button" data-action="new-course" aria-label="יצירת קורס" title="יצירת קורס">+</button>${unit}</div>`;
  }
  function heading(title){return `<div class="page-heading"><h1>${title}</h1>${courseControl()}</div>`;}
  function demoNotice(){return course().demo?'<p class="demo-notice">חומר לדוגמה</p>':'';}
  function render(){
    $('#page-label').textContent={practice:'תרגול',map:'מפת מושגים',material:'החומר שלי'}[view];
    $$('[data-view]').forEach(b=>{b.classList.toggle('active',b.dataset.view===view);if(b.dataset.view===view)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});
    $('#main').innerHTML=view==='practice'?practiceView():view==='map'?mapView():materialView();
    hydrate($('#main'));
    if(view==='map')$$('.concept-svg .node').forEach(node=>node.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();selectNode(node.dataset.node);}}));
  }
  function go(next){view=next;if(location.hash!==`#${next}`)history.replaceState(null,'',`#${next}`);render();window.scrollTo({top:0,behavior:'auto'});}
  function statsView(){
    const cards=quizItems(),learned=cards.filter(isLearned).length,seen=cards.filter(i=>state.progress[i.id]?.attempts).length,percent=cards.length?Math.round(learned/cards.length*100):0;
    return `<section class="card stats-card"><h3>התקדמות</h3><div class="progress-ring" style="--angle:${percent*3.6}deg"><div class="ring-text"><b>${percent}<span style="font-size:15px">%</span></b><small title="לפחות שתי תשובות נכונות, כשהתשובה האחרונה נכונה">שליטה טובה</small></div></div><div class="stat-rows"><div class="stat-row"><span class="dot"></span>שליטה טובה<strong>${learned}</strong></div><div class="stat-row"><span class="dot gold"></span>בתהליך למידה<strong>${seen-learned}</strong></div><div class="stat-row"><span class="dot gray"></span>טרם תורגלו<strong>${cards.length-seen}</strong></div></div></section>`;
  }
  function practiceView(){return `${heading('תרגול')}<div class="practice-layout"><div class="practice-main"><section class="card" id="session-card">${session?quizView():setupView()}</section>${recentMaterial()}${demoNotice()}</div><aside class="practice-aside">${statsView()}</aside></div>`;}
  function setupView(){
    const count=quizItems().length,weak=weakItems().length;if(mode==='weak'&&!weak)mode='mixed';
    return `<div class="card-head"><h2>הגדרות תרגול</h2><span class="pill">${count===1?'שאלה אחת זמינה':`${count} שאלות זמינות`}</span></div><div class="session-body">${count?`<span class="setup-label">סוג תרגול</span><div class="mode-options"><button class="mode-option ${mode==='mixed'?'selected':''}" data-mode="mixed" aria-pressed="${mode==='mixed'}"><span class="radio"></span><span><strong>כל החומר</strong><small>סדר אקראי</small></span></button><button class="mode-option ${mode==='weak'?'selected':''}" data-mode="weak" aria-pressed="${mode==='weak'}" ${weak?'':'disabled'}><span class="radio"></span><span><strong>שאלות שטעיתי בהן</strong><small>${weak?`${weak===1?'שאלה אחת לחזרה':`${weak} שאלות לחזרה`}`:'אין שאלות לחזרה'}</small></span></button></div><div class="session-bottom"><select id="session-length" class="length-select" aria-label="מספר השאלות בתרגול"><option value="5">5 שאלות</option><option value="10">10 שאלות</option><option value="all">כל השאלות</option></select><button class="primary" data-action="start">התחלת תרגול <span>↖</span></button></div>`:`<div class="empty"><p>אין שאלות תרגול בקורס הזה.</p><button class="primary" data-action="add">הוספת חומר ↖</button></div>`}</div>`;
  }
  function recentMaterial(){const list=items().slice(0,3);return `<section class="material-preview"><div class="section-title"><h2>חומרי לימוד</h2><button class="text-link" data-action="all-material">לכל החומרים <span>↖</span></button></div><div class="card">${list.length?list.map(i=>`<div class="preview-row" role="button" tabindex="0" data-open="${esc(i.id)}"><span class="type-icon ${i.type}">${typeSymbol(i.type)}</span><div><h3 dir="auto">${esc(i.title)}</h3><small>${esc(i.topic||'ללא נושא')} · ${esc(typeLabel(i.type))}</small></div><span class="row-arrow">↖</span></div>`).join(''):'<div class="empty">אין חומר בקורס הזה.</div>'}</div></section>`;}
  function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
  function startSession(ids){
    let pool=ids?ids.map(id=>state.items.find(i=>i.id===id)).filter(i=>i&&i.question.trim()):(mode==='weak'?weakItems():quizItems());
    const length=ids?pool.length:($('#session-length')?.value||'5');
    pool=shuffle(pool).slice(0,length==='all'?pool.length:Number(length));
    if(!pool.length){toast('יש להוסיף שאלת תרגול לפריט החומר תחילה.');return;}
    session={questions:pool.map(i=>({item:structuredClone(i),choices:shuffle(i.choices.map((text,index)=>({text,index}))),chosen:null})),index:0,done:false};
    go('practice');$('#session-card').scrollIntoView({block:'start',behavior:'smooth'});
  }
  function quizView(){
    if(session.done)return resultView();
    const q=session.questions[session.index],i=q.item,answered=q.chosen!==null,correct=q.chosen===i.answer;
    return `<div class="card-head"><h2><span data-icon="spark"></span>תרגול</h2><span class="pill">${esc(course().name)}</span></div><div class="session-body"><div class="section-kicker"><span>${esc(typeLabel(i.type))} · ${esc(i.topic)}</span><span class="question-number">${session.index+1} / ${session.questions.length}</span></div><div class="question-progress"><span style="width:${(session.index+(answered?1:0))/session.questions.length*100}%"></span></div><h2 class="quiz-question" dir="auto">${esc(i.question)}</h2><div class="answers">${q.choices.map((c,k)=>`<button class="answer-option ${answered&&c.index===i.answer?'correct':''} ${answered&&c.index===q.chosen&&!correct?'wrong':''}" data-answer="${c.index}" ${answered?'disabled':''}><span class="answer-key">${answered&&c.index===i.answer?'✓':answered&&c.index===q.chosen?'×':"אבגד"[k]}</span><span dir="auto">${esc(c.text)}</span></button>`).join('')}</div>${answered?`<div class="feedback ${correct?'':'bad'}" role="status"><strong>${correct?'תשובה נכונה ✓':'תשובה שגויה'}</strong><p dir="auto">${materialText(i.explanation||i.statement)}</p>${!i.explanation?propertyList(i):''}${math(i.formula)}${sourceInfo(i)}<button class="text-link" data-inspect="${esc(i.id)}">לצפייה בקשרים <span>↖</span></button></div>`:''}<div class="quiz-bottom"><button class="quiet" data-action="end-session">סיום התרגול</button>${answered?`<button class="primary" data-action="next">${session.index===session.questions.length-1?'לתוצאות':'לשאלה הבאה'} <span>←</span></button>`:''}</div></div>`;
  }
  function chooseAnswer(index){
    if(!session||session.done)return;const q=session.questions[session.index];if(q.chosen!==null)return;
    q.chosen=index;const id=q.item.id,p=state.progress[id]||{attempts:0,correct:0,lastCorrect:false,lastSeen:0};p.attempts++;p.correct+=index===q.item.answer?1:0;p.lastCorrect=index===q.item.answer;p.lastSeen=Date.now();state.progress[id]=p;save();render();
    $('#session-card .feedback')?.scrollIntoView({block:'nearest',behavior:'smooth'});$('#session-card [data-action="next"]')?.focus({preventScroll:true});
  }
  function resultView(){
    const answered=session.questions.filter(q=>q.chosen!==null),correct=answered.filter(q=>q.chosen===q.item.answer).length,missed=answered.filter(q=>q.chosen!==q.item.answer);
    return `<div class="card-head"><h2>תוצאות</h2><span class="pill">התרגול הושלם</span></div><div class="session-body"><div class="result-center"><div class="result-score">${correct}<span style="font-size:27px;color:#9eaa91"> / ${answered.length}</span></div><p>נענו: ${answered.length} · ללא מענה: ${session.questions.length-answered.length}</p><div class="result-actions">${missed.length?'<button class="primary" data-action="retry">תרגול השאלות שטעית בהן ↖</button>':''}<button class="${missed.length?'quiet':'primary'}" data-action="reset-session">בחזרה לתרגול ↖</button></div></div><div class="results-list">${answered.map(q=>`<div class="result-row"><span class="${q.chosen===q.item.answer?'correct-text':'wrong-text'}">${q.chosen===q.item.answer?'✓':'×'}</span><span dir="auto">${esc(q.item.title)}</span><button class="text-link" data-inspect="${esc(q.item.id)}">לפרטים ↖</button></div>`).join('')}</div></div>`;
  }
  function materialView(){return `${heading('החומר שלי')}<div class="toolbar"><div class="search-wrap"><span data-icon="search"></span><input id="material-search" aria-label="חיפוש בחומר" placeholder="חיפוש לפי רעיון, נושא או נוסחה…" value="${esc(search)}"></div><button class="primary" data-action="add">+ הוספת חומר</button></div><div class="filters">${['All','Theorem','Claim','Formula','Definition'].map(t=>`<button class="filter ${filter===t?'active':''}" data-filter="${t}">${({All:'כל החומר',Theorem:'משפטים',Claim:'טענות',Formula:'נוסחאות',Definition:'הגדרות'}[t])}</button>`).join('')}</div><div class="material-grid" id="material-results">${materialResults()}</div>${demoNotice()}`;}
  function materialResults(){const list=items().filter(i=>(filter==='All'||i.type===filter)&&`${i.title} ${i.topic} ${i.statement} ${(i.propertiesEnabled?i.properties:[])?.join(' ')||''} ${i.formula}`.toLocaleLowerCase().includes(search.toLocaleLowerCase()));return list.length?list.map(i=>`<article class="card material-card"><div class="type-top"><span class="type-badge">${esc(typeLabel(i.type))}</span><span class="pill">${esc(i.topic||'ללא נושא')}</span></div><h2 dir="auto">${esc(i.title)}</h2><p class="statement-text" dir="auto">${materialText(i.statement)}</p>${propertyList(i)}${math(i.formula)}${sourceInfo(i)}<div class="card-actions"><small>${i.links.length===1?'קשר אחד':`${i.links.length} קשרים`} · ${i.question?'כולל שאלת תרגול':'ללא שאלת תרגול'}</small><div class="answer-tools"><button class="quiet" data-edit="${esc(i.id)}" aria-label="עריכת ${esc(i.title)}"><span data-icon="edit"></span>עריכה</button><button class="text-link" data-inspect="${esc(i.id)}" aria-label="פרטים על ${esc(i.title)}">↖</button></div></div></article>`).join(''):'<div class="card empty" style="grid-column:1/-1"><p>לא נמצאו חומרים מתאימים.</p><button class="primary" data-action="add">+ הוספת חומר</button></div>';}
  function graphMarkup(list){
    // Layer prerequisites above the material that builds on them. Cycles remain bounded.
    const depths=new Map(),visiting=new Set();
    function depth(i){if(depths.has(i.id))return depths.get(i.id);if(visiting.has(i.id))return 0;visiting.add(i.id);const d=Math.min(15,i.links.reduce((m,id)=>Math.max(m,1+(list.some(n=>n.id===id)?depth(list.find(n=>n.id===id)): -1)),0));visiting.delete(i.id);depths.set(i.id,d);return d;}
    list.forEach(depth);const levels=new Map();list.forEach(i=>{const d=depths.get(i.id);if(!levels.has(d))levels.set(d,[]);levels.get(d).push(i);});
    const maxCols=Math.max(3,...[...levels.values()].map(a=>a.length)),width=maxCols*205+30,height=Math.max(420,(Math.max(...depths.values(),0)+1)*135+50),pos=new Map();
    for(const [d,group] of levels)group.forEach((i,j)=>pos.set(i.id,{x:(width-(group.length-1)*205)/2+j*205,y:58+d*135}));
    let edges='';
    for(const i of list)for(const id of i.links){const a=pos.get(id),b=pos.get(i.id);if(!a||!b)continue;const hot=i.id===selectedId||id===selectedId;edges+=`<path class="edge ${hot?'highlighted':''}" d="M${a.x} ${a.y+30} C${a.x} ${a.y+74},${b.x} ${b.y-74},${b.x} ${b.y-31}" marker-end="url(#arrow)"/>`;}
    return `<svg class="concept-svg" style="min-width:${Math.max(600,width)}px" viewBox="0 0 ${width} ${height}" aria-label="מפת מושגים. החצים מובילים ממושג מקדים לרעיון שמתבסס עליו."><defs><marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0L6 3L0 6" fill="#a6b994" stroke="none"/></marker></defs>${edges}${list.map(i=>{const p=pos.get(i.id),words=i.title.length>25?[i.title.slice(0,24)+'…']: [i.title];return `<g class="node ${i.id===selectedId?'selected':''}" role="button" tabindex="0" aria-label="${esc(i.title)}" aria-pressed="${i.id===selectedId}" data-node="${esc(i.id)}" transform="translate(${p.x-91},${p.y-30})"><rect width="182" height="60" rx="9"/><text class="type" x="91" y="20" text-anchor="middle">${esc(typeLabel(i.type))}</text><text x="91" y="40" text-anchor="middle">${esc(words[0])}</text><title>${esc(i.title)}</title></g>`;}).join('')}</svg>`;
  }
  function mapView(){const list=items();if(!list.some(i=>i.id===selectedId))selectedId=list[0]?.id||'';const selected=list.find(i=>i.id===selectedId);return `${heading('מפת מושגים')}<div class="map-layout"><section class="card map-board"><div class="map-top"><span>${esc(course().name)} <span class="muted">· ${list.length} פריטי חומר</span></span></div><div class="map-scroll">${list.length?graphMarkup(list):'<div class="empty"><p>אין חומר בקורס הזה.</p><button class="primary" data-action="add">הוספת חומר ↖</button></div>'}</div><div class="map-legend"><span><span class="dot"></span>הרעיון שנבחר</span><span>↓ ממושג מקדים לרעיון שמתבסס עליו</span></div></section>${selected?`<aside class="card map-details" id="map-details">${nodeDetails(selected)}</aside>`:''}</div>${demoNotice()}`;}
  function nodeDetails(i){const outgoing=courseItems().filter(j=>j.links.includes(i.id));return `<div class="type-badge">${esc(typeLabel(i.type))} · ${esc(i.topic)}</div><h2 dir="auto">${esc(i.title)}</h2><div><p class="statement-text" dir="auto">${materialText(i.statement)}</p>${propertyList(i)}${math(i.formula)}${sourceInfo(i)}<button class="text-link" data-edit="${esc(i.id)}">עריכת הפריט <span>↖</span></button></div><div>${i.links.length?`<h3>מתבסס על</h3>${i.links.map(id=>{const n=state.items.find(j=>j.id===id);return n?`<button class="connection" data-node="${esc(id)}"><small>${esc(typeLabel(n.type))}</small><span dir="auto">${esc(n.title)}</span> ↖</button>`:'';}).join('')}`:''}${outgoing.length?`<h3>מוביל אל</h3>${outgoing.map(n=>`<button class="connection" data-node="${esc(n.id)}"><span dir="auto">${esc(n.title)}</span> ↖</button>`).join('')}`:''}${!i.links.length&&!outgoing.length?'<p class="small">אין קשרים.</p>':''}</div>${i.question?`<button class="primary" data-practice="${esc(i.id)}">תרגול הפריט הזה <span>↖</span></button>`:''}`;}
  function selectNode(id){
    selectedId=id;const i=courseItems().find(j=>j.id===id);if(!i)return;if(!items().some(j=>j.id===id)){unitFilter=window.SIGNAL_UNITS[i.unit]?i.unit:'all';render();return;}
    $$('.concept-svg .node').forEach(n=>{n.classList.toggle('selected',n.dataset.node===id);n.setAttribute('aria-pressed',n.dataset.node===id);});
    // Re-render paths for the selected neighborhood, preserving scroll position.
    const scroll=$('.map-scroll'),top=scroll.scrollTop,left=scroll.scrollLeft;
    scroll.innerHTML=graphMarkup(items());scroll.scrollTop=top;scroll.scrollLeft=left;
    $('#map-details').innerHTML=nodeDetails(i);hydrate($('#map-details'));
    $$('.concept-svg .node').forEach(n=>n.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();selectNode(n.dataset.node);}}));
    $(`.concept-svg [data-node="${CSS.escape(id)}"]`)?.focus({preventScroll:true});
    if(innerWidth<=680)$('#map-details').scrollIntoView({block:'nearest',behavior:'smooth'});
  }
  const bundledCardIds = new Set([
    ...window.SEED.items.map(item => item.id),
    ...window.CONDITIONAL_PACK.items.map(item => item.id)
  ]);
  function prerequisiteFields(item) {
    const options = courseItems().filter(candidate => candidate.id !== item.id);
    const manual = options.filter(candidate => !bundledCardIds.has(candidate.id));
    const linkedBuiltIn = options.filter(candidate => bundledCardIds.has(candidate.id) && item.links.includes(candidate.id));
    const checkbox = candidate => `<label><input type="checkbox" name="links" value="${esc(candidate.id)}" ${item.links.includes(candidate.id)?'checked':''}><span dir="auto">${esc(candidate.title)}</span></label>`;
    const list = cards => `<div class="checkbox-list">${cards.map(checkbox).join('')}</div>`;
    const available = manual.length ? list(manual) : '<p class="muted small">אין כרטיסים שנוספו ידנית בקורס.</p>';
    const existing = linkedBuiltIn.length ? `<details class="source-info"><summary>קשרים קיימים לכרטיסים מובנים (${linkedBuiltIn.length})</summary>${list(linkedBuiltIn)}</details>` : '';
    return available + existing;
  }
  function openEditor(id){
    editingId=id||null;const i=state.items.find(j=>j.id===id)||{title:'',type:'Theorem',topic:course().id==='signals'&&!['all','conditional-moments'].includes(unitFilter)?(window.SIGNAL_UNITS[unitFilter]||unitFilter):'',statement:'',formula:'',question:'',choices:['','','',''],answer:0,explanation:'',links:[]};
    $('#editor-title').textContent=id?'עריכת חומר':'הוספת חומר';$('#form-error').textContent='';
    $('#editor-fields').innerHTML=`<label>כותרת<input name="title" required maxlength="140" value="${esc(i.title)}" placeholder="למשל: משפט הממד" dir="auto"></label><div class="form-columns"><label>סוג הפריט<select name="type">${['Theorem','Claim','Formula','Definition'].map(t=>`<option value="${t}" ${t===i.type?'selected':''}>${typeLabel(t)}</option>`).join('')}</select></label><label>נושא<input name="topic" maxlength="90" value="${esc(i.topic)}" placeholder="למשל: העתקות לינאריות" dir="auto"></label></div><label>ניסוח ותנאים<textarea name="statement" required rows="3" dir="auto" placeholder="מה אומר המשפט? באילו תנאים הוא מתקיים?">${esc(i.statement)}</textarea><small>אפשר לשלב LaTeX בתוך הטקסט: \\(x^2\\) או $x^2$. לנוסחה בשורה נפרדת: $$x^2$$.</small></label><label class="properties-toggle"><input type="checkbox" id="properties-enabled" name="propertiesEnabled" ${i.propertiesEnabled?'checked':''}>הפריט כולל רשימת תכונות / סעיפים</label><section id="properties-editor" hidden><small class="muted">כל תכונה תוצג כסעיף נפרד. אפשר לשלב LaTeX בכל סעיף; הניסוח למעלה יכול לשמש כהקדמה או להישאר ריק.</small><div id="property-rows">${(i.properties?.length?i.properties:['']).map(propertyRow).join('')}</div><button type="button" class="quiet" data-action="add-property">+ הוספת תכונה</button></section><label>נוסחה <span class="muted">(לא חובה)</span><input name="formula" value="${esc(i.formula)}" placeholder="\\dim V = \\operatorname{rank}(T) + \\dim\\ker(T)" dir="ltr"><small>LaTeX, ללא סימני דולר.</small></label><label>מתבסס על <span class="muted">(לא חובה)</span></label>${prerequisiteFields(i)}<h3 class="form-section">שאלת תרגול (לא חובה)</h3><label>שאלה<textarea name="question" rows="2" dir="auto">${esc(i.question)}</textarea></label><div class="choices-edit">${i.choices.map((c,k)=>`<label>אפשרות ${"אבגד"[k]}<input name="choice${k}" value="${esc(c)}" maxlength="500" dir="auto"></label>`).join('')}</div><label>התשובה הנכונה<select name="answer">${[0,1,2,3].map(k=>`<option value="${k}" ${k===i.answer?'selected':''}>אפשרות ${"אבגד"[k]}</option>`).join('')}</select></label><label>הסבר<textarea name="explanation" rows="2" dir="auto" placeholder="למה זו התשובה הנכונה?">${esc(i.explanation)}</textarea></label>${id?'<button type="button" class="quiet wrong-text" data-action="delete-item">מחיקת הפריט</button>':''}`;
    updatePropertyEditor();$('#editor').showModal();
  }
  $('#editor-form').addEventListener('submit',e=>{
    e.preventDefault();const data=new FormData(e.target),get=k=>String(data.get(k)||'').trim(),choices=[0,1,2,3].map(k=>get(`choice${k}`)),question=get('question');
    if(question&&choices.some(c=>!c)){$('#form-error').textContent='יש למלא את כל ארבע האפשרויות, או להשאיר את שדה השאלה ריק.';return;}
    if(question&&new Set(choices.map(c=>c.toLocaleLowerCase())).size!==4){$('#form-error').textContent='יש להזין תשובה שונה בכל אחת מארבע האפשרויות.';return;}
    const propertiesEnabled=data.has('propertiesEnabled'),properties=data.getAll('property').map(p=>String(p).trim()).filter(Boolean);
    if(propertiesEnabled&&!properties.length){$('#form-error').textContent='יש להוסיף לפחות תכונה אחת.';return;}
    if(properties.length>100){$('#form-error').textContent='אפשר להוסיף עד 100 תכונות לפריט.';return;}
    if(!get('statement')&&!propertiesEnabled){$('#form-error').textContent='יש למלא ניסוח או להפעיל רשימת תכונות.';return;}
    const old=state.items.find(i=>i.id===editingId),item={...(old||{}),...(!old&&course().id==='signals'&&unitFilter!=='all'?{unit:selectedUnit()}:{}),id:editingId||uid(),course:old?.course||course().id,title:get('title'),type:get('type'),topic:get('topic'),statement:get('statement'),propertiesEnabled,properties,formula:get('formula'),question,choices,answer:Number(get('answer')),explanation:get('explanation'),links:data.getAll('links')};
    if(old){if(old.unit&&['title','statement','formula','propertiesEnabled','properties'].some(k=>JSON.stringify(old[k])!==JSON.stringify(item[k])))item.origin='edited';state.items[state.items.indexOf(old)]=item;const questionChanged=old.question!==item.question||JSON.stringify(old.choices)!==JSON.stringify(choices)||old.answer!==item.answer;if(questionChanged)delete state.progress[item.id];}else state.items.push(item);
    session=null;save();$('#editor').close();render();toast(old?'החומר עודכן.':'החומר נוסף בהצלחה.');
  });
  function exportData(){
    const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`memorizer-${new Date().toISOString().slice(0,10)}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('הגיבוי יוצא בהצלחה. כדאי לשמור אותו במקום בטוח.');
  }
  const githubSyncDialog = $('#github-sync-dialog');
  const githubSyncForm = $('#github-sync-form');
  const githubSyncStatus = $('#github-sync-status');

  $('#github-sync-button').addEventListener('click', () => {
    githubSyncStatus.textContent = '';
    githubSyncDialog.showModal();
  });
  githubSyncDialog.addEventListener('close', () => {
    githubSyncForm.elements.token.value = '';
  });

  githubSyncForm.addEventListener('submit', async event => {
    event.preventDefault();
    const repository = githubSyncForm.elements.repository.value.trim();
    const token = githubSyncForm.elements.token.value.trim();
    if (!/^[a-z0-9-]+\/[a-z0-9_.-]+$/i.test(repository) || repository.split('/')[1].startsWith('.')) {
      githubSyncStatus.textContent = 'יש להזין מאגר בפורמט owner/repository.';
      return;
    }
    if (!/^github_pat_[a-zA-Z0-9_]+$/.test(token)) {
      githubSyncStatus.textContent = 'יש להזין אסימון Fine-grained של GitHub.';
      return;
    }
    const bytes = new TextEncoder().encode(JSON.stringify(state, null, 2));
    if (bytes.length > 10 * 1024 * 1024) {
      githubSyncStatus.textContent = 'הגיבוי גדול מדי לסנכרון. אפשר לייצא אותו כקובץ מקומי.';
      return;
    }
    githubSyncForm.elements.token.value = '';
    const submit = $('button[type="submit"]', githubSyncForm);
    if (submit.disabled) return;
    submit.disabled = true;
    githubSyncStatus.textContent = 'שומר גיבוי ב־GitHub…';

    const repoUrl = 'https://api.github.com/repos/' + repository;
    const headers = { Authorization: 'Bearer ' + token, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' };
    const request = (url, options = {}) => fetch(url, { headers, redirect: 'error', cache: 'no-store', ...options });
    try {
      const repoResponse = await request(repoUrl);
      if (!repoResponse.ok) throw Error('לא ניתן לגשת למאגר. בדקי את השם ואת הרשאות האסימון.');
      const repo = await repoResponse.json();
      if (repo.visibility !== 'private') throw Error('יש לבחור מאגר פרטי כדי לשמור את החומר וההתקדמות.');
      const fileUrl = repoUrl + '/contents/memorizer-backup.json';
      const current = await request(fileUrl + '?ref=' + encodeURIComponent(repo.default_branch));
      if (!current.ok && current.status !== 404) throw Error('לא ניתן לקרוא את הגיבוי הקיים במאגר.');
      const file = current.ok ? await current.json() : null;
      if (file && (file.type !== 'file' || !file.sha)) throw Error('נתיב הגיבוי כבר משמש פריט שאינו קובץ.');
      let binary = '';
      for (let offset = 0; offset < bytes.length; offset += 8192) {
        binary += String.fromCharCode(...bytes.subarray(offset, offset + 8192));
      }
      const content = btoa(binary);
      if (file?.content?.replace(/\s/g, '') === content) {
        githubSyncStatus.textContent = 'הגיבוי ב־GitHub כבר מעודכן.';
        return;
      }
      const response = await request(fileUrl, {
        method: 'PUT',
        headers: { ...headers, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: 'Back up Memorizer study data',
          branch: repo.default_branch,
          content,
          ...(file ? { sha: file.sha } : {})
        })
      });
      if (!response.ok) {
        if (response.status === 409) throw Error('הגיבוי השתנה בזמן הסנכרון. בדקי את הגרסה ב־GitHub לפני ניסיון נוסף.');
        throw Error('הגיבוי לא נשמר. בדקי הרשאת כתיבה ושהענף הראשי מאפשר עדכון.');
      }
      const result = await response.json();
      const link = document.createElement('a');
      link.href = 'https://github.com/' + repository + '/commit/' + result.commit.sha;
      link.textContent = 'לצפייה בשמירה ב־GitHub';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      githubSyncStatus.replaceChildren('הגיבוי נשמר. ', link);
    } catch (error) {
      githubSyncStatus.textContent = error instanceof TypeError ? 'לא ניתן להתחבר ל־GitHub. בדקי את החיבור ונסי שוב.' : error.message;
    } finally {
      submit.disabled = false;
    }
  });
  $('#import-file').addEventListener('change',async e=>{
    const f=e.target.files[0];if(!f)return;$('#data-error').textContent='';
    try{if(f.size>10*1024*1024)throw Error('יש לבחור קובץ גיבוי קטן מ־10 מגה־בייט.');const imported=validate(JSON.parse(await f.text()));if(!confirm(`להחליף את החומר במכשיר הזה ב־${imported.courses.length} קורסים וב־${imported.items.length} פריטי חומר? כדי לשמור את הנתונים הקיימים, יש לייצא גיבוי לפני הייבוא.`))return;state=imported;session=null;selectedId='';search='';filter='All';save();$('#data-dialog').close();render();toast('הגיבוי יובא בהצלחה. החומרים שלך מוכנים לתרגול.');}
    catch(err){$('#data-error').textContent=err instanceof SyntaxError?'הקובץ אינו קובץ JSON תקין. יש לבחור גיבוי של Memorizer.':err.message;}finally{e.target.value='';}
  });
  $('#course-form').addEventListener('submit',e=>{e.preventDefault();const name=$('#course-name').value.trim();if(!name)return;const id=uid();state.courses.push({id,name,demo:false});state.selectedCourse=id;session=null;selectedId='';filter='All';search='';save();$('#course-dialog').close();$('#course-form').reset();go('material');toast('הקורס החדש נוצר.');});
  document.addEventListener('click',e=>{
    const b=e.target.closest('button,[data-open]');if(!b)return;
    if(b.matches('.close-dialog')){b.closest('dialog').close();return;}
    if(b.dataset.view){go(b.dataset.view);return;}
    if(b.dataset.mode){mode=b.dataset.mode;render();return;}
    if(b.dataset.answer!==undefined){chooseAnswer(Number(b.dataset.answer));return;}
    if(b.dataset.filter){filter=b.dataset.filter;render();return;}
    if(b.dataset.edit){openEditor(b.dataset.edit);return;}
    if(b.dataset.inspect||b.dataset.open){selectedId=b.dataset.inspect||b.dataset.open;go('map');return;}
    if(b.dataset.node){selectNode(b.dataset.node);return;}
    if(b.dataset.practice){startSession([b.dataset.practice]);return;}
    switch(b.dataset.action){
      case 'add-property':if($$('#property-rows .property-row').length>=100){toast('אפשר להוסיף עד 100 תכונות לפריט.');return;}$('#property-rows').insertAdjacentHTML('beforeend',propertyRow());updatePropertyEditor();$('#property-rows .property-row:last-child textarea').focus();return;
      case 'remove-property':b.closest('.property-row').remove();if(!$('#property-rows .property-row'))$('#property-rows').innerHTML=propertyRow();updatePropertyEditor();return;
      case 'new-course':$('#course-dialog').showModal();return;
      case 'add':openEditor();return;
      case 'start':startSession();return;
      case 'open-map':go('map');return;
      case 'all-material':go('material');return;
      case 'next':if(!session||session.done)return;if(session.index+1>=session.questions.length)session.done=true;else session.index++;render();$('#session-card').scrollIntoView({block:'start',behavior:'smooth'});return;
      case 'end-session':if(session){session.done=true;render();}return;
      case 'reset-session':session=null;render();return;
      case 'retry':{const missed=session.questions.filter(q=>q.chosen!==null&&q.chosen!==q.item.answer).map(q=>q.item.id);startSession(missed);return;}
      case 'delete-item':if(editingId&&confirm('למחוק את הפריט ואת היסטוריית התרגול שלו? גם הקשרים שמפנים אליו יוסרו.')){state.items=state.items.filter(i=>i.id!==editingId);state.items.forEach(i=>i.links=i.links.filter(id=>id!==editingId));delete state.progress[editingId];session=null;save();$('#editor').close();render();toast('הפריט נמחק.');}return;
    }
  });
  document.addEventListener('keydown',e=>{
    if(e.target.closest('[data-open]')&&(e.key==='Enter'||e.key===' ')){e.preventDefault();selectedId=e.target.closest('[data-open]').dataset.open;go('map');return;}
    if($('dialog[open]')||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)||view!=='practice'||!session||session.done||e.altKey||e.ctrlKey||e.metaKey)return;
    if(/^[1-4]$/.test(e.key)){const q=session.questions[session.index];chooseAnswer(q.choices[Number(e.key)-1].index);}
  });
  document.addEventListener('change',e=>{if(e.target.id==='properties-enabled'){updatePropertyEditor();return;}if(e.target.id==='unit-select'){unitFilter=e.target.value;session=null;selectedId='';search='';filter='All';render();return;}if(e.target.id==='course-select'){state.selectedCourse=e.target.value;session=null;selectedId='';search='';filter='All';save();render();}});
  document.addEventListener('input',e=>{if(e.target.id==='material-search'){search=e.target.value;$('#material-results').innerHTML=materialResults();hydrate($('#material-results'));}});
  function openData(){$('#data-error').textContent='';$('#data-dialog').showModal();}
  $('#data-button').addEventListener('click',openData);$('#mobile-data').addEventListener('click',openData);$('#backup-top').addEventListener('click',openData);$('#export-button').addEventListener('click',exportData);
  window.addEventListener('hashchange',()=>{const h=location.hash.slice(1);if(['practice','map','material'].includes(h))go(h);});
  window.addEventListener('storage',e=>{if(e.key===KEY&&e.newValue){try{state=validate(JSON.parse(e.newValue));session=null;render();toast('הנתונים עודכנו מלשונית אחרת.');}catch{toast('לא ניתן לטעון את הנתונים שנשמרו בלשונית אחרת.');}}});
  hydrate();render();if(retiredCardsRemoved)save();if(initialWarning)toast(initialWarning);
})();
