// Shared: top nav, modal + Hanzi Writer, localStorage helpers, SM-2.
// Loaded by every page after data.js.

// ===== TOP NAV =====
const NAV_LINKS = [
  { href: 'index.html',      label: 'Browse',     match: ['index.html', ''] },
  { href: 'flashcards.html', label: 'Flashcards', match: ['flashcards.html'] },
  { href: 'quiz.html',       label: 'Quiz',       match: ['quiz.html'] },
  { href: 'progress.html',   label: 'Progress',   match: ['progress.html'] },
];

function renderTopNav() {
  const mount = document.getElementById('topnav-mount');
  if (!mount) return;
  const path = location.pathname.split('/').pop();
  const linksHtml = NAV_LINKS.map(l => {
    const active = l.match.includes(path) ? ' active' : '';
    return `<a class="topnav-link${active}" href="${l.href}">${l.label}</a>`;
  }).join('');
  mount.innerHTML = `
    <nav class="topnav">
      <div class="topnav-inner">
        <a class="topnav-brand" href="index.html">
          <span class="topnav-seal">汉</span>
          <span class="topnav-title">HSK · 1</span>
        </a>
        <div class="topnav-links">${linksHtml}</div>
      </div>
    </nav>
  `;
}

// ===== MODAL (stroke order + definition + examples) =====
const MODAL_HTML = `
<div class="modal-overlay" id="modal" role="dialog" aria-modal="true" aria-labelledby="modal-pinyin">
  <div class="modal">
    <button class="modal-close" aria-label="Close" data-modal-close>✕</button>
    <div class="modal-header">
      <div class="stroke-order-container" id="stroke-order-container"></div>
      <div class="stroke-controls">
        <button class="stroke-btn" data-stroke-action="animate">▶ Animate</button>
        <button class="stroke-btn" data-stroke-action="show">Show</button>
        <button class="stroke-btn" data-stroke-action="hide">Hide</button>
      </div>
      <div class="modal-pinyin" id="modal-pinyin"></div>
      <div class="modal-gloss" id="modal-gloss"></div>
    </div>
    <div class="modal-body">
      <div class="modal-section-label">Definition</div>
      <div class="modal-definition" id="modal-definition"></div>
      <div class="modal-section-label">Example Sentences</div>
      <div id="modal-examples"></div>
    </div>
  </div>
</div>
`;

let modalEl, strokeContainer, modalPinyin, modalGloss, modalDefinition, modalExamples;
let writers = [];

function ensureModal() {
  if (modalEl) return;
  const wrap = document.createElement('div');
  wrap.innerHTML = MODAL_HTML.trim();
  document.body.appendChild(wrap.firstChild);

  modalEl = document.getElementById('modal');
  strokeContainer = document.getElementById('stroke-order-container');
  modalPinyin = document.getElementById('modal-pinyin');
  modalGloss = document.getElementById('modal-gloss');
  modalDefinition = document.getElementById('modal-definition');
  modalExamples = document.getElementById('modal-examples');

  modalEl.querySelector('[data-modal-close]').addEventListener('click', closeModal);
  modalEl.querySelectorAll('[data-stroke-action]').forEach(b => {
    b.addEventListener('click', () => {
      const a = b.getAttribute('data-stroke-action');
      if (a === 'animate') animateStrokes();
      else if (a === 'show') writers.forEach(w => w.showCharacter());
      else if (a === 'hide') writers.forEach(w => w.hideCharacter());
    });
  });
  modalEl.addEventListener('click', e => { if (e.target === modalEl) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalEl.classList.contains('open')) closeModal();
  });
}

function clearWriters() {
  writers = [];
  if (strokeContainer) strokeContainer.innerHTML = '';
}

