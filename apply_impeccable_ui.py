import glob
from bs4 import BeautifulSoup

impeccable_ui = """
<style>
/* Impeccable UI Styles */
:root {
  --brand-green: #4CAF50;
  --brand-green-hover: #45a049;
  --brand-orange: #f28b22;
  --bg-color: #fafafa;
  --card-bg: #ffffff;
  --text-main: #333333;
  --text-muted: #666666;
  --border-color: #e0e0e0;
  --radius: 12px;
  --shadow: 0 4px 20px rgba(0,0,0,0.05);
  --shadow-hover: 0 8px 30px rgba(0,0,0,0.1);
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

#impeccable-order-app {
  font-family: var(--font-family);
  background: var(--bg-color);
  padding: 40px 20px;
  color: var(--text-main);
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 40px;
  border-radius: var(--radius);
}

@media (max-width: 900px) {
  #impeccable-order-app {
    grid-template-columns: 1fr;
  }
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--brand-green);
  border-bottom: 2px solid var(--brand-green);
  padding-bottom: 10px;
  display: inline-block;
}

/* Grids */
.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 40px;
}

/* Cards */
.option-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100px;
}

.option-card:hover {
  box-shadow: var(--shadow-hover);
  border-color: var(--brand-green);
}

.option-card.active {
  border-color: var(--brand-green);
  background: #f0fdf4;
  box-shadow: 0 0 0 2px var(--brand-green);
}

.option-title {
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 8px;
}

.option-price {
  font-size: 14px;
  color: var(--text-muted);
}

/* Counter for add-ons */
.addon-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  padding: 15px;
  border-radius: var(--radius);
  margin-bottom: 10px;
}

.counter-ctrl {
  display: flex;
  align-items: center;
  gap: 15px;
}

.btn-count {
  background: #f3f4f6;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.btn-count:hover {
  background: #e5e7eb;
}

/* Summary Sidebar */
.summary-panel {
  background: var(--card-bg);
  border-radius: var(--radius);
  padding: 30px;
  box-shadow: var(--shadow);
  position: sticky;
  top: 40px;
  height: fit-content;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 15px;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
  font-size: 24px;
  font-weight: 800;
  color: var(--brand-green);
}

.btn-checkout {
  background: var(--brand-green);
  color: white;
  border: none;
  width: 100%;
  padding: 16px;
  border-radius: var(--radius);
  font-size: 18px;
  font-weight: 700;
  margin-top: 30px;
  cursor: pointer;
  transition: background 0.3s, transform 0.1s;
}

.btn-checkout:hover {
  background: var(--brand-green-hover);
}
.btn-checkout:active {
  transform: scale(0.98);
}
</style>

<div id="impeccable-order-app">
  <div class="main-config">
    
    <h2 class="section-title">1. Select Subscription Plan</h2>
    <div class="options-grid" id="plan-grid">
      <div class="option-card active" data-plan="1" data-multiplier="1">
        <div class="option-title">Single Meal</div>
        <div class="option-price">Buy just one</div>
      </div>
      <div class="option-card" data-plan="30" data-multiplier="30">
        <div class="option-title">30 Days Pack</div>
        <div class="option-price">Daily delivery</div>
      </div>
      <div class="option-card" data-plan="120" data-multiplier="120">
        <div class="option-title">4 Months Pack</div>
        <div class="option-price">Best Value</div>
      </div>
    </div>

    <h2 class="section-title">2. Choose Your Base Meal</h2>
    <select id="base-meal-select" style="width:100%; padding: 15px; font-size: 16px; border-radius: 8px; border: 1px solid #ccc; margin-bottom: 40px;">
        <optgroup label="Breakfast">
            <option value="250">Grilled Chicken Sandwich (₹250)</option>
            <option value="200">Grilled Paneer Sandwich (₹200)</option>
            <option value="220">Masala Omelet With Toast (₹220)</option>
            <option value="180">Overnight Oats with Yogurt (₹180)</option>
        </optgroup>
        <optgroup label="Lunch & Dinner Bowls">
            <option value="350">Southwest Chicken / Paneer Bowl (₹350)</option>
            <option value="350">Pesto Pasta Chicken / Paneer Bowl (₹350)</option>
            <option value="380">Protein Pack Buddha Bowl (₹380)</option>
            <option value="360">Moroccan Chicken With Brown Rice (₹360)</option>
            <option value="370">Stir Fry Chicken with Steamed Rice (₹370)</option>
        </optgroup>
        <optgroup label="Scrumptious Salads">
            <option value="320">Grilled Cottage Cheese Salad (₹320)</option>
            <option value="340">Quinoa Salad (₹340)</option>
            <option value="330">Teriyaki Chicken Salad (₹330)</option>
        </optgroup>
    </select>

    <h2 class="section-title">3. Add-ons (Per Meal)</h2>
    <div class="addons-list" id="addons-container">
      <!-- Addons injected via JS -->
    </div>

  </div>

  <div class="summary-panel">
    <h3 style="margin-top:0; border-bottom: 1px solid #eee; padding-bottom:15px;">Order Summary</h3>
    
    <div id="summary-items">
       <!-- dynamic items -->
    </div>

    <div class="summary-total">
      <span>Total</span>
      <span id="total-price">₹0</span>
    </div>
    <button class="btn-checkout">Add to Cart</button>
  </div>
</div>

<script>
  const addons = [
    { id: 'add_chicken', name: 'Additional Chicken', price: 120 },
    { id: 'add_protein', name: 'Extra Protein Scoop', price: 80 },
    { id: 'add_veg', name: 'Extra Vegetables', price: 50 },
    { id: 'add_potatoes', name: 'Sweet Potatoes', price: 60 },
    { id: 'add_shake', name: 'Protein Shake', price: 150 },
    { id: 'add_fish', name: 'Fish (Salmon/Tuna)', price: 250 }
  ];

  let state = {
    planDays: 1,
    baseMealPrice: 250,
    baseMealName: 'Grilled Chicken Sandwich',
    addonCounts: {}
  };

  addons.forEach(a => state.addonCounts[a.id] = 0);

  const planCards = document.querySelectorAll('.option-card');
  const mealSelect = document.getElementById('base-meal-select');
  const addonsContainer = document.getElementById('addons-container');
  const summaryItems = document.getElementById('summary-items');
  const totalPriceEl = document.getElementById('total-price');

  // Render Addons
  addonsContainer.innerHTML = addons.map(a => `
    <div class="addon-card">
      <div>
        <div style="font-weight:600">${a.name}</div>
        <div style="color:#666; font-size:14px;">+₹${a.price}</div>
      </div>
      <div class="counter-ctrl">
        <button class="btn-count" onclick="updateAddon('${a.id}', -1)">-</button>
        <span id="qty-${a.id}" style="font-weight:bold; width:20px; text-align:center;">0</span>
        <button class="btn-count" onclick="updateAddon('${a.id}', 1)">+</button>
      </div>
    </div>
  `).join('');

  // Interactions
  planCards.forEach(card => {
    card.addEventListener('click', () => {
      planCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      state.planDays = parseInt(card.dataset.multiplier);
      updateSummary();
    });
  });

  mealSelect.addEventListener('change', (e) => {
    state.baseMealPrice = parseInt(e.target.value);
    state.baseMealName = e.target.options[e.target.selectedIndex].text.split(' (')[0];
    updateSummary();
  });

  window.updateAddon = function(id, delta) {
    const newVal = state.addonCounts[id] + delta;
    if(newVal >= 0 && newVal <= 10) {
      state.addonCounts[id] = newVal;
      document.getElementById(`qty-${id}`).textContent = newVal;
      updateSummary();
    }
  }

  function updateSummary() {
    let addonsTotal = 0;
    let addonsHtml = '';
    
    addons.forEach(a => {
      const qty = state.addonCounts[a.id];
      if(qty > 0) {
        const cost = qty * a.price;
        addonsTotal += cost;
        addonsHtml += `<div class="summary-row"><span style="color:#666;">${qty}x ${a.name}</span><span>₹${cost}</span></div>`;
      }
    });

    const singleMealCost = state.baseMealPrice + addonsTotal;
    const totalCost = singleMealCost * state.planDays;

    summaryItems.innerHTML = `
      <div class="summary-row" style="font-weight:600;">
        <span>${state.baseMealName}</span>
        <span>₹${state.baseMealPrice}</span>
      </div>
      ${addonsHtml}
      <div class="summary-row" style="margin-top:15px; border-top: 1px dashed #ccc; padding-top:15px;">
        <span>Cost per meal</span>
        <span>₹${singleMealCost}</span>
      </div>
      <div class="summary-row">
        <span>Plan Duration</span>
        <span>${state.planDays} Day(s)</span>
      </div>
    `;
    
    totalPriceEl.textContent = `₹${totalCost.toLocaleString('en-IN')}`;
  }

  // Init
  updateSummary();
</script>
"""

def replace_ui():
    for f_name in glob.glob('product/*/index.html'):
        with open(f_name, 'r', encoding='utf-8', errors='ignore') as f:
            html = f.read()
        soup = BeautifulSoup(html, 'html.parser')
        
        # Remove the old custom-woo-fix if it exists
        old_fix = soup.find('div', id='custom-woo-fix')
        if old_fix:
            old_fix.decompose()
            
        desc = soup.find('div', class_='woocommerce-product-details__short-description')
        if desc:
            # We want to replace the whole description with this massive beautiful UI
            desc.clear()
            snippet_soup = BeautifulSoup(impeccable_ui, 'html.parser')
            desc.append(snippet_soup)
            
            with open(f_name, 'w', encoding='utf-8') as f:
                f.write(str(soup))
            print(f"Replaced UI on: {f_name}")

replace_ui()
