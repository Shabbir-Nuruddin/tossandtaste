"use client"
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const videos = [
  "/videos/4_exotic_fruit_salad.mp4",
  "/videos/8_veggie_buddha_bowl.mp4",
  "/videos/1_strawberry_shake.mp4",
  "/videos/10_apple_beetroot_carrot_juice.mp4",
  "/videos/13_avocado_chickpea_salad.mp4",
  "/videos/2_chocolate_shake.mp4",
  "/videos/3_grilled_chicken_salad.mp4",
  "/videos/5_chicken_buddha_bowl.mp4",
  "/videos/6_watermelon_mint_juice.mp4",
  "/videos/7_banana_bread.mp4",
  "/videos/9_pineapple_juice.mp4",
  "/videos/11_peanut_butter_energy_bites.mp4",
  "/videos/12_dry_fruit_ladoo.mp4",
  "/videos/14_quinoa_fruit_salad.mp4",
  "/videos/15_teriyaki_chicken_rice_bowl.mp4",
  "/videos/16_mix_berry_smoothie.mp4"
];

export default function HorizontalGallery() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateScrollRange = () => {
      if (containerRef.current) {
        const scrollWidth = containerRef.current.scrollWidth;
        const clientWidth = window.innerWidth;
        // 40px buffer to ensure the last video doesn't hug the very edge tightly
        setScrollRange(scrollWidth - clientWidth + 40); 
      }
    };

    updateScrollRange();
    window.addEventListener("resize", updateScrollRange);
    return () => window.removeEventListener("resize", updateScrollRange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Use a spring to make the scroll incredibly smooth and fluid
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
    mass: 0.1
  });

  // Map 15% to 85% of scroll to the full horizontal movement
  // If scrollRange is 0 (like during SSR), it just maps to [0, 0]
  const x = useTransform(smoothProgress, [0.15, 0.85], [0, -scrollRange]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#fdfcf5]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center mb-6 md:mb-10 mt-10 px-4">
          <h2 className="text-4xl md:text-6xl font-black text-[#0f3b21] tracking-tight uppercase">Taste The Freshness</h2>
          <p className="mt-2 md:mt-4 text-zinc-500 font-medium text-base md:text-lg">Scroll to explore our vibrant meals</p>
        </div>
        
        {/* w-max allows the container to be its natural massive width */}
        <motion.div 
          ref={containerRef}
          style={{ x }} 
          className="flex gap-6 md:gap-8 px-4 md:px-10 w-max pb-10"
        >
          {videos.map((src, idx) => (
            <div key={idx} className="relative w-[250px] h-[444px] md:w-[300px] md:h-[533px] shrink-0 rounded-3xl overflow-hidden shadow-2xl bg-zinc-200">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                preload="none"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={src} type="video/mp4" />
              </video>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
