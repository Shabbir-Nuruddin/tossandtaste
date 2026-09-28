import re

with open('src/components/Header.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Change header background to light beige
content = re.sub(r'bg-white/90|bg-white', 'bg-[#fdfcf5]', content)
# Make text black instead of white/gray if needed.
content = content.replace('text-white', 'text-[#1a1a1a]')
content = content.replace('text-zinc-600', 'text-[#1a1a1a] font-black tracking-widest')
# Add outline to active/hover
content = content.replace('hover:text-[#5e9d34]', 'hover:text-[#5e9d34] border-transparent hover:border-black border-2 px-3 py-1 rounded-sm')

with open('src/components/Header.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
