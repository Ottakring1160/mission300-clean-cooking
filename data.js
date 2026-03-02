const countries = [
  {
    country: "Chad", iso: "td", cohort: "Cohort 1", language: "French", region: "Central Africa",
    currentAccess: 6, target2030: 46, targetYear: 2030, gap: 40,
    biomassDep: 90, currentGrowth: null, targetGrowth: 5, accelFactor: null,
    totalInvestment: 656, publicFinance: 627, privateFinance: 29, privateShare: 4.4,
    strategyStatus: "Strategy due end 2025; MTF survey by 2025; regulatory framework by end 2025",
    techFocus: "LPG with government subsidies; improved cookstoves",
    barriers: "Low LPG supply; no small-volume bottles for low-income HHs; AEDE non-operational; 20-year gap with no domestic energy projects; fuelwood-driven deforestation"
  },
  {
    country: "Côte d'Ivoire", iso: "ci", cohort: "Cohort 1", language: "French", region: "West Africa",
    currentAccess: 20, target2030: 50, targetYear: 2030, gap: 30,
    biomassDep: 70, currentGrowth: null, targetGrowth: null, accelFactor: null,
    totalInvestment: null, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "Strategy & Bioenergy Code due June 2025",
    techFocus: "LPG/Butane (primary, 50% subsidy); improved cookstoves",
    barriers: "High biomass dependency; limited LPG infrastructure in rural areas; affordability barriers; charcoal/firewood supply chains entrenched; limited data"
  },
  {
    country: "DRC", iso: "cd", cohort: "Cohort 1", language: "French", region: "Central Africa",
    currentAccess: 1, target2030: 30, targetYear: 2030, gap: 29,
    biomassDep: 95, currentGrowth: 1, targetGrowth: 5, accelFactor: 5,
    totalInvestment: 600, publicFinance: 500, privateFinance: 100, privateShare: 16.7,
    strategyStatus: "Strategy due end 2026; formalize energy policy by decree end 2025",
    techFocus: "Improved stoves and LPG; electric cooking dependent on grid reliability",
    barriers: "Low LPG supply; charcoal market entrenched; irregular electricity; no waste collection (biogas); low household income; overlapping jurisdictions"
  },
  {
    country: "Liberia", iso: "lr", cohort: "Cohort 1", language: "English", region: "West Africa",
    currentAccess: 0.8, target2030: null, targetYear: null, gap: null,
    biomassDep: null, currentGrowth: null, targetGrowth: null, accelFactor: null,
    totalInvestment: 1290, publicFinance: 1150, privateFinance: 140, privateShare: 10.9,
    strategyStatus: "National clean cooking strategy to be developed by 2026; MTF survey planned 2025",
    techFocus: "Not yet determined; deferred to national clean cooking strategy development by 2026",
    barriers: "Negligible baseline (0.8%); no established data; severe affordability gap; 14,000 dispersed settlements; weak private sector; seasonal hydro variability; high HFO generation costs",
    compact: {
      /* ───── Overview ───── */
      overview: {
        population: "5.56 million",
        income: "Low-income",
        gniPerCapita: null,
        gdpGrowth: "4.71% in 2023, expected 5.6% average 2024-2026",
        compactDate: "2024",
        electricityAccess: 32.7,
        installedCapacity: 126,
        renewableShare: 67
      },

      /* ───── Pillar I: Infrastructure ───── */
      infrastructure: {
        generation: {
          totalCapacityMW: 126,
          availableCapacityMW: 93,
          peakDemandMW: 108,
          mix: [
            { source: "Hydropower (MCHPP)", mw: 88, pct: 70 },
            { source: "Heavy Fuel Oil (HFO)", mw: 38, pct: 30 }
          ],
          annualProductionGWh: 937,
          productionMix: [
            { source: "Hydro", pct: 67 },
            { source: "Thermal", pct: 33 }
          ],
          growthRate: 14.64,
          costPerKwh: { thermal: 0.25, renewable: 0.06 },
          projects: [
            { name: "20 MW Solar PV (near Mount Coffee HPP)", type: "Solar PV", mw: 20, status: "under_construction", timeline: "Commission Q2 2027", cost: null },
            { name: "70 MW Solar PV + BESS (Private Sector)", type: "Solar PV + BESS", mw: 70, status: "planned", timeline: "Phased deployment", cost: null },
            { name: "SCATEC Containerized Solar + BESS (IFC)", type: "Solar PV + BESS", mw: 16.5, status: "planned", timeline: "Negotiations ongoing", cost: null },
            { name: "Mount Coffee HPP Extension", type: "Hydropower", mw: 60, status: "planned", timeline: "Bidding next fiscal year", cost: null },
            { name: "Saint Paul 2 HPP", type: "Hydropower", mw: 150, status: "planned", timeline: "Feasibility & bidding by Nov 2026", cost: null },
            { name: "Mini-Hydro Greenville (Sinoe County)", type: "Hydropower", mw: 2, status: "under_construction", timeline: "2024-2027", cost: 10.8 },
            { name: "Solar PV Greenville", type: "Solar PV", mw: 0.85, status: "under_construction", timeline: "2024-2028", cost: 2.6 },
            { name: "Solar PV Greenville (Phase 2)", type: "Solar PV", mw: 0.2, status: "planned", timeline: "2024-2027", cost: 2 },
            { name: "REEL Hydropower (Bong & Nimba counties)", type: "Hydropower", mw: 9.8, status: "planned", timeline: "2027", cost: null }
          ],
          targetCapacityMW: 266,
          targetRenewableMW: 238,
          targetRenewablePct: 75
        },
        transmission: {
          networkKm: {
            hv66kv: 386,
            mv33kv: 345,
            mv22kv: 667,
            lv: 1889
          },
          transferCapacity: { hv66kv: 66, mv33kv: 15, mv22kv: 11.1, lv: 0.19 },
          projects: [
            { name: "LEEAP Transmission & Substations (AfDB/EU)", status: "under_construction", timeline: "2019-2024", cost: 31.4 },
            { name: "CLSG-RE Distribution Network (Nimba, Bong, Rivercess, Grand Bassa)", status: "under_construction", timeline: "2022-2025", cost: 17.9 },
            { name: "Buchanan/Greenville/Barclayville Distribution (EU)", status: "under_construction", timeline: "2024-2027", cost: 6.5 }
          ],
          investmentM: 390
        },
        distribution: {
          totalCustomers: 312622,
          customerBreakdown: {
            households: 304166,
            commercial: 8439,
            industrial: 17
          },
          metersPrepaid: 312002,
          commercialLosses: 27.5,
          lossTrend: "47.7% (2021) → 31.4% (2023) → 27.5% (Oct 2024)",
          technicalAndCommercialLosses: 45.4,
          loadSheddingHours: 5,
          loadSheddingLossMWh: 132330
        },
        investmentM: 720
      },

      /* ───── Pillar II: Regional Integration ───── */
      regionalIntegration: {
        powerPools: [
          { name: "WAPP (West Africa Power Pool)", role: "Member / Importer", status: "operational" }
        ],
        interconnectors: [
          { name: "CLSG (Côte d'Ivoire-Liberia-Sierra Leone-Guinea)", voltagekV: 225, lengthKm: 530, capacityMW: 243, allocatedMW: 27, availableMW: 13.5, status: "operational", notes: "Only half of 27 MW available due to Côte d'Ivoire supply constraints" }
        ],
        tradeGWh: {
          imported: 139.8,
          exported: 15.3,
          importCostPerKwh: 0.16,
          wheelingChargePerKwh: 0.02,
          payableArrearsM: 74.3,
          receivableArrearsM: 52
        },
        gridReadiness: {
          description: "Exploring option of importing from Ghana through CLSG network; connecting new solar generation assets to CLSG for export capability",
          investmentM: null
        },
        investmentM: null,
        keyActions: [
          "Ensure timely payment of import obligations through CLSG network",
          "Engage with WAPP on harmonized transmission pricing (from March 2025)",
          "Explore electricity imports from Ghana through CLSG network",
          "Connect solar generation to CLSG for potential exports"
        ]
      },

      /* ───── Pillar III: Last-Mile Access ───── */
      lastMileAccess: {
        electricity: {
          currentAccessPct: 32.7,
          urbanAccessPct: 50,
          ruralAccessPct: 10,
          targetAccessPct: 75,
          targetYear: 2030,
          currentPace: 70000,
          targetPace: 100000,
          connectionPlan: {
            gridPerYear: 60000,
            miniGridPerYear: 15000,
            offGridPerYear: 25000
          },
          miniGridConnections: 2344,
          solarHomeSystems: 49441,
          shsBeneficiaries: 192412,
          gridExpansionPct: 70,
          offGridPct: 30,
          projects: [
            { name: "LESSAP (World Bank)", type: "Grid + Solar PV + RBF", timeline: "2021-2030", connections: 250000, beneficiaries: 1250000, cost: 200, notes: "10-year multiphase program; includes 70 MW solar IPP mobilization" },
            { name: "LIRENAP (World Bank)", type: "Off-grid / Solar", timeline: "2016-2025", connections: 30000, beneficiaries: 150000, cost: 27, notes: "Decentralized electrification in Lofa County" },
            { name: "REEL Project (AfDB)", type: "Hydro + Distribution", timeline: "2027", connections: 37880, beneficiaries: 60000, cost: null, notes: "9.8 MW hydro plant; Bong & Nimba counties" },
            { name: "Beyond the Grid Fund Africa (Sweden)", type: "Off-grid / DRE RBF", timeline: "2019-2030", connections: null, beneficiaries: 400000, cost: 10, notes: "Results-based financing for DRE solutions" },
            { name: "REACT SSA (Sweden)", type: "Off-grid / Clean Cooking", timeline: "2017-2026", connections: 30000, beneficiaries: null, cost: 5, notes: "Grants to RE businesses; 0.3 MW installed" },
            { name: "EnDev (GIZ)", type: "Solar + Clean Cooking", timeline: "2023-2025", connections: 40000, beneficiaries: null, cost: 6.9, notes: "SHS, clean cooking for HHs and schools; 303 health facilities; 24,000 cooking connections" },
            { name: "USAID Empower West Africa", type: "Smart meters / E-mobility / Capacity", timeline: "2024-2029", connections: null, beneficiaries: null, cost: null, notes: "Regional program covering 18 West African countries" },
            { name: "Rockefeller/GEAPP M300 Technical Assistance", type: "Network planning", timeline: "2025-2026", connections: 112273, beneficiaries: null, cost: 0.8, notes: "LEC Network Planning Manual development" }
          ]
        },
        cleanCooking: {
          currentAccessPct: 0.8,
          currentConnections: 9545,
          targetAccessPct: null,
          strategyStatus: "National clean cooking strategy to be developed by MME/RREA by 2026",
          focusAreas: "Female-headed households prioritized; baseline and targets to be established",
          investmentM: 15,
          publicFinanceM: 10,
          privateFinanceM: 5,
          projects: [
            { name: "EnDev Clean Cooking (GIZ)", connections: 24000, type: "Improved cookstoves / schools", timeline: "2023-2025" },
            { name: "REACT SSA Clean Cooking (Sweden)", connections: null, type: "Grants to clean cooking businesses", timeline: "2017-2026" }
          ]
        }
      },

      /* ───── Pillar IV: Private Sector ───── */
      privateSector: {
        totalInvestmentM: 1290,
        publicFinanceM: 1150,
        privateFinanceM: 140,
        investmentGapM: 1250,
        availableInvestmentM: 250,
        sectorBreakdown: [
          { sector: "Generation", totalM: 720, publicM: 660, privateM: 60 },
          { sector: "Transmission & Distribution", totalM: 390, publicM: 390, privateM: 0 },
          { sector: "Off-Grid", totalM: 140, publicM: 70, privateM: 70 },
          { sector: "Clean Cooking", totalM: 15, publicM: 10, privateM: 5 },
          { sector: "Capacity Building", totalM: 25, publicM: 20, privateM: 5 }
        ],
        privateTargets: {
          miniGridAndOffGrid: 80,
          utilitySolarPV: 70,
          totalPrivateCapital: 150,
          notes: "T&D private financing options to be explored during Compact implementation"
        },
        distributionLicensees: [
          { name: "LIBENERGY", type: "Private", area: "Various" },
          { name: "Jungle Energy Power (JEP)", type: "Private", area: "Nimba County" },
          { name: "Energicity Liberia", type: "Private", area: "Various" },
          { name: "Totota Electric", type: "Private", area: "Various" }
        ],
        creditEnhancement: "World Bank Group-backed guarantees; concessional financing through local banks; transaction advisory under LESSAP Phase 2",
        carbonMarkets: null,
        developmentPartners: [
          { name: "World Bank", contribution: "LESSAP ($200M, 10-year multiphase); RESPITE ($96M, solar + hydro); LIRENAP ($27M, off-grid Lofa); ESMAP grants" },
          { name: "African Development Bank (AfDB)", contribution: "REEL Project (9.8 MW hydro, distribution); LEEAP (transmission & substations)" },
          { name: "European Union (EU)", contribution: "Mini-hydro Greenville; Solar PV plants; Distribution networks in Buchanan/Greenville/Barclayville; RREA technical assistance" },
          { name: "Sweden (Sida)", contribution: "Beyond the Grid Fund Africa ($10M, RBF for DRE); REACT SSA ($5M, RE grants)" },
          { name: "GIZ (Germany)", contribution: "EnDev ($6.9M, energy access for vulnerable communities; clean cooking)" },
          { name: "USAID", contribution: "MCHPP retrofit ($850K); Empower West Africa ($73M regional, smart meters/e-mobility/capacity)" },
          { name: "International Finance Corporation (IFC)", contribution: "Supporting SCATEC 16.5 MW solar + BESS leasing; solar IPP transaction advisory" },
          { name: "Rockefeller Foundation / GEAPP", contribution: "M300 technical assistance ($800K, LEC network planning)" }
        ]
      },

      /* ───── Pillar V: Utility Reform ───── */
      utilityReform: {
        utilities: [
          {
            name: "Liberia Electricity Corporation (LEC)",
            type: "Vertically integrated utility",
            customers: 312622,
            customerBreakdown: { households: 304166, commercial: 8439, industrial: 17 },
            costRecoveryPct: 63,
            operatingLoss: "US$18M (~37% of revenue, FY 2023)",
            commercialLosses: 27.5,
            technicalAndCommercialLosses: 45.4,
            prepaidMeters: 312002,
            avgTariff: 0.23,
            subsidyM: 0,
            debtPayableGovtM: 31.4,
            debtOtherVendorsM: 42.9,
            receivableFromGovtM: 17,
            loadSheddingHours: 5,
            costRecoveryTarget: "Revenue to exceed operating costs by FY 2028",
            serviceArea: "Primarily Monrovia and surrounding area"
          }
        ],
        tariffReform: [
          { milestone: "File multi-year tariff with targets for loss reduction and cost-reflective pricing", timeline: "Regulatory approval by June 2025" },
          { milestone: "Convert all public-sector consumers (excl. essential services) to pre-paid meters", timeline: "Within one year" },
          { milestone: "Ensure all public-sector electricity bills allocated and paid starting January 2025", timeline: "January 2025" },
          { milestone: "Reduce generation costs through large-scale hydro and solar displacing HFO", timeline: "Ongoing to 2030" },
          { milestone: "Diversify customer base with mining and industrial consumers", timeline: "As new generation comes online" }
        ],
        performanceBenchmarks: [
          { metric: "Commercial Losses", current: "27.5%", target: "Continued reduction through metering and Anti-Power Task Force" },
          { metric: "Cost of Supply", current: "Highest in region (HFO at $0.25/kWh)", target: "Reduce via renewable energy (hydro $0.06/kWh, solar)" },
          { metric: "Public Sector Payment", current: "Arrears of $31.4M payable, $17M receivable", target: "Outstanding dues settled within 18 months; current bills fully paid from Jan 2025" },
          { metric: "Financial Viability", current: "Operating loss of 37% (FY 2023)", target: "Revenue exceeds costs by FY 2028" }
        ],
        reformMilestones: [
          { action: "Publish audited financial statements for FY 2024", timeline: "June 2025", pillar: "utilityReform" },
          { action: "Complete regulatory approval of multi-year tariff", timeline: "June 2025", pillar: "utilityReform" },
          { action: "Adopt corporate governance framework and recruit full-time LEC leadership", timeline: "2025", pillar: "utilityReform" },
          { action: "Achieve operational cost recovery (revenue > costs)", timeline: "FY 2028", pillar: "utilityReform" }
        ],
        regulator: "Liberia Electricity Regulatory Commission (LERC)",
        regulatorRole: "Electricity licensing, micro-utility licensing, tariffs, complaints & disputes, mini-grid codes, distribution codes"
      },

      /* ───── Strategy / Implementation Roadmap ───── */
      strategy: [
        { item: "Finalize revised National Energy Policy (NEP)", timeline: "Q1 2025 (March 2025)", status: "committed", pillar: "infrastructure" },
        { item: "Complete land acquisition for solar park", timeline: "Q2 2025 (Feb-Jun 2025)", status: "committed", pillar: "infrastructure" },
        { item: "Initiate first utility-scale solar IPP procurement", timeline: "Q2 2025", status: "committed", pillar: "privateSector" },
        { item: "Publish LEC financial statements for FY 2024", timeline: "Q3 2025", status: "committed", pillar: "utilityReform" },
        { item: "Initiate cost-reflective tariff adjustments", timeline: "Q3 2025 (June 2025)", status: "committed", pillar: "utilityReform" },
        { item: "Launch national MTF survey for energy access", timeline: "Q4 2025", status: "committed", pillar: "lastMileAccess" },
        { item: "Establish clean cooking baseline via MTF", timeline: "Q4 2025", status: "committed", pillar: "lastMileAccess" },
        { item: "Award first solar IPP contract", timeline: "December 2025", status: "committed", pillar: "privateSector" },
        { item: "Streamline mini-grid regulatory approval process (LERC)", timeline: "September 2025", status: "committed", pillar: "privateSector" },
        { item: "Develop PPP law (National Investment Commission)", timeline: "November 2025", status: "committed", pillar: "privateSector" },
        { item: "Finalize comprehensive Power System Master Plan", timeline: "Q1 2026 (June 2026)", status: "committed", pillar: "infrastructure" },
        { item: "Update National Electrification Strategy and five-year plan", timeline: "2026", status: "committed", pillar: "lastMileAccess" },
        { item: "Adopt national clean cooking strategy (MME/RREA)", timeline: "2026", status: "committed", pillar: "lastMileAccess" },
        { item: "Develop clean cooking policy framework", timeline: "2026", status: "committed", pillar: "lastMileAccess" },
        { item: "Complete Saint Paul 2 HPP feasibility study and initiate bidding", timeline: "Q4 2026 (November 2026)", status: "committed", pillar: "infrastructure" },
        { item: "Commission first 20 MW utility-scale solar project", timeline: "Q2 2027", status: "committed", pillar: "infrastructure" },
        { item: "Achieve LEC operational cost recovery", timeline: "Q1 2028", status: "committed", pillar: "utilityReform" },
        { item: "Commission additional RE projects; achieve 75% renewable mix", timeline: "Q4 2028", status: "committed", pillar: "infrastructure" },
        { item: "Complete rollout of clean cooking solutions for female-headed HHs", timeline: "Q1 2029", status: "committed", pillar: "lastMileAccess" },
        { item: "Achieve 75% national electricity access rate (100K connections/yr)", timeline: "Q2 2030", status: "committed", pillar: "lastMileAccess" },
        { item: "Conclude Compact implementation: all targets achieved", timeline: "Q4 2030", status: "committed", pillar: "infrastructure" }
      ],

      /* ───── Barriers / Risk Register ───── */
      barriers: [
        { title: "Insufficient investment mobilization ($1.25B gap)", desc: "Risk of failing to mobilize the required financing, especially $150M from private sector.", pillar: ["privateSector"] },
        { title: "LEC financial viability", desc: "Persistent technical and commercial losses (45.4%) undermine LEC's ability to achieve cost recovery and attract IPP investment.", pillar: ["utilityReform"] },
        { title: "Renewable energy project delays", desc: "Procurement and land acquisition challenges may delay Saint Paul 2 HPP and solar IPP projects.", pillar: ["infrastructure"] },
        { title: "Seasonal hydropower variability", desc: "MCHPP capacity drops by 75%+ in dry season (Jan-May), forcing reliance on costly HFO and imports.", pillar: ["infrastructure", "regionalIntegration"] },
        { title: "Inter-agency coordination challenges", desc: "Coordination among MME, LEC, RREA, LERC, and private sector in project implementation.", pillar: ["infrastructure", "privateSector"] },
        { title: "Regulatory framework delays", desc: "Delays in developing policies and frameworks for renewable energy and distributed solutions through LERC.", pillar: ["privateSector", "lastMileAccess"] },
        { title: "Environmental and social impact assessment delays", desc: "Delays in completing ESIAs for major generation projects.", pillar: ["infrastructure"] },
        { title: "Community resistance to land acquisition", desc: "Local community resistance during land acquisition for solar parks and energy projects.", pillar: ["infrastructure"] },
        { title: "Weak macroeconomic conditions", desc: "Low-income economy with high vulnerability to external shocks deters private investment.", pillar: ["privateSector"] },
        { title: "LEC creditworthiness as off-taker", desc: "Poor credit standing makes it difficult to attract private capital for IPP projects without credit enhancement instruments.", pillar: ["privateSector", "utilityReform"] },
        { title: "Urban-rural access disparity", desc: "Over 50% urban access vs. less than 10% rural; 14,000 dispersed settlements across 111,000 sq km.", pillar: ["lastMileAccess"] },
        { title: "Negligible clean cooking baseline", desc: "Only 0.8% population with clean cooking access; no established baseline or national strategy yet.", pillar: ["lastMileAccess"] },
        { title: "High cost of electricity supply", desc: "Highest cost of supply in the region due to HFO dependence ($0.25/kWh thermal vs $0.06/kWh hydro).", pillar: ["infrastructure", "utilityReform"] },
        { title: "Limited private sector scale in off-grid", desc: "Several private off-grid companies active but none at significant scale; lack of working capital and limited rural incomes.", pillar: ["privateSector", "lastMileAccess"] }
      ],

      sourceName: "National Energy Compact for Liberia",
      sourceType: "National Energy Compact"
    }
  },
  {
    country: "Madagascar", iso: "mg", cohort: "Cohort 1", language: "French", region: "East Africa",
    currentAccess: 14, target2030: 50, targetYear: 2030, gap: 36,
    biomassDep: 86, currentGrowth: null, targetGrowth: null, accelFactor: null,
    totalInvestment: 290, publicFinance: null, privateFinance: 290, privateShare: 100,
    strategyStatus: "Strategy due 2026; gap analysis report 2025; MTF surveys 2026 & 2029",
    techFocus: "Improved biomass (37%), electric (30%), LPG/biogas/bioethanol (33%)",
    barriers: "Affordability crisis (75% of HHs); <1% clean cooking; weak manufacturing; JIRAMA $400M debt; regulatory gaps"
  },
  {
    country: "Malawi", iso: "mw", cohort: "Cohort 1", language: "English", region: "Southern Africa",
    currentAccess: 2, target2030: 75, targetYear: 2030, gap: 73,
    biomassDep: 98, currentGrowth: null, targetGrowth: 7.21, accelFactor: null,
    totalInvestment: null, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "Policies in place; annual targets defined through 2030",
    techFocus: "Advanced woodstoves as primary; LPG for urban; technology-diversified approach",
    barriers: "Affordability (high upfront costs); low willingness to pay (rural); forest degradation (37% loss since 1990); gender disparities"
  },
  {
    country: "Nigeria", iso: "ng", cohort: "Cohort 1", language: "English", region: "West Africa",
    currentAccess: 26, target2030: 100, targetYear: 2030, gap: 74,
    biomassDep: null, currentGrowth: 22, targetGrowth: 25, accelFactor: 1.14,
    totalInvestment: 1200, publicFinance: 1200, privateFinance: null, privateShare: null,
    strategyStatus: "Policy approved 2024; standards adopted; MTF survey limited to 7 states",
    techFocus: "LPG/Gas (driver of recent gains); electric cooking yet to take off",
    barriers: "Slow historical growth; electric cooking stalled; geographic data limited to 7 states; large population deficit (174M)"
  },
  {
    country: "Senegal", iso: "sn", cohort: "Cohort 1", language: "French", region: "West Africa",
    currentAccess: 32, target2030: null, targetYear: 2030, gap: null,
    biomassDep: 64, currentGrowth: 3.1, targetGrowth: 11.3, accelFactor: 3.65,
    totalInvestment: null, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "Strategy due Q1 2026; technical minimums October 2025; quality standards June 2026",
    techFocus: "Improved stoves (primary); butane/LPG; emerging e-cooking",
    barriers: "No MTF survey conducted yet; quality standards gap; no price regulation for butane; improved stove supply constraints"
  },
  {
    country: "Tanzania", iso: "tz", cohort: "Cohort 1", language: "English", region: "East Africa",
    currentAccess: 6.9, target2030: 75, targetYear: 2030, gap: 68.1,
    biomassDep: 89, currentGrowth: 11.9, targetGrowth: 21, accelFactor: 1.76,
    totalInvestment: 800, publicFinance: 400, privateFinance: 400, privateShare: 50,
    strategyStatus: "National Clean Cooking Strategy (NCCS) 2024-2034 launched May 2024; Zanzibar strategy to be developed by 2027",
    techFocus: "Multi-technology: LPG/natural gas urban; improved cookstoves rural; e-cooking emerging; bioethanol; biogas; briquettes",
    barriers: "Nascent and fragmented clean cooking market; financing barriers for small projects; limited private sector participation; regulatory and policy gaps; affordability constraints; demographic pressures (3% population growth)",
    compact: {
      overview: {
        population: "61.7 million (including 1.9 million in Zanzibar)",
        income: "Lower-middle-income",
        gniPerCapita: 1210,
        gdpGrowth: "5.2% in 2023, expected 5.6% in 2024",
        compactDate: "January 2025",
        electricityAccess: 46,
        cleanCookingAccess: 6.9,
        installedCapacity: 3404.20,
        renewableShare: 61.8,
        renewableTarget: 75,
        peakDemand: 1888.72
      },
      infrastructure: {
        generation: {
          installedCapacity: 3404.20,
          availablePct: 56.05,
          mix: [
            { source: "Hydro", mw: 2011.27, pct: 59.1 },
            { source: "Natural Gas", mw: 1198.82, pct: 35.2 },
            { source: "HFO & Diesel", mw: 101.12, pct: 3.0 },
            { source: "Biomass/Co-gen", mw: 87.99, pct: 2.6 },
            { source: "Solar PV", mw: 5, pct: 0.1 }
          ],
          targetCapacity2030: 1973,
          targetBreakdown: "880 MW hydro, 463 MW solar, 500 MW wind, 130 MW geothermal",
          totalInvestment: 4124.80,
          projects: [
            { name: "Kikonge Multipurpose Dam (300 MW)", type: "generation", capacity: "300 MW hydro", cost: 870, timeline: "By 2030", status: "planned" },
            { name: "Ruhudji Hydropower (358 MW)", type: "generation", capacity: "358 MW hydro", cost: 968.37, timeline: "By 2030", status: "planned" },
            { name: "Rumakali Hydropower (222 MW)", type: "generation", capacity: "222 MW hydro", cost: 634.5, timeline: "By 2030", status: "planned" },
            { name: "Kakono Hydropower (87.8 MW)", type: "generation", capacity: "87.8 MW hydro", cost: 308.85, timeline: "2022-2029", status: "under_construction" },
            { name: "Malagarasi Hydropower (49.5 MW)", type: "generation", capacity: "49.5 MW hydro", cost: 140, timeline: "2020-2028", status: "under_construction" },
            { name: "Geothermal Power (120 MW)", type: "generation", capacity: "120 MW geothermal", cost: 623.8, timeline: "By 2030", status: "planned" },
            { name: "Singida Wind (100 MW)", type: "generation", capacity: "100 MW wind", cost: 152.46, timeline: "By 2030", status: "planned" },
            { name: "Makambako Wind (100 MW)", type: "generation", capacity: "100 MW wind", cost: 125, timeline: "By 2030", status: "planned" },
            { name: "Dodoma Solar (100 MW)", type: "generation", capacity: "100 MW solar", cost: 84, timeline: "By 2030", status: "planned" },
            { name: "Manyoni Solar (100 MW)", type: "generation", capacity: "100 MW solar", cost: 79.62, timeline: "By 2030", status: "planned" },
            { name: "Same Solar (100 MW)", type: "generation", capacity: "100 MW solar", cost: 81, timeline: "By 2030", status: "planned" }
          ]
        },
        transmission: {
          networkKm: 8025.75,
          voltageBreakdown: [
            { voltage: "400 kV", km: 1085, capacityMW: 2000 },
            { voltage: "220 kV", km: 4136.62, capacityMW: 250 },
            { voltage: "132 kV", km: 1827, capacityMW: 80 },
            { voltage: "66 kV", km: 580, capacityMW: 50 }
          ],
          totalInvestment: 1167.62,
          projects: [
            { name: "Chalinze-Segera (400 kV, 181 km)", cost: 124.3, timeline: "By 2027", status: "under_construction" },
            { name: "Segera-Tanga (220 kV, 64 km)", cost: 58.27, timeline: "By 2026", status: "under_construction" },
            { name: "Segera-Same-Kisongo (400 kV, 330 km)", cost: 184.2, timeline: "By 2028", status: "planned" },
            { name: "Submarine Cable to Zanzibar", cost: 224, timeline: "By 2030", status: "planned" }
          ]
        },
        distribution: {
          customers: 5219722,
          losses: 14.2,
          lossReductionTarget: 0.05,
          prepaidMeters: 5271125,
          networkKm: { kv33: 66992.10, kv11: 12737.36, lv: 117867.88 },
          totalInvestment: 1100
        },
        gridStabilization: {
          totalCost: 472.54,
          projectCount: 23
        },
        rehabilitation: {
          totalCost: 1398.25,
          projectCount: 21,
          keyProjects: [
            { name: "Grid substation automation & digital transformation", cost: 381.5 },
            { name: "Distribution network rehabilitation (Dar, Pwani, Dodoma, Mbeya, Mwanza)", cost: 98.1 },
            { name: "Dar es Salaam & Pwani distribution rehabilitation", cost: 157.44 },
            { name: "Fiber telecom infrastructure reinforcement", cost: 99.7 },
            { name: "Kidatu, Mtera, Nyumba ya Mungu hydro rehabilitation", cost: 93.89 },
            { name: "Ubungo II CCGT conversion (51.83 MW)", cost: 95.05 },
            { name: "Zanzibar solar + battery (30 MW + 10 MWh)", cost: 70 },
            { name: "Zanzibar energy storage (60 MWh)", cost: 90 }
          ]
        },
        totalInvestment: 5292.59
      },
      regionalIntegration: {
        powerPools: [
          { name: "EAPP", status: "Operational member since November 2024 (Kenya interconnector commissioned)" },
          { name: "SAPP", status: "Pending completion of Tanzania-Zambia interconnector by 2028" }
        ],
        interconnectors: [
          { name: "Kenya-Tanzania", capacity: "400 kV, 60 km, 100 MW", cost: 258.83, status: "commissioned", timeline: "November 2024" },
          { name: "Burundi-Rwanda-Tanzania", capacity: "220 kV, 80 km (Rusumo Falls)", cost: null, status: "commissioned", timeline: "March 2023" },
          { name: "Tanzania-Zambia", capacity: "400 kV", cost: 605, status: "under_construction", timeline: "Tanzania side by 2027; Zambia side by 2028" },
          { name: "Uganda-Tanzania", capacity: "400 kV, 605 km double circuit", cost: 590, status: "planned", timeline: "2026+" },
          { name: "Tanzania-Malawi", capacity: "400 kV, 82.3 km", cost: 54.3, status: "planned", timeline: "By 2028" },
          { name: "Tanzania-DRC", capacity: "400 kV, 100 km (Tanzania side)", cost: 50, status: "planned", timeline: "By 2030" }
        ],
        tradeCapacity: "1.5 GW of interconnections by 2028",
        gridReadinessInvestment: 80,
        tradingUnit: "TANESCO trading unit to be established by December 2025",
        regulatoryHarmonization: "Transmission pricing harmonization with EAPP/SAPP by June 2026",
        totalInvestment: 1638.13
      },
      lastMileAccess: {
        electricity: {
          currentAccess: 46,
          target2030: 75,
          connectionsNeeded: 8300000,
          currentPace: 500000,
          requiredPace: 1600000,
          onGridShare: 70,
          offGridShare: 30,
          miniGrids: { current: 68, customers: 22885 },
          investmentNeeded: 4751.22,
          projects: [
            { name: "Hamlet Electrification (HEP-IIC)", cost: 1100, timeline: "2024-2029" },
            { name: "Last-Mile Customer Densification", cost: 3521.61, timeline: "By 2030" },
            { name: "143 Islands Electrification (DRE)", cost: 129.48, timeline: "By 2030" }
          ]
        },
        cleanCooking: {
          currentAccess: 6.9,
          target2030: 75,
          target2034: 80,
          strategy: "National Clean Cooking Strategy (NCCS) 2024-2034",
          nccsCost: 1700,
          annualCost: 170,
          deployment: {
            households: 609983,
            institutions: [
              { type: "Prison premises", count: 211 },
              { type: "National Service Camps", count: 22 },
              { type: "Schools", count: 53 }
            ]
          },
          technologies: [
            { name: "LPG", desc: "Government-supported distribution expansion, focus on urban areas" },
            { name: "Natural Gas", desc: "Leveraging domestic natural gas reserves for cooking fuel" },
            { name: "Improved Cookstoves (ICS)", desc: "Primary solution for rural areas, reducing biomass consumption" },
            { name: "Electric Cooking", desc: "Emerging technology leveraging grid expansion" },
            { name: "Bioethanol", desc: "Clean liquid fuel alternative to charcoal and firewood" },
            { name: "Biogas", desc: "Household-scale digesters using agricultural and animal waste" },
            { name: "Briquettes", desc: "Compressed biomass fuel as cleaner charcoal alternative" }
          ],
          biomassDependency: [
            { region: "Mainland Tanzania", pct: 89 },
            { region: "Zanzibar", pct: 84 }
          ],
          primaryFuels: "Firewood and charcoal",
          gasUsage: "Only 3.2% mainland; 7.7% Zanzibar (mostly urban)",
          projects: [
            { name: "Distribution of 200,000 ICS (World Bank TREEP)", cost: 6, timeline: "2024-2026" },
            { name: "LPG Starter Packs (452,445 cylinders)", cost: null, timeline: "2024-2025" },
            { name: "Natural Gas Pipeline (Lindi & Pwani, 44.4 km)", cost: null, timeline: "2023-2025" },
            { name: "Clean Cooking for 52 Secondary Schools", cost: null, timeline: "2024-2026" },
            { name: "Clean Cooking for National Service Camps", cost: null, timeline: "2024-2026" },
            { name: "Tanzania Prison Services (126 biogas plants, 64 LPG)", cost: null, timeline: "2024-2026" }
          ]
        }
      },
      privateSector: {
        totalCompactInvestment: 12889.26,
        publicFinance: 8850.25,
        privateFinance: 4039.01,
        privateSharePct: 31.3,
        annualPublicNeed: 1800,
        annualPrivateNeed: 800,
        sectorBreakdown: [
          { sector: "Generation", amount: 4124.80, public: 2062.40, private: 2062.40 },
          { sector: "Transmission", amount: 1167.62, public: 583.81, private: 583.81 },
          { sector: "Distribution", amount: 1100, public: 550, private: 550 },
          { sector: "Rehabilitation", amount: 1398.25, public: 1398.25, private: 0 },
          { sector: "Last-Mile", amount: 3521.61, public: 3169.45, private: 352.16 },
          { sector: "Off-Grid", amount: 129.48, public: 38.84, private: 90.64 },
          { sector: "Clean Cooking", amount: 800, public: 400, private: 400 },
          { sector: "Capacity-Building", amount: 647.50, public: 647.50, private: 0 }
        ],
        ipps: [
          { name: "Zanzibar Solar 45 MW IPP", capacity: "45 MW solar PV", status: "Planned by 2027" },
          { name: "Total Eren Solar (100 MW)", capacity: "100 MW solar PV", status: "Planned by 2030" },
          { name: "Sinotan Wind (100 MW)", capacity: "100 MW wind", status: "Planned by 2030" },
          { name: "Upepo Energy Wind (200 MW)", capacity: "200 MW wind", status: "Planned by 2030" },
          { name: "Existing private natural gas", capacity: "220 MW", status: "Operational" },
          { name: "Existing private small hydro", capacity: "12.8 MW", status: "Operational" },
          { name: "Existing biomass/bagasse", capacity: "87.99 MW", status: "Operational" }
        ],
        carbonMarkets: "Government leveraging carbon finance to close clean cooking funding gap",
        developmentPartners: [
          { name: "World Bank", contribution: "TREEP ($550M), ASCENT ($300M), TZ-Zambia Interconnector ($465M), Zanzibar Energy ($142M), UG-TZ Interconnector ($515M)" },
          { name: "African Development Bank", contribution: "Submarine Cable ($224M), Kenya-TZ Interconnector ($259M), Kakono Hydro ($309M), Malagarasi Hydro ($140M), Northwest Grid ($168M), T&D Expansion ($427M), Segera-Kisongo ($184M)" },
          { name: "European Union", contribution: "Rural electrification (EUR 65M), Energy Sector Reform (EUR 31.6M), Cook Fund (EUR 19.4M), TZ-Zambia cofinancing (EUR 30M), UG-TZ cofinancing (EUR 44M)" },
          { name: "AFD (France)", contribution: "TZ-Zambia (EUR 100M), Grid Rehabilitation (EUR 53M), Rural Electrification (EUR 100M), Solar Programme (EUR 206M), Kakono Hydro (EUR 110M), UG-TZ (EUR 70M)" },
          { name: "Sweden", contribution: "Hale Hydro rehabilitation ($20M), Clean Cooking via AECF ($5.8M), MCFA via NEFCO ($5M), Rural Electrification ($60M)" },
          { name: "USAID / Power Africa", contribution: "Technical assistance unlocking $613M in IPP investment (Iringa, Dodoma, Singida Solar; Makambako, Singida Wind); 1.35M connections, 445 MW" },
          { name: "British International Investment", contribution: "Rift Valley Energy ($15-25M) for 7.6 MW renewables" },
          { name: "UK Aid", contribution: "MECS eCooking (GBP 3.3M), Modern Energy Cooking (GBP 3.5M), Transforming Energy Access (GBP 2M)" },
          { name: "Norway", contribution: "REA support (NOK 700M) for 113,797 connections & 725 biogas plants, ZECO capacity building (NOK 82M)" },
          { name: "JICA", contribution: "T&D maintenance (JPY 480M), Natural Gas utilization (JPY 195M), Rural Electrification (JPY 300M)" },
          { name: "UNIDO", contribution: "Waste-to-Energy ($5.27M + $15M private, 16 MW), Bioethanol for cooking ($2.46M + $3.5M private, 45,000 HH)" },
          { name: "Korea EXIM Bank", contribution: "Kigoma-Nyakanazi substations construction" }
        ]
      },
      utilityReform: {
        utilities: [
          {
            name: "TANESCO",
            type: "Vertically integrated (generation, transmission, distribution)",
            customers: 5219722,
            costRecovery: 80,
            losses: 14.2,
            lossReductionTarget: 0.05,
            subsidy: 56.8,
            billCollection: 96,
            prepaidMeters: 5271125,
            avgCost: 0.085,
            netIncome: 20.3,
            challenges: "Low revenue from new low-consumption customers; non-cost-reflective tariffs; high operating costs; over-dependence on government"
          },
          {
            name: "ZECO",
            type: "Vertically integrated (Zanzibar)",
            customers: 338578,
            costRecovery: 81,
            losses: null,
            subsidy: null,
            billCollection: 98,
            govtBillCollection: 29,
            challenges: "High technical losses; overloaded transformers; distribution feeders longer than industry practice; reliability issues"
          }
        ],
        tariffReform: [
          { milestone: "Cost-of-service study completed", timeline: "By June 2026" },
          { milestone: "Methodology for cost-recovery tariffs established", timeline: "By June 2026" },
          { milestone: "Multi-year incentive-based tariff regime applied (mainland + Zanzibar)", timeline: "By June 2026" },
          { milestone: "Retail tariff structures reviewed and improved", timeline: "By June 2026" },
          { milestone: "Annual tariff adjustments published", timeline: "2027, 2028, 2029, 2030" }
        ],
        performanceBenchmarks: [
          { metric: "T&D Losses", current: "14.2%", target: "0.05% reduction per year" },
          { metric: "Cost Recovery", current: "80% (TANESCO), 81% (ZECO)", target: "100%" },
          { metric: "Annual Subsidy", current: "$56.8M", target: "Phase out via tariff reform" },
          { metric: "Prepaid Meters", current: "5.27M of 5.28M total (99.9%)", target: "Maintain" }
        ],
        reformMilestones: [
          { item: "Performance improvement plans approved by regulator", timeline: "By June 2026" },
          { item: "EWURA publishes annual performance progress reports", timeline: "Starting 2027" },
          { item: "ZECO annual financial statements published", timeline: "Starting March 2025" },
          { item: "SPP framework revised with cost-reflective tariffs", timeline: "By June 2026" },
          { item: "Net metering rules updated for renewables", timeline: "By June 2027" },
          { item: "Zanzibar Energy Act enacted", timeline: "By 2026" }
        ]
      },
      strategy: [
        { item: "Prepare comprehensive Power System Master Plan (PSMP/IRP)", timeline: "By 2025", pillar: "infrastructure" },
        { item: "Competitive procurement framework operationalized", timeline: "By June 2027", pillar: "infrastructure" },
        { item: "Renewable Energy IPP Procurement Programme (REI4P)", timeline: "By June 2026", pillar: "infrastructure" },
        { item: "Pilot independent power transmission (IPT) project", timeline: "By 2027", pillar: "infrastructure" },
        { item: "TANESCO trading unit established", timeline: "By December 2025", pillar: "regionalIntegration" },
        { item: "Grid investments for EAPP/SAPP compliance identified", timeline: "By June 2025", pillar: "regionalIntegration" },
        { item: "Critical interconnection equipment procured and installed", timeline: "By June 2027", pillar: "regionalIntegration" },
        { item: "Regulatory framework harmonization for power trade", timeline: "By June 2026", pillar: "regionalIntegration" },
        { item: "M&E plan revised to include multi-tier framework", timeline: "By June 2026", pillar: "lastMileAccess" },
        { item: "Rural Energy Master Plan revised with private sector role", timeline: "By June 2027", pillar: "lastMileAccess" },
        { item: "National Clean Cooking Action Plan adopted", timeline: "By June 2026", pillar: "lastMileAccess" },
        { item: "Connection subsidy policy defined and adopted", timeline: "By June 2026", pillar: "lastMileAccess" },
        { item: "Clean cooking standards and testing infrastructure", timeline: "By June 2027", pillar: "lastMileAccess" },
        { item: "Taxes and duties reduced for clean cooking", timeline: "By June 2026", pillar: "lastMileAccess" },
        { item: "RBF facility for improved cookstoves scaled up", timeline: "By June 2025", pillar: "lastMileAccess" },
        { item: "National Clean Cooking Fund established", timeline: "By June 2025", pillar: "lastMileAccess" },
        { item: "SPP framework revised for cost-reflective tariffs", timeline: "By June 2026", pillar: "privateSector" },
        { item: "PPP legal and regulatory frameworks strengthened", timeline: "By December 2025", pillar: "privateSector" },
        { item: "Transaction advisors retained for priority PPP projects", timeline: "By 2027", pillar: "privateSector" },
        { item: "Zanzibar Energy Act developed and enacted", timeline: "By 2026", pillar: "privateSector" },
        { item: "Cost-of-service study completed", timeline: "By June 2026", pillar: "utilityReform" },
        { item: "Multi-year incentive-based tariff regime applied", timeline: "By June 2026", pillar: "utilityReform" },
        { item: "Performance improvement plans for TANESCO and ZECO", timeline: "By June 2026", pillar: "utilityReform" },
        { item: "Annual tariff adjustments published", timeline: "2027-2030", pillar: "utilityReform" }
      ],
      barriers: [
        { title: "Non-competitive procurement", desc: "Lengthy negotiations, tender cancellations, costly unsolicited proposals; bankability issues deter investors", pillar: "infrastructure" },
        { title: "Limited planning capacity", desc: "PSMP lacks regional integration; no fixed update schedule; insufficient planning tools and staff", pillar: "infrastructure" },
        { title: "Grid readiness for trade", desc: "Lack of automatic generation control, operating reserves, and backup control center for interconnected operations", pillar: "regionalIntegration" },
        { title: "Regulatory misalignment", desc: "National frameworks not harmonized with EAPP/SAPP grid codes and transmission pricing", pillar: "regionalIntegration" },
        { title: "Connection affordability", desc: "Households cannot afford wiring costs; 30,702 of 64,359 hamlets lack electricity", pillar: "lastMileAccess" },
        { title: "Clean cooking market nascent", desc: "Fragmented market with low adoption; 89% biomass dependency on mainland", pillar: "lastMileAccess" },
        { title: "Data tracking gap", desc: "Government figures lag 4 years; last published data from 2020; limited MTF surveys", pillar: "lastMileAccess" },
        { title: "Financing for small projects", desc: "Developers lack equity/collateral; local banks cannot structure renewable energy loans", pillar: "privateSector" },
        { title: "Non-cost-reflective tariffs", desc: "SPP tariffs not reflective of costs; unpredictable investment environment", pillar: "privateSector" },
        { title: "PPP framework gaps", desc: "Past controversies with risk allocation, lengthy negotiations, bankability issues", pillar: "privateSector" },
        { title: "TANESCO financial strain", desc: "80% cost recovery; $56.8M annual subsidy; low-consumption new customers reduce revenue", pillar: "utilityReform" },
        { title: "ZECO reliability issues", desc: "Overloaded transformers; feeders exceed industry standards; high technical losses; 29% govt bill collection", pillar: "utilityReform" },
        { title: "Deteriorating network", desc: "Quality indicators exceed regulatory allowances; inadequate O&M due to non-cost-recovery tariffs", pillar: "utilityReform" },
        { title: "Demographic pressure", desc: "3% annual population growth requires accelerated deployment across all pillars", pillar: "cross-cutting" }
      ],
      sourceName: "M300-AES-Compact-Tanzania",
      sourceType: "National Energy Compact — Africa Energy Summit"
    }
  },
  {
    country: "Zambia", iso: "zm", cohort: "Cohort 1", language: "English", region: "Southern Africa",
    currentAccess: 8.9, target2030: 40, targetYear: 2030, gap: 31.1,
    biomassDep: 83.6, currentGrowth: null, targetGrowth: null, accelFactor: null,
    totalInvestment: null, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "Strategy due June 2025",
    techFocus: "Electric cooking (leveraging high electrification); LPG and ethanol as alternatives",
    barriers: "Limited financing access; inadequate regulatory frameworks; affordability barriers; weak public awareness; limited rural credit"
  },
  {
    country: "Mauritania", iso: "mr", cohort: "Cohort 1", language: "French", region: "West Africa",
    currentAccess: 54, target2030: 100, targetYear: 2030, gap: 46,
    biomassDep: null, currentGrowth: 4, targetGrowth: 12, accelFactor: 3,
    totalInvestment: 205, publicFinance: 205, privateFinance: 0, privateShare: 0,
    strategyStatus: "Strategy due 2025; integration of butane, electric cooking, and biogas",
    techFocus: "Natural gas (Nouakchott focus); improved cookstoves; typha briquettes (unique)",
    barriers: "Low population density; limited institutional framework; electric cooking integration complexity; 100% public financing reliance"
  },
  {
    country: "Niger", iso: "ne", cohort: "Cohort 1", language: "French", region: "West Africa",
    currentAccess: 6, target2030: 12, targetYear: 2030, gap: 6,
    biomassDep: 94, currentGrowth: 1, targetGrowth: 1, accelFactor: 1,
    totalInvestment: 32, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "Strategy exists (2017/2020); electricity code update due 2025; MTF survey 2025",
    techFocus: "Coal briquettes and LPG infrastructure; improved stoves",
    barriers: "Severe deforestation pressure; limited adoption outside urban; lack of statistics; geographic/security constraints; very modest 1% annual growth target"
  },
  {
    country: "Benin", iso: "bj", cohort: "Cohort 2", language: "French", region: "West Africa",
    currentAccess: 10.5, target2030: 50, targetYear: 2030, gap: 39.5,
    biomassDep: 60, currentGrowth: null, targetGrowth: null, accelFactor: null,
    totalInvestment: null, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "SNCP update Q1 2026; standards Q4 2026; Phase 1 (2026-27), Phase 2 (2027-30)",
    techFocus: "LPG/Butane (primary); improved biomass stoves",
    barriers: "Data/monitoring gap; institutional fragmentation; weak LPG rural distribution; insufficient private sector incentives"
  },
  {
    country: "Botswana", iso: "bw", cohort: "Cohort 2", language: "English", region: "Southern Africa",
    currentAccess: 66.6, target2030: 90, targetYear: 2030, gap: 23.4,
    biomassDep: 33.9, currentGrowth: 2.4, targetGrowth: 5, accelFactor: 2.08,
    totalInvestment: null, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "Strategy due April 2026; dedicated project unit by December 2025",
    techFocus: "LPG (dominant urban); electric cooking; improved biomass for rural",
    barriers: "No dedicated strategy; limited commercial viability; highest electricity tariffs in Africa; 63.3pp urban-rural gap; no local manufacturing"
  },
  {
    country: "Burundi", iso: "bi", cohort: "Cohort 2", language: "French", region: "East Africa",
    currentAccess: 0.1, target2030: 40, targetYear: 2030, gap: 39.9,
    biomassDep: 95, currentGrowth: 0.1, targetGrowth: 5, accelFactor: 50,
    totalInvestment: 350, publicFinance: 210, privateFinance: 140, privateShare: 40,
    strategyStatus: "Strategy due Dec 2025; national lab June 2026; quality standards Dec 2026",
    techFocus: "Electric cooking (leveraging electrification push); improved stoves",
    barriers: "No established market; limited currency access for imports; deep cultural preference for biomass; only 25.9% electricity access"
  },
  {
    country: "Cameroon", iso: "cm", cohort: "Cohort 2", language: "French", region: "Central Africa",
    currentAccess: 23.4, target2030: 40, targetYear: 2030, gap: 16.6,
    biomassDep: 80, currentGrowth: null, targetGrowth: 12.5, accelFactor: null,
    totalInvestment: 114, publicFinance: 84, privateFinance: 30, privateShare: 26.3,
    strategyStatus: "Strategy due end 2026; standards 2026-2028; digital monitoring platform",
    techFocus: "LPG and improved cookstoves; ecological charcoal",
    barriers: "10 strategic/policy gaps; high costs; limited HH capacity; distribution infrastructure gaps; electricity reliability"
  },
  {
    country: "Comoros", iso: "km", cohort: "Cohort 2", language: "French", region: "East Africa",
    currentAccess: 0.5, target2030: 30, targetYear: 2030, gap: 29.5,
    biomassDep: 99.5, currentGrowth: 0.1, targetGrowth: 6, accelFactor: 60,
    totalInvestment: 11.2, publicFinance: 3.36, privateFinance: 7.84, privateShare: 70,
    strategyStatus: "Strategy due Dec 2026; MTF survey Oct 2026; monitoring unit Dec 2025",
    techFocus: "Biogas (40% of investment) and LPG (40%); electric cooking (20%)",
    barriers: "75% cite affordability as main barrier; entrenched biomass use; limited industrial capacity; island supply chain complexity"
  },
  {
    country: "Congo (Republic)", iso: "cg", cohort: "Cohort 2", language: "French", region: "Central Africa",
    currentAccess: 39.6, target2030: 81, targetYear: 2030, gap: 41.4,
    biomassDep: null, currentGrowth: null, targetGrowth: null, accelFactor: null,
    totalInvestment: 50, publicFinance: 25, privateFinance: 25, privateShare: 50,
    strategyStatus: "SNCP due Dec 2026; tax exemptions Dec 2025; Gender & Energy Strategy Dec 2026",
    techFocus: "Electric cooking via grid/mini-grids/solar; LPG",
    barriers: "No clean cooking strategy exists; no market; electricity utility financial crisis; tariffs unchanged 30+ years; rural electrification 1.01%"
  },
  {
    country: "Ethiopia", iso: "et", cohort: "Cohort 2", language: "English", region: "East Africa",
    currentAccess: 8, target2030: 57.7, targetYear: 2030, gap: 49.7,
    biomassDep: 92, currentGrowth: null, targetGrowth: 9.95, accelFactor: null,
    totalInvestment: 600, publicFinance: 600, privateFinance: null, privateShare: null,
    strategyStatus: "NCCS in place (2024-2034); Roadmap (2025-2035); standards enforcement defined",
    techFocus: "Electric cooking and improved/advanced biomass stoves",
    barriers: "25+ barriers: market fragmentation, supply chain gaps, financing gaps, institutional challenges, awareness barriers"
  },
  {
    country: "Gambia", iso: "gm", cohort: "Cohort 2", language: "English", region: "West Africa",
    currentAccess: 25, target2030: 50, targetYear: 2030, gap: 25,
    biomassDep: 75, currentGrowth: null, targetGrowth: 4.17, accelFactor: null,
    totalInvestment: null, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "Strategy finalization June 2026; standards Q4 2026; MTF survey Q2 2025",
    techFocus: "LPG (primary); electric cooking (secondary)",
    barriers: "Affordability barriers; nascent market; rural-urban disparities; data gaps; import dependence"
  },
  {
    country: "Ghana", iso: "gh", cohort: "Cohort 2", language: "English", region: "West Africa",
    currentAccess: 36.9, target2030: 50, targetYear: 2030, gap: 13.1,
    biomassDep: 60, currentGrowth: null, targetGrowth: null, accelFactor: null,
    totalInvestment: 760, publicFinance: 200, privateFinance: 560, privateShare: 73.7,
    strategyStatus: "NLPGPP ongoing; National Clean Cooking Policy due mid-2026",
    techFocus: "LPG (primary); improved biomass for rural; eCooking emerging",
    barriers: "Urban-rural disparity; affordability of LPG rural; $650M funding gap; limited LPG rural distribution"
  },
  {
    country: "Guinea", iso: "gn", cohort: "Cohort 2", language: "French", region: "West Africa",
    currentAccess: 12, target2030: 35, targetYear: 2030, gap: 23,
    biomassDep: 98, currentGrowth: null, targetGrowth: null, accelFactor: null,
    totalInvestment: null, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "Strategy under development",
    techFocus: "DRE and clean cooking solutions integrated approach",
    barriers: "Low penetration; affordability; limited supply chains; regulatory gaps; EDG financial challenges"
  },
  {
    country: "Kenya", iso: "ke", cohort: "Cohort 2", language: "English", region: "East Africa",
    currentAccess: 34.4, target2030: 100, targetYear: 2030, gap: 65.6,
    biomassDep: 69, currentGrowth: null, targetGrowth: null, accelFactor: null,
    totalInvestment: null, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "KNCTS developed 2024; action plan expected March 2026",
    techFocus: "E-cooking and LPG primary; solar cooking, green hydrogen, bio-methane emerging",
    barriers: "Policy gaps; affordability; cultural practices; weak supply chains; low adoption; limited government funding"
  },
  {
    country: "Lesotho", iso: "ls", cohort: "Cohort 2", language: "English", region: "Southern Africa",
    currentAccess: 45.2, target2030: 75, targetYear: 2030, gap: 29.8,
    biomassDep: 62, currentGrowth: null, targetGrowth: 0.48, accelFactor: null,
    totalInvestment: null, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "Strategy due Nov 2025; Energy Bill draft; LPG regs Dec 2025",
    techFocus: "Improved biomass stoves and LPG; e-cooking potential",
    barriers: "Limited private sector investment; inadequate fiscal incentives; affordability barriers; rugged terrain/dispersed population"
  },
  {
    country: "Mozambique", iso: "mz", cohort: "Cohort 2", language: "English", region: "East Africa",
    currentAccess: 17, target2030: 54, targetYear: 2030, gap: 37,
    biomassDep: 83, currentGrowth: null, targetGrowth: null, accelFactor: 8,
    totalInvestment: null, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "Strategy due 2026; LPG Master Plan 2026; carbon market regulation planned",
    techFocus: "LPG (primary scaling); ICS for rural; electric cooking urban",
    barriers: "50+ barriers: financing fragmentation, weak regulatory coordination, infrastructure gaps, affordability, gender disparities"
  },
  {
    country: "Namibia", iso: "na", cohort: "Cohort 2", language: "English", region: "Southern Africa",
    currentAccess: 48.5, target2030: 61, targetYear: 2030, gap: 12.5,
    biomassDep: 51.5, currentGrowth: 0.9, targetGrowth: 3.6, accelFactor: 4,
    totalInvestment: null, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "Strategy due 2026; project unit by Dec 2025; off-grid + clean cooking pilot 2026",
    techFocus: "Electric cooking; LPG; improved biomass for rural",
    barriers: "Policy gaps; limited commercial viability; highest electricity tariffs; 63.3pp urban-rural gap; no local manufacturing"
  },
  {
    country: "São Tomé and Príncipe", iso: "st", cohort: "Cohort 2", language: "English", region: "Central Africa",
    currentAccess: 62, target2030: 75, targetYear: 2030, gap: 13,
    biomassDep: 80.3, currentGrowth: null, targetGrowth: 2.17, accelFactor: null,
    totalInvestment: 30, publicFinance: 8, privateFinance: 23, privateShare: 76.7,
    strategyStatus: "Action Plan adoption 2026; Phase 1 Foundation (2025-26), Phase 2 Scale-up (2027-28)",
    techFocus: "LPG (primary); improved cookstoves (secondary)",
    barriers: "Supply chain gaps; standards gaps; affordability; entrenched kerosene use; awareness gaps; limited private sector"
  },
  {
    country: "Sierra Leone", iso: "sl", cohort: "Cohort 2", language: "English", region: "West Africa",
    currentAccess: 1.5, target2030: 25, targetYear: 2030, gap: 23.5,
    biomassDep: 90, currentGrowth: null, targetGrowth: 3.9, accelFactor: null,
    totalInvestment: 100, publicFinance: null, privateFinance: null, privateShare: null,
    strategyStatus: "CCDU established; strategy approval Sept 2025; standards in development",
    techFocus: "Improved cookstoves (1M units); LPG scaling",
    barriers: "LPG canister cost barrier; supply chain constraints; limited market; insufficient financing; behavioral barriers"
  },
  {
    country: "Togo", iso: "tg", cohort: "Cohort 2", language: "French", region: "West Africa",
    currentAccess: 14, target2030: 80, targetYear: 2030, gap: 66,
    biomassDep: 87, currentGrowth: null, targetGrowth: 11, accelFactor: null,
    totalInvestment: 32.7, publicFinance: 19, privateFinance: 18, privateShare: 55,
    strategyStatus: "Coordination framework T3 2025; governance T1 2026; acceleration 2027-28; target 80% by 2030",
    techFocus: "Improved stoves (400K units) and modern fuels (LPG, bioethanol, biogas)",
    barriers: "High upfront costs; limited affordable financing; weak distribution infrastructure; low awareness; behavioral barriers"
  },
  {
    country: "Zimbabwe", iso: "zw", cohort: "Cohort 2", language: "English", region: "Southern Africa",
    currentAccess: 38.6, target2030: 70, targetYear: 2030, gap: 31.4,
    biomassDep: 61, currentGrowth: null, targetGrowth: 6.28, accelFactor: null,
    totalInvestment: 791.5, publicFinance: 237.5, privateFinance: 554, privateShare: 70,
    strategyStatus: "Strategy approval Q3 2025; operational Q4 2026; quality standards Q2 2026",
    techFocus: "LPG; biogas; electricity-based; solar cooking",
    barriers: "Weak awareness; inadequate quality standards; high costs; limited consumer financing; currency instability"
  }
];

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

