const destinations = [
{id:'japan',name:'Япония',emoji:'🗻',city:'Токио · Киото',region:'Восточная Азия',tag:'Традиции и технологии',type:['culture','city'],tone:'#e7c9b4',shape:'#b76c59',cost:125,days:10,best:'Март — май, октябрь — ноябрь',weather:'Умеренный климат',visa:'Проверь правила въезда перед поездкой',description:'Страна, где древние храмы соседствуют с неоновыми улицами, а чайная церемония — с самым быстрым поездом. Удобный транспорт, яркая кухня и совершенно разные ритмы больших городов и тихих садов.',places:[['Киото и Фусими Инари','Пройдись по дорожке из тысяч алых ворот и загляни в старые кварталы Гион.','Культура'],['Токио: Сибуя и Асакуса','Сравни оживлённый перекрёсток Сибуя с храмом Сэнсо-дзи и старинными улочками.','Город'],['Фудзи и озеро Кавагути','Панорамные виды на гору, прогулки у озера и сезонные пейзажи.','Природа'],['Нара-парк','Познакомься с храмом Тодай-дзи и свободно гуляющими оленями.','Природа'],['Осака: Дотонбори','Неоновая набережная, уличная еда и оживлённая атмосфера вечером.','Город']],risks:[['Карманные кражи','В людных местах и транспорте держи телефон и кошелёк при себе, особенно в часы пик.'],['Ночная жизнь','Будь внимателен к незнакомым заведениям и предложениям на улице; заранее проверь маршрут домой.'],['Землетрясения и тайфуны','Следи за официальными предупреждениями, запомни инструкции отеля и местные указатели эвакуации.'],['Правила и транспорт','Уважай местные нормы, не фотографируй там, где запрещено, и учитывай расписание последнего поезда.']]},
{id:'italy',name:'Италия',emoji:'🍋',city:'Рим · Флоренция',region:'Южная Европа',tag:'Искусство и dolce vita',type:['culture','city'],tone:'#e8d5a9',shape:'#8da278',cost:115,days:8,best:'Апрель — июнь, сентябрь — октябрь',weather:'Средиземноморский климат',visa:'Проверь правила въезда перед поездкой',description:'Италия — это длинные обеды, города-музеи и маленькие площади, где хочется задержаться. Составь маршрут между Римом, Флоренцией и побережьем, оставив время на неспешные открытия.',places:[['Рим: Колизей и Форум','Загляни в сердце античного города. Билеты на популярные даты лучше планировать заранее.','История'],['Флоренция и Уффици','Ренессанс, купол Брунеллески и виды на город с площади Микеланджело.','Культура'],['Венеция: Гранд-канал','Пройдись по мостам и тихим переулкам подальше от самых оживлённых улиц.','Город'],['Чинкве-Терре','Пять прибрежных деревень, тропы и поезд вдоль Лигурийского моря.','Природа'],['Неаполь и Помпеи','Уличная кухня, исторический центр и археологический парк у Везувия.','История']],risks:[['Карманные кражи','В толпе, общественном транспорте и возле достопримечательностей носи сумку закрытой и перед собой.'],['Уличные предложения','С осторожностью относись к неожиданным «подаркам», навязчивым услугам и помощи у банкоматов.'],['Жара и солнце','Летом бери воду, головной убор и планируй прогулки в самые жаркие часы с перерывами.'],['Транспорт и билеты','Проверяй официальный сайт перевозчика, валидируй билеты там, где это требуется, и следи за вещами.']]},
{id:'iceland',name:'Исландия',emoji:'🌋',city:'Рейкьявик · Вик',region:'Северная Европа',tag:'Вулканы и простор',type:['nature'],tone:'#c4d9d7',shape:'#607e7d',cost:180,days:7,best:'Июнь — август, сентябрь — март для сияния',weather:'Ветреный океанический климат',visa:'Проверь правила въезда перед поездкой',description:'Земля контрастов: чёрные пляжи, водопады, горячие источники и длинные дороги через суровые пейзажи. Здесь важно планировать маршрут с запасом и сверяться с прогнозом погоды.',places:[['Золотое кольцо','Водопад Гюдльфосс, гейзеры долины Хёйкадалюр и парк Тингведлир.','Природа'],['Южное побережье','Водопады Сельяландсфосс и Скоугафосс, ледниковые виды и океан.','Природа'],['Рейкьявик','Компактная столица, музейные пространства, гавань и церковь Хадльгримскиркья.','Город'],['Лагуна Йёкюльсаурлоун','Ледниковая лагуна и пляж с льдинами. Уточняй дорожные условия перед поездкой.','Природа'],['Полуостров Снайфедльснес','Лавовые поля, маяки и разнообразные пейзажи на одном маршруте.','Природа']],risks:[['Погода и ветер','Погода быстро меняется: проверяй официальный прогноз и состояние дорог перед каждой поездкой.'],['Океан и волны','Не подходи к кромке воды на пляжах: внезапные волны опасны даже при спокойном на вид море.'],['Геотермальные зоны','Не сходи с обозначенных троп и соблюдай ограждения: земля и вода могут быть очень горячими.'],['Дороги и одиночные маршруты','Заправляйся заранее, сообщай близким план поездки и не выезжай на закрытые дороги.']]},
{id:'thailand',name:'Таиланд',emoji:'🌴',city:'Бангкок · Чиангмай',region:'Юго-Восточная Азия',tag:'Острова и уличная еда',type:['nature','culture'],tone:'#c7d9bd',shape:'#51816a',cost:65,days:12,best:'Ноябрь — февраль',weather:'Тропический климат',visa:'Проверь правила въезда перед поездкой',description:'Яркие рынки, буддийские храмы, зелёные горы севера и острова юга. Таиланд подойдёт и для насыщенного города, и для спокойного отдыха у моря — сезон и регион сильно влияют на погоду.',places:[['Бангкок: старый город','Большой дворец, храм Ват Пхо и прогулка вдоль каналов. Соблюдай дресс-код в храмах.','Культура'],['Чиангмай','Ночные рынки, старый город и поездки к природным маршрутам на севере.','Город'],['Острова Краби','Известняковые скалы, лодочные прогулки и пляжи Андаманского моря.','Природа'],['Аюттхая','Древние храмы и руины бывшей столицы недалеко от Бангкока.','История'],['Национальный парк Кхао Сок','Тропический лес, озеро и прогулки с местными гидами.','Природа']],risks:[['Дорожное движение','Будь особенно внимателен при переходе дорог. Если арендуешь транспорт — заранее проверь законность и страховку.'],['Жара и обезвоживание','Пей безопасную воду, пользуйся защитой от солнца и делай перерывы в тени.'],['Море и сезон дождей','Уточняй состояние моря и предупреждения спасателей. Не игнорируй флаги на пляже.'],['Карманные кражи и мошенничество','Сверяй цены и условия поездок заранее; не отдавай паспорт в залог и береги вещи в толпе.']]},
{id:'norway',name:'Норвегия',emoji:'🏔️',city:'Осло · Берген',region:'Северная Европа',tag:'Фьорды и северное сияние',type:['nature','city'],tone:'#c7d1dc',shape:'#627c91',cost:185,days:8,best:'Май — сентябрь, зима для сияния',weather:'Прохладный морской климат',visa:'Проверь правила въезда перед поездкой',description:'Спокойные города, фьорды, горные маршруты и северные пейзажи. В Норвегии легко сочетать городской уикенд с природой, если заранее продумать транспорт и сезон.',places:[['Берген и Брюгген','Цветные деревянные дома у гавани и панорамные виды с горы Флёйен.','Город'],['Фьорд Нэрёй','Узкие фьордовые пейзажи и водные маршруты среди высоких склонов.','Природа'],['Осло','Музеи, набережная, парк скульптур Вигеланда и современная опера.','Культура'],['Лофотенские острова','Рыбацкие деревушки, горы и пляжи за полярным кругом.','Природа'],['Фломская железная дорога','Живописный поезд через долины, водопады и горные пейзажи.','Природа']],risks:[['Горные маршруты','Выбирай маршрут по силам, проверяй прогноз и состояние троп, сообщай кому-нибудь о планах.'],['Холод и переменчивая погода','Даже летом бери многослойную одежду и непромокаемый верхний слой.'],['Вода и паромы','Уточняй расписание и местные рекомендации; держись подальше от незащищённых крутых берегов.'],['Дистанции и темнота','Планируй дорогу с запасом и не рассчитывай на освещённость троп вне городов.']]},
{id:'mexico',name:'Мексика',emoji:'🌵',city:'Мехико · Оахака',region:'Северная Америка',tag:'Археология и вкусы',type:['culture','city'],tone:'#e5c3a9',shape:'#c17a54',cost:80,days:10,best:'Ноябрь — апрель',weather:'Разный по регионам климат',visa:'Проверь правила въезда перед поездкой',description:'Мексика объединяет колониальные города, древние археологические комплексы, кухню с характером и побережья двух океанов. Выбирай регионы по сезону и планируй перемещения заранее.',places:[['Мехико: исторический центр','Площадь Сокало, музеи и архитектура огромного, многослойного города.','Город'],['Теотиуакан','Археологический комплекс с монументальными пирамидами недалеко от столицы.','История'],['Оахака','Ремесленные рынки, местная кухня и колоритные улицы центра.','Культура'],['Сеноты Юкатана','Природные водоёмы в известняковых пещерах. Выбирай официальные места для купания.','Природа'],['Паленке','Археологические руины майя в окружении влажного тропического леса.','История']],risks:[['Выбор районов','Изучай актуальные рекомендации по конкретному региону и району; условия могут сильно различаться.'],['Перемещения','Пользуйся проверенным транспортом, особенно ночью, и заранее планируй маршрут между городами.'],['Жара и высота','В Мехико высота может ощущаться непривычно; акклиматизируйся, пей воду и береги силы.'],['Вода и солнце','Пользуйся бутилированной или рекомендованной местной водой и защити кожу от солнца.']]},
{id:'newzealand',name:'Новая Зеландия',emoji:'🐑',city:'Окленд · Куинстаун',region:'Океания',tag:'Большие пейзажи и тропы',type:['nature'],tone:'#c9d5c1',shape:'#61836b',cost:155,days:14,best:'Декабрь — март',weather:'Морской климат',visa:'Проверь правила въезда перед поездкой',description:'Горы, озёра, побережья и маршруты через кинематографичные пейзажи. Между точками часто большие расстояния, поэтому оставь время на дорогу и не перегружай программу.',places:[['Милфорд-Саунд','Фьордовые пейзажи, водопады и лодочные прогулки в национальном парке Фьордленд.','Природа'],['Куинстаун','Озеро Уакатипу, горные виды и база для поездок по Южному острову.','Город'],['Национальный парк Тонгариро','Вулканические ландшафты и пешие маршруты. Выбирай путь с учётом погоды и подготовки.','Природа'],['Роторуа','Геотермальные зоны и знакомство с культурой маори у местных организаторов.','Культура'],['Полуостров Коромандел','Пляжи, бухты и спокойные прибрежные прогулки.','Природа']],risks:[['Погода на тропах','Условия в горах меняются быстро: сверяйся с информацией парков и не выходи неподготовленным.'],['Дороги и расстояния','Движение левостороннее, а поездки занимают больше времени, чем кажется по карте. Делай остановки.'],['Океан и солнце','Сильное солнце требует защиты даже в прохладную погоду; купайся только в безопасных местах.'],['Биобезопасность','Соблюдай правила ввоза продуктов и очистки обуви: они помогают защищать местную природу.']]},
{id:'portugal',name:'Португалия',emoji:'🚋',city:'Лиссабон · Порту',region:'Южная Европа',tag:'Океан, плитка и неспешность',type:['culture','city','nature'],tone:'#e3d0ad',shape:'#588477',cost:95,days:8,best:'Март — июнь, сентябрь — октябрь',weather:'Мягкий средиземноморский климат',visa:'Проверь правила въезда перед поездкой',description:'Португалия — океанские виды, старые трамваи, азулежу и уютные города. Исследуй Лиссабон пешком, выдели день Порту и не забывай, что прибрежная вода бывает прохладной.',places:[['Лиссабон: Алфама','Узкие улочки, смотровые площадки и старые трамваи. Удобная обувь пригодится на холмах.','Город'],['Порту и Рибейра','Набережная Дору, мост Луиша I и улочки исторического центра.','Город'],['Синтра','Дворцы и сады среди холмов — запланируй целый день и проверь расписание транспорта.','Культура'],['Побережье Алгарве','Скалы, бухты и тропы над Атлантикой. Не подходи к краю обрывов.','Природа'],['Кашкайш','Приморский городок для прогулки и поездки из Лиссабона.','Природа']],risks:[['Карманные кражи','В трамваях и туристических кварталах держи сумку закрытой и не оставляй вещи без присмотра.'],['Холмы и брусчатка','Удобная обувь поможет на крутых улицах и гладких камнях, особенно после дождя.'],['Атлантический океан','Течения бывают сильными: следуй флагам и указаниям спасателей, даже если берег выглядит спокойным.'],['Солнце и жара','Планируй прогулки с перерывами, особенно летом, и используй защиту от солнца.']]}
];

