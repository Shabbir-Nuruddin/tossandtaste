import re
with open('old_index.html', 'r', encoding='utf-16') as f:
    html = f.read()

bgs = set(re.findall(r'url\([\'\"]?(https://tossandtaste.com/wp-content/uploads/[^\'\"]+)[\'\"]?\)', html))
print('Background images:')
for bg in bgs:
    print(bg)
