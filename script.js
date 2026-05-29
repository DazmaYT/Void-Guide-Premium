


        let db = [
        { id: 1,cat: "easy", name: "Посетить сайт", desc: "Посетить любой сайт в браузере", active: true, reward: 1, type: "click", icon: "🌐", },
        { id: 2,cat: "easy", name: "Зайти в канал Brawl", desc: "Зайти в любой канал Brawl", active: true, reward: 1, type: "click", icon: "💬" },
        { id: 3,cat: "easy", name: "Лотерея", desc: "Купить лотерейный билет. Доступно с 10:00 до 23:50", active: true, reward: 1, type: "click", icon: "🎰" },
        { id: 4,cat: "easy", name: "Лайк Match", desc: "Поставить лайк любой анкете в Match", active: true, reward: 1, type: "click", icon: "🔥" },
        { id: 5,cat: "easy", name: "Кейс за DP", desc: "Покрутить за DP серебряный или золотой кейс", active: true, reward: 10, type: "click", icon: "📦" },
        { id: 6,cat: "easy", name: "Броски питомцу", desc: "Кинуть мяч питомцу 15 раз", active: true, reward: 2, type: "click", icon: "🎾" },
        { id: 7,cat: "easy", name: "Команды питомца", desc: "Выполнить 15 команд питомцем", active: true, reward: 2, type: "click", icon: "🐾" },
        { id: 8,cat: "easy", name: "Киностудия", desc: "Снять киностудию. Цена с Platinum VIP -2500$", active: true, reward: 2, type: "click", icon: "🎥" },
        { id: 9,cat: "easy", name: "Тир", desc: "Успешно пройти тренировку в тире (>75% попаданий)", active: true, reward: 1, type: "click", icon: "🔫" },
        { id: 10,cat: "easy", name: "Кинотеатр", desc: "5 раз добавить видео в очередь кинотеатра", active: true, reward: 1, type: "click", icon: "🎬" },
        { id: 11,cat: "easy", name: "Баскетбол", desc: "Забросить 2 мяча в баскетболе", reward: 1, active: true, type: "click",  icon: "🏀" },
        { id: 12,cat: "easy", name: "Футбол", desc: "Забить 2 гола в футболе", reward: 1, active: true, type: "click", icon: "🥅" },
        { id: 13,cat: "easy", name: "Волейбол", desc: "Играть в волейбол минуту", reward: 1, active: true, type: "click", icon: "🏐" },
        { id: 14,cat: "easy", name: "Настольный теннис", desc: "Играть в настольный теннис минуту", reward: 1, active: true, type: "click", icon: "🏓" },
        { id: 15,cat: "easy", name: "Большой теннис", desc: "Играть в большой теннис минуту", reward: 1, active: true, type: "click", icon: "🎾" },
        { id: 16,cat: "easy", name: "Колесо удачи", desc: "Сделай ставку 100 фишек в межсерверном колесе удачи казино", active: true, reward: 3, type: "click", icon: "🎡" },
        { id: 17,cat: "easy", name: "Автосервис (Своё)", desc: "Починить деталь на своем автомобиле", active: true, reward: 2, type: "click", icon: "🛠️" },
        { id: 18,cat: "easy", name: "Починить чужое авто", desc: "Починить чужой автомобиль на сервисе", active: true, reward: 1, type: "click", icon: "🚗" },
        { id: 19,cat: "easy", name: "Автобус", desc: "Проехать 2 рейса водителем автобуса", reward: 2, active: true, type: "click", icon: "🚌" },
        { id: 20,cat: "easy", name: "Стройка", desc: "Совершить 25 действий на стройке", reward: 2, active: true,type: "click", icon: "🧱" },
        { id: 21,cat: "easy", name: "Порт", desc: "Совершить 25 действий в порту", active: true, reward: 2, type: "click", icon: "🚢" },
        { id: 22,cat: "easy", name: "Шахта", desc: "Совершить 25 действий на шахте", active: true, reward: 2, type: "click", icon: "💎"},
        { id: 23,cat: "easy", name: "Дартс", desc: "Победить в дартсе", reward: 1, active: true, type: "click", icon: "🎯" },     
        { id: 24,cat: "easy", name: "Метро", desc: "Проехать одну станцию на метро", reward: 2, active: true, type: "click", icon: "🚇" },
        { id: 25,cat: "easy", name: "Ферма", desc: "Совершиить 10 действий на ферме", reward: 1, active: true, type: "click",  icon: "🌾" },
        { id: 26,cat: "easy", name: "Рыбалка", desc: "Поймать 20 рыб", reward: 4, active: true, type: "click", icon: "🎣" },
        { id: 27,cat: "medium", name: "Дальнобойщик", desc: "3 раза доставить груз(+7 уровень)", active: true, reward: 2, type: "click", icon: "🚚" },
        { id: 28,cat: "medium", name: "Сокровище", desc: "Найи сокровище (Не хлам/семена)", active: true, reward: 1, type: "click", icon: "💎" },
        { id: 29,cat: "medium", name: "Охота", desc: "Разделать 5 шкур (100% прочности)", active: true,reward: 2, type: "click", icon: "🦌" },
        { id: 30,cat: "medium", name: "Тренажерный зал", desc: "20 подходов на любом тренажёре", active: true, reward: 1, type: "click", icon: "🏋️" },
        { id: 31,cat: "medium", name: "Квесты клуба", desc: "Выполнить 2 квеста любых клубов", active: true, reward: 4, type: "click", icon: "🏆" },
        { id: 32,cat: "medium", name: "Пожарный", desc: "Потушить 25 огоньков (10+ уровень)", active: true, reward: 1, type: "click", icon: "🚒" },
        { id: 33,cat: "hard", name: "Нули в казино", desc: "Выиграть в рулетке на 0 или 00", active: true, reward: 2, type: "click",icon: "🎲" },
        { id: 34,cat: "hard", name: "Заказ материалов", desc: "Вкл/выкл автозаказ материалов для бизнеса", active: true, reward: 1, type: "click", icon: "📦" },
        { id: 35,cat: "hard", name: "Смена внешности", desc: "2 раза сменить внешность у хирурга в EMS", active: true, reward: 2, type: "click", icon: "💇" },
        { id: 36,cat: "hard", name: "Золотая рыбка", desc: "Поймать золотую рыбку", active: true, reward: 5, type: "click", icon: "🐠" },
        { id: 37,cat: "hard", name: "Почта", desc: "Отвезти 10 посылок с почты (+7 уровень)", active: true, reward: 1, type: "click", icon: "✉️" },
        { id: 38,cat: "hard", name: "Платеж по лизингу", desc: "Сделать платеж по лизингу", active: true, reward: 1, type: "click", icon: "🧾" },
        { id: 39,cat: "pairs", name: "Гонка", desc: "Поучавствовать в гонке со ставкой >1000$", active: true, reward: 1, type: "click", icon: "🏁" },
        { id: 40,cat: "pairs", name: "Тренироввчный комлпекс", desc: "5 раз победить со ставкой >100$", active: true, reward: 1, type: "click", icon: "💪" },
        { id: 41,cat: "pairs", name: "Картинг", desc: "Выиграть гонку на картинге. Вход 500$", active: true, reward: 1, type: "click", icon: "🏎️" },
        { id: 42,cat: "pairs", name: "Арена", desc: "3 раза победить влюбом режиме со ставкой >100$", active: true, reward: 1, type: "click", icon: "🏟️" },
        { id: 43,cat: "pairs", name: "Денс Батл", desc: "3 раза выиграть в дэнс батле", active: true, reward: 2, type: "click", icon: "🕺" },
        { id: 44,cat: "pairs", name: "Армрестлинг", desc: "Победить в армрестлинге", active: true, reward: 1, type: "click", icon: "💪" },
        { id: 45,cat: "pairs", name: "Мафия", desc: "Сыграть в мафию в казино", active: true, reward: 3, type: "click", icon: "🎭" },
        { id: 46,cat: "fraction", name: "Трава", desc: "Посадить траву в теплице", active: true, reward: 4, type: "click", icon: "🌿" },
        { id: 47,cat: "fraction", name: "Обезболивающие", desc: "Запустить переработку обезболивающих в лабаратории", active: true, reward: 4, type: "click", icon: "💊" },
        { id: 48,cat: "fraction", name: "Аирдропы", desc: "Принять участие в аирдропе", active: true, reward: 4, type: "click", icon: "📦" },
        { id: 49,cat: "fraction", name: "Граффити", desc: "Закрасить 7 граффити (банда)", active: true, reward: 1, type: "click", icon: "🎨" },
        { id: 50,cat: "fraction", name: "Контрабанда", desc: "Сдать 5 контрабанды (мафия)", active: true, reward: 2, type: "click", icon: "💼" },
        { id: 51,cat: "fraction", name: "Бизвар", desc: "Участвие в бизваре (мафия)", active: true, reward: 2, type: "click", icon: "🔫" },
        { id: 52,cat: "fraction", name: "Капт", desc: "Участие в капте (банда)", active: true, reward: 1, type: "click", icon: "👥" },
        { id: 53,cat: "fraction", name: "Хаммер с ВЗХ", desc: "Пригнать хаммер на респавн (крайм)", active: true, reward: 3, type: "click", icon: "🚗" },
        { id: 53,cat: "fraction", name: "Медкарта EMS", desc: "Выдать 5 медкарт EMS", active: true, reward: 2, type: "click", icon: "🏥" },
        { id: 54,cat: "fraction", name: "Вызов EMS", desc: "Закрыть 15 вызовов EMS", active: true, reward: 2, type: "click", icon: "🚑" },
        { id: 55,cat: "fraction", name: "Зелёная строка WN", desc: "Сообщения в зелёной строке (WN)", active: true, reward: 2, type: "click", icon: "📄" },
        { id: 56,cat: "fraction", name: "Обьявления WN", desc: "Отредоктировать 40 обьявлений (WN)", active: true, reward: 2, type: "click", icon: "📰" },
        { id: 57,cat: "fraction", name: "Ограбление дома", desc: "Взломать 15 замков (банды)", active: true, reward: 2, type: "click", icon: "🏠" },
        { id: 58,cat: "fraction", name: "Коды", desc: "Закрыть 5 кодов (силовые структуры)", active: true, reward: 2, type: "click", icon: "🔢" },
        { id: 59,cat: "fraction", name: "Регистрация авто", desc: "поставить на учет 2авто (LSPD)", active: true, reward: 1, type: "click", icon: "🚗" },
        { id: 60,cat: "fraction", name: "Арест", desc: "Произвести 1 арест (LSPD,LSSD)", active: true, reward: 1, type: "click", icon: "👮" },
        { id: 61,cat: "fraction", name: "Выкуп с КПЗ", desc: "Выкупить 2 человека (адвокат)", active: true, reward: 2, type: "click", icon: "🔓" },
    ];

