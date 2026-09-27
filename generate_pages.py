import os

pages = {
    'about': {'title': 'About Us', 'content': 'At Toss and Taste, we are dedicated to helping you achieve a healthier lifestyle through personalized diet meal plans. Our meals are carefully designed by nutrition experts and prepared fresh daily using high-quality, natural ingredients.'},
    'blog': {'title': 'Blog', 'content': 'Read our latest insights on nutrition, wellness, and healthy living.'},
    'contact': {'title': 'Contact Us', 'content': 'Have a question? Reach out to us at contact@tossandtaste.com or call +919711533944.'},
    'privacy': {'title': 'Privacy Policy', 'content': 'We respect your privacy and are committed to protecting your personal data.'},
    'terms': {'title': 'Terms & Conditions', 'content': 'By using our services, you agree to these terms.'},
    'shipping': {'title': 'Shipping Policy', 'content': 'We deliver fresh meals daily across Delhi and Gurugram.'},
    'return-refund': {'title': 'Return & Refund Policy', 'content': 'Please contact us within 24 hours if you have any issues with your meal delivery.'}
}

template = """
export default function Page() {
  return (
    <div className="pt-40 pb-32 px-6 max-w-4xl mx-auto min-h-screen text-[#1a1a1a]">
      <h1 className="text-5xl font-black uppercase tracking-tighter mb-8">{title}</h1>
      <div className="prose prose-lg text-[#444]">
        <p>{content}</p>
      </div>
    </div>
  );
}
"""

for slug, data in pages.items():
    os.makedirs(f"src/app/{slug}", exist_ok=True)
    with open(f"src/app/{slug}/page.tsx", "w", encoding="utf-8") as f:
        f.write(template.replace('{title}', data['title']).replace('{content}', data['content']))
