---
hide:
  - toc
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

/* ── CSS VARIABLES ── */
:root {
  --navy:        #1b2050;
  --navy-mid:    #2a3080;
  --navy-soft:   #3d45a8;
  --accent:      #4f56d6;
  --accent-soft: #eef0ff;
  --surface:     #ffffff;
  --surface2:    #f8f9fe;
  --surface3:    #f1f3fb;
  --border:      #e3e6f4;
  --border-soft: #edf0fa;
  --text:        #1b2050;
  --text-sub:    #5a6080;
  --text-muted:  #9097b8;
  --green-bg:    #edfaf3;
  --green-text:  #0d7d49;
  --green-border:#6fcca0;
  --yellow-bg:   #fffaeb;
  --yellow-text: #8a6600;
  --yellow-border:#f5c842;
  --blue-bg:     #eaf2ff;
  --blue-text:   #1558b0;
  --blue-border: #7fb5f5;
  --gray-bg:     #f0f0f4;
  --gray-text:   #787898;
  --gray-border: #c8c8de;
  --highlight:   #fff176;
  --shadow-xs:   0 1px 3px rgba(27,32,80,0.06);
  --shadow-sm:   0 2px 10px rgba(27,32,80,0.07);
  --shadow-md:   0 4px 20px rgba(27,32,80,0.09);
  --radius:      10px;
}

/* MkDocs Material dark mode dùng data-md-color-scheme="slate" */
[data-md-color-scheme="slate"],
html[data-theme='dark'] {
  --navy:        #e0e3ff;
  --navy-mid:    #b0b8ff;
  --navy-soft:   #8890f0;
  --accent:      #6870f0;
  --accent-soft: #1e2240;
  --surface:     #1e2030;
  --surface2:    #252840;
  --surface3:    #2c3050;
  --border:      #333660;
  --border-soft: #2a2d52;
  --text:        #dde0f8;
  --text-sub:    #8890c0;
  --text-muted:  #5560a0;
  --green-bg:    #0e2a1a;
  --green-text:  #4cdb8a;
  --green-border:#1e5e3a;
  --yellow-bg:   #2a2200;
  --yellow-text: #f5c842;
  --yellow-border:#6a5500;
  --blue-bg:     #0d1e38;
  --blue-text:   #70aaff;
  --blue-border: #1e4080;
  --gray-bg:     #252535;
  --gray-text:   #8888a8;
  --gray-border: #3a3a58;
  --highlight:   #5a4a00;
  --shadow-xs:   0 1px 3px rgba(0,0,0,0.2);
  --shadow-sm:   0 2px 10px rgba(0,0,0,0.25);
  --shadow-md:   0 4px 20px rgba(0,0,0,0.3);
}

/* ── RESET & BASE ── */
#tbl-wrap * { box-sizing: border-box; }
#tbl-wrap {
  font-family: 'Be Vietnam Pro', sans-serif;
  color: var(--text);
  width: 100%;
}

/* ── TOOLBAR ── */
.tbl-toolbar {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

/* Search box */
.tbl-search-wrap {
  position: relative;
  flex: 1;
  min-width: 220px;
  max-width: 380px;
}
.tbl-search-icon {
  position: absolute;
  left: 13px; top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  font-size: 14px;
  pointer-events: none;
  line-height: 1;
}
.tbl-search-input {
  width: 100%;
  padding: 9px 14px 9px 38px;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 13.5px;
  font-weight: 500;
  color: var(--text);
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-xs);
  transition: border-color 0.18s, box-shadow 0.18s;
  outline: none;
}
.tbl-search-input::placeholder { color: var(--text-muted); font-weight: 400; }
.tbl-search-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(79,86,214,0.12);
}

/* Row count badge */
.tbl-count-badge {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-sub);
  background: var(--surface3);
  border: 1px solid var(--border);
  border-radius: 100px;
  padding: 5px 12px;
  white-space: nowrap;
  letter-spacing: 0.01em;
}

/* ── TABLE WRAPPER ── */
.tbl-scroll {
  width: 100%;
  overflow-x: auto;
  border-radius: 12px;
  border: 1.5px solid var(--border);
  box-shadow: var(--shadow-md);
  background: var(--surface);
}

