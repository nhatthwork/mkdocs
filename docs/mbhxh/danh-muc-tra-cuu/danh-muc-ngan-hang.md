---
title: Danh sách ngân hàng
hide:
  - toc
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

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
  --highlight:   #fff176;
  --shadow-xs:   0 1px 3px rgba(27,32,80,0.06);
  --shadow-sm:   0 2px 10px rgba(27,32,80,0.07);
  --shadow-md:   0 4px 20px rgba(27,32,80,0.09);
  --radius:      10px;
}

[data-md-color-scheme="slate"],
html[data-theme='dark'] {
  --navy:        #e0e3ff;
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
  --highlight:   #5a4a00;
  --shadow-xs:   0 1px 3px rgba(0,0,0,0.2);
  --shadow-sm:   0 2px 10px rgba(0,0,0,0.25);
  --shadow-md:   0 4px 20px rgba(0,0,0,0.3);
}

#tbl-wrap * { box-sizing: border-box; }
#tbl-wrap {
  font-family: 'Be Vietnam Pro', sans-serif;
  color: var(--text);
  width: 100%;
}

.tbl-toolbar {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

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

.tbl-count-badge {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-sub);
  background: var(--surface3);
  border: 1px solid var(--border);
  border-radius: 100px;
  padding: 5px 12px;
  white-space: nowrap;
}

.tbl-scroll {
  width: 100%;
  overflow-x: auto;
  border-radius: 12px;
  border: 1.5px solid var(--border);
  box-shadow: var(--shadow-md);
  background: var(--surface);
}

.tbl-main {
  width: 100%;
  border-collapse: collapse;
  font-size: 13.5px;
  background: var(--surface);
  table-layout: auto;
}

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

.tbl-main thead tr.tbl-filter-row td {
  padding: 7px 10px;
  background: var(--surface3);
  border-bottom: 1.5px solid var(--border);
}
.tbl-main thead tr.tbl-filter-row td input {
  width: 100%;
  padding: 6px 9px;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 12px;
  color: var(--text);
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: 7px;
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.tbl-main thead tr.tbl-filter-row td input::placeholder { color: var(--text-muted); }
.tbl-main thead tr.tbl-filter-row td input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 2px rgba(79,86,214,0.10);
}

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
  line-height: 1.55;
}

/* STT column */
.col-stt {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11.5px;
  color: var(--text-muted);
  font-weight: 500;
  width: 60px;
  text-align: center;
}

/* Mã ngân hàng */
.col-ma {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12.5px;
  font-weight: 600;
  color: var(--accent);
  width: 130px;
}

/* Tên ngân hàng */
.col-ten {
  font-weight: 500;
}

.tbl-hl {
  background: var(--highlight);
  border-radius: 3px;
  padding: 0 2px;
  font-weight: 700;
}

.tbl-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
  padding: 0 2px;
}
.tbl-last-updated { font-size: 11.5px; color: var(--text-muted); font-weight: 500; }
.tbl-last-updated strong { color: var(--text-sub); font-weight: 600; }

.tbl-empty { text-align: center; padding: 48px 20px; color: var(--text-muted); font-size: 13.5px; }
.tbl-empty-icon { font-size: 28px; margin-bottom: 8px; }

.tbl-loading { display: flex; align-items: center; gap: 10px; padding: 32px 22px; color: var(--text-muted); font-size: 13.5px; }
.tbl-spinner {
  width: 18px; height: 18px;
  border: 2px solid var(--border); border-top-color: var(--accent);
  border-radius: 50%;
  animation: tbl-spin 0.7s linear infinite; flex-shrink: 0;
}
@keyframes tbl-spin { to { transform: rotate(360deg); } }

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
      <input type="text" id="global-search" class="tbl-search-input" placeholder="Tìm kiếm ngân hàng...">
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
    <div class="tbl-last-updated">Last updated on <strong>Apr 24, 2026</strong></div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js"></script>