let skillsDb = [
    { id: 'strength', name: "💪 Сила", level: 0, done: 0, goals: [100, 200, 300, 400, 500] },
    { id: 'shooting', name: "🔫 Стрельба", level: 0, done: 0, goals: [5, 5, 5, 5, 15, 15, 15, 15, 20] },
    { id: 'cooking', name: "🍳 Кулинария", level: 0, goals: [50, 100, 150, 200, 250], done: 0 },
    { id: 'fishing', name: "🎣 Рыболовство", level: 0, goals: [25, 75, 200, 400, 600, 1000], done: 0 },
    { id: 'hunting', name: "🦌 Охота", level: 0, goals: [100, 150, 200, 250, 300], done: 0 },
    { id: 'treasure', name: "💎 Поиск сокровищ", level: 0, goals: [100, 200, 300, 400, 500], done: 0 },
    { id: 'farming', name: "🌾 Фермерство", level: 0, goals: [500, 500, 1000, 1000, 1500], done: 0 },
    { id: 'builder', name: "🧱 Строитель", level: 0, goals: [1500, 2250, 3000, 3750, 4500], done: 0 },
    { id: 'miner', name: "⛏️ Шахтер", level: 0, goals: [1000, 1500, 2000, 2500, 3000], done: 0 },
    { id: 'port', name: "🚢 Порт", level: 0, goals: [1500, 2250, 3000, 3750, 4500], done: 0 },
    { id: 'taxi', name: "🚕 Таксист", level: 0, goals: [100, 200, 300, 400, 500], done: 0 },
    { id: 'diver', name: "🤿 Дайвер", level: 0, goals: [85, 170, 255, 340, 425], done: 0 },
    { id: 'collector', name: "💰 Инкассатор", level: 0, goals: [40, 80, 120, 160, 200], done: 0 },
    { id: 'bus', name: "🚌 Водитель автобуса", level: 0, goals: [35, 75, 105, 135, 175], done: 0 },
    { id: 'mechanic', name: "🛠️ Механик", level: 0, goals: [40, 80, 120, 160, 200], done: 0 },
    { id: 'fire', name: "🚒 Пожарный", level: 0, goals: [250, 500, 750, 1000, 1250], done: 0 },
    { id: 'truck', name: "🚚 Дальнобойщик", level: 0, goals: [40, 80, 120, 160, 200], done: 0 },
    { id: 'courier', name: "📦 Курьер", level: 0, goals: [100, 200, 300, 400, 500], done: 0 },
    { id: 'post', name: "✉️ Почтальон", level: 0, goals: [140, 280, 420, 560, 700], done: 0 },
    { id: 'contractor', name: "📋 Подрядчик", level: 0, goals: [10, 20, 30, 40, 50], done: 0 }
];

const defaultTimers = [
    { id: 1, name: "Почта", duration: 600, remaining: 600, running: false, icon: "✉️" },
    { id: 2, name: "Организация", duration: 7200, remaining: 7200, running: false, icon: "🏢" },
    { id: 3, name: "Автоугон", duration: 5400, remaining: 5400, running: false, icon: "🚗" },
    { id: 4, name: "Сутенерка", duration: 5400, remaining: 5400, running: false, icon: "💃" },
    { id: 5, name: "Контрабанда", duration: 300, remaining: 300, running: false, icon: "📦" },
    { id: 6, name: "Автобус", duration: 5, remaining: 5, running: false, icon: "🚌" },
    { id: 7, name: "Задание клуба", duration: 7200, remaining: 7200, running: false, icon: "♣️" },
    { id: 8, name: "Тир", duration: 5400, remaining: 5400, running: false, icon: "🎯" },
    { id: 9, name: "Швейка", duration: 87, remaining: 87, running: false, icon: "🧵" },
    { id: 10, name: "Коробки", duration: 67, remaining: 67, running: false, icon: "📦" },
    { id: 11, name: "Байкеры", duration: 7200, remaining: 7200, running: false, icon: "🏍️" },
    { id: 12, name: "Реднеки", duration: 7200, remaining: 7200, running: false, icon: "🤠" },
    { id: 13, name: "Кармит", duration: 7200, remaining: 7200, running: false, icon: "🥩" },
    { id: 14, name: "Меривезер", duration: 7200, remaining: 7200, running: false, icon: "🚁" },
    { id: 15, name: "Эпсилон", duration: 7200, remaining: 7200, running: false, icon: "🧘" },
    { id: 16, name: "Дрессировка", duration: 930, remaining: 930, running: false, icon: "🐕" }
];
        let savedTimers = JSON.parse(localStorage.getItem('myTimers'));
        let savedInventory = JSON.parse(localStorage.getItem('myInventory')) || [];
        let autoRun = JSON.parse(localStorage.getItem('timerAutoRun')) || false;
        let totalTime = 0; 
        let currentTime = 0;
        let timerInterval = null;
        let timers = (savedTimers && savedTimers.length > 0) ? savedTimers : [...defaultTimers];
        let inventory = savedInventory;
        let totalBP = parseInt(localStorage.getItem('totalBP')) || 0;
        let activeCat = localStorage.getItem('activeCat') || 'easy';
        let timerEndTime = null;
        // Новые состояния переключателей
        let hasServerMod = false;
        let hasVipMod = false;
        let mult = 1; // Изначально оба выключены = х1
        const TOTAL_TIME = 3 * 60 * 60;
        let timeClock = TOTAL_TIME;
        let runningOnline = false;
        let clockInterval = null;
        let lastTickTime = null;


        // Перехватчик изменений currentTime
