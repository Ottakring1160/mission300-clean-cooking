/* ============================================
   Mission 300 — Clean Cooking for Africa
   Application Logic v3
   ============================================ */

const FLAG_CDN = 'https://flagcdn.com/w40/';

function flagUrl(iso) {
  return `${FLAG_CDN}${iso}.png`;
}

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroAnimations();
  renderCountryCards();
  renderAccessChart();
  renderInvestmentChart();
  renderBarriers();
  renderTechCards();
  initFilters();
  initSearch();
  initModal();
  initScrollAnimations();
});

/* ========== Navigation ========== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => links.classList.remove('open'));
  });
}

/* ========== Hero Animations ========== */
function initHeroAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        animateRings();
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(document.getElementById('hero'));
}

function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count);
    const isDecimal = target % 1 !== 0;
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      el.textContent = isDecimal ? current.toFixed(1) : Math.round(current);
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

function animateRings() {
  document.querySelectorAll('.ring-fill').forEach(ring => {
    const offset = parseFloat(ring.dataset.offset);
    const circumference = 226;
    const target = circumference - (circumference * offset / 100);
    setTimeout(() => {
      ring.style.strokeDashoffset = target;
    }, 300);
  });
}

/* ========== Country Cards ========== */
function renderCountryCards() {
  const grid = document.getElementById('countryGrid');
  grid.innerHTML = countries.map((c, i) => {
    const targetDisplay = c.target2030 != null ? `${c.target2030}%` : 'TBD';
    const gapDisplay = c.gap != null ? `${c.gap}pp` : 'TBD';
    const investDisplay = c.totalInvestment != null ? `$${c.totalInvestment}M` : 'TBD';
    const cohortClass = c.cohort === 'Cohort 1' ? 'c1' : 'c2';
    const barWidth = Math.min(c.currentAccess, 100);
    const targetWidth = c.target2030 != null ? Math.min(c.target2030, 100) : 0;

    return `
      <div class="country-card" data-cohort="${c.cohort}" data-country="${c.country}" data-region="${c.region}" data-language="${c.language}" style="transition-delay: ${Math.min(i * 30, 300)}ms">
        <div class="country-card-header">
          <div style="display:flex;align-items:center;gap:10px">
            <img class="flag-img" src="${flagUrl(c.iso)}" alt="${c.country} flag" loading="lazy">
            <h3>${c.country}</h3>
          </div>
          <span class="cohort-badge ${cohortClass}">${c.cohort}</span>
        </div>
        <div class="country-card-meta">
          <span class="card-meta-tag">${c.region}</span>
          <span class="card-meta-tag">${c.language}</span>
        </div>
        <div class="country-card-stats">
          <div class="card-stat">
            <span class="card-stat-label">Current Access</span>
            <span class="card-stat-value current">${c.currentAccess}%</span>
          </div>
          <div class="card-stat">
            <span class="card-stat-label">2030 Target</span>
            <span class="card-stat-value target">${targetDisplay}</span>
          </div>
          <div class="card-stat">
            <span class="card-stat-label">Gap</span>
            <span class="card-stat-value gap">${gapDisplay}</span>
          </div>
          <div class="card-stat">
            <span class="card-stat-label">Investment</span>
            <span class="card-stat-value invest">${investDisplay}</span>
          </div>
        </div>
        <div class="country-card-bar">
          <div class="country-card-bar-target" style="width: ${targetWidth}%"></div>
          <div class="country-card-bar-current" style="width: ${barWidth}%"></div>
        </div>
        <div class="country-card-tech">${c.techFocus}</div>
      </div>
    `;
  }).join('');
}

/* ========== Access Chart ========== */
function renderAccessChart() {
  const chart = document.getElementById('accessChart');
  const sorted = [...countries]
    .filter(c => c.target2030 != null)
    .sort((a, b) => b.target2030 - a.target2030);

  chart.innerHTML = sorted.map(c => `
    <div class="bar-row">
      <span class="bar-label"><img class="flag-img-sm" src="${flagUrl(c.iso)}" alt="" loading="lazy"> ${c.country}</span>
      <div class="bar-track">
        <div class="bar-fill-target" data-width="${c.target2030}"></div>
        <div class="bar-fill-current" data-width="${c.currentAccess}"></div>
      </div>
      <span class="bar-value">${c.currentAccess}% / ${c.target2030}%</span>
    </div>
  `).join('');
}

