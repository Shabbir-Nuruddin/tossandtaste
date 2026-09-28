import sys

content = '''"use client"
import Link from 'next/link';

const blogs = [
  {
    title: "Natural Nutrition vs Processed Food: Which One Is Better for Your Health?",
    excerpt: "Learn why choosing whole, natural ingredients over processed foods makes a massive difference in your daily energy and overall health.",
    date: "February 17, 2026",
    img: "/uploads/about/Food-Image-sweass-930x540.jpg",
    slug: "natural-nutrition"
  },
  {
    title: "Why Smart Planning Is Essential for Weight Loss",
    excerpt: "Discover the importance of planning your meals to maintain consistency and achieve sustainable weight loss goals.",
    date: "February 17, 2026",
    img: "/uploads/about/Group-36-930x540.png",
    slug: "smart-planning"
  },
  {
    title: "Healthy Sip: Refreshment with Benefits",
    excerpt: "Explore our range of healthy shakes and smoothies that pack a nutritional punch while keeping you refreshed.",
    date: "February 17, 2026",
    img: "/uploads/about/Group-37-930x540.png",
    slug: "healthy-sip"
  },
  {
    title: "Energy Bites: Power Your Body Naturally",
    excerpt: "Discover how you can curb your afternoon cravings without spiking your insulin levels with our natural energy bites.",
    date: "February 17, 2026",
    img: "/uploads/about/Group-38-930x540.png",
    slug: "energy-bites"
  },
  {
    title: "Protein Pack: Fuel Strength, Boost Energy",
    excerpt: "A deep dive into how our Protein Pack is scientifically designed for muscle recovery and sustained energy.",
    date: "February 17, 2026",
    img: "/uploads/2026/02/pic14.webp",
    slug: "protein-pack-plan"
  },
  {
    title: "Smart Fat Loss: A Sustainable Plan to Lose Weight Effectively",
    excerpt: "Lose fat without losing flavor. Read about our approach to portion-controlled, nutrient-dense meals.",
    date: "February 17, 2026",
    img: "/uploads/about/24.jpg",
    slug: "smart-fat-loss"
  }
];

export default function BlogPage() {
  return (
    <div className="pt-40 pb-32 px-6 max-w-[1200px] mx-auto min-h-screen text-[#1a1a1a]">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-[5rem] font-black uppercase tracking-tighter mb-4 text-[#0f3b21]">The Toss & Taste Blog</h1>
        <p className="text-[#555] text-lg font-light max-w-2xl mx-auto">Nutrition advice, recipes, and lifestyle tips from our experts.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, i) => (
          <div key={i} className="group cursor-pointer flex flex-col h-full bg-white border border-zinc-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-50">
              <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.currentTarget.src = '/uploads/2026/02/pic1-1.webp' }} />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <p className="text-[#5e9d34] text-xs font-bold uppercase tracking-widest mb-3">{blog.date}</p>
              <h2 className="text-xl font-bold leading-snug mb-3 group-hover:text-[#5e9d34] transition-colors">{blog.title}</h2>
              <p className="text-zinc-600 font-light text-sm leading-relaxed mb-6 flex-grow">{blog.excerpt}</p>
              <div className="mt-auto">
                <span className="text-[#1a1a1a] text-xs font-bold uppercase tracking-widest border-b-2 border-[#1a1a1a] pb-1 group-hover:border-[#5e9d34] group-hover:text-[#5e9d34] transition-colors">Read Article</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
'''

with open('src/app/blog/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
