// GPA Calculator (3-Year OIT) - Vanilla JavaScript Implementation

const STORAGE_KEY = 'oit_gpa_modules_vanilla_v1';
const DECIMALS_KEY = 'oit_gpa_decimals_v2';

export const CATEGORY_INFO_MAP = {
  'Sector Foundation Modules': {
    name: 'Sector Foundation Modules',
    requiredCredits: 24,
    colorBg: 'bg-sky-50',
    colorBorder: 'border-sky-300',
    colorText: 'text-sky-800',
    badgeBg: 'bg-sky-100 text-sky-800 border-sky-300',
  },
  'Cluster Core Modules': {
    name: 'Cluster Core Modules',
    requiredCredits: 25,
    colorBg: 'bg-rose-50',
    colorBorder: 'border-rose-300',
    colorText: 'text-rose-800',
    badgeBg: 'bg-rose-100 text-rose-800 border-rose-300',
  },
  'Specialisation Modules': {
    name: 'Specialisation Modules',
    requiredCredits: 20,
    colorBg: 'bg-orange-50',
    colorBorder: 'border-orange-300',
    colorText: 'text-orange-800',
    badgeBg: 'bg-orange-100 text-orange-800 border-orange-300',
  },
  'Sports & Wellness Modules': {
    name: 'Sports & Wellness Modules',
    requiredCredits: 4,
    colorBg: 'bg-amber-50',
    colorBorder: 'border-amber-300',
    colorText: 'text-amber-800',
    badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
  },
  'Lifeskills Modules': {
    name: 'Lifeskills Modules',
    requiredCredits: 6,
    colorBg: 'bg-emerald-50',
    colorBorder: 'border-emerald-300',
    colorText: 'text-emerald-800',
    badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
  },
  'Electives': {
    name: 'Electives',
    requiredCredits: 8,
    colorBg: 'bg-purple-50',
    colorBorder: 'border-purple-300',
    colorText: 'text-purple-800',
    badgeBg: 'bg-purple-100 text-purple-800 border-purple-300',
  },
  'Cross Disciplinary Core Modules': {
    name: 'Cross Disciplinary Core Modules',
    requiredCredits: 9,
    colorBg: 'bg-slate-100',
    colorBorder: 'border-slate-300',
    colorText: 'text-slate-800',
    badgeBg: 'bg-slate-200 text-slate-800 border-slate-300',
  },
};

export const DEFAULT_OIT_MODULES = [
  // Year 1 (32 CU)
  { id: 'y1-1', code: 'SN33001FP', title: 'Networking Fundamentals', creditUnits: 3, grade: 'A', category: 'Sector Foundation Modules', year: 1 },
  { id: 'y1-2', code: 'DE33001FP', title: 'Fundamentals of Data', creditUnits: 3, grade: 'A', category: 'Sector Foundation Modules', year: 1 },
  { id: 'y1-3', code: 'SN33002FP', title: 'Operating System Essentials', creditUnits: 3, grade: 'A', category: 'Sector Foundation Modules', year: 1 },
  { id: 'y1-4', code: 'IT33001FP', title: 'Digital Media Technologies', creditUnits: 3, grade: 'A', category: 'Sector Foundation Modules', year: 1 },
  { id: 'y1-5', code: 'IT49431', title: 'Data Visualisation for Business', creditUnits: 2, grade: 'A', category: 'Electives', year: 1 },
  { id: 'y1-6', code: 'LFS80304', title: 'Lifeskill 1', creditUnits: 2, grade: 'A', category: 'Lifeskills Modules', year: 1 },
  { id: 'y1-7', code: 'SW81001', title: 'Sports & Wellness 1', creditUnits: 1, grade: 'P', category: 'Sports & Wellness Modules', year: 1 },
  { id: 'y1-8', code: 'AI33001FP', title: 'Coding for AI', creditUnits: 3, grade: 'A', category: 'Sector Foundation Modules', year: 1 },
  { id: 'y1-9', code: 'IT33002FP', title: 'Introduction to UI/UX', creditUnits: 3, grade: 'A', category: 'Sector Foundation Modules', year: 1 },
  { id: 'y1-10', code: 'SN48010', title: 'Service Excellence in Technical Support', creditUnits: 3, grade: 'A', category: 'Cross Disciplinary Core Modules', year: 1 },
  { id: 'y1-11', code: 'IT33003FP', title: 'Web Development Essentials', creditUnits: 3, grade: 'A', category: 'Sector Foundation Modules', year: 1 },
  { id: 'y1-12', code: 'SN33003FP', title: 'Cybersecurity Fundamentals', creditUnits: 3, grade: 'A', category: 'Sector Foundation Modules', year: 1 },
  { id: 'y1-13', code: 'IT49381', title: 'Linux Essentials', creditUnits: 2, grade: 'A', category: 'Electives', year: 1 },
  { id: 'y1-14', code: 'SW81002', title: 'Sports & Wellness 2', creditUnits: 1, grade: 'P', category: 'Sports & Wellness Modules', year: 1 },

  // Year 2 (37 CU)
  { id: 'y2-1', code: 'BI48010', title: 'Understanding Entrepreneurship', creditUnits: 3, grade: 'A', category: 'Cross Disciplinary Core Modules', year: 2 },
  { id: 'y2-2', code: 'SN43002FP', title: 'Networking Technology', creditUnits: 3, grade: 'A', category: 'Cluster Core Modules', year: 2 },
  { id: 'y2-3', code: 'IT49471', title: 'Robotic Process Automation', creditUnits: 2, grade: 'A', category: 'Electives', year: 2 },
  { id: 'y2-4', code: 'SN43004FP', title: 'System Administration', creditUnits: 3, grade: 'A', category: 'Cluster Core Modules', year: 2 },
  { id: 'y2-5', code: 'SN43005FP', title: 'System Hardening & Infrastructure Services', creditUnits: 3, grade: 'A', category: 'Cluster Core Modules', year: 2 },
  { id: 'y2-6', code: 'OT43001FP', title: 'Operational Technology Fundamentals', creditUnits: 3, grade: 'A', category: 'Cluster Core Modules', year: 2 },
  { id: 'y2-7', code: 'LFS80305', title: 'Lifeskills 2', creditUnits: 2, grade: 'A', category: 'Lifeskills Modules', year: 2 },
  { id: 'y2-8', code: 'SW81003', title: 'Sports & Wellness 3', creditUnits: 1, grade: 'P', category: 'Sports & Wellness Modules', year: 2 },
  { id: 'y2-9', code: 'OT43002FP', title: 'Industrial Networking', creditUnits: 3, grade: 'A', category: 'Cluster Core Modules', year: 2 },
  { id: 'y2-10', code: 'OT43003FP', title: 'Industrial Control Systems', creditUnits: 3, grade: 'A', category: 'Cluster Core Modules', year: 2 },
  { id: 'y2-11', code: 'OT43004FP', title: 'Virtualisation & Cloud Technologies', creditUnits: 3, grade: 'A', category: 'Cluster Core Modules', year: 2 },
  { id: 'y2-12', code: 'OT53001FP', title: 'Cybersecurity Infrastructure', creditUnits: 3, grade: 'A', category: 'Specialisation Modules', year: 2 },
  { id: 'y2-13', code: 'OT53002FP', title: 'OT & IT Security Management', creditUnits: 3, grade: 'A', category: 'Specialisation Modules', year: 2 },
  { id: 'y2-14', code: 'IT48010', title: 'Design Thinking for Technology', creditUnits: 3, grade: 'A', category: 'Cross Disciplinary Core Modules', year: 2 },

  // Year 3 (27 CU)
  { id: 'y3-1', code: 'OT53003FP', title: 'OT & IT Security Incident Management', creditUnits: 3, grade: 'A', category: 'Specialisation Modules', year: 3 },
  { id: 'y3-2', code: 'OT53004FP', title: 'OT & IT Integration Management', creditUnits: 3, grade: 'A', category: 'Specialisation Modules', year: 3 },
  { id: 'y3-3', code: 'BI49020', title: 'Essentials of Network Automation', creditUnits: 2, grade: 'A', category: 'Electives', year: 3 },
  { id: 'y3-4', code: 'LFS80305', title: 'Lifeskills 3', creditUnits: 2, grade: 'A', category: 'Lifeskills Modules', year: 3 },
  { id: 'y3-5', code: 'SW81004', title: 'Sports & Wellness 4', creditUnits: 1, grade: 'P', category: 'Sports & Wellness Modules', year: 3 },
  { id: 'y3-6', code: 'OT43005FPE', title: 'Industry Attachment 1', creditUnits: 4, grade: 'A', category: 'Cluster Core Modules', year: 3 },
  { id: 'y3-7', code: 'OT53005FPE', title: 'Industry Attachment 2', creditUnits: 8, grade: 'A', category: 'Specialisation Modules', year: 3 },
];

