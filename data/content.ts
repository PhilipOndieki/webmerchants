import type {
  NavLink,
  Service,
  StackOption,
  Project,
  ProcessStep,
  BizService,
  PricingTier,
  Testimonial,
} from '@/types'

export const navLinks: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'How We Work', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export const services: Service[] = [
  {
    numeral: 'I',
    title: 'Bespoke Website Creation',
    description:
      "Immersive, conversion-driven digital experiences built from the ground up, tailored precisely to your brand's vision and ambition.",
  },
  {
    numeral: 'II',
    title: 'Website Modernisation',
    description:
      "Transform dated platforms into sleek, high-performance digital destinations built for today's discerning, digital-first audience.",
  },
  {
    numeral: 'III',
    title: 'Search Engine Optimisation',
    description:
      'Precision-engineered visibility strategies that consistently place your brand at the forefront of every relevant search.',
  },
]

export const stackOptions: StackOption[] = [
  {
    id: 'react',
    label: 'React',
    benefit: 'Perfect for fast, interactive web apps and rich user interfaces.',
  },
  {
    id: 'nextjs',
    label: 'Next.js',
    benefit: 'Ideal for SEO-critical sites that need speed and scalability.',
  },
  {
    id: 'wordpress',
    label: 'WordPress',
    benefit: 'Best for content-heavy sites with non-technical content editors.',
  },
  {
    id: 'webflow',
    label: 'Webflow',
    benefit: 'Great for visually driven sites with rapid no-code deployment.',
  },
  {
    id: 'vuejs',
    label: 'Vue.js',
    benefit: 'Excellent for lightweight, progressive web applications.',
  },
  {
    id: 'laravel',
    label: 'Laravel',
    benefit: 'Powerful for complex backends, APIs and custom business logic.',
  },
  {
    id: 'shopify',
    label: 'Shopify',
    benefit: 'The go-to platform for e-commerce stores of any size.',
  },
  {
    id: 'custom',
    label: 'Custom',
    benefit: "When no off-the-shelf solution fits — we engineer from scratch.",
  },
]

export const projects: Project[] = [
  {
    title: 'Insight Afri Research',
    url: 'https://www.insightafriresearch.com',
    category: 'Research & Analytics',
    stack: 'React · Firebase · Tailwind',
    imageUrl: 'https://placehold.co/800x500/0a0a0a/c9a84c?text=Insight+Afri+Research',
  },
  {
    title: 'Dual Scope Engineering',
    url: 'https://dualscopeengineering.com',
    category: 'Engineering & Construction',
    stack: 'Next.js · Vercel · Gemini AI',
    imageUrl: 'https://placehold.co/800x500/0a0a0a/c9a84c?text=Dual+Scope+Engineering',
  },
  {
    title: 'Mkulima Sharp',
    url: 'https://www.mkulimasharp.com',
    category: 'AgriTech E-Commerce',
    stack: 'React · Firebase · M-Pesa',
    imageUrl: 'https://placehold.co/800x500/0a0a0a/c9a84c?text=Mkulima+Sharp',
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We learn your business, goals and competitors.',
    duration: 'Week 1',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Wireframes, moodboards and brand-aligned mockups.',
    duration: 'Week 1–2',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Clean, performant code in your chosen stack.',
    duration: 'Week 2–4',
  },
  {
    step: '04',
    title: 'Testing',
    description: 'Cross-device QA, speed optimisation, SEO audit.',
    duration: 'Week 4',
  },
  {
    step: '05',
    title: 'Launch',
    description: 'Deployment, handover, 30-day post-launch support.',
    duration: 'Week 5',
  },
]

export const bizServices: BizService[] = [
  {
    title: 'Name Search & Reservation',
    price: 2500,
    iconPath:
      'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z',
  },
  {
    title: 'Business Registration (eCitizen)',
    price: 8500,
    iconPath:
      'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
  },
  {
    title: 'KRA PIN Registration',
    price: 1500,
    iconPath:
      'M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z',
  },
  {
    title: 'Business Permit Application',
    price: 4000,
    iconPath:
      'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z',
  },
]

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: 'KSh 25,000',
    featured: false,
    features: [
      '5-page site',
      'WordPress',
      'Basic SEO',
      'Mobile responsive',
      '1 revision round',
      '2-week delivery',
    ],
    cta: 'Get started',
  },
  {
    name: 'Growth',
    price: 'KSh 65,000',
    featured: true,
    features: [
      '10-page site',
      'React / Next.js',
      'Full SEO setup',
      'Google Analytics',
      '3 revision rounds',
      'WhatsApp support',
      '4-week delivery',
    ],
    cta: 'Get started',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    featured: false,
    features: [
      'Full custom build',
      'Dedicated developer',
      'Priority support',
      'Custom integrations',
      'M-Pesa / payment ready',
      'Ongoing maintenance',
    ],
    cta: 'Get started',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote: 'Working with Webmerchants transformed our online presence completely.',
    name: 'James M.',
    company: 'CEO · Dual Scope Engineering',
  },
  {
    quote: 'Our website now ranks #1 on Google Kenya for our core keywords.',
    name: 'Amina K.',
    company: 'Director · Insight Afri Research',
  },
  {
    quote: 'The e-commerce platform they built handles hundreds of orders daily.',
    name: 'David O.',
    company: 'Founder · Mkulima Sharp',
  },
]
