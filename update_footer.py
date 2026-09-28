import re

with open('src/components/Footer.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add FSSAI License to the Footer
fssai = '<li><strong>FSSAI Licence No:</strong> 20824005000269</li>'
content = content.replace('<li><strong>Email:</strong> <a href="mailto:contact@tossandtaste.com" className="hover:text-[#5e9d34]">contact@tossandtaste.com</a></li>', '<li><strong>Email:</strong> <a href="mailto:contact@tossandtaste.com" className="hover:text-[#5e9d34]">contact@tossandtaste.com</a></li>\n            ' + fssai)

with open('src/components/Footer.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