export function isSportsAndWellness(category, code) {
  return category === 'Sports & Wellness Modules' || (code && code.startsWith('SW'));
}

export function getModuleGradePoint(grade, category, code) {
  if (isSportsAndWellness(category, code)) {
    return null; // P / F excluded from grade points
  }
  switch (grade) {
    case 'A': return 4;
    case 'B': return 3;
    case 'C': return 2;
    case 'D': return 1;
    case 'E': return 0;
    case 'F': return 0;
    default: return null;
  }
}

export function isPassingGrade(grade) {
  return ['A', 'B', 'C', 'D', 'P'].includes(grade);
}

export function calculateGPA(modules) {
  let totalGradePoints = 0;
  let gradedCreditsAttempted = 0;
  let totalCreditsAttained = 0;
  let totalCreditsAttempted = 0;

  const yearResults = {
    1: { gradePoints: 0, gradedCredits: 0, creditsAttained: 0, gpa: null },
    2: { gradePoints: 0, gradedCredits: 0, creditsAttained: 0, gpa: null },
    3: { gradePoints: 0, gradedCredits: 0, creditsAttained: 0, gpa: null },
  };

  const categoryBreakdown = {};
  Object.keys(CATEGORY_INFO_MAP).forEach((cat) => {
    categoryBreakdown[cat] = {
      requiredCredits: CATEGORY_INFO_MAP[cat].requiredCredits,
      attainedCredits: 0,
      totalModules: 0,
    };
  });

  modules.forEach((mod) => {
    const scale = getModuleGradePoint(mod.grade, mod.category, mod.code);
    const cu = Number(mod.creditUnits) || 0;

    if (!categoryBreakdown[mod.category]) {
      categoryBreakdown[mod.category] = {
        requiredCredits: 0,
        attainedCredits: 0,
        totalModules: 0,
      };
    }
    categoryBreakdown[mod.category].totalModules += 1;

    if (mod.grade !== '') {
      totalCreditsAttempted += cu;
      if (isPassingGrade(mod.grade)) {
        totalCreditsAttained += cu;
        categoryBreakdown[mod.category].attainedCredits += cu;
        if (yearResults[mod.year]) {
          yearResults[mod.year].creditsAttained += cu;
        }
      }
    }

    if (scale !== null) {
      const points = cu * scale;
      totalGradePoints += points;
      gradedCreditsAttempted += cu;
      if (yearResults[mod.year]) {
        yearResults[mod.year].gradePoints += points;
        yearResults[mod.year].gradedCredits += cu;
      }
    }
  });

  const cumulativeGpa = gradedCreditsAttempted > 0 ? totalGradePoints / gradedCreditsAttempted : null;

  [1, 2, 3].forEach((yr) => {
    const y = yearResults[yr];
    if (y && y.gradedCredits > 0) {
      y.gpa = y.gradePoints / y.gradedCredits;
    }
  });

  return {
    totalGradePoints,
    gradedCreditsAttempted,
    totalCreditsAttained,
    totalCreditsAttempted,
    gpa: cumulativeGpa,
    yearResults,
    categoryBreakdown,
  };
}

export function formatGpa(gpa, decimals = 3) {
  if (gpa === null || isNaN(gpa)) return '—';
  return gpa.toFixed(decimals);
}

// Application State
class AppState {
  constructor() {
    this.modules = this.loadModules();
    this.decimalPlaces = parseInt(localStorage.getItem(DECIMALS_KEY) || '3', 10);
    this.selectedYear = 'all';
    this.selectedCategory = null;
    this.searchQuery = '';
    this.gradeFilter = 'all';
  }

  loadModules() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((m) => {
            const updated = { ...m };
            if (updated.id === 'y3-3' || updated.code === 'Elective' || updated.title === 'Elective') {
              updated.code = 'BI49020';
              updated.title = 'Essentials of Network Automation';
              updated.creditUnits = 2;
            }
            if (updated.code === 'IT49471' || updated.id === 'y2-3') {
              updated.creditUnits = 2;
            }
            if (updated.code === 'SN43002FP' || updated.id === 'y2-2' || updated.title === 'Networking Technology') {
              updated.category = 'Cluster Core Modules';
            }
            if (['OT43002FP', 'OT43003FP', 'OT43004FP'].includes(updated.code)) {
              updated.category = 'Cluster Core Modules';
            }
            if (updated.code === 'OT53005FPE' || updated.id === 'y3-7') {
              updated.category = 'Specialisation Modules';
            }
            if (isSportsAndWellness(updated.category, updated.code)) {
              updated.grade = updated.grade === 'F' ? 'F' : 'P';
            }
            return updated;
          });
        }
      }
    } catch {
      // ignore
    }
    return JSON.parse(JSON.stringify(DEFAULT_OIT_MODULES));
  }

  saveModules() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.modules));
    } catch {
      // ignore
    }
  }

  saveDecimals() {
    try {
      localStorage.setItem(DECIMALS_KEY, this.decimalPlaces.toString());
    } catch {
      // ignore
    }
  }

  updateGrade(id, grade) {
    const mod = this.modules.find((m) => m.id === id);
    if (mod) {
      mod.grade = grade;
      this.saveModules();
      renderApp();
    }
  }

  addModule(newModule) {
    this.modules.push(newModule);
    this.saveModules();
    renderApp();
  }

  deleteModule(id) {
    this.modules = this.modules.filter((m) => m.id !== id);
    this.saveModules();
    renderApp();
  }

  resetDefault() {
    this.modules = JSON.parse(JSON.stringify(DEFAULT_OIT_MODULES));
    this.selectedCategory = null;
    this.searchQuery = '';
    this.gradeFilter = 'all';
    this.saveModules();
    renderApp();
  }

  fillAllA() {
    this.modules.forEach((m) => {
      if (isSportsAndWellness(m.category, m.code)) {
        m.grade = 'P';
      } else {
        m.grade = 'A';
      }
    });
    this.saveModules();
    renderApp();
  }

  clearGrades() {
    this.modules.forEach((m) => {
      m.grade = '';
    });
    this.saveModules();
    renderApp();
  }

  toggleDecimals() {
    this.decimalPlaces = this.decimalPlaces === 3 ? 2 : 3;
    this.saveDecimals();
    renderApp();
  }
}

const state = new AppState();

// Helper: GPA Tier
function getGpaTier(val) {
  if (val === null) return { text: 'No Graded Modules', color: 'text-slate-500 bg-slate-100' };
  if (val >= 3.5) return { text: 'Distinction', color: 'text-emerald-700 bg-emerald-100 border border-emerald-300' };
  if (val >= 3.0) return { text: 'Credit / Merit', color: 'text-blue-700 bg-blue-100 border border-blue-300' };
  if (val >= 2.0) return { text: 'Pass Standing', color: 'text-amber-700 bg-amber-100 border border-amber-300' };
  return { text: 'Academic Warning', color: 'text-rose-700 bg-rose-100 border border-rose-300' };
}

