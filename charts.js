/* ============================================
   Mission 300 — National Energy Compact Platform
   Reusable Chart Rendering
   ============================================ */

/* ========== Access Bar Chart ========== */
function renderAccessChart(containerId) {
  const chart = document.getElementById(containerId);
  if (!chart) return;

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
function renderInvestmentChart(containerId) {
  const chart = document.getElementById(containerId);
  if (!chart) return;

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

/* ========== Country Cards ========== */
function renderCountryCards(containerId, options = {}) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  const { linkToProfile = false } = options;

  grid.innerHTML = countries.map((c, i) => {
    const targetDisplay = c.target2030 != null ? `${c.target2030}%` : 'TBD';
    const gapDisplay = c.gap != null ? `${c.gap}pp` : 'TBD';
    const investDisplay = c.totalInvestment != null ? `$${c.totalInvestment}M` : 'TBD';
    const cohortClass = c.cohort === 'Cohort 1' ? 'c1' : 'c2';
    const barWidth = Math.min(c.currentAccess, 100);
    const targetWidth = c.target2030 != null ? Math.min(c.target2030, 100) : 0;
    const hasCompact = !!c.compact;

    // Pillar status indicators
    const pillarDots = Object.entries(PILLARS).map(([key, p]) => {
      // Check for pillar-structured data OR legacy compact data mapped to pillars
      let hasData = false;
      if (hasCompact) {
        if (c.compact[key]) {
          hasData = true;
        } else if (key === 'lastMileAccess' && (c.compact.targets || c.compact.biomassByRegion)) {
          hasData = true; // Legacy compact has clean cooking (last-mile) data
        } else if (key === 'privateSector' && (c.compact.investmentBreakdown || c.totalInvestment)) {
          hasData = true; // Has investment data
        }
      }
      return `<span class="pillar-dot" style="background:${hasData ? p.color : 'var(--gray-200)'}" title="${p.name}${hasData ? '' : ' — pending'}"></span>`;
    }).join('');

    // If linking to profile page, wrap in an anchor
    const tag = linkToProfile ? 'a' : 'div';
    const href = linkToProfile ? `href="${resolvePath('country/')}?id=${c.iso}"` : '';
    const cursor = linkToProfile ? 'style="cursor:pointer;text-decoration:none;color:inherit"' : '';

    return `
      <${tag} ${href} class="country-card" data-cohort="${c.cohort}" data-country="${c.country}" data-region="${c.region}" data-language="${c.language}" ${cursor} style="transition-delay: ${Math.min(i * 30, 300)}ms">
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
          ${hasCompact ? '<span class="card-meta-tag" style="background:var(--green-bg);color:var(--green-dark)">Full Profile</span>' : ''}
        </div>
        <div class="country-card-pillars">
          <span class="pillar-dots-label">Pillars</span>
          <div class="pillar-dots">${pillarDots}</div>
        </div>
        <div class="country-card-stats">
          <div class="card-stat">
            <span class="card-stat-label">CC Access</span>
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
            <span class="card-stat-label">CC Investment</span>
            <span class="card-stat-value invest">${investDisplay}</span>
          </div>
        </div>
        <div class="country-card-bar">
          <div class="country-card-bar-target" style="width: ${targetWidth}%"></div>
          <div class="country-card-bar-current" style="width: ${barWidth}%"></div>
        </div>
        <div class="country-card-tech">${c.techFocus}</div>
      </${tag}>
    `;
  }).join('');
}

/* ========== Barrier Cards ========== */
function renderBarriers(containerId) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

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
function renderTechCards(containerId) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

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

/* ========== Compact Profile Rendering ========== */
function renderCompactProfile(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container || !data.compact) return;

  const c = data.compact;

  const targetsHTML = c.targets.map(t =>
    `<div class="compact-target">
      <div class="compact-target-year">${t.year}</div>
      <div class="compact-target-bar-wrap">
        <div class="compact-target-bar" style="width:${t.access}%"></div>
      </div>
      <div class="compact-target-pct">${t.access}%</div>
      <div class="compact-target-gap">${t.gap}pp gap</div>
    </div>`
  ).join('');

  const biomassHTML = c.biomassByRegion.map(b =>
    `<div class="compact-biomass-row">
      <span class="compact-biomass-label">${b.region}</span>
      <div class="compact-biomass-bar-wrap"><div class="compact-biomass-bar" style="width:${b.pct}%"></div></div>
      <span class="compact-biomass-pct">${b.pct}%</span>
    </div>`
  ).join('');

  const techHTML = c.technologies.map(t =>
    `<div class="compact-tech-item">
      <div class="compact-tech-name">${t.name}</div>
      <div class="compact-tech-desc">${t.desc}</div>
    </div>`
  ).join('');

  const strategyHTML = c.strategy.map(s =>
    `<div class="compact-strategy-row">
      <span class="compact-strategy-item">${s.item}</span>
      <span class="compact-strategy-status">${s.status}</span>
    </div>`
  ).join('');

  const barriersHTML = c.barriers.map(b =>
    `<div class="compact-barrier-item">
      <div class="compact-barrier-title">${b.title}</div>
      <div class="compact-barrier-desc">${b.desc}</div>
    </div>`
  ).join('');

  const deployInst = c.deployment.institutions.map(i =>
    `<span class="compact-deploy-tag">${i.type}: <strong>${i.count.toLocaleString()}</strong></span>`
  ).join('');

  const pubPct = data.totalInvestment > 0 ? Math.round(data.publicFinance / data.totalInvestment * 100) : 50;
  const privPct = 100 - pubPct;

  container.innerHTML = `
    <div class="compact-header">
      <div class="compact-header-top">
        <img class="flag-img-lg" src="${flagUrl(data.iso)}" alt="${data.country} flag">
        <div>
          <h2>${data.country}</h2>
          <div class="compact-header-sub">${c.population} &middot; ${c.income}</div>
        </div>
      </div>
      <div class="modal-meta">
        <span class="modal-tag">${data.cohort}</span>
        <span class="modal-tag">${data.region}</span>
        <span class="modal-tag">${data.language}</span>
        <span class="modal-tag compact-tag-source">${c.sourceType}</span>
      </div>
    </div>

    <div class="compact-section">
      <h3 class="compact-section-title">Key Clean Cooking Statistics</h3>
      <div class="modal-stats">
        <div class="modal-stat">
          <div class="modal-stat-label">Current Access</div>
          <div class="modal-stat-value" style="color:var(--yellow-dark)">${val(data.currentAccess, '%')}</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-label">2030 Target</div>
          <div class="modal-stat-value" style="color:var(--green)">${val(data.target2030, '%')}</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-label">Gap to Close</div>
          <div class="modal-stat-value" style="color:var(--red)">${val(data.gap, 'pp')}</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-label">Current Growth</div>
          <div class="modal-stat-value">${val(data.currentGrowth, '%/yr')}</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-label">Target Growth</div>
          <div class="modal-stat-value" style="color:var(--green)">${val(data.targetGrowth, '%/yr')}</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-label">Acceleration</div>
          <div class="modal-stat-value">${val(data.accelFactor, 'x')}</div>
        </div>
      </div>
    </div>

    <div class="compact-section">
      <h3 class="compact-section-title">Targets & Timeline</h3>
      <div class="compact-current-bar">
        <span class="compact-current-label">Current: ${data.currentAccess}%</span>
        <div class="compact-current-track"><div class="compact-current-fill" style="width:${data.currentAccess}%"></div></div>
      </div>
      ${targetsHTML}
    </div>

    <div class="compact-section">
      <h3 class="compact-section-title">Biomass Dependency by Region</h3>
      <p class="compact-sub-text">Primary cooking fuels: ${c.primaryFuels}. ${c.gasUsage}</p>
      ${biomassHTML}
    </div>

    <div class="compact-section">
      <h3 class="compact-section-title">Clean Cooking Investment</h3>
      <div class="compact-invest-header">
        <div class="compact-invest-total">
          <span class="compact-invest-total-label">Compact Investment</span>
          <span class="compact-invest-total-value">${money(data.totalInvestment)}</span>
        </div>
        <div class="compact-invest-total">
          <span class="compact-invest-total-label">Full NCCS Cost (2024-2034)</span>
          <span class="compact-invest-total-value">$${(c.nccsCost / 1000).toFixed(1)}B</span>
        </div>
      </div>
      <div class="compact-invest-bar">
        <div class="compact-invest-pub" style="width:${pubPct}%"><span>Public ${pubPct}%</span></div>
        <div class="compact-invest-priv" style="width:${privPct}%"><span>Private ${privPct}%</span></div>
      </div>
      <div class="compact-invest-amounts">
        <span>Public: ${money(data.publicFinance)}</span>
        <span>Private: ${money(data.privateFinance)}</span>
      </div>
    </div>

    <div class="compact-section">
      <h3 class="compact-section-title">Clean Cooking Deployment</h3>
      <div class="compact-deploy-stat">
        <span class="compact-deploy-num">${c.deployment.households.toLocaleString()}</span>
        <span class="compact-deploy-label">Households with clean cooking connections</span>
      </div>
      <div class="compact-deploy-tags">${deployInst}</div>
    </div>

    <div class="compact-section">
      <h3 class="compact-section-title">Technology Pathways</h3>
      <div class="compact-tech-grid">${techHTML}</div>
    </div>

    <div class="compact-section">
      <h3 class="compact-section-title">Strategy & Policy Milestones</h3>
      <div class="compact-strategy-list">${strategyHTML}</div>
    </div>

    <div class="compact-section">
      <h3 class="compact-section-title">Key Barriers</h3>
      <div class="compact-barriers-grid">${barriersHTML}</div>
    </div>

    <div class="compact-source">
      Source: ${c.sourceName} &middot; ${c.sourceType}
    </div>
  `;
}

