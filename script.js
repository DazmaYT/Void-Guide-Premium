
let inventory = JSON.parse(localStorage.getItem('myInventory')) || [];
let currentFinancePeriod = localStorage.getItem('financePeriod') || 'today';

        let db = [
        { id: 1,cat: "easy", name: "Посетить сайт", desc: "Посетить любой сайт в браузере", reward: 1, type: "click", icon: "🌐"},
        { id: 2,cat: "easy", name: "Зайти в канал Brawl", desc: "Зайти в любой канал Brawl", reward: 1, type: "click", icon: "💬" },
        { id: 3,cat: "easy", name: "Лотерея", desc: "Купить лотерейный билет. Доступно с 10:00 до 23:50", reward: 1, type: "click", icon: "🎰" },
        { id: 4,cat: "easy", name: "Лайк Match", desc: "Поставить лайк любой анкете в Match", reward: 1, type: "click", icon: "🔥" },
        { id: 5,cat: "easy", name: "Кейс за DP", desc: "Покрутить за DP серебряный или золотой кейс", reward: 10, type: "click", icon: "📦" },
        { id: 6,cat: "easy", name: "Броски питомцу", desc: "Кинуть мяч питомцу 15 раз", reward: 2, type: "counter", max: 15, icon: "🎾" },
        { id: 7,cat: "easy", name: "Команды питомца", desc: "Выполнить 15 команд питомцем", reward: 2, type: "counter", max: 15, icon: "🐾" },
        { id: 8,cat: "easy", name: "Киностудия", desc: "Снять киностудию. Цена с Platinum VIP -2500$", reward: 2, type: "click", icon: "🎥" },
        { id: 9,cat: "easy", name: "Тир", desc: "Успешно пройти тренировку в тире (>75% попаданий)", reward: 1, type: "click", icon: "🔫" },
        { id: 10,cat: "easy", name: "Кинотеатр", desc: "5 раз добавить видео в очередь кинотеатра", reward: 1, type: "counter", max: 5, icon: "🎬" },
        { id: 11,cat: "easy", name: "Баскетбол", desc: "Забросить 2 мяча в баскетболе", reward: 1, type: "counter", max: 2, icon: "🏀" },
        { id: 12,cat: "easy", name: "Футбол", desc: "Забить 2 гола в футболе", reward: 1, type: "counter", max: 2, icon: "🥅" },
        { id: 13,cat: "easy", name: "Волейбол", desc: "Играть в волейбол минуту", reward: 1, type: "click", icon: "🏐" },
        { id: 14,cat: "easy", name: "Настольный теннис", desc: "Играть в настольный теннис минуту", reward: 1, type: "click", icon: "🏓" },
        { id: 15,cat: "easy", name: "Большой теннис", desc: "Играть в большой теннис минуту", reward: 1, type: "click", icon: "🎾" },
        { id: 16,cat: "easy", name: "Колесо удачи", desc: "Сделай ставку 100 фишек в межсерверном колесе удачи казино", reward: 3, type: "click", icon: "🎡" },
        { id: 17,cat: "easy", name: "Автосервис (Своё)", desc: "Починить деталь на своем автомобиле", reward: 2, type: "click", icon: "🛠️" },
        { id: 18,cat: "easy", name: "Починить чужое авто", desc: "Починить чужой автомобиль на сервисе", reward: 1, type: "click", icon: "🚗" },
        { id: 19,cat: "easy", name: "Автобус", desc: "Проехать 2 рейса водителем автобуса", reward: 2, type: "counter", max: 2, icon: "🚌" },
        { id: 20,cat: "easy", name: "Стройка", desc: "Совершить 25 действий на стройке", reward: 2, type: "counter", max: 25, icon: "🧱" },
        { id: 21,cat: "easy", name: "Порт", desc: "Совершить 25 действий в порту", reward: 2, type: "counter", max: 25, icon: "🚢" },
        { id: 22,cat: "easy", name: "Шахта", desc: "Совершить 25 действий на шахте", reward: 2, type: "counter", max: 25, icon: "💎"},
        { id: 23,cat: "easy", name: "Дартс", desc: "Победить в дартсе", reward: 1, type: "click", icon: "🎯" },     
        { id: 24,cat: "easy", name: "Метро", desc: "Проехать одну станцию на метро", reward: 2, type: "click", icon: "🚇" },
        { id: 25,cat: "easy", name: "Ферма", desc: "Совершиить 10 действий на ферме", reward: 1, type: "counter", max: 10, icon: "🌾" },
        { id: 26,cat: "easy", name: "Рыбалка", desc: "Поймать 20 рыб", reward: 4, type: "counter", max: 20, icon: "🎣" },
        { id: 27,cat: "medium", name: "Дальнобойщик", desc: "3 раза доставить груз(+7 уровень)", reward: 2, type: "counter", max: 4, icon: "🚚" },
        { id: 28,cat: "medium", name: "Сокровище", desc: "Найи сокровище (Не хлам/семена)", reward: 1, type: "click", icon: "💎" },
        { id: 29,cat: "medium", name: "Охота", desc: "Разделать 5 шкур (100% прочности)", reward: 2, type: "counter", max: 5, icon: "🦌" },
        { id: 30,cat: "medium", name: "Тренажерный зал", desc: "20 подходов на любом тренажёре", reward: 1, type: "counter", max: 20, icon: "🏋️" },
        { id: 31,cat: "medium", name: "Квесты клуба", desc: "Выполнить 2 квеста любых клубов", reward: 4, type: "counter", max: 2, icon: "🏆" },
        { id: 32,cat: "medium", name: "Пожарный", desc: "Потушить 25 огоньков (10+ уровень)", reward: 1, type: "counter", max: 25, icon: "🚒" },
        { id: 33,cat: "hard", name: "Нули в казино", desc: "Выиграть в рулетке на 0 или 00", reward: 2, type: "click",icon: "🎲" },
        { id: 34,cat: "hard", name: "Заказ материалов", desc: "Вкл/выкл автозаказ материалов для бизнеса", reward: 1, type: "click", icon: "📦" },
        { id: 35,cat: "hard", name: "Смена внешности", desc: "2 раза сменить внешность у хирурга в EMS", reward: 2, type: "counter", max: 2, icon: "💇" },
        { id: 36,cat: "hard", name: "Золотая рыбка", desc: "Поймать золотую рыбку", reward: 5, type: "click", icon: "🐠" },
        { id: 37,cat: "hard", name: "Почта", desc: "Отвезти 10 посылок с почты (+7 уровень)", reward: 1, type: "counter", max: 10, icon: "✉️" },
        { id: 38,cat: "hard", name: "Платеж по лизингу", desc: "Сделать платеж по лизингу", reward: 1, type: "click", icon: "🧾" },
        { id: 39,cat: "pairs", name: "Гонка", desc: "Поучавствовать в гонке со ставкой >1000$", reward: 1, type: "click", icon: "🏁" },
        { id: 40,cat: "pairs", name: "Тренироввчный комлпекс", desc: "5 раз победить со ставкой >100$", reward: 1, type: "counter", max: 5, icon: "💪" },
        { id: 41,cat: "pairs", name: "Картинг", desc: "Выиграть гонку на картинге. Вход 500$", reward: 1, type: "click", icon: "🏎️" },
        { id: 42,cat: "pairs", name: "Арена", desc: "3 раза победить влюбом режиме со ставкой >100$", reward: 1, type: "counter",max: 3, icon: "🏟️" },
        { id: 43,cat: "pairs", name: "Денс Батл", desc: "3 раза выиграть в дэнс батле", reward: 2, type: "counter", max: 3, icon: "🕺" },
        { id: 44,cat: "pairs", name: "Армрестлинг", desc: "Победить в армрестлинге", reward: 1, type: "click", icon: "💪" },
        { id: 45,cat: "pairs", name: "Мафия", desc: "Сыграть в мафию в казино", reward: 3, type: "click", icon: "🎭" },
        { id: 46,cat: "fraction", name: "Трава", desc: "Посадить траву в теплице", reward: 4, type: "click", icon: "🌿" },
        { id: 47,cat: "fraction", name: "Обезболивающие", desc: "Запустить переработку обезболивающих в лабаратории", reward: 4, type: "click", icon: "💊" },
        { id: 48,cat: "fraction", name: "Аирдропы", desc: "Принять участие в аирдропе", reward: 4, type: "counter", max: 2, icon: "📦" },
        { id: 49,cat: "fraction", name: "Граффити", desc: "Закрасить 7 граффити (банда)", reward: 1, type: "counter", max: 7, icon: "🎨" },
        { id: 50,cat: "fraction", name: "Контрабанда", desc: "Сдать 5 контрабанды (мафия)", reward: 2, type: "counter", max: 5, icon: "💼" },
        { id: 51,cat: "fraction", name: "Бизвар", desc: "Участвие в бизваре (мафия)", reward: 2, type: "counter",max: 5, icon: "🔫" },
        { id: 52,cat: "fraction", name: "Капт", desc: "Участие в капте (банда)", reward: 1, type: "click", icon: "👥" },
        { id: 53,cat: "fraction", name: "Хаммер с ВЗХ", desc: "Пригнать хаммер на респавн (крайм)", reward: 3, type: "click", icon: "🚗" },
        { id: 53,cat: "fraction", name: "Медкарта EMS", desc: "Выдать 5 медкарт EMS", reward: 2, type: "counter", max: 5, icon: "🏥" },
        { id: 54,cat: "fraction", name: "Вызов EMS", desc: "Закрыть 15 вызовов EMS", reward: 2, type: "counter", max: 15, icon: "🚑" },
        { id: 55,cat: "fraction", name: "Зелёная строка WN", desc: "Сообщения в зелёной строке (WN)", reward: 2, type: "click", icon: "📄" },
        { id: 56,cat: "fraction", name: "Обьявления WN", desc: "Отредоктировать 40 обьявлений (WN)", reward: 2, type: "counter",max: 40, icon: "📰" },
        { id: 57,cat: "fraction", name: "Ограбление дома", desc: "Взломать 15 замков (банды)", reward: 2, type: "counter", max: 15, icon: "🏠" },
        { id: 58,cat: "fraction", name: "Коды", desc: "Закрыть 5 кодов (силовые структуры)", reward: 2, type: "counter", max: 5, icon: "🔢" },
        { id: 59,cat: "fraction", name: "Регистрация авто", desc: "поставить на учет 2авто (LSPD)", reward: 1, type: "counter",max: 2, icon: "🚗" },
        { id: 60,cat: "fraction", name: "Арест", desc: "Произвести 1 арест (LSPD,LSSD)", reward: 1, type: "click", icon: "👮" },
        { id: 61,cat: "fraction", name: "Выкуп с КПЗ", desc: "Выкупить 2 человека (адвокат)", reward: 2, type: "counter", max: 2, icon: "🔓" },
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
    { id: 9, name: "Швейка", duration: 5220, remaining: 5220, running: false, icon: "🧵" },
    { id: 10, name: "Коробки", duration: 4020, remaining: 4020, running: false, icon: "📦" },
    { id: 11, name: "Байкеры", duration: 7200, remaining: 7200, running: false, icon: "🏍️" },
    { id: 12, name: "Реднеки", duration: 7200, remaining: 7200, running: false, icon: "🤠" },
    { id: 13, name: "Кармит", duration: 7200, remaining: 7200, running: false, icon: "🥩" },
    { id: 14, name: "Меривезер", duration: 7200, remaining: 7200, running: false, icon: "🚁" },
    { id: 15, name: "Эпсилон", duration: 7200, remaining: 7200, running: false, icon: "🧘" },
    { id: 16, name: "Дрессировка", duration: 930, remaining: 930, running: false, icon: "🐕" }
];
        let h = 3, m = 0, s = 0;
        let totalTime = 10800; // 3 часа в секундах
        let currentTime = 10800;
        let timerInterval = null;
        let timers = [];
        let totalBP = 0;
        let activeCat = 'easy';
        
        // Новые состояния переключателей
        let hasServerMod = false;
        let hasVipMod = false;
        let mult = 1; // Изначально оба выключены = х1

        const TOTAL_TIME = 3 * 60 * 60;
        let timeClock = TOTAL_TIME;
        let runningOnline = false;
        let clockInterval = null;
        let lastTickTime = null;

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
function toggleDescription(id) {
    const descEl = document.getElementById(`desc-${id}`);
    descEl.style.display = (descEl.style.display === 'none' || descEl.style.display === '') ? 'block' : 'none';
}

