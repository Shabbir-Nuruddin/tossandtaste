"use client"
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#fdfcf5]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center mb-10 mt-10">
          <h2 className="text-4xl md:text-6xl font-black text-[#0f3b21] tracking-tight uppercase">Taste The Freshness</h2>
          <p className="mt-4 text-zinc-500 font-medium text-lg">Scroll to explore our vibrant meals</p>
        </div>
        
        <motion.div style={{ x }} className="flex gap-8 px-10">
          {videos.map((src, idx) => (
            <div key={idx} className="relative w-[300px] md:w-[400px] h-[450px] md:h-[600px] shrink-0 rounded-3xl overflow-hidden shadow-2xl">
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