const grid=document.getElementById('countryGrid'), searchInput=document.getElementById('searchInput'), filterRow=document.getElementById('filterRow'), guideTitle=document.getElementById('guideTitle'), guideHint=document.getElementById('guideHint'), guideEmpty=document.getElementById('guideEmpty'), guideContent=document.getElementById('guideContent'), banner=document.getElementById('destinationBanner'), tabPanel=document.getElementById('tabPanel'), savedToggle=document.getElementById('savedToggle'), toast=document.getElementById('toast');
let activeFilter='all', query='', showSaved=false, selectedId=null, activeTab='overview', toastTimer;

// --- DATABASE & AUTH SYSTEM ---
const readStore=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}};
let db = readStore('appDatabase', null);

async function initDB() {
  if (!db) {
    try {
      const res = await fetch('database.json');
      db = await res.json();
      save('appDatabase', db);
    } catch(e) {
      db = { users: [], chats: {} };
      save('appDatabase', db);
    }
  }
  updateAuthUI();
}

let favorites=readStore('travelFavorites',[]), itineraries=readStore('travelPlans',{}), budgets=readStore('travelBudgets',{});
let currentUser = readStore('currentUser', null);
const save=(key,value)=>{try{localStorage.setItem(key,JSON.stringify(value))}catch{}};
const esc=(value)=>String(value).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
function notify(text){toast.textContent=text;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2200)}