function buildFeed() {
    const box = document.getElementById('feed-box');
    box.innerHTML = '';
    const filtered = db.filter(q => q.cat === activeCat);

    filtered.forEach(q => {
        if (trackingDone[q.id] === undefined) trackingDone[q.id] = false;
        if (q.type === 'counter' && trackingVal[q.id] === undefined) trackingVal[q.id] = 0;

        const card = document.createElement('div');
        card.className = `task-card ${trackingDone[q.id] ? 'done' : ''}`;
        card.id = `card-${q.id}`;
        
        // Добавляем клик для раскрытия
        card.onclick = (e) => {
            if (e.target.closest('.task-right') || e.target.closest('.note-input-field')) return;
            card.classList.toggle('expanded');
            vibrate('light');
        };

        let rightSide = '';
        if (trackingDone[q.id]) {
            rightSide = `<button class="reset-btn" onclick="resetTask(${q.id}, event)">Сброс</button>`;
        } else if (q.type === 'click') {
            rightSide = `<button class="cnt-btn" onclick="finishTask(${q.id}, ${q.reward}, event)">+${q.reward * mult} BP</button>`;
        } else {
            rightSide = `
                <div class="task-right" onclick="event.stopPropagation()">
                    <div class="task-info-col">
                        <span class="task-counter-display" id="badge-${q.id}">${trackingVal[q.id]}/${q.max}</span>
                        <span class="task-reward-text">+${q.reward * mult} BP</span>
                    </div>
                    <div class="task-btns-group">
                        <button class="cnt-btn" onclick="stepCount(${q.id}, -1, ${q.max}, ${q.reward})">−</button>
                        <button class="cnt-btn" onclick="stepCount(${q.id}, 1, ${q.max}, ${q.reward})">+</button>
                    </div>
                </div>`;
        }

        card.innerHTML = `
            <div class="task-row">
                <div class="task-meta">
                    <div class="task-icon">${q.icon}</div>
                    <span class="task-title">${q.name}</span>
                </div>
                <div id="slot-${q.id}">${rightSide}</div>
            </div>
            <div class="task-desc">
                ${q.desc}
                <div class="note-area" onclick="event.stopPropagation()">
                    <input type="text" placeholder="📝 Заметка..." value="${q.note || ''}" 
                           onchange="saveNote(${q.id}, this.value)" class="note-input-field">
                </div>
            </div>
        `;
        box.appendChild(card);
    });
}