// Render Header
function renderHeader() {
  const container = document.getElementById('app-header');
  if (!container) return;

  container.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <!-- Brand & Title -->
        <div class="flex items-center space-x-3.5">
          <div class="h-11 w-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/20">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
              <rect width="16" height="20" x="4" y="2" rx="2"></rect>
              <line x1="8" x2="16" y1="6" y2="6"></line>
              <line x1="16" x2="16" y1="14" y2="14"></line>
              <line x1="16" x2="16" y1="18" y2="18"></line>
              <path d="M8 10h.01"></path>
              <path d="M12 10h.01"></path>
              <path d="M16 10h.01"></path>
              <path d="M8 14h.01"></path>
              <path d="M12 14h.01"></path>
              <path d="M8 18h.01"></path>
              <path d="M12 18h.01"></path>
            </svg>
          </div>
          <div>
            <div class="flex items-center gap-2.5">
              <h1 class="text-xl sm:text-2xl font-bold tracking-tight text-white">
                GPA Calculator (3-Year OIT)
              </h1>
              <span class="px-2 py-0.5 text-xs font-semibold uppercase tracking-wider rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                Unofficial
              </span>
            </div>
          </div>
        </div>

        <!-- Header Actions -->
        <div class="flex flex-wrap items-center gap-2">
          <button
            id="target-simulator-button"
            type="button"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition cursor-pointer"
            title="Plan target GPA for remaining modules"
          >
            <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
            <span>GPA Planner</span>
          </button>

          <div class="h-6 w-px bg-slate-800 hidden sm:block"></div>

          <!-- Quick presets -->
          <div class="flex items-center gap-1.5">
            <button
              id="reset-default-button"
              type="button"
              class="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition cursor-pointer"
              title="Reset to official 3-Year curriculum & grades"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
              <span>Reset</span>
            </button>

            <button
              id="clear-all-grades-button"
              type="button"
              class="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-rose-300 hover:bg-slate-800 transition cursor-pointer"
              title="Clear all grades to unassigned"
            >
              <span>Clear</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('view-formula-button')?.addEventListener('click', openFormulaModal);
  document.getElementById('target-simulator-button')?.addEventListener('click', openTargetModal);
  document.getElementById('add-module-button')?.addEventListener('click', openAddModuleModal);
  document.getElementById('reset-default-button')?.addEventListener('click', () => state.resetDefault());
  document.getElementById('fill-all-a-button')?.addEventListener('click', () => state.fillAllA());
  document.getElementById('clear-all-grades-button')?.addEventListener('click', () => state.clearGrades());
}

