import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace BentoGrid items with actual How it Works
old_bento = r'''<BentoGridItem
              title="We Cook Fresh"
              description="Premium ingredients, zero refined sugar, and chef-crafted recipes cooked daily."
              header={<div className="flex flex-1 w-full h-full min-h-\[6rem\] rounded-xl bg-gradient-to-br from-\[\#f6faed\] to-\[\#d8e6c4\] flex items-center justify-center"><Leaf size=\{48\} className="text-\[\#5e9d34\]" /></div>}
              className="md:col-span-1"
            />
            <BentoGridItem
              title="Macro Balanced"
              description="Every meal is perfectly portioned to hit your exact protein, carb, and fat goals."
              header={<div className="flex flex-1 w-full h-full min-h-\[6rem\] rounded-xl bg-gradient-to-br from-\[\#f6faed\] to-\[\#d8e6c4\] flex items-center justify-center"><HeartPulse size=\{48\} className="text-\[\#5e9d34\]" /></div>}
              className="md:col-span-1"
            />
            <BentoGridItem
              title="Delivered Daily"
              description="Enjoy seamless daily delivery across Delhi & Gurugram, straight to your door or office."
              header={<div className="flex flex-1 w-full h-full min-h-\[6rem\] rounded-xl bg-gradient-to-br from-\[\#f6faed\] to-\[\#d8e6c4\] flex items-center justify-center"><Clock size=\{48\} className="text-\[\#5e9d34\]" /></div>}
              className="md:col-span-1"
            />'''

new_bento = '''<BentoGridItem
              title="Step 1: Planned by Experts"
              description="Understand your body, goals, lifestyle, and dietary needs through a personalized expert consultation."
              header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#f6faed] to-[#d8e6c4] flex items-center justify-center"><Leaf size={48} className="text-[#5e9d34]" /></div>}
              className="md:col-span-1"
            />
            <BentoGridItem
              title="Step 2: Freshly Prepared"
              description="We evaluate your health condition, preferences, and nutritional requirements to create the right foundation with fresh ingredients."
              header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#f6faed] to-[#d8e6c4] flex items-center justify-center"><HeartPulse size={48} className="text-[#5e9d34]" /></div>}
              className="md:col-span-1"
            />
            <BentoGridItem
              title="Step 3: Delivered on Time"
              description="Receive freshly prepared, healthy, and tasty meals delivered directly to your doorstep in Delhi & Gurugram."
              header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#f6faed] to-[#d8e6c4] flex items-center justify-center"><Clock size={48} className="text-[#5e9d34]" /></div>}
              className="md:col-span-1"
            />'''
            
content = re.sub(old_bento, new_bento, content)

# Replace testimonials
old_test = r'''\{ text: "The Fat Loss plan completely changed my life. The Teriyaki Bowl is incredible!", name: "Rajat S.", detail: "Lost 8kg in 2 Months" \},
              \{ text: "Toss & Taste saves me hours every day. The Protein Pack is a game-changer.", name: "Priya M.", detail: "Subscribed for 6 Months" \},
              \{ text: "Zero refined sugar and absolutely delicious. Highest quality meal prep ever.", name: "Amit K.", detail: "Fitness Enthusiast" \},
              \{ text: "I look forward to lunch every day. The Exotic Fruit Salad is perfectly fresh.", name: "Neha G.", detail: "Eat Clean Plan" \},
              \{ text: "As a doctor, I recommend this to my patients. The macro balancing is spot on.", name: "Dr. Sharma", detail: "Nutrition Expert" \}'''

new_test = '''{ text: "Toss Taste has completely changed my eating habits. The meals are fresh, delicious, and perfectly portioned. I've already started seeing great results.", name: "Neha Verma", detail: "Working Professional" },
              { text: "The convenience and quality are amazing. I don't have to worry about cooking or counting calories anymore. Toss Taste delivers healthy meals right on time.", name: "Rahul Sharma", detail: "Fitness Enthusiast" },
              { text: "Highly recommend Toss Taste to anyone who wants healthy and convenient meals. The quality, taste, and delivery service are excellent.", name: "Priya Mehta", detail: "Lifestyle Customer" },
              { text: "I've lost noticeable weight since starting Toss Taste meal plans. The meals are nutritious, tasty, and make it easy to stay consistent with my diet goals.", name: "Amit Gupta", detail: "Weight Loss Customer" }'''

content = re.sub(old_test, new_test, content)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