// --- AUTH LOGIC ---
const authModal = document.getElementById('authModal');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const modalTitle = document.getElementById('modalTitle');

document.getElementById('btnLogin').addEventListener('click', () => openModal('login'));
document.getElementById('btnRegister').addEventListener('click', () => openModal('register'));
document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('switchToReg').addEventListener('click', (e) => { e.preventDefault(); openModal('register'); });
document.getElementById('switchToLogin').addEventListener('click', (e) => { e.preventDefault(); openModal('login'); });
document.getElementById('btnLogout').addEventListener('click', logout);

function openModal(mode) {
  authModal.classList.add('show');
  if (mode === 'login') {
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
    modalTitle.textContent = 'Вход в аккаунт';
  } else {
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
    modalTitle.textContent = 'Регистрация';
  }
}
function closeModal() { authModal.classList.remove('show'); }

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim().toLowerCase();
  const pass = document.getElementById('regPassword').value;
  if (db.users.find(u => u.email === email)) { notify('Пользователь с таким email уже существует'); return; }
  const newUser = { id: Date.now().toString(), name, email, password: btoa(pass) };
  db.users.push(newUser);
  save('appDatabase', db);
  currentUser = { id: newUser.id, name: newUser.name, email: newUser.email };
  save('currentUser', currentUser);
  closeModal(); updateAuthUI(); notify(`Добро пожаловать, ${name}!`);
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const pass = document.getElementById('loginPassword').value;
  const user = db.users.find(u => u.email === email && atob(u.password) === pass);
  if (!user) { notify('Неверный email или пароль'); return; }
  currentUser = { id: user.id, name: user.name, email: user.email };
  save('currentUser', currentUser);
  closeModal(); updateAuthUI(); notify(`С возвращением, ${user.name}!`);
});