// Render Summary Card
function renderSummaryCard(calcResult) {
  const container = document.getElementById('gpa-summary-container');
  if (!container) return;

  const totalRequiredCredits = 96;
  const attainedCredits = calcResult.totalCreditsAttained;
  const progressPercent = Math.min(100, Math.round((attainedCredits / totalRequiredCredits) * 100));
  const tier = getGpaTier(calcResult.gpa);

  container.innerHTML = `
    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-6 mb-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <!-- Main GPA Highlight -->
        <div class="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200 pb-5 lg:pb-0 lg:pr-6">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500">
              Cumulative GPA Attained
            </span>
            <button
              id="toggle-decimals-btn"
              type="button"
              class="text-xs font-medium text-slate-600 hover:text-slate-900 px-2 py-0.5 rounded bg-slate-100 transition cursor-pointer border border-slate-200"
              title="Click to toggle 2 or 3 decimal places"
            >
              ${state.decimalPlaces} Decimals
            </button>
          </div>

          <div class="mt-3 flex items-baseline gap-4">
            <div class="text-5xl sm:text-6xl font-black tracking-tight text-slate-900">
              ${formatGpa(calcResult.gpa, state.decimalPlaces)}
            </div>
            <div class="flex flex-col">
              <span class="text-sm font-semibold text-slate-400">/ 4.000 Max</span>
              <span class="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full mt-1 ${tier.color}">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>
                ${tier.text}
              </span>
            </div>
          </div>

          <!-- Formula Quotient Pill -->
          <div
            id="formula-pill-btn"
            class="mt-4 p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs cursor-pointer hover:bg-slate-100 transition group"
          >
            <div class="flex items-center gap-2 text-slate-600">
              <svg class="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
              <span>Formula:</span>
              <span class="font-mono font-medium text-slate-800">
                ${Math.round(calcResult.totalGradePoints)} pts ÷ ${calcResult.gradedCreditsAttempted} CU
              </span>
            </div>
            <span class="text-[11px] font-semibold text-sky-600 group-hover:underline">
              View details →
            </span>
          </div>
        </div>

        <!-- Attained Credits Progress -->
        <div class="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200 pb-5 lg:pb-0 lg:pr-6">
          <div>
            <div class="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
              <span>Total Credits Attained</span>
              <span class="text-slate-800 font-mono font-bold">${progressPercent}%</span>
            </div>

            <div class="mt-2 flex items-baseline gap-2">
              <span class="text-3xl font-extrabold text-slate-900">${attainedCredits}</span>
              <span class="text-sm font-medium text-slate-400">/ ${totalRequiredCredits} Required</span>
            </div>

            <div class="w-full bg-slate-100 rounded-full h-3 mt-3 overflow-hidden p-0.5 border border-slate-200">
              <div
                class="h-full rounded-full transition-all duration-500 ${progressPercent >= 100 ? 'bg-emerald-500' : progressPercent >= 50 ? 'bg-sky-500' : 'bg-amber-500'}"
                style="width: ${progressPercent}%"
              ></div>
            </div>
          </div>

          <div class="mt-4 grid grid-cols-2 gap-2 text-xs">
            <div class="bg-slate-50 p-2 rounded-lg border border-slate-200">
              <span class="text-slate-500 block">Graded Credits:</span>
              <span class="font-semibold text-slate-800 font-mono">${calcResult.gradedCreditsAttempted} CU</span>
            </div>
            <div class="bg-slate-50 p-2 rounded-lg border border-slate-200">
              <span class="text-slate-500 block">Ungraded (P/F):</span>
              <span class="font-semibold text-slate-800 font-mono">${calcResult.totalCreditsAttempted - calcResult.gradedCreditsAttempted} CU</span>
            </div>
          </div>
        </div>

        <!-- Annual Performance -->
        <div class="lg:col-span-3 flex flex-col justify-between">
          <span class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 block">
            Annual Performance
          </span>

          <div class="space-y-2">
            ${[1, 2, 3]
              .map((year) => {
                const yrData = calcResult.yearResults[year];
                const yearTargetCredits = year === 1 ? 32 : year === 2 ? 37 : 27;
                return `
                  <div class="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <div class="flex items-center gap-2">
                      <span class="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center font-bold text-[11px] text-slate-700">
                        Y${year}
                      </span>
                      <span class="font-medium text-slate-700">Year ${year}</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <span class="text-slate-400 text-[11px]">${yrData.creditsAttained}/${yearTargetCredits} CU</span>
                      <span class="font-bold font-mono text-slate-900 min-w-[36px] text-right">
                        ${formatGpa(yrData.gpa, state.decimalPlaces)}
                      </span>
                    </div>
                  </div>
                `;
              })
              .join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('toggle-decimals-btn')?.addEventListener('click', () => state.toggleDecimals());
  document.getElementById('formula-pill-btn')?.addEventListener('click', openFormulaModal);
}

// Render Category Breakdown
function renderCategoryBreakdown(calcResult) {
  const container = document.getElementById('category-breakdown-container');
  if (!container) return;

  const categories = Object.keys(CATEGORY_INFO_MAP);

  container.innerHTML = `
    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 mb-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          <h2 class="text-sm font-bold uppercase tracking-wider text-slate-800">
            Curriculum Category Breakdown (96 Credit Units)
          </h2>
        </div>
        ${
          state.selectedCategory
            ? `<button id="clear-category-filter-btn" type="button" class="text-xs text-sky-600 hover:underline cursor-pointer font-medium">
                Clear category filter (Showing all)
              </button>`
            : ''
        }
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5">
        ${categories
          .map((cat) => {
            const info = CATEGORY_INFO_MAP[cat];
            const data = calcResult.categoryBreakdown[cat] || {
              requiredCredits: info.requiredCredits,
              attainedCredits: 0,
              totalModules: 0,
            };
            const isComplete = data.attainedCredits >= info.requiredCredits;
            const isSelected = state.selectedCategory === cat;

            return `
              <button
                type="button"
                data-category="${cat}"
                class="category-card-btn p-3 rounded-xl text-left border transition cursor-pointer flex flex-col justify-between ${
                  isSelected ? 'ring-2 ring-slate-900 border-transparent shadow-sm' : 'hover:shadow-sm'
                } ${info.colorBg} ${info.colorBorder}"
              >
                <div>
                  <div class="flex items-start justify-between gap-1 mb-1">
                    <span class="text-xs font-bold line-clamp-2 ${info.colorText}">${cat}</span>
                    ${
                      isComplete
                        ? `<span class="p-0.5 rounded-full bg-emerald-500 text-white shrink-0">
                            <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          </span>`
                        : ''
                    }
                  </div>
                </div>
                <div class="mt-2 flex items-baseline justify-between pt-1 border-t border-slate-200/60">
                  <span class="text-[11px] font-semibold text-slate-500">Attained:</span>
                  <span class="font-mono text-xs font-bold text-slate-900">${data.attainedCredits} / ${info.requiredCredits}</span>
                </div>
              </button>
            `;
          })
          .join('')}
      </div>
    </div>
  `;

  document.getElementById('clear-category-filter-btn')?.addEventListener('click', () => {
    state.selectedCategory = null;
    renderApp();
  });

  document.querySelectorAll('.category-card-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const cat = btn.getAttribute('data-category');
      state.selectedCategory = state.selectedCategory === cat ? null : cat;
      renderApp();
    });
  });
}

// Render Table
function renderModuleTable() {
  const container = document.getElementById('modules-table-container');
  if (!container) return;

  // Filter modules
  const filtered = state.modules.filter((m) => {
    if (state.selectedYear !== 'all' && m.year !== state.selectedYear) return false;
    if (state.selectedCategory && m.category !== state.selectedCategory) return false;
    if (state.gradeFilter === 'pending' && m.grade !== '') return false;
    if (state.gradeFilter !== 'all' && state.gradeFilter !== 'pending' && m.grade !== state.gradeFilter) return false;
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase();
      return m.code.toLowerCase().includes(q) || m.title.toLowerCase().includes(q) || m.category.toLowerCase().includes(q);
    }
    return true;
  });

  container.innerHTML = `
    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <!-- Toolbar -->
      <div class="p-4 sm:p-5 border-b border-slate-200 flex flex-col gap-4">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <!-- Year Tabs -->
          <div class="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto">
            <button
              type="button"
              data-year="all"
              class="year-tab-btn px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                state.selectedYear === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }"
            >
              All 3 Years
            </button>
            ${[1, 2, 3]
              .map((yr) => {
                return `
                  <button
                    type="button"
                    data-year="${yr}"
                    class="year-tab-btn px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                      state.selectedYear === yr
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }"
                  >
                    Year ${yr}
                  </button>
                `;
              })
              .join('')}
          </div>

          <!-- Quick Bulk Actions for filtered modules -->
          <div class="flex flex-wrap items-center gap-1.5">
            <span class="text-xs text-slate-500 hidden sm:inline">Set visible to:</span>
            <button
              id="bulk-all-a-btn"
              type="button"
              class="px-2.5 py-1 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition cursor-pointer"
            >
              All A
            </button>
            <button
              id="bulk-all-b-btn"
              type="button"
              class="px-2.5 py-1 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition cursor-pointer"
            >
              All B
            </button>
            <button
              id="bulk-all-c-btn"
              type="button"
              class="px-2.5 py-1 text-xs font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg transition cursor-pointer"
            >
              All C
            </button>
            <button
              id="bulk-clear-btn"
              type="button"
              class="px-2.5 py-1 text-xs font-semibold text-slate-500 hover:text-rose-600 bg-slate-50 hover:bg-rose-50 border border-slate-200 rounded-lg transition cursor-pointer"
            >
              Clear
            </button>
          </div>
        </div>

        <!-- Search & Filter Controls -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
          <!-- Search Input -->
          <div class="relative flex-1">
            <svg class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line></svg>
            <input
              id="module-search-input"
              type="text"
              placeholder="Search by code (e.g. SN33001FP), title, or category..."
              value="${state.searchQuery}"
              class="w-full pl-9 pr-8 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            />
            ${
              state.searchQuery
                ? `<button id="clear-search-btn" class="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs">✕</button>`
                : ''
            }
          </div>

          <!-- Grade Filter Dropdown -->
          <div class="flex items-center gap-2 shrink-0">
            <label class="text-xs text-slate-500 whitespace-nowrap">Grade filter:</label>
            <select
              id="grade-filter-select"
              class="px-2.5 py-1.5 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="all" ${state.gradeFilter === 'all' ? 'selected' : ''}>All Grades</option>
              <option value="A" ${state.gradeFilter === 'A' ? 'selected' : ''}>Grade A (4.0)</option>
              <option value="B" ${state.gradeFilter === 'B' ? 'selected' : ''}>Grade B (3.0)</option>
              <option value="C" ${state.gradeFilter === 'C' ? 'selected' : ''}>Grade C (2.0)</option>
              <option value="D" ${state.gradeFilter === 'D' ? 'selected' : ''}>Grade D (1.0)</option>
              <option value="E" ${state.gradeFilter === 'E' ? 'selected' : ''}>Grade E (0.0)</option>
              <option value="P" ${state.gradeFilter === 'P' ? 'selected' : ''}>Grade P (Pass)</option>
              <option value="F" ${state.gradeFilter === 'F' ? 'selected' : ''}>Grade F (Fail)</option>
              <option value="pending" ${state.gradeFilter === 'pending' ? 'selected' : ''}>Pending (Unassigned)</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Mobile Responsive Module Cards (< md) -->
      <div class="block md:hidden divide-y divide-slate-100">
        ${
          filtered.length === 0
            ? `<div class="p-8 text-center text-slate-400 text-xs">No modules match your current filters.</div>`
            : filtered
                .map((mod) => {
                  const isSports = isSportsAndWellness(mod.category, mod.code);
                  const scale = getModuleGradePoint(mod.grade, mod.category, mod.code);
                  const catInfo = CATEGORY_INFO_MAP[mod.category] || { badgeBg: 'bg-slate-100 text-slate-700' };

                  return `
                    <div class="p-4 space-y-3">
                      <!-- Top Row: Year, Code, CU, Scale Points, Delete -->
                      <div class="flex items-center justify-between gap-2">
                        <div class="flex items-center gap-1.5 min-w-0">
                          <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 font-bold text-slate-700 text-[11px] shrink-0">
                            Y${mod.year}
                          </span>
                          <span class="font-mono font-bold text-slate-900 text-xs truncate">
                            ${mod.code}
                          </span>
                          ${mod.isCustom ? `<span class="px-1 py-0.2 text-[9px] bg-amber-100 text-amber-800 rounded font-sans shrink-0">Custom</span>` : ''}
                        </div>

                        <div class="flex items-center gap-1.5 shrink-0">
                          <span class="px-2 py-0.5 rounded-md bg-slate-100 font-mono text-[11px] font-bold text-slate-700">
                            ${mod.creditUnits} CU
                          </span>
                          <span class="px-2 py-0.5 rounded-md font-mono text-[11px] font-bold ${
                            isSports
                              ? 'bg-slate-100 text-slate-500'
                              : scale !== null
                              ? 'bg-amber-100 text-amber-900 border border-amber-200'
                              : 'bg-slate-100 text-slate-400'
                          }">
                            ${isSports ? 'Ungraded' : scale !== null ? `Scale: ${scale}` : 'Scale: -'}
                          </span>
                          ${
                            mod.isCustom
                              ? `<button
                                  data-delete-id="${mod.id}"
                                  class="delete-mod-btn p-1 text-slate-400 hover:text-rose-600 rounded transition"
                                  title="Delete custom module"
                                >
                                  ✕
                                </button>`
                              : ''
                          }
                        </div>
                      </div>

                      <!-- Middle: Title & Category -->
                      <div>
                        <div class="font-semibold text-slate-900 text-sm leading-snug">
                          ${mod.title}
                        </div>
                        <div class="mt-1">
                          <span class="inline-block px-2 py-0.5 text-[10px] font-medium rounded-md border ${catInfo.badgeBg}">
                            ${mod.category}
                          </span>
                        </div>
                      </div>

                      <!-- Bottom: Grade Touch Selector -->
                      <div>
                        ${
                          isSports
                            ? `
                              <div class="grid grid-cols-2 gap-2">
                                <button
                                  type="button"
                                  data-module-id="${mod.id}"
                                  data-grade-val="P"
                                  class="grade-touch-btn min-h-[44px] px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer select-none active:scale-95 flex items-center justify-center gap-1.5 touch-manipulation ${
                                    mod.grade === 'P'
                                      ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-500/40 font-black'
                                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                                  }"
                                  title="Pass (Sports & Wellness - Ungraded)"
                                >
                                  Pass (P)
                                </button>
                                <button
                                  type="button"
                                  data-module-id="${mod.id}"
                                  data-grade-val="F"
                                  class="grade-touch-btn min-h-[44px] px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer select-none active:scale-95 flex items-center justify-center gap-1.5 touch-manipulation ${
                                    mod.grade === 'F'
                                      ? 'bg-rose-600 text-white shadow-sm ring-2 ring-rose-500/40 font-black'
                                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                                  }"
                                  title="Fail (Sports & Wellness - Ungraded)"
                                >
                                  Fail (F)
                                </button>
                              </div>
                            `
                            : `
                              <div class="grid grid-cols-6 gap-1.5">
                                ${[
                                  { grade: 'A', label: 'A', gpa: '4', color: 'bg-emerald-600 ring-emerald-500/40 text-white' },
                                  { grade: 'B', label: 'B', gpa: '3', color: 'bg-sky-600 ring-sky-500/40 text-white' },
                                  { grade: 'C', label: 'C', gpa: '2', color: 'bg-amber-500 ring-amber-500/40 text-white' },
                                  { grade: 'D', label: 'D', gpa: '1', color: 'bg-orange-500 ring-orange-500/40 text-white' },
                                  { grade: 'E', label: 'E', gpa: '0', color: 'bg-red-500 ring-red-500/40 text-white' },
                                  { grade: 'F', label: 'F', gpa: '0', color: 'bg-rose-700 ring-rose-600/40 text-white' },
                                ]
                                  .map((g) => {
                                    const isSelected = mod.grade === g.grade;
                                    return `
                                      <button
                                        type="button"
                                        data-module-id="${mod.id}"
                                        data-grade-val="${g.grade}"
                                        class="grade-touch-btn min-h-[44px] rounded-xl text-xs font-bold transition-all cursor-pointer select-none active:scale-95 flex flex-col items-center justify-center touch-manipulation ${
                                          isSelected
                                            ? `${g.color} shadow-sm ring-2 font-black scale-102`
                                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                                        }"
                                        title="Grade ${g.grade} (${g.gpa} pts)"
                                      >
                                        <span class="font-extrabold text-sm leading-none">${g.label}</span>
                                        <span class="text-[9px] opacity-75 font-mono mt-0.5 leading-none">${g.gpa}</span>
                                      </button>
                                    `;
                                  })
                                  .join('')}
                              </div>
                            `
                        }
                      </div>
                    </div>
                  `;
                })
                .join('')
        }
      </div>

      <!-- Desktop Table Section (Shown on md and up) -->
      <div class="hidden md:block overflow-x-auto">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider">
              <th class="py-3 px-4 w-12 text-center">Yr</th>
              <th class="py-3 px-4 w-28">Code</th>
              <th class="py-3 px-4 min-w-[220px]">Module Title</th>
              <th class="py-3 px-4 w-44">Category</th>
              <th class="py-3 px-4 w-16 text-center">CU</th>
              <th class="py-3 px-3 min-w-[240px] text-center">Grade (Touch to Set)</th>
              <th class="py-3 px-4 w-20 text-center">Points</th>
              <th class="py-3 px-3 w-12 text-center"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            ${
              filtered.length === 0
                ? `<tr><td colspan="8" class="text-center py-12 text-slate-400">No modules match your current filters.</td></tr>`
                : filtered
                    .map((mod) => {
                      const isSports = isSportsAndWellness(mod.category, mod.code);
                      const scale = getModuleGradePoint(mod.grade, mod.category, mod.code);
                      const catInfo = CATEGORY_INFO_MAP[mod.category] || { badgeBg: 'bg-slate-100 text-slate-700' };

                      return `
                        <tr class="hover:bg-slate-50/80 transition-colors">
                          <td class="py-3 px-4 text-center">
                            <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 font-bold text-slate-600 text-[11px]">
                              Y${mod.year}
                            </span>
                          </td>
                          <td class="py-3 px-4 font-mono font-bold text-slate-900">
                            ${mod.code}
                            ${mod.isCustom ? `<span class="ml-1 px-1 py-0.2 text-[9px] bg-amber-100 text-amber-800 rounded font-sans">Custom</span>` : ''}
                          </td>
                          <td class="py-3 px-4">
                            <div class="font-medium text-slate-900 text-sm">${mod.title}</div>
                          </td>
                          <td class="py-3 px-4">
                            <span class="inline-block px-2 py-0.5 text-[11px] font-medium rounded-md border ${catInfo.badgeBg}">
                              ${mod.category}
                            </span>
                          </td>
                          <td class="py-3 px-4 text-center font-mono font-bold text-slate-800">
                            ${mod.creditUnits}
                          </td>
                          <td class="py-2.5 px-3 text-center">
                            ${
                              isSports
                                ? `
                                  <div class="inline-flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 gap-1.5 touch-manipulation shadow-xs">
                                    <button
                                      type="button"
                                      data-module-id="${mod.id}"
                                      data-grade-val="P"
                                      class="grade-touch-btn px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer select-none active:scale-95 ${
                                        mod.grade === 'P'
                                          ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-500/40 font-black scale-105'
                                          : 'bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200/80'
                                      }"
                                      title="Pass (Sports & Wellness - Ungraded)"
                                    >
                                      Pass (P)
                                    </button>
                                    <button
                                      type="button"
                                      data-module-id="${mod.id}"
                                      data-grade-val="F"
                                      class="grade-touch-btn px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer select-none active:scale-95 ${
                                        mod.grade === 'F'
                                          ? 'bg-rose-600 text-white shadow-sm ring-2 ring-rose-500/40 font-black scale-105'
                                          : 'bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200/80'
                                      }"
                                      title="Fail (Sports & Wellness - Ungraded)"
                                    >
                                      Fail (F)
                                    </button>
                                  </div>
                                `
                                : `
                                  <div class="inline-flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 gap-1 touch-manipulation shadow-xs">
                                    ${[
                                      { grade: 'A', label: 'A', gpa: '4', color: 'bg-emerald-600 ring-emerald-500/40 text-white' },
                                      { grade: 'B', label: 'B', gpa: '3', color: 'bg-sky-600 ring-sky-500/40 text-white' },
                                      { grade: 'C', label: 'C', gpa: '2', color: 'bg-amber-500 ring-amber-500/40 text-white' },
                                      { grade: 'D', label: 'D', gpa: '1', color: 'bg-orange-500 ring-orange-500/40 text-white' },
                                      { grade: 'E', label: 'E', gpa: '0', color: 'bg-red-500 ring-red-500/40 text-white' },
                                      { grade: 'F', label: 'F', gpa: '0', color: 'bg-rose-700 ring-rose-600/40 text-white' },
                                    ]
                                      .map((g) => {
                                        const isSelected = mod.grade === g.grade;
                                        return `
                                          <button
                                            type="button"
                                            data-module-id="${mod.id}"
                                            data-grade-val="${g.grade}"
                                            class="grade-touch-btn w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-lg text-xs font-bold transition-all cursor-pointer select-none active:scale-95 flex items-center justify-center ${
                                              isSelected
                                                ? `${g.color} shadow-sm ring-2 font-black scale-105`
                                                : 'bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-950 border border-slate-200/80'
                                            }"
                                            title="Grade ${g.grade} (${g.gpa} pts)"
                                          >
                                            ${g.label}
                                          </button>
                                        `;
                                      })
                                      .join('')}
                                  </div>
                                `
                            }
                          </td>
                          <td class="py-3 px-4 text-center font-mono font-semibold">
                            ${
                              isSports
                                ? `<span class="text-slate-400 font-bold">-</span>`
                                : scale !== null
                                ? `<span class="text-slate-800 font-bold">${scale}</span>`
                                : `<span class="text-slate-400 font-bold">-</span>`
                            }
                          </td>
                          <td class="py-3 px-3 text-center">
                            ${
                              mod.isCustom
                                ? `<button
                                    data-delete-id="${mod.id}"
                                    class="delete-mod-btn p-1 text-slate-400 hover:text-rose-600 rounded transition"
                                    title="Delete custom module"
                                  >
                                    ✕
                                  </button>`
                                : ''
                            }
                          </td>
                        </tr>
                      `;
                    })
                    .join('')
            }
          </tbody>
        </table>
      </div>
    </div>
  `;

  // Year tabs handlers
  document.querySelectorAll('.year-tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const yr = btn.getAttribute('data-year');
      state.selectedYear = yr === 'all' ? 'all' : parseInt(yr, 10);
      renderApp();
    });
  });

  // Bulk actions handlers
  const handleBulk = (grade) => {
    filtered.forEach((m) => {
      if (isSportsAndWellness(m.category, m.code)) {
        m.grade = ['P', 'F', ''].includes(grade) ? grade : 'P';
      } else {
        m.grade = grade;
      }
    });
    state.saveModules();
    renderApp();
  };

  document.getElementById('bulk-all-a-btn')?.addEventListener('click', () => handleBulk('A'));
  document.getElementById('bulk-all-b-btn')?.addEventListener('click', () => handleBulk('B'));
  document.getElementById('bulk-all-c-btn')?.addEventListener('click', () => handleBulk('C'));
  document.getElementById('bulk-clear-btn')?.addEventListener('click', () => handleBulk(''));

  // Search input handler
  const searchInput = document.getElementById('module-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderApp();
      // Refocus and keep cursor at end
      const newInput = document.getElementById('module-search-input');
      if (newInput) {
        newInput.focus();
        newInput.setSelectionRange(newInput.value.length, newInput.value.length);
      }
    });
  }

  document.getElementById('clear-search-btn')?.addEventListener('click', () => {
    state.searchQuery = '';
    renderApp();
  });

  // Grade filter select handler
  document.getElementById('grade-filter-select')?.addEventListener('change', (e) => {
    state.gradeFilter = e.target.value;
    renderApp();
  });

  // Touch-based grade button handlers
  document.querySelectorAll('.grade-touch-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const modId = btn.getAttribute('data-module-id');
      const targetGrade = btn.getAttribute('data-grade-val');
      const mod = state.modules.find((m) => m.id === modId);
      if (!mod) return;
      // Tapping the active grade toggles it to pending ('')
      const newGrade = mod.grade === targetGrade && targetGrade !== '' ? '' : targetGrade;
      state.updateGrade(modId, newGrade);
    });
  });

  // Delete custom module handlers
  document.querySelectorAll('.delete-mod-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const modId = btn.getAttribute('data-delete-id');
      state.deleteModule(modId);
    });
  });
}

// Modals
export function openFormulaModal() {
  const modal = document.getElementById('formula-modal');
  if (!modal) return;

  const calc = calculateGPA(state.modules);
  const gradedModules = state.modules.filter(
    (m) => m.grade !== '' && getModuleGradePoint(m.grade, m.category, m.code) !== null
  );
  const excludedModules = state.modules.filter(
    (m) => m.grade !== '' && getModuleGradePoint(m.grade, m.category, m.code) === null
  );
  const pendingModules = state.modules.filter((m) => m.grade === '');

  const totalPoints = calc.totalGradePoints;
  const totalGradedCredits = calc.gradedCreditsAttempted;

  document.getElementById('formula-modal-content').innerHTML = `
    <!-- Header -->
    <div class="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50">
      <div class="flex items-center gap-2.5">
        <div class="p-2 rounded-xl bg-amber-500/10 text-amber-600">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="16" height="20" x="4" y="2" rx="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="14"></line><line x1="16" x2="16" y1="18" y2="18"></line><path d="M8 10h.01"></path><path d="M12 10h.01"></path><path d="M16 10h.01"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path></svg>
        </div>
        <div>
          <h2 class="text-lg font-bold text-slate-900">Official OIT GPA Formula &amp; Computation</h2>
          <p class="text-xs text-slate-500">Grade scale: A=4, B=3, C=2, D=1, E=0, F=0 (Academic), P/F = Excluded (Sports &amp; Wellness)</p>
        </div>
      </div>
      <button id="close-formula-modal-x" type="button" class="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer">✕</button>
    </div>

    <!-- Body -->
    <div class="p-6 space-y-6 max-h-[75vh] overflow-y-auto text-sm text-slate-700">
      <!-- Formula Display -->
      <div class="p-4 rounded-xl bg-slate-100 border border-slate-200 text-center space-y-2">
        <div class="text-xs uppercase font-bold tracking-wider text-slate-500">Grade Point Average (GPA) Formula</div>
        <div class="text-base sm:text-lg font-mono font-bold text-slate-900 inline-flex flex-col items-center">
          <span>Σ (Module Credit Units Earned × Module Grade Scale)</span>
          <span class="w-full h-0.5 bg-slate-400 my-1.5"></span>
          <span>Σ (Module Credit Units Attempted)</span>
        </div>
      </div>

      <!-- Institutional Rules -->
      <div class="space-y-2 bg-amber-50/70 p-4 rounded-xl border border-amber-200">
        <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
          <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="16" y2="12"></line><line x1="12" x2="12.01" y1="8" y2="8"></line></svg>
          <span>Official OIT Rules for Certification</span>
        </div>
        <p class="text-xs leading-relaxed text-amber-950/80">
          The GPA includes all graded modules (grades A, B, C, D, E, and F for academic courses) accountable for certification and <strong>excludes</strong>:
        </p>
        <ul class="text-xs list-disc list-inside space-y-1 text-amber-900 pl-1">
          <li>Modules assessed on <strong>Pass/Fail (P / F)</strong> systems (e.g. Sports &amp; Wellness).</li>
          <li>Exempted modules.</li>
        </ul>
      </div>

      <!-- Live Calculation -->
      <div class="border border-slate-200 rounded-xl p-4 bg-white">
        <h3 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Your Current Live Calculation</h3>
        ${
          totalGradedCredits > 0
            ? `
              <div class="space-y-3">
                <div class="p-3 bg-slate-50 rounded-lg text-center font-mono">
                  <div class="text-xs text-slate-500 mb-1">GPA = Total Grade Points Earned ÷ Total Graded Credits Attempted</div>
                  <div class="text-base font-bold text-slate-900 flex items-center justify-center gap-2">
                    <span class="text-emerald-600">${Math.round(totalPoints)} pts</span>
                    <span>÷</span>
                    <span class="text-sky-600">${totalGradedCredits} CU</span>
                    <span>=</span>
                    <span class="text-amber-600 text-xl font-black">${formatGpa(calc.gpa, state.decimalPlaces)}</span>
                  </div>
                </div>

                <div class="text-xs space-y-1.5 pt-2 text-slate-600">
                  <div class="flex justify-between">
                    <span>Graded Modules Count:</span>
                    <span class="font-semibold text-slate-900">${gradedModules.length} modules</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Excluded Pass/Fail Modules (P/F):</span>
                    <span class="font-semibold text-slate-900">${excludedModules.length} modules (${excludedModules.reduce((a, b) => a + b.creditUnits, 0)} CU)</span>
                  </div>
                  ${
                    pendingModules.length > 0
                      ? `<div class="flex justify-between text-amber-600">
                          <span>Pending Modules (not yet graded):</span>
                          <span class="font-semibold">${pendingModules.length} modules (${pendingModules.reduce((a, b) => a + b.creditUnits, 0)} CU)</span>
                        </div>`
                      : ''
                  }
                </div>
              </div>
            `
            : `<div class="text-center py-6 text-slate-400 text-xs">No graded modules selected yet. Select grades in the table to see your live breakdown.</div>`
        }
      </div>

      <!-- Grade Scale Matrix -->
      <div>
        <h3 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Grade Scale Matrix</h3>
        <div class="grid grid-cols-4 sm:grid-cols-7 gap-1.5 text-center text-xs">
          <div class="p-2 rounded-lg bg-emerald-50 border border-emerald-200">
            <div class="font-bold text-emerald-700">A</div>
            <div class="font-mono text-[11px] text-emerald-600 mt-0.5">4 pts</div>
          </div>
          <div class="p-2 rounded-lg bg-blue-50 border border-blue-200">
            <div class="font-bold text-blue-700">B</div>
            <div class="font-mono text-[11px] text-blue-600 mt-0.5">3 pts</div>
          </div>
          <div class="p-2 rounded-lg bg-amber-50 border border-amber-200">
            <div class="font-bold text-amber-700">C</div>
            <div class="font-mono text-[11px] text-amber-600 mt-0.5">2 pts</div>
          </div>
          <div class="p-2 rounded-lg bg-orange-50 border border-orange-200">
            <div class="font-bold text-orange-700">D</div>
            <div class="font-mono text-[11px] text-orange-600 mt-0.5">1 pt</div>
          </div>
          <div class="p-2 rounded-lg bg-red-50 border border-red-200">
            <div class="font-bold text-red-700">E</div>
            <div class="font-mono text-[11px] text-red-600 mt-0.5">0 pts</div>
          </div>
          <div class="p-2 rounded-lg bg-indigo-50 border border-indigo-200">
            <div class="font-bold text-indigo-700">P</div>
            <div class="font-mono text-[11px] text-indigo-600 mt-0.5">- (Pass)</div>
          </div>
          <div class="p-2 rounded-lg bg-rose-50 border border-rose-200">
            <div class="font-bold text-rose-700">F</div>
            <div class="font-mono text-[11px] text-rose-600 mt-0.5">- (Fail)</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="p-4 border-t border-slate-200 bg-slate-50 flex justify-end">
      <button id="close-formula-modal-btn" type="button" class="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition cursor-pointer">
        Got it, close
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
  document.getElementById('close-formula-modal-x')?.addEventListener('click', closeFormulaModal);
  document.getElementById('close-formula-modal-btn')?.addEventListener('click', closeFormulaModal);
}

