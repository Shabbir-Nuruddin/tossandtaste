import glob
from bs4 import BeautifulSoup

impeccable_ui = """
<style>
/* Impeccable UI Styles - V2 */
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
  padding: 30px 15px;
  color: var(--text-main);
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  border-radius: var(--radius);
}

.section-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
  color: var(--brand-green);
  border-bottom: 2px solid var(--brand-green);
  padding-bottom: 8px;
  display: inline-block;
}

/* Grids */
.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 10px;
  margin-bottom: 30px;
}

.meal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 15px;
  margin-bottom: 30px;
  max-height: 400px;
  overflow-y: auto;
  padding: 5px;
}

/* Cards */
.option-card, .meal-card {
  background: var(--card-bg);
  border: 1.5px solid var(--border-color);
  border-radius: var(--radius);
  padding: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90px;
  position: relative;
}

.option-card:hover, .meal-card:hover {
  box-shadow: var(--shadow-hover);
  border-color: var(--brand-green);
}

.option-card.active, .meal-card.active {
  border-color: var(--brand-green);
  background: #f0fdf4;
  box-shadow: 0 0 0 2px var(--brand-green);
}

.option-title {
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
}

.option-price {
  font-size: 13px;
  color: var(--text-muted);
}

.meal-category {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--brand-orange);
  margin-bottom: 5px;
  font-weight: bold;
}

/* Counter for add-ons */
.addon-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  padding: 12px;
  border-radius: var(--radius);
  margin-bottom: 10px;
}

.counter-ctrl {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-count {
  background: #f3f4f6;
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  color: #333;
}

.btn-count:hover {
  background: #e5e7eb;
}

/* Summary Sidebar */
.summary-panel {
  background: var(--card-bg);
  border-radius: var(--radius);
  padding: 25px;
  box-shadow: var(--shadow);
  border: 1px solid var(--brand-green);
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 14px;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 2px solid var(--border-color);
  font-size: 22px;
  font-weight: 800;
  color: var(--brand-green);
}

.btn-checkout {
  background: var(--brand-green);
  color: white;
  border: none;
  width: 100%;
  padding: 14px;
  border-radius: var(--radius);
  font-size: 16px;
  font-weight: 700;
  margin-top: 20px;
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
    
    <h2 class="section-title">1. Subscription Duration</h2>
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

    <h2 class="section-title">2. Select Your Base Meal</h2>
    <div class="meal-grid" id="meal-grid">
      <!-- Injected via JS -->
    </div>

    <h2 class="section-title">3. Add Extras (Per Meal)</h2>
    <div class="addons-list" id="addons-container">
      <!-- Addons injected via JS -->
    </div>

  </div>

  <div class="summary-panel">
    <h3 style="margin-top:0; border-bottom: 1px solid #eee; padding-bottom:12px; color: var(--brand-green);">Order Summary</h3>
    
    <div id="summary-items">
       <!-- dynamic items -->
    </div>

    <div class="summary-total">
      <span>Total</span>
      <span id="total-price">₹0</span>
    </div>
    <button class="btn-checkout">Checkout & Pay</button>
  </div>
</div>

<script>
  const mealsList = [
    { cat: 'Breakfast', name: 'Grilled Chicken Sandwich', price: 250 },
    { cat: 'Breakfast', name: 'Grilled Paneer Sandwich', price: 200 },
    { cat: 'Breakfast', name: 'Masala Omelet & Toast', price: 220 },
    { cat: 'Breakfast', name: 'Overnight Oats & Yogurt', price: 180 },
    { cat: 'Bowls', name: 'Southwest Chicken Bowl', price: 350 },
    { cat: 'Bowls', name: 'Pesto Pasta Paneer Bowl', price: 350 },
    { cat: 'Bowls', name: 'Protein Pack Buddha Bowl', price: 380 },
    { cat: 'Bowls', name: 'Moroccan Chicken Rice', price: 360 },
    { cat: 'Bowls', name: 'Stir Fry Chicken Bowl', price: 370 },
    { cat: 'Salads', name: 'Grilled Cottage Cheese Salad', price: 320 },
    { cat: 'Salads', name: 'Quinoa Salad', price: 340 },
    { cat: 'Salads', name: 'Teriyaki Chicken Salad', price: 330 }
  ];

  const addons = [
    { id: 'add_chicken', name: 'Extra Chicken', price: 120 },
    { id: 'add_protein', name: 'Extra Protein Scoop', price: 80 },
    { id: 'add_veg', name: 'Extra Vegetables', price: 50 },
    { id: 'add_potatoes', name: 'Sweet Potatoes', price: 60 },
    { id: 'add_shake', name: 'Protein Shake', price: 150 },
    { id: 'add_fish', name: 'Fish (Salmon/Tuna)', price: 250 }
  ];

  const DELIVERY_CHARGE = 60; // Placeholder delivery charge per checkout

  let state = {
    planDays: 1,
    baseMealPrice: 250,
    baseMealName: 'Grilled Chicken Sandwich',
    addonCounts: {}
  };

  addons.forEach(a => state.addonCounts[a.id] = 0);

  const planCards = document.querySelectorAll('.option-card');
  const mealGrid = document.getElementById('meal-grid');
  const addonsContainer = document.getElementById('addons-container');
  const summaryItems = document.getElementById('summary-items');
  const totalPriceEl = document.getElementById('total-price');

  // Render Meals
  mealGrid.innerHTML = mealsList.map((m, idx) => `
    <div class="meal-card ${idx === 0 ? 'active' : ''}" data-name="${m.name}" data-price="${m.price}">
      <div class="meal-category">${m.cat}</div>
      <div class="option-title">${m.name}</div>
      <div class="option-price">₹${m.price}</div>
    </div>
  `).join('');

  // Render Addons
  addonsContainer.innerHTML = addons.map(a => `
    <div class="addon-card">
      <div>
        <div style="font-weight:600; font-size: 14px;">${a.name}</div>
        <div style="color:#666; font-size:13px;">+₹${a.price}</div>
      </div>
      <div class="counter-ctrl">
        <button class="btn-count" onclick="updateAddon('${a.id}', -1)">-</button>
        <span id="qty-${a.id}" style="font-weight:bold; width:15px; text-align:center; font-size: 14px;">0</span>
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

  const mealCards = document.querySelectorAll('.meal-card');
  mealCards.forEach(card => {
    card.addEventListener('click', () => {
      mealCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      state.baseMealName = card.dataset.name;
      state.baseMealPrice = parseInt(card.dataset.price);
      updateSummary();
    });
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
        addonsHtml += `<div class="summary-row"><span style="color:#666; font-size: 13px;">${qty}x ${a.name}</span><span>₹${cost}</span></div>`;
      }
    });

    const singleMealCost = state.baseMealPrice + addonsTotal;
    const mealsTotalCost = singleMealCost * state.planDays;
    
    // Add delivery charge to total
    const totalCost = mealsTotalCost + DELIVERY_CHARGE;

    summaryItems.innerHTML = `
      <div class="summary-row" style="font-weight:600; color:var(--brand-green);">
        <span>${state.planDays} Day Plan</span>
      </div>
      <div class="summary-row" style="font-weight:600;">
        <span>${state.baseMealName}</span>
        <span>₹${state.baseMealPrice}</span>
      </div>
      ${addonsHtml}
      <div class="summary-row" style="margin-top:10px; border-top: 1px dashed #ccc; padding-top:10px; font-weight:600;">
        <span>Meals Subtotal</span>
        <span>₹${mealsTotalCost.toLocaleString('en-IN')}</span>
      </div>
      <div class="summary-row" style="margin-top:8px;">
        <span style="color:#666;">Delivery Charge</span>
        <span>₹${DELIVERY_CHARGE}</span>
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
        
        old_fix = soup.find('div', id='impeccable-order-app')
        if old_fix:
            snippet_soup = BeautifulSoup(impeccable_ui, 'html.parser')
            old_fix.replace_with(snippet_soup)
            
            with open(f_name, 'w', encoding='utf-8') as f:
                f.write(str(soup))
            print(f"Upgraded UI on: {f_name}")

replace_ui()