function openModalForHanzi(hanzi, pinyin, gloss) {
  ensureModal();
  const data = (typeof wordData !== 'undefined') ? wordData[hanzi] : null;

  modalPinyin.textContent = pinyin || '';
  modalGloss.textContent = gloss || '';

  if (data) {
    modalDefinition.textContent = data.def;
    modalExamples.innerHTML = data.ex.map(e => `
      <div class="example">
        <div class="example-cn">${e.cn}</div>
        <div class="example-py">${e.py}</div>
        <div class="example-en">${e.en}</div>
      </div>
    `).join('');
  } else {
    modalDefinition.textContent = gloss || '';
    modalExamples.innerHTML = '<div class="no-example">No example sentence available.</div>';
  }

  clearWriters();
  Array.from(hanzi).forEach((char, idx) => {
    const wrap = document.createElement('div');
    wrap.className = 'stroke-char';
    wrap.id = `stroke-char-${idx}`;
    wrap.title = 'Tap to animate strokes';
    strokeContainer.appendChild(wrap);
    try {
      const writer = HanziWriter.create(wrap.id, char, {
        width: 110, height: 110, padding: 5,
        strokeColor: '#1a1410',
        radicalColor: '#c1352a',
        outlineColor: '#d4c5a8',
        showOutline: true, showCharacter: true,
        strokeAnimationSpeed: 1.2,
        delayBetweenStrokes: 250,
      });
      writers.push(writer);
      wrap.addEventListener('click', () => writer.animateCharacter());
    } catch (err) {
      wrap.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-family:'Noto Sans SC',sans-serif;font-size:3.5rem;font-weight:500;">${char}</div>`;
    }
  });

  modalEl.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function animateStrokes() {
  // Play characters one after another — wait for each to finish before starting the next.
  let i = 0;
  const playNext = () => {
    if (i >= writers.length) return;
    const w = writers[i++];
    w.animateCharacter({ onComplete: playNext });
  };
  playNext();
}

function closeModal() {
  if (!modalEl) return;
  modalEl.classList.remove('open');
  document.body.style.overflow = '';
  clearWriters();
}

// ===== LOCALSTORAGE =====
const STORAGE_KEYS = {
  wrong: 'hsk1:wrong',
  srs:   'hsk1:srs',
  stats: 'hsk1:stats',
};

const storage = {
  read(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch { return fallback; }
  },
  write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch { /* quota or disabled — silently ignore */ }
  },

  getWrong() { return new Set(this.read(STORAGE_KEYS.wrong, [])); },
  setWrong(set) { this.write(STORAGE_KEYS.wrong, [...set]); },
  addWrong(hanzi) {
    const s = this.getWrong(); s.add(hanzi); this.setWrong(s);
  },
  removeWrong(hanzi) {
    const s = this.getWrong(); s.delete(hanzi); this.setWrong(s);
  },

  getSRS() { return this.read(STORAGE_KEYS.srs, {}); },
  setSRS(map) { this.write(STORAGE_KEYS.srs, map); },
  getCard(hanzi) {
    const all = this.getSRS();
    return all[hanzi] || null;
  },
  updateCard(hanzi, card) {
    const all = this.getSRS();
    all[hanzi] = card;
    this.setSRS(all);
  },

  getStats() {
    return this.read(STORAGE_KEYS.stats, {
      total: 0,
      correct: 0,
      sessions: 0,
      streakDays: 0,
      longestStreak: 0,
      lastSessionDate: null, // 'YYYY-MM-DD'
      perMode: {}, // { flip: {total, correct}, srs: {...}, mcq: {...}, quiz: {...} }
    });
  },
  recordAnswer(mode, hanzi, correct) {
    const s = this.getStats();
    s.total += 1;
    if (correct) s.correct += 1;
    if (!s.perMode[mode]) s.perMode[mode] = { total: 0, correct: 0 };
    s.perMode[mode].total += 1;
    if (correct) s.perMode[mode].correct += 1;
    this.write(STORAGE_KEYS.stats, s);
    // Wrong-list maintenance: add on miss, remove on hit (so list reflects recency).
    if (!correct) this.addWrong(hanzi);
    else this.removeWrong(hanzi);
  },
  startSession() {
    const s = this.getStats();
    const today = todayKey();
    if (s.lastSessionDate !== today) {
      const yesterday = dateOffset(-1);
      if (s.lastSessionDate === yesterday) s.streakDays += 1;
      else s.streakDays = 1;
      if (s.streakDays > s.longestStreak) s.longestStreak = s.streakDays;
      s.lastSessionDate = today;
      s.sessions += 1;
      this.write(STORAGE_KEYS.stats, s);
    }
  },
  reset() {
    localStorage.removeItem(STORAGE_KEYS.wrong);
    localStorage.removeItem(STORAGE_KEYS.srs);
    localStorage.removeItem(STORAGE_KEYS.stats);
  },
};

function todayKey(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}
function dateOffset(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return todayKey(d);
}

// ===== SM-2 SPACED REPETITION =====
// quality: 0..5 (Again=1, Hard=3, Good=4, Easy=5)
function sm2Update(prev, quality) {
  const card = prev || { ease: 2.5, interval: 0, repetitions: 0, due: Date.now() };
  let { ease, interval, repetitions } = card;

  if (quality < 3) {
    repetitions = 0;
    interval = 0; // due now / today again
  } else {
    repetitions += 1;
    if (repetitions === 1) interval = 1;
    else if (repetitions === 2) interval = 6;
    else interval = Math.round(interval * ease);
  }

  ease = Math.max(1.3, ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));

  const due = Date.now() + interval * 24 * 60 * 60 * 1000;
  return { ease, interval, repetitions, due };
}

function sm2PreviewInterval(prev, quality) {
  const next = sm2Update(prev, quality);
  return next.interval;
}

function formatInterval(days) {
  if (days <= 0) return 'now';
  if (days === 1) return '1d';
  if (days < 30) return `${days}d`;
  if (days < 365) return `${Math.round(days / 30)}mo`;
  return `${Math.round(days / 365)}y`;
}

// ===== DECK BUILDERS =====
function buildDeckAll() {
  return shuffle([...allWords]);
}

function buildDeckCustom(categoryIds) {
  const ids = new Set(categoryIds);
  const seen = new Set();
  const out = [];
  for (const cat of categories) {
    if (!ids.has(cat.id)) continue;
    for (const w of cat.words) {
      if (seen.has(w.hanzi)) continue;
      seen.add(w.hanzi);
      out.push({ ...w, category: cat.id });
    }
  }
  return shuffle(out);
}

function buildDeckSmart() {
  const wrong = storage.getWrong();
  const out = allWords.filter(w => wrong.has(w.hanzi));
  return shuffle(out);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', renderTopNav);
