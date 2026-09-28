"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, User, Mail, Calendar, ArrowRight, Utensils, Clock } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const MENU_ITEMS = [
  { id: 1, title: 'Grilled Chicken Sandwich', category: 'Breakfast' },
  { id: 2, title: 'Grilled Paneer Sandwich', category: 'Breakfast' },
  { id: 3, title: 'Masala Omelet With Toast', category: 'Breakfast' },
  { id: 4, title: 'Mexican Omelet With Toast', category: 'Breakfast' },
  { id: 5, title: 'Scrambled Egg & Baked Beans', category: 'Breakfast' },
  { id: 6, title: 'Overnight Oats with Yogurt', category: 'Breakfast' },
  { id: 7, title: 'Besan Chilla', category: 'Breakfast' },
  { id: 8, title: 'Oats Chilla', category: 'Breakfast' },
  { id: 9, title: 'Grilled Chicken Wrap', category: 'Breakfast' },
  { id: 10, title: 'Grilled Paneer Wrap', category: 'Breakfast' },
  { id: 11, title: 'Avocado Toast', category: 'Breakfast' },
  { id: 12, title: 'Strawberry Shake', category: 'Shakes & Smoothies' },
  { id: 13, title: 'Mix Berry Smoothie', category: 'Shakes & Smoothies' },
  { id: 14, title: 'Date & Banana Shake', category: 'Shakes & Smoothies' },
  { id: 15, title: 'Chocolate Shake', category: 'Shakes & Smoothies' },
  { id: 16, title: 'Avocado Smoothie', category: 'Shakes & Smoothies' },
  { id: 17, title: 'Southwest Bowl', category: 'Lunch & Dinner' },
  { id: 18, title: 'Pesto Pasta Bowl', category: 'Lunch & Dinner' },
  { id: 19, title: 'Herb Chicken & Mashed Potato', category: 'Lunch & Dinner' },
  { id: 20, title: 'Protein Pack Buddha Bowl', category: 'Lunch & Dinner' },
  { id: 21, title: 'Chicken Quinoa Bowl', category: 'Lunch & Dinner' },
  { id: 22, title: 'Chicken With Hummus', category: 'Lunch & Dinner' },
  { id: 23, title: 'Moroccan Chicken', category: 'Lunch & Dinner' },
  { id: 24, title: 'Minced Chicken Rice Bowl', category: 'Lunch & Dinner' },
  { id: 25, title: 'Tomato Rice with Tofu', category: 'Lunch & Dinner' },
  { id: 26, title: 'Stir Fry Chicken Bowl', category: 'Lunch & Dinner' },
  { id: 27, title: 'Grilled Paneer Spinach Rice', category: 'Lunch & Dinner' },
  { id: 28, title: 'Roasted Chickpea Quinoa', category: 'Lunch & Dinner' },
  { id: 29, title: 'Teriyaki Chicken Rice Bowl', category: 'Lunch & Dinner' },
  { id: 30, title: 'Grilled Cottage Cheese Salad', category: 'Salads' },
  { id: 31, title: 'Quinoa Salad', category: 'Salads' },
  { id: 32, title: 'Falafel Salad', category: 'Salads' },
  { id: 33, title: 'Chicken Avocado Salad', category: 'Salads' },
  { id: 34, title: 'Exotic Fruit Salad', category: 'Salads' }
];

const LOCATIONS = ['Gurugram', 'Delhi NCR', 'Noida'];
const PLANS = [
  { id: '10-day', title: '10-Day Plan', days: 10, price: 3500 },
  { id: '30-day', title: '30-Day Plan', days: 30, price: 9500 },
];

