


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
        { id: 54,cat: "fraction", name: "Медкарта EMS", desc: "Выдать 5 медкарт EMS", active: true, reward: 2, type: "click", icon: "🏥" },
        { id: 55,cat: "fraction", name: "Вызов EMS", desc: "Закрыть 15 вызовов EMS", active: true, reward: 2, type: "click", icon: "🚑" },
        { id: 56,cat: "fraction", name: "Зелёная строка WN", desc: "Сообщения в зелёной строке (WN)", active: true, reward: 2, type: "click", icon: "📄" },
        { id: 57,cat: "fraction", name: "Обьявления WN", desc: "Отредоктировать 40 обьявлений (WN)", active: true, reward: 2, type: "click", icon: "📰" },
        { id: 58,cat: "fraction", name: "Ограбление дома", desc: "Взломать 15 замков (банды)", active: true, reward: 2, type: "click", icon: "🏠" },
        { id: 59,cat: "fraction", name: "Коды", desc: "Закрыть 5 кодов (силовые структуры)", active: true, reward: 2, type: "click", icon: "🔢" },
        { id: 60,cat: "fraction", name: "Регистрация авто", desc: "поставить на учет 2авто (LSPD)", active: true, reward: 1, type: "click", icon: "🚗" },
        { id: 61,cat: "fraction", name: "Арест", desc: "Произвести 1 арест (LSPD,LSSD)", active: true, reward: 1, type: "click", icon: "👮" },
        { id: 62,cat: "fraction", name: "Выкуп с КПЗ", desc: "Выкупить 2 человека (адвокат)", active: true, reward: 2, type: "click", icon: "🔓" },
    ];

let skillsDb = [
    { 
        id: 'strength', 
        name: "💪 Сила", 
        level: 0, 
        done: 0, 
        goals: [100, 200, 300, 400, 500],
        desc: "● Улучшается рельеф мышц<br>● Увеличивается скорость бега и плавания на 4% за каждый уровень<br>● Увеличивается скорость копания лопатой, лазания по лестницам и продолжительность дыхания под водой"
    },
    { 
        id: 'shooting', 
        name: "🎯 Стрельба", 
        level: 0, 
        done: 0, 
        goals: [5, 5, 5, 5, 5, 15, 15, 15, 15, 20],
        desc: "● Уменьшение разброса<br>● Доступ к двум анимациям стрельбы с пистолетов"
    },
    { 
        id: 'cooking', 
        name: "👨‍🍳 Кулинария", 
        level: 0, 
        done: 0,
        goals: [50, 100, 150, 200, 250], 
        desc: "● Доступ к новым видам блюд каждый уровень"
    },
    { 
        id: 'fishing', 
        name: "🎣 Рыболовство", 
        level: 0, 
        done: 0,
        goals: [25, 75, 200, 400, 600, 1000], 
        desc: "● 3, 4, 5, 6 уровни — новые виды рыб"
    },
    { 
        id: 'hunting', 
        name: "🏹 Охота", 
        level: 0, 
        done: 0,
        goals: [100, 150, 200, 250, 300], 
        desc: "● Каждый уровень увеличивается минимальное качество шкур<br>● Появляется шанс сохранить прочность разделочного ножа"
    },
    { 
        id: 'treasure', 
        name: "💎 Поиск сокровищ", 
        level: 0, 
        done: 0,
        goals: [100, 200, 300, 400, 500], 
        desc: "● Каждый уровень уменьшение шанса найти хлам<br>● Прибавка по 10% к цене сдачи сокровищ за каждый уровень"
    },
    { 
        id: 'farming', 
        name: "🌾 Фермерство", 
        level: 0, 
        done: 0,
        goals: [500, 500, 1000, 1000, 1500], 
        desc: "● Увеличение оплаты каждый уровень<br>● 2 уровень — доступ к трактору для прополки<br>● 3 уровень — доступ к посадке пшеницы и сбору на комбайне<br>● 5 уровень — доступ к самолёту для распыления химикатов"
    },
    { 
        id: 'builder', 
        name: "🏗️ Строитель", 
        level: 0, 
        done: 0,
        goals: [1500, 2250, 3000, 3750, 4500], 
        desc: "● Увеличение оплаты каждый уровень<br>● 3 уровень — доступ к работе на грузоподъёмнике"
    },
    { 
        id: 'miner', 
        name: "⛏️ Шахтёр", 
        level: 0, 
        done: 0,
        goals: [1000, 1500, 2000, 2500, 3000], 
        desc: "● Увеличение оплаты каждый уровень<br>● 3 уровень — доступ к работе на бульдозере"
    },
    { 
        id: 'port', 
        name: "🚢 Порт", 
        level: 0, 
        done: 0,
        goals: [1500, 2250, 3000, 3750, 4500], 
        desc: "● Увеличение оплаты каждый уровень<br>● 3 уровень — доступ к работе на контейнерном погрузчике"
    },
    { 
        id: 'taxi', 
        name: "🚕 Таксист", 
        level: 0, 
        done: 0,
        goals: [100, 200, 300, 400, 500], 
        desc: "● Постепенное улучшение авто техническим тюнингом каждый уровень<br>● 1 уровень — доступ к BF Olivia A7<br>● 2 уровень — доступ к Benefactor Schafter<br>● 3 уровень — доступ к Enus Deit<br>● 4 уровень — доступ к Benefactor E-Series 63 W213<br>● 5 уровень — доступ к Benefactor S-series W223"
    },
    { 
        id: 'diver', 
        name: "🤿 Дайвер", 
        level: 0, 
        done: 0,
        goals: [85, 170, 255, 340, 425], 
        desc: "● Увеличение оплаты каждый уровень<br>● 3 уровень — доступ к работе в озере Сэнди-Шорс<br>● 5 уровень — доступ к работе на батискафе"
    },
    { 
        id: 'collector', 
        name: "💰 Инкассатор", 
        level: 0, 
        done: 0,
        goals: [40, 80, 120, 160, 200], 
        desc: "● Увеличение оплаты каждый уровень"
    },
    { 
        id: 'bus', 
        name: "🚌 Водитель автобуса", 
        level: 0, 
        done: 0,
        goals: [35, 75, 105, 135, 175], 
        desc: "● Увеличение оплаты каждый уровень<br>● Новые маршруты каждый уровень"
    },
    { 
        id: 'mechanic', 
        name: "🔧 Механик", 
        level: 0, 
        done: 0,
        goals: [40, 80, 120, 160, 200], 
        desc: "● Постепенное улучшение авто техническим тюнингом каждый уровень<br>● 5 уровень — возможность работы на машине-эвакуаторе"
    },
    { 
        id: 'fire', 
        name: "🚒 Пожарный", 
        level: 0, 
        done: 0,
        goals: [250, 500, 750, 1000, 1250], 
        desc: "● Увеличение оплаты каждый уровень"
    },
    { 
        id: 'truck', 
        name: "🚛 Дальнобойщик", 
        level: 0, 
        done: 0,
        goals: [40, 80, 120, 160, 200], 
        desc: "● Увеличение оплаты каждый уровень"
    },
    { 
        id: 'courier', 
        name: "📦 Курьер", 
        level: 0, 
        done: 0, 
        goals: [100, 200, 300, 400, 500], 
        desc: "● Увеличение оплаты каждый уровень<br>● 5 уровень — появляется нумерация оптимального маршрута"
    },
    { 
        id: 'post', 
        name: "📮 Почтальон", 
        level: 0, 
        done: 0, 
        goals: [140, 280, 420, 560, 700], 
        desc: "● Увеличение оплаты за посылки на почте на 100$ за каждый уровень<br>● 5 уровень — доступ к работе на своём велосипеде или мотоцикле"
    },
    { 
        id: 'contractor', 
        name: "📋 Подрядчик", 
        level: 0, 
        done: 0, 
        goals: [10, 20, 30, 40, 50], 
        desc: "● +2% к шансу закрытия контракта за каждый уровень"
    }
];

const medicQuestions = [
    { q: "Артериальное кровотечение", a: "Жгут выше раны" },
    { q: "Венозное кровотечение", a: "Жгут ниже раны" },
    { q: "Огнестрел", a: "Повязка антисептическая" },
    { q: "Ожог кислотой", a: "Щелочной раствор" },
    { q: "Ожог щелочью", a: "Кислотный раствор" },
    { q: "Ожог термический", a: "Холодный компресс" },
    { q: "Обморожение", a: "Тепло" },
    { q: "Недостаточность", a: "Таблетка" },
    { q: "Перелом", a: "Наложить шину" },
    { q: "Растяжение", a: "Тугая повязка" },
    { q: "Ушиб", a: "Лед / холодный компресс" },
    { q: "Вывих", a: "Наложить шину" },
    { q: "Рана", a: "Повязка антисептическая" }
];

const gamesDb = [
    { id: 'roulette', name: "Рулетка 5RP", icon: "🎡", desc: "Испытай свою удачу в фирменной рулетке.", status: "soon" },
    { id: 'match3', name: "Три в ряд", icon: "🧩", desc: "Собирай кристаллы в ряд и получай бонусы.", status: "active" },
    { id: 'fishing', name: "Мини-рыбалка", icon: "🎣", desc: "Симулятор ловли редкой рыбы.", status: "soon" },
    { id: 'medic', name: "Тест медика", icon: "🏥", desc: "Проверь свои знания медицины.", status: "active" },
    { id: 'slots', name: "Слоты 777", icon: "🎰", desc: "Крути барабаны и сорви куш!", status: "active" }
];

