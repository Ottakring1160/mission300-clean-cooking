/* ============================================
   Mission 300 — National Energy Compact Platform
   Shared Utilities
   ============================================ */

const FLAG_CDN = 'https://flagcdn.com/w40/';

function flagUrl(iso) {
  return `${FLAG_CDN}${iso}.png`;
}

/* ========== Formatting ========== */
function val(v, suffix) {
  return v != null ? `${v}${suffix || ''}` : 'N/A';
}

function money(v) {
  return v != null ? `$${v}M` : 'N/A';
}

function moneyB(v) {
  if (v == null) return 'N/A';
  return v >= 1000 ? `$${(v / 1000).toFixed(1)}B` : `$${v}M`;
}

function pct(v) {
  return v != null ? `${v}%` : 'N/A';
}

function num(v) {
  return v != null ? v.toLocaleString() : 'N/A';
}

/* ========== URL Helpers ========== */
function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function setQueryParam(name, value) {
  const params = new URLSearchParams(window.location.search);
  if (value) {
    params.set(name, value);
  } else {
    params.delete(name);
  }
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  history.replaceState(null, '', newUrl);
}

/* ========== Data Helpers ========== */
function getCountryByISO(iso) {
  return countries.find(c => c.iso === iso);
}

function getCountryByName(name) {
  return countries.find(c => c.country === name);
}

/* ========== Filter Logic ========== */
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

      btn.closest('.filter-bar').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      activeFilters[type] = value;
      applyFilters();
    });
  });
}

function applyFilters() {
  const searchEl = document.getElementById('countrySearch');
  const searchTerm = searchEl ? searchEl.value.toLowerCase() : '';
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
  if (!summary) return;

  const parts = [];
  if (activeFilters.cohort !== 'all') parts.push(activeFilters.cohort);
  if (activeFilters.region !== 'all') parts.push(activeFilters.region);
  if (activeFilters.language !== 'all') parts.push(activeFilters.language);

  const searchEl = document.getElementById('countrySearch');
  const searchTerm = searchEl ? searchEl.value.trim() : '';
  if (searchTerm) parts.push(`"${searchTerm}"`);

  if (parts.length === 0) {
    summary.innerHTML = '';
  } else {
    summary.innerHTML = `Showing <strong>${count}</strong> ${count === 1 ? 'country' : 'countries'} matching: ${parts.join(' + ')}`;
  }
}

function initSearch() {
  const el = document.getElementById('countrySearch');
  if (el) el.addEventListener('input', applyFilters);
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

/* ========== Pillar Definitions ========== */
const PILLARS = {
  infrastructure:       { name: 'Infrastructure',       icon: '\u26A1', color: '#FFB800' },
  regionalIntegration:  { name: 'Regional Integration', icon: '\uD83C\uDF10', color: '#065A89' },
  lastMileAccess:       { name: 'Last-Mile Access',     icon: '\uD83C\uDFE0', color: '#9BBE1D' },
  privateSector:        { name: 'Private Sector',       icon: '\uD83D\uDCBC', color: '#5A3A8E' },
  utilityReform:        { name: 'Utility Reform',       icon: '\u2699\uFE0F', color: '#DD2E2B' }
};

/* ========== Aggregation ========== */
function computeAggregates() {
  const agg = {
    totalCountries: countries.length,
    totalInvestment: 0,
    avgElectricityAccess: null,
    avgCleanCookingAccess: 0,
    countriesWithCompact: 0,
    byRegion: {},
    byCohort: {}
  };

  let ccSum = 0, ccCount = 0;
  let investSum = 0;

  countries.forEach(c => {
    // Clean cooking stats
    if (c.currentAccess != null) { ccSum += c.currentAccess; ccCount++; }
    if (c.totalInvestment != null) investSum += c.totalInvestment;
    if (c.compact) agg.countriesWithCompact++;

    // By region
    if (!agg.byRegion[c.region]) agg.byRegion[c.region] = { count: 0, countries: [] };
    agg.byRegion[c.region].count++;
    agg.byRegion[c.region].countries.push(c.country);

    // By cohort
    if (!agg.byCohort[c.cohort]) agg.byCohort[c.cohort] = { count: 0 };
    agg.byCohort[c.cohort].count++;
  });

  agg.avgCleanCookingAccess = ccCount > 0 ? Math.round(ccSum / ccCount) : 0;
  agg.totalInvestment = investSum;

  return agg;
}