function logout() {
  currentUser = null;
  localStorage.removeItem('currentUser');
  updateAuthUI();
  if (activeTab === 'ai') { activeTab = 'overview'; renderTab(); }
  notify('Вы вышли из аккаунта');
}

function updateAuthUI() {
  const guestBtns = document.getElementById('guestButtons');
  const userCtrls = document.getElementById('userControls');
  const greeting = document.getElementById('userGreeting');
  const aiTab = document.getElementById('aiTabBtn');
  if (currentUser) {
    guestBtns.classList.add('hidden');
    userCtrls.classList.remove('hidden');
    greeting.textContent = `Привет, ${currentUser.name}`;
    aiTab.classList.remove('locked');
  } else {
    guestBtns.classList.remove('hidden');
    userCtrls.classList.add('hidden');
    aiTab.classList.add('locked');
  }
  updateSaved();
}

// --- ORIGINAL APP LOGIC ---
function updateSaved(){document.getElementById('savedCount').textContent=favorites.length;savedToggle.classList.toggle('is-on',showSaved);savedToggle.setAttribute('aria-pressed',String(showSaved))}

function renderCards(){const list=destinations.filter(d=>{const match=`${d.name} ${d.city} ${d.region} ${d.tag}`.toLowerCase().includes(query.toLowerCase());return match&&(activeFilter==='all'||d.type.includes(activeFilter))&&(!showSaved||favorites.includes(d.id))});grid.innerHTML=list.map(d=>`<article class="country-card ${selectedId===d.id?'selected':''}" data-id="${d.id}" tabindex="0" role="button" aria-label="Открыть путеводитель: ${esc(d.name)}"><div class="card-art" style="--card-bg:${d.tone};--card-shape:${d.shape}"><span class="country-emoji" aria-hidden="true">${d.emoji}</span><button class="card-favorite ${favorites.includes(d.id)?'active':''}" type="button" data-favorite="${d.id}" aria-label="${favorites.includes(d.id)?'Убрать из':'Добавить в'} избранное">${favorites.includes(d.id)?'♥':'♡'}</button></div><div class="card-body"><p class="card-kicker">${esc(d.region)}</p><div class="card-title-row"><h3>${esc(d.name)}</h3><span aria-hidden="true">↗</span></div><div class="card-meta"><span>${esc(d.city)}</span><strong>от $${d.cost} / день</strong></div></div></article>`).join('');document.getElementById('emptyState').hidden=list.length>0;updateSaved()}

