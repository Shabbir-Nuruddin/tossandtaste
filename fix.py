import re

with open('src/app/menu/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('className={px-6 py-2', 'className={`px-6 py-2')
content = content.replace("hover:text-[#1a1a1a]}", "hover:text-[#1a1a1a]`} ")
content = content.replace("hover:text-[#1a1a1a]`} `\"", "hover:text-[#1a1a1a]`} ")

with open('src/app/menu/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
