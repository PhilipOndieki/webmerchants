import type { Metadata } from 'next'
import Link from 'next/link'
import { WA_BASE_URL } from '@/constants'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Website Design & Development Services Nairobi Kenya | Webmerchants',
  description:
    'Professional website design company in Nairobi. We build fast, affordable websites for Kenyan businesses. Web design, website modernisation and SEO. Serving all 47 counties.',
  keywords: [
    'website design company Nairobi',
    'web design company Kenya',
    'website designer near me Nairobi',
    'affordable website design Kenya',
    'website developer Nairobi',
    'SEO Kenya',
  ],

  alternates: { canonical: 'https://webmerchants.co.ke/services' },
  openGraph: {
    title: 'Web Design & Development Services in Kenya | Webmerchants',
    description:
      'Professional web design, website modernisation and SEO services for Kenyan businesses.',
    url: 'https://webmerchants.co.ke/services',
    siteName: 'Webmerchants',
    locale: 'en_KE',
    type: 'website',
  },
}

export default function ServicesPage(): React.JSX.Element {
  return (
    <>
      <Navbar />
      
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-end"
        style={{
          backgroundImage: 'url(/services.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-wm-black/70" aria-hidden="true" />

        <div className="relative z-10 px-6 lg:px-12 pb-24 pt-36">
          <h1 className="font-display text-[64px] font-light text-wm-off leading-tight max-w-3xl">
            Web Design Services Built for Kenyan Businesses.
          </h1>
          <p className="font-body text-[15px] text-wm-grey max-w-xl leading-relaxed mt-8">
            From Nairobi startups to established firms across Kenya, we build websites that rank on Google,
            load fast on 3G, and convert visitors into paying clients.
          </p>
        </div>
      </section>
      {/* Service I — Bespoke */}
      <section id="i" className="bg-wm-dark py-24 lg:py-36">
        <div className="px-6 lg:px-12">
          <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-4">Service I</p>
          <h2 className="font-display text-[48px] font-light text-wm-off leading-tight mb-4">
            Bespoke Website Creation
          </h2>
          <p className="font-body text-[15px] text-wm-grey max-w-xl leading-relaxed mb-16">
            Custom websites designed from the ground up built for your brand, your goals, and your Kenyan audience.
          </p>

          {/* What's included */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-wm-border mb-16">
            {[
              { label: 'Design', content: 'Custom wireframes, brand-aligned mockups, mobile-first design' },
              { label: 'Development', content: 'React or Next.js for performance, WordPress for content teams' },
              { label: 'SEO', content: 'On-page SEO, meta tags, sitemap, Google Search Console setup' },
              { label: 'Integrations', content: 'M-Pesa, WhatsApp, Google Analytics, email capture' },
              { label: 'Delivery', content: '2–5 weeks depending on scope' },
              { label: 'Post-launch', content: '30 days of free support included' },
            ].map((item) => (
              <div key={item.label} className="bg-wm-dark border border-wm-border p-8 flex gap-8">
                <span className="font-body text-[11px] text-gold uppercase tracking-[0.15em] w-28 flex-shrink-0 pt-0.5">
                  {item.label}
                </span>
                <span className="font-body text-[14px] text-wm-grey leading-relaxed">
                  {item.content}
                </span>
              </div>
            ))}
          </div>

          <p className="font-body text-[14px] text-wm-grey leading-relaxed max-w-2xl mb-8">
            <span className="text-gold font-body text-[11px] uppercase tracking-[0.15em] block mb-2">Who it&apos;s for</span>
            Startups launching their first digital presence. Established businesses that have been relying
            on word-of-mouth. NGOs and organisations that need a credible online home.
          </p>

          <p className="font-display text-[24px] text-gold mb-8">Starting from KSh 35,000</p>

          <Link
            href="/contact"
            className="font-body text-xs tracking-[0.2em] uppercase bg-gold text-wm-black px-10 py-4 hover:bg-gold-light transition-colors duration-200 inline-block mb-16"
          >
            Get a quote for your site →
          </Link>

          {/* FAQ */}
          <div className="border-t border-wm-border pt-12">
            <p className="font-body text-[11px] text-gold uppercase tracking-[0.2em] mb-8">FAQ</p>
            <div className="flex flex-col gap-0">
              {[
                {
                  q: 'How long does a bespoke website take?',
                  a: 'Starter sites (5 pages) take 2 weeks. Larger builds (10+ pages) take 4–5 weeks. We send weekly progress updates throughout.',
                },
                {
                  q: 'Do I need to provide content and photos?',
                  a: 'We guide you through exactly what we need. If you need copywriting or photography, we can recommend trusted Nairobi-based professionals.',
                },
                {
                  q: 'Can you integrate M-Pesa payments?',
                  a: 'Yes. M-Pesa Daraja API integration is available on Growth and Enterprise packages. We handle the Safaricom onboarding process with you.',
                },
              ].map((faq) => (
                <details key={faq.q} className="border-t border-wm-border py-6 group">
                  <summary className="font-body text-[14px] text-white cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-gold ml-4">+</span>
                  </summary>
                  <p className="font-body text-[14px] text-wm-grey leading-relaxed mt-4 max-w-2xl">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service II — Modernisation */}
      <section id="ii" className="bg-wm-black py-24 lg:py-36">
        <div className="px-6 lg:px-12">
          <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-4">Service II</p>
          <h2 className="font-display text-[48px] font-light text-wm-off leading-tight mb-4">
            Website Modernisation
          </h2>
          <p className="font-body text-[15px] text-wm-grey max-w-xl leading-relaxed mb-12">
            Your old website is costing you clients. We fix that.
          </p>

          {/* Signs */}
          <div className="mb-12">
            <p className="font-body text-[11px] text-gold uppercase tracking-[0.2em] mb-6">
              Signs your site needs modernisation
            </p>
            <ul className="flex flex-col gap-4 max-w-2xl">
              {[
                'Takes more than 3 seconds to load on mobile',
                'Looks outdated compared to your competitors',
                'Has no SSL certificate (not HTTPS)',
                'Cannot be updated without calling a developer',
              ].map((sign) => (
                <li key={sign} className="flex items-start gap-4">
                  <span className="text-gold flex-shrink-0 mt-0.5">—</span>
                  <span className="font-body text-[14px] text-wm-grey">{sign}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What we do */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-wm-border mb-12">
            {[
              { label: 'Speed', content: 'Cut load time from 8s to under 2s' },
              { label: 'Design', content: 'New visual identity, aligned with your brand' },
              { label: 'Mobile', content: 'Fully responsive and tested on Kenya\'s most-used Android devices' },
              { label: 'SEO migration', content: 'Preserve your existing Google rankings during the transition' },
              { label: 'Content', content: 'We migrate all your existing content and nothing gets lost' },
            ].map((item) => (
              <div key={item.label} className="bg-wm-black border border-wm-border p-8 flex gap-8">
                <span className="font-body text-[11px] text-gold uppercase tracking-[0.15em] w-28 flex-shrink-0 pt-0.5">
                  {item.label}
                </span>
                <span className="font-body text-[14px] text-wm-grey leading-relaxed">
                  {item.content}
                </span>
              </div>
            ))}
          </div>

          <p className="font-display text-[32px] italic text-gold mb-8">
            &ldquo;From invisible to undeniable in 3 weeks.&rdquo;
          </p>

          <p className="font-display text-[24px] text-gold mb-8">Starting from KSh 35,000</p>

          <Link
            href="/contact"
            className="font-body text-xs tracking-[0.2em] uppercase bg-gold text-wm-black px-10 py-4 hover:bg-gold-light transition-colors duration-200 inline-block mb-16"
          >
            Get a free site audit →
          </Link>

          {/* FAQ */}
          <div className="border-t border-wm-border pt-12">
            <p className="font-body text-[11px] text-gold uppercase tracking-[0.2em] mb-8">FAQ</p>
            <div className="flex flex-col gap-0">
              {[
                {
                  q: 'Will I lose my Google ranking during the redesign?',
                  a: 'No — we implement a full SEO migration plan, including 301 redirects and Google Search Console monitoring. Your rankings are protected.',
                },
                {
                  q: 'What if I want to keep some of my current website\'s content?',
                  a: 'We migrate all existing content. You decide what stays and what goes.',
                },
                {
                  q: 'How is modernisation different from building a new site?',
                  a: 'Modernisation preserves your existing brand equity and domain authority. A new site starts from zero. If your domain is older than 2 years, modernisation is almost always the smarter investment.',
                },
              ].map((faq) => (
                <details key={faq.q} className="border-t border-wm-border py-6">
                  <summary className="font-body text-[14px] text-white cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-gold ml-4">+</span>
                  </summary>
                  <p className="font-body text-[14px] text-wm-grey leading-relaxed mt-4 max-w-2xl">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service III — SEO */}
      <section id="iii" className="bg-wm-dark py-24 lg:py-36">
        <div className="px-6 lg:px-12">
          <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-4">Service III</p>
          <h2 className="font-display text-[48px] font-light text-wm-off leading-tight mb-4">
            Search Engine Optimisation for Kenya
          </h2>
          <p className="font-body text-[15px] text-wm-grey max-w-xl leading-relaxed mb-16">
            Ranking on Google Kenya is different from ranking globally.
            Local search, Swahili keywords, Google Maps we know this market.
          </p>

          {/* SEO cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {[
              { title: 'Local SEO', desc: 'Google Maps optimisation, Google Business Profile, county-level targeting' },
              { title: 'Keyword Research', desc: 'Swahili and English keyword targeting for your exact industry in Kenya' },
              { title: 'Technical SEO', desc: 'Site speed on 3G, mobile-first indexing, Core Web Vitals' },
              { title: 'Content SEO', desc: 'Blog articles targeting high-value Kenyan search terms' },
            ].map((card) => (
              <div key={card.title} className="border border-wm-border p-8 hover:border-gold transition-colors duration-200">
                <h3 className="font-display text-[22px] text-white mb-3">{card.title}</h3>
                <p className="font-body text-[14px] text-wm-grey leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Stat strip */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 border border-wm-border">
            {[
              '60%+ of Kenyan consumers search online before buying',
              '92% of all Google searches in Kenya happen on mobile',
              'Page 1 of Google gets 95% of all clicks',
            ].map((stat) => (
              <div key={stat} className="p-8 border-b lg:border-b-0 lg:border-r border-wm-border last:border-0">
                <p className="font-display text-[20px] text-gold italic leading-snug">{stat}</p>
              </div>
            ))}
          </div>

          {/* What's included timeline */}
          <div className="mb-12">
            <p className="font-body text-[11px] text-gold uppercase tracking-[0.2em] mb-8">What&apos;s included</p>
            <div className="flex flex-col gap-6 max-w-2xl">
              {[
                { month: 'Month 1', work: 'Technical audit, keyword research, on-page fixes, Google Search Console setup' },
                { month: 'Month 2', work: 'Content strategy, Google Business Profile, link building' },
                { month: 'Month 3+', work: 'Ongoing optimisation, monthly ranking report' },
              ].map((item) => (
                <div key={item.month} className="flex gap-8 border-l-2 border-gold pl-6">
                  <span className="font-body text-[11px] text-gold uppercase tracking-[0.15em] w-20 flex-shrink-0 pt-0.5">
                    {item.month}
                  </span>
                  <span className="font-body text-[14px] text-wm-grey leading-relaxed">{item.work}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="font-display text-[24px] text-gold mb-8">
            From KSh 15,000/month to minimum 3-month engagement
          </p>

          <Link
            href="/contact"
            className="font-body text-xs tracking-[0.2em] uppercase bg-gold text-wm-black px-10 py-4 hover:bg-gold-light transition-colors duration-200 inline-block mb-16"
          >
            Get a free SEO audit →
          </Link>

          {/* FAQ */}
          <div className="border-t border-wm-border pt-12">
            <p className="font-body text-[11px] text-gold uppercase tracking-[0.2em] mb-8">FAQ</p>
            <div className="flex flex-col gap-0">
              {[
                {
                  q: 'How long does SEO take to show results in Kenya?',
                  a: 'Most clients see measurable movement in 60–90 days. Local SEO for Nairobi terms can rank within 30 days for newer niches.',
                },
                {
                  q: 'Do you do Swahili keyword optimisation?',
                  a: 'Yes. Many Kenyan consumers search in Swahili, especially on mobile. We research and target both English and Swahili terms for your industry.',
                },
                {
                  q: 'Can you help with Google Maps ranking?',
                  a: 'Yes — Google Business Profile optimisation and local citation building are included in our local SEO package.',
                },
              ].map((faq) => (
                <details key={faq.q} className="border-t border-wm-border py-6">
                  <summary className="font-body text-[14px] text-white cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-gold ml-4">+</span>
                  </summary>
                  <p className="font-body text-[14px] text-wm-grey leading-relaxed mt-4 max-w-2xl">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-wm-black py-24">
        <div className="px-6 lg:px-12 text-center">
          <h2 className="font-display text-[48px] font-light text-wm-off leading-tight mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="font-body text-[15px] text-wm-grey max-w-lg mx-auto leading-relaxed mb-10">
            Tell us about your business on WhatsApp and we&apos;ll tell you exactly what we recommend and why.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href={WA_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-[0.2em] uppercase bg-[#25D366] text-white px-10 py-4 hover:opacity-90 transition-opacity"
            >
              Chat on WhatsApp →
            </a>
            <Link
              href="/contact"
              className="font-body text-xs tracking-[0.2em] uppercase text-wm-grey hover:text-gold transition-colors duration-200"
            >
              Or fill in our project form →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