const defaultTimers = [
    { id: 1, name: "Почта", duration: 600, remaining: 600, running: false, icon: "✉️", enabled: true },
    { id: 2, name: "Организация", duration: 7200, remaining: 7200, running: false, icon: "🏢", enabled: true },
    { id: 3, name: "Автоугон", duration: 5400, remaining: 5400, running: false, icon: "🚗", enabled: true },
    { id: 4, name: "Сутенерка", duration: 5400, remaining: 5400, running: false, icon: "💃", enabled: true },
    { id: 5, name: "Контрабанда", duration: 300, remaining: 300, running: false, icon: "📦", enabled: true },
    { id: 6, name: "Автобус", duration: 5, remaining: 5, running: false, icon: "🚌", enabled: true },
    { id: 7, name: "Задание клуба", duration: 7200, remaining: 7200, running: false, icon: "♣️", enabled: true },
    { id: 8, name: "Тир", duration: 5400, remaining: 5400, running: false, icon: "🎯", enabled: true },
    { id: 9, name: "Швейка", duration: 87, remaining: 87, running: false, icon: "🧵", enabled: true },
    { id: 10, name: "Коробки", duration: 67, remaining: 67, running: false, icon: "📦", enabled: true },
    { id: 11, name: "Байкеры", duration: 7200, remaining: 7200, running: false, icon: "🏍️", enabled: true },
    { id: 12, name: "Реднеки", duration: 7200, remaining: 7200, running: false, icon: "🤠", enabled: true },
    { id: 13, name: "Кармит", duration: 7200, remaining: 7200, running: false, icon: "🥩", enabled: true },
    { id: 14, name: "Меривезер", duration: 7200, remaining: 7200, running: false, icon: "🚁", enabled: true },
    { id: 15, name: "Эпсилон", duration: 7200, remaining: 7200, running: false, icon: "🧘", enabled: true },
    { id: 16, name: "Дрессировка", duration: 930, remaining: 930, running: false, icon: "🐕", enabled: true }
];

