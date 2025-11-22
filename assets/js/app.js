// === 1. DATA & CONFIGURATIONS ===

const DEFAULT_BACKGROUNDS = [
  { id: 'gradient-1', name: 'Лавандовий', light: 'linear-gradient(135deg, #f5f3ff 0%, #e9d5ff 100%)', dark: 'linear-gradient(135deg, #4c1d95 0%, #6b21a8 100%)' },
  { id: 'gradient-2', name: 'М\'ятний', light: 'linear-gradient(135deg, #ecfdf5 0%, #a7f3d0 100%)', dark: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)' },
  { id: 'gradient-3', name: 'Персиковий', light: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', dark: 'linear-gradient(135deg, #78350f 0%, #92400e 100%)' },
  { id: 'gradient-4', name: 'Блакитний', light: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', dark: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)' },
  { id: 'gradient-5', name: 'Рожевий', light: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)', dark: 'linear-gradient(135deg, #831843 0%, #9f1239 100%)' },
  { id: 'solid-white', name: 'Стандартний', light: '#ffffff', dark: '#1f2937' }
];

const MOCK_SCHEDULE = [
  // ЧИСЕЛЬНИК - ПЕРША ПІДГРУПА
  { id: 'n1', day: 'Понеділок', time: '08:30 - 09:50', subject: 'Алгоритмізація та програмування, частина 1', teacher: 'Патерега Ю.І.🙏⛪ ', room: '327 ІV н.к.', type: 'practice', subgroup: null, weekType: 'numerator' },
  { id: 'n2', day: 'Понеділок', time: '10:05 - 11:25', subject: 'Дискретна математика', teacher: 'Станкевич О.М.❤️', room: '325 ІV н.к.', type: 'lecture', subgroup: null, weekType: 'numerator' },
  { id: 'n3', day: 'Понеділок', time: '11:40 - 13:00', subject: 'Алгебра і геометрія', teacher: 'Процах Н.П.😜', room: '406 І н.к.', type: 'practice', subgroup: null, weekType: 'numerator' },
  { id: 'n4', day: 'Вівторок', time: '08:30 - 09:50', subject: 'Історія державності та культури України', teacher: 'Банах В.М.🤳', room: '402 І н.к.', type: 'practice', subgroup: null, weekType: 'numerator' },
  { id: 'n5', day: 'Вівторок', time: '10:05 - 11:25', subject: 'Дискретна математика', teacher: 'Реброт Д.П.🤖', room: '327 ІV н.к.', type: 'practice', subgroup: null, weekType: 'numerator' },
  { id: 'n6', day: 'Середа', time: '08:30 - 09:50', subject: 'Фізичне виховання, частина 1', teacher: 'Череповська О.А.❤️', room: 'Стрийський парк😥/#Годівничка', type: 'practice', subgroup: null, weekType: 'numerator' },
  { id: 'n7', day: 'Середа', time: '10:05 - 11:25', subject: 'Фізика', teacher: 'Кашуба Н.Ю.💔, Семоток❤️ О.В.', room: 'Лабораторна - Головний корпус🤟', type: 'lab', subgroup: null, weekType: 'numerator' },
  { id: 'n8', day: 'Середа', time: '11:40 - 13:00', subject: 'Алгебра і геометрія', teacher: 'Процах Н.П.❤️', room: '217 І н.к.', type: 'lecture', subgroup: null, weekType: 'numerator' },
  { id: 'n9', day: 'Четвер', time: '10:05 - 11:25', subject: 'Іноземна мова за професійним спрямуванням', teacher: 'Нагачевська О.О.👟🤧', room: '21 VІІ н.к.', type: 'practice', subgroup: 1, weekType: 'numerator' },
  { id: 'n10', day: 'Четвер', time: '11:40 - 13:00', subject: 'Фізика', teacher: 'Захар\'яш О.С.🤓', room: '124 Гол. н.к.', type: 'lecture', subgroup: null, weekType: 'numerator' },
  { id: 'n11', day: 'Четвер', time: '13:15 - 14:35', subject: 'Алгоритмізація та програмування, частина 1', teacher: 'Андрушко А.М.😍', room: '407 ХХVІІІ н.к.', type: 'lab', subgroup: 1, weekType: 'numerator' },
  { id: 'n12', day: 'П\'ятниця', time: '08:30 - 09:50', subject: 'Алгоритмізація та програмування, частина 1', teacher: 'Гілета І.В.😴🥱', room: '114 І н.к.', type: 'lecture', subgroup: null, weekType: 'numerator' },

  // ЗНАМЕННИК - ПЕРША ПІДГРУПА
  { id: 'd1', day: 'Понеділок', time: '08:30 - 09:50', subject: 'Алгоритмізація та програмування, частина 1', teacher: 'Патерега Ю.І.🙏⛪ ', room: '327 ІV н.к.', type: 'practice', subgroup: null, weekType: 'denominator' },
  { id: 'd2', day: 'Понеділок', time: '10:05 - 11:25', subject: 'Дискретна математика', teacher: 'Станкевич О.М.❤️', room: '325 ІV н.к.', type: 'lecture', subgroup: null, weekType: 'denominator' },
  { id: 'd3', day: 'Понеділок', time: '11:40 - 13:00', subject: 'Алгебра і геометрія', teacher: 'Процах Н.П.😜', room: '406 І н.к.', type: 'practice', subgroup: null, weekType: 'denominator' },
  { id: 'd4', day: 'Вівторок', time: '08:30 - 09:50', subject: 'Історія державності та культури України', teacher: 'Ганусин О.Б.❤️', room: '217 І н.к.', type: 'lecture', subgroup: null, weekType: 'denominator' },
  { id: 'd5', day: 'Вівторок', time: '10:05 - 11:25', subject: 'Дискретна математика', teacher: 'Реброт Д.П.🤖', room: '327 ІV н.к.', type: 'practice', subgroup: null, weekType: 'denominator' },
  { id: 'd6', day: 'Середа', time: '08:30 - 09:50', subject: 'Фізичне виховання, частина 1', teacher: 'Череповська О.А.❤️', room: 'Стрийський парк', type: 'practice', subgroup: null, weekType: 'denominator' },
  { id: 'd7', day: 'Середа', time: '10:05 - 11:25', subject: 'Фізика', teacher: 'Кашуба Н.Ю.💔', room: 'Лабораторна', type: 'lab', subgroup: null, weekType: 'denominator' },
  { id: 'd8', day: 'Середа', time: '11:40 - 13:00', subject: 'Алгебра і геометрія', teacher: 'Процах Н.П.❤️', room: '217 І н.к.', type: 'lecture', subgroup: null, weekType: 'denominator' },
  { id: 'd8a', day: 'Середа', time: '13:15 - 14:35', subject: 'Дискретна математика', teacher: 'Іванина В.В.🤓', room: '501(б) ІV н.к.', type: 'lab', subgroup: 1, weekType: 'denominator' },
  { id: 'd9', day: 'Четвер', time: '10:05 - 11:25', subject: 'Іноземна мова', teacher: 'Нагачевська О.О.', room: '21 VІІ н.к.', type: 'practice', subgroup: 1, weekType: 'denominator' },
  { id: 'd10', day: 'Четвер', time: '11:40 - 13:00', subject: 'Фізика', teacher: 'Захар\'яш О.С.', room: '124 Гол. н.к.', type: 'lecture', subgroup: null, weekType: 'denominator' },
  { id: 'd11', day: 'Четвер', time: '13:15 - 14:35', subject: 'Алгоритмізація та програмування', teacher: 'Андрушко А.М.', room: '407 ХХVІІІ н.к.', type: 'lab', subgroup: 1, weekType: 'denominator' },
  { id: 'd12', day: 'П\'ятниця', time: '08:30 - 09:50', subject: 'Алгоритмізація та програмування', teacher: 'Гілета І.В.', room: '114 І н.к.', type: 'lecture', subgroup: null, weekType: 'denominator' },
  { id: 'd13', day: 'П\'ятниця', time: '10:05 - 11:25', subject: 'Алгебра і геометрія', teacher: 'Процах Н.П.', room: '109 І н.к.', type: 'practice', subgroup: null, weekType: 'denominator' },

  // ДРУГА ПІДГРУПА (ДОДАТКИ)
  { id: 'n8a-s2', day: 'Середа', time: '13:15 - 14:35', subject: 'Дискретна математика', teacher: 'Іванина В.В.🤓', room: '501(б) ІV н.к.', type: 'lab', subgroup: 2, weekType: 'numerator' },
  { id: 'n9-s2', day: 'Четвер', time: '10:05 - 11:25', subject: 'Алгоритмізація та програмування', teacher: 'Кулешник Я.Ф.', room: '407 ХХVІІІ н.к.', type: 'lab', subgroup: 2, weekType: 'numerator' },
  { id: 'n10-s2', day: 'Четвер', time: '11:40 - 13:00', subject: 'Іноземна мова', teacher: 'Крайник Л.Б.', room: '406 ІІ н.к.', type: 'practice', subgroup: 2, weekType: 'numerator' },
  { id: 'd9-s2', day: 'Четвер', time: '10:05 - 11:25', subject: 'Алгоритмізація та програмування', teacher: 'Кулешник Я.Ф.', room: '407 ХХVІІІ н.к.', type: 'lab', subgroup: 2, weekType: 'denominator' },
  { id: 'd10-s2', day: 'Четвер', time: '11:40 - 13:00', subject: 'Іноземна мова', teacher: 'Крайник Л.Б.', room: '406 ІІ н.к.', type: 'practice', subgroup: 2, weekType: 'denominator' }
];

const DEFAULT_AVATARS = ['👨‍🎓', '👩‍🎓', '🧑‍💻', '👨‍💻', '👩‍💻', '🦁', '🐯', '🐼', '🐨', '🦊', '🚀', '⚡', '🌟', '🔥', '💎'];
const GROUPS = ['ПП-11', 'ПП-12', 'ПП-13', 'ПП-14', 'ПП-15', 'ПП-16'];
const DAYS = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця'];

// === 2. GLOBAL STATE & INIT ===

let currentUser = null;
let activeTab = 'schedule';
let scheduleState = { selectedDay: 'Понеділок', viewSubgroup: 1 };
let homeworkState = { list: [], filter: 'active' };
let setupState = { step: 'nickname', email: '', nickname: '', avatar: '', group: 'ПП-15', subgroup: 1, weekType: 'numerator' };

// Image Fallback
const FALLBACK_IMAGE = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';
window.addEventListener('error', function(e) {
    if (e.target && e.target.tagName === 'IMG' && e.target.src !== FALLBACK_IMAGE) {
        e.target.src = FALLBACK_IMAGE;
        e.target.classList.add('bg-gray-100', 'object-contain', 'p-2');
    }
}, true);

document.addEventListener('DOMContentLoaded', () => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
        const userData = JSON.parse(savedUser);
        handleUserMigration(userData); 
        currentUser = userData;
        showApp();
    } else {
        showLogin();
    }
    
    const savedHW = localStorage.getItem('homework');
    homeworkState.list = savedHW ? JSON.parse(savedHW) : [];

    setupEventListeners();
    lucide.createIcons();
});

function setupEventListeners() {
    document.getElementById('user-menu-btn')?.addEventListener('click', (e) => {
        e.stopPropagation();
        document.getElementById('user-dropdown').classList.toggle('hidden');
    });
    document.addEventListener('click', () => document.getElementById('user-dropdown')?.classList.add('hidden'));
    document.getElementById('logout-btn')?.addEventListener('click', handleLogout);
    document.getElementById('login-form')?.addEventListener('submit', handleLoginSubmit);
    document.getElementById('toggle-auth-mode')?.addEventListener('click', toggleAuthMode);
    document.getElementById('profile-setup-container')?.addEventListener('click', handleProfileSetupClick);
    document.getElementById('add-homework-form')?.addEventListener('submit', handleAddHomeworkSubmit);
}

// === 3. AUTHENTICATION ===

let isRegistering = false;

function toggleAuthMode() {
    isRegistering = !isRegistering;
    const btnText = isRegistering ? 'Вже є акаунт? <span class="underline">Увійти</span>' : 'Ще не з нами? <span class="underline">Приєднатися</span>';
    const submitText = isRegistering ? 'Зареєструватися' : 'Увійти';
    document.getElementById('toggle-auth-mode').innerHTML = btnText;
    document.getElementById('login-submit-btn').textContent = submitText;
    document.getElementById('confirm-password-group').classList.toggle('hidden', !isRegistering);
}

function handleLoginSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const agreement = document.getElementById('agreement').checked;
    
    if (!agreement) return alert('Ви маєте погодитись з умовами ("Слава Навіки Богу")');
    if (!email.includes('@')) return alert('Введіть коректний email');

    if (isRegistering) {
        const confirmPass = document.getElementById('login-confirm-password').value;
        if (password !== confirmPass) return alert('Паролі не співпадають');
        setupState.email = email;
        showProfileSetup();
    } else {
        // Auto-login with temp data if user doesn't exist
        const tempUser = {
            email: email,
            nickname: email.split('@')[0],
            avatar: '👤',
            subgroup: 1,
            groupName: 'ПП-15',
            currentWeekType: 'numerator',
            lastWeekChange: new Date().toISOString(),
            theme: 'light'
        };
        currentUser = tempUser;
        localStorage.setItem('user', JSON.stringify(tempUser));
        showApp();
    }
}