function stepCount(id, diff, max, reward) {
    let next = (trackingVal[id] || 0) + diff;
    if (next < 0) next = 0;
    if (next > max) next = max;

    trackingVal[id] = next;
    saveData();
    
    // Обновляем текст в правой части
    const el = document.getElementById(`badge-${id}`);
    if (el) el.innerText = `${next}/${max}`;

    if (next === max) {
        finishTask(id, reward, null);
    } else {
        vibrate('light');
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
        function finishTask(id, base, event) {
            if (event) event.stopPropagation();
            if (trackingDone[id]) return;

            trackingDone[id] = true;
            totalBP += (base * mult);
            saveData();
            document.getElementById('stat-bp').innerText = totalBP;

            const card = document.getElementById(`card-${id}`);
            if(card) {
                card.className = "task-card done";
                card.classList.remove('expanded');
            }
            const slot = document.getElementById(`slot-${id}`);
            if(slot) slot.innerHTML = '<span class="task-btn">Готово</span>';

            buildFeed();
            updateCategoryStats(); // Добавить сюда
            vibrate('success');
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
    const status = document.getElementById('time-status');
    const ring = document.getElementById('timer-ring');

    if (timerInterval) {
        // ОСТАНОВКА
        clearInterval(timerInterval);
        timerInterval = null;
        btn.innerText = "СТАРТ";
        status.innerText = "ПАУЗА";
    } else {
        // СТАРТ
        if (currentTime <= 0) return; // Не стартуем, если время вышло
        
        ring.classList.remove('pulsing');
        btn.innerText = "СТОП";
        status.innerText = "РАБОТА";
        
        timerInterval = setInterval(() => {
            if (currentTime > 0) {
                currentTime--;
                updateDisplay();
            } else {
                // ЗАВЕРШЕНИЕ
                clearInterval(timerInterval);
                timerInterval = null;
                ring.classList.add('pulsing');
                status.innerText = "ЗАВЕРШЕНО";
                btn.innerText = "СТАРТ";
            }
        }, 1000);
    }
}

function resetSession() {
    clearInterval(timerInterval);
    timerInterval = null;
    currentTime = 0; // Или установи на дефолтное значение
    h = 0; m = 0; s = 0;
    
    // Обновляем визуальные цифры настроек
    document.getElementById('val-h').innerText = "00";
    document.getElementById('val-m').innerText = "00";
    document.getElementById('val-s').innerText = "00";
    
    applyCustomTime(); // Сбрасываем дисплей
    document.getElementById('timer-ring').classList.remove('pulsing');
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
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    const activeTab = document.getElementById(`tab-${catName}`);
    if (activeTab) activeTab.classList.add('active');
    
    activeCat = catName;
    buildFeed(); 
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
    const overlay = document.getElementById('modal-overlay');
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-text').innerText = text;
    
    overlay.classList.add('visible');
    
    document.getElementById('btn-confirm').onclick = () => {
        onConfirm();
        overlay.classList.remove('visible');
    };
    document.getElementById('btn-cancel').onclick = () => overlay.classList.remove('visible');
}

function saveNote(id, value) {
    const task = db.find(t => t.id == id);
    if (task) {
        task.note = value;
        saveData(); // Теперь вызываем общую функцию сохранения
        console.log(`Заметка для ${task.name} сохранена`);
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

    document.getElementById('stat-income').innerText = `$ ${income.toLocaleString()}`;
    document.getElementById('stat-expense').innerText = `$ ${expense.toLocaleString()}`;
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



function adjust(type, delta) {
        if (type === 'h') h = Math.max(0, h + delta);
        if (type === 'm') m = Math.min(59, Math.max(0, m + delta));
        if (type === 's') s = Math.min(59, Math.max(0, s + delta));
        document.getElementById(`val-${type}`).innerText = (type === 'h' ? h : (type === 'm' ? m : s)).toString().padStart(2, '0');
    }

function applyCustomTime() {
        totalTime = (h * 3600) + (m * 60) + s;
        currentTime = totalTime;
        clearInterval(timerInterval);
        timerInterval = null;
        document.getElementById('timer-ring').classList.remove('pulsing');
        updateDisplay();
        document.getElementById('time-status').innerText = "ПАУЗА";
        document.getElementById('time-btn').innerText = "СТАРТ";
    }

function updateDisplay() {
        const hh = Math.floor(currentTime / 3600);
        const mm = Math.floor((currentTime % 3600) / 60);
        const ss = currentTime % 60;
        document.getElementById('time-display').innerText = `${hh.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
        const elapsed = totalTime - currentTime;
        document.getElementById('time-bar').style.width = (totalTime > 0 ? (elapsed / totalTime) * 100 : 0) + "%";
    }
// 1. ИНИЦИАЛИЗАЦИЯ

function saveTimers() { localStorage.setItem('myTimers', JSON.stringify(timers)); }

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
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerText = message;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 2500);
}

function resetTimer(id) {
    const t = timers.find(x => x.id === id);
    if (t) { t.remaining = t.duration; t.running = false; saveData(); renderTimers(); }
}

function toggleTimer(id) {
    const t = timers.find(x => x.id === id);
    if (t) { t.running = !t.running; saveData(); renderTimers(); }
}

function deleteTimer(id) {
    const modal = document.getElementById('modal-container');
    
    // Показываем окно
    modal.className = 'modal-active'; 
    
    // Функция закрытия с анимацией
    const closeModal = () => {
        modal.classList.add('modal-closing');
        setTimeout(() => {
            modal.style.display = 'none';
            modal.className = ''; // Сброс классов
        }, 200);
    };

    // Привязываем события
    document.getElementById('btn-del-yes').onclick = () => {
        timers = timers.filter(t => t.id !== id);
        saveData();
        renderTimers();
        closeModal();
        showToast("🗑️ Таймер удален");
    };

    // Закрытие при клике на "Нет"
    modal.querySelector('.btn-no').onclick = closeModal;
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

    // 1. Статистика
    document.getElementById('total-timers').innerText = timers.length;
    document.getElementById('active-timers').innerText = timers.filter(t => t.running).length;
    document.getElementById('done-timers').innerText = timers.filter(t => t.remaining === 0).length;

    // 2. ФОРМА (Убедись, что она здесь есть!)
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

    // 3. СПИСОК
const listHtml = timers.map((t, index) => `
<div class="timer-card ${t.remaining === 0 ? 'finished' : ''}" 
         data-id="${t.id}" 
         draggable="true" 
         ondragstart="dragSourceIndex = ${index}" 
         ondragover="event.preventDefault()" 
         ondrop="handleDrop(${index})">
            
<div class="timer-info">
    <div>
        <span class="timer-icon">${t.icon || ''}</span> 
        ${t.name}
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



// 2. ФУНКЦИЯ СОХРАНЕНИЯ (ЕДИНАЯ ДЛЯ ВСЕГО)
function saveData() {
    const dataToSave = {
        totalBP, trackingDone, trackingVal, db, skillsDb, 
        hasServerMod, hasVipMod, mult, timeClock, financeData, inventory, timers
    };
    localStorage.setItem('voidGuideData', JSON.stringify(dataToSave));
    localStorage.setItem('myFinance', JSON.stringify(financeData));
}

// 3. ФУНКЦИЯ ЗАГРУЗКИ
function loadData() {
    const saved = localStorage.getItem('voidGuideData');
    
    if (!saved) {
        console.log("Данных нет, загружаем дефолты");
        timers = [...defaultTimers];
        saveData();
    } else {
        try {
            const p = JSON.parse(saved);
            // Если в сохраненных данных есть таймеры - берем их, если нет - дефолты
            timers = (p.timers && p.timers.length > 0) ? p.timers : [...defaultTimers];
            
            totalBP = p.totalBP || 0;
            financeData = p.financeData || [];
            inventory = p.inventory || [];
            // Догрузи остальные переменные здесь
        } catch (e) {
            console.error("Ошибка парсинга, используем дефолты:", e);
            timers = [...defaultTimers];
        }
    }

}

// 4. ИНИЦИАЛИЗАЦИЯ ЧЕРЕЗ WINDOW.ONLOAD
window.onload = () => {
    // А) Инициализация Telegram
    if (window.Telegram?.WebApp) {
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
    }

    // Б) Загрузка данных
    loadData();

    // В) Отрисовка интерфейса
    try {
        switchMainView('farm'); // Стартовый экран
        renderSkills();
        renderInventory();
        updateFinanceUI();
        console.log("Приложение успешно запущено!");
    } catch (e) {
        console.error("Критическая ошибка отрисовки:", e);
    }
};