const achievementsConfig = [
    { id: "1", title: "Дружелюбный сосед", desc: "Пожать руку незнакомцам 1000 раз.", goal: 1000, reward: 35, status: "available",isSystem: false },
    { id: "2", title: "Игровой маньяк", desc: "Отыграть на сервере за день 15 часов.", goal: 15, reward: 25, status: "available",isSystem: false },
    { id: "3", title: "Приятный отдых", desc: "Выпить 100 бутылок алкоголя.", goal: 100, reward: 25, status: "available",isSystem: false },
    { id: "4", title: "Сторожила сервера", desc: "Отыграть на сервере 1000 часов.", goal: 100, reward: 25, status: "available",isSystem: false },
    { id: "5", title: "Ветеран войны", desc: "Совершить 200 убийств на каптах или бизварах.", goal: 200, reward: 25, status: "available",isSystem: false },
    { id: "6", title: "Я сажал фиалки, честно!", desc: "Получите 5000 травы в теплице.", goal: 5000, reward: 50, status: "available",isSystem: false },
    { id: "7", title: "Пабло Аналгобар", desc: "Получите 1000 анальгетиков в лаборатории.", goal: 1000, reward: 25, status: "available",isSystem: false },
    { id: "8", title: "Транжира", desc: "Потратить 1000000$ на покупках одежды.", goal: 1000000, reward: 25, status: "available",isSystem: false },

    { id: "9", title: "За проезд передаём", desc: "Оплатите поездку на автобусе 1000 раз на разных рейсах.", goal: 1000, reward: 0, status: "available",isSystem: false },

    { id: "10", title: "Заслуженный строитель", desc: "Сделать 1000 действий на стройке.", goal: 1000, reward: 50, status: "available",isSystem: false },
    { id: "11", title: "Каменный проныра", desc: "Перетаскать 1000 камней на шахте.", goal: 1000, reward: 50, status: "available",isSystem: false },
    { id: "12", title: "Я раньше почему злой был", desc: "Доставить 1000 почтовых отправлений.", goal: 1000, reward: 50, status: "available",isSystem: false },
    { id: "13", title: "Король дорог", desc: "Сделать 100 перевозок груза, работая дальнобойщиком.", goal: 100, reward: 25, status: "available",isSystem: false },
    { id: "14", title: "Добрый самаритянин", desc: "5 раз помочь пострадавшим NPC в дорожных авариях с починкой авто.", goal: 5, reward: 25, status: "available",isSystem: false },
    { id: "15", title: "Водитель от Бога", desc: "Совершить 1000 перевозок, работая в такси.", goal: 1000, reward: 25, status: "available",isSystem: false },
    { id: "16", title: "Профессиональный ловец", desc: "Поймать 2000 рыб.", goal: 2000, reward: 25, status: "available",isSystem: false },
    { id: "17", title: "Время загадать желание", desc: "Поймать золотую рыбку и загадать желание.", goal: 1, reward: 50, status: "available",isSystem: false },
    { id: "18", title: "Король мероприятий", desc: "Выиграть в мероприятиях 50 раз.", goal: 50, reward: 0, status: "locked",isSystem: false },
    { id: "19", title: "Бракосочетание", desc: "Соедините брачные узы воедино.", goal: 1, reward: 25, status: "available",isSystem: false },
    { id: "20", title: "Большой куш", desc: "Сорвать Джекпот (выбить 777 в любом из автоматов в казино).", goal: 1, reward: 30, status: "available",isSystem: false },
    { id: "21", title: "Отчаянный ход", desc: "Выиграть, поставив на 0 или 00.", goal: 1, reward: 25, status: "available",isSystem: false },
    { id: "22", title: "Счастливая рука", desc: "Выбить 12 очков при игре в кости 12 раз.", goal: 1, reward: 25, status: "available",isSystem: false },
    { id: "23", title: "Вращайте барабан", desc: "Прокрутить колесо удачи 100 раз.", goal: 100, reward: 1000, status: "available",isSystem: false },
    { id: "24", title: "Держим ритм", desc: "Победить 100 раз в Dance Battle (танцы в ночных клубах).", goal: 100, reward: 25, status: "available",isSystem: false },
    { id: "25", title: "Завсегдатый бара", desc: "Выпейте 10 бокалов алкоголя в казино.", goal: 10, reward: 10, status: "available",isSystem: false },
    { id: "26", title: "Доброжелатель", desc: "Пожертвовать 1000000$.", goal: 1000000, reward: 25, status: "available",isSystem: false },
    { id: "27", title: "Мать драконов", desc: "Купить «Загадочное яйцо» в мебельном магазине за 1000000$.", goal: 1, reward: 10, status: "available",isSystem: false },
    { id: "28", title: "Мастер навалить бочком", desc: "Набрать 20000 очков дрифта за раз (доступно от 7 уровня персонажа).", goal: 20000, reward: 10, status: "available",isSystem: false },
    { id: "29", title: "Не шей мне срок", desc: "Отсидеть в тюрьме более 55 часов за раз.", goal: 55, reward: 100, status: "available",isSystem: false },
    { id: "29", title: "Мясник из Болингброук", desc: "Убить других заключённых с помощью заточки 50 раз.", goal: 50, reward: 25, status: "available",isSystem: false },
    { id: "30", title: "За друзей и тюремный двор", desc: "Освободить 10 заключённых при нападении на тюрьму.", goal: 10, reward: 25, status: "available",isSystem: false },
    { id: "31", title: "Ты знаешь с кем разговариваешь?", desc: "Быть освобожденным при нападении на тюрьму.", goal: 1, reward: 10, status: "available",isSystem: false },
    { id: "32", title: "Сомелье", desc: "Выпить бутылку коллекционного вина.", goal: 1, reward: 1, status: "available",isSystem: false },
    { id: "33", title: "Руки-базуки", desc: "Безошибочно сделать 5 подходов подряд со стокилограммовой штангой.", goal: 5, reward: 10, status: "available",isSystem: false },
    { id: "34", title: "Самая быстрая рука в Сан-Андреас", desc: "Набрать 200 очков в тире за одну попытку.", goal: 5, reward: 25, status: "available",isSystem: false },
    { id: "35", title: "Оставить след", desc: "Получить свой памятник в Зале Славы.", goal: 1, reward: 100, status: "available",isSystem: false },
    { id: "36", title: "Прирожденный фермер", desc: "Выполнить 10000 действий на ферме.", goal: 10000, reward: 1, status: "available",isSystem: false },
    { id: "37", title: "Король картинга", desc: "Победить в 100 заездах из 6 человек в картинге.", goal: 100, reward: 1, status: "available",isSystem: false },
    { id: "38", title: "На страже Форта Занкудо", desc: "Починить электричество на Форте Занкудо во время нападения до загрузки матовозок нападающими.", goal: 1, reward: 25, status: "available",isSystem: false },
    { id: "39", title: "На страже Федеральной тюрьмы", desc: "Починить электричество в Федеральной тюрьме до освобождения заключенных нападающими.", goal: 1, reward: 25, status: "available",isSystem: false },
    { id: "40", title: "Золотая лихорадка", desc: "Найти и сдать скупщику сокровищ на 100000$.", goal: 100000, reward: 10, status: "available",isSystem: false },
    { id: "41", title: "Особенности национальной охоты", desc: "Убить пуму голыми руками в состоянии алкогольного опьянения.", goal: 1, reward: 100, status: "available",isSystem: false },
    { id: "42", title: "Знаменосец", desc: "Поставить флаг мотоклуба 10 раз при выполнении задания «Покорение вершин».", goal: 10, reward: 10, status: "available",isSystem: false },
    { id: "43", title: "Ангел дорог", desc: "Достигнуть максимального ранга в любом мотоклубе.", goal: 1, reward: 30, status: "available",isSystem: false },
    { id: "44", title: "Дом у дороги", desc: "Победить в пьяной драке в общине деревенщин с активным заданием на неё против других игроков с этим же заданием.", goal: 1, reward: 30, status: "available",isSystem: false },
    { id: "45", title: "Из-за этих гадов мы без работы сидим!", desc: "Достигнуть максимального ранга в клубе Rednecks.", goal: 1, reward: 30, status: "available",isSystem: false },
    { id: "46", title: "Глотай пыль", desc: "Занять 1 место в 100 гонках за репутацию в автоклубе Car Meet.", goal: 100, reward: 10, status: "available",isSystem: false },
    { id: "47", title: "Газ в пол", desc: "Достигнуть максимального уровня в автоклубе Car Meet.", goal: 1, reward: 30, status: "available",isSystem: false },
    { id: "48", title: "Небеса разверзлись", desc: "Победить в 50 аирдропах в составе фракции, будучи сотрудником Merryweather.", goal: 50, reward: 100, status: "available",isSystem: false },
    { id: "49", title: "Боевое крещение", desc: "Достигнуть максимального ранга в Merryweather.", goal: 1, reward: 30, status: "available",isSystem: false },
    { id: "50", title: "Таксую для души", desc: "Выполнить 100 заказов такси на Truffade Fake Taxi.", goal: 100, reward: 50, status: "available",isSystem: false },
    { id: "51", title: "Дядюшка Скрудж", desc: "Выкинуть на ветер 1000000$ из оружия Sup Cash Cannon.", goal: 1000000, reward: 1, status: "available",isSystem: false },
    { id: "52", title: "Томми не умеет плавать", desc: "Умереть в воде в обличье Томми Версетти.", goal: 1, reward: 25, status: "available",isSystem: false },
    { id: "53", title: "Вкус лета", desc: "Попробовать мороженое всех 8 видов на Летнем фестивале.", goal: 8, reward: 25, status: "locked",isSystem: false },
    { id: "54", title: "Попа слиплась", desc: "Получить по попе боевым леденцом, находясь без сознания.", goal: 1, reward: 10, status: "available",isSystem: false },
    { id: "55", title: "Соло на клавиатуре", desc: "Поднять настроение окружающим 1000 раз, сыграв им на пианино или синтезаторе.", goal: 1000, reward: 1, status: "available",isSystem: false },
    { id: "56", title: "Тонкий слух", desc: "Получить настроение от чьей-нибудь игры на пианино или синтезаторе 100 раз.", goal: 100, reward: 100, status: "available",isSystem: false },
    { id: "57", title: "Заслуженный дрессировщик", desc: "Достич 100% дрессирвки любого питомца.", goal: 100, reward: 100, status: "available",isSystem: false },
    { id: "58", title: "Алчности нет предела", desc: "Выполнить задание «Сбор данных для Санты» 25 раз, пометив всех детей плохими.", goal: 25, reward: 1, status: "locked",isSystem: false },
    { id: "59", title: "Палочки к бою", desc: "Победить 50 раз в магических дуэлях во время проведения события «Хеллоуин 2024».", goal: 50, reward: 1, status: "locked",isSystem: false },
    { id: "60", title: "Позолоти ручку", desc: "Забрать у других людей 66 конфет в заданиях Гадалки во время проведения события «Хеллоуин 2024».", goal: 66, reward: 1, status: "locked",isSystem: false },
    { id: "61", title: "Успешный кейс", desc: "Доставить 30 кейсов Годовщины организатору.", goal: 30, reward: 1, status: "locked",isSystem: false },
    { id: "62", title: "Безупречная защита", desc: "Защитить пряничный замок, не допустив повреждения ворот.", goal: 1, reward: 1, status: "locked",isSystem: false },
    { id: "63", title: "Снежный чемпион 2024", desc: "Получить повышенную награду в соревновательных квестах события «Новый год 2024» 100 раз.", goal: 100, reward: 1, status: "locked",isSystem: false },
    { id: "64", title: "Санта Клаус 2020", desc: "Подарить другим игрокам 50 подарков на новогодние праздники.", goal: 50, reward: 25, status: "locked",isSystem: false },
    { id: "65", title: "Главный герой", desc: "Завершить сюжетную линию события Годовщина 2024 до 16.09.2024.", goal: 1, reward: 1, status: "locked",isSystem: false },
    { id: "66", title: "Дал бог зайку", desc: "50 раз получить награду за победу в задании «Любимый воспитатель» в событии «Первый курс».", goal: 50, reward: 1, status: "locked",isSystem: false },
    { id: "67", title: "Строитель светлого будущего", desc: "Строитель светлого будущего", goal: 100, reward: 1, status: "locked",isSystem: false },
    { id: "68", title: "Сентябрь 2020", desc: "Получить 5 по всем предметам.", goal: 1, reward: 1, status: "locked",isSystem: false },
    { id: "69", title: "Сентябрь 2021", desc: "Получить 5 по всем предметам.", goal: 1, reward: 1, status: "locked",isSystem: false },
    { id: "70", title: "Сентябрь 2022", desc: "Получить 5 по всем предметам.", goal: 1, reward: 1, status: "locked",isSystem: false },
    { id: "71", title: "Сентябрь 2025", desc: "Получить 5 по всем предметам.", goal: 1, reward: 1, status: "locked",isSystem: false },
    { id: "72", title: "Годовщина 2021", desc: "Открыть кейс годовщины 2021 года.", goal: 1, reward: 1, status: "locked",isSystem: false },
    { id: "73", title: "Годовщина 2022", desc: "Открыть кейс годовщины 2022 года.", goal: 1, reward: 1, status: "locked",isSystem: false },
    { id: "74", title: "Годовщина 2023", desc: "Открыть кейс годовщины 2023 года.", goal: 1, reward: 1, status: "locked",isSystem: false },
    { id: "75", title: "Годовщина 2024", desc: "Открыть кейс годовщины 2024 года.", goal: 1, reward: 1, status: "locked",isSystem: false },
    { id: "76", title: "Годовщина 2025", desc: "Открыть кейс годовщины 2025 года.", goal: 1, reward: 1, status: "locked",isSystem: false },
    { id: "77", title: "Хеллоуин 2021", desc: "Убить 500 зомби во время проведения события «Хеллоуин 2021».", goal: 500, reward: 1, status: "locked",isSystem: false },
    { id: "78", title: "Хеллоуин 2022", desc: "Убить 500 зомби во время проведения события «Хеллоуин 2022».", goal: 500, reward: 50, status: "locked",isSystem: false },
    { id: "79", title: "Хеллоуин 2023", desc: "Убить 500 зомби во время проведения события «Хеллоуин 2023».", goal: 500, reward: 50, status: "locked",isSystem: false },
    { id: "80", title: "Зима 2021", desc: "Активировать сезонный пропуск «Зима '21».", goal: 1, reward: 10, status: "locked",isSystem: false },
    { id: "81", title: "Зима 2022", desc: "Активировать сезонный пропуск «Зима '22».", goal: 1, reward: 10, status: "locked",isSystem: false },
    { id: "82", title: "Зима 2023", desc: "Активировать сезонный пропуск «Зима '23».", goal: 1, reward: 10, status: "locked",isSystem: false },
    { id: "83", title: "Зима 2024", desc: "Активировать сезонный пропуск «Зима '24».", goal: 1, reward: 10, status: "locked",isSystem: false },
    { id: "84", title: "Новый год 2020", desc: "Встретьте 2020 год вместе с сервером.", goal: 1, reward: 1, status: "locked",isSystem: false },
    { id: "85", title: "Новый год 2021", desc: "Встретьте 2021 год вместе с сервером.", goal: 1, reward: 20, status: "locked",isSystem: false },
    { id: "86", title: "Новый год 2022", desc: "Встретьте 2022 год вместе с сервером.", goal: 1, reward: 20, status: "locked",isSystem: false },
    { id: "87", title: "Новый год 2023", desc: "Встретьте 2023 год вместе с сервером.", goal: 1, reward: 50, status: "locked",isSystem: false },
    { id: "88", title: "Новый год 2024", desc: "Встретьте 2024 год вместе с сервером.", goal: 1, reward: 50, status: "locked",isSystem: false },
    { id: "89", title: "Новый год 2025", desc: "Встретьте 2025 год вместе с сервером.", goal: 1, reward: 50, status: "locked",isSystem: false },
    { id: "90", title: "Лето 2021", desc: "Активировать сезонный пропуск «Лето '21».", goal: 1, reward: 10, status: "locked",isSystem: false },
    { id: "91", title: "Лето 2022", desc: "Активировать сезонный пропуск «Лето '22».", goal: 1, reward: 10, status: "locked",isSystem: false },
    { id: "92", title: "Лето 2023", desc: "Активировать сезонный пропуск «Лето '23».", goal: 1, reward: 10, status: "locked",isSystem: false },
    { id: "93", title: "Лето 2024", desc: "Активировать сезонный пропуск «Лето '24».", goal: 1, reward: 10, status: "locked",isSystem: false },
    { id: "94", title: "Лето 2025", desc: "Активировать сезонный пропуск «Лето '25».", goal: 1, reward: 10, status: "locked",isSystem: false },
    { id: "95", title: "Легенда Летнего фестиваля 2024", desc: "Победить в соревнованиях Летнего фестиваля 150 раз.", goal: 150, reward: 1, status: "locked",isSystem: false },
    { id: "96", title: "Легенда Летнего фестиваля 2025", desc: "Выполнять все задания Летнего фестиваля ежедневно в течение 15 дней.", goal: 15, reward: 100, status: "locked",isSystem: false },
    { id: "97", title: "Ужасы Хеллоуина 2022", desc: "Одержать верх над любым из Ужасов Хэллоуина.", goal: 1, reward: 50, status: "locked",isSystem: false },
    { id: "98", title: "Ужасы Хеллоуина 2023", desc: "Одержать верх над любым из Ужасов Хэллоуина.", goal: 1, reward: 50, status: "locked",isSystem: false },
    { id: "99", title: "На страже Рождества 2022", desc: "Отпугните Гринча, когда застанете его за попыткой вломиться в чужой дом.", goal: 1, reward: 50, status: "locked",isSystem: false },
    { id: "100", title: "На страже Рождества 2023", desc: "Прорекламируйте супергеройский фильм в костюме супергероя 50 раз, выполняя задание учителя ритмики (квест «Реклама»).", goal: 50 ,reward: 1, status: "locked",isSystem: false },
    { id: "101", title: "Летние движения", desc: "Повторить трудноразличимые танцы на Летнем фестивале 250 раз.", goal: 20 ,reward: 1, status: "locked",isSystem: false },
    { id: "102", title: "Первая кровь", desc: "Сделать первое убийство на капте за банду.", goal: 1 ,reward: 10 ,status: "hidden",isSystem: false },
    { id: "103", title: "Гурман", desc: "Пообедать в тюремной столовой 100 раз.", goal: 100 ,reward: 1 ,status: "hidden",isSystem: false },
    { id: "104", title: "Нездоровое везение", desc: "Съесть неправильно приготовленную рыбу фугу и выжить.", goal: 1 ,reward: 10 ,status: "hidden",isSystem: false },
    { id: "105", title: "Слишком грубые руки", desc: "Обидеть 200 коров.", goal: 200 ,reward: 1 ,status: "hidden",isSystem: false },
    { id: "106", title: "Барон Дымхаузер", desc: "Получить настроение от использования вейпа 100 раз.", goal: 100 ,reward: 10 ,status: "hidden",isSystem: false },
    { id: "107", title: "Тост за победителя", desc: "Открыть бутылку шампанского после победы.", goal: 1 ,reward: 10 ,status: "hidden",isSystem: false },
    { id: "108", title: "Стремительная карьера", desc: "Посадить себя в федеральную тюрьму и отсидеть не менее 4 часов.", goal: 4 ,reward: 25 ,status: "hidden",isSystem: false },
    { id: "109", title: "Аристократические замашки", desc: "Получите настроение, покурив трубку с моноклем.", goal: 1 ,reward: 10 ,status: "hidden",isSystem: false },
    { id: "110", title: "Постижение непостижимого", desc: "Обрести Киффлом, отказавшись от всех обязательств Программы Epsilon у Криса Формажа.", goal: 10000 ,reward: 1 ,status: "hidden",isSystem: false },
    { id: "111", title: "Инвестировал в говно", desc: "Поддержать местный сельскохозяйственный бизнес за 1000000$.", goal: 1000000 ,reward: 1 ,status: "hidden",isSystem: false },
    { id: "112", title: "Ты не Шаришь", desc: "Получить 25 отрицательных ответов от шара восьмёрки.", goal: 25, reward: 1, status: "available",isSystem: false },
    { id: "113", title: "Жареный аргумент", desc: "Пожарить праздничный шашлык во время проведения события «Майские праздники.»", goal: 25, reward: 1, status: "available",isSystem: false },
];


        let savedTimers = JSON.parse(localStorage.getItem('myTimers'));
        let autoRun = JSON.parse(localStorage.getItem('timerAutoRun')) || false;
        let totalTime = 0; 
        let currentTime = 0;
        let timerInterval = null;
        let timers = JSON.parse(localStorage.getItem('myTimers')) || [...defaultTimers];
        let totalBP = parseInt(localStorage.getItem('totalBP')) || 0;
        let activeCat = localStorage.getItem('activeCat') || 'easy';
        let timerEndTime = null;
        let hasServerMod = false;
        let hasVipMod = false;
        let mult = 1; 
        const TOTAL_TIME = 3 * 60 * 60;
        let timeClock = TOTAL_TIME;
        let runningOnline = false;
        let clockInterval = null;
        let lastTickTime = Date.now();
        let achievementsDone = JSON.parse(localStorage.getItem('achievementsDone')) || [];
        let currentAchFilter = 'available';
        let totalActiveSeconds = 0;
        let settings = JSON.parse(localStorage.getItem('settings')) || { notifications: true, sounds: true };
        let appState = { timerEndTime: null };


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
    if (window.Telegram?.WebApp?.HapticFeedback && window.Telegram.WebApp.isVersionAtLeast('6.1')) {
        Telegram.WebApp.HapticFeedback.impactOccurred('medium');
    }
}