export function closeFormulaModal() {
  document.getElementById('formula-modal')?.classList.add('hidden');
}

export function openTargetModal() {
  const modal = document.getElementById('target-modal');
  if (!modal) return;

  const completedGraded = state.modules.filter(
    (m) => m.grade !== '' && getModuleGradePoint(m.grade, m.category, m.code) !== null
  );
  const pendingGraded = state.modules.filter(
    (m) => m.grade === '' && !isSportsAndWellness(m.category, m.code)
  );

  const curPoints = completedGraded.reduce(
    (acc, m) => acc + m.creditUnits * getModuleGradePoint(m.grade, m.category, m.code),
    0
  );
  const curGradedCredits = completedGraded.reduce((acc, m) => acc + m.creditUnits, 0);
  const remCredits = pendingGraded.reduce((acc, m) => acc + m.creditUnits, 0);
  const totalFutureCredits = curGradedCredits + remCredits;
  const maxPossiblePoints = curPoints + remCredits * 4;
  const maxPossibleGpa = totalFutureCredits > 0 ? maxPossiblePoints / totalFutureCredits : 4;

  let currentTarget = (3.5).toFixed(state.decimalPlaces);

  const updateSimView = () => {
    const targetGpa = parseFloat(currentTarget) || 0;
    const neededTotalPoints = targetGpa * totalFutureCredits;
    const neededRemPoints = neededTotalPoints - curPoints;
    const neededAvgScale = remCredits > 0 ? neededRemPoints / remCredits : 0;

    let feedbackHtml = '';
    if (remCredits === 0) {
      feedbackHtml = `
        <div class="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800">
          All modules currently have assigned grades. Change some modules to pending or edit grades to plan ahead.
        </div>
      `;
    } else if (targetGpa > maxPossibleGpa) {
      feedbackHtml = `
        <div class="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs space-y-1.5">
          <div class="flex items-center gap-1.5 font-bold text-rose-700">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" x2="12" y1="9" y2="13"></line><line x1="12" x2="12.01" y1="17" y2="17"></line></svg>
            <span>Target mathematically not reachable</span>
          </div>
          <p class="text-rose-600">
            Even with straight A's (4.0) in all remaining ${remCredits} credits, your maximum possible GPA is <strong>${formatGpa(maxPossibleGpa, state.decimalPlaces)}</strong>.
          </p>
        </div>
      `;
    } else {
      feedbackHtml = `
        <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs space-y-2">
          <div class="flex items-center gap-1.5 font-bold text-emerald-700">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span>Target is achievable!</span>
          </div>
          <p class="text-emerald-800">
            To reach <strong>${targetGpa.toFixed(state.decimalPlaces)}</strong>, you need an average grade scale of <strong class="font-mono text-sm">${neededAvgScale.toFixed(state.decimalPlaces)} / 4.0</strong> across your remaining ${remCredits} credits.
          </p>
          <div class="text-[11px] text-emerald-700">
            ${
              neededAvgScale >= 3.5
                ? '🎯 Target requires predominantly Grade A (4.0).'
                : neededAvgScale >= 2.5
                ? '🎯 Target requires a mix of Grade A (4.0) and Grade B (3.0).'
                : neededAvgScale >= 1.5
                ? '🎯 Target requires mostly Grade C (2.0) or higher.'
                : '🎯 Target is comfortably within reach with passing grades.'
            }
          </div>
        </div>
      `;
    }

    const simContainer = document.getElementById('target-sim-feedback');
    if (simContainer) simContainer.innerHTML = feedbackHtml;

    const applyBtn = document.getElementById('apply-simulated-btn');
    if (applyBtn) {
      if (remCredits > 0 && targetGpa <= maxPossibleGpa) {
        applyBtn.classList.remove('hidden');
      } else {
        applyBtn.classList.add('hidden');
      }
    }
  };

  document.getElementById('target-modal-content').innerHTML = `
    <!-- Header -->
    <div class="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50">
      <div class="flex items-center gap-2.5">
        <div class="p-2 rounded-xl bg-emerald-500/10 text-emerald-600">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
        </div>
        <div>
          <h2 class="text-lg font-bold text-slate-900">GPA Planner</h2>
          <p class="text-xs text-slate-500">Determine what grades you need in remaining modules</p>
        </div>
      </div>
      <button id="close-target-modal-x" type="button" class="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer">✕</button>
    </div>

    <!-- Body -->
    <div class="p-6 space-y-5">
      <div>
        <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
          Set Your Desired Cumulative GPA (0.000 – 4.000)
        </label>
        <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <input
            id="target-gpa-input"
            type="number"
            step="0.001"
            min="0.000"
            max="4.000"
            value="${currentTarget}"
            class="w-32 py-2 px-3 text-xl font-bold font-mono rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          />
          <div class="text-xs text-slate-500">
            Max achievable with straight A's: <strong class="text-slate-900 font-mono">${formatGpa(maxPossibleGpa, state.decimalPlaces)}</strong>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-3 text-xs">
        <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
          <span class="text-slate-400 block">Completed Graded Credits</span>
          <span class="text-base font-bold font-mono text-slate-900 mt-0.5 block">${curGradedCredits} CU</span>
          <span class="text-[11px] text-slate-500">Earned: ${Math.round(curPoints)} pts</span>
        </div>
        <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
          <span class="text-slate-400 block">Remaining Graded Credits</span>
          <span class="text-base font-bold font-mono text-slate-900 mt-0.5 block">${remCredits} CU</span>
          <span class="text-[11px] text-slate-500">${pendingGraded.length} pending modules</span>
        </div>
      </div>

      <div id="target-sim-feedback"></div>
    </div>

    <!-- Footer -->
    <div class="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
      <button id="close-target-modal-btn" type="button" class="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 rounded-xl transition cursor-pointer">
        Cancel
      </button>
      <button id="apply-simulated-btn" type="button" class="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-sm transition cursor-pointer">
        <span>Apply Simulated Grades</span>
      </button>
    </div>
  `;

  modal.classList.remove('hidden');

  const inputEl = document.getElementById('target-gpa-input');
  if (inputEl) {
    inputEl.addEventListener('input', (e) => {
      currentTarget = e.target.value;
      updateSimView();
    });
  }

  updateSimView();

  document.getElementById('close-target-modal-x')?.addEventListener('click', closeTargetModal);
  document.getElementById('close-target-modal-btn')?.addEventListener('click', closeTargetModal);

  document.getElementById('apply-simulated-btn')?.addEventListener('click', () => {
    const targetGpa = parseFloat(currentTarget) || 0;
    const neededTotalPoints = targetGpa * totalFutureCredits;
    const neededRemPoints = neededTotalPoints - curPoints;
    const neededAvgScale = remCredits > 0 ? neededRemPoints / remCredits : 0;

    let defaultGrade = 'A';
    if (neededAvgScale >= 3.5) defaultGrade = 'A';
    else if (neededAvgScale >= 2.5) defaultGrade = 'B';
    else if (neededAvgScale >= 1.5) defaultGrade = 'C';
    else if (neededAvgScale >= 0.5) defaultGrade = 'D';
    else defaultGrade = 'E';

    state.modules.forEach((m) => {
      if (m.grade === '') {
        if (isSportsAndWellness(m.category, m.code)) {
          m.grade = 'P';
        } else {
          m.grade = defaultGrade;
        }
      }
    });

    state.saveModules();
    closeTargetModal();
    renderApp();
  });
}