const techCategories = [
  {
    title: "LPG / Natural Gas",
    description: "The most widely targeted technology across Mission 300 countries, particularly for urban areas.",
    countries: ["Nigeria", "Chad", "Ghana", "Côte d'Ivoire", "Cameroon", "Mauritania", "Congo (Republic)", "Kenya", "Lesotho", "Benin", "Gambia", "Mozambique", "Zimbabwe", "Sierra Leone", "São Tomé and Príncipe", "Comoros", "Botswana", "Namibia"],
    color: "#F5A623"
  },
  {
    title: "Improved Cookstoves",
    description: "Advanced biomass stoves serving as a transitional technology, especially in rural areas with high wood dependency.",
    countries: ["Malawi", "Senegal", "Tanzania", "Togo", "Sierra Leone", "Chad", "Niger", "Cameroon", "Benin", "Madagascar", "Ethiopia", "Lesotho", "Botswana", "Côte d'Ivoire"],
    color: "#59AF32"
  },
  {
    title: "Electric Cooking",
    description: "Leveraging grid expansion and electrification programs, with growing interest in induction and solar-electric solutions.",
    countries: ["Zambia", "Burundi", "Congo (Republic)", "Ethiopia", "Kenya", "Botswana", "Namibia", "Madagascar", "Tanzania", "DRC"],
    color: "#00B2FF"
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