let _val = 0;
Object.defineProperty(window, 'currentTime', {
    get: function() { return _val; },
    set: function(v) {
        if (v === 0 && _val !== 0) {
            console.trace("ВНИМАНИЕ: Кто-то пытается сбросить currentTime в 0!");
        }
        _val = v;
    }
});


function vibrate(type) {
    if (window.Telegram?.WebApp?.HapticFeedback) {
        Telegram.WebApp.HapticFeedback.impactOccurred('medium');
    }
}

// --- ОТРИСОВКА НАВЫКОВ ---
function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = skillsDb.map(s => {
        const isMax = s.level >= s.goals.length - 1;
        const currentGoal = s.goals[s.level];
        const percent = isMax ? 100 : Math.min(100, (s.done / currentGoal) * 100);
        
        return `
        <div class="skill-card">
            <div class="skill-header">
                <span class="skill-name">${s.name}</span>
                <span class="skill-lvl-badge">УРОВЕНЬ ${s.level + 1}</span>
            </div>
            <div class="skill-bar-container">
                <div class="skill-bar-fill" style="width: ${percent}%"></div>
            </div>
            <div class="skill-controls" style="display: flex; justify-content: space-between; align-items: center;">
                <div class="counter-box">
                    <button class="small-btn" onclick="updateSkill('${s.id}', 'done', -1)">-</button>
                    <span>${isMax ? 'MAX' : s.done + '/' + currentGoal}</span>
                    <button class="small-btn" onclick="updateSkill('${s.id}', 'done', 1)">+</button>
                </div>
<div class="lvl-nav">
    <button class="lvl-btn" onclick="updateSkill('${s.id}', 'lvl', -1)">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
    </button>
    <button class="lvl-btn" onclick="updateSkill('${s.id}', 'lvl', 1)">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
    </button>
</div>
            </div>
            <div class="set-row">
                <input type="number" id="input-${s.id}" placeholder="Ввод" class="mini-input">
                <button class="set-btn" onclick="setDone('${s.id}')">SET</button>
            </div>
        </div>`;
    }).join('');
}

function changeSkill(id, diff) {
    const s = skillsDb.find(x => x.id === id);
    s.level = Math.max(0, Math.min(s.max, s.level + diff));
    renderSkills();
    vibrate('light');
}

// --- УПРАВЛЕНИЕ ВИДАМИ ---
function switchMainView(view) {
    const sections = ['farm', 'skills', 'reseller', 'timers'];
    
    // 1. Переключаем секции
    sections.forEach(s => {
        const sectionEl = document.getElementById(s + '-section');
        const navEl = document.getElementById('nav-' + s);
        
        if (sectionEl) {
            sectionEl.style.display = (view === s) ? 'block' : 'none';
        }
        if (navEl) {
            navEl.classList.toggle('active', (view === s));
        }
    });

    // 2. Обновляем заголовок
    const titleEl = document.getElementById('page-title');
    const titles = { farm: "ФАРМ BP", skills: "НАВЫКИ", reseller: "КАЛЬКУЛЯТОР", timers: "ТАЙМЕРЫ" };
    if (titleEl && titles[view]) {
        titleEl.innerText = titles[view];
    }

    // 3. Дополнительная отрисовка при переключении
    if (view === 'timers') renderTimers();
}

function calcResell() {
    const buy = parseFloat(document.getElementById('buy-price').value);
    const profit = parseFloat(document.getElementById('profit-goal').value);
    const result = document.getElementById('calc-result');

    if (!isNaN(buy) && !isNaN(profit)) {
        const total = buy + profit;
        result.innerHTML = `Цена продажи: <br><span style="font-size: 1.5em">${total.toLocaleString()}$</span>`;
    } else {
        result.innerText = "Введите корректные данные";
    }
}

function updateSkill(id, type, diff) {
    const s = skillsDb.find(x => x.id === id);
    if (!s) return;

    if (type === 'lvl') {
        // Управление уровнем
        s.level = Math.max(0, Math.min(s.goals.length - 1, s.level + diff));
        s.done = 0; // Сброс прогресса при смене уровня
    } else if (type === 'done') {
        // Управление прогрессом
        const maxForLevel = s.goals[s.level];
        s.done = Math.max(0, Math.min(maxForLevel, s.done + diff));
        
        // Авто-переход на следующий уровень, если дошли до конца текущего
        if (s.done >= maxForLevel && s.level < s.goals.length - 1) {
            s.level++;
            s.done = 0;
        }
    }
    
    renderSkills();
    saveData();
}

// --- ФУНКЦИИ СТАТИСТИКИ И ЗАДАНИЙ ---
function updateCategoryStats() {
    const currentTasks = db.filter(q => q.cat === activeCat);
    const totalCount = currentTasks.length;
    
    const doneTasks = currentTasks.filter(q => trackingDone[q.id]);
    const doneCount = doneTasks.length;
    
    const earnedBP = doneTasks.reduce((sum, q) => sum + (q.reward * mult), 0);
    const totalPossibleBP = currentTasks.reduce((sum, q) => sum + (q.reward * mult), 0);
    
    // БЕЗОПАСНОЕ ОБНОВЛЕНИЕ UI
    const elProgress = document.getElementById('stat-progress');
    if (elProgress) elProgress.innerText = `${doneCount} / ${totalCount}`;

    const elBPProgress = document.getElementById('stat-bp-progress');
    if (elBPProgress) elBPProgress.innerText = `${earnedBP} / ${totalPossibleBP}`;
}

        let trackingDone = {};
        let trackingVal = {};

        