/* ========== Investment Chart ========== */
function renderInvestmentChart() {
  const chart = document.getElementById('investmentChart');
  const withInvestment = countries
    .filter(c => c.totalInvestment != null && c.totalInvestment > 0)
    .sort((a, b) => b.totalInvestment - a.totalInvestment);

  const maxInvest = Math.max(...withInvestment.map(c => c.totalInvestment));

  chart.innerHTML = withInvestment.map(c => {
    const pubWidth = c.publicFinance != null ? (c.publicFinance / maxInvest) * 100 : 0;
    const privWidth = c.privateFinance != null ? (c.privateFinance / maxInvest) * 100 : 0;

    return `
      <div class="invest-row">
        <span class="bar-label"><img class="flag-img-sm" src="${flagUrl(c.iso)}" alt="" loading="lazy"> ${c.country}</span>
        <div class="invest-bar-track">
          <div class="invest-bar-public" data-width="${pubWidth}"></div>
          <div class="invest-bar-private" data-width="${privWidth}"></div>
        </div>
        <span class="invest-bar-value">$${c.totalInvestment}M</span>
      </div>
    `;
  }).join('');
}

/* ========== Barriers ========== */
function renderBarriers() {
  const grid = document.getElementById('barriersGrid');
  grid.innerHTML = barrierCategories.map(b => `
    <div class="barrier-card">
      <div class="barrier-icon">${b.icon}</div>
      <h3>${b.title}</h3>
      <p>${b.description}</p>
      <div class="barrier-count">Cited by <span>${b.count}</span> of 30 countries</div>
    </div>
  `).join('');
}

/* ========== Technology Cards ========== */
function renderTechCards() {
  const grid = document.getElementById('techGrid');
  grid.innerHTML = techCategories.map(t => `
    <div class="tech-card">
      <div class="tech-card-header">
        <div class="tech-dot" style="background: ${t.color}"></div>
        <h3>${t.title}</h3>
      </div>
      <p>${t.description}</p>
      <div class="tech-countries">
        ${t.countries.map(name => {
          const c = countries.find(x => x.country === name);
          const iso = c ? c.iso : '';
          return `<span class="tech-country-tag">${iso ? `<img class="flag-img-sm" src="${flagUrl(iso)}" alt="" loading="lazy"> ` : ''}${name}</span>`;
        }).join('')}
      </div>
      <div class="tech-country-count"><span>${t.countries.length}</span> countries</div>
    </div>
  `).join('');
}

/* ========== Multi-Filters ========== */
const activeFilters = {
  cohort: 'all',
  region: 'all',
  language: 'all'
};

function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.type;
      const value = btn.dataset.filter;

      // Update active state within the same filter group
      btn.closest('.filter-bar').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      activeFilters[type] = value;
      applyFilters();
    });
  });
}

function applyFilters() {
  const searchTerm = document.getElementById('countrySearch').value.toLowerCase();
  const cards = document.querySelectorAll('.country-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const matchesCohort = activeFilters.cohort === 'all' || card.dataset.cohort === activeFilters.cohort;
    const matchesRegion = activeFilters.region === 'all' || card.dataset.region === activeFilters.region;
    const matchesLanguage = activeFilters.language === 'all' || card.dataset.language === activeFilters.language;
    const matchesSearch = searchTerm === '' || card.dataset.country.toLowerCase().includes(searchTerm);

    const visible = matchesCohort && matchesRegion && matchesLanguage && matchesSearch;
    card.style.display = visible ? '' : 'none';
    if (visible) visibleCount++;
  });

  updateFilterSummary(visibleCount);
}

function updateFilterSummary(count) {
  const summary = document.getElementById('filterSummary');
  const parts = [];
  if (activeFilters.cohort !== 'all') parts.push(activeFilters.cohort);
  if (activeFilters.region !== 'all') parts.push(activeFilters.region);
  if (activeFilters.language !== 'all') parts.push(activeFilters.language);

  const searchTerm = document.getElementById('countrySearch').value.trim();
  if (searchTerm) parts.push(`"${searchTerm}"`);

  if (parts.length === 0) {
    summary.innerHTML = '';
  } else {
    summary.innerHTML = `Showing <strong>${count}</strong> ${count === 1 ? 'country' : 'countries'} matching: ${parts.join(' + ')}`;
  }
}

