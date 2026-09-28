import re
with open('old_about.html', 'r', encoding='utf-16') as f:
    html = f.read()

# Extract headers to see the structure of the about page
headers = re.findall(r'<h[1-6][^>]*>(.*?)</h[1-6]>', html, re.IGNORECASE | re.DOTALL)
print('Headers in old_about.html:')
for h in headers:
    text = re.sub(r'<[^>]+>', '', h).strip()
    if text:
        print(text)
