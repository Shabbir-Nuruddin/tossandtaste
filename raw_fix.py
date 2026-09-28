import sys
with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    for line in lines:
        if 'href={#}' in line:
            f.write('            href={#\}\n')
        else:
            f.write(line)
