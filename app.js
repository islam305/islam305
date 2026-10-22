/* UGEC Graduation Projects 2027 Platform Logic & State Management */

const STORAGE_KEY = 'UGEC_GRAD_PROJECTS_2027_STATE_V8';

const defaultData = {
  activeRole: 'student',
  isMentorAuthenticated: false,
  authenticatedUniversityId: 'cu-01', // Default to Cairo Univ Group 1 for instant testing
  lang: 'ar',

  universities: [
    { id: 'cu-01', nameAr: 'جامعة القاهرة (مجموعة 1)', teamName: 'High Voltage Group 1', password: 'cu1', projectTitle: 'تصميم وأتمتة محطة مفاتيح GIS 500/220 ك.ف', advisor: 'أ.د. محمد طاهر', ugecMentor: 'م. شريف العشري', progress: 45, totalScore: 88, studentsCount: 6 },
    { id: 'cu-02', nameAr: 'جامعة القاهرة (مجموعة 2)', teamName: 'High Voltage Group 2', password: 'cu2', projectTitle: 'دراسة تنسيق العزل ومحطات القوى 220 ك.ف', advisor: 'أ.د. حسام الدين', ugecMentor: 'م. شريف العشري', progress: 30, totalScore: 82, studentsCount: 5 },
    { id: 'sohag-03', nameAr: 'جامعة سوهاج', teamName: 'فريق سوهاج للطاقة', password: 'soh3', projectTitle: 'تصميم محطة محولات 66/11 ك.ف', advisor: 'د. أحمد السعيد', ugecMentor: 'م. عمر عبد الفتاح', progress: 60, totalScore: 85, studentsCount: 6 },
    { id: 'qena-04', nameAr: 'جامعة قنا', teamName: 'فريق صعيد مصر', password: 'qna4', projectTitle: 'تحليل تيار القصر وتصميم شبكة التأريض', advisor: 'أ.د. عصام الدين', ugecMentor: 'م. مصطفى الجمال', progress: 20, totalScore: 78, studentsCount: 5 },
    { id: 'zag-05', nameAr: 'جامعة الزقازيق', teamName: 'فريق زقازيق القوى', password: 'zag5', projectTitle: 'دراسة استقرار المنظومة الكهربية', advisor: 'أ.د. محمد الشحات', ugecMentor: 'م. إبراهيم رضوان', progress: 75, totalScore: 92, studentsCount: 6 }
  ],

  timeline: [
    { phase: 'Phase 1', titleAr: 'انطلاق المبادرة وتشكيل الفرق (Kickoff)', startDate: '2026-10-01', deadline: '2026-10-25', status: 'completed', progress: 100 },
    { phase: 'Phase 2', titleAr: 'التاسك الأول: إعداد المخطط الأحادي SLD', startDate: '2026-10-26', deadline: '2026-11-18', status: 'completed', progress: 100 },
    { phase: 'Phase 3', titleAr: 'المراجعة والتدقيق الأولى (Review 01)', startDate: '2026-11-19', deadline: '2026-11-25', status: 'completed', progress: 100 },
    { phase: 'Phase 4', titleAr: 'التاسك الثاني: تصميم المساقط العامة GLO', startDate: '2026-11-26', deadline: '2026-12-10', status: 'in-progress', progress: 40 },
    { phase: 'Phase 5', titleAr: 'المراجعة الثانية وتنسيق العزل', startDate: '2026-12-11', deadline: '2026-12-20', status: 'pending', progress: 0 },
    { phase: 'Phase 6', titleAr: 'التاسك الثالث: حسابات تيار القصر والتأريض', startDate: '2026-12-21', deadline: '2027-01-15', status: 'pending', progress: 0 },
    { phase: 'Phase 7', titleAr: 'التصميم النهائي ومناقشة المشروع (Graduation GP)', startDate: '2027-01-16', deadline: '2027-02-15', status: 'pending', progress: 0 }
  ],

  sessions: [
    { id: 'sess-1', titleAr: 'السيشن الأولى: الأساسيات والمخطط SLD', date: '2026-11-05', presenter: 'م. شريف العشري', summaryAr: 'مقدمة في تصميم المحطات والرموز المعتمدة لـ EETC.', presentCount: 58, absentCount: 10, attendanceRate: '85%' },
    { id: 'sess-2', titleAr: 'السيشن الثانية: حسابات تيار القصر IEC 60909', date: '2026-11-20', presenter: 'م. عمر عبد الفتاح', summaryAr: 'طرق حساب تيار القصر واختيار القواطع الرئيسية.', presentCount: 62, absentCount: 6, attendanceRate: '91%' }
  ],

  inputs: [
    { id: 'inp-01', titleAr: 'رموز المخططات الأحادية EETC', category: 'CAD Drawings', size: '14.2 MB', descriptionAr: 'ملف CAD بالرموز المعتمدة للمحطات الفرعية.' },
    { id: 'inp-02', titleAr: 'دليل تصميم محطات 66/11 ك.ف', category: 'Standards & Specs', size: '8.5 MB', descriptionAr: 'المواصفات الفنية القياسية المعتمدة للإشراف الاستشاري.' }
  ],

  tasks: [
    { id: 'task-1', titleAr: 'التاسك الأول: إعداد المخطط الأحادي SLD', deadline: '2026-11-18T23:59', deliverableFormat: 'DWG + PDF', descriptionAr: 'المطلوب رسم المخطط الأحادي المكتمل لمحطة المفاتيح الرئيسية.' },
    { id: 'task-2', titleAr: 'التاسك الثاني: تصميم المساقط العامة GLO', deadline: '2026-12-10T23:59', deliverableFormat: 'DWG / AutoCAD', descriptionAr: 'توزيع المعدات الرئيسية ومسارات الكابلات داخل المحطة.' },
    { id: 'task-3', titleAr: 'التاسك الثالث: حسابات تيار القصر وتصميم التأريض', deadline: '2026-12-28T23:59', deliverableFormat: 'Excel/ETAP', descriptionAr: 'حساب مقاومة الشبكة حسب معيار IEEE 80.' }
  ],

  submissions: [
    { id: 'sub-1', taskId: 'task-1', universityId: 'cu-01', revision: 'Rev.01', fileName: 'SLD_Cairo_Group1_Rev01.dwg', notes: 'تم مراجعة الرموز وإضافة قواطع 220 ك.ف', submittedAt: '2026-11-15', status: 'approved', totalScore: 90, majorComments: 'تم اعتماد المخطط بنجاح مع ملاحظة بسيطة على المسافات.', minorComments: 'ضبط الخطوط.', studentResponse: 'تم التعديل.' },
    { id: 'sub-2', taskId: 'task-2', universityId: 'sohag-03', revision: 'Rev.00', fileName: 'GLO_Sohag_Rev00.dwg', notes: 'مسقط أولي للمحطة 66/11', submittedAt: '2026-12-02', status: 'revision', totalScore: 75, majorComments: 'مسافة خلوص المحول غير مطابقة لكود أرامكو/EETC.', minorComments: 'تكبير الحجم.', studentResponse: 'جاري التعديل...' }
  ],

  notifications: [
    { id: 'notif-1', title: 'موعد تسليم قريب', text: 'التاسك الثاني (تصميم المساقط العامة GLO) متبقي عليه 5 أيام.', date: 'اليوم', type: 'warning' },
    { id: 'notif-2', title: 'اعتماد تسليم', text: 'تم اعتماد التاسك الأول لفريق جامعة القاهرة بنجاح (90/100).', date: 'أمس', type: 'success' },
    { id: 'notif-3', title: 'سيشن فنية جديدة', text: 'تم جدولة السيشن الثالثة حول حسابات تنسيق العزل.', date: 'منذ يومين', type: 'info' }
  ]
};

