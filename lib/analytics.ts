import { track } from '@vercel/analytics'

function safeTrack(event: string, properties?: Record<string, string>): void {
  if (process.env.NODE_ENV !== 'production') return
  track(event, properties)
}

export function trackWhatsAppClick(source: string): void {
  safeTrack('whatsapp_click', { source })
}

export function trackQuoteFormStart(): void {
  safeTrack('quote_form_start')
}

export function trackQuoteFormSubmit(): void {
  safeTrack('quote_form_submit')
}

export function trackGetQuoteClick(source: string): void {
  safeTrack('get_quote_click', { source })
}

export function trackCaseStudyView(project: string): void {
  safeTrack('case_study_view', { project })
}

export function trackBlogArticleView(slug: string): void {
  safeTrack('blog_article_view', { slug })
}

export function trackGoogleAdsConversion(): void {
  if (process.env.NODE_ENV !== 'production') return
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', 'conversion', {
    send_to: 'AW-18178763626/n-jiCJi3xrMcEOrWp9xD',
    value: 1.0,
    currency: 'KES',
  })
}