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
    <div className="w-full bg-[#fdfdfc] text-[#1a1a1a] min-h-screen pt-20">
      
      {/* Page Header */}
      <div className="py-20 text-center bg-[#fdfbf6] border-b border-zinc-100">
        <h1 className="text-5xl font-black uppercase tracking-tight text-[#0f3b21]">Blog</h1>
        <p className="mt-4 text-zinc-600">Home &raquo; Blog</p>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 py-20 space-y-16">
        {blogs.map((blog, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-xl overflow-hidden shadow-sm border border-zinc-100 p-6">
            <div className="w-full md:w-[40%] h-[250px] shrink-0 rounded-lg overflow-hidden relative">
              <img src={blog.img} alt={blog.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" onError={(e) => { e.currentTarget.src = '/uploads/2026/07/Salad-200.png' }} />
              <span className="absolute top-4 left-4 bg-[#a3c94a] text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider">Blog</span>
            </div>
            
            <div className="w-full md:w-[60%] flex flex-col justify-center">
              <p className="text-xs text-zinc-500 mb-3 flex items-center gap-2">
                <span>&#128197; {blog.date}</span>
                <span>|</span>
                <span>&#128100; by Toss Taste</span>
              </p>
              <h2 className="text-2xl font-bold leading-snug mb-4 hover:text-[#a3c94a] transition-colors cursor-pointer">{blog.title}</h2>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">{blog.excerpt}</p>
              <div>
                <button className="bg-[#a3c94a] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-sm hover:bg-[#8eb53d] transition-colors">Read More</button>
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
