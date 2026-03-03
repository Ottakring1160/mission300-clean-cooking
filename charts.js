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
      let hasData = false;
      if (hasCompact) {
        // Full 5-pillar format: direct key check
        if (c.compact[key]) {
          hasData = true;
        }
        // Legacy: map old compact keys to pillars
        else if (key === 'lastMileAccess' && (c.compact.targets || c.compact.biomassByRegion || c.compact.cleanCooking)) {
          hasData = true;
        } else if (key === 'privateSector' && (c.compact.investmentBreakdown || c.compact.privateSector || c.totalInvestment)) {
          hasData = true;
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

  // Detect full 5-pillar format vs legacy clean-cooking-only
  const isFull = !!(c.overview || c.infrastructure || c.regionalIntegration || c.utilityReform);
  if (!isFull) {
    renderLegacyCompact(data, containerId);
    return;
  }

  const ov = c.overview || {};
  const pillarSections = [
    { key: 'infrastructure', id: 'pillar-infra', label: 'Infrastructure', icon: PILLARS.infrastructure.icon, color: PILLARS.infrastructure.color },
    { key: 'regionalIntegration', id: 'pillar-regional', label: 'Regional Integration', icon: PILLARS.regionalIntegration.icon, color: PILLARS.regionalIntegration.color },
    { key: 'lastMileAccess', id: 'pillar-lastmile', label: 'Last-Mile Access', icon: PILLARS.lastMileAccess.icon, color: PILLARS.lastMileAccess.color },
    { key: 'privateSector', id: 'pillar-private', label: 'Private Sector', icon: PILLARS.privateSector.icon, color: PILLARS.privateSector.color },
    { key: 'utilityReform', id: 'pillar-reform', label: 'Utility Reform', icon: PILLARS.utilityReform.icon, color: PILLARS.utilityReform.color },
  ];

  // Count available pillars
  const availablePillars = pillarSections.filter(p => c[p.key]);
  const pillarBadges = pillarSections.map(p =>
    `<span class="profile-pillar-badge" style="--pc:${p.color};opacity:${c[p.key] ? 1 : 0.35}">${p.icon} ${p.label}</span>`
  ).join('');

  // Tab bar
  const tabs = [
    `<button class="profile-tab active" data-target="section-overview">Overview</button>`,
    ...pillarSections.filter(p => c[p.key]).map((p, i) =>
      `<button class="profile-tab" data-target="section-${p.id}">${p.icon} ${p.label}</button>`
    ),
    ...(c.strategy ? [`<button class="profile-tab" data-target="section-strategy">Strategy</button>`] : [])
  ].join('');

  let html = '';

  // HEADER
  html += `
    <div class="compact-header">
      <div class="compact-header-top">
        <img class="flag-img-lg" src="${flagUrl(data.iso)}" alt="${data.country} flag">
        <div>
          <h2>${data.country}</h2>
          <div class="compact-header-sub">${ov.population || data.region} &middot; ${ov.income || ''}</div>
        </div>
      </div>
      <div class="modal-meta">
        <span class="modal-tag">${data.cohort}</span>
        <span class="modal-tag">${data.region}</span>
        <span class="modal-tag">${data.language}</span>
      </div>
      <div class="profile-pillar-badges">${pillarBadges}</div>
    </div>`;

  // EXECUTIVE SUMMARY — Compact Targets
  if (c.targets && c.targets.length) {
    const targetRows = c.targets.map(t => `
      <div class="target-row">
        <span class="target-icon">${t.icon}</span>
        <div class="target-body">
          <div class="target-metric">${t.metric}</div>
          <div class="target-values">
            ${t.baseline ? `<span class="target-baseline">${t.baseline}</span><span class="target-arrow">→</span>` : ''}
            <span class="target-goal">${t.target}</span>
          </div>
          <div class="target-detail">${t.detail}</div>
        </div>
      </div>`
    ).join('');

    html += `
    <div class="executive-summary" id="section-overview">
      <div class="executive-summary-header">
        <h3>National Compact Targets</h3>
        <p>Declaration of commitment — key targets and ambitions for ${data.country}</p>
      </div>
      <div class="executive-summary-grid">${targetRows}</div>
      ${ov.compactDate ? `<p class="compact-sub-text" style="margin-top:12px;text-align:right">Compact signed: ${ov.compactDate}</p>` : ''}
    </div>`;
  }

  // TAB BAR
  html += `<div class="profile-tabs" id="profileTabs"><div class="profile-tabs-inner">${tabs}</div></div>`;

  // COUNTRY SNAPSHOT KPIs
  html += `<div class="pillar-section" id="section-snapshot">
    <div class="pillar-section-body">
      <div class="pillar-kpis">${[
        kpi(num(ov.installedCapacity) + ' MW', 'Installed Capacity', PILLARS.infrastructure.color),
        kpi(pct(ov.electricityAccess), 'Electricity Connectivity', PILLARS.lastMileAccess.color),
        kpi(pct(ov.cleanCookingAccess), 'Clean Cooking Access', '#DD2E2B'),
        kpi(pct(ov.renewableShare), 'Renewable Energy Share', PILLARS.infrastructure.color),
        kpi(moneyB(c.privateSector?.totalCompactInvestment), 'Total Compact Investment', PILLARS.privateSector.color),
        kpi(ov.gdpGrowth || 'N/A', 'GDP Growth', PILLARS.regionalIntegration.color),
      ].join('')}</div>
    </div>
  </div>`;

  // PILLAR I: INFRASTRUCTURE
  if (c.infrastructure) {
    const inf = c.infrastructure;
    const gen = inf.generation || {};
    const mixBars = (gen.mix || []).map(m =>
      `<div class="mix-bar-row">
        <span class="mix-bar-label">${m.source}</span>
        <div class="mix-bar-track"><div class="mix-bar-fill" style="width:${m.pct}%;background:${PILLARS.infrastructure.color}"></div></div>
        <span class="mix-bar-value">${num(m.mw)} MW (${m.pct}%)</span>
      </div>`
    ).join('');

    const genProjects = (gen.projects || []).map(p =>
      `<tr><td>${p.name}</td><td>${p.capacity || ''}</td><td>${p.cost ? moneyB(p.cost) : 'TBD'}</td><td>${p.timeline || ''}</td><td><span class="status-badge status-${p.status}">${statusLabel(p.status)}</span></td></tr>`
    ).join('');

    const transProjects = (inf.transmission?.projects || []).map(p =>
      `<tr><td>${p.name}</td><td>${p.cost ? moneyB(p.cost) : 'TBD'}</td><td>${p.timeline || ''}</td><td><span class="status-badge status-${p.status}">${statusLabel(p.status)}</span></td></tr>`
    ).join('');

    const rehabProjects = (inf.rehabilitation?.keyProjects || []).map(p =>
      `<tr><td>${p.name}</td><td>${moneyB(p.cost)}</td></tr>`
    ).join('');

    html += `<div class="pillar-section" id="section-pillar-infra">
      <div class="pillar-section-header" style="--accent:${PILLARS.infrastructure.color}">
        <span class="pillar-section-icon">${PILLARS.infrastructure.icon}</span>
        <div><h3>Pillar I: Infrastructure</h3><p>Generation, transmission, distribution, and grid rehabilitation</p></div>
      </div>
      <div class="pillar-section-body">
        <div class="pillar-kpis">
          ${kpi(num(gen.installedCapacity) + ' MW', 'Installed Capacity')}
          ${kpi(gen.availablePct ? gen.availablePct + '%' : 'N/A', 'Available Capacity')}
          ${kpi('+' + num(gen.targetCapacity2030) + ' MW', '2030 Generation Target')}
          ${kpi(moneyB(inf.totalInvestment || gen.totalInvestment), 'Total Pillar Investment')}
        </div>

        <h4 class="subsection-title">Generation Mix</h4>
        <div class="mix-bars">${mixBars}</div>
        ${gen.targetBreakdown ? `<p class="compact-sub-text">2030 additions: ${gen.targetBreakdown}</p>` : ''}

        ${genProjects ? `<h4 class="subsection-title">Generation Projects</h4>
        <div class="profile-table-wrap"><table class="profile-table">
          <thead><tr><th>Project</th><th>Capacity</th><th>Cost</th><th>Timeline</th><th>Status</th></tr></thead>
          <tbody>${genProjects}</tbody>
        </table></div>` : ''}

        ${transProjects ? `<h4 class="subsection-title">Transmission Projects</h4>
        <div class="profile-table-wrap"><table class="profile-table">
          <thead><tr><th>Project</th><th>Cost</th><th>Timeline</th><th>Status</th></tr></thead>
          <tbody>${transProjects}</tbody>
        </table></div>` : ''}

        ${inf.transmission ? `<p class="compact-sub-text">Transmission network: ${num(inf.transmission.networkKm)} km total</p>` : ''}

        <div class="pillar-kpis" style="margin-top:20px">
          ${kpi(num(inf.distribution?.customers), 'Grid Customers')}
          ${kpi(inf.distribution?.losses + '%', 'T&D Losses')}
          ${kpi(moneyB(inf.gridStabilization?.totalCost), 'Grid Stabilization (' + (inf.gridStabilization?.projectCount || '') + ' projects)')}
          ${kpi(moneyB(inf.rehabilitation?.totalCost), 'Rehabilitation (' + (inf.rehabilitation?.projectCount || '') + ' projects)')}
        </div>

        ${rehabProjects ? `<h4 class="subsection-title">Key Rehabilitation Projects</h4>
        <div class="profile-table-wrap"><table class="profile-table">
          <thead><tr><th>Project</th><th>Cost</th></tr></thead>
          <tbody>${rehabProjects}</tbody>
        </table></div>` : ''}
      </div>
    </div>`;
  }

  // PILLAR II: REGIONAL INTEGRATION
  if (c.regionalIntegration) {
    const reg = c.regionalIntegration;
    const poolsHTML = (reg.powerPools || []).map(p =>
      `<div class="compact-tech-item"><div class="compact-tech-name">${p.name}</div><div class="compact-tech-desc">${p.status}</div></div>`
    ).join('');

    const interHTML = (reg.interconnectors || []).map(ic =>
      `<tr><td>${ic.name}</td><td>${ic.capacity || ''}</td><td>${ic.cost ? moneyB(ic.cost) : 'TBD'}</td><td>${ic.timeline || ''}</td><td><span class="status-badge status-${ic.status}">${statusLabel(ic.status)}</span></td></tr>`
    ).join('');

    html += `<div class="pillar-section" id="section-pillar-regional">
      <div class="pillar-section-header" style="--accent:${PILLARS.regionalIntegration.color}">
        <span class="pillar-section-icon">${PILLARS.regionalIntegration.icon}</span>
        <div><h3>Pillar II: Regional Integration</h3><p>Cross-border interconnectors, power pools, and trade</p></div>
      </div>
      <div class="pillar-section-body">
        <div class="pillar-kpis">
          ${kpi(reg.tradeCapacity || 'N/A', 'Interconnection Capacity')}
          ${kpi(moneyB(reg.gridReadinessInvestment), 'Grid Readiness Investment')}
          ${kpi(moneyB(reg.totalInvestment), 'Total Pillar Investment')}
        </div>

        <h4 class="subsection-title">Power Pool Membership</h4>
        <div class="compact-tech-grid">${poolsHTML}</div>

        ${interHTML ? `<h4 class="subsection-title">Interconnectors</h4>
        <div class="profile-table-wrap"><table class="profile-table">
          <thead><tr><th>Interconnector</th><th>Capacity</th><th>Cost</th><th>Timeline</th><th>Status</th></tr></thead>
          <tbody>${interHTML}</tbody>
        </table></div>` : ''}

        ${reg.tradingUnit ? `<p class="compact-sub-text">${reg.tradingUnit}</p>` : ''}
        ${reg.regulatoryHarmonization ? `<p class="compact-sub-text">${reg.regulatoryHarmonization}</p>` : ''}
      </div>
    </div>`;
  }

  // PILLAR III: LAST-MILE ACCESS
  if (c.lastMileAccess) {
    const lm = c.lastMileAccess;
    const elec = lm.electricity || {};
    const cc = lm.cleanCooking || {};

    const ccTechHTML = (cc.technologies || []).map(t =>
      `<div class="compact-tech-item"><div class="compact-tech-name">${t.name}</div><div class="compact-tech-desc">${t.desc}</div></div>`
    ).join('');

    const biomassHTML = (cc.biomassDependency || []).map(b =>
      `<div class="compact-biomass-row">
        <span class="compact-biomass-label">${b.region}</span>
        <div class="compact-biomass-bar-wrap"><div class="compact-biomass-bar" style="width:${b.pct}%"></div></div>
        <span class="compact-biomass-pct">${b.pct}%</span>
      </div>`
    ).join('');

    const deployInst = (cc.deployment?.institutions || []).map(i =>
      `<span class="compact-deploy-tag">${i.type}: <strong>${i.count.toLocaleString()}</strong></span>`
    ).join('');

    const elecProjects = (elec.projects || []).map(p =>
      `<tr><td>${p.name}</td><td>${p.cost ? moneyB(p.cost) : 'TBD'}</td><td>${p.timeline || ''}</td></tr>`
    ).join('');

    const ccProjects = (cc.projects || []).map(p =>
      `<tr><td>${p.name}</td><td>${p.cost ? moneyB(p.cost) : 'TBD'}</td><td>${p.timeline || ''}</td></tr>`
    ).join('');

    html += `<div class="pillar-section" id="section-pillar-lastmile">
      <div class="pillar-section-header" style="--accent:${PILLARS.lastMileAccess.color}">
        <span class="pillar-section-icon">${PILLARS.lastMileAccess.icon}</span>
        <div><h3>Pillar III: Last-Mile Access</h3><p>Electricity connectivity and clean cooking</p></div>
      </div>
      <div class="pillar-section-body">
        <h4 class="subsection-title">Electricity Access</h4>
        <div class="pillar-kpis">
          ${kpi(pct(elec.currentAccess), 'Current Connectivity')}
          ${kpi(pct(elec.target2030), '2030 Target')}
          ${kpi(elec.connectionsNeeded ? (elec.connectionsNeeded / 1e6).toFixed(1) + 'M' : 'N/A', 'New Connections Needed')}
          ${kpi(moneyB(elec.investmentNeeded), 'Investment Needed')}
        </div>
        <div class="access-progress-bar">
          <div class="access-progress-current" style="width:${elec.currentAccess || 0}%"><span>${elec.currentAccess}%</span></div>
          <div class="access-progress-target" style="left:${elec.target2030 || 0}%"><span>${elec.target2030}%</span></div>
        </div>
        <div class="access-progress-labels"><span>Current connectivity</span><span>2030 target</span></div>

        ${elec.miniGrids ? `<p class="compact-sub-text">${elec.miniGrids.current} operating mini-grids serving ${num(elec.miniGrids.customers)} customers. Grid: ${elec.onGridShare}% on-grid / ${elec.offGridShare}% off-grid target split.</p>` : ''}

        ${elecProjects ? `<h4 class="subsection-title">Electrification Projects</h4>
        <div class="profile-table-wrap"><table class="profile-table">
          <thead><tr><th>Project</th><th>Cost</th><th>Timeline</th></tr></thead>
          <tbody>${elecProjects}</tbody>
        </table></div>` : ''}

        <h4 class="subsection-title" style="margin-top:32px">Clean Cooking</h4>
        <div class="pillar-kpis">
          ${kpi(pct(cc.currentAccess), 'Current Access')}
          ${kpi(pct(cc.target2030), '2030 Target')}
          ${cc.target2034 ? kpi(pct(cc.target2034), '2034 Target') : ''}
          ${kpi(moneyB(cc.nccsCost), 'NCCS Total Cost')}
        </div>
        <div class="access-progress-bar">
          <div class="access-progress-current" style="width:${cc.currentAccess || 0}%;background:var(--red)"><span>${cc.currentAccess}%</span></div>
          <div class="access-progress-target" style="left:${cc.target2030 || 0}%"><span>${cc.target2030}%</span></div>
        </div>
        <div class="access-progress-labels"><span>Current access</span><span>2030 target</span></div>

        ${cc.strategy ? `<p class="compact-sub-text">${cc.strategy}. Annual cost: ${moneyB(cc.annualCost)}.</p>` : ''}

        ${biomassHTML ? `<h4 class="subsection-title">Biomass Dependency</h4>
        <p class="compact-sub-text">Primary fuels: ${cc.primaryFuels || 'N/A'}. ${cc.gasUsage || ''}</p>
        ${biomassHTML}` : ''}

        ${cc.deployment ? `<h4 class="subsection-title">Current Deployment</h4>
        <div class="compact-deploy-stat">
          <span class="compact-deploy-num">${num(cc.deployment.households)}</span>
          <span class="compact-deploy-label">Households with clean cooking connections</span>
        </div>
        <div class="compact-deploy-tags">${deployInst}</div>` : ''}

        ${ccTechHTML ? `<h4 class="subsection-title">Technology Pathways</h4>
        <div class="compact-tech-grid">${ccTechHTML}</div>` : ''}

        ${ccProjects ? `<h4 class="subsection-title">Clean Cooking Projects</h4>
        <div class="profile-table-wrap"><table class="profile-table">
          <thead><tr><th>Project</th><th>Cost</th><th>Timeline</th></tr></thead>
          <tbody>${ccProjects}</tbody>
        </table></div>` : ''}
      </div>
    </div>`;
  }

  // PILLAR IV: PRIVATE SECTOR
  if (c.privateSector) {
    const ps = c.privateSector;
    const maxSector = Math.max(...(ps.sectorBreakdown || []).map(s => s.amount));
    const sectorBars = (ps.sectorBreakdown || []).map(s => {
      const pubPctS = s.public != null ? Math.round(s.public / s.amount * 100) : 50;
      const privPctS = 100 - pubPctS;
      return `<div class="sector-bar-row">
        <span class="sector-bar-label">${s.sector}</span>
        <div class="sector-bar-track">
          <div class="sector-bar-pub" style="width:${(s.public || 0) / maxSector * 100}%"></div>
          <div class="sector-bar-priv" style="width:${(s.private || 0) / maxSector * 100}%"></div>
        </div>
        <span class="sector-bar-value">${moneyB(s.amount)}</span>
      </div>`;
    }).join('');

    const pubPctTotal = Math.round(ps.publicFinance / ps.totalCompactInvestment * 100);
    const privPctTotal = 100 - pubPctTotal;

    const ippsHTML = (ps.ipps || []).map(ip =>
      `<tr><td>${ip.name}</td><td>${ip.capacity}</td><td><span class="status-badge status-${ip.status.toLowerCase().includes('oper') ? 'commissioned' : 'planned'}">${ip.status}</span></td></tr>`
    ).join('');

    const partnersHTML = (ps.developmentPartners || []).map(dp =>
      `<div class="partner-card"><div class="partner-name">${dp.name}</div><div class="partner-contribution">${dp.contribution}</div></div>`
    ).join('');

    html += `<div class="pillar-section" id="section-pillar-private">
      <div class="pillar-section-header" style="--accent:${PILLARS.privateSector.color}">
        <span class="pillar-section-icon">${PILLARS.privateSector.icon}</span>
        <div><h3>Pillar IV: Private Sector</h3><p>Investment, PPPs, de-risking, and development partners</p></div>
      </div>
      <div class="pillar-section-body">
        <div class="pillar-kpis">
          ${kpi(moneyB(ps.totalCompactInvestment), 'Total Compact Value')}
          ${kpi(moneyB(ps.publicFinance), 'Public Finance')}
          ${kpi(moneyB(ps.privateFinance), 'Private Finance')}
          ${kpi(ps.privateSharePct ? ps.privateSharePct + '%' : 'N/A', 'Private Share')}
        </div>

        <h4 class="subsection-title">Investment Split</h4>
        <div class="compact-invest-bar">
          <div class="compact-invest-pub" style="width:${pubPctTotal}%"><span>Public ${pubPctTotal}%</span></div>
          <div class="compact-invest-priv" style="width:${privPctTotal}%"><span>Private ${privPctTotal}%</span></div>
        </div>

        ${sectorBars ? `<h4 class="subsection-title">Investment by Sector</h4>
        <div class="sector-bars">
          <div class="sector-bars-legend"><span class="sector-legend-pub">Public</span><span class="sector-legend-priv">Private</span></div>
          ${sectorBars}
        </div>` : ''}

        ${ippsHTML ? `<h4 class="subsection-title">Independent Power Producers</h4>
        <div class="profile-table-wrap"><table class="profile-table">
          <thead><tr><th>IPP</th><th>Capacity</th><th>Status</th></tr></thead>
          <tbody>${ippsHTML}</tbody>
        </table></div>` : ''}

        ${ps.carbonMarkets ? `<p class="compact-sub-text"><strong>Carbon Markets:</strong> ${ps.carbonMarkets}</p>` : ''}

        ${partnersHTML ? `<h4 class="subsection-title">Development Partners</h4>
        <div class="partner-grid">${partnersHTML}</div>` : ''}
      </div>
    </div>`;
  }

  // PILLAR V: UTILITY REFORM
  if (c.utilityReform) {
    const ur = c.utilityReform;
    const utilityCards = (ur.utilities || []).map(u =>
      `<div class="utility-card">
        <h4 class="utility-card-name">${u.name}</h4>
        <p class="utility-card-type">${u.type || ''}</p>
        <div class="utility-card-stats">
          ${u.customers ? `<div class="utility-stat"><span class="utility-stat-value">${num(u.customers)}</span><span class="utility-stat-label">Customers</span></div>` : ''}
          ${u.costRecovery ? `<div class="utility-stat"><span class="utility-stat-value">${u.costRecovery}%</span><span class="utility-stat-label">Cost Recovery</span></div>` : ''}
          ${u.losses != null ? `<div class="utility-stat"><span class="utility-stat-value">${u.losses}%</span><span class="utility-stat-label">T&D Losses</span></div>` : ''}
          ${u.billCollection ? `<div class="utility-stat"><span class="utility-stat-value">${u.billCollection}%</span><span class="utility-stat-label">Bill Collection</span></div>` : ''}
          ${u.subsidy ? `<div class="utility-stat"><span class="utility-stat-value">$${u.subsidy}M</span><span class="utility-stat-label">Annual Subsidy</span></div>` : ''}
        </div>
        ${u.challenges ? `<p class="utility-card-challenges">${u.challenges}</p>` : ''}
      </div>`
    ).join('');

    const tariffHTML = (ur.tariffReform || []).map(t =>
      `<div class="compact-strategy-row"><span class="compact-strategy-item">${t.milestone}</span><span class="compact-strategy-status">${t.timeline}</span></div>`
    ).join('');

    const benchHTML = (ur.performanceBenchmarks || []).map(b =>
      `<tr><td>${b.metric}</td><td>${b.current}</td><td>${b.target}</td></tr>`
    ).join('');

    const reformHTML = (ur.reformMilestones || []).map(m =>
      `<div class="compact-strategy-row"><span class="compact-strategy-item">${m.item}</span><span class="compact-strategy-status">${m.timeline}</span></div>`
    ).join('');

    html += `<div class="pillar-section" id="section-pillar-reform">
      <div class="pillar-section-header" style="--accent:${PILLARS.utilityReform.color}">
        <span class="pillar-section-icon">${PILLARS.utilityReform.icon}</span>
        <div><h3>Pillar V: Utility Reform</h3><p>Financial viability, tariff reform, and service quality</p></div>
      </div>
      <div class="pillar-section-body">
        <div class="utility-cards">${utilityCards}</div>

        ${tariffHTML ? `<h4 class="subsection-title">Tariff Reform Roadmap</h4>
        <div class="compact-strategy-list">${tariffHTML}</div>` : ''}

        ${benchHTML ? `<h4 class="subsection-title">Performance Benchmarks</h4>
        <div class="profile-table-wrap"><table class="profile-table">
          <thead><tr><th>Metric</th><th>Current</th><th>Target</th></tr></thead>
          <tbody>${benchHTML}</tbody>
        </table></div>` : ''}

        ${reformHTML ? `<h4 class="subsection-title">Reform Milestones</h4>
        <div class="compact-strategy-list">${reformHTML}</div>` : ''}
      </div>
    </div>`;
  }

  // STRATEGY & BARRIERS
  if (c.strategy || c.barriers) {
    const stratByPillar = {};
    (c.strategy || []).forEach(s => {
      const p = s.pillar || 'cross-cutting';
      if (!stratByPillar[p]) stratByPillar[p] = [];
      stratByPillar[p].push(s);
    });

    let stratHTML = '';
    for (const [pKey, items] of Object.entries(stratByPillar)) {
      const pDef = PILLARS[pKey];
      const label = pDef ? pDef.name : 'Cross-Cutting';
      const color = pDef ? pDef.color : 'var(--gray-400)';
      stratHTML += `<h5 class="strat-pillar-label" style="color:${color}">${label}</h5>`;
      stratHTML += items.map(s =>
        `<div class="compact-strategy-row"><span class="compact-strategy-item">${s.item}</span><span class="compact-strategy-status">${s.timeline}</span></div>`
      ).join('');
    }

    const barriersByPillar = {};
    (c.barriers || []).forEach(b => {
      const p = b.pillar || 'cross-cutting';
      if (!barriersByPillar[p]) barriersByPillar[p] = [];
      barriersByPillar[p].push(b);
    });

    let barrHTML = '';
    for (const [pKey, items] of Object.entries(barriersByPillar)) {
      const pDef = PILLARS[pKey];
      const label = pDef ? pDef.name : 'Cross-Cutting';
      const color = pDef ? pDef.color : 'var(--gray-400)';
      barrHTML += `<h5 class="strat-pillar-label" style="color:${color}">${label}</h5>`;
      barrHTML += `<div class="compact-barriers-grid">${items.map(b =>
        `<div class="compact-barrier-item"><div class="compact-barrier-title">${b.title}</div><div class="compact-barrier-desc">${b.desc}</div></div>`
      ).join('')}</div>`;
    }

    html += `<div class="pillar-section" id="section-strategy">
      <div class="pillar-section-header" style="--accent:var(--dark-navy)">
        <span class="pillar-section-icon">&#x1F4CB;</span>
        <div><h3>Strategy & Barriers</h3><p>Reform milestones and key challenges across all pillars</p></div>
      </div>
      <div class="pillar-section-body">
        ${stratHTML ? `<h4 class="subsection-title">Strategy Milestones</h4><div class="compact-strategy-list">${stratHTML}</div>` : ''}
        ${barrHTML ? `<h4 class="subsection-title" style="margin-top:32px">Key Barriers</h4>${barrHTML}` : ''}
      </div>
    </div>`;
  }

  // SOURCE
  html += `<div class="compact-source">Source: ${c.sourceName} &middot; ${c.sourceType}</div>`;

  container.innerHTML = html;
  initProfileTabs();
}

/* ========== Profile Tab Navigation ========== */
function initProfileTabs() {
  const tabsContainer = document.getElementById('profileTabs');
  if (!tabsContainer) return;

  const tabs = tabsContainer.querySelectorAll('.profile-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.target;
      const section = document.getElementById(targetId);
      if (section) {
        const offset = document.querySelector('.profile-tabs')?.offsetHeight || 50;
        const y = section.getBoundingClientRect().top + window.scrollY - offset - 16;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Highlight active tab on scroll
  const sections = document.querySelectorAll('.pillar-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        tabs.forEach(t => {
          t.classList.toggle('active', t.dataset.target === id);
        });
      }
    });
  }, { rootMargin: '-20% 0px -60% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ========== Profile Helpers ========== */
function kpi(value, label, color) {
  const style = color ? `style="color:${color}"` : '';
  return `<div class="pillar-kpi"><div class="pillar-kpi-value" ${style}>${value}</div><div class="pillar-kpi-label">${label}</div></div>`;
}

function statusLabel(status) {
  const map = { commissioned: 'Commissioned', under_construction: 'Under Construction', planned: 'Planned', operational: 'Operational' };
  return map[status] || status || '';
}

/* ========== Legacy Compact Profile (clean-cooking-only data) ========== */
function renderLegacyCompact(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container || !data.compact) return;
  const c = data.compact;

  // Fallback: render old-style clean-cooking-focused profile
  const targetsHTML = (c.targets || []).map(t =>
    `<div class="compact-target">
      <div class="compact-target-year">${t.year}</div>
      <div class="compact-target-bar-wrap"><div class="compact-target-bar" style="width:${t.access}%"></div></div>
      <div class="compact-target-pct">${t.access}%</div>
      <div class="compact-target-gap">${t.gap}pp gap</div>
    </div>`
  ).join('');

  container.innerHTML = `
    <div class="compact-header">
      <div class="compact-header-top">
        <img class="flag-img-lg" src="${flagUrl(data.iso)}" alt="${data.country} flag">
        <div><h2>${data.country}</h2><div class="compact-header-sub">${c.population || data.region} &middot; ${c.income || ''}</div></div>
      </div>
      <div class="modal-meta">
        <span class="modal-tag">${data.cohort}</span>
        <span class="modal-tag">${data.region}</span>
        <span class="modal-tag">${data.language}</span>
      </div>
    </div>
    <div class="compact-section">
      <h3 class="compact-section-title">Clean Cooking Statistics</h3>
      <div class="modal-stats">
        <div class="modal-stat"><div class="modal-stat-label">Current Access</div><div class="modal-stat-value" style="color:var(--yellow-dark)">${val(data.currentAccess, '%')}</div></div>
        <div class="modal-stat"><div class="modal-stat-label">2030 Target</div><div class="modal-stat-value" style="color:var(--green)">${val(data.target2030, '%')}</div></div>
        <div class="modal-stat"><div class="modal-stat-label">Gap</div><div class="modal-stat-value" style="color:var(--red)">${val(data.gap, 'pp')}</div></div>
        <div class="modal-stat"><div class="modal-stat-label">Growth Rate</div><div class="modal-stat-value">${val(data.targetGrowth, '%/yr')}</div></div>
        <div class="modal-stat"><div class="modal-stat-label">Investment</div><div class="modal-stat-value" style="color:var(--navy)">${money(data.totalInvestment)}</div></div>
        <div class="modal-stat"><div class="modal-stat-label">Acceleration</div><div class="modal-stat-value">${val(data.accelFactor, 'x')}</div></div>
      </div>
    </div>
    ${targetsHTML ? `<div class="compact-section"><h3 class="compact-section-title">Targets</h3>${targetsHTML}</div>` : ''}
    <div class="compact-source">Source: ${c.sourceName || 'National Energy Compact'} &middot; ${c.sourceType || 'Clean Cooking Sub-Component'}</div>
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