// Функция для раскрытия описания
function buildFeed() {
    const box = document.getElementById('feed-box');
    box.innerHTML = `
        <div id="active-items" class="task-section"><h3>🟢 Активные</h3></div>
        <div id="inactive-items" class="task-section"><h3>🔴 Неактивные</h3></div>
    `;

    const activeBox = document.getElementById('active-items');
    const inactiveBox = document.getElementById('inactive-items');

    db.filter(q => q.cat === activeCat).forEach(q => {
        const isDone = trackingDone[q.id];
        const card = document.createElement('div');
        card.className = `task-card ${isDone ? 'done' : ''}`;
        
        // Drag & Drop атрибуты
        card.draggable = true;
        card.dataset.id = q.id;
        card.ondragstart = (e) => {
            e.dataTransfer.setData('text/plain', q.id);
            card.classList.add('dragging');
        };
        card.ondragend = () => card.classList.remove('dragging');
        card.ondragover = (e) => e.preventDefault();
        card.ondrop = (e) => {
            e.preventDefault();
            const sourceId = parseInt(e.dataTransfer.getData('text/plain'));
            moveTaskInDb(sourceId, q.id);
        };

        const toggleBtn = `<button class="toggle-btn" onclick="toggleTaskStatus(${q.id}); event.stopPropagation();">
            ${q.active ? '✕' : '✔'}
        </button>`;

        let rightSide = '';
        if (!q.active) {
            rightSide = `<span style="color:#666; font-size:12px;">Выключено</span>`;
        } else if (isDone) {
            rightSide = `<button class="reset-btn" onclick="resetTask(${q.id}, event)">↺</button>`;
        } else if (q.type === 'counter') {
            rightSide = `
                <div class="counter-box" onclick="event.stopPropagation()" style="display:flex; align-items:center; gap:8px;">
                    <button class="cnt-btn" onclick="stepCount(${q.id}, -1, ${q.max}, ${q.reward})">−</button>
                    <span class="cnt-val" style="font-weight:bold;">${trackingVal[q.id] || 0}/${q.max}</span>
                    <button class="cnt-btn" onclick="stepCount(${q.id}, 1, ${q.max}, ${q.reward})">+</button>
                </div>
                <div style="font-size:10px; color:#2ecc71; text-align:center;">+${q.reward * mult} BP</div>
            `;
        } else {
            rightSide = `<button class="cnt-btn" onclick="finishTask(${q.id}, ${q.reward}, event)">+${q.reward * mult} BP</button>`;
        }

        card.innerHTML = `
            <div class="task-row" style="display:flex; align-items:center; gap:10px;">
                ${toggleBtn}
                <div class="task-meta" onclick="this.closest('.task-card').classList.toggle('expanded')" style="flex-grow:1; cursor:pointer;">
                    ${q.icon} ${q.name}
                </div>
                <div class="right-side">${rightSide}</div>
            </div>
            <div class="task-desc" style="display:none; padding:10px; border-top:1px solid #333; margin-top:10px;">
                <p style="margin:0 0 10px 0; font-size: 13px;">${q.desc}</p>
                <input type="text" placeholder="📝 Заметка..." value="${q.note || ''}" 
                       oninput="saveNote(${q.id}, this.value)" class="note-input-field" 
                       onclick="event.stopPropagation()" 
                       style="width:100%; padding:8px; background:#121620; border:1px solid #333; border-radius:6px; color:#fff;">
            </div>
        `;

        if (q.active) activeBox.appendChild(card);
        else inactiveBox.appendChild(card);
    });
}


function moveTaskInDb(sourceId, targetId) {
    const fromIndex = db.findIndex(q => q.id === sourceId);
    const toIndex = db.findIndex(q => q.id === targetId);

    if (fromIndex !== -1 && toIndex !== -1) {
        // Перемещаем, только если это один тип (актив/неактив)
        if (db[fromIndex].active === db[toIndex].active) {
            const movedItem = db.splice(fromIndex, 1)[0];
            db.splice(toIndex, 0, movedItem);
            saveData();
            buildFeed();
        }
    }
}

function stepCount(id, diff, max, reward) {
    let currentVal = trackingVal[id] || 0;
    currentVal = Math.max(0, Math.min(max, currentVal + diff));
    trackingVal[id] = currentVal;
    
    // Если набрали максимум - выполняем
    if (currentVal >= max) {
        finishTask(id, reward);
    } else {
        saveData();
        buildFeed(); // Перерисовываем цифры счетчика
    }
}

function resetTask(id, event) {
    if (event) event.stopPropagation();
    
    // Сбрасываем статус
    trackingDone[id] = false;
    trackingVal[id] = 0;
    
    // Вычитаем Reward из общего BP
    const q = db.find(x => x.id === id);
    if (q) {
        totalBP = Math.max(0, totalBP - (q.reward * mult));
        document.getElementById('stat-bp').innerText = totalBP;
    }
    
    saveData();
    buildFeed(); // Перерисовываем для обновления кнопок
    updateCategoryStats();
    vibrate('warning');
}
function finishTask(id, reward, event) {
    if (event) event.stopPropagation();
    
    // 1. Обновляем значение
    trackingDone[id] = true;
    totalBP += (reward * mult);
    
    // 2. Сохраняем в localStorage
    saveData();
    
    // 3. ПЕРЕРИСОВЫВАЕМ ИНТЕРФЕЙС (обязательно!)
    buildFeed();      
    updateFinanceUI(); // <--- Эта функция отвечает за вывод BP на экран
}

// Инициализация (вызывать при старте)
function initTasks() {
    const saved = localStorage.getItem('userTasks');
    if (saved) {
        db = JSON.parse(saved);
    } else {
        // Устанавливаем всем статус true по умолчанию
        db.forEach(task => task.active = true);
        saveTasks();
    }
}

function saveTasks() {
    localStorage.setItem('userTasks', JSON.stringify(db));
}







function toggleTaskStatus(id) {
    const task = db.find(t => t.id == id);
    if (task) {
        task.active = !task.active;
        saveData();
        buildFeed();
    }
}

// Вызывай это при запуске (в onload)
function loadTasks() {
    const saved = localStorage.getItem('myTasksDB');
    if (saved) {
        db = JSON.parse(saved);
    }
}

// Загрузка базы при старте
function loadTasksDB() {
    const saved = localStorage.getItem('userTasks');
    if (saved) {
        // Парсим и обновляем глобальную переменную db
        db = JSON.parse(saved);
    } else {
        // Если базы нет, создаем дефолтную
        db.forEach(task => {
            if (task.active === undefined) task.active = true;
            if (task.note === undefined) task.note = "";
        });
        saveData();
    }
}

function saveTasksDB() {
    localStorage.setItem('userTasksDB', JSON.stringify(db));
}
function toggleModifier(type) {
            if (type === 'server') {
                hasServerMod = !hasServerMod;
                document.getElementById('toggle-server').classList.toggle('active', hasServerMod);
            }
            if (type === 'vip') {
                hasVipMod = !hasVipMod;
                document.getElementById('toggle-vip').classList.toggle('active', hasVipMod);
            }

            // Рассчитываем итоговый X
            const labelEl = document.getElementById('stat-mult-text');
            
            if (hasServerMod && hasVipMod) {
                mult = 4;
                labelEl.innerText = "Активен: х4 (Сервер + VIP)";
            } else if (hasServerMod && !hasVipMod) {
                mult = 2;
                labelEl.innerText = "Активен: х2 (Только Сервер)";
            } else if (!hasServerMod && hasVipMod) {
                mult = 2;
                labelEl.innerText = "Активен: х2 (Только VIP)";
            } else {
                // ИЗМЕНЕНИЯ ЗДЕСЬ:
                mult = 1; 
                labelEl.innerText = "Базовый (х1)";
            }

            buildFeed();
            updateCategoryStats();
            vibrate('light');
        }

function controlOnline() {
    const btn = document.getElementById('time-btn');
    
    // 1. Добавляем проверку: если времени нет, ничего не делаем и показываем тост
    if (currentTime <= 0 && totalTime <= 0) {
        showToast("⚠️ Сначала установите время!");
        
        // Вибрация, чтобы юзер почувствовал ошибку
        if (window.Telegram?.WebApp?.HapticFeedback) {
            window.Telegram.WebApp.HapticFeedback.notificationOccurred('error');
        }
        return; // Прерываем функцию
    }

    if (timerInterval) {
        // Останавливаем
        clearInterval(timerInterval);
        timerInterval = null;
        if(btn) btn.innerText = "СТАРТ";
    } else {
        // Запускаем
        if (currentTime <= 0) currentTime = totalTime; 
        
        if (currentTime > 0) {
            startTimerInterval();
            if(btn) btn.innerText = "СТОП";
        }
    }
    saveData();
}

// Инициализация времени из поля ввода
function initTimerFromInput() {
    const h = parseInt(document.getElementById('inp-h').value) || 0;
    const m = parseInt(document.getElementById('inp-m').value) || 0;
    const s = parseInt(document.getElementById('inp-s').value) || 0;
    
    const newTotal = (h * 3600) + (m * 60) + s;
    
    if (newTotal > 0) {
        totalTime = newTotal;
        currentTime = newTotal;
        localStorage.setItem('timerSavedSeconds', currentTime);
        updateUI(); // Обновляем полосу сразу после ввода
    }
}

