const countries = [
  {
    country: "Chad", cohort: "Cohort 1", language: "French",
    currentAccess: 6, target2030: 46, targetYear: 2030, gap: 40,
    biomassDep: 90, currentGrowth: null, targetGrowth: 5, accelFactor: null,
    totalInvestment: 656, publicFinance: 627, privateFinance: 29, privateShare: 4.4,
    strategyStatus: "Strategy due end 2025; MTF survey by 2025; regulatory framework by end 2025",
    techFocus: "LPG with government subsidies; improved cookstoves",
    barriers: "Low LPG supply; no small-volume bottles for low-income HHs; AEDE non-operational; 20-year gap with no domestic energy projects; fuelwood-driven deforestation"
  },
  {
    country: "Côte d'Ivoire", cohort: "Cohort 1", language: "French",
    currentAccess: 20, target2030: 50, targetYear: 2030, gap: 30,
    biomassDep: 70, currentGrowth: null, targetGrowth: null, accelFactor: null,
    totalInvestment: null, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "Strategy & Bioenergy Code due June 2025",
    techFocus: "LPG/Butane (primary, 50% subsidy); improved cookstoves",
    barriers: "High biomass dependency; limited LPG infrastructure in rural areas; affordability barriers; charcoal/firewood supply chains entrenched; limited data"
  },
  {
    country: "DRC", cohort: "Cohort 1", language: "French",
    currentAccess: 1, target2030: 30, targetYear: 2030, gap: 29,
    biomassDep: 95, currentGrowth: 1, targetGrowth: 5, accelFactor: 5,
    totalInvestment: 600, publicFinance: 500, privateFinance: 100, privateShare: 16.7,
    strategyStatus: "Strategy due end 2026; formalize energy policy by decree end 2025",
    techFocus: "Improved stoves and LPG; electric cooking dependent on grid reliability",
    barriers: "Low LPG supply; charcoal market entrenched; irregular electricity; no waste collection (biogas); low household income; overlapping jurisdictions"
  },
  {
    country: "Liberia", cohort: "Cohort 1", language: "English",
    currentAccess: 0.8, target2030: null, targetYear: null, gap: null,
    biomassDep: null, currentGrowth: null, targetGrowth: null, accelFactor: null,
    totalInvestment: 15, publicFinance: 10, privateFinance: 5, privateShare: 33.3,
    strategyStatus: "Strategy due December 2025; policy framework due 2026; MTF survey Q4 2025",
    techFocus: "Not yet determined; deferred to December 2025 strategy",
    barriers: "Negligible baseline (0.8%); no established data; severe affordability gap; 14,000 dispersed settlements; weak private sector"
  },
  {
    country: "Madagascar", cohort: "Cohort 1", language: "French",
    currentAccess: 14, target2030: 50, targetYear: 2030, gap: 36,
    biomassDep: 86, currentGrowth: null, targetGrowth: null, accelFactor: null,
    totalInvestment: 290, publicFinance: null, privateFinance: 290, privateShare: 100,
    strategyStatus: "Strategy due 2026; gap analysis report 2025; MTF surveys 2026 & 2029",
    techFocus: "Improved biomass (37%), electric (30%), LPG/biogas/bioethanol (33%)",
    barriers: "Affordability crisis (75% of HHs); <1% clean cooking; weak manufacturing; JIRAMA $400M debt; regulatory gaps"
  },
  {
    country: "Malawi", cohort: "Cohort 1", language: "English",
    currentAccess: 2, target2030: 75, targetYear: 2030, gap: 73,
    biomassDep: 98, currentGrowth: null, targetGrowth: 7.21, accelFactor: null,
    totalInvestment: null, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "Policies in place; annual targets defined through 2030",
    techFocus: "Advanced woodstoves as primary; LPG for urban; technology-diversified approach",
    barriers: "Affordability (high upfront costs); low willingness to pay (rural); forest degradation (37% loss since 1990); gender disparities"
  },
  {
    country: "Nigeria", cohort: "Cohort 1", language: "English",
    currentAccess: 26, target2030: 100, targetYear: 2030, gap: 74,
    biomassDep: null, currentGrowth: 22, targetGrowth: 25, accelFactor: 1.14,
    totalInvestment: 1200, publicFinance: 1200, privateFinance: null, privateShare: null,
    strategyStatus: "Policy approved 2024; standards adopted; MTF survey limited to 7 states",
    techFocus: "LPG/Gas (driver of recent gains); electric cooking yet to take off",
    barriers: "Slow historical growth; electric cooking stalled; geographic data limited to 7 states; large population deficit (174M)"
  },
  {
    country: "Senegal", cohort: "Cohort 1", language: "French",
    currentAccess: 32, target2030: null, targetYear: 2030, gap: null,
    biomassDep: 64, currentGrowth: 3.1, targetGrowth: 11.3, accelFactor: 3.65,
    totalInvestment: null, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "Strategy due Q1 2026; technical minimums October 2025; quality standards June 2026",
    techFocus: "Improved stoves (primary); butane/LPG; emerging e-cooking",
    barriers: "No MTF survey conducted yet; quality standards gap; no price regulation for butane; improved stove supply constraints"
  },
  {
    country: "Tanzania", cohort: "Cohort 1", language: "English",
    currentAccess: 6.9, target2030: 80, targetYear: 2034, gap: 73.1,
    biomassDep: 89, currentGrowth: 11.9, targetGrowth: 21, accelFactor: 1.76,
    totalInvestment: 800, publicFinance: 400, privateFinance: 400, privateShare: 50,
    strategyStatus: "Strategy in place (2024-2034); standards by June 2027; tax/duty reductions by June 2026",
    techFocus: "Multi-technology: LPG/natural gas urban; improved cookstoves rural; e-cooking emerging",
    barriers: "Low market adoption; fragmented market; financing barriers; utility financial sustainability; regulatory gaps; demographic pressures"
  },
  {
    country: "Zambia", cohort: "Cohort 1", language: "English",
    currentAccess: 8.9, target2030: 40, targetYear: 2030, gap: 31.1,
    biomassDep: 83.6, currentGrowth: null, targetGrowth: null, accelFactor: null,
    totalInvestment: null, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "Strategy due June 2025",
    techFocus: "Electric cooking (leveraging high electrification); LPG and ethanol as alternatives",
    barriers: "Limited financing access; inadequate regulatory frameworks; affordability barriers; weak public awareness; limited rural credit"
  },
  {
    country: "Mauritania", cohort: "Cohort 1", language: "French",
    currentAccess: 54, target2030: 100, targetYear: 2030, gap: 46,
    biomassDep: null, currentGrowth: 4, targetGrowth: 12, accelFactor: 3,
    totalInvestment: 205, publicFinance: 205, privateFinance: 0, privateShare: 0,
    strategyStatus: "Strategy due 2025; integration of butane, electric cooking, and biogas",
    techFocus: "Natural gas (Nouakchott focus); improved cookstoves; typha briquettes (unique)",
    barriers: "Low population density; limited institutional framework; electric cooking integration complexity; 100% public financing reliance"
  },
  {
    country: "Niger", cohort: "Cohort 1", language: "French",
    currentAccess: 6, target2030: 12, targetYear: 2030, gap: 6,
    biomassDep: 94, currentGrowth: 1, targetGrowth: 1, accelFactor: 1,
    totalInvestment: 32, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "Strategy exists (2017/2020); electricity code update due 2025; MTF survey 2025",
    techFocus: "Coal briquettes and LPG infrastructure; improved stoves",
    barriers: "Severe deforestation pressure; limited adoption outside urban; lack of statistics; geographic/security constraints; very modest 1% annual growth target"
  },
  {
    country: "Benin", cohort: "Cohort 2", language: "French",
    currentAccess: 10.5, target2030: 50, targetYear: 2030, gap: 39.5,
    biomassDep: 60, currentGrowth: null, targetGrowth: null, accelFactor: null,
    totalInvestment: null, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "SNCP update Q1 2026; standards Q4 2026; Phase 1 (2026-27), Phase 2 (2027-30)",
    techFocus: "LPG/Butane (primary); improved biomass stoves",
    barriers: "Data/monitoring gap; institutional fragmentation; weak LPG rural distribution; insufficient private sector incentives"
  },
  {
    country: "Botswana", cohort: "Cohort 2", language: "English",
    currentAccess: 66.6, target2030: 90, targetYear: 2030, gap: 23.4,
    biomassDep: 33.9, currentGrowth: 2.4, targetGrowth: 5, accelFactor: 2.08,
    totalInvestment: null, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "Strategy due April 2026; dedicated project unit by December 2025",
    techFocus: "LPG (dominant urban); electric cooking; improved biomass for rural",
    barriers: "No dedicated strategy; limited commercial viability; highest electricity tariffs in Africa; 63.3pp urban-rural gap; no local manufacturing"
  },
  {
    country: "Burundi", cohort: "Cohort 2", language: "French",
    currentAccess: 0.1, target2030: 40, targetYear: 2030, gap: 39.9,
    biomassDep: 95, currentGrowth: 0.1, targetGrowth: 5, accelFactor: 50,
    totalInvestment: 350, publicFinance: 210, privateFinance: 140, privateShare: 40,
    strategyStatus: "Strategy due Dec 2025; national lab June 2026; quality standards Dec 2026",
    techFocus: "Electric cooking (leveraging electrification push); improved stoves",
    barriers: "No established market; limited currency access for imports; deep cultural preference for biomass; only 25.9% electricity access"
  },
  {
    country: "Cameroon", cohort: "Cohort 2", language: "French",
    currentAccess: 23.4, target2030: 40, targetYear: 2030, gap: 16.6,
    biomassDep: 80, currentGrowth: null, targetGrowth: 12.5, accelFactor: null,
    totalInvestment: 114, publicFinance: 84, privateFinance: 30, privateShare: 26.3,
    strategyStatus: "Strategy due end 2026; standards 2026-2028; digital monitoring platform",
    techFocus: "LPG and improved cookstoves; ecological charcoal",
    barriers: "10 strategic/policy gaps; high costs; limited HH capacity; distribution infrastructure gaps; electricity reliability"
  },
  {
    country: "Comoros", cohort: "Cohort 2", language: "French",
    currentAccess: 0.5, target2030: 30, targetYear: 2030, gap: 29.5,
    biomassDep: 99.5, currentGrowth: 0.1, targetGrowth: 6, accelFactor: 60,
    totalInvestment: 11.2, publicFinance: 3.36, privateFinance: 7.84, privateShare: 70,
    strategyStatus: "Strategy due Dec 2026; MTF survey Oct 2026; monitoring unit Dec 2025",
    techFocus: "Biogas (40% of investment) and LPG (40%); electric cooking (20%)",
    barriers: "75% cite affordability as main barrier; entrenched biomass use; limited industrial capacity; island supply chain complexity"
  },
  {
    country: "Congo (Republic)", cohort: "Cohort 2", language: "French",
    currentAccess: 39.6, target2030: 81, targetYear: 2030, gap: 41.4,
    biomassDep: null, currentGrowth: null, targetGrowth: null, accelFactor: null,
    totalInvestment: 50, publicFinance: 25, privateFinance: 25, privateShare: 50,
    strategyStatus: "SNCP due Dec 2026; tax exemptions Dec 2025; Gender & Energy Strategy Dec 2026",
    techFocus: "Electric cooking via grid/mini-grids/solar; LPG",
    barriers: "No clean cooking strategy exists; no market; electricity utility financial crisis; tariffs unchanged 30+ years; rural electrification 1.01%"
  },
  {
    country: "Ethiopia", cohort: "Cohort 2", language: "English",
    currentAccess: 8, target2030: 57.7, targetYear: 2030, gap: 49.7,
    biomassDep: 92, currentGrowth: null, targetGrowth: 9.95, accelFactor: null,
    totalInvestment: 600, publicFinance: 600, privateFinance: null, privateShare: null,
    strategyStatus: "NCCS in place (2024-2034); Roadmap (2025-2035); standards enforcement defined",
    techFocus: "Electric cooking and improved/advanced biomass stoves",
    barriers: "25+ barriers: market fragmentation, supply chain gaps, financing gaps, institutional challenges, awareness barriers"
  },
  {
    country: "Gambia", cohort: "Cohort 2", language: "English",
    currentAccess: 25, target2030: 50, targetYear: 2030, gap: 25,
    biomassDep: 75, currentGrowth: null, targetGrowth: 4.17, accelFactor: null,
    totalInvestment: null, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "Strategy finalization June 2026; standards Q4 2026; MTF survey Q2 2025",
    techFocus: "LPG (primary); electric cooking (secondary)",
    barriers: "Affordability barriers; nascent market; rural-urban disparities; data gaps; import dependence"
  },
  {
    country: "Ghana", cohort: "Cohort 2", language: "English",
    currentAccess: 36.9, target2030: 50, targetYear: 2030, gap: 13.1,
    biomassDep: 60, currentGrowth: null, targetGrowth: null, accelFactor: null,
    totalInvestment: 760, publicFinance: 200, privateFinance: 560, privateShare: 73.7,
    strategyStatus: "NLPGPP ongoing; National Clean Cooking Policy due mid-2026",
    techFocus: "LPG (primary); improved biomass for rural; eCooking emerging",
    barriers: "Urban-rural disparity; affordability of LPG rural; $650M funding gap; limited LPG rural distribution"
  },
  {
    country: "Guinea", cohort: "Cohort 2", language: "French",
    currentAccess: 12, target2030: 35, targetYear: 2030, gap: 23,
    biomassDep: 98, currentGrowth: null, targetGrowth: null, accelFactor: null,
    totalInvestment: null, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "Strategy under development",
    techFocus: "DRE and clean cooking solutions integrated approach",
    barriers: "Low penetration; affordability; limited supply chains; regulatory gaps; EDG financial challenges"
  },
  {
    country: "Kenya", cohort: "Cohort 2", language: "English",
    currentAccess: 34.4, target2030: 100, targetYear: 2030, gap: 65.6,
    biomassDep: 69, currentGrowth: null, targetGrowth: null, accelFactor: null,
    totalInvestment: null, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "KNCTS developed 2024; action plan expected March 2026",
    techFocus: "E-cooking and LPG primary; solar cooking, green hydrogen, bio-methane emerging",
    barriers: "Policy gaps; affordability; cultural practices; weak supply chains; low adoption; limited government funding"
  },
  {
    country: "Lesotho", cohort: "Cohort 2", language: "English",
    currentAccess: 45.2, target2030: 75, targetYear: 2030, gap: 29.8,
    biomassDep: 62, currentGrowth: null, targetGrowth: 0.48, accelFactor: null,
    totalInvestment: null, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "Strategy due Nov 2025; Energy Bill draft; LPG regs Dec 2025",
    techFocus: "Improved biomass stoves and LPG; e-cooking potential",
    barriers: "Limited private sector investment; inadequate fiscal incentives; affordability barriers; rugged terrain/dispersed population"
  },
  {
    country: "Mozambique", cohort: "Cohort 2", language: "English",
    currentAccess: 17, target2030: 54, targetYear: 2030, gap: 37,
    biomassDep: 83, currentGrowth: null, targetGrowth: null, accelFactor: 8,
    totalInvestment: null, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "Strategy due 2026; LPG Master Plan 2026; carbon market regulation planned",
    techFocus: "LPG (primary scaling); ICS for rural; electric cooking urban",
    barriers: "50+ barriers: financing fragmentation, weak regulatory coordination, infrastructure gaps, affordability, gender disparities"
  },
  {
    country: "Namibia", cohort: "Cohort 2", language: "English",
    currentAccess: 48.5, target2030: 61, targetYear: 2030, gap: 12.5,
    biomassDep: 51.5, currentGrowth: 0.9, targetGrowth: 3.6, accelFactor: 4,
    totalInvestment: null, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "Strategy due 2026; project unit by Dec 2025; off-grid + clean cooking pilot 2026",
    techFocus: "Electric cooking; LPG; improved biomass for rural",
    barriers: "Policy gaps; limited commercial viability; highest electricity tariffs; 63.3pp urban-rural gap; no local manufacturing"
  },
  {
    country: "São Tomé and Príncipe", cohort: "Cohort 2", language: "English",
    currentAccess: 62, target2030: 75, targetYear: 2030, gap: 13,
    biomassDep: 80.3, currentGrowth: null, targetGrowth: 2.17, accelFactor: null,
    totalInvestment: 30, publicFinance: 8, privateFinance: 23, privateShare: 76.7,
    strategyStatus: "Action Plan adoption 2026; Phase 1 Foundation (2025-26), Phase 2 Scale-up (2027-28)",
    techFocus: "LPG (primary); improved cookstoves (secondary)",
    barriers: "Supply chain gaps; standards gaps; affordability; entrenched kerosene use; awareness gaps; limited private sector"
  },
  {
    country: "Sierra Leone", cohort: "Cohort 2", language: "English",
    currentAccess: 1.5, target2030: 25, targetYear: 2030, gap: 23.5,
    biomassDep: 90, currentGrowth: null, targetGrowth: 3.9, accelFactor: null,
    totalInvestment: 100, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "CCDU established; strategy approval Sept 2025; standards in development",
    techFocus: "Improved cookstoves (1M units); LPG scaling",
    barriers: "LPG canister cost barrier; supply chain constraints; limited market; insufficient financing; behavioral barriers"
  },
  {
    country: "Togo", cohort: "Cohort 2", language: "French",
    currentAccess: 14, target2030: 80, targetYear: 2030, gap: 66,
    biomassDep: 87, currentGrowth: null, targetGrowth: 11, accelFactor: null,
    totalInvestment: 32.7, publicFinance: 19, privateFinance: 18, privateShare: 55,
    strategyStatus: "Coordination framework T3 2025; governance T1 2026; acceleration 2027-28; target 80% by 2030",
    techFocus: "Improved stoves (400K units) and modern fuels (LPG, bioethanol, biogas)",
    barriers: "High upfront costs; limited affordable financing; weak distribution infrastructure; low awareness; behavioral barriers"
  },
  {
    country: "Zimbabwe", cohort: "Cohort 2", language: "English",
    currentAccess: 38.6, target2030: 70, targetYear: 2030, gap: 31.4,
    biomassDep: 61, currentGrowth: null, targetGrowth: 6.28, accelFactor: null,
    totalInvestment: 791.5, publicFinance: 237.5, privateFinance: 554, privateShare: 70,
    strategyStatus: "Strategy approval Q3 2025; operational Q4 2026; quality standards Q2 2026",
    techFocus: "LPG; biogas; electricity-based; solar cooking",
    barriers: "Weak awareness; inadequate quality standards; high costs; limited consumer financing; currency instability"
  }
];

