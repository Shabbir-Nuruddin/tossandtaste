import glob

css_fix = """
<style>
/* Impeccable CSS Fixes */
/* Fix header full-width white background issue */
header .cm-header-bottom, 
header .elementor-container,
header .e-con-boxed {
    background-color: #ffffff !important;
}

header .elementor-section.elementor-section-boxed > .elementor-container {
    max-width: 100% !important;
    padding-left: 20px;
    padding-right: 20px;
}

/* Ensure body doesn't leak gray around the header */
header {
    background-color: #ffffff !important;
    width: 100%;
}

/* Fix the product page injected Impeccable UI layout */
/* The product short description container might be narrow, so stack it */
#impeccable-order-app {
    grid-template-columns: 1fr !important; 
    padding: 10px 0 !important;
}

.summary-panel {
    position: static !important;
    margin-top: 20px;
}

/* Fix product page floating elements overlapping */
.woocommerce-product-details__short-description {
    overflow: visible !important;
}
</style>
"""

for f_name in glob.glob('**/*.html', recursive=True):
    try:
        with open(f_name, 'r', encoding='utf-8') as f:
            html = f.read()
        
        # Inject just before </head>
        if '</head>' in html and '/* Impeccable CSS Fixes */' not in html:
            html = html.replace('</head>', css_fix + '\n</head>')
            
            with open(f_name, 'w', encoding='utf-8') as f:
                f.write(html)
    except:
        pass

print("Injected global CSS fixes")