// === 4. PROFILE SETUP ===

function showProfileSetup() {
    document.getElementById('login-screen').classList.add('hidden-screen');
    document.getElementById('profile-setup-screen').classList.remove('hidden-screen');
    renderProfileStep();
}

function renderProfileStep() {
    const container = document.getElementById('profile-setup-content');
    container.innerHTML = ''; 

    if (setupState.step !== 'error') {
        const dots = ['nickname', 'avatar', 'group', 'week'].map(s => 
            `<div class="w-3 h-3 rounded-full ${setupState.step === s ? 'bg-violet-400' : 'bg-violet-200'}"></div>`
        ).join('');
        container.innerHTML += `<div class="flex items-center justify-center gap-2 mb-8">${dots}</div>`;
    }

    let content = '';
    if (setupState.step === 'nickname') {
        content = `
            <div class="space-y-6 text-center">
                <div><i data-lucide="user" class="w-12 h-12 mx-auto mb-3 text-violet-400"></i><h2 class="text-xl font-bold">Оберіть нікнейм</h2></div>
                <input type="text" id="setup-nickname" class="w-full px-4 py-3 border border-violet-200 rounded-lg" placeholder="Введіть нікнейм" value="${setupState.nickname}">
                <button data-action="next-nick" class="w-full bg-violet-400 text-white py-3 rounded-lg">Далі</button>
            </div>`;
    } else if (setupState.step === 'avatar') {
        const avatars = DEFAULT_AVATARS.map(av => 
            `<button data-action="select-avatar" data-val="${av}" class="text-3xl p-3 rounded-lg border-2 ${setupState.avatar === av ? 'border-violet-400 bg-violet-50' : 'border-violet-200'}">${av}</button>`
        ).join('');
        content = `
            <div class="space-y-6 text-center">
                <div class="text-5xl mb-3">${setupState.avatar || '👤'}</div>
                <h2 class="text-xl font-bold">Оберіть аватар</h2>
                <div class="grid grid-cols-5 gap-3">${avatars}</div>
                <div class="flex gap-3"><button data-action="back-nick" class="flex-1 px-4 py-3 border rounded-lg">Назад</button><button data-action="next-avatar" class="flex-1 bg-violet-400 text-white py-3 rounded-lg">Далі</button></div>
            </div>`;
    } else if (setupState.step === 'group') {
        const groupOpts = GROUPS.map(g => `<option value="${g}" ${setupState.group === g ? 'selected' : ''}>${g}</option>`).join('');
        content = `
            <div class="space-y-6 text-center">
                <div class="text-5xl mb-3">🎓</div>
                <h2 class="text-xl font-bold">Оберіть групу</h2>
                <select id="setup-group" class="w-full px-4 py-3 border rounded-lg">${groupOpts}</select>
                <div class="grid grid-cols-2 gap-3">
                    <button data-action="sub-1" class="py-3 rounded-lg border-2 ${setupState.subgroup === 1 ? 'border-teal-400 bg-teal-50' : 'border-violet-200'}">Підгрупа 1</button>
                    <button data-action="sub-2" class="py-3 rounded-lg border-2 ${setupState.subgroup === 2 ? 'border-teal-400 bg-teal-50' : 'border-violet-200'}">Підгрупа 2</button>
                </div>
                <div class="flex gap-3"><button data-action="back-avatar" class="flex-1 px-4 py-3 border rounded-lg">Назад</button><button data-action="next-group" class="flex-1 bg-violet-400 text-white py-3 rounded-lg">Далі</button></div>
            </div>`;
    } else if (setupState.step === 'error') {
        content = `
            <div class="space-y-6 text-center">
                <div class="text-6xl mb-4">😅</div>
                <img src="assets/img/error.png" class="w-full h-48 object-cover rounded-xl mb-4 mx-auto">
                <h2 class="text-xl font-bold">Упс! Тільки ПП-15</h2>
                <p class="text-gray-600">Цей додаток ексклюзивний для нашої групи!</p>
                <button data-action="reset-group" class="w-full bg-teal-400 text-white py-3 rounded-lg">Повернутися</button>
            </div>`;
    } else if (setupState.step === 'week') {
        content = `
            <div class="space-y-6 text-center">
                <div class="text-5xl mb-3">📅</div>
                <h2 class="text-xl font-bold">Тип тижня</h2>
                <div class="grid grid-cols-2 gap-3">
                    <button data-action="week-num" class="py-4 rounded-lg border-2 ${setupState.weekType === 'numerator' ? 'border-violet-400 bg-violet-50' : 'border-violet-200'}">Чисельник</button>
                    <button data-action="week-den" class="py-4 rounded-lg border-2 ${setupState.weekType === 'denominator' ? 'border-violet-400 bg-violet-50' : 'border-violet-200'}">Знаменник</button>
                </div>
                <button data-action="finish-setup" class="w-full bg-teal-400 text-white py-3 rounded-lg">Завершити</button>
            </div>`;
    }
    container.innerHTML += content;
    lucide.createIcons();
}