// Barrier categories for the barriers section
const barrierCategories = [
  {
    title: "Affordability",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    description: "High upfront costs and limited household income make clean cooking technologies inaccessible for the majority of families.",
    count: 25
  },
  {
    title: "Infrastructure",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="6" width="22" height="12" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
    description: "Weak supply chains, limited LPG distribution networks, and inadequate rural infrastructure hinder technology deployment.",
    count: 22
  },
  {
    title: "Policy & Regulation",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
    description: "Missing strategies, incomplete regulatory frameworks, and fragmented institutional coordination delay implementation.",
    count: 24
  },
  {
    title: "Data Gaps",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    description: "Limited MTF surveys, insufficient monitoring systems, and outdated statistics hamper evidence-based planning.",
    count: 18
  },
  {
    title: "Cultural & Behavioral",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    description: "Deep-rooted preferences for traditional cooking methods and low awareness of clean alternatives resist change.",
    count: 15
  },
  {
    title: "Private Sector",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    description: "Weak private sector participation, limited commercial viability, and insufficient market development slow scale-up.",
    count: 20
  }
];

// Technology categories
const techCategories = [
  {
    title: "LPG / Natural Gas",
    description: "The most widely targeted technology across Mission 300 countries, particularly for urban areas.",
    countries: ["Nigeria", "Chad", "Ghana", "Côte d'Ivoire", "Cameroon", "Mauritania", "Congo (Republic)", "Kenya", "Lesotho", "Benin", "Gambia", "Mozambique", "Zimbabwe", "Sierra Leone", "São Tomé and Príncipe", "Comoros", "Botswana", "Namibia"],
    color: "#F59E0B"
  },
  {
    title: "Improved Cookstoves",
    description: "Advanced biomass stoves serving as a transitional technology, especially in rural areas with high wood dependency.",
    countries: ["Malawi", "Senegal", "Tanzania", "Togo", "Sierra Leone", "Chad", "Niger", "Cameroon", "Benin", "Madagascar", "Ethiopia", "Lesotho", "Botswana", "Côte d'Ivoire"],
    color: "#10B981"
  },
  {
    title: "Electric Cooking",
    description: "Leveraging grid expansion and electrification programs, with growing interest in induction and solar-electric solutions.",
    countries: ["Zambia", "Burundi", "Congo (Republic)", "Ethiopia", "Kenya", "Botswana", "Namibia", "Madagascar", "Tanzania", "DRC"],
    color: "#3B82F6"
  },
  {
    title: "Biogas / Bioethanol",
    description: "Organic waste-to-energy solutions gaining traction in agricultural regions with suitable feedstock availability.",
    countries: ["Comoros", "Zimbabwe", "Madagascar", "Togo", "DRC"],
    color: "#8B5CF6"
  },
  {
    title: "Solar Cooking",
    description: "Emerging technology pathway leveraging Africa's abundant solar resources for direct thermal cooking.",
    countries: ["Kenya", "Zimbabwe", "Namibia"],
    color: "#EC4899"
  }
];
