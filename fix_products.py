import os
import glob
from bs4 import BeautifulSoup

html_snippet = """
<div id="custom-woo-fix" style="margin: 20px 0; padding: 20px; border: 2px solid #4CAF50; border-radius: 8px; background: #f9f9f9;">
    <h3 style="margin-top:0;">Select Your Plan (Fixed Cart UI)</h3>
    <label style="display:block; margin-bottom: 5px; font-weight: bold;">Diet Preference:</label>
    <select id="diet-select" style="width: 100%; padding: 10px; margin-bottom: 15px;">
        <option value="veg">Veg</option>
        <option value="non-veg">Non-Veg</option>
        <option value="mix">Mix (Veg + Non-Veg)</option>
    </select>
    
    <label style="display:block; margin-bottom: 5px; font-weight: bold;">Number of Meals:</label>
    <select id="meals-select" style="width: 100%; padding: 10px; margin-bottom: 15px;">
        <option value="10">10 Meals</option>
        <option value="20">20 Meals</option>
        <option value="30">30 Meals</option>
    </select>
    
    <h2 id="dynamic-price" style="color: #333; margin-bottom: 15px;">₹3,100</h2>
    
    <button style="background: #4CAF50; color: white; border: none; padding: 15px 30px; font-size: 16px; font-weight: bold; cursor: pointer; border-radius: 5px; width: 100%;">Add to Cart</button>
    
    <script>
        const pricing = {
            'veg': {'10': '₹3,100', '20': '₹5,900', '30': '₹8,600'},
            'non-veg': {'10': '₹3,300', '20': '₹6,400', '30': '₹9,200'},
            'mix': {'10': '₹3,200', '20': '₹6,200', '30': '₹9,000'}
        };
        const dietSelect = document.getElementById('diet-select');
        const mealsSelect = document.getElementById('meals-select');
        const priceElement = document.getElementById('dynamic-price');
        
        function updatePrice() {
            const diet = dietSelect.value;
            const meals = mealsSelect.value;
            if(pricing[diet] && pricing[diet][meals]) {
                priceElement.textContent = pricing[diet][meals];
            }
        }
        
        dietSelect.addEventListener('change', updatePrice);
        mealsSelect.addEventListener('change', updatePrice);
    </script>
</div>
"""

def fix_product_pages():
    for f_name in glob.glob('product/*/index.html'):
        with open(f_name, 'r', encoding='utf-8', errors='ignore') as f:
            html = f.read()
        soup = BeautifulSoup(html, 'html.parser')
        
        desc = soup.find('div', class_='woocommerce-product-details__short-description')
        if desc:
            snippet_soup = BeautifulSoup(html_snippet, 'html.parser')
            desc.insert_after(snippet_soup)
            
            with open(f_name, 'w', encoding='utf-8') as f:
                f.write(str(soup))
            print(f"Fixed product page: {f_name}")

fix_product_pages()