// --- ОТРИСОВКА НАВЫКОВ ---
function renderSkills() {
    const container = document.getElementById('skills-container');
    
    // Расчет статистики для всех навыков
    const totalRemaining = skillsDb.reduce((acc, s) => acc + Math.max(0, s.goals.length - s.level), 0);
    const totalCost = totalRemaining * 500000;

    const summaryHtml = `
        <div class="skills-summary-card">
            <div class="summary-item">
                <span class="summary-label">ОСТАЛОСЬ УРОВНЕЙ</span>
                <span class="summary-value">${totalRemaining}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">СТОИМОСТЬ ПРОКАЧКИ</span>
                <span class="summary-value cyan">${totalCost.toLocaleString('ru-RU')} $</span>
            </div>
        </div>
    `;

    container.innerHTML = summaryHtml + skillsDb.map(s => {
        const isMax = s.level >= s.goals.length;
        const currentGoal = isMax ? s.goals[s.goals.length - 1] : s.goals[s.level];
        const percent = isMax ? 100 : Math.min(100, (s.done / currentGoal) * 100);
        
        return `
        <div class="skill-card ${isMax ? 'max-level' : ''}" onclick="this.classList.toggle('expanded')">
            <div class="skill-header">
                <span class="skill-name">${s.name}</span>
                <span class="skill-lvl-badge">УРОВЕНЬ ${s.level}</span>
            </div>
            <div class="skill-bar-container">
                <div class="skill-bar-fill" style="width: ${percent}%"></div>
            </div>
            <div class="skill-desc">
                ${s.desc || ''}
            </div>
            <div class="skill-controls" onclick="event.stopPropagation()" style="display: flex; justify-content: space-between; align-items: center;">
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
            <div class="set-row" onclick="event.stopPropagation()">
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

function updateStatHours() {
    const el = document.getElementById('stat-hours');
    if (el) {
        el.innerText = formatTime(totalActiveSeconds);
    }
}

// --- ОТРИСОВКА ИГР ---
function renderGames() {
    const container = document.getElementById('games-container');
    if (!container) return console.error("Контейнер games-container не найден в HTML!");

    container.innerHTML = gamesDb.map(g => `
        <div class="game-preview-card ${g.status === 'soon' ? 'locked' : ''}">
            <div class="game-image-placeholder">
                ${g.icon}
                <div class="game-image-overlay"></div>
            </div>
            <div class="game-body">
                <div class="game-name-row">
                    <span class="game-name">${g.name}</span>
                    ${g.status === 'soon' ? '<span class="status-badge">СКОРО</span>' : ''}
                </div>
                <p class="game-description">${g.desc}</p>
                ${g.status !== 'soon' ? `<button class="game-start-btn" onclick="openGame('${g.id}')">ИГРАТЬ</button>` : ''}
            </div>
        </div>
    `).join('');
}

// --- ЛОГИКА ТРИ В РЯД ---
let match3State = { score: 0, history: JSON.parse(localStorage.getItem('match3_history')) || [] };

function openGame(id) {
    if (id === 'medic') return initMedicTest();
    if (id === 'slots') return initSlots();
    if (id !== 'match3') return showToast("Эта игра еще в разработке!");

    const overlay = document.createElement('div');
    overlay.id = 'game-overlay';
    overlay.innerHTML = `
        <div class="game-window">
            <div class="game-header">
                <button class="exit-btn" onclick="closeGame()">✕ Выход</button>
                <div class="game-title">Кристаллы Void</div>
                <div class="score-display">СЧЕТ: <span id="m3-score">0</span></div>
            </div>
            <div id="match3-board" class="match3-grid"></div>
            <div class="game-footer">
                <button class="history-btn" onclick="toggleMatch3History()">📊 История</button>
            </div>
            <div id="m3-history-panel" class="history-panel" style="display:none"></div>
        </div>
    `;
    document.body.appendChild(overlay);
    initMatch3();
}

function closeGame() {
    const score = match3State.score;
    if (score > 0) {
        match3State.history.unshift({ score, date: new Date().toLocaleString('ru-RU') });
        match3State.history = match3State.history.slice(0, 10);
        localStorage.setItem('match3_history', JSON.stringify(match3State.history));
    }
    document.getElementById('game-overlay').remove();
    match3State.score = 0;
}

function initMatch3() {
    const board = document.getElementById('match3-board');
    const icons = ['💎', '🔮', '💠', '🌟', '🍎'];
    const size = 8;
    let grid = Array.from({ length: size * size }, () => icons[Math.floor(Math.random() * icons.length)]);
    let selected = null;

    function renderBoard() {
        board.innerHTML = '';
        grid.forEach((icon, i) => {
            const cell = document.createElement('div');
            cell.className = 'm3-cell' + (selected === i ? ' selected' : '');
            cell.innerHTML = icon;
            cell.onclick = () => handleCellClick(i);
            board.appendChild(cell);
        });
    }

    function checkMatches() {
        let toRemove = new Set();
        // Горизонтальные
        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size - 2; c++) {
                let i = r * size + c;
                if (grid[i] && grid[i] === grid[i+1] && grid[i] === grid[i+2]) {
                    toRemove.add(i); toRemove.add(i+1); toRemove.add(i+2);
                }
            }
        }
        // Вертикальные
        for (let c = 0; c < size; c++) {
            for (let r = 0; r < size - 2; r++) {
                let i = r * size + c;
                if (grid[i] && grid[i] === grid[i+size] && grid[i] === grid[i+size*2]) {
                    toRemove.add(i); toRemove.add(i+size); toRemove.add(i+size*2);
                }
            }
        }
        return Array.from(toRemove);
    }

    async function handleCellClick(idx) {
        vibrate('light');
        if (selected === null) {
            selected = idx;
            renderBoard();
        } else {
            const sIdx = selected;
            const tIdx = idx;
            const isNeighbor = (Math.abs(sIdx - tIdx) === 1 && Math.floor(sIdx/size) === Math.floor(tIdx/size)) || 
                               Math.abs(sIdx - tIdx) === size;

            if (isNeighbor) {
                // Меняем местами
                [grid[sIdx], grid[tIdx]] = [grid[tIdx], grid[sIdx]];
                
                const matches = checkMatches();
                if (matches.length > 0) {
                    await processMatches();
                } else {
                    // Если нет совпадений, возвращаем назад
                    [grid[sIdx], grid[tIdx]] = [grid[tIdx], grid[sIdx]];
                    showToast("❌ Нет совпадения!");
                }
            }
            selected = null;
            renderBoard();
        }
    }

    async function processMatches() {
        let matches = checkMatches();
        while (matches.length > 0) {
            match3State.score += matches.length * 10;
            document.getElementById('m3-score').innerText = match3State.score;
            
            // Анимация исчезновения: добавляем класс перед удалением
            matches.forEach(i => {
                const cell = board.children[i];
                if (cell) cell.classList.add('m3-pop');
            });

            // Ждем завершения анимации
            await new Promise(r => setTimeout(r, 400));

            // Удаляем и "схлопываем" (упрощенная гравитация)
            matches.forEach(i => grid[i] = null);
            
            renderBoard();
            await new Promise(r => setTimeout(r, 300));

            // Падение сверху
            for (let c = 0; c < size; c++) {
                let emptyPos = -1;
                for (let r = size - 1; r >= 0; r--) {
                    let i = r * size + c;
                    if (grid[i] === null) {
                        if (emptyPos === -1) emptyPos = r;
                    } else if (emptyPos !== -1) {
                        grid[emptyPos * size + c] = grid[i];
                        grid[i] = null;
                        emptyPos--;
                    }
                }
                // Заполняем пустоту новыми
                for (let r = size - 1; r >= 0; r--) {
                    if (grid[r * size + c] === null) grid[r * size + c] = icons[Math.floor(Math.random() * icons.length)];
                }
            }
            renderBoard();
            matches = checkMatches();
            await new Promise(r => setTimeout(r, 300));
        }
    }

    renderBoard();
}

function toggleMatch3History() {
    const panel = document.getElementById('m3-history-panel');
    if (panel.style.display === 'none') {
        panel.innerHTML = '<h4>Последние игры</h4>' + match3State.history.map(h => `
            <div class="history-row"><span>${h.date}</span> <b>${h.score}</b></div>
        `).join('');
        panel.style.display = 'block';
    } else {
        panel.style.display = 'none';
    }
}

// --- ЛОГИКА ТЕСТА МЕДИКА ---
let medicGameState = { 
    current: 0, 
    score: 0, 
    questions: [], 
    timer: null, 
    timeLeft: 15,
    history: JSON.parse(localStorage.getItem('medic_history')) || []
};

function initMedicTest() {
    medicGameState.current = 0;
    medicGameState.score = 0;
    medicGameState.questions = [...medicQuestions].sort(() => Math.random() - 0.5);
    
    const overlay = document.createElement('div');
    overlay.id = 'game-overlay';
    overlay.innerHTML = `
        <div class="game-window medic-window">
            <div class="game-header">
                <button class="exit-btn" onclick="clearInterval(medicGameState.timer); document.getElementById('game-overlay').remove()">✕ Выход</button>
                <div class="game-title">Квалификация EMS</div>
                <div class="score-display"><span id="med-current">1</span> / ${medicGameState.questions.length}</div>
            </div>
            <div class="med-timer-container"><div id="med-timer-fill" class="med-timer-fill"></div></div>
            <div class="medic-quiz-body">
                <div id="med-question-box" class="med-q-box"></div>
                <div id="med-answers-grid" class="med-a-grid"></div>
            </div>
            <div id="med-feedback" class="med-feedback"></div>
        </div>
    `;
    document.body.appendChild(overlay);
    renderMedicQuestion();
}

function startMedicTimer() {
    clearInterval(medicGameState.timer);
    medicGameState.timeLeft = 15;
    const fill = document.getElementById('med-timer-fill');
    
    medicGameState.timer = setInterval(() => {
        medicGameState.timeLeft -= 0.1;
        if (fill) fill.style.width = (medicGameState.timeLeft / 15 * 100) + '%';
        
        if (medicGameState.timeLeft <= 0) {
            clearInterval(medicGameState.timer);
            const qData = medicGameState.questions[medicGameState.current];
            checkMedicAnswer(null, qData.a, null); // Время вышло - неверно
        }
    }, 100);
}

function renderMedicQuestion() {
    if (!document.getElementById('game-overlay')) return;
    
    const qData = medicGameState.questions[medicGameState.current];
    document.getElementById('med-current').innerText = medicGameState.current + 1;
    document.getElementById('med-question-box').innerText = qData.q;
    
    const answersGrid = document.getElementById('med-answers-grid');
    answersGrid.innerHTML = '';
    
    // Запуск таймера для нового вопроса
    startMedicTimer();
    
    // Формируем список из 1 правильного и 3 случайных неправильных ответов
    let options = [qData.a];
    const allPossibleAnswers = Array.from(new Set(medicQuestions.map(m => m.a))).filter(a => a !== qData.a);
    
    while (options.length < 4 && allPossibleAnswers.length > 0) {
        const randomIdx = Math.floor(Math.random() * allPossibleAnswers.length);
        options.push(allPossibleAnswers.splice(randomIdx, 1)[0]);
    }
    options.sort(() => Math.random() - 0.5); // Перемешиваем кнопки
    
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'med-opt-btn';
        btn.innerText = opt;
        btn.onclick = () => checkMedicAnswer(opt, qData.a, btn);
        answersGrid.appendChild(btn);
    });
}

function checkMedicAnswer(selected, correct, btn) {
    clearInterval(medicGameState.timer);
    const buttons = document.querySelectorAll('.med-opt-btn');
    buttons.forEach(b => b.disabled = true);
    
    if (selected === correct) {
        btn.classList.add('correct');
        medicGameState.score++;
        vibrate('success');
    } else if (btn) {
        btn.classList.add('wrong');
        buttons.forEach(b => {
            if (b.innerText === correct) b.classList.add('correct');
        });
        vibrate('warning');
    }
    
    setTimeout(() => {
        medicGameState.current++;
        if (medicGameState.current < medicGameState.questions.length) {
            renderMedicQuestion();
        } else {
            finishMedicTest();
        }
    }, 1500);
}

function finishMedicTest() {
    clearInterval(medicGameState.timer);
    const body = document.querySelector('.medic-quiz-body');
    const percent = Math.round((medicGameState.score / medicGameState.questions.length) * 100);
    
    // Сохранение в историю
    const entry = {
        percent: percent,
        score: medicGameState.score,
        total: medicGameState.questions.length,
        date: new Date().toLocaleString('ru-RU', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })
    };
    medicGameState.history.unshift(entry);
    medicGameState.history = medicGameState.history.slice(0, 5);
    localStorage.setItem('medic_history', JSON.stringify(medicGameState.history));

    body.innerHTML = `
        <div class="med-result">
            <div style="font-size: 60px; margin-bottom: 20px;">${percent >= 80 ? '🩺' : '🚑'}</div>
            <h2 style="margin:0; font-size: 24px;">ТЕСТ ЗАВЕРШЕН</h2>
            <p style="color: var(--text-muted); margin: 10px 0;">Правильных ответов: <b>${medicGameState.score}</b> из ${medicGameState.questions.length}</p>
            <div class="med-percent">${percent}%</div>
            <p style="padding: 0 20px; font-size: 13px;">${percent >= 80 ? 'Поздравляем! Вы готовы к службе в EMS.' : 'Недостаточно знаний. Повторите протоколы.'}</p>
            
            <div class="med-history-mini">
                ${medicGameState.history.map(h => `
                    <div class="med-hist-row">
                        <span>${h.date}</span>
                        <span class="${h.percent >= 80 ? 'cyan' : 'red'}">${h.percent}%</span>
                    </div>
                `).join('')}
            </div>

            <button class="med-return-btn" onclick="document.getElementById('game-overlay').remove()">ВЕРНУТЬСЯ В МЕНЮ</button>
        </div>
    `;
}

// --- ЛОГИКА СЛОТОВ 777 ---
let slotsState = { 
    spinning: false, 
    history: JSON.parse(localStorage.getItem('slots_history')) || [] 
};

function initSlots() {
    const overlay = document.createElement('div');
    overlay.id = 'game-overlay';
    overlay.innerHTML = `
        <div class="game-window slots-window">
            <div class="game-header">
                <button class="exit-btn" onclick="document.getElementById('game-overlay').remove()">✕ Выход</button>
                <div class="game-title">JACKPOT 777</div>
            </div>
            
            <div class="slots-machine">
                <div class="reels-container">
                    <div id="reel1" class="reel">7️⃣</div>
                    <div id="reel2" class="reel">7️⃣</div>
                    <div id="reel3" class="reel">7️⃣</div>
                </div>
                <div id="slots-result-text" class="slots-msg">Удачи!</div>
            </div>

            <div class="slots-controls">
                <button id="spin-btn" class="slots-spin-btn" onclick="spinSlots()">ИСПЫТАТЬ УДАЧУ</button>
            </div>

            <div class="game-footer">
                <button class="history-btn" onclick="toggleSlotsHistory()">📊 История</button>
            </div>
            <div id="slots-history-panel" class="history-panel" style="display:none"></div>
        </div>
    `;
    document.body.appendChild(overlay);
}

async function spinSlots() {
    if (slotsState.spinning) return;

    slotsState.spinning = true;
    const spinBtn = document.getElementById('spin-btn');
    spinBtn.disabled = true;
    spinBtn.innerText = "КРУТИМ...";
    document.getElementById('slots-result-text').innerText = "🎰 Барабаны крутятся...";

    vibrate('light');
    const symbols = ['🍒', '🍋', '🍊', '🍇', '🔔', '💎', '7️⃣'];
    const reels = [document.getElementById('reel1'), document.getElementById('reel2'), document.getElementById('reel3')];
    
    let spins = 20;
    // Добавляем класс анимации вращения
    reels.forEach(r => r.classList.add('reel-spinning'));

    const interval = setInterval(() => {
        reels.forEach(r => {
            r.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        });
        spins--;
        if (spins <= 0) {
            clearInterval(interval);
            reels.forEach(r => r.classList.remove('reel-spinning'));
            finalizeSlots(reels);
        }
    }, 100);
}

function finalizeSlots(reels) {
    const finalSymbols = reels.map(r => r.innerText);
    let msg = "Повезет в следующий раз!";

    if (finalSymbols[0] === finalSymbols[1] && finalSymbols[1] === finalSymbols[2]) {
        const sym = finalSymbols[0];
        if (sym === '7️⃣') { 
            msg = "🤑 КОЛОССАЛЬНЫЙ ДЖЕКПОТ!"; 
            triggerJackpotEffects();
        }
        else if (sym === '💎') { msg = "💎 БРИЛЛИАНТОВЫЙ ВЫИГРЫШ!"; }
        else { msg = "🔥 ТРИ В РЯД!"; }
        vibrate('success');
    } else if (finalSymbols[0] === finalSymbols[1] || finalSymbols[1] === finalSymbols[2] || finalSymbols[0] === finalSymbols[2]) {
        msg = "💵 Хорошая попытка!";
        vibrate('medium');
    }

    document.getElementById('slots-result-text').innerText = msg;
    
    slotsState.history.unshift({ 
        res: finalSymbols.join(' '), 
        date: new Date().toLocaleTimeString('ru-RU', {hour: '2-digit', minute:'2-digit'}) 
    });
    slotsState.history = slotsState.history.slice(0, 10);
    localStorage.setItem('slots_history', JSON.stringify(slotsState.history));

    slotsState.spinning = false;
    const spinBtn = document.getElementById('spin-btn');
    spinBtn.disabled = false;
    spinBtn.innerText = "ИСПЫТАТЬ УДАЧУ";
}

function triggerJackpotEffects() {
    // Звук победы
    const winSound = new Audio('https://actions.google.com/sounds/v1/cartoon/clapping_and_cheering_short.ogg');
    winSound.play().catch(e => console.log("Sound blocked"));

    // Эффект конфетти
    const overlay = document.getElementById('game-overlay');
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.width = (Math.random() * 10 + 5) + 'px';
        confetti.style.height = (Math.random() * 10 + 5) + 'px';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confetti.style.animationDelay = (Math.random() * 0.5) + 's';
        overlay.appendChild(confetti);
        
        // Удаляем элемент после завершения анимации
        setTimeout(() => confetti.remove(), 4000);
    }
}

function toggleSlotsHistory() {
    const panel = document.getElementById('slots-history-panel');
    if (panel.style.display === 'none') {
        panel.innerHTML = '<h4>Последние спины</h4>' + slotsState.history.map(h => `
            <div class="history-row"><span>${h.date}</span> <b>${h.res}</b></div>
        `).join('');
        panel.style.display = 'block';
    } else {
        panel.style.display = 'none';
    }
}

// --- УПРАВЛЕНИЕ ВИДАМИ ---
function switchMainView(view) {
    const sections = ['farm', 'skills', 'timers', 'achievements', 'games'];
    
    // 1. Переключаем секции
    sections.forEach(s => {
        const sectionEl = document.getElementById(s + '-section');
        const navEl = document.getElementById('nav-' + s);
        if (sectionEl) sectionEl.style.display = (view === s) ? 'block' : 'none';
        if (navEl) navEl.classList.toggle('active', (view === s));
    });

    // 2. Обновляем заголовок
    const titleEl = document.getElementById('page-title');
    const titles = { 
        farm: "ФАРМ BP", 
        skills: "НАВЫКИ", 
        timers: "ТАЙМЕРЫ", 
        achievements: "ДОСТИЖЕНИЯ",
        games: "ИГРЫ"
    };
    if (titleEl && titles[view]) {
        titleEl.innerText = titles[view];
    }

    // 3. Дополнительная отрисовка при переключении
    if (view === 'timers') renderTimers();
    if (view === 'achievements') renderAchievements('active');
    if (view === 'games') { renderGames(); }
    if (view === 'skills') renderSkills();

    localStorage.setItem('lastView', view);
}

function updateSkill(id, type, diff) {
    const s = skillsDb.find(x => x.id === id);
    if (!s) return;

    if (type === 'lvl') {
        // Управление уровнем
        s.level = Math.max(0, Math.min(s.goals.length, s.level + diff));
        s.done = 0; // Сброс прогресса при смене уровня
    } else if (type === 'done') {
        // Управление прогрессом
        if (s.level >= s.goals.length) return;
        const maxForLevel = s.goals[s.level];
        s.done = Math.max(0, Math.min(maxForLevel, s.done + diff));
        
        // Авто-переход на следующий уровень, если дошли до конца текущего
        if (s.done >= maxForLevel && s.level < s.goals.length) {
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

    const elTotalBP = document.getElementById('stat-bp');
    if (elTotalBP) elTotalBP.innerText = totalBP * mult;
}

        let trackingDone = {};
        let trackingVal = {};

        
// Функция для раскрытия описания
function buildFeed() {
    const box = document.getElementById('feed-box');
    
    // Структура контейнеров
    box.innerHTML = `
        <div id="active-items" class="task-section"><h3>🟢 Активные</h3></div>
        <div id="inactive-items" class="task-section"><h3>🔴 Неактивные</h3></div>
    `;

    const activeBox = document.getElementById('active-items');
    const inactiveBox = document.getElementById('inactive-items');

    db.filter(q => q.cat === activeCat).forEach(q => {
        const isDone = trackingDone[q.id];
        const card = document.createElement('div');
        
        // ВАЖНО: добавили класс 'feed-item' для изоляции стилей
        card.className = `task-card feed-item ${isDone ? 'done' : ''}`;
        
        // Drag & Drop
        card.draggable = true;
        card.dataset.id = q.id;
        card.ondragstart = (e) => { 
            e.dataTransfer.setData('text/plain', q.id); 
            card.classList.add('dragging'); 
        };
        card.ondragend = () => {
            card.classList.remove('dragging');
            document.querySelectorAll('.task-card').forEach(c => c.classList.remove('drag-over'));
        };
        card.ondragover = (e) => { 
            e.preventDefault(); 
            card.classList.add('drag-over'); 
        };
        card.ondragleave = () => card.classList.remove('drag-over');
        card.ondrop = (e) => { 
            e.preventDefault(); 
            card.classList.remove('drag-over');
            const sourceId = parseInt(e.dataTransfer.getData('text/plain')); 
            moveTaskInDb(sourceId, q.id); 
        };

        const toggleBtn = `<button class="toggle-btn" onclick="toggleTaskStatus(${q.id}); event.stopPropagation();">${q.active ? '✕' : '✔'}</button>`;

        let rightSide = '';
        if (!q.active) {
            rightSide = `<span style="color:#666; font-size:12px;">Выключено</span>`;
        } else if (isDone) {
            rightSide = `<button class="reset-btn" onclick="resetTask(${q.id}, event)">↺</button>`;
        } else if (q.type === 'counter') {
            rightSide = `
                <div class="counter-box" onclick="event.stopPropagation()" style="display:flex; flex-direction:column; align-items:center;">
                    <div style="display:flex; align-items:center; gap:8px;">
                        <button class="cnt-btn" onclick="stepCount(${q.id}, -1, ${q.max}, ${q.reward})">−</button>
                        <span class="cnt-val" style="font-weight:bold;">${trackingVal[q.id] || 0}/${q.max}</span>
                        <button class="cnt-btn" onclick="stepCount(${q.id}, 1, ${q.max}, ${q.reward})">+</button>
                    </div>
                    <div class="bp-text">+${q.reward * mult} BP</div>
                </div>
            `;
        } else {
            rightSide = `<button class="btn-premium" onclick="finishTask(${q.id}, ${q.reward}, event)">+${q.reward * mult} BP</button>`;
        }

        card.innerHTML = `
            <div class="task-row" style="display:flex; align-items:center; gap:10px;">
                ${toggleBtn}
                <div class="task-meta" onclick="this.closest('.task-card').classList.toggle('expanded');" style="flex-grow:1; cursor:pointer;">
                    ${q.icon} ${q.name}
                </div>
                <div class="task-right">${rightSide}</div>
            </div>
            <div class="task-line"></div>
            <div class="task-desc">
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
        totalBP = Math.max(0, totalBP - q.reward);
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
    totalBP += reward;
    
    // 2. Сохраняем в localStorage
    saveData();
    
    // 3. ПЕРЕРИСОВЫВАЕМ ИНТЕРФЕЙС (обязательно!)
    buildFeed();
    updateCategoryStats();
    vibrate('success');
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
            updateMultiplierUI();
            vibrate('light');
            saveData();
        }

function updateMultiplierUI() {
    const labelEl = document.getElementById('stat-mult-text');
    const sBtn = document.getElementById('toggle-server');
    const vBtn = document.getElementById('toggle-vip');

    if (sBtn) sBtn.classList.toggle('active', hasServerMod);
    if (vBtn) vBtn.classList.toggle('active', hasVipMod);

    if (hasServerMod && hasVipMod) {
        mult = 4;
        if (labelEl) labelEl.innerText = "Активен: х4 (Сервер + VIP)";
    } else if (hasServerMod || hasVipMod) {
        mult = 2;
        if (labelEl) labelEl.innerText = hasServerMod ? "Активен: х2 (Только Сервер)" : "Активен: х2 (Только VIP)";
    } else {
        mult = 1;
        if (labelEl) labelEl.innerText = "Базовый (х1)";
    }

    buildFeed();
    updateCategoryStats();
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
        appState.timerEndTime = null;
        if(btn) btn.innerText = "СТАРТ";
    } else {
        // Запускаем
        if (currentTime <= 0) currentTime = totalTime; 
        
        if (currentTime > 0) {
            appState.timerEndTime = Date.now() + (currentTime * 1000);
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
    if (timerInterval) clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        if (!appState.timerEndTime) {
            clearInterval(timerInterval);
            timerInterval = null;
            return;
        }

        const now = Date.now();
        const remaining = Math.round((appState.timerEndTime - now) / 1000);
        
        if (remaining > 0) {
            currentTime = remaining;
            
            // Считаем активность только когда таймер реально идет
            totalActiveSeconds++;
            updateStatHours();

            updateUI();
        } else {
            clearInterval(timerInterval);
            timerInterval = null;
            appState.timerEndTime = null;
            currentTime = 0;
            updateUI();

            if (autoRun && totalTime > 0) {
                sendNotification("⏰ Время вышло! Авторестарт...");
                playSound();
                currentTime = totalTime;
                appState.timerEndTime = Date.now() + (totalTime * 1000);
                updateUI();
                startTimerInterval();
            } else {
                handleTimerEnd();
            }
        }
        saveData();
    }, 1000);
}

// Единая логика завершения
// Дубликат handleTimerComplete удален. Рабочая версия находится ниже.

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
    
    updateDisplay();

    timerInterval = setInterval(() => {
        if (!appState.timerEndTime) return;
        
        const remaining = Math.round((appState.timerEndTime - Date.now()) / 1000);
        
        if (remaining > 0) {
            currentTime = remaining;
            updateDisplay();
        } else {
            handleTimerEnd();
        }
    }, 1000);
}

