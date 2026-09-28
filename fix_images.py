import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('/uploads/2026/07/paprika-paneer-bowl.jpg', '/uploads/2026/07/Grilled-panner-with-hummus-and-exotic-veggies-wed3.jpg')
content = content.replace('/uploads/2026/07/south-west-chicken-bowl.jpg', '/uploads/2026/07/Grilled-tofu-with-rice-and-exotic-veggies-sdadqw-1024x1024.jpg')

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
