// Single source of truth for business details used across the site.
// Everything here is taken from tossandtaste.com — update it in one place.

export const SITE = {
  name: 'Toss & Taste',
  tagline: 'Fresh • Fit • Flavourful',
  promise: "Healthy food doesn't have to be boring.",
  url: 'https://tossandtaste.com',
  phone: '+91 97115 33944',
  phoneHref: 'tel:+919711533944',
  whatsappNumber: '919711533944',
  email: 'contact@tossandtaste.com',
  address: 'Sector 55, Golf Course Road, Gurugram 122001',
  fssai: '20824005000269',
  areas: ['Gurugram', 'Delhi', 'Noida'],
  slots: {
    lunch: '11:30 AM – 1:30 PM',
    dinner: '5:00 PM – 8:30 PM',
  },
  socials: [
    { name: 'Instagram', href: 'https://www.instagram.com/tossandtasteindia/' },
    { name: 'Facebook', href: 'https://www.facebook.com/tossandtasteindia/' },
  ],
  founder: {
    name: 'Arun Bhatia',
    role: 'Founder, Toss & Taste',
    photo: '/uploads/about/WhatsApp-Image-2026-02-18-at-1.01.45-PM.jpeg',
  },
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// Customer reviews as published on tossandtaste.com.
export const TESTIMONIALS = [
  {
    name: 'Neha Verma',
    role: 'Working professional',
    quote:
      'Toss & Taste has completely changed my eating habits. The meals are fresh, delicious, and perfectly portioned. I’ve already started seeing great results in my fitness journey.',
  },
  {
    name: 'Rahul Sharma',
    role: 'Fitness enthusiast',
    quote:
      'The convenience and quality are amazing. I don’t have to worry about cooking or counting calories anymore. Meals arrive right on time every day.',
  },
  {
    name: 'Priya Mehta',
    role: 'Lifestyle customer',
    quote:
      'Highly recommend Toss & Taste to anyone who wants healthy and convenient meals. The quality, taste, and delivery service are excellent.',
  },
  {
    name: 'Amit Gupta',
    role: 'Weight-loss customer',
    quote:
      'I’ve lost noticeable weight since starting the meal plans. The meals are nutritious, tasty, and make it easy to stay consistent with my diet goals.',
  },
];

// Real reviews from the Toss & Taste Google listing, quoted word for word (trimmed with …).
// Reviewers are shown by first name and last initial.
export const GOOGLE_REVIEWS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Toss & Taste ${SITE.address}`)}`;

export const GOOGLE_REVIEWS = [
  {
    name: 'Raihan S.',
    quote:
      'Let me be honest. The food is incredibly good, which allows me to meet my protein goals and stay fit with this meal plan. Would highly recommend it.',
  },
  {
    name: 'Ankesh A.',
    quote:
      'Really happy with the service! The meals are well-balanced, thoughtfully portioned, and have a great approach, with options like brown rice, good protein sources, vegetables, and other healthy choices.',
  },
  {
    name: 'Roneeta N.',
    quote:
      'Absolutely loving my experience so far! Been having their healthy lunch bowls for the last 2 days — Super fresh, tasty!! — healthy doesn’t have to be boring!',
  },
  {
    name: 'Sakshi S.',
    quote:
      'Their delivery is always on time, the packaging is neat, and the food remains fresh upon arrival. I love the flexibility of their subscription plans — it makes eating healthy effortless.',
  },
  {
    name: 'Farhan A.',
    quote:
      'The grilled cheese was perfectly cooked, the vegetables were fresh and crisp, and the dressing brought everything together beautifully & the taste was just WOW…',
  },
  {
    name: 'Anjit T.',
    quote: 'Best healthy food I had in Gurgaon. Each item in the menu is crafted well and with attention to detail.',
  },
];

// Answers are drawn from the policies and plan pages on tossandtaste.com.
export const FAQS = [
  {
    q: 'Where do you deliver?',
    a: 'We cook in Sector 55, Gurugram and deliver across Gurugram, Delhi and Noida. Availability can vary by pin code, so send us your address on WhatsApp and we’ll confirm before you pay.',
  },
  {
    q: 'What are the delivery timings?',
    a: `Lunch arrives between ${SITE.slots.lunch} and dinner between ${SITE.slots.dinner}. You can choose lunch, dinner, or both on any plan.`,
  },
  {
    q: 'Is there a delivery charge?',
    a: 'Delivery charges depend on your location. We share the exact amount before your subscription is confirmed, so there are no surprises.',
  },
  {
    q: 'Do you have vegetarian options?',
    a: 'Yes. Every plan comes in Veg, Non-Veg, or Mix — a half-and-half split of veg and non-veg meals. Veg meals use paneer, tofu, chickpeas and beans for protein.',
  },
  {
    q: 'How soon can I start?',
    a: 'Pick a start date when you order. New plans usually start from the next day, as same-day delivery may not be available for new orders.',
  },
  {
    q: 'Can I cancel or pause?',
    a: 'Orders can be cancelled up to 24 hours before the scheduled delivery. Pausing or extending a plan is possible with approval from our team — just message us on WhatsApp.',
  },
  {
    q: 'What if something is wrong with my order?',
    a: 'If you receive a wrong, incomplete or damaged order, tell us within 24 hours of delivery (a photo helps) and we’ll make it right as per our refund policy.',
  },
  {
    q: 'How do I pay?',
    a: 'Place your order on the website and it opens WhatsApp with everything filled in. Our team confirms your plan, delivery charge and start date, then shares payment details.',
  },
];
