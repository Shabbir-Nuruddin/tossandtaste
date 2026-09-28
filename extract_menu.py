import urllib.request
import re
try:
    req = urllib.request.Request('https://tossandtaste.com/menu/', headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    images = set(re.findall(r'src=[\"\'](https://tossandtaste.com/wp-content/uploads/.*?)[\"\']', html))
    print('MENU IMAGES:')
    for img in images:
        print(img)
except Exception as e:
    print('Failed:', e)
