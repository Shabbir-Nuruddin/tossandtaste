export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
        <div>
          <h3 className="text-3xl font-black tracking-tighter uppercase mb-6">Toss <span className="text-red-500 font-light">&</span> Taste</h3>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-sm font-light">
            Redefining healthy dining in Delhi & Gurugram. Wholesome, balanced, and impeccable meals delivered or served fresh.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-black tracking-[0.2em] uppercase mb-8 text-white">Location & Contact</h4>
          <p className="text-zinc-400 text-lg leading-relaxed font-light mb-4">
            Sector 55, Golf Course Road<br />
            Gurgaon 122001
          </p>
          <div className="flex flex-col gap-2">
            <a href="tel:+919711533944" className="text-red-500 hover:text-white transition-colors font-bold">+91 9711533944</a>
            <a href="mailto:contact@tossandtaste.com" className="text-red-500 hover:text-white transition-colors font-bold">contact@tossandtaste.com</a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-black tracking-[0.2em] uppercase mb-8 text-white">Links</h4>
          <ul className="text-zinc-400 text-lg space-y-4 font-light">
            <li><a href="/menu" className="hover:text-red-500 transition-colors">Order Online</a></li>
            <li><a href="/subscriptions" className="hover:text-red-500 transition-colors">Meal Plans</a></li>
            <li><a href="/about" className="hover:text-red-500 transition-colors">Our Philosophy</a></li>
            <li><a href="https://wa.me/919711533944" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">WhatsApp Support</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-zinc-600 text-xs flex justify-between font-bold tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} Toss & Taste. FSSAI: 20824005000269</p>
        <p>Designed with Impeccable Taste.</p>
      </div>
    </footer>
  );
}
