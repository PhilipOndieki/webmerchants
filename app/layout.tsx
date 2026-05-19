import type { Metadata } from 'next'
import { Cormorant_Garamond, Didact_Gothic } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const didactGothic = Didact_Gothic({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Webmerchants — Website Design Company Nairobi Kenya',
    template: '%s | Webmerchants Kenya',
  },
  description:
    'Looking for a website designer near you in Nairobi? Webmerchants builds fast, affordable websites for Kenyan businesses. M-Pesa accepted. Serving all 47 counties. WhatsApp: +254 796 422 627.',
  keywords: [
    'website design company Nairobi',
    'website designer near me Nairobi',
    'web design company Kenya',
    'website design Kenya',
    'web design Nairobi',
    'affordable website design Kenya',
    'website developer Nairobi',
    'web designer near me Kenya',
  ],
  authors: [{ name: 'Philip Ondieki', url: 'https://webmerchants.co.ke/about' }],
  creator: 'Philip Ondieki',
  metadataBase: new URL('https://webmerchants.co.ke'),
  alternates: { canonical: 'https://webmerchants.co.ke' },
  openGraph: {
    title: 'Webmerchants',
    description: 'Premium web design, development and SEO for Kenyan businesses.',
    url: 'https://webmerchants.co.ke',
    siteName: 'Webmerchants',
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webmerchants',
    description: 'Premium web design, development and SEO for Kenyan businesses.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.JSX.Element {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${didactGothic.variable}`}
    >
      <body className="bg-wm-black font-body antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