/* ========== Simple Profile (Legacy Countries) ========== */
function renderSimpleProfile(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="compact-header">
      <div class="compact-header-top">
        <img class="flag-img-lg" src="${flagUrl(data.iso)}" alt="${data.country} flag">
        <div>
          <h2>${data.country}</h2>
          <div class="compact-header-sub">${data.region} &middot; ${data.language}</div>
        </div>
      </div>
      <div class="modal-meta">
        <span class="modal-tag">${data.cohort}</span>
        <span class="modal-tag">${data.region}</span>
        <span class="modal-tag">${data.language}</span>
        ${data.targetYear ? `<span class="modal-tag">Target: ${data.targetYear}</span>` : ''}
      </div>
    </div>

    <div class="compact-section">
      <h3 class="compact-section-title">Clean Cooking Statistics</h3>
      <div class="modal-stats">
        <div class="modal-stat">
          <div class="modal-stat-label">Current Access</div>
          <div class="modal-stat-value" style="color:var(--yellow-dark)">${val(data.currentAccess, '%')}</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-label">2030 Target</div>
          <div class="modal-stat-value" style="color:var(--green)">${val(data.target2030, '%')}</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-label">Gap to Close</div>
          <div class="modal-stat-value" style="color:var(--red)">${val(data.gap, 'pp')}</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-label">Biomass Dependency</div>
          <div class="modal-stat-value">${val(data.biomassDep, '%')}</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-label">Total Investment</div>
          <div class="modal-stat-value" style="color:var(--navy)">${money(data.totalInvestment)}</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-label">Target Growth</div>
          <div class="modal-stat-value">${val(data.targetGrowth, '%/yr')}</div>
        </div>
      </div>
    </div>

    <div class="compact-section">
      <h3 class="compact-section-title">Technology Focus</h3>
      <p class="compact-sub-text">${data.techFocus}</p>
    </div>

    <div class="compact-section">
      <h3 class="compact-section-title">Strategy Status</h3>
      <p class="compact-sub-text">${data.strategyStatus}</p>
    </div>

    <div class="compact-section">
      <h3 class="compact-section-title">Key Barriers</h3>
      <p class="compact-sub-text">${data.barriers}</p>
    </div>

    <div class="compact-source">
      Data from National Energy Compact &middot; Clean Cooking Sub-Component
    </div>
  `;
}
