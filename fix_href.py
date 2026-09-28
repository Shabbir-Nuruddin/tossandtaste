import re
with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('href={#\}', 'href={#}')

# Also fix the className interpolation
content = content.replace('className={w-2.5 h-2.5 rounded-full transition-all duration-300 hover:scale-150 \}', 'className={w-2.5 h-2.5 rounded-full transition-all duration-300 hover:scale-150 }')

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
