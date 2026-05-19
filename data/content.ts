import type {
  NavLink,
  Service,
  Project,
  ProcessStep,
  PricingTier,
  Testimonial,
  TrustClient,
  AddOn,
  BlogPost,
  CaseStudy,
} from '@/types'

export const navLinks: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
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

export const projects: Project[] = [
  {
    title: 'Insight Afri Research',
    url: 'https://www.insightafriresearch.com',
    category: 'Research & Analytics',
    imageUrl: '/insightafriresearch2.png',
    metric: '300% more enquiries',
  },
  {
    title: 'Dual Scope Engineering',
    url: 'https://dualscopeengineering.com',
    category: 'Engineering & Construction',
    imageUrl: '/dualscopeeng.webp',
    metric: '3 gov. tenders in month 1',
  },
  {
    title: 'Mkulima Sharp',
    url: 'https://www.mkulimasharp.com',
    category: 'AgriTech E-Commerce',
    imageUrl: '/mkulimasharp.webp',
    metric: 'Hundreds of orders weekly',
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
    quote:
      'Working with Webmerchants transformed our online presence. We were invisible online — now we get 3–5 enquiries a week directly from our website.',
    name: 'James M.',
    company: 'CEO · Dual Scope Engineering',
    metric: '3–5 new enquiries per week',
  },
  {
    quote:
      'Our website now ranks on page 1 of Google Kenya for our core research keywords. The SEO work Webmerchants did paid for itself in one client.',
    name: 'Amina K.',
    company: 'Director · Insight Afri Research',
    metric: 'Page 1 on Google Kenya',
  },
  {
    quote:
      'The M-Pesa e-commerce platform they built handles hundreds of orders per week without a single issue. Best investment we made in 2025.',
    name: 'David O.',
    company: 'Founder · Mkulima Sharp',
    metric: 'Hundreds of orders weekly',
  },
]

export const trustClients: TrustClient[] = [
  { name: 'Insight Afri Research', url: 'https://www.insightafriresearch.com' },
  { name: 'Dual Scope Engineering', url: 'https://dualscopeengineering.com' },
  { name: 'Mkulima Sharp', url: 'https://www.mkulimasharp.com' },
]

export const addOns: AddOn[] = [
  {
    title: 'Domain Registration',
    price: 'KSh 2,000/yr',
    description: '.co.ke or .com domain secured for your brand.',
  },
  {
    title: 'Hosting Setup',
    price: 'KSh 6,000',
    description: 'Vercel or cPanel deployment, SSL certificate included.',
  },
  {
    title: 'Logo Design',
    price: 'KSh 2,000',
    description: 'Professional brand mark delivered in all formats.',
  },
  {
    title: 'Monthly Maintenance',
    price: 'KSh 2,000/mo',
    description: 'Updates, security patches, uptime monitoring, monthly report.',
  },
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-nairobi-businesses-need-a-website',
    title: 'Why Your Nairobi Business Is Losing Clients Without a Website',
    excerpt:
      'In 2026, over 60% of Kenyan consumers search online before buying. If your business is not online, you are invisible to your best customers.',
    date: '2026-04-10',
    readTime: '5 min',
  },
  {
    slug: 'wordpress-vs-nextjs-kenya',
    title: 'WordPress vs Next.js: What Is Right for Your Kenyan Business?',
    excerpt:
      'The platform you choose determines your SEO, speed, and long-term costs. Here is an honest breakdown for Kenyan SMEs.',
    date: '2026-04-22',
    readTime: '7 min',
  },
  {
    slug: 'rank-number-one-google-kenya',
    title: 'How to Rank #1 on Google Kenya in 2026',
    excerpt:
      'Local SEO for the Kenyan market is different. Google Maps ranking, Swahili keywords, and mobile-first indexing all play a role.',
    date: '2026-05-01',
    readTime: '8 min',
  },
  {
    slug: 'mpesa-integration-ecommerce',
    title: 'M-Pesa Integration: What Every Kenyan E-Commerce Site Needs',
    excerpt:
      'Over 90% of Kenyan online transactions happen via M-Pesa. Here is what you need to know before launching your store.',
    date: '2026-05-08',
    readTime: '6 min',
  },
  {
    slug: 'website-mistakes-kenyan-smes',
    title: '7 Website Mistakes Killing Kenyan SME Conversions',
    excerpt:
      'From slow load times on 3G to missing WhatsApp buttons — these are the mistakes costing Kenyan businesses real revenue.',
    date: '2026-05-10',
    readTime: '6 min',
  },
]

export const caseStudies: CaseStudy[] = [
  {
    slug: 'insight-afri-research',
    title: 'Insight Afri Research',
    category: 'Research & Analytics',
    url: 'https://www.insightafriresearch.com',
    imageUrl: '/insightafriresearch2.png',
    problem:
      'Insight Afri had no digital presence. Research clients could not find them online and all leads came through word of mouth.',
    solution:
      'We built a full editorial website with project showcases, service pages and a lead capture system integrated with email notifications.',
    result:
      'Online enquiries increased by 300% within 60 days of launch. The site now ranks on page 1 for "research consultancy Nairobi".',
    metric: '300% more enquiries',
  },
  {
    slug: 'dual-scope-engineering',
    title: 'Dual Scope Engineering',
    category: 'Engineering & Construction',
    url: 'https://dualscopeengineering.com',
    imageUrl: '/dualscopeeng.webp',
    problem:
      'An outdated website was misrepresenting the firm to potential government and NGO clients.',
    solution:
      'Full redesign with Gemini AI chatbot integration, admin image gallery, and a Paystack donation system for CSR projects.',
    result:
      'Time-on-site increased by 4 minutes on average. Three government tender enquiries received within the first month.',
    metric: '3 gov. tenders in month 1',
  },
  {
    slug: 'mkulima-sharp',
    title: 'Mkulima Sharp',
    category: 'AgriTech E-Commerce',
    url: 'https://www.mkulimasharp.com',
    imageUrl: '/mkulimasharp.webp',
    problem:
      'Farmers and agri-buyers had no reliable online platform for poultry products in Kenya.',
    solution:
      'Built a full e-commerce platform with M-Pesa Daraja integration, Google OAuth, admin CRUD system, and CI/CD pipeline.',
    result:
      'Platform now processes hundreds of orders per week. Featured as a top agritech product at GEGIS 2026.',
    metric: 'Hundreds of orders weekly',
  },
]