function openDestination(id){selectedId=id;activeTab='overview';const d=destinations.find(item=>item.id===id);if(!d)return;guideTitle.textContent=d.name;guideHint.textContent=`${d.city}\n${d.region}`;guideEmpty.hidden=true;guideContent.hidden=false;banner.innerHTML=`<div><p class="eyebrow">ТВОЁ НАПРАВЛЕНИЕ · ${esc(d.region.toUpperCase())}</p><h3>${d.emoji} ${esc(d.name)}</h3><p>${esc(d.tag)} &nbsp;·&nbsp; ${esc(d.city)}</p></div><div class="banner-actions"><button class="banner-button" id="bannerFavorite" type="button">${favorites.includes(id)?'♥ В избранном':'♡ В избранное'}</button><button class="banner-button" id="shareButton" type="button">Поделиться ↗</button></div>`;document.getElementById('placeCount').textContent=d.places.length;document.querySelectorAll('.guide-tab').forEach(btn=>{btn.classList.toggle('active',btn.dataset.tab==='overview');btn.setAttribute('aria-selected',String(btn.dataset.tab==='overview'))});renderTab();renderCards();document.getElementById('guide').scrollIntoView({behavior:'smooth',block:'start'})}

function tabOverview(d){return `<div class="overview-grid"><div class="overview-copy"><span class="panel-eyebrow">ПОЧУВСТВУЙ МЕСТО</span><h4>Зачем ехать в ${esc(d.name)}?</h4><p>${esc(d.description)}</p><div class="season-strip"><span class="season-pill">✳ Лучшее время: ${esc(d.best)}</span><span class="season-pill">${esc(d.weather)}</span></div></div><div class="facts-grid"><div class="fact"><small>Столица / маршрут</small><strong>${esc(d.city)}</strong></div><div class="fact"><small>Ритм поездки</small><strong>${d.days} дней</strong></div><div class="fact"><small>Ориентир в день</small><strong>от $${d.cost} / чел.</strong></div><div class="fact"><small>Перед поездкой</small><strong>${esc(d.visa)}</strong></div></div></div>`}

function tabPlaces(d){return `<span class="panel-eyebrow">СОХРАНИ ИДЕИ ДЛЯ ПУТЕШЕСТВИЯ</span><h4 class="panel-title">Места, которые стоят остановки</h4><div class="place-list">${d.places.map((p,i)=>`<article class="place-card"><span class="place-number">0${i+1}</span><div><h4>${esc(p[0])}</h4><p>${esc(p[1])}</p></div><span class="place-type">${esc(p[2])}</span></article>`).join('')}</div>`}

function tabSafety(d){return `<div class="safety-panel"><div class="safety-top"><div><span class="panel-eyebrow">ТЁМНАЯ СТОРОНА НЕИЗВЕСТНОСТИ</span><h4>Осторожность — твой лучший спутник</h4></div><span class="risk-level">✳ ПРАКТИЧЕСКИЙ ГИД</span></div><p class="safety-intro">Не страшилки, а спокойные советы: риски зависят от города, района, времени и ситуации. Перед поездкой проверь свежие рекомендации официальных источников и местных служб.</p><div class="risk-grid">${d.risks.map(r=>`<article class="risk-item"><h5>◈ ${esc(r[0])}</h5><p>${esc(r[1])}</p></article>`).join('')}</div><p class="safety-footnote">При непосредственной опасности уйди в людное безопасное место и обратись в местные экстренные службы или к сотрудникам отеля. Сохрани адрес проживания и контакты страховой отдельно от телефона.</p></div>`}