// Используйте эту функцию вместо старых handleTimerComplete
function handleTimerEnd() {
    console.log("handleTimerEnd запущен!"); // <--- Если это сообщение есть в консоли, значит код работает
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    currentTime = 0;
    appState.timerEndTime = null;
    
    updateUI(); 
    const btn = document.getElementById('time-btn');
    if(btn) btn.innerText = "СТАРТ";
    
    saveData(); 
    
    sendNotification("⏰ Время вышло!");
    playSound();
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
    const modal = document.getElementById('confirm-modal');
    if (modal) modal.style.display = 'flex';

    // 2. Очистка локального хранилища
    localStorage.clear();

    // 3. Сброс критических переменных в памяти
    // Убедись, что эти переменные объявлены глобально
    totalBP = 0; 
    timeClock = TOTAL_TIME; 
    runningOnline = false;
    trackingDone = {}; 
    trackingVal = {};
    hasServerMod = false;
    hasVipMod = false;
    mult = 1;
    
    // Останавливаем все интервалы
    clearInterval(clockInterval);
    clearInterval(timerInterval); // Добавил на случай, если используешь timerInterval

    // 4. Визуальный отклик
    if (typeof vibrate === 'function') {
        vibrate('warning');
    }

    // 5. Принудительная перезагрузка
    // Это самый надежный способ сбросить все элементы DOM и состояние скриптов
    location.reload();
}

