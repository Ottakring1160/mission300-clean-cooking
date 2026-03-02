/* ============================================
   Mission 300 — National Energy Compact Platform
   Shared Components (Header/Footer/Nav)
   ============================================ */

/* Base URL for resolving paths — works on GitHub Pages */
const BASE_URL = (function() {
  const path = window.location.pathname;
  // If we're in a subfolder, find the root
  const knownFolders = ['/countries/', '/country/', '/compare/', '/reports/', '/guide/'];
  for (const folder of knownFolders) {
    const idx = path.indexOf(folder);
    if (idx !== -1) return path.substring(0, idx) + '/';
  }
  // We're at the root
  return path.endsWith('/') ? path : path.substring(0, path.lastIndexOf('/') + 1);
})();

function resolvePath(relativePath) {
  return BASE_URL + relativePath;
}

/* Detect which page is active */
function getActivePage() {
  const path = window.location.pathname;
  if (path.includes('/countries/')) return 'countries';
  if (path.includes('/country/')) return 'countries';
  if (path.includes('/compare/')) return 'compare';
  if (path.includes('/reports/')) return 'reports';
  if (path.includes('/guide/')) return 'guide';
  return 'dashboard';
}

/* ========== Header / Navbar ========== */
function injectHeader() {
  const container = document.getElementById('site-header');
  if (!container) return;

  const active = getActivePage();
  const navClass = (page) => page === active ? ' class="active"' : '';

  container.innerHTML = `
    <nav id="navbar" class="scrolled">
      <div class="nav-container">
        <a href="${resolvePath('')}" class="nav-logo">
          <svg class="logo-icon" viewBox="0 0 40 40" width="36" height="36">
            <circle cx="20" cy="20" r="19" fill="none" stroke="#FFB800" stroke-width="2.5"/>
            <text x="20" y="26" text-anchor="middle" font-size="18" font-weight="800" fill="#FFB800" font-family="Barlow Condensed, sans-serif">M</text>
          </svg>
          <div>
            <span class="logo-text">Mission <strong>300</strong></span>
            <span class="logo-org">Sustainable Energy for All</span>
          </div>
        </a>
        <ul class="nav-links" id="navLinks">
          <li><a href="${resolvePath('')}"${navClass('dashboard')}>Dashboard</a></li>
          <li><a href="${resolvePath('countries/')}"${navClass('countries')}>Countries</a></li>
          <li><a href="${resolvePath('compare/')}"${navClass('compare')}>Compare</a></li>
          <li><a href="${resolvePath('reports/')}"${navClass('reports')}>Reports</a></li>
          <li><a href="${resolvePath('guide/')}"${navClass('guide')} style="color:var(--yellow)">Guide</a></li>
        </ul>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  `;

  initNavbar();
}

/* ========== Footer ========== */
function injectFooter() {
  const container = document.getElementById('site-footer');
  if (!container) return;

  container.innerHTML = `
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <a href="${resolvePath('')}" class="footer-logo">
                <svg viewBox="0 0 40 40" width="32" height="32">
                  <circle cx="20" cy="20" r="19" fill="none" stroke="#FFB800" stroke-width="2"/>
                  <text x="20" y="26" text-anchor="middle" font-size="18" font-weight="800" fill="#FFB800" font-family="Barlow Condensed, sans-serif">M</text>
                </svg>
                <span>Mission <strong>300</strong></span>
              </a>
              <p>National Energy Compact Platform — tracking progress across 30 African nations toward universal energy access. An initiative by Sustainable Energy for All (SEforALL).</p>
            </div>
            <div class="footer-nav">
              <h4>Platform</h4>
              <ul>
                <li><a href="${resolvePath('')}">Dashboard</a></li>
                <li><a href="${resolvePath('countries/')}">Countries</a></li>
                <li><a href="${resolvePath('compare/')}">Compare</a></li>
                <li><a href="${resolvePath('reports/')}">Reports</a></li>
              </ul>
            </div>
            <div class="footer-nav">
              <h4>Resources</h4>
              <ul>
                <li><a href="${resolvePath('guide/')}">User Guide</a></li>
              </ul>
            </div>
            <div class="footer-source">
              <h4>Data Source</h4>
              <p>Analysis based on National Energy Compact documents submitted to the Africa Energy Summit by 30 participating countries across 2 cohorts.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <p>Mission 300 National Energy Compact Platform &mdash; Sustainable Energy for All (SEforALL)</p>
        </div>
      </div>
    </footer>
  `;
}

/* ========== Navbar Behavior ========== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!navbar || !toggle || !links) return;

  // On sub-pages, navbar is always "scrolled" style (solid background)
  const isHomePage = getActivePage() === 'dashboard';

  if (isHomePage) {
    // On dashboard, toggle scrolled on scroll
    navbar.classList.remove('scrolled');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
  }
  // Sub-pages keep the "scrolled" class set in HTML

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => links.classList.remove('open'));
  });
}

/* ========== Breadcrumbs ========== */
function renderBreadcrumbs(containerId, crumbs) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = crumbs.map((crumb, i) => {
    const isLast = i === crumbs.length - 1;
    if (isLast) {
      return `<span class="breadcrumb-current">${crumb.label}</span>`;
    }
    return `<a href="${crumb.href}" class="breadcrumb-link">${crumb.label}</a>`;
  }).join('<span class="breadcrumb-sep">/</span>');
}

/* ========== Initialize ========== */
function initComponents() {
  injectHeader();
  injectFooter();
}

/* ========== Active nav link styling ========== */
document.addEventListener('DOMContentLoaded', () => {
  // Style active nav links
  document.querySelectorAll('.nav-links a.active').forEach(el => {
    el.style.color = 'var(--yellow)';
    el.style.fontWeight = '700';
  });
});