export function closeTargetModal() {
  document.getElementById('target-modal')?.classList.add('hidden');
}

export function openAddModuleModal() {
  const modal = document.getElementById('add-module-modal');
  if (!modal) return;

  const categories = Object.keys(CATEGORY_INFO_MAP);
  let selectedCat = 'Sector Foundation Modules';
  let selectedGrade = 'A';

  document.getElementById('add-module-modal-content').innerHTML = `
    <!-- Header -->
    <div class="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50">
      <div class="flex items-center gap-2.5">
        <div class="p-2 rounded-xl bg-amber-500/10 text-amber-600">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path><path d="M6 6h10"></path><path d="M6 10h10"></path></svg>
        </div>
        <div>
          <h2 class="text-lg font-bold text-slate-900">Add Custom Module</h2>
          <p class="text-xs text-slate-500">Add an elective or specific course to your schedule</p>
        </div>
      </div>
      <button id="close-add-modal-x" type="button" class="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer">✕</button>
    </div>

    <!-- Form -->
    <form id="add-module-form" class="p-6 space-y-4">
      <div class="grid grid-cols-3 gap-3">
        <div class="col-span-1">
          <label class="block text-xs font-semibold text-slate-600 mb-1">Module Code</label>
          <input
            id="new-mod-code"
            type="text"
            placeholder="e.g. IT49499"
            class="w-full px-3 py-2 text-xs font-mono rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 uppercase"
          />
        </div>
        <div class="col-span-2">
          <label class="block text-xs font-semibold text-slate-600 mb-1">Module Title *</label>
          <input
            id="new-mod-title"
            type="text"
            required
            placeholder="e.g. Advanced Cloud Architecture"
            class="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-semibold text-slate-600 mb-1">Credit Units (CU)</label>
          <input
            id="new-mod-cu"
            type="number"
            min="1"
            max="20"
            value="3"
            class="w-full px-3 py-2 text-xs font-mono font-bold rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-600 mb-1">Academic Year</label>
          <select
            id="new-mod-year"
            class="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="1">Year 1</option>
            <option value="2">Year 2</option>
            <option value="3">Year 3</option>
          </select>
        </div>
      </div>

      <div>
        <label class="block text-xs font-semibold text-slate-600 mb-1">Curriculum Category</label>
        <select
          id="new-mod-category"
          class="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          ${categories.map((c) => `<option value="${c}">${c}</option>`).join('')}
        </select>
      </div>

      <div>
        <label class="block text-xs font-semibold text-slate-600 mb-1.5">Initial Grade (Touch to select)</label>
        <div id="new-mod-grade-chips" class="grid grid-cols-4 gap-1.5 p-1.5 bg-slate-100 rounded-xl border border-slate-200 touch-manipulation">
          ${[
            { grade: 'A', label: 'A (4 pts)', color: 'bg-emerald-600 text-white border-emerald-700 shadow-sm font-bold' },
            { grade: 'B', label: 'B (3 pts)', color: 'bg-sky-600 text-white border-sky-700 shadow-sm font-bold' },
            { grade: 'C', label: 'C (2 pts)', color: 'bg-amber-500 text-white border-amber-600 shadow-sm font-bold' },
            { grade: 'D', label: 'D (1 pt)', color: 'bg-orange-500 text-white border-orange-600 shadow-sm font-bold' },
            { grade: 'E', label: 'E (0 pts)', color: 'bg-red-500 text-white border-red-600 shadow-sm font-bold' },
            { grade: 'F', label: 'F (0 pts)', color: 'bg-rose-700 text-white border-rose-800 shadow-sm font-bold' },
            { grade: 'P', label: 'P (Pass)', color: 'bg-indigo-600 text-white border-indigo-700 shadow-sm font-bold' },
            { grade: '', label: 'Pending', color: 'bg-slate-700 text-white border-slate-800 shadow-sm font-bold' },
          ]
            .map(
              (item) => `
                <button
                  type="button"
                  data-new-grade="${item.grade}"
                  class="new-grade-chip py-2 px-1 text-xs text-center rounded-lg border transition cursor-pointer active:scale-95 select-none ${
                    selectedGrade === item.grade
                      ? item.color
                      : 'bg-white text-slate-700 border-slate-200/80 hover:bg-slate-50'
                  }"
                >
                  ${item.label}
                </button>
              `
            )
            .join('')}
        </div>
        <input type="hidden" id="new-mod-grade" value="${selectedGrade}" />
      </div>

      <!-- Footer -->
      <div class="pt-4 border-t border-slate-200 flex items-center justify-end gap-2">
        <button id="close-add-modal-btn" type="button" class="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition cursor-pointer">
          Cancel
        </button>
        <button type="submit" class="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-sm transition cursor-pointer">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
          <span>Add Module</span>
        </button>
      </div>
    </form>
  `;

  modal.classList.remove('hidden');

  // Touch handlers for new module grade chips
  document.querySelectorAll('.new-grade-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      const chosenGrade = chip.getAttribute('data-new-grade');
      selectedGrade = chosenGrade;
      const hiddenInput = document.getElementById('new-mod-grade');
      if (hiddenInput) hiddenInput.value = chosenGrade;

      document.querySelectorAll('.new-grade-chip').forEach((c) => {
        const g = c.getAttribute('data-new-grade');
        if (g === chosenGrade) {
          c.className = 'new-grade-chip py-2 px-1 text-xs text-center rounded-lg border transition cursor-pointer active:scale-95 select-none bg-amber-500 text-white border-amber-600 shadow-sm font-bold scale-105';
        } else {
          c.className = 'new-grade-chip py-2 px-1 text-xs text-center rounded-lg border transition cursor-pointer active:scale-95 select-none bg-white text-slate-700 border-slate-200/80 hover:bg-slate-50';
        }
      });
    });
  });

  document.getElementById('close-add-modal-x')?.addEventListener('click', closeAddModuleModal);
  document.getElementById('close-add-modal-btn')?.addEventListener('click', closeAddModuleModal);

  document.getElementById('add-module-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleInput = document.getElementById('new-mod-title');
    const codeInput = document.getElementById('new-mod-code');
    const cuInput = document.getElementById('new-mod-cu');
    const yrInput = document.getElementById('new-mod-year');
    const catInput = document.getElementById('new-mod-category');
    const gradeInput = document.getElementById('new-mod-grade');

    const title = titleInput?.value.trim();
    if (!title) return;

    const newMod = {
      id: `custom-${Date.now()}`,
      code: codeInput?.value.trim().toUpperCase() || 'MOD' + Math.floor(1000 + Math.random() * 9000),
      title,
      creditUnits: Math.max(1, Math.min(30, parseInt(cuInput?.value, 10) || 1)),
      year: parseInt(yrInput?.value, 10) || 1,
      category: catInput?.value || 'Sector Foundation Modules',
      grade: gradeInput?.value || 'A',
      isCustom: true,
    };

    state.addModule(newMod);
    closeAddModuleModal();
  });
}

export function closeAddModuleModal() {
  document.getElementById('add-module-modal')?.classList.add('hidden');
}

// Main Render Function
export function renderApp() {
  const calcResult = calculateGPA(state.modules);
  renderHeader();
  renderSummaryCard(calcResult);
  renderCategoryBreakdown(calcResult);
  renderModuleTable();
}

// Initial Boot
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', () => renderApp());
} else {
  renderApp();
}
