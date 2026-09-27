import os
from bs4 import BeautifulSoup

def fix_index():
    filepath = 'index.html'
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    
    # 1. Change BALANCED MEALS to h1
    elem = soup.find(string=lambda t: t and 'BALANCED MEALS' in t)
    if elem and elem.parent.parent.name == 'h4':
        elem.parent.parent.name = 'h1'
    
    # 2. Add Meta Tags
    head = soup.head
    if head:
        meta_desc = soup.new_tag('meta', attrs={'name': 'description', 'content': 'Toss & Taste delivers healthy, protein-rich and fat loss meal plans directly to your doorstep in Delhi and Gurugram.'})
        meta_og_title = soup.new_tag('meta', attrs={'property': 'og:title', 'content': 'Healthy Meal Delivery in Delhi-Gurugram | Toss & Taste'})
        meta_og_desc = soup.new_tag('meta', attrs={'property': 'og:description', 'content': 'Fresh, expert-designed protein and fat loss meals delivered to you.'})
        meta_og_image = soup.new_tag('meta', attrs={'property': 'og:image', 'content': 'https://tossandtaste.com/wp-content/uploads/2025/08/Toss-Taste-LOGO-3-300x222.png'})
        
        head.append(meta_desc)
        head.append(meta_og_title)
        head.append(meta_og_desc)
        head.append(meta_og_image)

    # 3. Fix Image Alt Texts
    for img in soup.find_all('img'):
        alt = img.get('alt', '')
        src = img.get('src', '').lower()
        if alt == 'Nature Site slideshow' or alt == '':
            if 'salad' in src:
                img['alt'] = 'Fresh healthy salad bowl'
            elif 'protein' in src:
                img['alt'] = 'High protein meal plan'
            elif 'fat' in src:
                img['alt'] = 'Fat loss meal plan'
            elif 'logo' in src:
                img['alt'] = 'Toss and Taste Logo'
            else:
                img['alt'] = 'Healthy meal from Toss and Taste'
                
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(str(soup))
        
fix_index()
print("Fixed index.html")