// 2. Закрывает окно

function toggleSetting(type) {
    settings[type] = !settings[type]; // Инвертируем (true -> false, false -> true)
    
    // Обновляем UI (добавляем/убираем класс .on)
    const element = document.getElementById(`${type === 'notifications' ? 'notif' : 'sound'}-switch`);
    element.classList.toggle('on', settings[type]);
    
    // Вибрация для подтверждения
    if (window.Telegram?.WebApp.HapticFeedback) {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    }
    
    saveData(); // Сохраняем сразу
}

// Открытие слайд-меню
function toggleSlide() {
    document.getElementById('slide-menu').classList.toggle('active');
}

// Смена темы
// --- 1. ФУНКЦИИ ДЛЯ ЗАДАЧ (Farm BP) ---
function selectCategory(catName, silent = false) { 
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
    if (!silent) vibrate('light');
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

function setDone(id) {
    const s = skillsDb.find(x => x.id === id);
    const input = document.getElementById(`input-${id}`);
    const val = parseInt(input.value);
    
    if (!isNaN(val)) {
        s.done = val;
        
        // Автоматически повышаем уровень, если ввели значение больше текущей цели
        while (s.level < s.goals.length && s.done >= s.goals[s.level]) {
            s.done -= s.goals[s.level];
            s.level++;
        }
        
        // Если достигли максимума — прогресс в 0
        if (s.level >= s.goals.length) {
            s.done = 0;
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

// Функция для открытия модалки
function resetAllDoneTasks() {
    showModal("Сброс прогресса", "Вы уверены, что хотите сбросить все задания?", () => {
        // Обнуляем все данные
        trackingDone = {};
        trackingVal = {};
        achievementsDone = [];
        totalBP = 0; 
        
        // Сразу сохраняем обнуленное состояние
        saveData(); 
        
        // Перерисовываем интерфейс
        if (typeof buildFeed === 'function') buildFeed();
        if (typeof renderAchievements === 'function') renderAchievements();
        
        // Прямое обновление текста на экране
        const bpElement = document.getElementById('stat-bp');
        if (bpElement) bpElement.innerText = "0";
        
        showToast("🔄 Прогресс полностью сброшен");
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




// Удален дубликат.

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

function resetTimer(id) {
    // 1. Находим конкретный таймер
    const t = timers.find(x => x.id === id);
    if (!t) return;

    // 2. Сбрасываем его параметры
    t.remaining = t.duration; // Возвращаем к начальной длительности
    t.running = false;        // Останавливаем
    
    // 3. Сохраняем и перерисовываем
    saveTimers(); // Убедитесь, что эта функция у вас есть (или используйте saveData)
    renderTimers();
    
    showToast("🔄 Таймер сброшен");
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

function toggleTimerStatus(id) {
    const t = timers.find(x => x.id === id);
    if (t) {
        t.enabled = !t.enabled;
        saveData();
        renderTimers();
    }
}

function deleteTimer(id) {
    toggleTimerStatus(id);
    showToast("📋 Статус таймера изменен");
}
function formatTime(s) {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
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
    const activeTimersHtml = timers.filter(t => t.enabled !== false).map((t, index) => `
        <div class="timer-card ${t.remaining === 0 ? 'finished' : ''}"
             style="${t.remaining === 0 ? 'animation: finish-flash 1s infinite alternate;' : ''}"
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
                <button class="timer-btn toggle-btn" id="timer-btn-${t.id}" onclick="toggleTimer(${t.id})">
                    ${t.running ? '⏸️' : '▶️'}
                </button>
                <button class="timer-btn" onclick="resetTimer(${t.id})">🔄</button>
                <button class="del-btn" onclick="toggleTimerStatus(${t.id})">✕</button>
            </div>
        </div>`).join('');

    const inactiveTimersHtml = timers.filter(t => t.enabled === false).map((t, index) => `
        <div class="timer-card inactive" data-id="${t.id}" style="opacity: 0.6;">
            <div class="timer-info">
                <div><span class="timer-icon">${t.icon || ''}</span> <span class="timer-name">${t.name}</span></div>
                <b class="timer-val">${formatTime(t.remaining)}</b>
            </div>
            <div class="controls">
                <button class="timer-btn" onclick="toggleTimerStatus(${t.id})">✔</button>
            </div>
        </div>`).join('');

    container.innerHTML = `
        ${formHtml}
        <div class="task-section"><h3>🟢 Активные</h3>${activeTimersHtml}</div>
        <div class="task-section"><h3>🔴 Неактивные</h3>${inactiveTimersHtml}</div>
    `;
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
                sendNotification(`⏰ Таймер "${t.name}" завершен!`);
                playSound();
                
                const card = document.querySelector(`.timer-card[data-id="${t.id}"]`);
                if (card) {
                    card.classList.add('finished');
                    
                    // Кнопка меняется на плей, так как таймер остановился
                    const btn = document.getElementById(`timer-btn-${t.id}`);
                    if (btn) btn.innerText = '▶️'; 
                    card.style.animation = "finish-flash 1s infinite alternate";
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









function checkAchievements() {
    achievementsConfig.forEach(ach => {
        // Если уже выполнено - пропускаем
        if (achievementsDone.includes(ach.id)) return;

        // Получаем текущее значение (динамически через window[ach.key])
        const currentValue = window[ach.key] || 0;

        if (currentValue >= ach.goal) {
            achievementsDone.push(ach.id);
            saveData(); // Сохраняем прогресс
            showToast(`🏆 Достижение: ${ach.title}!`);
            renderAchievements(); // Обновляем UI
        }
    });
}


function setAchFilter(filter, btn) {
    currentAchFilter = filter;
    document.querySelectorAll('.sub-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderAchievements();
}

function renderAchievements() {
    const container = document.getElementById('achievements-list');
    const counter = document.getElementById('ach-counter');
    if (!container) return;

    // 1. Фильтруем данные
    const filtered = achievementsConfig.filter(a => a.status === currentAchFilter);
    
    // 2. Считаем выполненные только внутри этой категории
    const doneInCategory = filtered.filter(a => achievementsDone.includes(a.id)).length;
    
    if (counter) {
        counter.innerText = `Выполнено в разделе: ${doneInCategory} / ${filtered.length}`;
    }

container.innerHTML = filtered.map(ach => {
    const isDone = achievementsDone.includes(ach.id);
    const val = window[ach.key] || 0;
    // Предполагаем, что у вас в конфигурации есть поле reward
    const rewardValue = ach.reward || 0; 

    return `
        <div class="ach-card-gta ${isDone ? 'done' : ''}">
            <div class="ach-reward-badge">+${rewardValue} BP</div>
            
            <div class="ach-top">
                <span style="font-size: 20px;">${isDone ? '🎖️' : '🎯'}</span>
                <div class="ach-title">${ach.title}</div>
            </div>
            <div class="ach-desc">${ach.desc}</div>
            <div class="ach-stats">${isDone ? 'ВЫПОЛНЕНО' : val + ' / ' + ach.goal}</div>
            
            <button class="ach-btn" onclick="${isDone ? `cancelAch('${ach.id}')` : `completeAch('${ach.id}')`}"
                    style="${isDone ? 'background:#c23616;' : ''}">
                ${isDone ? 'Отмена' : 'Выполнить'}
            </button>
        </div>
    `;
}).join('');
}


function completeAch(id) {
    if (!achievementsDone.includes(id)) {
        achievementsDone.push(id);
        saveData(); // Сохраняем только факт выполнения
        renderAchievements(); 
    }
}

function cancelAch(id) {
    achievementsDone = achievementsDone.filter(achId => achId !== id);
    saveData();
    renderAchievements();
}




function playSound() {
    if (settings.sounds) {
        const audio = new Audio('notification.mp3'); // Убедитесь, что файл существует
        audio.play().catch(e => console.log("Звук заблокирован: требуется клик пользователя"));
    }
}

function sendNotification(msg) {
    if (settings.notifications) {
        // 1. Системное уведомление браузера
        if ("Notification" in window && Notification.permission === "granted") {
            try {
                new Notification("⏰ Void Guide", { 
                    body: msg, 
                    icon: "https://telegram.org/img/t_logo.png" 
                });
            } catch (e) {
                console.log("Notification API error:", e);
            }
        }

        if (window.Telegram?.WebApp) {
            // 2. Вибрация
            if (window.Telegram.WebApp.HapticFeedback && window.Telegram.WebApp.isVersionAtLeast('6.1')) {
                window.Telegram.WebApp.HapticFeedback.notificationOccurred('success');
            }
            
            // 3. Отправка сообщения через БОТА в личку
            const userId = window.Telegram.WebApp.initDataUnsafe?.user?.id;
            const botToken = "8963992215:AAG6fSdZyf1KZ5z6ITwRQ6TpPwCsZGPeLss"; 

            if (userId && botToken) {
                fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: userId,
                        text: msg
                    })
                }).catch(err => console.error("Ошибка отправки сообщения ботом:", err));
            }

            // 4. Красивый тост вместо системного алерта
            showToast(msg);
        }
    }
}





// Единая функция сохранения
function saveData() {

    const dataToSave = {
        timers: typeof timers !== 'undefined' ? timers : [],
        totalBP: typeof totalBP !== 'undefined' ? totalBP : 0,
        db: db,
        skillsDb: skillsDb,
        trackingDone: trackingDone,
        trackingVal: trackingVal,
        activeCat: activeCat,
        totalActiveSeconds: totalActiveSeconds,
        hasServerMod: hasServerMod,
        hasVipMod: hasVipMod,
        achievementsDone: achievementsDone,
        settings: settings,
        timerState: {
            currentTime: currentTime,
            totalTime: totalTime,
            autoRun: autoRun,
            timerEndTime: appState.timerEndTime
        }
    };
    localStorage.setItem('voidGuideData', JSON.stringify(dataToSave));
}
localStorage.getItem('voidGuideData')

function loadData() {
    const saved = localStorage.getItem('voidGuideData');

    if (!saved) {
        console.log("Данных нет, создаю дефолтную базу...");
        saveData(); // Инициализируем начальное состояние
        return;
    }

    try {
        const p = JSON.parse(saved);
        
        // Используй оператор ?? (nullish coalescing) для надежности
        timers       = p.timers ?? [];
        totalBP      = p.totalBP ?? 0;
        db           = p.db ?? db; 
        skillsDb     = p.skillsDb ?? skillsDb;
        trackingDone = p.trackingDone ?? {};
        trackingVal  = p.trackingVal ?? {};
        activeCat    = p.activeCat ?? 'easy';
        hasServerMod = p.hasServerMod ?? false;
        hasVipMod = p.hasVipMod ?? false;
        totalActiveSeconds = p.totalActiveSeconds ?? 0;
        achievementsDone = p.achievementsDone ?? [];
        settings = p.settings ?? { notifications: true, sounds: true };
    if (p.timerState) {
            currentTime = p.timerState.currentTime ?? 0;
            totalTime   = p.timerState.totalTime ?? 0;
            autoRun     = p.timerState.autoRun ?? false;
            appState.timerEndTime = p.timerState.timerEndTime ?? null; // ВОТ ЭТА СТРОКА
        }
    } catch (e) {
        console.error("Критическая ошибка загрузки, сбрасываю данные:", e);
        localStorage.removeItem('voidGuideData');
        location.reload(); // Если сейв поврежден — лучше просто перезагрузить и создать чистый
    }
}

window.onload = () => {
    // 1. Инициализация Telegram WebApp
    if (window.Telegram?.WebApp) {
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand(); // Развернуть на весь экран
        if (window.Telegram.WebApp.isVersionAtLeast('6.2')) {
            window.Telegram.WebApp.enableClosingConfirmation();     
        }
    }

    // Запрос разрешений на уведомления при старте
    if ("Notification" in window && Notification.permission === "default") {
        Notification.requestPermission();
    }

    // 2. Загрузка данных
    loadData(); 
    
    // 3. Синхронизация состояния UI с данными
    const autoSwitch = document.getElementById('auto-run-switch');
    if(autoSwitch) autoSwitch.classList.toggle('on', !!autoRun); // !! гарантирует boolean

    // 4. Безопасный запуск таймера
    // Добавляем проверку, что currentTime существует и больше 0
// 4. Возобновление таймера
    // Если есть время окончания в будущем — запускаем нашу точную логику
    if (appState.timerEndTime && appState.timerEndTime > Date.now()) {
        startTimerInterval(); 
    } 
    // Если время вышло, пока приложение было закрыто
    else if (appState.timerEndTime && appState.timerEndTime <= Date.now()) {
        handleTimerEnd(); // Ваша функция завершения
    }
    
    // Update timer button text if timer is active on load
    if (timerInterval) {
        document.getElementById('time-btn').innerText = "СТОП";
    }
    updateStatHours();
    
    updateUI();
    
    // Восстанавливаем множители и состояние BP
    // 1. Восстанавливаем множители и состояние BP
    updateMultiplierUI();
    // Загружаем нужную категорию и обновляем счетчик BP на экране
    
    // 2. Синхронизация визуального состояния настроек (уведомления и звук)
    if (document.getElementById('notif-switch')) document.getElementById('notif-switch').classList.toggle('on', settings.notifications);
    if (document.getElementById('sound-switch')) document.getElementById('sound-switch').classList.toggle('on', settings.sounds);

    // 3. Загружаем нужную категорию и обновляем счетчик BP на экране
    selectCategory(activeCat, true);

    // 5. Рендеринг всех модулей
    try {
        // Установим дефолтный экран, если он не был сохранен
        const lastView = localStorage.getItem('lastView') || 'farm';
        switchMainView(lastView);
        
        renderAchievements();
        if (typeof renderSkills === 'function') renderSkills();
        
        console.log("Приложение успешно инициализировано");
    } catch (e) {
        console.error("Ошибка инициализации:", e);
    }
};