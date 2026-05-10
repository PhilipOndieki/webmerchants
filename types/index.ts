export interface NavLink {
  label: string
  href: string
}

export interface Service {
  numeral: 'I' | 'II' | 'III'
  title: string
  description: string
}

export interface StackOption {
  id: string
  label: string
  benefit: string
}

export interface Project {
  title: string
  url: string
  category: string
  stack: string
  imageUrl: string
}

export interface ProcessStep {
  step: string
  title: string
  description: string
  duration: string
}

export interface BizService {
  title: string
  price: number
  iconPath: string
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
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  service: string
  message: string
}
