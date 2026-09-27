import os
from bs4 import BeautifulSoup

def extract_text(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f, 'html.parser')
            for script in soup(["script", "style", "nav", "footer"]):
                script.decompose()
            text = soup.get_text(separator='\n')
            lines = (line.strip() for line in text.splitlines())
            chunks = (phrase.strip() for line in lines for phrase in line.split("  "))
            text = '\n'.join(chunk for chunk in chunks if chunk)
            return text
    except Exception as e:
        return ""

print("INDEX:")
print(extract_text('index.html')[:1000])

print("\n\nABOUT US:")
print(extract_text('about-us/index.html')[:1000])