export default function CheckoutPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState(LOCATIONS[0]);
  const [selectedPlan, setSelectedPlan] = useState(PLANS[0]);
  
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [mealSelections, setMealSelections] = useState<Record<string, { time: string, mealId: number }>>({});

  const handlePlanSelect = (plan: typeof PLANS[0]) => {
    setSelectedPlan(plan);
    if (selectedDates.length > plan.days) {
      setSelectedDates(selectedDates.slice(0, plan.days));
    }
  };

  const handleDateSelect = (dates: Date[] | undefined) => {
    if (!dates) {
      setSelectedDates([]);
      return;
    }
    if (dates.length > selectedPlan.days) {
      alert(`You can only select up to ${selectedPlan.days} days for this plan.`);
      return;
    }
    setSelectedDates(dates);
    
    const newSelections = { ...mealSelections };
    dates.forEach(d => {
      const key = format(d, 'yyyy-MM-dd');
      if (!newSelections[key]) {
        newSelections[key] = { time: 'Lunch', mealId: 17 };
      }
    });
    setMealSelections(newSelections);
  };

  const updateSelection = (dateKey: string, field: string, value: string | number) => {
    setMealSelections(prev => ({
      ...prev,
      [dateKey]: {
        ...prev[dateKey],
        [field]: value
      }
    }));
  };

  const handleWhatsAppCheckout = () => {
    if (!name || !email) {
      alert("Please fill in your name and email");
      return;
    }
    
    if (selectedDates.length !== selectedPlan.days) {
      alert(`Please select exactly ${selectedPlan.days} days on the calendar.`);
      return;
    }

    const phoneNumber = "919711533944";
    let message = `Hello Toss & Taste, I'd like to subscribe to the ${selectedPlan.title}.\n\n`;
    message += `Customer Details:\n`;
    message += `Name: ${name}\n`;
    message += `Email: ${email}\n`;
    message += `Location: ${location}\n\n`;
    
    message += `Meal Selections:\n`;
    
    const sortedDates = [...selectedDates].sort((a, b) => a.getTime() - b.getTime());
    sortedDates.forEach((d, i) => {
      const key = format(d, 'yyyy-MM-dd');
      const sel = mealSelections[key];
      const meal = MENU_ITEMS.find(m => m.id === Number(sel?.mealId))?.title || '';
      message += `Day ${i + 1} (${format(d, 'MMM dd, yyyy')}): ${sel?.time} ${meal}\n`;
    });

    message += `\n*Total Plan Price: ₹${selectedPlan.price}*\n\n`;
    message += "Please confirm my subscription.";
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="pt-40 pb-32 px-6 max-w-[1200px] mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h1 className="text-5xl md:text-[5rem] font-black uppercase tracking-tighter">Checkout</h1>
        <p className="text-zinc-500 mt-4 text-xl">Customize your impeccable dining experience.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-8 space-y-12">
          
          <section>
            <h2 className="text-2xl font-black uppercase tracking-widest mb-6">1. Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PLANS.map(plan => (
                <button
                  key={plan.id}
                  onClick={() => handlePlanSelect(plan)}
                  className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col text-left ${selectedPlan.id === plan.id ? 'bg-[#f6faed] text-[#1a1a1a] border-[#5e9d34]' : 'bg-white text-[#1a1a1a] border-zinc-200 hover:border-zinc-300'}`}
                >
                  <span className="text-2xl font-black uppercase tracking-tight">{plan.title}</span>
                  <span className={`text-sm mt-2 font-bold ${selectedPlan.id === plan.id ? 'text-zinc-600' : 'text-zinc-500'}`}>₹{plan.price}</span>
                </button>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase tracking-widest mb-6">2. Contact Details</h2>
            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input 
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full bg-white/5 border border-zinc-200 text-[#1a1a1a] pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-[#5e9d34] transition-colors"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input 
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-zinc-200 text-[#1a1a1a] pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-[#5e9d34] transition-colors"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <select 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-white/5 border border-zinc-200 text-[#1a1a1a] pl-12 pr-4 py-4 rounded-xl appearance-none focus:outline-none focus:border-[#5e9d34] transition-colors cursor-pointer"
                >
                  {LOCATIONS.map(loc => (
                    <option key={loc} value={loc} className="bg-zinc-100">{loc}</option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase tracking-widest mb-6 flex items-center justify-between">
              <span>3. Meal Calendar</span>
              <span className="text-sm font-normal text-zinc-500 normal-case tracking-normal">
                Selected: {selectedDates.length} / {selectedPlan.days}
              </span>
            </h2>
            <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm flex flex-col items-center">
              <DayPicker
                mode="multiple"
                selected={selectedDates}
                onSelect={handleDateSelect}
                className="font-sans"
                classNames={{
                  selected: "bg-[#5e9d34] text-white hover:bg-[#4a8027] hover:text-white rounded-full",
                  today: "font-black text-[#5e9d34]"
                }}
              />
              {selectedDates.length === 0 && (
                <p className="text-zinc-500 text-sm mt-4">Please select {selectedPlan.days} dates to build your plan.</p>
              )}
            </div>

            <div className="space-y-6 mt-8">
              <AnimatePresence>
                {[...selectedDates].sort((a, b) => a.getTime() - b.getTime()).map((date, idx) => {
                  const dateKey = format(date, 'yyyy-MM-dd');
                  const sel = mealSelections[dateKey] || { time: 'Lunch', mealId: 17 };

                  return (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      key={dateKey}
                      className="p-6 rounded-3xl bg-white border border-zinc-200 space-y-4 shadow-sm"
                    >
                      <div className="flex items-center justify-between border-b border-zinc-200 pb-4 mb-4">
                        <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">
                          Day {idx + 1} &middot; {format(date, 'MMMM dd, yyyy')}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative flex-1">
                          <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                          <select
                            value={sel.time}
                            onChange={e => updateSelection(dateKey, 'time', e.target.value)}
                            className="w-full bg-white/5 border border-zinc-200 text-[#1a1a1a] pl-12 pr-4 py-3 rounded-xl appearance-none focus:outline-none focus:border-[#5e9d34] transition-colors cursor-pointer text-sm"
                          >
                            <option value="Lunch" className="bg-zinc-100">Lunch</option>
                            <option value="Dinner" className="bg-zinc-100">Dinner</option>
                          </select>
                        </div>

                        <div className="relative flex-1">
                          <Utensils className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                          <select
                            value={sel.mealId}
                            onChange={e => updateSelection(dateKey, 'mealId', Number(e.target.value))}
                            className="w-full bg-white/5 border border-zinc-200 text-[#1a1a1a] pl-12 pr-4 py-3 rounded-xl appearance-none focus:outline-none focus:border-[#5e9d34] transition-colors cursor-pointer text-sm truncate"
                          >
                            {MENU_ITEMS.map(item => (
                              <option key={item.id} value={item.id} className="bg-zinc-100">
                                {item.title}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </section>

        </div>

        <div className="lg:col-span-4">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="sticky top-32 bg-white border border-zinc-200 rounded-[2rem] p-8 shadow-sm"
          >
            <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Summary</h3>
            
            <div className="space-y-4 text-zinc-500 mb-8 border-t border-zinc-200 pt-8">
              <div className="flex justify-between">
                <span>Plan</span>
                <span className="text-[#1a1a1a] font-bold">{selectedPlan.title}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Location</span>
                <span className="text-[#1a1a1a] text-right break-words w-1/2">{location}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Selected Days</span>
                <span className={`text-[#1a1a1a] font-bold ${selectedDates.length === selectedPlan.days ? 'text-[#5e9d34]' : 'text-red-500'}`}>
                  {selectedDates.length} / {selectedPlan.days}
                </span>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-8 pt-6 border-t border-zinc-200">
              <span className="text-xl font-bold uppercase tracking-widest text-zinc-500">Total</span>
              <span className="text-3xl font-black text-[#5e9d34]">₹{selectedPlan.price}</span>
            </div>
            
            <MagneticButton 
              onClick={handleWhatsAppCheckout}
              className="w-full flex items-center justify-center gap-3 bg-[#5e9d34] hover:bg-[#4a8027] text-white hover:text-white py-5 rounded-xl font-black uppercase tracking-[0.2em] text-sm transition-all duration-300"
            >
              Checkout on WhatsApp <ArrowRight className="w-5 h-5" />
            </MagneticButton>
            
            <p className="text-center text-zinc-500 text-xs mt-6 tracking-wide leading-relaxed">
              Complete your personalized plan securely via WhatsApp.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