/* ========== Search ========== */
function initSearch() {
  document.getElementById('countrySearch').addEventListener('input', applyFilters);
}

/* ========== Modal ========== */
function initModal() {
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');
  const content = document.getElementById('modalContent');

  document.getElementById('countryGrid').addEventListener('click', (e) => {
    const card = e.target.closest('.country-card');
    if (!card) return;

    const data = countries.find(c => c.country === card.dataset.country);
    if (!data) return;

    renderModal(data, content);
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function renderModal(data, container) {
  const val = (v, suffix) => v != null ? `${v}${suffix || ''}` : 'N/A';
  const money = (v) => v != null ? `$${v}M` : 'N/A';

  container.innerHTML = `
    <div class="modal-header">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:8px">
        <img class="flag-img-lg" src="${flagUrl(data.iso)}" alt="${data.country} flag">
        <h2>${data.country}</h2>
      </div>
      <div class="modal-meta">
        <span class="modal-tag">${data.cohort}</span>
        <span class="modal-tag">${data.region}</span>
        <span class="modal-tag">${data.language}</span>
        ${data.targetYear ? `<span class="modal-tag">Target: ${data.targetYear}</span>` : ''}
      </div>
    </div>

    <div class="modal-stats">
      <div class="modal-stat">
        <div class="modal-stat-label">Current Access</div>
        <div class="modal-stat-value" style="color: var(--gold)">${val(data.currentAccess, '%')}</div>
      </div>
      <div class="modal-stat">
        <div class="modal-stat-label">2030 Target</div>
        <div class="modal-stat-value" style="color: var(--green)">${val(data.target2030, '%')}</div>
      </div>
      <div class="modal-stat">
        <div class="modal-stat-label">Gap to Close</div>
        <div class="modal-stat-value" style="color: var(--red)">${val(data.gap, 'pp')}</div>
      </div>
      <div class="modal-stat">
        <div class="modal-stat-label">Biomass Dependency</div>
        <div class="modal-stat-value">${val(data.biomassDep, '%')}</div>
      </div>
      <div class="modal-stat">
        <div class="modal-stat-label">Total Investment</div>
        <div class="modal-stat-value" style="color: var(--blue)">${money(data.totalInvestment)}</div>
      </div>
      <div class="modal-stat">
        <div class="modal-stat-label">Target Growth Rate</div>
        <div class="modal-stat-value">${val(data.targetGrowth, '%/yr')}</div>
      </div>
      <div class="modal-stat">
        <div class="modal-stat-label">Public Finance</div>
        <div class="modal-stat-value">${money(data.publicFinance)}</div>
      </div>
      <div class="modal-stat">
        <div class="modal-stat-label">Private Finance</div>
        <div class="modal-stat-value">${money(data.privateFinance)}</div>
      </div>
    </div>

    <div class="modal-section">
      <h3>Technology Focus</h3>
      <p>${data.techFocus}</p>
    </div>

    <div class="modal-section">
      <h3>Strategy Status</h3>
      <p>${data.strategyStatus}</p>
    </div>

    <div class="modal-section">
      <h3>Key Barriers</h3>
      <p>${data.barriers}</p>
    </div>
  `;
}

/* ========== Scroll Animations ========== */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        entry.target.querySelectorAll('[data-width]').forEach(bar => {
          setTimeout(() => {
            bar.style.width = bar.dataset.width + '%';
          }, 100);
        });
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  });

  document.querySelectorAll('.overview-card, .country-card, .barrier-card, .tech-card, [data-aos]').forEach(el => {
    observer.observe(el);
  });

  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('[data-width]').forEach(bar => {
          setTimeout(() => {
            bar.style.width = bar.dataset.width + '%';
          }, 200);
        });
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.bar-chart, .investment-chart, .invest-pct-bar, .overview-card-bar').forEach(el => {
    barObserver.observe(el);
  });
}