function getPlan(d){if(!itineraries[d.id])itineraries[d.id]=[d.places[0]?.[0]||''];return itineraries[d.id]}
function tabItinerary(d){const plan=getPlan(d);return `<div class="plan-controls"><div><span class="panel-eyebrow">ТВОЙ ЧЕРНОВИК</span><p>Добавляй дни и выбирай место для каждого.</p></div><button class="small-action" id="addDay" type="button">＋ Добавить день</button></div><div class="day-list">${plan.map((place,i)=>`<div class="day-row"><span class="day-label">День ${i+1}</span><select data-day="${i}" aria-label="Место для дня ${i+1}"><option value="">Выбери место…</option>${d.places.map(p=>`<option value="${esc(p[0])}" ${place===p[0]?'selected':''}>${esc(p[0])}</option>`).join('')}</select><button class="remove-day" type="button" data-remove-day="${i}" aria-label="Удалить день ${i+1}">×</button></div>`).join('')}</div><p class="budget-note">План сохраняется в этом браузере автоматически.</p>`}

function getBudget(d){return budgets[d.id]||{days:d.days,people:1,style:'mid'}}
function budgetEstimate(d,b){const multiplier={low:.62,mid:1,high:1.72}[b.style]||1;return Math.round(d.cost*multiplier*b.days*b.people)}
function tabBudget(d){const b=getBudget(d),total=budgetEstimate(d,b),daily=Math.round(d.cost*({low:.62,mid:1,high:1.72}[b.style]||1));return `<div class="budget-layout"><div><span class="panel-eyebrow">ПРИМЕРНЫЙ РАСЧЁТ</span><h4 class="panel-title">Сколько заложить?</h4><div class="budget-form"><div class="field"><label for="tripDays">Длительность, дней</label><input id="tripDays" type="number" min="1" max="90" value="${b.days}"></div><div class="field"><label for="tripPeople">Путешественников</label><input id="tripPeople" type="number" min="1" max="20" value="${b.people}"></div><div class="field"><label for="tripStyle">Стиль путешествия</label><select id="tripStyle"><option value="low" ${b.style==='low'?'selected':''}>Экономно</option><option value="mid" ${b.style==='mid'?'selected':''}>Комфортно</option><option value="high" ${b.style==='high'?'selected':''}>Свободно</option></select></div></div></div><div class="budget-total"><small>ориентир на всю поездку</small><strong id="budgetTotal">$${total.toLocaleString('ru-RU')}</strong><span>примерно $${daily} на человека в день</span><div class="budget-breakdown"><div><small>Проживание</small><b>≈ $${Math.round(daily*.4)}/день</b></div><div><small>Еда</small><b>≈ $${Math.round(daily*.3)}/день</b></div><div><small>Транспорт и досуг</small><b>≈ $${Math.round(daily*.3)}/день</b></div></div><p class="budget-note">Оценка ориентировочная: цены зависят от сезона, города и курса валют. Не включены перелёт, страховка и крупные покупки.</p></div></div>`}

// --- AI TAB LOGIC (OpenRouter) ---
const OPENROUTER_API_KEY = "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"; // <-- ЗАМЕНИ НА СВОЙ КЛЮЧ
const AI_MODEL = "nvidia/nemotron-3-ultra-550b-a55b:free";

