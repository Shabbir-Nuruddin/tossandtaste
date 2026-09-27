import glob
import re

for f_name in glob.glob('**/*.html', recursive=True):
    try:
        with open(f_name, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove any title attributes with Nature Site slideshow
        content = re.sub(r'title="Nature Site slideshow"', 'title="Healthy Meal"', content)
        
        with open(f_name, 'w', encoding='utf-8') as f:
            f.write(content)
    except:
        pass
