"use client";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#f6faed] text-[#2c3e21] pt-16 pb-8 border-t border-[#d8e6c4]">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="space-y-6">
          <img src="/uploads/2026/07/cropped-Toss-Taste-LOGO-ICON--180x180.png" alt="Toss & Taste" className="h-16 object-contain" />
          <h4 className="font-bold uppercase tracking-widest text-sm text-[#182411]">About Company</h4>
          <p className="text-sm font-medium leading-relaxed opacity-80">
            At Toss and Taste, we are dedicated to helping you achieve a healthier lifestyle through personalized diet meal plans. Our meals are carefully designed by nutrition experts and prepared fresh daily using high-quality, natural ingredients.
          </p>
        </div>

        {/* Links 1 */}
        <div>
          <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-[#182411]">Information</h4>
          <ul className="space-y-3 text-sm font-medium opacity-80">
            <li><Link href="/" className="hover:text-[#5e9d34] transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#5e9d34] transition-colors">About us</Link></li>
            <li><Link href="/blog" className="hover:text-[#5e9d34] transition-colors">Blog</Link></li>
            <li><Link href="/cart" className="hover:text-[#5e9d34] transition-colors">Check Out</Link></li>
            <li><Link href="/contact" className="hover:text-[#5e9d34] transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Links 2 */}
        <div>
          <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-[#182411]">Legal</h4>
          <ul className="space-y-3 text-sm font-medium opacity-80">
            <li><Link href="/terms" className="hover:text-[#5e9d34] transition-colors">Terms and Condition</Link></li>
            <li><Link href="/privacy" className="hover:text-[#5e9d34] transition-colors">Privacy Policy</Link></li>
            <li><Link href="/shipping" className="hover:text-[#5e9d34] transition-colors">Shipping Policy</Link></li>
            <li><Link href="/return-refund" className="hover:text-[#5e9d34] transition-colors">Return and Refund policy</Link></li>
          </ul>
        </div>

        {/* Address & Socials */}
        <div>
          <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-[#182411]">Address</h4>
          <ul className="space-y-4 text-sm font-medium opacity-80 mb-8">
            <li><strong>Address:</strong> Sector 55 golf course road Gurgaon 122001</li>
            <li><strong>Phone:</strong> <a href="tel:+919711533944" className="hover:text-[#5e9d34]">+919711533944</a></li>
            <li><strong>Email:</strong> <a href="mailto:contact@tossandtaste.com" className="hover:text-[#5e9d34]">contact@tossandtaste.com</a></li>
          </ul>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-[#182411] text-white flex items-center justify-center hover:bg-[#5e9d34] transition-colors">f</a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#182411] text-white flex items-center justify-center hover:bg-[#5e9d34] transition-colors">t</a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#182411] text-white flex items-center justify-center hover:bg-[#5e9d34] transition-colors">in</a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#182411] text-white flex items-center justify-center hover:bg-[#5e9d34] transition-colors">yt</a>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 border-t border-[#d8e6c4] pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-medium opacity-60">
        <p>Copyright 2026 Toss and Taste. All Rights Reserved.</p>
        <div className="flex gap-2 mt-4 md:mt-0 opacity-50 grayscale">
          <span>💳 Secure Payments</span>
        </div>
      </div>
    </footer>
  );
}
