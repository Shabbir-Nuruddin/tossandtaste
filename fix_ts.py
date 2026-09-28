import re

with open('src/app/menu/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('item.video', '(item as any).video')

with open('src/app/menu/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