/* ── TABLE ── */
.tbl-main {
  width: 100%;
  border-collapse: collapse;
  font-size: 13.5px;
  background: var(--surface);
  table-layout: auto;
}

/* ── HEADER ── */
.tbl-main thead tr.tbl-head-row th {
  background: var(--surface2);
  color: var(--text-sub);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  padding: 11px 16px;
  text-align: left;
  border-bottom: 1.5px solid var(--border);
  white-space: nowrap;
}

/* ── FILTER ROW ── */
.tbl-main thead tr.tbl-filter-row td {
  padding: 7px 10px;
  background: var(--surface3);
  border-bottom: 1.5px solid var(--border);
}
.tbl-main thead tr.tbl-filter-row td input,
.tbl-main thead tr.tbl-filter-row td select {
  width: 100%;
  padding: 6px 9px;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: var(--text);
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: 7px;
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.tbl-main thead tr.tbl-filter-row td input::placeholder { color: var(--text-muted); }
.tbl-main thead tr.tbl-filter-row td input:focus,
.tbl-main thead tr.tbl-filter-row td select:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 2px rgba(79,86,214,0.10);
}

/* ── BODY ROWS ── */
.tbl-main tbody tr {
  border-bottom: 1px solid var(--border-soft);
  transition: background 0.15s;
}
.tbl-main tbody tr:last-child { border-bottom: none; }
.tbl-main tbody tr:hover td { background: var(--accent-soft); }

.tbl-main tbody td {
  padding: 11px 16px;
  vertical-align: middle;
  color: var(--text);
  word-break: break-word;
  line-height: 1.55;
}

/* ── INDEX COLUMN ── */
.tbl-main tbody td:first-child {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11.5px;
  color: var(--text-muted);
  font-weight: 500;
}

