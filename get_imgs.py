import re
with open('old_about.html', 'r', encoding='utf-16') as f:
    html = f.read()

imgs = set(re.findall(r'<img[^>]+src=[\'\"](https://tossandtaste.com/wp-content/uploads/[^\'\"]+)[\'\"]', html))

for i in imgs:
    print('IMG:', i.split('/')[-1])