// Обновление полосы и поля ввода (вызывай это внутри своего интервала)
function updateUI() {
    const bar = document.getElementById('time-bar');
    
    // Обновляем полосу
    if (bar && totalTime > 0) {
        const percent = ((totalTime - currentTime) / totalTime) * 100;
        bar.style.width = Math.min(percent, 100) + "%";
    }

    // Обновляем поля ввода
    const h = Math.floor(currentTime / 3600);
    const m = Math.floor((currentTime % 3600) / 60);
    const s = currentTime % 60;

    document.getElementById('inp-h').value = String(h).padStart(2, '0');
    document.getElementById('inp-m').value = String(m).padStart(2, '0');
    document.getElementById('inp-s').value = String(s).padStart(2, '0');

    // ЛОГИКА АВТО
    if (currentTime <= 0 && autoRun && totalTime > 0) {
        currentTime = totalTime;
        startTimerInterval();
    }
}

const finishSound = new Audio('https://actions.google.com/sounds/v1/alarms/beep_short.ogg');

function startTimerInterval() {
    // 1. Очищаем старый интервал, чтобы не плодить их
    if (timerInterval) clearInterval(timerInterval);
    
    // 2. Запускаем новый
    timerInterval = setInterval(() => {
        if (currentTime > 0) {
            currentTime--;
            updateUI(); // Здесь обновляется и цифры, и полоса
            saveData();
        } else {
            // Если таймер дошел до 0
            clearInterval(timerInterval);
            timerInterval = null;
            
            // Если включен авто-рестарт
            if (autoRun) {
                console.log("Авто-запуск таймера...");
                currentTime = totalTime; // Сброс на полное время
                startTimerInterval();    // Рекурсивный запуск
            } else {
                handleTimerComplete();
            }
        }
    }, 1000);
}

// Единая логика завершения
function handleTimerComplete() {
    clearInterval(timerInterval);
    timerInterval = null;
    localStorage.removeItem('timerSavedSeconds');
    localStorage.removeItem('timerEndTime');
    
    // Звуковой индикатор
    finishSound.play().catch(e => console.log("Автовоспроизведение заблокировано браузером"));

    if (autoRun) {
        // Мгновенный перезапуск
        currentTime = totalTime;
        startTimerInterval();
        showToast("🔄 Авто-перезапуск сессии");
    } else {
        document.getElementById('time-btn').innerText = "СТАРТ";
        showToast("✅ Время вышло!");
    }
    updateUI();
}

function startTimer(durationSeconds) {
    // Вычисляем время финиша
    appState.timerEndTime = Date.now() + (durationSeconds * 1000);
    saveToDB(); // Сохраняем в "БД"
    runTimerLogic();
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    appState.timerEndTime = null; // Сбрасываем время финиша
    saveToDB(); // Сохраняем пустое состояние
    updateDisplay();
}

function runTimerLogic() {
    if (timerInterval) clearInterval(timerInterval);

    // Сразу обновляем экран, чтобы не ждать секунду
    updateDisplay();

    timerInterval = setInterval(() => {
        // Вычисляем заново каждый тик, чтобы таймер был точным
        const remaining = Math.round((appState.timerEndTime - Date.now()) / 1000);
        
        if (remaining > 0) {
            currentTime = remaining;
            updateDisplay();
        } else {
            handleTimerEnd(); 
        }
    }, 1000);
}

// Функция для сохранения "в БД"
function saveToDB() {
    // Добавляем текущее время таймера в объект состояния
    appState.currentTime = currentTime; 
    // Сохраняем всё состояние в localStorage
    localStorage.setItem('voidGuideDB', JSON.stringify(appState));
}

// Функция для загрузки "из БД"
function loadFromDB() {
    const saved = localStorage.getItem('voidGuideDB');
    if (saved) {
        const parsed = JSON.parse(saved);
        // "Раскидываем" данные обратно в объект
        appState = { ...appState, ...parsed }; 
    }
}

function resetSession() {
    // 1. Останавливаем
    clearInterval(timerInterval);
    timerInterval = null;
    
    // 2. Сбрасываем только таймер
    currentTime = 0;
    totalTime = 0;
    
    // 3. Обновляем UI
    updateUI();
    document.getElementById('time-btn').innerText = "СТАРТ";
    
    // 4. Обязательно сохраняем, чтобы в базе обнулился только таймер
    saveData(); 
    showToast("↺ Таймер сброшен");
}

function hardReset() {
    // 1. Очистка данных из памяти браузера (самое важное)
    localStorage.removeItem('voidGuideData');
    localStorage.removeItem('myTasksData');

    // 2. Сброс переменных в памяти
    totalBP = 0; 
    timeClock = TOTAL_TIME; 
    runningOnline = false;
    clearInterval(clockInterval);
    trackingDone = {}; 
    trackingVal = {};
    hasServerMod = false;
    hasVipMod = false;
    mult = 1;

    // 3. Сброс UI (интерфейса)
    document.getElementById('stat-bp').innerText = "0";
    document.getElementById('stat-hours').innerText = "0";
    document.getElementById('time-display').innerText = "03:00:00";
    document.getElementById('time-status').innerText = "Система выкл";
    document.getElementById('time-status').classList.remove('on');
    document.getElementById('timer-ring').className = "radial-timer";
    document.getElementById('time-bar').style.width = "0%";
    
    const btn = document.getElementById('time-btn');
    btn.innerText = "Старт"; 
    btn.disabled = false;

    // Сброс множителей
    document.getElementById('toggle-server').classList.remove('active');
    document.getElementById('toggle-vip').classList.remove('active');
    document.getElementById('stat-mult-text').innerText = "Базовый (х1)";

    // Перерисовка текущей категории и обратная связь
    selectCategory('easy');
    vibrate('warning');
}

        // Запуск базового состояния приложения
        selectCategory('easy');
 function selectResellTab(tabName, btnElement) {
    // 1. Убираем класс active у всех кнопок
    document.querySelectorAll('.sub-tab').forEach(btn => btn.classList.remove('active'));
    // 2. Добавляем активной кнопке
    btnElement.classList.add('active');

    // 3. Прячем всё содержимое
    document.querySelectorAll('.tab-content').forEach(content => content.style.display = 'none');
    
    // 4. Показываем нужный блок
    const activeTab = document.getElementById('tab-' + tabName);
    if (activeTab) {
        activeTab.style.display = 'block';
    }
    
    vibrate('light');
}   

// --- Функция добавления ---
function addNewItem() {
    const nameInput = document.getElementById('item-name');
    const priceInput = document.getElementById('item-price');
    const commentInput = document.getElementById('item-comment');
    const catText = document.getElementById('selected-text').innerText;
    
    // Проверка с красивой логикой
    if (!nameInput.value || priceInput.value === '') {
        showToast("Заполните все обязательные поля!", "#ff6b6b"); 
        return;
    }

    const item = { 
        id: Date.now(), 
        name: nameInput.value, 
        price: Number(priceInput.value), 
        cat: catText, 
        comment: commentInput.value 
    };

    inventory.push(item);
    saveData();
    renderInventory();
    
    // Очистка
    nameInput.value = '';
    priceInput.value = '';
    commentInput.value = '';

    // Подтверждение успеха
    showToast("Запись успешно добавлена!", "#40e0d0"); // Березовый цвет успеха
}

function saveInventory() {
    localStorage.setItem('myInventory', JSON.stringify(inventory));
}

