import type { Metadata } from 'next'
import { Cormorant_Garamond, Didact_Gothic } from 'next/font/google'
import './globals.css'
import CursorTracker from '@/components/CursorTracker'

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
  title: 'Webmerchants — Make You a Market Champion',
  description:
    'Premium web design, development and SEO for ambitious Kenyan brands. Based in Nairobi, Kenya.',
  keywords: [
    'web design Kenya',
    'web development Nairobi',
    'SEO Kenya',
    'Next.js agency Kenya',
    'Webmerchants',
  ],
  authors: [{ name: 'Philip Ondieki' }],
  openGraph: {
    title: 'Webmerchants — Make You a Market Champion',
    description:
      'Premium web design, development and SEO for ambitious Kenyan brands.',
    url: 'https://webmerchants.co.ke',
    siteName: 'Webmerchants',
    locale: 'en_KE',
    type: 'website',
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
        <CursorTracker />
        {children}
      </body>
    </html>
  )
}
