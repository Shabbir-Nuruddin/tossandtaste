import re

with open('src/app/menu/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Just use generic high quality images instead of pic1-1 and pic4 which are failing.
# Or use the specific image if available.
content = content.replace('/uploads/2026/02/pic1-1.webp', '/uploads/2026/07/tofu-salad-00as.jpg')
content = content.replace('/uploads/2026/02/pic4.webp', '/uploads/2026/02/pic5.webp')

# Also fix the grid to show the image cleanly even if it fails, maybe use onError
content = content.replace('src={item.image}', 'src={item.image} onError={(e) => { e.currentTarget.src = "/uploads/2026/07/Salad-200.png" }}')

with open('src/app/menu/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
