"use client"
import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@tosstandtaste.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent("Name: " + formData.name + "\nEmail: " + formData.email + "\n\n" + formData.message)}`;
    window.location.href = mailtoLink;
    alert("Thank you! Your message has been prepared for sending.");
  };

  return (
    <div className="w-full bg-[#fdfdfc] text-[#1a1a1a] min-h-screen pt-20">
      <div className="py-20 text-center bg-[#fdfbf6] border-b border-zinc-100">
        <h1 className="text-5xl font-black uppercase tracking-tight text-[#0f3b21]">Contact Us</h1>
        <p className="mt-4 text-zinc-600">Home &raquo; Contact</p>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter text-[#0f3b21] mb-6">Get in Touch</h2>
            <p className="text-zinc-500 leading-relaxed font-medium mb-10">Have a question about our meal plans or need help with a subscription? Fill out the form or reach out directly using the information below. We'd love to hear from you.</p>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#eaf2d7] rounded-xl flex items-center justify-center shrink-0"><span className="text-2xl">📍</span></div>
                <div><h4 className="text-lg font-bold text-[#1a1a1a] mb-1">Address</h4><p className="text-zinc-500">Sector 55, Golf Course Road<br/>Gurgaon 122001</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#eaf2d7] rounded-xl flex items-center justify-center shrink-0"><span className="text-2xl">📞</span></div>
                <div><h4 className="text-lg font-bold text-[#1a1a1a] mb-1">Phone</h4><p className="text-zinc-500">+91 9711533944</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#eaf2d7] rounded-xl flex items-center justify-center shrink-0"><span className="text-2xl">✉️</span></div>
                <div><h4 className="text-lg font-bold text-[#1a1a1a] mb-1">Email</h4><p className="text-zinc-500">contact@tosstandtaste.com</p></div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-zinc-100">
            <h3 className="text-2xl font-black uppercase tracking-tight text-[#0f3b21] mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">Your Name</label>
                  <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-[#fdfcf5] border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8cc63f] focus:ring-1 focus:ring-[#8cc63f]" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">Email Address</label>
                  <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-[#fdfcf5] border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8cc63f] focus:ring-1 focus:ring-[#8cc63f]" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">Subject</label>
                <input required type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-[#fdfcf5] border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8cc63f] focus:ring-1 focus:ring-[#8cc63f]" placeholder="How can we help?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">Message</label>
                <textarea required id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full bg-[#fdfcf5] border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8cc63f] focus:ring-1 focus:ring-[#8cc63f]" placeholder="Write your message here..."></textarea>
              </div>
              <button type="submit" className="w-full bg-[#5e9d34] text-white font-black uppercase tracking-[0.2em] py-4 rounded-xl hover:bg-[#4a8027] transition-colors">Submit Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