/* ── SUPPLIER CHIP ── */
.tbl-supplier { display: flex; align-items: center; gap: 10px; }
.tbl-avatar {
  width: 36px; height: 36px; border-radius: 9px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 800; color: #fff;
  text-transform: uppercase; letter-spacing: -.3px;
  box-shadow: 0 2px 8px rgba(0,0,0,.13);
}
.tbl-avatar[data-l="A"],.tbl-avatar[data-l="B"] { background: linear-gradient(135deg,#0ea5e9,#38bdf8); }
.tbl-avatar[data-l="C"],.tbl-avatar[data-l="D"] { background: linear-gradient(135deg,#8b5cf6,#a78bfa); }
.tbl-avatar[data-l="E"],.tbl-avatar[data-l="F"] { background: linear-gradient(135deg,#10b981,#34d399); }
.tbl-avatar[data-l="G"],.tbl-avatar[data-l="H"] { background: linear-gradient(135deg,#f59e0b,#fbbf24); }
.tbl-avatar[data-l="I"],.tbl-avatar[data-l="J"] { background: linear-gradient(135deg,#ef4444,#f87171); }
.tbl-avatar[data-l="K"],.tbl-avatar[data-l="L"] { background: linear-gradient(135deg,#06b6d4,#22d3ee); }
.tbl-avatar[data-l="M"],.tbl-avatar[data-l="N"] { background: linear-gradient(135deg,#ec4899,#f472b6); }
.tbl-avatar[data-l="O"],.tbl-avatar[data-l="P"] { background: linear-gradient(135deg,#3b82f6,#60a5fa); }
.tbl-avatar[data-l="Q"],.tbl-avatar[data-l="R"] { background: linear-gradient(135deg,#14b8a6,#2dd4bf); }
.tbl-avatar[data-l="S"],.tbl-avatar[data-l="T"] { background: linear-gradient(135deg,#f97316,#fb923c); }
.tbl-avatar[data-l="U"],.tbl-avatar[data-l="V"] { background: linear-gradient(135deg,#6366f1,#818cf8); }
.tbl-avatar[data-l="W"],.tbl-avatar[data-l="X"] { background: linear-gradient(135deg,#84cc16,#a3e635); }
.tbl-avatar[data-l="Y"],.tbl-avatar[data-l="Z"] { background: linear-gradient(135deg,#a855f7,#c084fc); }
/* ── AVATAR: chỉ dùng data-l cho chữ cái A-Z, còn lại fallback màu accent ── */
.tbl-avatar { background: linear-gradient(135deg,var(--accent),var(--navy-soft)); }

.tbl-supplier-name {
  font-weight: 700; font-size: 13.5px;
  color: var(--navy); letter-spacing: -.01em; line-height: 1.3;
}

/* ── BOLD (product name) ── */
.tbl-bold { font-weight: 700; color: var(--navy); }

/* ── STATUS BADGES ── */
.tbl-status {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 100px;
  font-size: 11.5px;
  font-weight: 700;
  border: 1px solid transparent;
  white-space: nowrap;
  letter-spacing: 0.01em;
}
.tbl-status::before {
  content: '';
  width: 6px; height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}
.status-golive     { background: var(--green-bg);  color: var(--green-text);  border-color: var(--green-border); }
.status-golive::before     { background: var(--green-text); }
.status-stopped    { background: var(--gray-bg);   color: var(--gray-text);   border-color: var(--gray-border); }
.status-stopped::before    { background: var(--gray-text); }
.status-inprogress { background: var(--yellow-bg); color: var(--yellow-text); border-color: var(--yellow-border); }
.status-inprogress::before { background: var(--yellow-text); }
.status-checking   { background: var(--blue-bg);   color: var(--blue-text);   border-color: var(--blue-border); }
.status-checking::before   { background: var(--blue-text); }

/* ── HIGHLIGHT ── */
.tbl-hl {
  background: var(--highlight);
  border-radius: 3px;
  padding: 0 2px;
  font-weight: 700;
}

/* ── GUIDE LINK ── */
a.guide-link {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 4px 10px;
  border-radius: 7px;
  background: var(--accent-soft);
  color: var(--accent);
  font-size: 12.5px; font-weight: 600;
  text-decoration: none;
  border: 1px solid transparent;
  transition: background 0.15s, border-color 0.15s;
}
a.guide-link:hover { background: #dfe2ff; border-color: var(--accent); }

/* ── FOOTER ── */
.tbl-footer {
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 8px; margin-top: 14px; padding: 0 2px;
}
.tbl-last-updated { font-size: 11.5px; color: var(--text-muted); font-weight: 500; }
.tbl-last-updated strong { color: var(--text-sub); font-weight: 600; }

/* ── NO RESULTS ── */
.tbl-empty { text-align: center; padding: 48px 20px; color: var(--text-muted); font-size: 13.5px; }
.tbl-empty-icon { font-size: 28px; margin-bottom: 8px; }

/* ── LOADING ── */
.tbl-loading { display: flex; align-items: center; gap: 10px; padding: 32px 22px; color: var(--text-muted); font-size: 13.5px; }
.tbl-spinner {
  width: 18px; height: 18px;
  border: 2px solid var(--border); border-top-color: var(--accent);
  border-radius: 50%;
  animation: tbl-spin 0.7s linear infinite; flex-shrink: 0;
}
@keyframes tbl-spin { to { transform: rotate(360deg); } }

/* ── RESPONSIVE ── */
@media (max-width: 600px) {
  .tbl-toolbar { flex-direction: column; align-items: stretch; }
  .tbl-search-wrap { max-width: 100%; }
  .tbl-main tbody td, .tbl-main thead th { padding: 9px 11px; }
}
</style>

<div id="tbl-wrap">
  <div class="tbl-toolbar">
    <div class="tbl-search-wrap">
      <span class="tbl-search-icon">🔍</span>
      <input type="text" id="global-search" class="tbl-search-input" placeholder="Tìm kiếm toàn bộ...">
    </div>
    <span class="tbl-count-badge" id="tbl-count">Đang tải...</span>
  </div>

  <div class="tbl-scroll">
    <div class="tbl-loading">
      <div class="tbl-spinner"></div>
      Đang tải dữ liệu...
    </div>
  </div>

  <div class="tbl-footer">
    <div class="tbl-last-updated">Last updated on <strong>Mar 11, 2026</strong> by <strong>nhatth</strong></div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js"></script>
<script>
const hiddenCols = [2, 7, 8, 9, 10, 11];
let rawRows = [];
let headers = [];

async function loadSheetData() {
  const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQmQYH5j8ruAENtaIj8LXF_2wlYDnznZhRi0urxGWo8HBqRK4huxRICTQRl54e_wdKuGV-KfTE1-IQY/pub?gid=1990243708&single=true&output=csv';
  try {
    const response = await fetch(url);
    const text = await response.text();
    const results = Papa.parse(text, { header: false, skipEmptyLines: true });
    rawRows = results.data;
    headers = rawRows[0].filter((_, idx) => !hiddenCols.includes(idx));
    renderTable(rawRows);
  } catch (err) {
    document.querySelector('.tbl-scroll').innerHTML =
      `<div class="tbl-loading" style="color:#c0392b;">⚠️ Không thể tải dữ liệu. Vui lòng thử lại.</div>`;
    document.getElementById('tbl-count').textContent = 'Lỗi';
  }
}

function getInitials(name) {
  const SKIP = new Set([
    'công','ty','cổ','phần','tnhh','trách','nhiệm','hữu','hạn',
    'tập','đoàn','tổng','một','thành','viên',
    'joint','stock','company','limited','ltd','co','corp','the','and'
  ]);
  const words = name.trim().split(/\s+/)
    .filter(w => w.length > 0 && !SKIP.has(w.toLowerCase()));

  if (words.length === 0) return name.trim().slice(0, 2).toUpperCase();
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  // 2 chữ cái đầu của 2 từ CUỐI cùng có nghĩa
  return (words[words.length - 2][0] + words[words.length - 1][0]).toUpperCase();
}

function renderTable(data) {
  const scroll = document.querySelector('.tbl-scroll');
  const table = document.createElement('table');
  table.className = 'tbl-main';

  const thead = document.createElement('thead');

  // Header row
  const trHead = document.createElement('tr');
  trHead.className = 'tbl-head-row';
  headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    trHead.appendChild(th);
  });

  // Filter row
  const trFilter = document.createElement('tr');
  trFilter.className = 'tbl-filter-row';
  headers.forEach((header, colIndex) => {
    const td = document.createElement('td');
    const sampleValues = data.slice(1).map(r => r.filter((_, idx) => !hiddenCols.includes(idx))[colIndex]);
    const isNumeric = sampleValues.every(v => !isNaN(v) && v !== '');
    const uniqueVals = [...new Set(sampleValues.filter(v => v !== ''))];

    if (uniqueVals.length <= 10 && !isNumeric) {
      const select = document.createElement('select');
      const optAll = document.createElement('option');
      optAll.value = ''; optAll.textContent = 'Tất cả';
      select.appendChild(optAll);
      uniqueVals.sort().forEach(val => {
        const opt = document.createElement('option');
        opt.value = val; opt.textContent = val;
        select.appendChild(opt);
      });
      select.onchange = applyFilter;
      td.appendChild(select);
    } else {
      const input = document.createElement('input');
      input.placeholder = 'Lọc...';
      input.oninput = applyFilter;
      td.appendChild(input);
    }
    trFilter.appendChild(td);
  });

  thead.appendChild(trHead);
  thead.appendChild(trFilter);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  table.appendChild(tbody);

  scroll.innerHTML = '';
  scroll.appendChild(table);
  document.getElementById('global-search').oninput = applyFilter;
  applyFilter();
}

function highlightMatch(text, keywords = []) {
  if (!text) return text;
  let result = String(text);
  keywords.forEach(kw => {
    if (!kw) return;
    const esc = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    result = result.replace(new RegExp(`(${esc})`, 'gi'), `<span class="tbl-hl">$1</span>`);
  });
  return result;
}

function applyFilter() {
  const table = document.querySelector('.tbl-main');
  if (!table) return;

  const columnFilters = Array.from(table.querySelectorAll('.tbl-filter-row td'))
    .map(td => { const el = td.querySelector('input,select'); return el ? el.value.trim().toLowerCase() : ''; });
  const globalKeyword = (document.getElementById('global-search')?.value || '').trim().toLowerCase();

  const tbody = table.querySelector('tbody');
  tbody.innerHTML = '';
  let count = 0;

  rawRows.slice(1).forEach(row => {
    const visibleRow = row.filter((_, idx) => !hiddenCols.includes(idx));
    const matchColumn = visibleRow.every((cell, idx) => {
      const f = columnFilters[idx];
      return !f || (cell || '').toLowerCase().includes(f);
    });
    const matchGlobal = !globalKeyword || visibleRow.some(cell => (cell || '').toLowerCase().includes(globalKeyword));

    if (matchColumn && matchGlobal) {
      count++;
      const tr = document.createElement('tr');

      visibleRow.forEach((cell, idx) => {
        const td = document.createElement('td');
        const colName = headers[idx].toLowerCase();
        const cellText = (cell ?? '').toString();

        /* ── TRẠNG THÁI ── */
        if (colName.includes('trạng thái')) {
          const span = document.createElement('span');
          span.className = 'tbl-status';
          span.textContent = cellText;
          const v = cellText.trim().toLowerCase();
          if (v.includes('golive'))           span.classList.add('status-golive');
          else if (v.includes('ngưng'))       span.classList.add('status-stopped');
          else if (v.includes('thực hiện'))   span.classList.add('status-inprogress');
          else if (v.includes('kiểm thử'))    span.classList.add('status-checking');
          td.appendChild(span);
        }

        /* ── NHÀ CUNG CẤP — avatar chip ── */
        else if (colName.includes('tên nhà cung cấp')) {
          const chip = document.createElement('div');
          chip.className = 'tbl-supplier';

          // Chỉ hiện avatar khi có tên
          if (cellText.trim() !== '') {
            const initials = getInitials(cellText);
            const firstL   = (initials[0] || '0').toUpperCase();
            const av = document.createElement('div');
            av.className = 'tbl-avatar';
            av.setAttribute('data-l', firstL);
            av.textContent = initials;
            chip.appendChild(av);
          }

          const nm = document.createElement('div');
          nm.className = 'tbl-supplier-name';
          nm.innerHTML = highlightMatch(cellText, [columnFilters[idx], globalKeyword]);
          chip.appendChild(nm);
          td.appendChild(chip);
        }

        /* ── TÊN SẢN PHẨM ── */
        else if (colName.includes('tên sản phẩm')) {
          td.classList.add('tbl-bold');
          td.innerHTML = highlightMatch(cellText, [columnFilters[idx], globalKeyword]);
        }

        /* ── THƯỜNG ── */
        else {
          td.innerHTML = highlightMatch(cellText, [columnFilters[idx], globalKeyword]);
        }

        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    }
  });

  if (count === 0) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.colSpan = headers.length;
    td.innerHTML = `<div class="tbl-empty"><div class="tbl-empty-icon">🔎</div>Không tìm thấy kết quả phù hợp.</div>`;
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  const badge = document.getElementById('tbl-count');
  if (badge) badge.textContent = count > 0 ? `${count} kết quả` : 'Không có kết quả';
}

loadSheetData();

// Tự đo chiều cao navbar MkDocs và set offset cho sticky header
(function setStickyOffset() {
  const setOffset = () => {
    const nav     = document.querySelector('.md-header');
    const navH    = nav ? nav.offsetHeight : 0;
    document.documentElement.style.setProperty('--tbl-sticky-top', navH + 'px');

    // Đo chiều cao row header để filter row sticky đúng vị trí
    const headRow = document.querySelector('.tbl-head-row');
    const headH   = headRow ? headRow.offsetHeight : 40;
    document.documentElement.style.setProperty(
      '--tbl-filter-top', (navH + headH) + 'px'
    );
  };
  setOffset();
  window.addEventListener('resize', setOffset);
  // Đo lại sau khi table render xong
  setTimeout(setOffset, 300);
})();
</script>
