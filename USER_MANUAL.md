# Mission 300 Clean Cooking Website — User Manual

**Version:** 3.0 (SEforALL Rebrand)
**Last Updated:** March 2026
**Live Site:** https://ottakring1160.github.io/mission300-clean-cooking/

---

## Table of Contents

1. [Overview](#1-overview)
2. [How to Use the Website](#2-how-to-use-the-website)
3. [Project File Structure](#3-project-file-structure)
4. [How to Update Country Data](#4-how-to-update-country-data)
5. [How to Add a New Country](#5-how-to-add-a-new-country)
6. [How to Update Barrier & Technology Categories](#6-how-to-update-barrier--technology-categories)
7. [How to Change Photos](#7-how-to-change-photos)
8. [How to Change Branding (Colors & Fonts)](#8-how-to-change-branding-colors--fonts)
9. [How to Add a New Filter](#9-how-to-add-a-new-filter)
10. [How to Deploy Updates](#10-how-to-deploy-updates)
11. [Design System Reference](#11-design-system-reference)
12. [Troubleshooting](#12-troubleshooting)

---

## 1. Overview

This is a single-page data visualization website for the **Mission 300** initiative by **Sustainable Energy for All (SEforALL)**. It presents clean cooking analysis data for 30 African countries, sourced from National Energy Compact documents submitted to the Africa Energy Summit.

**Key Features:**
- Interactive country profiles with flags, filters (cohort, region, language), and search
- Gap analysis chart (current access vs. 2030 targets)
- Investment breakdown chart (public vs. private financing)
- Key barriers and technology pathway cards
- Detailed country modal with full statistics
- Responsive design (desktop, tablet, mobile)
- Scroll-triggered animations

**Technology Stack:**
- Vanilla HTML, CSS, JavaScript (no frameworks, no build tools)
- Google Fonts (Barlow Condensed + Mulish)
- Country flags via flagcdn.com CDN
- Hosted on GitHub Pages

---

## 2. How to Use the Website

### Navigation
- Use the top navigation bar to jump to any section: **Overview, Countries, Data, Investment, Challenges, Technology**
- On mobile, tap the hamburger menu (three lines) to open the navigation

### Filtering Countries
The Countries section has three filter groups that work together:

| Filter | Options |
|--------|---------|
| **Cohort** | All (30), Cohort 1 (12), Cohort 2 (18) |
| **Region** | All Regions, West Africa (11), East Africa (8), Central Africa (6), Southern Africa (5) |
| **Language** | All, French (15), English (15) |

- Click any filter button to activate it (highlighted in navy blue)
- Filters combine with AND logic (e.g., "Cohort 1" + "East Africa" shows only Cohort 1 countries in East Africa)
- A summary line shows: "Showing **X** countries matching: [filters]"
- Use the search bar to further filter by country name

### Viewing Country Details
- Click any country card to open a detailed modal with:
  - All statistics (access rates, investment, growth, biomass dependency)
  - Technology focus areas
  - Strategy status
  - Key barriers
- Close the modal by clicking the X button, clicking outside, or pressing Escape

### Reading Charts
- **Gap Analysis Chart:** Yellow bars = current access, green (faded) = 2030 target. The gap between them shows how far each country needs to go.
- **Investment Chart:** Navy blue = public finance, green = private finance. Bar length shows relative investment amounts.

---

## 3. Project File Structure

```
C:\Users\jeehy\Documents\M300\
|-- index.html          # Main page structure
|-- styles.css          # All styling and design system
|-- app.js              # Application logic (rendering, filtering, animations)
|-- data.js             # All country data, barrier categories, tech categories
|-- .gitignore          # Git ignore rules
|-- photos/
|   |-- hero-engineers.jpg       # Hero background (solar panel engineers)
|   |-- challenge-smoke.jpg      # Photo banner (biomass cooking smoke)
|   |-- solution-cooking.jpg     # Photo banner (clean cooking in Togo)
|   |-- woman-engineer.jpg       # Photo banner (woman engineer)
|   |-- school-girls.jpg         # CTA section (school girls)
```

### What Each File Does

| File | Purpose | When to Edit |
|------|---------|-------------|
| `data.js` | Contains all 30 countries, 6 barriers, 5 technologies | When data changes (new countries, updated stats) |
| `index.html` | Page structure, section text, filter buttons | When adding sections, changing static text, or adding filter options |
| `styles.css` | Colors, fonts, layout, responsive design | When changing branding, layout, or visual design |
| `app.js` | Rendering logic, filtering, modals, animations | When changing how data is displayed or adding new interactions |

---

## 4. How to Update Country Data

### Step-by-Step

1. Open `data.js` in a text editor
2. Find the country you want to update in the `countries` array
3. Change the relevant field value(s)
4. Save the file

### Example: Update Chad's Current Access from 6% to 8%

**Before:**
```javascript
{ country: "Chad", iso: "td", cohort: "Cohort 1", language: "French", region: "Central Africa",
  currentAccess: 6, target2030: 46, ...
```

**After:**
```javascript
{ country: "Chad", iso: "td", cohort: "Cohort 1", language: "French", region: "Central Africa",
  currentAccess: 8, target2030: 46, ...
```

### Important: Check Aggregate Totals

If you update investment amounts or access rates, you may also need to update the hardcoded aggregate numbers in `index.html`:

| What Changed | Where to Update in index.html |
|-------------|-------------------------------|
| Total investment | Investment section: `$6.64B` text, and hero stat `data-count="6.6"` |
| Average access rate | Overview section: `22%` card |
| Average biomass dependency | Overview section: `79%` card |
| Public/private finance totals | Investment section: `$4.33B` and `$2.18B` cards, and `65%`/`35%` labels |

### Country Data Fields Reference

| Field | Type | Example | Notes |
|-------|------|---------|-------|
| `country` | string | `"Chad"` | Display name, must be unique |
| `iso` | string | `"td"` | Lowercase 2-letter ISO code for flag |
| `cohort` | string | `"Cohort 1"` | Must be `"Cohort 1"` or `"Cohort 2"` |
| `language` | string | `"French"` | Must be `"French"` or `"English"` |
| `region` | string | `"Central Africa"` | Must match a filter button value |
| `currentAccess` | number | `6` | Percentage (0-100) |
| `target2030` | number/null | `46` | Percentage, or `null` if unknown |
| `targetYear` | number/null | `2030` | Usually 2030 |
| `gap` | number/null | `40` | Percentage points |
| `biomassDep` | number/null | `90` | Percentage |
| `currentGrowth` | number/null | `null` | Annual growth rate % |
| `targetGrowth` | number/null | `5` | Annual target growth rate % |
| `accelFactor` | number/null | `null` | Ratio |
| `totalInvestment` | number/null | `656` | USD millions |
| `publicFinance` | number/null | `627` | USD millions |
| `privateFinance` | number/null | `29` | USD millions |
| `privateShare` | number/null | `4.4` | Percentage |
| `strategyStatus` | string | `"Strategy due..."` | Free text |
| `techFocus` | string | `"LPG with..."` | Free text |
| `barriers` | string | `"Low LPG..."` | Free text |

Use `null` for any unknown or unavailable values. The website will display "TBD" or "N/A" for null values.

---

## 5. How to Add a New Country

### Step 1: Add the Country Object to data.js

Add a new entry to the `countries` array in `data.js`. Copy the structure of an existing country and fill in all 20 fields:

```javascript
{
  country: "New Country Name",
  iso: "xx",              // 2-letter ISO code, lowercase
  cohort: "Cohort 2",     // "Cohort 1" or "Cohort 2"
  language: "English",    // "French" or "English"
  region: "East Africa",  // Must match an existing filter
  currentAccess: 10,
  target2030: 50,
  targetYear: 2030,
  gap: 40,
  biomassDep: 85,
  currentGrowth: null,
  targetGrowth: 4,
  accelFactor: null,
  totalInvestment: 200,
  publicFinance: 150,
  privateFinance: 50,
  privateShare: 25,
  strategyStatus: "Strategy under development",
  techFocus: "LPG and improved cookstoves",
  barriers: "Limited infrastructure and affordability"
},
```

### Step 2: Find the ISO Code

Go to https://flagcdn.com and look up the 2-letter ISO 3166-1 alpha-2 code for the country. It must be **lowercase**. Example: Kenya = `ke`, Nigeria = `ng`.

### Step 3: Update Filter Counts in index.html

Update the count badges in the filter buttons to reflect the new totals:

```html
<!-- Update "All" count -->
<button class="filter-btn active" data-filter="all" data-type="cohort">All <span class="filter-count">31</span></button>

<!-- Update the appropriate cohort count -->
<button class="filter-btn" data-filter="Cohort 2" data-type="cohort">Cohort 2 <span class="filter-count">19</span></button>

<!-- Update the appropriate region count -->
<button class="filter-btn" data-filter="East Africa" data-type="region">East Africa <span class="filter-count">9</span></button>

<!-- Update the appropriate language count -->
<button class="filter-btn" data-filter="English" data-type="language">English <span class="filter-count">16</span></button>
```

### Step 4: Update Hero and Overview Stats

In `index.html`, update:
- Hero stat: change `data-count="30"` to `data-count="31"`
- Recalculate averages for the overview cards if needed
- Update investment totals if needed

### Step 5: Add to Technology Categories (if applicable)

In `data.js`, add the country name to the relevant `techCategories[].countries` arrays. The name must **exactly match** the `country` field in the country object.

---

## 6. How to Update Barrier & Technology Categories

### Update a Barrier Count

In `data.js`, find the barrier in the `barrierCategories` array and change the `count`:

```javascript
{ title: "Affordability", icon: "...", description: "...", count: 26 },
```

### Add a New Barrier Category

Add a new object to `barrierCategories`:

```javascript
{
  title: "New Barrier",
  icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>',
  description: "Description of this barrier",
  count: 10
},
```

The `icon` field must be an inline SVG string. You can get icons from sites like https://heroicons.com or https://lucide.dev.

### Add a New Technology Category

Add a new object to `techCategories`:

```javascript
{
  title: "Hydrogen Fuel Cells",
  description: "Emerging hydrogen technology for clean cooking applications",
  countries: ["Kenya", "Nigeria"],  // Must exactly match country names
  color: "#FF6B35"                  // Hex color for the dot indicator
},
```

---

## 7. How to Change Photos

### Photo Locations

| Photo | Used In | Reference |
|-------|---------|-----------|
| `photos/hero-engineers.jpg` | Hero background | `styles.css` line ~274 (CSS `background-image`) |
| `photos/challenge-smoke.jpg` | Photo banner 1 | `index.html` `<img>` tag |
| `photos/solution-cooking.jpg` | Photo banner 2 | `index.html` `<img>` tag |
| `photos/woman-engineer.jpg` | Photo banner 3 | `index.html` `<img>` tag |
| `photos/school-girls.jpg` | CTA section | `index.html` `<img>` tag |

### To Replace a Photo

1. Place the new image in the `photos/` folder
2. Either:
   - **Option A:** Name it the same as the file you're replacing (e.g., `hero-engineers.jpg`)
   - **Option B:** Use a new filename and update the reference in `index.html` or `styles.css`

### Photo Guidelines (from SEforALL Style Guide)

- Prioritize optimistic photos showing progress and empowerment
- Avoid overly staged or AI-generated images
- Strive for diverse representation
- Do NOT use images showing fossil fuels (including LPG cooking) unless illustrating solutions being phased out
- Use high-resolution images (at least 1600px wide for banners)

---

## 8. How to Change Branding (Colors & Fonts)

### Changing Colors

All colors are defined as CSS custom properties in `styles.css` at the top of the file under `:root`. To change a color, update the hex value:

```css
:root {
  --yellow: #FFB800;       /* Primary accent */
  --navy: #065A89;         /* Secondary brand */
  --dark-navy: #022437;    /* Text & hero backgrounds */
  --green: #9BBE1D;        /* Positive data / targets */
  --red: #DD2E2B;          /* Negative data / gaps */
  --light-blue: #F0F7FA;   /* Alternate section backgrounds */
}
```

Also update the corresponding `-bg`, `-light`, `-dark` variants and the `rgba()` values.

**Additionally**, some colors are hardcoded in `index.html` (hero ring SVG strokes):
- Line with `stroke="#FFB800"` (yellow ring)
- Line with `stroke="#9BBE1D"` (green ring)
- Line with `stroke="#065A89"` (navy ring)
- Logo SVGs with `stroke="#FFB800"` and `fill="#FFB800"`

### Changing Fonts

1. Go to https://fonts.google.com and select your new fonts
2. Replace the `<link>` tag in `index.html`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=YOUR+FONT:wght@400;700&display=swap" rel="stylesheet">
   ```
3. Update the CSS variables in `styles.css`:
   ```css
   --font-sans: 'Your Body Font', sans-serif;
   --font-display: 'Your Heading Font', sans-serif;
   ```
4. Update the `font-family` attributes in the SVG logo elements in `index.html`

---

## 9. How to Add a New Filter

### Example: Adding an "Investment Range" Filter

#### Step 1: Add Data Attribute to Country Cards

In `app.js`, inside the `renderCountryCards()` function, add a new `data-*` attribute:

```javascript
data-investment-range="${c.totalInvestment > 500 ? 'high' : c.totalInvestment > 200 ? 'medium' : 'low'}"
```

#### Step 2: Add Filter Buttons in index.html

Add a new filter group inside the `.filters-section` div:

```html
<div class="filter-group">
  <span class="filter-group-label">Investment</span>
  <div class="filter-bar" id="investmentFilters">
    <button class="filter-btn active" data-filter="all" data-type="investmentRange">All</button>
    <button class="filter-btn" data-filter="high" data-type="investmentRange">High ($500M+)</button>
    <button class="filter-btn" data-filter="medium" data-type="investmentRange">Medium</button>
    <button class="filter-btn" data-filter="low" data-type="investmentRange">Low</button>
  </div>
</div>
```

#### Step 3: Update Filter Logic in app.js

Add the new filter to the `activeFilters` object:

```javascript
const activeFilters = {
  cohort: 'all',
  region: 'all',
  language: 'all',
  investmentRange: 'all'   // Add this
};
```

Add the check in `applyFilters()`:

```javascript
const matchesInvestment = activeFilters.investmentRange === 'all' ||
  card.dataset.investmentRange === activeFilters.investmentRange;
```

Include it in the visibility check:

```javascript
const visible = matchesCohort && matchesRegion && matchesLanguage && matchesInvestment && matchesSearch;
```

Add it to `updateFilterSummary()`:

```javascript
if (activeFilters.investmentRange !== 'all') parts.push(activeFilters.investmentRange + ' investment');
```

---

## 10. How to Deploy Updates

The site is hosted on **GitHub Pages** from the `master` branch.

### Step-by-Step Deployment

1. **Make your changes** to the files in `C:\Users\jeehy\Documents\M300\`

2. **Open a terminal** and navigate to the project:
   ```bash
   cd C:\Users\jeehy\Documents\M300
   ```

3. **Check what changed:**
   ```bash
   git status
   git diff
   ```

4. **Stage your changes:**
   ```bash
   git add data.js index.html styles.css app.js
   ```
   If you added/changed photos:
   ```bash
   git add photos/
   ```

5. **Commit with a descriptive message:**
   ```bash
   git commit -m "Update Chad access rate to 8%, add new barrier category"
   ```

6. **Push to GitHub:**
   ```bash
   git push origin master
   ```

7. **Wait 1-2 minutes** for GitHub Pages to rebuild, then refresh the live site.

### GitHub Repository

- **URL:** https://github.com/Ottakring1160/mission300-clean-cooking
- **Branch:** `master` (deployed to GitHub Pages)
- **Pages URL:** https://ottakring1160.github.io/mission300-clean-cooking/

---

## 11. Design System Reference

### Current SEforALL Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Yellow | `#FFB800` | Primary accent, CTA buttons, current access bars, highlights |
| Navy | `#065A89` | Active filters, section tags, public finance, card hover borders |
| Dark Navy | `#022437` | Text on light backgrounds, hero/footer backgrounds |
| Green | `#9BBE1D` | Target values, private finance, positive indicators |
| Red | `#DD2E2B` | Gap values, negative indicators, barrier card hovers |
| Light Blue | `#F0F7FA` | Alternate section backgrounds, meta tags |
| Purple | `#5A3A8E` | Available for future use |

### Typography

| Usage | Font | Weight | Style |
|-------|------|--------|-------|
| Section titles | Barlow Condensed | 700 (Bold) | Uppercase |
| Large numbers | Barlow Condensed | 700 (Bold) | Normal |
| Body text | Mulish | 400 (Regular) | Normal |
| Labels | Mulish | 600-700 | Uppercase, 0.1em spacing |
| Buttons | Mulish | 700 (Bold) | Normal |

### Spacing & Layout

| Element | Value |
|---------|-------|
| Container max-width | 1200px |
| Section padding | 100px top/bottom (72px on mobile) |
| Card border-radius | 12-16px |
| Button border-radius | Pill (9999px) |
| Grid gap | 20-24px |

### Responsive Breakpoints

| Breakpoint | Target |
|-----------|--------|
| 1024px | Tablets (2-column grids) |
| 768px | Mobile (single column, hamburger nav) |
| 480px | Small mobile (smaller fonts, tighter spacing) |

---

## 12. Troubleshooting

### Flags Not Showing
- **Cause:** Browser cache serving old version
- **Fix:** Hard refresh with `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)
- **Check:** Verify the `iso` code in `data.js` is a valid lowercase 2-letter code. Test by visiting `https://flagcdn.com/w40/{iso}.png` in your browser.

### Country Not Appearing After Adding
- Check that the country object is inside the `countries` array brackets `[ ]` in `data.js`
- Check for missing commas between country objects
- Check that `region`, `language`, and `cohort` values exactly match the filter button `data-filter` values
- Open browser DevTools (F12) > Console to check for JavaScript errors

### Filter Counts Don't Match
- Filter counts are hardcoded in `index.html`, not calculated dynamically
- After adding/removing countries, manually update the `<span class="filter-count">` values

### Charts Look Wrong After Data Update
- Bar widths are calculated relative to the maximum value in the dataset
- If you add a country with a much higher investment, other bars will appear smaller (this is expected)
- The access chart filters out countries where `target2030` is `null`

### Photos Not Loading on GitHub Pages
- Ensure photo filenames match exactly (case-sensitive on Linux servers)
- Ensure photos are committed and pushed: `git add photos/ && git commit -m "add photos" && git push`
- GitHub Pages has a soft limit of ~1GB; compress large photos if needed

### Site Not Updating After Push
- GitHub Pages takes 1-2 minutes to rebuild
- Check the deployment status at: https://github.com/Ottakring1160/mission300-clean-cooking/actions
- Hard refresh your browser to bypass cache

### Local Testing
To test changes locally before deploying:

1. Install Node.js if not already installed
2. Install a simple server:
   ```bash
   npm install -g http-server
   ```
3. Run from the project folder:
   ```bash
   cd C:\Users\jeehy\Documents\M300
   http-server -p 3000
   ```
4. Open http://localhost:3000 in your browser
