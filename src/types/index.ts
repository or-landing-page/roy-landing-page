export interface NavLink {
  label: string
  href: string
}

export interface Service {
  id: string
  title: string
  description: string
  price: string
  duration: string
  icon: string
  popular?: boolean
}

export interface Course {
  id: string
  title: string
  subtitle: string
  description: string
  duration: string
  modules: number
  price: string
  originalPrice: string
  tag: string
  popular: boolean
  features: readonly string[]
}

export interface PainPoint {
  id: number
  icon: string
  title: string
  text: string
}

export interface Testimonial {
  id: number
  name: string
  location: string
  text: string
  rating: number
  emoji: string
}

export interface FaqItem {
  id: number
  category: 'service' | 'course'
  question: string
  answer: string
}

export interface ContactFormData {
  name: string
  phone: string
  email: string
  message: string
  type: 'service' | 'course' | 'general'
}