// --- Рендеринг инвентаря с кнопками ---
function renderInventory() {
    const list = document.getElementById('inventory-list');
    const count = document.getElementById('inv-count');
    count.innerText = `(${inventory.length})`;
    
    list.innerHTML = inventory.map(item => `
        <div class="card" style="margin-top:10px; border-left: 4px solid #4a90e2;">
            <div style="display:flex; justify-content:space-between;">
                <b>${item.name}</b>
                <span>$${item.price.toLocaleString()}</span>
            </div>
            <div style="font-size: 11px; color: #888;">${item.cat}</div>
            ${item.comment ? `<div style="font-size: 12px; margin: 5px 0; font-style: italic;">💬 ${item.comment}</div>` : ''}
            <div style="display: flex; gap: 5px; margin-top: 8px;">
                <button onclick="sellItem(${item.id})" style="flex:1; background:#28a745; color:white; border:none; padding:5px; border-radius:4px;">✅ Продал</button>
                <button onclick="deleteItem(${item.id})" style="flex:1; background:#dc3545; color:white; border:none; padding:5px; border-radius:4px;">🗑️ Удалить</button>
            </div>
        </div>
    `).join('');
}

// --- Логика продажи/удаления с записью в финансы ---
function sellItem(id) {
    const item = inventory.find(i => i.id === id);
    financeData.push({ 
        id: Date.now(), name: "Продажа: " + item.name, amount: item.price, 
        type: 'income', date: new Date().toISOString().split('T')[0] 
    });
    inventory = inventory.filter(i => i.id !== id);
    saveData();
    renderInventory();
    updateFinanceUI();
}

function deleteItem(id) {
    const item = inventory.find(i => i.id === id);
    financeData.push({ 
        id: Date.now(), name: "Удаление: " + item.name, amount: item.price, 
        type: 'expense', date: new Date().toISOString().split('T')[0] 
    });
    inventory = inventory.filter(i => i.id !== id);
    saveData();
    renderInventory();
    updateFinanceUI();
}

// --- 1. ФУНКЦИИ ДЛЯ ЗАДАЧ (Farm BP) ---
function selectCategory(catName) {
    // 1. Убираем активный класс у всех кнопок
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    
    // 2. Ставим активный класс на ту, которую нажали
    const activeTab = document.getElementById(`tab-${catName}`);
    if (activeTab) activeTab.classList.add('active');
    
    // 3. ОБЯЗАТЕЛЬНО обновляем глобальную переменную, которую использует buildFeed
    activeCat = catName; 
    
    // 4. Перерисовываем список
    buildFeed(); 
    
    // 5. Остальные твои функции
    updateCategoryStats();
    vibrate('light');
}

// --- 2. ФУНКЦИИ ДЛЯ ИНВЕНТАРЯ (Выбор категории товара) ---
function toggleInvDropdown() {
    const options = document.getElementById('dropdown-options');
    options.style.display = (options.style.display === 'block') ? 'none' : 'block';
}

function selectInvCategory(name, icon) {
    const selectedText = document.getElementById('selected-text');
    selectedText.innerText = `${icon} ${name}`;
    selectedText.style.color = 'white';
    
    toggleInvDropdown(); // Закрываем меню после выбора
    vibrate('light');
}
// Запуск при загрузке
window.addEventListener('DOMContentLoaded', renderInventory);

function setDone(id) {
    const s = skillsDb.find(x => x.id === id);
    const input = document.getElementById(`input-${id}`);
    const val = parseInt(input.value);
    
    if (!isNaN(val)) {
        s.done = val;
        
        // Автоматически повышаем уровень, если ввели значение больше текущей цели
        // Используем s.goals.length - 1 для корректной работы с любым числом уровней
        while (s.done >= s.goals[s.level] && s.level < s.goals.length - 1) {
            s.done -= s.goals[s.level];
            s.level++;
        }
        
        // Если ввели больше, чем нужно для последнего уровня — фиксируем на максимуме
        if (s.level >= s.goals.length - 1 && s.done > s.goals[s.goals.length - 1]) {
            s.done = s.goals[s.goals.length - 1];
        }

        renderSkills();
        saveData();
    }
}

function showModal(title, text, onConfirm) {
    const modal = document.getElementById('modal-global');
    const titleEl = document.getElementById('modal-title');
    const textEl = document.getElementById('modal-text');
    const btnYes = document.getElementById('btn-modal-yes');
    const btnNo = document.getElementById('btn-modal-no');

    titleEl.innerText = title;
    textEl.innerText = text;
    modal.style.display = 'flex';

    // Привязываем событие "Да"
    btnYes.onclick = () => {
        onConfirm();
        modal.style.display = 'none';
    };

    // Закрытие
    btnNo.onclick = () => {
        modal.style.display = 'none';
    };
}

function saveNote(id, value) {
    const task = db.find(t => t.id == id);
    if (task) {
        task.note = value;
        saveData();
    }
}

let financeData = JSON.parse(localStorage.getItem('myFinance')) || [];

function addFinRecord(type) {
    const name = document.getElementById('fin-name').value;
    const amount = parseFloat(document.getElementById('fin-amount').value);
    
    if(!name || isNaN(amount)) {
        // Можно сделать вторую функцию для маленьких всплывашек (тостов)
        alert("Заполните поля корректно!"); // Или заменить на свой стилизованный блок
        return;
    }

    financeData.push({
        id: Date.now(),
        name,
        amount,
        type, 
        date: new Date().toISOString().split('T')[0]
    });
    
    updateFinanceUI();
    saveData();
}



function updateFinanceUI() {
    let income = 0, expense = 0;
    
    financeData.forEach(item => {
        if(item.type === 'income') income += item.amount;
        else expense += item.amount;
    });

    document.getElementById('stat-income').innerText = `$ ${income.toLocaleString()}`;
    document.getElementById('stat-expense').innerText = `$ ${expense.toLocaleString()}`;
    document.getElementById('stat-profit').innerText = `$ ${(income - expense).toLocaleString()}`;
    document.getElementById('stat-roi').innerText = expense ? `${(((income - expense) / expense) * 100).toFixed(1)}%` : "0%";

    renderFinanceHistory();
}

function renderFinanceHistory() {
    const list = document.getElementById('finance-history-list');
    list.innerHTML = financeData.map(item => `
        <div class="card" style="margin:5px 0; padding:10px">
            <div style="display:flex; justify-content:space-between">
                <span>${item.name}</span>
                <span style="color:${item.type === 'income' ? '#2ecc71' : '#e74c3c'}">
                    ${item.type === 'income' ? '+' : '-'}$${item.amount.toLocaleString()}
                </span>
            </div>
        </div>
    `).join('');
}


// Функция для фильтрации финансов по дате
function getFilteredFinance(period) {
    const now = new Date();
    return financeData.filter(item => {
        const itemDate = new Date(item.date);
        if (period === 'day') return item.date === now.toISOString().split('T')[0];
        if (period === 'week') {
            const oneWeekAgo = new Date(now.setDate(now.getDate() - 7));
            return itemDate >= oneWeekAgo;
        }
        if (period === 'month') {
            return itemDate.getMonth() === now.getMonth() && itemDate.getFullYear() === now.getFullYear();
        }
        return true; // "все время"
    });
}

