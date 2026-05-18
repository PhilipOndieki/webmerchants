export interface NavLink {
  label: string
  href: string
}

export interface Service {
  numeral: 'I' | 'II' | 'III'
  title: string
  description: string
}

export interface Project {
  title: string
  url: string
  category: string
  stack?: string
  imageUrl: string
  metric?: string
}

export interface ProcessStep {
  step: string
  title: string
  description: string
  duration: string
}

export interface PricingTier {
  name: string
  price: string
  featured: boolean
  features: string[]
  cta: string
}

export interface Testimonial {
  quote: string
  name: string
  company: string
  metric: string
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  service: string
  budget: string
  message: string
}

export interface TrustClient {
  name: string
  url: string
}

export interface AddOn {
  title: string
  price: string
  description: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
}

export interface CaseStudy {
  slug: string
  title: string
  category: string
  stack?: string
  url: string
  imageUrl: string
  problem?: string
  solution?: string
  result?: string
  metric?: string
}
