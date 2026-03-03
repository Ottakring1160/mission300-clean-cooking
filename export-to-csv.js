// Export data.js to CSV files for Google Sheets import
// Run: node export-to-csv.js

const fs = require('fs');

// Load data.js — replace const with var so eval exposes them
const dataContent = fs.readFileSync('./data.js', 'utf-8')
  .replace(/^const /gm, 'var ');
eval(dataContent);

function escapeCSV(val) {
  if (val === null || val === undefined) return '';
  const str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

function toCSVRow(arr) {
  return arr.map(escapeCSV).join(',');
}

// ── Tab 1: Countries ──
const countryHeaders = [
  'country', 'iso', 'cohort', 'language', 'region',
  'currentAccess', 'target2030', 'targetYear', 'gap',
  'biomassDep', 'currentGrowth', 'targetGrowth', 'accelFactor',
  'totalInvestment', 'publicFinance', 'privateFinance', 'privateShare',
  'strategyStatus', 'techFocus', 'barriers', 'compactJSON'
];

const countryRows = countries.map(c => {
  const compactJSON = c.compact ? JSON.stringify(c.compact) : '';
  return [
    c.country, c.iso, c.cohort, c.language, c.region,
    c.currentAccess, c.target2030, c.targetYear, c.gap,
    c.biomassDep, c.currentGrowth, c.targetGrowth, c.accelFactor,
    c.totalInvestment, c.publicFinance, c.privateFinance, c.privateShare,
    c.strategyStatus, c.techFocus, c.barriers, compactJSON
  ];
});

const countriesCSV = [toCSVRow(countryHeaders), ...countryRows.map(toCSVRow)].join('\n');
fs.writeFileSync('./export-countries.csv', countriesCSV, 'utf-8');
console.log(`Exported ${countryRows.length} countries to export-countries.csv`);

// ── Tab 2: Barriers ──
const barrierHeaders = ['title', 'icon', 'description', 'count'];
const barrierRows = barrierCategories.map(b => [b.title, b.icon, b.description, b.count]);
const barriersCSV = [toCSVRow(barrierHeaders), ...barrierRows.map(toCSVRow)].join('\n');
fs.writeFileSync('./export-barriers.csv', barriersCSV, 'utf-8');
console.log(`Exported ${barrierRows.length} barriers to export-barriers.csv`);

// ── Tab 3: Technologies ──
const techHeaders = ['title', 'description', 'countries', 'color'];
const techRows = techCategories.map(t => [t.title, t.description, t.countries.join(', '), t.color]);
const techCSV = [toCSVRow(techHeaders), ...techRows.map(toCSVRow)].join('\n');
fs.writeFileSync('./export-technologies.csv', techCSV, 'utf-8');
console.log(`Exported ${techRows.length} technologies to export-technologies.csv`);

// ── Summary ──
const compactCountries = countries.filter(c => c.compact);
console.log(`\nCountries with compact data: ${compactCountries.map(c => c.country).join(', ')}`);
console.log(`Compact JSON size (Tanzania): ${JSON.stringify(countries.find(c => c.iso === 'tz').compact).length} chars`);
console.log(`Compact JSON size (Liberia): ${JSON.stringify(countries.find(c => c.iso === 'lr').compact).length} chars`);
console.log('\nDone! Import these CSV files into your Google Sheet tabs.');