function updateFinanceUI() {
    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];
    
    // Вычисляем начало недели (7 дней назад)
    const weekAgo = new Date();
    weekAgo.setDate(now.getDate() - 7);
    
    // Вычисляем начало месяца (30 дней назад)
    const monthAgo = new Date();
    monthAgo.setDate(now.getDate() - 30);

    const filtered = financeData.filter(item => {
        const itemDate = new Date(item.date);
        
        if (currentFinancePeriod === 'today') return item.date === todayStr;
        if (currentFinancePeriod === 'week') return itemDate >= weekAgo;
        if (currentFinancePeriod === 'month') return itemDate >= monthAgo;
        return true; // для 'all'
    });

    let income = 0;
    let expense = 0;
    filtered.forEach(item => {
        if (item.type === 'income') income += item.amount;
        else expense += item.amount;
    });

    // Обновляем доходы и расходы
    document.getElementById('stat-income').innerText = `$ ${income.toLocaleString()}`;
    document.getElementById('stat-expense').innerText = `$ ${expense.toLocaleString()}`;

    // ДОБАВЛЯЕМ ЭТУ СТРОКУ:
    document.getElementById('stat-bp').innerText = totalBP.toLocaleString();
}
// Функция для открытия модалки
function resetAllDoneTasks() {
    // 1. Показываем модальное окно через функцию showModal, которую мы создавали
    showModal("Сброс прогресса", "Вы уверены, что хотите сбросить все задания?", () => {
        
        // 2. Очищаем объекты в памяти
        trackingDone = {};
        trackingVal = {};
        
        // 3. ПРИНУДИТЕЛЬНО удаляем данные из хранилища браузера
        localStorage.removeItem('trackingDone');
        localStorage.removeItem('trackingVal');
        
        // 4. Обязательно вызываем сохранение
        if (typeof saveData === 'function') {
            saveData(); 
        }
        
        // 5. Перерисовываем интерфейс
        if (typeof buildFeed === 'function') buildFeed();
        if (typeof updateFinanceUI === 'function') updateFinanceUI();
        
        // 6. Уведомляем пользователя
        if (typeof showToast === 'function') {
            showToast("🔄 Прогресс сброшен");
        }
    });
}

// Функция для закрытия модалки
function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}

// Сама логика сброса
function confirmReset() {
    console.log("Начат процесс сброса...");

    // 1. Очищаем переменные в памяти
    trackingDone = {};
    trackingVal = {};
    
    // 2. СРАЗУ удаляем ключи из localStorage (самый надежный способ)
    localStorage.removeItem('trackingDone');
    localStorage.removeItem('trackingVal');
    
    // 3. Вызываем твою функцию сохранения (если она есть)
    if (typeof saveData === 'function') {
        saveData();
    }
    
    // 4. Обновляем интерфейс
    if (typeof buildFeed === 'function') buildFeed();
    if (typeof updateFinanceUI === 'function') updateFinanceUI();
    
    // 5. Закрываем окно и показываем уведомление
    closeModal();
    if (typeof showToast === 'function') {
        showToast("🔄 Прогресс полностью сброшен");
    }
}

function setPeriod(period) {
    currentFinancePeriod = period;
    
    // Обновляем визуальный класс active
    document.querySelectorAll('.sub-tab').forEach(btn => {
        btn.classList.remove('active');
    });
    // Логика подкрашивания кнопки, на которую нажали
    event.target.classList.add('active');
    
    updateFinanceUI();
    vibrate('light');
}

function resetFinance() {
    showModal("Очистка", "Удалить всю историю финансов?", () => {
        financeData = [];
        saveData();
        updateFinanceUI();
        vibrate('warning'); // если есть такая функция
    });
}

function toggleAutoRun() {
    autoRun = !autoRun;
    localStorage.setItem('timerAutoRun', autoRun);
    
    const sw = document.getElementById('auto-run-switch');
    sw.classList.toggle('on', autoRun);
    
    // Красивое сообщение
    if (typeof showToast === 'function') {
        showToast(autoRun ? "✅ АВТО-режим включен" : "❌ АВТО-режим выключен");
    }
    
    // Вибрация (если есть доступ к Telegram)
    if (window.Telegram?.WebApp?.HapticFeedback) {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    }
}




function handleTimerComplete() {
    clearInterval(timerInterval);
    timerInterval = null;
    localStorage.removeItem('timerSavedSeconds');
    localStorage.removeItem('timerEndTime');
    
    // Звуковой индикатор
    finishSound.play().catch(e => console.log("Автовоспроизведение заблокировано браузером"));

    if (autoRun) {
        // Мгновенный перезапуск
        currentTime = totalTime;
        startTimerInterval();
        showToast("🔄 Авто-перезапуск сессии");
    } else {
        document.getElementById('time-btn').innerText = "СТАРТ";
        showToast("✅ Время вышло!");
    }
    updateUI();
}

function updateTimeFromInput(val) {
    const parts = val.split(':');
    if (parts.length === 3) {
        const h = parseInt(parts[0]) || 0;
        const m = parseInt(parts[1]) || 0;
        const s = parseInt(parts[2]) || 0;
        currentTime = (h * 3600) + (m * 60) + s;
        updateDisplay();
        updateProgressBar();
    }
}

function updateProgressBar() {
    const bar = document.getElementById('time-bar');
    const percent = (currentTime / TOTAL_TIME) * 100;
    bar.style.width = percent + "%";
}