function handleProfileSetupClick(e) {
    const btn = e.target.closest('button');
    if (!btn) return;
    const action = btn.dataset.action;
    
    if (action === 'next-nick') {
        const nick = document.getElementById('setup-nickname').value;
        if (nick) { setupState.nickname = nick; setupState.step = 'avatar'; renderProfileStep(); }
    } else if (action === 'select-avatar') {
        setupState.avatar = btn.dataset.val; renderProfileStep();
    } else if (action === 'next-avatar') {
        setupState.step = 'group'; renderProfileStep();
    } else if (action === 'back-nick') {
        setupState.step = 'nickname'; renderProfileStep();
    } else if (action === 'sub-1') { setupState.subgroup = 1; renderProfileStep();
    } else if (action === 'sub-2') { setupState.subgroup = 2; renderProfileStep();
    } else if (action === 'next-group') {
        const grp = document.getElementById('setup-group').value;
        if (grp !== 'ПП-15') setupState.step = 'error';
        else { setupState.group = grp; setupState.step = 'week'; }
        renderProfileStep();
    } else if (action === 'reset-group') {
        setupState.step = 'group'; renderProfileStep();
    } else if (action === 'back-avatar') {
        setupState.step = 'avatar'; renderProfileStep();
    } else if (action === 'week-num') { setupState.weekType = 'numerator'; renderProfileStep();
    } else if (action === 'week-den') { setupState.weekType = 'denominator'; renderProfileStep();
    } else if (action === 'finish-setup') {
        const newUser = {
            email: setupState.email,
            nickname: setupState.nickname,
            avatar: setupState.avatar || '👤',
            subgroup: setupState.subgroup,
            groupName: setupState.group,
            currentWeekType: setupState.weekType,
            lastWeekChange: new Date().toISOString(),
            theme: 'light'
        };
        currentUser = newUser;
        localStorage.setItem('user', JSON.stringify(newUser));
        document.getElementById('profile-setup-screen').classList.add('hidden-screen');
        showApp();
    }
}