let state = loadState();

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (!parsed.notifications) parsed.notifications = defaultData.notifications;
      if (!parsed.timeline) parsed.timeline = defaultData.timeline;
      return parsed;
    } catch (e) { console.error(e); }
  }
  return defaultData;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  const bgColor = type === 'success' ? 'bg-emerald-900/95 border-emerald-500 text-emerald-200' : 'bg-rose-900/95 border-rose-500 text-rose-200';
  toast.className = `flex items-center gap-3 px-4 py-3 rounded-xl border shadow-xl backdrop-blur-md ${bgColor} text-sm font-medium z-50 fade-in`;
  toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check text-emerald-400' : 'fa-circle-exclamation text-rose-400'}"></i> <span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3500);
}

function closeAllModals() {
  document.querySelectorAll('.modal-wrapper').forEach(m => m.classList.add('hidden'));
}

// Notification Center
function openNotificationCenter() {
  const listEl = document.getElementById('notificationListModal');
  if (listEl) {
    listEl.innerHTML = state.notifications.map(n => `
      <div class="p-3 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1">
        <div class="flex justify-between items-center text-xs">
          <span class="font-bold text-sky-400">${n.title}</span>
          <span class="text-[10px] text-slate-500">${n.date}</span>
        </div>
        <p class="text-xs text-slate-300">${n.text}</p>
      </div>
    `).join('');
  }
  document.getElementById('notificationModal').classList.remove('hidden');
}

// Auth Handlers
function verifyMentorPassword(event) {
  event.preventDefault();
  if (document.getElementById('mentorPasswordInput').value === 'ugec@2027') {
    state.isMentorAuthenticated = true;
    state.activeRole = 'mentor';
    saveState();
    closeAllModals();
    renderApp();
    showToast('مرحباً بك يا مشرف UGEC الاستشاري');
  } else {
    showToast('كلمة المرور غير صحيحة!', 'error');
  }
}

function openTeamLoginModal(uniId) {
  document.getElementById('loginUniIdInput').value = uniId;
  document.getElementById('teamPasswordInput').value = '';
  document.getElementById('teamLoginModal').classList.remove('hidden');
}

function verifyTeamPassword(event) {
  event.preventDefault();
  const uniId = document.getElementById('loginUniIdInput').value;
  const pass = document.getElementById('teamPasswordInput').value;
  const uni = state.universities.find(u => u.id === uniId);
  if (uni && pass === uni.password) {
    state.authenticatedUniversityId = uniId;
    state.activeRole = 'student';
    saveState();
    closeAllModals();
    renderApp();
    showToast(`تم دخول فريق ${uni.nameAr} بنجاح`);
  } else {
    showToast('كلمة مرور الفريق غير صحيحة', 'error');
  }
}