function updateDisplay() {
    const h = Math.floor(currentTime / 3600);
    const m = Math.floor((currentTime % 3600) / 60);
    const s = currentTime % 60;
    document.getElementById('time-display').innerText = 
        `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}
// 1. ИНИЦИАЛИЗАЦИЯ

function saveTimer(endTime) {
    try {
        localStorage.setItem('timerEndTime', endTime);
        console.log("Таймер успешно сохранен до:", new Date(endTime).toLocaleTimeString());
    } catch (e) {
        console.error("Ошибка сохранения в localStorage:", e);
    }
}

function formatTime(s) {
    if (s < 0) s = 0;
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h > 0 ? h+':' : ''}${m.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
}

// 2. ОТРИСОВКА (Разделена для стабильности)


function moveTimer(index, direction) {
    const newIndex = index + direction;

    // Проверка границ массива
    if (newIndex < 0 || newIndex >= timers.length) return;

    // Меняем элементы местами (деструктуризация JS)
    [timers[index], timers[newIndex]] = [timers[newIndex], timers[index]];

    saveData();     // Сохраняем новый порядок
    renderTimers(); // Перерисовываем список
}
// 3. ЛОГИКА
function addCustomTimer() {
    const name = document.getElementById('t-name').value;
    const dur = (parseInt(document.getElementById('t-h').value) || 0) * 3600 + (parseInt(document.getElementById('t-m').value) || 0) * 60 + (parseInt(document.getElementById('t-s').value) || 0);
    if (name && dur > 0) {
        timers.push({ id: Date.now(), name, duration: dur, remaining: dur, running: false, icon: document.getElementById('t-icon').value || null });
        saveData(); renderTimers();
        document.getElementById('t-name').value = '';
        showToast("✅ Таймер добавлен!");
    } else { showToast("⚠️ Введите данные!"); }
}

function showToast(message) {
    // 1. Ищем или создаем контейнер
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        // Стили контейнера: фиксируем внизу экрана
        container.style.cssText = 'position:fixed; bottom:20px; left:50%; transform:translateX(-50%); z-index:9999; pointer-events:none; display:flex; flex-direction:column; gap:10px; align-items:center;';
        document.body.appendChild(container);
    }

    // 2. Создаем само сообщение
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerText = message;
    
    // Базовые стили для красоты (если нет в CSS)
    toast.style.cssText = `
        background: rgba(109, 74, 255, 0.9);
        color: white;
        padding: 10px 20px;
        border-radius: 8px;
        font-size: 14px;
        transition: all 0.5s ease;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    `;
    
    container.appendChild(toast);

    // 3. Удаление
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 500);
    }, 2500);
}

function resetTimer() {
    // 1. Останавливаем
    clearInterval(timerInterval);
    timerInterval = null;
    
    // 2. Сбрасываем значения
    currentTime = 0;
    totalTime = 0;
    
    // 3. Сбрасываем UI (полоса уйдет в 0 благодаря updateUI)
    const bar = document.getElementById('time-bar');
    if (bar) bar.style.width = "0%";
    
    const input = document.getElementById('time-input');
    if (input) input.value = "00:00:00";
    
    const btn = document.getElementById('time-btn');
    if (btn) btn.innerText = "СТАРТ";
    
    saveData();
}

function toggleTimer(id) {
    const t = timers.find(x => x.id === id);
    if (!t) return;

    t.running = !t.running;
    
    // Если мы только что включили таймер, 
    // убедись, что setInterval внизу файла его видит
    saveTimers();
    renderTimers();
}

function deleteTimer(id) {
    showModal("Удаление", "Вы уверены, что хотите удалить этот таймер?", () => {
        // Твоя логика удаления
        timers = timers.filter(t => t.id !== id);
        saveData();
        renderTimers();
        showToast("🗑️ Таймер удален");
    });
}
function formatTime(s) {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h > 0 ? h+':' : ''}${m.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
}
function renderTimers() {
    const container = document.getElementById('timers-list');
    if (!container) return; 

    // 1. Обновление статистики в UI
    const totalEl = document.getElementById('total-timers');
    const activeEl = document.getElementById('active-timers');
    const doneEl = document.getElementById('done-timers');

    if (totalEl) totalEl.innerText = timers.length;
    if (activeEl) activeEl.innerText = timers.filter(t => t.running).length;
    if (doneEl) doneEl.innerText = timers.filter(t => t.remaining === 0).length;

    // 2. Форма добавления таймера
    const formHtml = `
        <div class="timer-input-area" style="margin-bottom: 20px;">
            <input type="text" id="t-name" placeholder="Название" class="full-input">
            <div class="time-inputs" style="display:flex; gap:5px; margin: 10px 0;">
                <select id="t-icon" class="small-input">
                    <option value="">Без иконки</option>
                    <option value="⏳">⏳</option>
                    <option value="⚡">⚡</option>
                    <option value="🔥">🔥</option>
                    <option value="💰">💰</option>
                    <option value="🛡️">🛡️</option>
                </select>
                <input type="number" id="t-h" placeholder="Ч" class="small-input">
                <input type="number" id="t-m" placeholder="М" class="small-input">
                <input type="number" id="t-s" placeholder="С" class="small-input">
            </div>
            <button class="timer-btn" style="width:100%" onclick="addCustomTimer()">+ ДОБАВИТЬ</button>
        </div>`;

    // 3. Генерация списка таймеров с поддержкой Drag & Drop
    const listHtml = timers.map((t, index) => `
        <div class="timer-card ${t.remaining === 0 ? 'finished' : ''}" 
             data-id="${t.id}" 
             draggable="true" 
             ondragstart="handleDragStart(${index})" 
             ondragover="handleDragOver(event)" 
             ondragleave="handleDragLeave(event)" 
             ondrop="handleDrop(${index})">
            
            <div class="timer-info">
                <div>
                    <span class="timer-icon">${t.icon || ''}</span> 
                    <span class="timer-name">${t.name}</span>
                </div>
                <b class="timer-val">${formatTime(t.remaining)}</b>
            </div>
            
            <div class="controls">
                <button class="timer-btn toggle-btn" onclick="toggleTimer(${t.id})">
                    ${t.running ? '⏸️' : '▶️'}
                </button>
                <button class="timer-btn" onclick="resetTimer(${t.id})">🔄</button>
                <button class="del-btn" onclick="deleteTimer(${t.id})">✕</button>
            </div>
        </div>`).join('');

    container.innerHTML = formHtml + listHtml;
}

let dragSourceIndex = null;

function handleDragStart(index) {
    dragSourceIndex = index;
    // Добавляем класс при начале перетаскивания
    event.target.classList.add('dragging');
}

function handleDragEnd(event) {
    event.target.classList.remove('dragging');
    // Удаляем подсветку со всех карточек при завершении
    document.querySelectorAll('.timer-card').forEach(c => c.classList.remove('drag-over'));
}

function handleDragOver(event) {
    event.preventDefault(); // Нужно для возможности Drop
    const card = event.target.closest('.timer-card');
    if (card) card.classList.add('drag-over');
}

function handleDragLeave(event) {
    const card = event.target.closest('.timer-card');
    if (card) card.classList.remove('drag-over');
}

function handleDrop(targetIndex) {
    if (dragSourceIndex === null || dragSourceIndex === targetIndex) return;

    // Переставляем элемент в массиве
    const movedItem = timers.splice(dragSourceIndex, 1)[0];
    timers.splice(targetIndex, 0, movedItem);

    dragSourceIndex = null;
    saveTimers();
    renderTimers(); // Полная перерисовка с новым порядком
}
// Функция для сохранения
function saveTimers() {
    localStorage.setItem('myTimers', JSON.stringify(timers));
}
setInterval(() => {
let changed = false;
    timers.forEach(t => {
        if (t.running && t.remaining > 0) {
            t.remaining--; 
            changed = true;
            
            // Если время вышло
            if (t.remaining === 0) {
                t.running = false; 
                
                const card = document.querySelector(`[data-id="${t.id}"]`);
                if (card) {
                    card.classList.add('finished');
                    
                    // Кнопка меняется на плей, так как таймер остановился
                    const btn = card.querySelector('.toggle-btn');
                    if (btn) btn.innerText = '▶️'; 
                }
            }
        }
    });

    if (changed) {
        saveTimers();
        // Обновляем UI
        document.querySelectorAll('.timer-card').forEach(card => {
            const id = parseInt(card.dataset.id);
            const t = timers.find(x => x.id === id);
            if (t) {
                // Обновляем время
                const el = card.querySelector('.timer-val');
                if (el && el.innerText !== formatTime(t.remaining)) {
                    el.innerText = formatTime(t.remaining);
                }
                // Обновляем иконку в карточке, если она уже на экране
                const iconEl = card.querySelector('.timer-icon');
                if (iconEl) iconEl.innerText = t.icon;
            }
        });
        document.getElementById('done-timers').innerText = timers.filter(t => t.remaining === 0).length;
    }
}, 1000);



// Единая функция сохранения
function saveData() {
    // Проверка: если основные данные пусты, не сохраняем, чтобы не затереть рабочую базу
    if (!db || db.length === 0) {
        console.warn("Данные БД пусты, сохранение отменено!");
        return; 
    }

    const dataToSave = {
        timers: timers,
        totalBP: totalBP,
        financeData: financeData,
        inventory: inventory,
        db: db,
        trackingDone: trackingDone,
        trackingVal: trackingVal,
        timerState: {
            currentTime: currentTime,
            totalTime: totalTime,
            autoRun: autoRun
        }
    };
    localStorage.setItem('voidGuideData', JSON.stringify(dataToSave));
}

function loadData() {
    const saved = localStorage.getItem('voidGuideData');
    if (saved) {
        try {
            const p = JSON.parse(saved);
            timers = p.timers || [];
            totalBP = p.totalBP || 0;
            financeData = p.financeData || [];
            inventory = p.inventory || [];
            db = p.db || db; // Если в сохраненных пусто - оставляем дефолтную db
            trackingDone = p.trackingDone || {};
            trackingVal = p.trackingVal || {};
            
            if (p.timerState) {
                currentTime = p.timerState.currentTime || 0;
                totalTime = p.timerState.totalTime || 0;
                autoRun = p.timerState.autoRun || false;
            }
        } catch (e) { console.error("Ошибка:", e); }
    } else {
        // ЕСЛИ ДАННЫХ НЕТ - ПРИНУДИТЕЛЬНО СОХРАНЯЕМ ДЕФОЛТ
        console.log("Данных нет, создаю новые...");
        saveData();
    }
}

window.onload = () => {
    if (window.Telegram?.WebApp) {
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
    }

    loadData(); 
    
    // Настраиваем UI
    const autoSwitch = document.getElementById('auto-run-switch');
    if(autoSwitch) autoSwitch.classList.toggle('on', autoRun);

    // Запускаем таймер, если он был
    if (currentTime > 0) startTimerInterval();
    
    updateUI();

    // Рендерим всё остальное
    try {
        switchMainView('farm');
        buildFeed(); 
        if (typeof renderSkills === 'function') renderSkills();
        if (typeof renderInventory === 'function') renderInventory();
        if (typeof updateFinanceUI === 'function') updateFinanceUI();
    } catch (e) {
        console.error("Ошибка инициализации:", e);
    }
};