function tabAI(d) {
  if (!currentUser) {
    return `<div class="ai-container" style="align-items:center;justify-content:center;text-align:center;padding:40px;">
      <h4 style="font-family:var(--serif);margin-bottom:10px;">Режим ИИ заблокирован</h4>
      <p style="font-size:13px;color:var(--muted);margin-bottom:20px;">Чтобы задавать вопросы искусственному интеллекту о ${esc(d.name)}, войди в аккаунт.</p>
      <button class="small-action" onclick="openModal('login')" style="padding:10px 20px;">Войти в систему</button>
    </div>`;
  }
  const chatKey = `${currentUser.id}_${d.id}`;
  if (!db.chats[chatKey]) db.chats[chatKey] = [];
  const history = db.chats[chatKey];
  let messagesHtml = `<div class="msg system">ИИ знает всё о направлении «${esc(d.name)}». Спроси что угодно!</div>`;
  history.forEach(msg => { messagesHtml += `<div class="msg ${msg.role}">${esc(msg.text)}</div>`; });
  return `<div class="ai-container">
    <div class="ai-header"><h4>ИИ-гид по стране ${esc(d.name)} ${d.emoji}</h4><button class="small-action" id="clearChat" style="font-size:10px;color:var(--orange);border-color:var(--orange);">Очистить чат</button></div>
    <div class="ai-messages" id="aiMessages">${messagesHtml}</div>
    <div class="ai-input-area"><input type="text" id="aiInput" placeholder="Например: Что попробовать из еды? Как сэкономить?"><button id="sendAi" type="button">Отправить</button></div>
  </div>`;
}

async function sendAIMessage(d) {
  const input = document.getElementById('aiInput');
  const text = input.value.trim();
  if (!text || !currentUser) return;
  const chatKey = `${currentUser.id}_${d.id}`;
  if (!db.chats[chatKey]) db.chats[chatKey] = [];
  db.chats[chatKey].push({ role: 'user', text });
  save('appDatabase', db);
  input.value = '';
  renderTab();
  const msgContainer = document.getElementById('aiMessages');
  msgContainer.scrollTop = msgContainer.scrollHeight;
  document.getElementById('sendAi').disabled = true;

  const systemPrompt = `Ты — опытный и дружелюбный ИИ-путеводитель. Пользователь планирует поездку в страну: ${d.name}. Города: ${d.city}. Регион: ${d.region}. Описание: ${d.description}. Отвечай кратко, по делу, давай полезные советы, учитывая контекст этой страны. Используй русский язык.`;
  const messagesPayload = [{ role: "system", content: systemPrompt }, ...db.chats[chatKey].map(m => ({ role: m.role === 'user' ? 'user' : 'assistant', content: m.text }))];

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: { "Authorization": `Bearer ${OPENROUTER_API_KEY}`, "Content-Type": "application/json", "HTTP-Referer": window.location.href, "X-Title": "Travel Guide App" },
      body: JSON.stringify({ model: AI_MODEL, messages: messagesPayload })
    });
    const data = await response.json();
    if (data.choices && data.choices[0].message.content) { db.chats[chatKey].push({ role: 'ai', text: data.choices[0].message.content }); }
    else { db.chats[chatKey].push({ role: 'ai', text: 'Ошибка получения ответа от ИИ. Проверь API-ключ.' }); }
  } catch (err) { db.chats[chatKey].push({ role: 'ai', text: 'Не удалось связаться с сервером ИИ.' }); }

  save('appDatabase', db);
  document.getElementById('sendAi').disabled = false;
  renderTab();
  setTimeout(() => { const mc = document.getElementById('aiMessages'); if(mc) mc.scrollTop = mc.scrollHeight; }, 50);
}

function renderTab(){
  const d=destinations.find(item=>item.id===selectedId);
  if(!d)return;
  tabPanel.innerHTML=({
    overview:()=>tabOverview(d),
    places:()=>tabPlaces(d),
    safety:()=>tabSafety(d),
    itinerary:()=>tabItinerary(d),
    budget:()=>tabBudget(d),
    ai:()=>tabAI(d)
  }[activeTab]||(()=>tabOverview(d)))();
}

// --- EVENT LISTENERS ---
grid.addEventListener('click',e=>{const fav=e.target.closest('[data-favorite]');if(fav){e.stopPropagation();const id=fav.dataset.favorite;favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];save('travelFavorites',favorites);renderCards();if(selectedId===id&&activeTab==='overview')document.getElementById('bannerFavorite').textContent=favorites.includes(id)?'♥ В избранном':'♡ В избранное';notify(favorites.includes(id)?'Добавлено в избранное':'Удалено из избранного');return}const card=e.target.closest('.country-card');if(card)openDestination(card.dataset.id)});
grid.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('.country-card')){e.preventDefault();openDestination(e.target.dataset.id)}});
searchInput.addEventListener('input',()=>{query=searchInput.value.trim();renderCards()});
filterRow.addEventListener('click',e=>{const button=e.target.closest('[data-filter]');if(!button)return;activeFilter=button.dataset.filter;filterRow.querySelectorAll('.filter-chip').forEach(chip=>chip.classList.toggle('active',chip===button));renderCards()});
savedToggle.addEventListener('click',()=>{showSaved=!showSaved;renderCards();document.getElementById('countries').scrollIntoView({behavior:'smooth',block:'start'})});