// Navigation
function switchView(viewName) {
  document.querySelectorAll('.view-pane').forEach(pane => pane.classList.add('hidden'));
  document.querySelectorAll('.nav-link').forEach(link => {
    const isActive = link.getAttribute('data-view') === viewName;
    link.classList.toggle('nav-tab-active', isActive);
    link.classList.toggle('text-sky-400', isActive);
  });
  const activePane = document.getElementById(`view-${viewName}`);
  if (activePane) activePane.classList.remove('hidden');

  if (viewName === 'dashboard') renderDashboard();
  if (viewName === 'timeline') renderTimeline();
  if (viewName === 'universities') renderUniversities();
  if (viewName === 'sessions') renderSessions();
  if (viewName === 'inputs') renderInputs();
  if (viewName === 'tasks') renderTasks();
  if (viewName === 'reviews') renderReviews();
  if (viewName === 'reports') renderReports();
}

function renderApp() {
  const isMentor = state.activeRole === 'mentor' && state.isMentorAuthenticated;
  document.querySelectorAll('.mentor-only-action').forEach(el => el.classList.toggle('hidden', !isMentor));

  const roleSelect = document.getElementById('roleSelect');
  if (roleSelect) roleSelect.value = state.activeRole;

  switchView(document.querySelector('.nav-link.nav-tab-active')?.getAttribute('data-view') || 'dashboard');
}

// 1. ACTION DASHBOARD
function renderDashboard() {
  const isMentor = state.activeRole === 'mentor' && state.isMentorAuthenticated;
  const nextActionEl = document.getElementById('dashNextActionContainer');
  const statsEl = document.getElementById('dashStats');
  const attentionEl = document.getElementById('dashAttentionList');
  const deadlinesEl = document.getElementById('dashUpcomingDeadlines');

  // Next Action Card (Role-aware)
  if (nextActionEl) {
    if (!isMentor) {
      const currentUni = state.universities.find(u => u.id === state.authenticatedUniversityId) || state.universities[0];
      const activeTask = state.tasks[1] || state.tasks[0];
      const sub = state.submissions.find(s => s.taskId === activeTask?.id && s.universityId === currentUni.id);

      nextActionEl.innerHTML = `
        <div class="hv-gradient-card rounded-3xl p-6 border border-sky-500/40 relative overflow-hidden space-y-4 hv-border-glow">
          <div class="absolute -left-10 -bottom-10 w-40 h-40 bg-sky-500/10 rounded-full blur-2xl pointer-events-none"></div>
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-4">
            <div>
              <span class="px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-[10px] font-bold border border-sky-500/30">YOUR NEXT ACTION — فريق ${currentUni.nameAr}</span>
              <h3 class="text-xl font-black text-slate-100 mt-2">${activeTask ? activeTask.titleAr : 'لا يوجد تكليف نشط'}</h3>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-xs text-amber-400 font-mono bg-amber-950/40 px-3 py-1.5 rounded-xl border border-amber-800/50">
                <i class="fa-solid fa-clock me-1"></i> الموعد: ${activeTask ? activeTask.deadline.replace('T', ' ') : ''}
              </span>
              ${activeTask ? `<button onclick="openSubmitModal('${activeTask.id}')" class="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-sky-600/30 transition flex items-center gap-2"><i class="fa-solid fa-upload"></i> ${sub ? 'تحديث التسليم' : 'رفع المخرجات'}</button>` : ''}
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div class="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
              <span class="text-slate-400 block mb-1">حالة التسليم الحالي:</span>
              <span class="font-bold ${sub ? 'text-emerald-400' : 'text-amber-400'}">${sub ? `تم الرفع (${sub.revision} - ${sub.status})` : 'لم يتم الرفع بعد'}</span>
            </div>
            <div class="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
              <span class="text-slate-400 block mb-1">نسبة إنجاز المشروع:</span>
              <div class="flex items-center gap-2">
                <div class="flex-1 bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div class="bg-gradient-to-r from-sky-500 to-amber-500 h-full rounded-full" style="width: ${currentUni.progress}%"></div>
                </div>
                <span class="font-bold text-sky-400">${currentUni.progress}%</span>
              </div>
            </div>
            <div class="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-center justify-between">
              <div>
                <span class="text-slate-400 block mb-1">المشرف المتابع:</span>
                <span class="font-bold text-slate-200">${currentUni.ugecMentor}</span>
              </div>
              <button onclick="switchView('universities')" class="text-sky-400 hover:underline text-[10px] font-bold">تبديل الفريق <i class="fa-solid fa-arrow-left"></i></button>
            </div>
          </div>
        </div>
      `;
    } else {
      // Mentor / Coordinator Action Dashboard
      const pendingCount = state.submissions.filter(s => s.status === 'revision' || s.status === 'submitted').length;
      nextActionEl.innerHTML = `
        <div class="hv-gradient-card rounded-3xl p-6 border border-amber-500/40 relative overflow-hidden space-y-4 hv-border-glow">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-4">
            <div>
              <span class="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-[10px] font-bold border border-amber-500/30">COORDINATOR COMMAND CENTER</span>
              <h3 class="text-xl font-black text-slate-100 mt-2">لوحة قيادة ومتابعة الاستشاري</h3>
            </div>
            <button onclick="switchView('reviews')" class="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-slate-950 font-black rounded-xl text-xs shadow-lg transition flex items-center gap-2">
              <i class="fa-solid fa-file-signature"></i> مراجعة التسليمات المعلقة (${pendingCount})
            </button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div class="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
              <span class="text-slate-400 block mb-1">الجامعات المشاركة النشطة:</span>
              <span class="font-bold text-sky-400 text-sm">${state.universities.length} جامعات</span>
            </div>
            <div class="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
              <span class="text-slate-400 block mb-1">التسليمات بانتظار الاعتماد:</span>
              <span class="font-bold text-amber-400 text-sm">${pendingCount} تسليم</span>
            </div>
            <div class="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
              <span class="text-slate-400 block mb-1">متوسط نسبة الإنجاز العام:</span>
              <span class="font-bold text-emerald-400 text-sm">48%</span>
            </div>
          </div>
        </div>
      `;
    }
  }

  // Stats Grid
  if (statsEl) {
    statsEl.innerHTML = `
      <div class="hv-gradient-card rounded-2xl p-5 border border-slate-800">
        <p class="text-xs text-slate-400 mb-1">الجامعات المشاركة</p>
        <h3 class="text-2xl font-bold text-sky-400">${state.universities.length}</h3>
      </div>
      <div class="hv-gradient-card rounded-2xl p-5 border border-slate-800">
        <p class="text-xs text-slate-400 mb-1">السيشنات الفنية</p>
        <h3 class="text-2xl font-bold text-amber-400">${state.sessions.length}</h3>
      </div>
      <div class="hv-gradient-card rounded-2xl p-5 border border-slate-800">
        <p class="text-xs text-slate-400 mb-1">التاسكات الهندسية</p>
        <h3 class="text-2xl font-bold text-emerald-400">${state.tasks.length}</h3>
      </div>
      <div class="hv-gradient-card rounded-2xl p-5 border border-slate-800">
        <p class="text-xs text-slate-400 mb-1">إجمالي التسليمات</p>
        <h3 class="text-2xl font-bold text-purple-400">${state.submissions.length}</h3>
      </div>
    `;
  }

  // Attention Required List
  if (attentionEl) {
    attentionEl.innerHTML = `
      <div class="p-3 bg-rose-950/30 rounded-xl border border-rose-900/50 flex items-center justify-between text-xs">
        <div>
          <span class="font-bold text-rose-300 block">تأخير في تسليم التاسك 2</span>
          <span class="text-[10px] text-slate-400">جامعة قنا لم ترفع النسخة الأولية بعد.</span>
        </div>
        <span class="px-2 py-1 bg-rose-900/40 text-rose-200 rounded text-[10px]">تنبيه عالي</span>
      </div>
      <div class="p-3 bg-amber-950/30 rounded-xl border border-amber-900/50 flex items-center justify-between text-xs">
        <div>
          <span class="font-bold text-amber-300 block">مراجعة معلقة</span>
          <span class="text-[10px] text-slate-400">فريق سوهاج ينتظر اعتماد الملاحظات.</span>
        </div>
        <span class="px-2 py-1 bg-amber-900/40 text-amber-200 rounded text-[10px]">مراجعة</span>
      </div>
    `;
  }

  // Upcoming Deadlines
  if (deadlinesEl) {
    deadlinesEl.innerHTML = state.tasks.map(t => `
      <div class="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800 flex justify-between items-center text-xs">
        <div class="space-y-0.5">
          <span class="font-bold text-slate-200">${t.titleAr}</span>
          <p class="text-[10px] text-slate-400">المطلوب: ${t.deliverableFormat}</p>
        </div>
        <span class="text-sky-400 font-mono font-bold bg-sky-950/50 px-2.5 py-1 rounded-lg border border-sky-800/40">${t.deadline.replace('T', ' ')}</span>
      </div>
    `).join('');
  }
}

