import re

def extract_text(filename):
    try:
        with open(filename, 'r', encoding='utf-16') as f:
            html = f.read()
            
        html = re.sub(r'<script.*?</script>', ' ', html, flags=re.DOTALL)
        html = re.sub(r'<style.*?</style>', ' ', html, flags=re.DOTALL)
        text = re.sub(r'<[^>]+>', ' ', html)
        text = re.sub(r'\s+', ' ', text)
        return text.strip()
    except Exception as e:
        return str(e)

with open('dump_text.txt', 'w', encoding='utf-8') as f:
    f.write('--- ABOUT ---\n')
    f.write(extract_text('old_about.html'))
    f.write('\n\n--- HOME ---\n')
    f.write(extract_text('old_index.html'))