document.getElementById('guideTabs').addEventListener('click', (e) => {
  const button = e.target.closest('[data-tab]');
  if (!button || !selectedId) return;
  if (button.dataset.tab === 'ai' && !currentUser) { openModal('login'); notify('Для доступа к ИИ необходимо войти в аккаунт'); return; }
  activeTab = button.dataset.tab;
  document.querySelectorAll('.guide-tab').forEach((tab) => { tab.classList.toggle('active', tab === button); tab.setAttribute('aria-selected', String(tab === button)); });
  renderTab();
});

banner.addEventListener('click', async e => {
  if (e.target.closest('#bannerFavorite')) { const id = selectedId; favorites = favorites.includes(id) ? favorites.filter(x => x !== id) : [...favorites, id]; save('travelFavorites', favorites); renderCards(); document.getElementById('bannerFavorite').textContent = favorites.includes(id) ? '♥ В избранном' : '♡ В избранное'; notify(favorites.includes(id) ? 'Добавлено в избранное' : 'Удалено из избранного'); }
  if (e.target.closest('#shareButton')) { const d = destinations.find(item => item.id === selectedId); const text = `Путеводитель по стране ${d.name} — ${location.href.split('#')[0]}#guide`; try { if (navigator.share) await navigator.share({ title: `${d.name} — куда дальше`, text }); else if (navigator.clipboard) { await navigator.clipboard.writeText(text); notify('Ссылка скопирована'); } else notify(text); } catch (error) { if (error.name !== 'AbortError') notify('Не удалось поделиться сейчас'); } }
});

tabPanel.addEventListener('click', e => {
  if(e.target.closest('#addDay')){const d=destinations.find(item=>item.id===selectedId);const plan=getPlan(d);plan.push('');itineraries[d.id]=plan;save('travelPlans',itineraries);renderTab()}
  const remove=e.target.closest('[data-remove-day]');if(remove){const d=destinations.find(item=>item.id===selectedId),plan=getPlan(d);if(plan.length<=1){plan[0]=''}else plan.splice(Number(remove.dataset.removeDay),1);itineraries[d.id]=plan;save('travelPlans',itineraries);renderTab()}
  if(e.target.closest('#sendAi')){const d=destinations.find(item=>item.id===selectedId);if(d)sendAIMessage(d);}
  if(e.target.closest('#clearChat')){if(currentUser && selectedId){const chatKey = `${currentUser.id}_${selectedId}`;db.chats[chatKey] = [];save('appDatabase', db);renderTab();notify('История ИИ очищена');}}
});

tabPanel.addEventListener('change',e=>{
  if(e.target.matches('[data-day]')){const d=destinations.find(item=>item.id===selectedId),plan=getPlan(d);plan[Number(e.target.dataset.day)]=e.target.value;itineraries[d.id]=plan;save('travelPlans',itineraries)}
  if(e.target.id==='tripStyle')updateBudget();
});

tabPanel.addEventListener('input',e=>{if(['tripDays','tripPeople'].includes(e.target.id))updateBudget()});
tabPanel.addEventListener('keydown', e => { if (e.target.id === 'aiInput' && e.key === 'Enter') { e.preventDefault(); const d = destinations.find(item => item.id === selectedId); if (d) sendAIMessage(d); } });

function updateBudget(){const d=destinations.find(item=>item.id===selectedId);if(!d)return;const days=Math.max(1,Math.min(90,Number(document.getElementById('tripDays')?.value)||1)),people=Math.max(1,Math.min(20,Number(document.getElementById('tripPeople')?.value)||1)),style=document.getElementById('tripStyle')?.value||'mid';budgets[d.id]={days,people,style};save('travelBudgets',budgets);const total=document.getElementById('budgetTotal');if(total)total.textContent=`$${budgetEstimate(d,budgets[d.id]).toLocaleString('ru-RU')}`;const parent=total?.parentElement;if(parent){const daily=Math.round(d.cost*({low:.62,mid:1,high:1.72}[style]||1));parent.querySelector(':scope > span').textContent=`примерно $${daily} на человека в день`;parent.querySelectorAll('.budget-breakdown b').forEach((node,i)=>node.textContent=`≈ $${Math.round(daily*[.4,.3,.3][i])}/день`)}}

// --- INIT ---
initDB().then(() => { renderCards(); });