// 2. TIMELINE RENDERER
function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container) return;

  container.innerHTML = state.timeline.map((item, idx) => {
    let badgeColor = 'bg-slate-800 text-slate-400 border-slate-700';
    let icon = 'fa-circle';
    if (item.status === 'completed') {
      badgeColor = 'bg-emerald-950 text-emerald-300 border-emerald-700';
      icon = 'fa-circle-check text-emerald-400';
    } else if (item.status === 'in-progress') {
      badgeColor = 'bg-sky-950 text-sky-300 border-sky-700';
      icon = 'fa-spinner fa-spin text-sky-400';
    }

    return `
      <div class="hv-gradient-card rounded-2xl p-5 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center font-black text-sky-400 text-sm">
            0${idx + 1}
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] text-amber-400 font-mono font-bold">${item.phase}</span>
              <span class="px-2 py-0.5 rounded text-[10px] border ${badgeColor}">${item.status === 'completed' ? 'مكتمل' : item.status === 'in-progress' ? 'قيد التنفيذ' : 'قادم'}</span>
            </div>
            <h3 class="font-bold text-slate-100 text-sm md:text-base mt-1">${item.titleAr}</h3>
          </div>
        </div>
        <div class="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end text-xs">
          <div class="text-left font-mono text-slate-400">
            <div>البدء: ${item.startDate}</div>
            <div>الديدلاين: <strong class="text-sky-300">${item.deadline}</strong></div>
          </div>
          <div class="w-28 bg-slate-800 h-2.5 rounded-full overflow-hidden hidden sm:block">
            <div class="bg-sky-500 h-full rounded-full" style="width: ${item.progress}%"></div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 3. UNIVERSITIES & GROUPS
function renderUniversities() {
  const container = document.getElementById('universitiesGrid');
  if (!container) return;
  const isMentor = state.activeRole === 'mentor' && state.isMentorAuthenticated;
  const loggedUniId = state.authenticatedUniversityId;

  container.innerHTML = state.universities.map(uni => {
    const isLogged = uni.id === loggedUniId;
    return `
      <div class="hv-gradient-card rounded-2xl p-6 border ${isLogged ? 'border-sky-500 shadow-sky-500/10 shadow-xl' : 'border-slate-800'} space-y-4">
        <div class="flex justify-between items-start border-b border-slate-800 pb-3">
          <div>
            <h3 class="font-bold text-slate-100">${uni.nameAr}</h3>
            <p class="text-[10px] text-amber-400">${uni.teamName}</p>
          </div>
          <span class="text-xl font-black text-sky-400">${uni.progress}%</span>
        </div>
        <p class="text-xs text-slate-300 line-clamp-2 font-medium">${uni.projectTitle}</p>
        <div class="space-y-1 text-[11px] text-slate-400 bg-slate-950/50 p-2.5 rounded-xl border border-slate-800/80">
          <div>👨‍🏫 المشرف الأكاديمي: ${uni.advisor}</div>
          <div>👷 مرشد UGEC: <strong class="text-sky-300">${uni.ugecMentor}</strong></div>
          <div>👥 عدد طلاب الفريق: ${uni.studentsCount} طلاب</div>
        </div>
        <div class="flex gap-2 pt-2">
          <button onclick="openTeamLoginModal('${uni.id}')" class="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold transition">
            ${isLogged ? '🔓 فريقك الحالي' : '🔑 دخول الفريق'}
          </button>
          ${isMentor ? `<button onclick="openEditUniversityModal('${uni.id}')" class="px-3 py-2.5 bg-sky-600 hover:bg-sky-500 rounded-xl text-xs font-bold transition">تعديل</button>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

// 4. TASKS & VERSION CONTROL
function renderTasks() {
  const container = document.getElementById('tasksList');
  if (!container) return;
  const loggedUniId = state.authenticatedUniversityId;
  const isMentor = state.activeRole === 'mentor' && state.isMentorAuthenticated;
  const currentUni = state.universities.find(u => u.id === loggedUniId);

  if (!isMentor && !loggedUniId) {
    container.innerHTML = `<div class="p-8 bg-slate-900 rounded-3xl text-center border border-slate-800">
      <i class="fa-solid fa-lock text-4xl text-slate-700 mb-4 block"></i>
      <p class="text-slate-400 text-xs">يرجى تسجيل دخول فريق الجامعة من تبويب "الجامعات والفرق" لعرض التاسكات ورفع النسخ بسرية.</p>
    </div>`;
    return;
  }

  container.innerHTML = state.tasks.map(task => {
    const subs = state.submissions.filter(s => s.taskId === task.id && (isMentor || s.universityId === loggedUniId));
    const latestSub = subs[subs.length - 1];

    return `
      <div class="hv-gradient-card rounded-3xl p-6 border border-slate-800 space-y-4">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-3 gap-2">
          <div>
            <h3 class="font-bold text-slate-100 text-base">${task.titleAr}</h3>
            <p class="text-[11px] text-slate-400 mt-1">${task.descriptionAr}</p>
          </div>
          <span class="text-xs text-sky-300 font-mono bg-sky-950/60 px-3 py-1.5 rounded-xl border border-sky-800/50">
            <i class="fa-solid fa-clock me-1"></i> ديدلاين: ${task.deadline.replace('T', ' ')}
          </span>
        </div>

        <div class="flex flex-wrap gap-4 justify-between items-center text-xs bg-slate-950/60 p-3 rounded-2xl border border-slate-800">
          <div>
            <span class="text-slate-400">صيغة المخرجات المطلوبة:</span>
            <strong class="text-amber-400 me-2">${task.deliverableFormat}</strong>
          </div>
          <div class="flex gap-2">
            ${!isMentor ? `<button onclick="openSubmitModal('${task.id}')" class="px-4 py-2 bg-sky-600 hover:bg-sky-500 rounded-xl text-xs font-bold transition flex items-center gap-1.5"><i class="fa-solid fa-cloud-arrow-up"></i> رفع إصدار جديد (Rev.x)</button>` :
            `<button onclick="deleteTask('${task.id}')" class="px-3 py-2 bg-rose-900/50 hover:bg-rose-900 text-rose-200 rounded-xl text-xs font-bold transition">حذف التاسك</button>`}
          </div>
        </div>

        <!-- Version Control History for this task -->
        <div class="space-y-2">
          <h4 class="text-xs font-bold text-slate-400">سجل إصدارات التسليمات (Version Control):</h4>
          ${subs.length === 0 ? '<p class="text-[11px] text-slate-500">لا توجد تسليمات مرفوعة لهذا التاسك بعد.</p>' :
            subs.map(sub => {
              const uniObj = state.universities.find(u => u.id === sub.universityId);
              let statusBadge = 'bg-sky-950/60 text-sky-300 border-sky-800';
              if (sub.status === 'approved') statusBadge = 'bg-emerald-950/60 text-emerald-300 border-emerald-800';
              if (sub.status === 'revision') statusBadge = 'bg-rose-950/60 text-rose-300 border-rose-800';
              return `
                <div class="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-xs">
                  <div class="space-y-1">
                    <div class="flex items-center gap-2">
                      <span class="px-2 py-0.5 rounded font-bold text-[10px] bg-slate-800 text-amber-400 border border-slate-700">${sub.revision}</span>
                      ${isMentor ? `<span class="font-bold text-sky-400">[فريق: ${uniObj?.nameAr}]</span>` : ''}
                      <span class="text-slate-200 font-medium">${sub.fileName}</span>
                      <span class="px-2 py-0.5 rounded text-[10px] border ${statusBadge}">${sub.status === 'approved' ? 'معتمد' : sub.status === 'revision' ? 'طلب تعديلات' : 'قيد المراجعة'}</span>
                    </div>
                    <p class="text-[11px] text-slate-400">ملاحظات الفريق: ${sub.notes || 'لا توجد ملاحظات'}</p>
                    ${sub.majorComments ? `<p class="text-[11px] text-amber-300 bg-amber-950/30 p-1.5 rounded border border-amber-900/40">تعليق الاستشاري: ${sub.majorComments}</p>` : ''}
                  </div>
                  <div class="flex items-center gap-3">
                    <span class="text-[10px] text-slate-500 font-mono">${sub.submittedAt}</span>
                    ${isMentor ? `<button onclick="openGradingModal('${sub.id}')" class="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold rounded-lg text-[11px]">تقييم واعتماد</button>` : ''}
                  </div>
                </div>
              `;
            }).join('')
          }
        </div>
      </div>
    `;
  }).join('');
}

// 5. INPUTS & REFERENCES
function renderInputs() {
  const container = document.getElementById('inputsGrid');
  if (!container) return;
  const isMentor = state.activeRole === 'mentor' && state.isMentorAuthenticated;

  container.innerHTML = state.inputs.map(i => `
    <div class="hv-gradient-card rounded-2xl p-5 border border-slate-800 space-y-3">
      <span class="px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 text-[10px] font-bold border border-sky-500/20">${i.category}</span>
      <h4 class="font-bold text-slate-100 text-sm">${i.titleAr}</h4>
      <p class="text-xs text-slate-400 leading-relaxed">${i.descriptionAr}</p>
      <div class="flex justify-between items-center pt-3 border-t border-slate-800">
        <button onclick="showToast('جاري تحميل المرجع الهندسي...')" class="text-xs font-bold text-sky-400 hover:underline flex items-center gap-1.5">
          <i class="fa-solid fa-download"></i> تحميل (${i.size})
        </button>
        ${isMentor ? `<button onclick="deleteInput('${i.id}')" class="px-2.5 py-1 bg-rose-900/50 hover:bg-rose-900 text-rose-200 rounded text-[10px] font-bold">حذف</button>` : ''}
      </div>
    </div>
  `).join('');
}

// 6. SESSIONS & ATTENDANCE
function renderSessions() {
  const container = document.getElementById('sessionsList');
  if (!container) return;
  const isMentor = state.activeRole === 'mentor' && state.isMentorAuthenticated;

  container.innerHTML = state.sessions.map(s => `
    <div class="hv-gradient-card rounded-2xl p-6 border border-slate-800 space-y-4">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 border-b border-slate-800 pb-3">
        <div>
          <h3 class="font-bold text-slate-100 text-base">${s.titleAr}</h3>
          <p class="text-xs text-slate-400 mt-1">تاريخ الانعقاد: <span class="text-sky-300 font-mono">${s.date}</span> | المحاضر الاستشاري: <strong class="text-amber-400">${s.presenter}</strong></p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="showToast('جاري تشغيل تسجيل السيشن الفنية...')" class="px-3.5 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-2">
            <i class="fa-solid fa-play"></i> مشاهدة التسجيل
          </button>
          ${isMentor ? `<button onclick="deleteSession('${s.id}')" class="px-3 py-2 bg-rose-900/50 hover:bg-rose-900 text-rose-200 rounded-xl text-xs font-bold">حذف</button>` : ''}
        </div>
      </div>
      <p class="text-xs text-slate-300">${s.summaryAr}</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs bg-slate-950/60 p-3 rounded-xl border border-slate-800">
        <div>حضور الطلاب: <strong class="text-emerald-400">${s.present.presentCount || 58} طالب</strong></div>
        <div>الغياب المعتذر: <strong class="text-rose-400">${s.absentCount || 10} طلاب</strong></div>
        <div>نسبة الحضور الكلية: <strong class="text-sky-400">${s.attendanceRate || '85%'}</strong></div>
      </div>
    </div>
  `).join('');
}

// 7. REVIEWS & AUDIT TRAIL
function renderReviews() {
  const container = document.getElementById('reviewsList');
  if (!container) return;
  if (state.submissions.length === 0) {
    container.innerHTML = '<p class="text-slate-500 text-center py-8">لا توجد تسليمات معلقة للمراجعة حالياً</p>';
    return;
  }
  container.innerHTML = state.submissions.map(sub => {
    const task = state.tasks.find(t => t.id === sub.taskId);
    const uni = state.universities.find(u => u.id === sub.universityId);
    return `
      <div class="hv-gradient-card rounded-2xl p-5 border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div class="space-y-1">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded font-bold text-[10px] bg-slate-800 text-amber-400 border border-slate-700">${sub.revision}</span>
            <h4 class="font-bold text-slate-100 text-sm">${uni?.nameAr} — ${task?.titleAr}</h4>
          </div>
          <p class="text-xs text-slate-400">الملف: <span class="text-sky-300 font-mono">${sub.fileName}</span> | ملاحظات الفريق: ${sub.notes || 'لا توجد'}</p>
          ${sub.majorComments ? `<p class="text-[11px] text-amber-300">التعليقات السابقة: ${sub.majorComments}</p>` : ''}
        </div>
        <button onclick="openGradingModal('${sub.id}')" class="px-4 py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold shadow-lg transition">تقييم واعتماد (Audit Trail)</button>
      </div>
    `;
  }).join('');
}

// 8. REPORTS
function renderReports() {
  const container = document.getElementById('reportsContainer');
  if (!container) return;
  const isMentor = state.activeRole === 'mentor' && state.isMentorAuthenticated;
  const loggedUniId = state.authenticatedUniversityId;
  const data = isMentor ? state.universities : state.universities.filter(u => u.id === loggedUniId);

  if (!isMentor && !loggedUniId) {
    container.innerHTML = `<div class="p-8 bg-slate-900 rounded-3xl text-center border border-slate-800">
      <p class="text-slate-400 text-xs">يرجى تسجيل دخول فريق الجامعة لعرض تقريركم الخاص.</p>
    </div>`;
    return;
  }

  container.innerHTML = `
    <div class="hv-gradient-card rounded-3xl p-8 border border-slate-800 space-y-6">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-4">
        <div>
          <h2 class="text-xl font-bold text-slate-100">التقرير الشامل ونتائج تقييم مشاريع التخرج UGEC 2027</h2>
          <p class="text-xs text-slate-400 mt-1">معتمد من استشاريي الشركة المصرية لنقل الكهرباء ومجموعة UGEC</p>
        </div>
        <button onclick="window.print()" class="px-4 py-2.5 bg-sky-600 hover:bg-sky-500 rounded-xl text-xs font-bold text-white shadow-lg flex items-center gap-2">
          <i class="fa-solid fa-print"></i> طباعة التقرير الرسمي (PDF)
        </button>
      </div>
      <table class="w-full text-right text-xs">
        <thead>
          <tr class="text-slate-400 border-b border-slate-800">
            <th class="pb-3 font-bold">الجامعة والفريق الهندسي</th>
            <th class="pb-3 font-bold">عنوان المشروع</th>
            <th class="pb-3 font-bold">نسبة الإنجاز</th>
            <th class="pb-3 font-bold">التقييم الكلي (100)</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-800/60">
          ${data.map(u => `
            <tr>
              <td class="py-3 font-bold text-slate-200">${u.nameAr} <br><span class="text-[10px] text-amber-400 font-normal">${u.teamName}</span></td>
              <td class="py-3 text-slate-300">${u.projectTitle}</td>
              <td class="py-3 text-sky-400 font-bold">${u.progress}%</td>
              <td class="py-3 font-black text-amber-400 text-sm">${u.totalScore}/100</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// Delete functions
function deleteTask(id) {
  if (confirm('هل أنت متأكد من حذف هذا التاسك الهندسي؟')) {
    state.tasks = state.tasks.filter(t => t.id !== id);
    saveState(); renderTasks(); showToast('تم حذف التاسك');
  }
}
function deleteSession(id) {
  if (confirm('هل أنت متأكد من حذف هذه السيشن؟')) {
    state.sessions = state.sessions.filter(s => s.id !== id);
    saveState(); renderSessions(); showToast('تم حذف السيشن');
  }
}
function deleteInput(id) {
  if (confirm('هل أنت متأكد من حذف هذا المرجع؟')) {
    state.inputs = state.inputs.filter(i => i.id !== id);
    saveState(); renderInputs(); showToast('تم حذف المرجع');
  }
}

// Modals
function openEditUniversityModal(uniId) {
  const uni = state.universities.find(u => u.id === uniId);
  if (uni) {
    document.getElementById('editUniId').value = uni.id;
    document.getElementById('editUniTitle').value = uni.projectTitle;
    document.getElementById('editUniScore').value = uni.totalScore;
    document.getElementById('editUniProgress').value = uni.progress;
    document.getElementById('editUniPass').value = uni.password;
    document.getElementById('editUniversityModal').classList.remove('hidden');
  }
}

function saveUniversityEdit(event) {
  event.preventDefault();
  const id = document.getElementById('editUniId').value;
  const uni = state.universities.find(u => u.id === id);
  if (uni) {
    uni.projectTitle = document.getElementById('editUniTitle').value;
    uni.totalScore = parseInt(document.getElementById('editUniScore').value) || 0;
    uni.progress = parseInt(document.getElementById('editUniProgress').value) || 0;
    uni.password = document.getElementById('editUniPass').value;
    saveState(); closeAllModals(); renderUniversities(); showToast('تم تعديل بيانات الفريق بنجاح');
  }
}

function openAddTaskModal() { document.getElementById('addTaskModal').classList.remove('hidden'); }
function saveNewTask(event) {
  event.preventDefault();
  state.tasks.push({
    id: `task-${Date.now()}`,
    titleAr: document.getElementById('taskTitleAr').value,
    deadline: document.getElementById('taskDeadline').value,
    deliverableFormat: document.getElementById('taskFormat').value,
    descriptionAr: document.getElementById('taskDesc').value
  });
  saveState(); closeAllModals(); renderTasks(); showToast('تمت إضافة التاسك بنجاح');
}

function openAddSessionModal() { document.getElementById('addSessionModal').classList.remove('hidden'); }
function saveNewSession(event) {
  event.preventDefault();
  state.sessions.push({
    id: `sess-${Date.now()}`,
    titleAr: document.getElementById('sessTitleAr').value,
    presenter: document.getElementById('sessPresenter').value,
    date: document.getElementById('sessDate').value,
    summaryAr: 'ورشة عمل فنية تطبيقية.',
    presentCount: 60,
    absentCount: 5,
    attendanceRate: '92%'
  });
  saveState(); closeAllModals(); renderSessions(); showToast('تمت إضافة السيشن بنجاح');
}

function openAddInputModal() { document.getElementById('addInputModal').classList.remove('hidden'); }
function saveNewInput(event) {
  event.preventDefault();
  state.inputs.push({
    id: `inp-${Date.now()}`,
    titleAr: document.getElementById('inpTitleAr').value,
    category: document.getElementById('inpCategory').value,
    size: '6.4 MB',
    descriptionAr: document.getElementById('inpDesc').value
  });
  saveState(); closeAllModals(); renderInputs(); showToast('تم رفع المرجع الفني بنجاح');
}

// Student Submit (Version Control)
function openSubmitModal(taskId) {
  document.getElementById('submitTaskIdInput').value = taskId;
  document.getElementById('studentFileName').value = '';
  document.getElementById('studentNotes').value = '';
  document.getElementById('submitModal').classList.remove('hidden');
}

function saveSubmission(event) {
  event.preventDefault();
  const taskId = document.getElementById('submitTaskIdInput').value;
  const revision = document.getElementById('studentRevision').value;
  const fileName = document.getElementById('studentFileName').value;
  const notes = document.getElementById('studentNotes').value;
  const uniId = state.authenticatedUniversityId;

  state.submissions.push({
    id: `sub-${Date.now()}`,
    taskId,
    universityId: uniId,
    revision,
    fileName,
    notes,
    submittedAt: new Date().toISOString().split('T')[0],
    status: 'submitted'
  });

  saveState(); closeAllModals(); renderTasks(); showToast(`تم رفع الإصدار ${revision} بنجاح وبسرية تامة`);
}

// Grading & Audit Trail
function openGradingModal(subId) {
  document.getElementById('gradingSubIdInput').value = subId;
  const sub = state.submissions.find(s => s.id === subId);
  if (sub) {
    document.getElementById('gradingScore').value = sub.totalScore || 85;
    document.getElementById('gradingStatusSelect').value = sub.status || 'approved';
    document.getElementById('gradingMajorComments').value = sub.majorComments || '';
    document.getElementById('gradingFeedback').value = sub.minorComments || '';
  }
  document.getElementById('gradingModal').classList.remove('hidden');
}

function saveGrading() {
  const subId = document.getElementById('gradingSubIdInput').value;
  const sub = state.submissions.find(s => s.id === subId);
  if (sub) {
    sub.totalScore = parseInt(document.getElementById('gradingScore').value) || 90;
    sub.status = document.getElementById('gradingStatusSelect').value;
    sub.majorComments = document.getElementById('gradingMajorComments').value;
    sub.minorComments = document.getElementById('gradingFeedback').value;

    const uni = state.universities.find(u => u.id === sub.universityId);
    if (uni) {
      uni.totalScore = sub.totalScore;
      if (sub.status === 'approved') {
        uni.progress = Math.min(100, uni.progress + 25);
      }
    }

    saveState();
    closeAllModals();
    renderTasks();
    renderReviews();
    showToast('تم اعتماد التقييم وتحديث سجل التدقيق (Audit Trail)');
  }
}

// Event Listeners Setup
document.getElementById('roleSelect').addEventListener('change', (e) => {
  if (e.target.value === 'mentor' && !state.isMentorAuthenticated) {
    document.getElementById('passwordModal').classList.remove('hidden');
    e.target.value = state.activeRole;
  } else {
    state.activeRole = e.target.value;
    renderApp();
  }
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => switchView(link.getAttribute('data-view')));
});

document.addEventListener('DOMContentLoaded', initApp);
function initApp() {
  renderApp();
  setInterval(showQuranPopup, 60000); // Every 60 seconds
}

const quranVerses = [
  "وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ وَرَسُولُهُ وَالْمُؤْمِنُونَ",
  "وَقُل رَّبِّ زِدْنِي عِلْمًا",
  "إِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ مَنْ أَحْسَنَ عَمَلًا",
  "وَفَوْقَ كُلِّ ذِي عِلْمٍ عَلِيمٌ",
  "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ"
];

function showQuranPopup() {
  const popup = document.getElementById('quranPopup');
  const verseText = document.getElementById('quranVerseText');
  if (!popup || !verseText) return;

  const randomVerse = quranVerses[Math.floor(Math.random() * quranVerses.length)];
  verseText.innerText = randomVerse;

  popup.classList.remove('translate-y-32', 'opacity-0');
  popup.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => closeQuranPopup(), 10000);
}

function closeQuranPopup() {
  const popup = document.getElementById('quranPopup');
  if (!popup) return;
  popup.classList.add('translate-y-32', 'opacity-0');
  popup.classList.remove('translate-y-0', 'opacity-100');
}