<script>
let rawRows = [];

async function loadSheetData() {
  const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQuDInWFBfgY_SMwGrMv9rUzuNwwnlUEtj6unBX0E7nTzOu3ab8TNUSDAXKE8YPUA/pub?gid=1727961227&single=true&output=csv';
  try {
    const response = await fetch(url);
    const text = await response.text();
    const results = Papa.parse(text, { header: false, skipEmptyLines: true });
    // Bỏ dòng header (dòng 0 là STT, Mã ngân hàng, Tên ngân hàng)
    rawRows = results.data.slice(1);
    renderTable();
  } catch (err) {
    document.querySelector('.tbl-scroll').innerHTML =
      `<div class="tbl-loading" style="color:#c0392b;">⚠️ Không thể tải dữ liệu. Vui lòng thử lại.</div>`;
    document.getElementById('tbl-count').textContent = 'Lỗi';
  }
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

function renderTable() {
  const scroll = document.querySelector('.tbl-scroll');
  const table = document.createElement('table');
  table.className = 'tbl-main';

  const thead = document.createElement('thead');

  // Header row
  const trHead = document.createElement('tr');
  trHead.className = 'tbl-head-row';
  ['STT', 'Mã ngân hàng', 'Tên ngân hàng'].forEach(h => {
    const th = document.createElement('th');
    th.textContent = h;
    trHead.appendChild(th);
  });

  // Filter row
  const trFilter = document.createElement('tr');
  trFilter.className = 'tbl-filter-row';
  ['Lọc STT...', 'Lọc mã...', 'Lọc tên ngân hàng...'].forEach(placeholder => {
    const td = document.createElement('td');
    const input = document.createElement('input');
    input.placeholder = placeholder;
    input.oninput = applyFilter;
    td.appendChild(input);
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

function applyFilter() {
  const table = document.querySelector('.tbl-main');
  if (!table) return;

  const filters = Array.from(table.querySelectorAll('.tbl-filter-row td input'))
    .map(el => el.value.trim().toLowerCase());
  const globalKw = (document.getElementById('global-search')?.value || '').trim().toLowerCase();

  const tbody = table.querySelector('tbody');
  tbody.innerHTML = '';
  let count = 0;

  rawRows.forEach(row => {
    const stt  = (row[0] || '').toString();
    const ma   = (row[1] || '').toString();
    const ten  = (row[2] || '').toString();
    const cells = [stt, ma, ten];

    const matchCol = cells.every((cell, i) => !filters[i] || cell.toLowerCase().includes(filters[i]));
    const matchGlobal = !globalKw || cells.some(c => c.toLowerCase().includes(globalKw));

    if (matchCol && matchGlobal) {
      count++;
      const tr = document.createElement('tr');

      // STT
      const tdStt = document.createElement('td');
      tdStt.className = 'col-stt';
      tdStt.innerHTML = highlightMatch(stt, [filters[0], globalKw]);
      tr.appendChild(tdStt);

      // Mã ngân hàng
      const tdMa = document.createElement('td');
      tdMa.className = 'col-ma';
      tdMa.innerHTML = highlightMatch(ma, [filters[1], globalKw]);
      tr.appendChild(tdMa);

      // Tên ngân hàng
      const tdTen = document.createElement('td');
      tdTen.className = 'col-ten';
      tdTen.innerHTML = highlightMatch(ten, [filters[2], globalKw]);
      tr.appendChild(tdTen);

      tbody.appendChild(tr);
    }
  });

  if (count === 0) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.colSpan = 3;
    td.innerHTML = `<div class="tbl-empty"><div class="tbl-empty-icon">🔎</div>Không tìm thấy kết quả phù hợp.</div>`;
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  const badge = document.getElementById('tbl-count');
  if (badge) badge.textContent = count > 0 ? `${count} kết quả` : 'Không có kết quả';
}

loadSheetData();
</script>