// === 5. MAIN APP LOGIC ===

function handleUserMigration(userData) {
    const lastChange = new Date(userData.lastWeekChange);
    const now = new Date();
    const daysDiff = Math.floor((now.getTime() - lastChange.getTime()) / (1000 * 60 * 60 * 24));
    if (daysDiff >= 7) {
        const weeksToChange = Math.floor(daysDiff / 7);
        if (weeksToChange % 2 === 1) {
            userData.currentWeekType = userData.currentWeekType === 'numerator' ? 'denominator' : 'numerator';
        }
        userData.lastWeekChange = now.toISOString();
        localStorage.setItem('user', JSON.stringify(userData));
    }
}

function handleLogout() {
    if (confirm('Ви впевнені, що хочете вийти?')) {
        currentUser = null;
        localStorage.removeItem('user');
        location.reload();
    }
}

function saveUser(user) {
    currentUser = user;
    localStorage.setItem('user', JSON.stringify(user));
    updateUserInterface();
    if (activeTab === 'schedule') renderSchedule();
    if (activeTab === 'settings') renderSettings();
}

function showLogin() {
    document.getElementById('login-screen').classList.remove('hidden-screen');
    document.getElementById('app-locked').classList.add('hidden-screen');
}

function showApp() {
    document.getElementById('login-screen').classList.add('hidden-screen');
    document.getElementById('app-locked').classList.remove('hidden-screen');
    scheduleState.viewSubgroup = currentUser.subgroup;
    updateUserInterface();
    switchTab('schedule');
}

