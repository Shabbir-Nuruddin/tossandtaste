"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';

const blogs = [
  {
    title: "Energy Bites: The Smart Way to Snack Healthy",
    excerpt: "Discover how you can curb your afternoon cravings without spiking your insulin levels.",
    date: "July 12, 2026",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
    slug: "energy-bites"
  },
  {
    title: "Natural Nutrition vs Processed Food: Make the Right Choice",
    excerpt: "Why zero refined sugar and whole ingredients make a massive difference in your daily energy.",
    date: "July 5, 2026",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop",
    slug: "natural-nutrition"
  },
  {
    title: "Protein Pack Plan: Build Strength & Boost Energy",
    excerpt: "A deep dive into how our Protein Pack is scientifically designed for muscle recovery.",
    date: "June 28, 2026",
    img: "https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?q=80&w=800&auto=format&fit=crop",
    slug: "protein-pack-plan"
  }
];

export default function BlogPage() {
  return (
    <div className="pt-40 pb-32 px-6 max-w-[1200px] mx-auto min-h-screen text-[#1a1a1a]">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-[5rem] font-black uppercase tracking-tighter mb-4">The Toss & Taste Blog</h1>
        <p className="text-[#555] text-lg font-medium">Nutrition advice, recipes, and lifestyle tips from our experts.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            key={i} 
            className="group cursor-pointer"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 shadow-sm border border-zinc-100">
              <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="text-[#5e9d34] text-xs font-bold uppercase tracking-widest mb-3">{blog.date}</p>
            <h2 className="text-2xl font-black leading-tight mb-3 group-hover:text-[#5e9d34] transition-colors">{blog.title}</h2>
            <p className="text-[#666] font-medium text-sm leading-relaxed mb-6">{blog.excerpt}</p>
            <span className="text-[#1a1a1a] text-xs font-bold uppercase tracking-widest border-b-2 border-[#1a1a1a] pb-1">Read Article</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
