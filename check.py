import re

with open('old_index.html', 'r', encoding='utf-16') as f:
    html = f.read()

classes = re.findall(r'class=[\"\'](.*?)[\"\']', html)
print(list(set(classes))[:20])