function updateUserInterface() {
    if (!currentUser) return;
    document.getElementById('user-nickname').textContent = currentUser.nickname;
    document.getElementById('user-email-display').textContent = currentUser.email;
    document.getElementById('user-group').textContent = currentUser.groupName;
    document.getElementById('user-subgroup').textContent = currentUser.subgroup;
    document.getElementById('user-avatar').textContent = currentUser.avatar;

    // Theme & Background
    if (currentUser.theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');

    let bgStyle = '';
    if (currentUser.customBackground) {
        bgStyle = currentUser.customBackground.startsWith('url') ? currentUser.customBackground : `url(${currentUser.customBackground})`;
    } else if (currentUser.backgroundId) {
        const bg = DEFAULT_BACKGROUNDS.find(b => b.id === currentUser.backgroundId);
        if (bg) bgStyle = bg[currentUser.theme];
    } else {
        bgStyle = currentUser.theme === 'dark' ? '#1f2937' : '#ffffff';
    }
    
    document.body.style.background = bgStyle;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
}

window.switchTab = function(tabName) {
    activeTab = tabName;
    document.querySelectorAll('.view-content').forEach(el => el.classList.add('hidden-screen'));
    document.getElementById(`view-${tabName}`).classList.remove('hidden-screen');
    
    document.querySelectorAll('.nav-tab').forEach(btn => {
        const isTarget = btn.id === `tab-${tabName}`;
        btn.className = 'nav-tab flex-1 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all';
        if (isTarget) {
            if (tabName === 'schedule') btn.classList.add('bg-violet-400', 'dark:bg-violet-600', 'text-white', 'shadow-md');
            else if (tabName === 'homework') btn.classList.add('bg-teal-400', 'dark:bg-teal-600', 'text-white', 'shadow-md');
            else if (tabName === 'settings') btn.classList.add('bg-gray-400', 'dark:bg-gray-600', 'text-white', 'shadow-md');
            else if (tabName === 'download') btn.classList.add('bg-green-400', 'dark:bg-green-600', 'text-white', 'shadow-md');
        } else {
            btn.classList.add('text-gray-600', 'dark:text-gray-300', 'hover:bg-gray-50', 'dark:hover:bg-gray-700/30');
        }
    });

    if (tabName === 'schedule') renderSchedule();
    if (tabName === 'homework') renderHomework();
    if (tabName === 'settings') renderSettings();
    lucide.createIcons();
}

window.showDownloadModal = function() { document.getElementById('download-modal').classList.remove('hidden-screen'); }
window.hideDownloadModal = function() { document.getElementById('download-modal').classList.add('hidden-screen'); }

// === 6. SCHEDULE VIEW ===

window.toggleWeekType = function() {
    const newType = currentUser.currentWeekType === 'numerator' ? 'denominator' : 'numerator';
    saveUser({ ...currentUser, currentWeekType: newType });
    renderSchedule();
}
window.setScheduleDay = function(day) { scheduleState.selectedDay = day; renderSchedule(); }

function renderSchedule() {
    const isNum = currentUser.currentWeekType === 'numerator';
    document.getElementById('week-icon').textContent = isNum ? '🔢' : '➗';
    document.getElementById('week-label').textContent = isNum ? 'Чисельник' : 'Знаменник';

    // Render Days
    const daysContainer = document.getElementById('days-container');
    daysContainer.innerHTML = '';
    DAYS.forEach(day => {
        const isActive = day === scheduleState.selectedDay;
        const btn = document.createElement('button');
        btn.textContent = day;
        btn.onclick = () => window.setScheduleDay(day);
        btn.className = `px-4 py-2 rounded-lg whitespace-nowrap transition-all ${isActive ? 'bg-violet-400 dark:bg-violet-600 text-white shadow-md' : 'bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 hover:bg-violet-100'}`;
        daysContainer.appendChild(btn);
    });

    // Filter Schedule based on CURRENT USER SUBGROUP
    const filtered = MOCK_SCHEDULE.filter(cls => {
        if (cls.day !== scheduleState.selectedDay) return false;
        if (cls.weekType !== currentUser.currentWeekType) return false;
        // Show only shared classes (null) OR specific to user's subgroup
        if (cls.subgroup !== null && cls.subgroup !== currentUser.subgroup) return false;
        return true;
    }).sort((a, b) => a.time.localeCompare(b.time));

    const listContainer = document.getElementById('schedule-list');
    listContainer.innerHTML = '';
    if (filtered.length === 0) {
        listContainer.innerHTML = `<div class="text-center py-12 text-gray-500 dark:text-gray-400"><i data-lucide="book-open" class="w-12 h-12 mx-auto mb-3 opacity-50"></i><p>Немає занять на ${scheduleState.selectedDay}</p></div>`;
    } else {
        filtered.forEach(cls => {
            const typeColor = cls.type === 'lecture' ? 'bg-violet-100 text-violet-600' : cls.type === 'practice' ? 'bg-teal-100 text-teal-600' : 'bg-purple-100 text-purple-600';
            const typeLabel = cls.type === 'lecture' ? 'Лекція' : cls.type === 'practice' ? 'Практика' : 'Лабораторна';
            listContainer.innerHTML += `
                <div class="border border-violet-200 dark:border-violet-800 rounded-xl p-4 hover:shadow-md transition-shadow bg-violet-50 dark:bg-violet-900/20">
                    <div class="flex items-start justify-between mb-3">
                        <div class="flex-1">
                            <div class="flex items-center gap-2 mb-1">
                                <h3 class="text-violet-700 dark:text-violet-300 font-bold">${cls.subject}</h3>
                                ${cls.subgroup ? `<span class="text-xs bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-300 px-2 py-1 rounded">Підгрупа ${cls.subgroup}</span>` : ''}
                            </div>
                            <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm"><i data-lucide="clock" class="w-4 h-4"></i><span>${cls.time}</span></div>
                        </div>
                        <span class="px-3 py-1 rounded-full text-xs font-medium ${typeColor} dark:bg-opacity-20">${typeLabel}</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div class="flex items-center gap-2 text-gray-700 dark:text-gray-300"><i data-lucide="user" class="w-4 h-4 text-violet-400"></i><span>${cls.teacher}</span></div>
                        <div class="flex items-center gap-2 text-gray-700 dark:text-gray-300"><i data-lucide="map-pin" class="w-4 h-4 text-teal-400"></i><span>${cls.room}</span></div>
                    </div>
                </div>`;
        });
    }
    lucide.createIcons();
}

// === 7. HOMEWORK VIEW ===

window.setHomeworkFilter = function(filter) { homeworkState.filter = filter; renderHomework(); }
window.toggleHwComplete = function(id) {
    homeworkState.list = homeworkState.list.map(hw => hw.id === id ? { ...hw, completed: !hw.completed } : hw);
    saveHomework(); renderHomework();
}
window.deleteHw = function(id) {
    if (confirm('Видалити це завдання?')) {
        homeworkState.list = homeworkState.list.filter(hw => hw.id !== id);
        saveHomework(); renderHomework();
    }
}
function saveHomework() { localStorage.setItem('homework', JSON.stringify(homeworkState.list)); }

function renderHomework() {
    ['active', 'all', 'completed'].forEach(f => {
        const btn = document.getElementById(`filter-${f}`);
        btn.className = homeworkState.filter === f ? 'px-4 py-2 rounded-lg transition-all whitespace-nowrap bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 font-medium' : 'px-4 py-2 rounded-lg transition-all whitespace-nowrap text-gray-600 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/20';
    });

    const filtered = homeworkState.list.filter(hw => {
        if (homeworkState.filter === 'active' && hw.completed) return false;
        if (homeworkState.filter === 'completed' && !hw.completed) return false;
        if (hw.subgroup && hw.subgroup !== currentUser.subgroup) return false;
        return true;
    }).sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

    const listContainer = document.getElementById('homework-list');
    listContainer.innerHTML = '';
    if (filtered.length === 0) {
        listContainer.innerHTML = `<div class="text-center py-12 text-gray-500 dark:text-gray-400"><i data-lucide="check-circle" class="w-12 h-12 mx-auto mb-3 opacity-50"></i><p>${homeworkState.filter === 'completed' ? 'Немає виконаних завдань' : 'Немає домашніх завдань'}</p></div>`;
    } else {
        filtered.forEach(hw => {
            const dateInfo = formatDate(hw.deadline);
            const badge = hw.subgroup ? `<div class="flex items-center gap-1 px-2 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded text-xs">Підгрупа ${hw.subgroup}</div>` : `<div class="flex items-center gap-1 px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded text-xs"><i data-lucide="users" class="w-3 h-3"></i>Для всіх</div>`;
            listContainer.innerHTML += `
                <div class="border rounded-xl p-4 transition-all ${hw.completed ? 'bg-violet-100 dark:bg-violet-900/20 border-violet-200 opacity-60' : 'border-violet-200 dark:border-violet-800 hover:shadow-md bg-violet-50 dark:bg-violet-900/20'}">
                    <div class="flex items-start gap-3">
                        <button onclick="toggleHwComplete('${hw.id}')" class="mt-1 w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${hw.completed ? 'bg-teal-400 border-teal-400' : 'border-violet-300 hover:border-violet-400'}">${hw.completed ? '<i data-lucide="check" class="w-3 h-3 text-white"></i>' : ''}</button>
                        <div class="flex-1 min-w-0">
                            <div class="flex items-start justify-between gap-3 mb-2">
                                <h3 class="text-violet-700 dark:text-violet-300 font-medium ${hw.completed ? 'line-through' : ''}">${hw.subject}</h3>
                                <div class="flex items-center gap-2 flex-shrink-0">${badge}<i data-lucide="${hw.isPublic ? 'globe' : 'lock'}" class="w-4 h-4 text-gray-400"></i></div>
                            </div>
                            <p class="text-gray-700 dark:text-gray-300 mb-3 text-sm">${hw.description}</p>
                            <div class="flex flex-wrap items-center gap-4 text-sm">
                                <div class="flex items-center gap-1 ${dateInfo.color}"><i data-lucide="calendar" class="w-4 h-4"></i><span>${dateInfo.text}</span></div>
                                <div class="flex items-center gap-1 text-gray-600 dark:text-gray-400"><i data-lucide="user" class="w-4 h-4"></i><span>${hw.addedBy}</span></div>
                                <button onclick="deleteHw('${hw.id}')" class="ml-auto text-red-600 hover:text-red-700"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                            </div>
                        </div>
                    </div>
                </div>`;
        });
    }
    lucide.createIcons();
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = date.getTime() - now.getTime();
    const diffHours = diffMs / (1000 * 60 * 60);
    if (diffMs < 0) return { text: 'Прострочено', color: 'text-red-600' };
    if (diffHours < 24) return { text: `Сьогодні`, color: 'text-orange-600' };
    return { text: date.toLocaleDateString('uk-UA'), color: 'text-gray-600' };
}

window.openAddHomeworkModal = function() {
    const select = document.getElementById('hw-subject');
    select.innerHTML = '';
    const uniqueSubjects = [...new Set(MOCK_SCHEDULE.map(s => s.subject))];
    uniqueSubjects.forEach(sub => {
        const opt = document.createElement('option'); opt.value = sub; opt.textContent = sub; select.appendChild(opt);
    });
    document.getElementById('add-homework-modal').classList.remove('hidden-screen');
}
window.closeAddHomeworkModal = function() { document.getElementById('add-homework-modal').classList.add('hidden-screen'); }

function handleAddHomeworkSubmit(e) {
    e.preventDefault();
    const visibility = document.querySelector('input[name="hw-visibility"]:checked').value;
    const newHw = {
        id: Date.now().toString(),
        subject: document.getElementById('hw-subject').value,
        description: document.getElementById('hw-description').value,
        deadline: `${document.getElementById('hw-date').value}T${document.getElementById('hw-time').value}`,
        addedBy: currentUser.nickname,
        completed: false,
        createdAt: new Date().toISOString(),
        isPublic: visibility === 'public',
        subgroup: visibility === 'public' ? null : currentUser.subgroup
    };
    homeworkState.list.push(newHw);
    saveHomework(); renderHomework();
    closeAddHomeworkModal(); document.getElementById('add-homework-form').reset();
}

// === 8. SETTINGS VIEW ===

window.setTheme = function(theme) { saveUser({ ...currentUser, theme: theme }); }
window.setBackground = function(bgId) { saveUser({ ...currentUser, backgroundId: bgId, customBackground: undefined }); }
window.setCustomBackground = function() {
    const url = document.getElementById('custom-bg-input').value;
    if (url) { saveUser({ ...currentUser, customBackground: `url(${url})`, backgroundId: undefined }); document.getElementById('custom-bg-input').value = ''; }
}

function renderSettings() {
    const lightBtn = document.getElementById('theme-light-btn');
    const darkBtn = document.getElementById('theme-dark-btn');
    const activeClass = 'border-violet-400 bg-violet-50 dark:bg-violet-900/20';
    const inactiveClass = 'border-gray-200 dark:border-gray-700';

    if (currentUser.theme === 'light') {
        lightBtn.className = `p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${activeClass}`;
        darkBtn.className = `p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${inactiveClass}`;
    } else {
        darkBtn.className = `p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${activeClass}`;
        lightBtn.className = `p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${inactiveClass}`;
    }

    const grid = document.getElementById('backgrounds-grid');
    grid.innerHTML = '';
    DEFAULT_BACKGROUNDS.forEach(bg => {
        const isActive = currentUser.backgroundId === bg.id;
        const btn = document.createElement('button');
        btn.onclick = () => window.setBackground(bg.id);
        btn.className = `relative h-24 rounded-xl border-2 transition-all overflow-hidden ${isActive ? 'border-violet-400 ring-2 ring-violet-200' : 'border-gray-200 dark:border-gray-700'}`;
        btn.style.background = bg[currentUser.theme];
        btn.innerHTML = `<div class="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/10 transition-all"><span class="text-xs text-gray-700 dark:text-gray-300 px-2 py-1 bg-white/80 dark:bg-gray-800/80 rounded-lg">${bg.name}</span></div>`;
        grid.appendChild(btn);
    });
    lucide.createIcons();
}