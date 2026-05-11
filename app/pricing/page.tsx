import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { pricingTiers, addOns } from '@/data/content'

export const metadata: Metadata = {
  title: 'Website Design Prices in Kenya 2026 | Webmerchants Nairobi',
  description:
    'Transparent web design pricing for Kenyan businesses. Starter websites from KSh 25,000. Growth packages from KSh 65,000. M-Pesa accepted. Pay in instalments. Based in Nairobi, Kenya.',
  keywords: [
    'website price Kenya',
    'web design cost Nairobi',
    'how much does a website cost Kenya',
    'affordable web design Kenya',
    'website packages Kenya',
  ],
  alternates: { canonical: 'https://webmerchants.co.ke/pricing' },
  openGraph: {
    title: 'Website Design Prices in Kenya 2026 | Webmerchants Nairobi',
    description:
      'Transparent web design pricing for Kenyan businesses. M-Pesa accepted. Pay in instalments.',
    url: 'https://webmerchants.co.ke/pricing',
    siteName: 'Webmerchants',
    locale: 'en_KE',
    type: 'website',
  },
}

export default function PricingPage(): React.JSX.Element {
  const deliveryTimes: Record<string, string> = {
    Starter: '2-week delivery',
    Growth: '4-week delivery',
    Enterprise: 'Timeline agreed at start',
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-wm-black py-24 lg:py-36 pt-36 lg:pt-48">
        <div className="px-6 lg:px-12">
          <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-6">Transparent Pricing</p>
          <h1 className="font-display text-[64px] font-light text-wm-off leading-tight max-w-3xl">
            Website Prices in Kenya with No Hidden Fees.
          </h1>
          <p className="font-body text-[15px] text-wm-grey max-w-xl leading-relaxed mt-8 mb-4">
            Every package is fixed price. What you see is what you pay.
            M-Pesa accepted. Payment plans available on Growth and Enterprise.
          </p>
          <p className="font-body text-[14px] text-[#25D366] uppercase tracking-[0.15em]">
            ✓ M-Pesa Daraja Accepted on All Packages
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-wm-dark py-24 lg:py-36">
        <div className="px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col relative ${
                  tier.featured
                    ? 'border-2 border-gold bg-wm-black'
                    : 'border border-wm-border bg-wm-dark'
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 -translate-y-full pb-1">
                    <span className="font-body text-xs uppercase tracking-[0.15em] bg-gold text-wm-black px-4 py-1.5">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-10 flex flex-col flex-1">
                  <h2 className="font-display text-[20px] text-white font-semibold mb-2">
                    {tier.name}
                  </h2>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-body text-[10px] uppercase tracking-[0.15em] text-[#25D366] border border-[#25D366]/30 px-2 py-1">
                      M-Pesa Accepted
                    </span>
                  </div>

                  <p className="font-display text-[40px] text-gold leading-none mb-8">
                    {tier.price}
                  </p>

                  <ul className="flex flex-col gap-3 flex-1 mb-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="text-gold mt-0.5 flex-shrink-0" aria-hidden="true">
                          ✓
                        </span>
                        <span className="font-body text-[14px] text-wm-grey leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {(tier.featured || tier.name === 'Enterprise') && (
                    <p className="font-body text-[11px] text-wm-grey italic mb-4">
                      Pay in 3 instalments — ask us how.
                    </p>
                  )}

                  <Link
                    href="/contact"
                    className="font-body text-xs tracking-widest uppercase bg-gold text-wm-black w-full py-4 hover:bg-gold-light transition-colors duration-200 text-center block mt-4"
                  >
                    {tier.cta}
                  </Link>
                </div>

                {/* Delivery strip */}
                <div className="border-t border-gold/30 px-10 py-4">
                  <p className="font-body text-[11px] text-gold uppercase tracking-[0.15em] text-center">
                    {deliveryTimes[tier.name]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-wm-black py-24 lg:py-36">
        <div className="px-6 lg:px-12">
          <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-4">Optional Add-Ons</p>
          <h2 className="font-display text-[40px] font-light text-wm-off leading-tight mb-4">
            Build Your Perfect Package.
          </h2>
          <p className="font-body text-[15px] text-wm-grey max-w-xl leading-relaxed mb-16">
            Add any of the following to any package. Priced separately and invoiced together.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {addOns.map((addon) => (
              <div
                key={addon.title}
                className="border border-wm-border p-8 hover:border-gold transition-colors duration-200"
              >
                <h3 className="font-display text-[20px] text-white mb-2">{addon.title}</h3>
                <p className="font-display text-[18px] text-gold mb-3">{addon.price}</p>
                <p className="font-body text-[13px] text-wm-grey leading-relaxed">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-wm-dark py-24 lg:py-36">
        <div className="px-6 lg:px-12">
          <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-4">Why Not Just Use Wix?</p>
          <h2 className="font-display text-[40px] font-light text-wm-off leading-tight mb-4">
            Webmerchants vs The Alternatives.
          </h2>
          <p className="font-body text-[15px] text-wm-grey max-w-2xl leading-relaxed mb-16">
            An honest comparison. We are not the cheapest option — we are the best value for Kenyan businesses that want real results.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-wm-border">
                  <th className="font-body text-[11px] text-wm-grey uppercase tracking-[0.15em] text-left py-4 pr-8">Feature</th>
                  <th className="font-body text-[11px] text-wm-grey uppercase tracking-[0.15em] text-left py-4 px-4">DIY (Wix/Squarespace)</th>
                  <th className="font-body text-[11px] text-wm-grey uppercase tracking-[0.15em] text-left py-4 px-4">Cheap Freelancer</th>
                  <th className="font-body text-[11px] text-gold uppercase tracking-[0.15em] text-left py-4 px-4 border-b-2 border-gold">Webmerchants</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Google Kenya optimisation', 'Limited', 'Maybe', '✓ Included'],
                  ['Mobile-first for Kenya', 'Generic', 'Varies', '✓ Always'],
                  ['M-Pesa integration', 'No', 'Extra', '✓ Available'],
                  ['WhatsApp support', 'No', 'No', '✓ Included'],
                  ['SEO setup', 'Basic', 'Varies', '✓ Full setup'],
                  ['Source code ownership', 'No', 'Varies', '✓ You own it'],
                  ['Post-launch support', 'None', 'Unlikely', '✓ 30 days free'],
                  ['Payment plan', 'No', 'No', '✓ Available'],
                ].map((row, i) => (
                  <tr
                    key={row[0]}
                    className={`border-b border-wm-border ${i % 2 === 0 ? 'bg-wm-dark' : 'bg-wm-black'}`}
                  >
                    <td className="font-body text-[14px] text-wm-grey py-4 pr-8">{row[0]}</td>
                    <td className="font-body text-[14px] text-wm-grey py-4 px-4">{row[1]}</td>
                    <td className="font-body text-[14px] text-wm-grey py-4 px-4">{row[2]}</td>
                    <td className="font-body text-[14px] text-gold py-4 px-4">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-wm-black py-24 lg:py-36">
        <div className="px-6 lg:px-12">
          <h2 className="font-display text-[40px] font-light text-wm-off leading-tight mb-16">
            Pricing Questions Answered.
          </h2>
          <div className="max-w-3xl flex flex-col gap-0">
            {[
              {
                q: 'Why does a website cost this much in Kenya?',
                a: 'A professional website is a business asset, not a one-time expense. The cost covers custom design, development, SEO setup, testing across devices, and 30 days of support. Compare it to a month of print advertising that disappears — your website works 24/7.',
              },
              {
                q: 'Can I pay in instalments?',
                a: 'Yes. Growth and Enterprise clients can split into 3 payments: 50% to start, 30% at design approval, 20% at launch.',
              },
              {
                q: 'Do you accept M-Pesa?',
                a: 'Yes. We accept M-Pesa Paybill, bank transfer, and card payments.',
              },
              {
                q: 'Is hosting included in the price?',
                a: 'Hosting setup is available as an add-on (KSh 5,000). Hosting fees themselves vary by provider — we recommend Vercel (from $0/mo) or SiteGround (from $2.99/mo).',
              },
              {
                q: 'What happens after the 30 days of free support?',
                a: 'You can subscribe to our monthly maintenance plan (KSh 5,000/mo) which covers updates, security monitoring, uptime alerts, and a monthly performance report.',
              },
              {
                q: 'Can you beat a KSh 10,000 quote I received from someone else?',
                a: 'A KSh 10,000 website is a template with your logo swapped in. It will not rank on Google, will not convert visitors, and will need replacing in 12 months. We build differently.',
              },
              {
                q: 'Do I own my website after it is built?',
                a: 'Fully. We hand over all source code, login credentials, and documentation. You are never dependent on us to keep your site running.',
              },
              {
                q: 'How do I get started?',
                a: 'WhatsApp us at +254 703 141 296 or fill in the project form. We respond within 2 hours.',
              },
            ].map((faq) => (
              <details key={faq.q} className="border-t border-wm-border py-6">
                <summary className="font-body text-[14px] text-white cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-gold ml-4 flex-shrink-0">+</span>
                </summary>
                <p className="font-body text-[14px] text-wm-grey leading-relaxed mt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-wm-dark py-24">
        <div className="px-6 lg:px-12 text-center">
          <h2 className="font-display text-[48px] font-light text-wm-off leading-tight mb-6">
            Ready to Get Started?
          </h2>
          <p className="font-body text-[15px] text-wm-grey max-w-lg mx-auto leading-relaxed mb-10">
            Piga simu or WhatsApp, we will tell you exactly which package fits your business.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://wa.me/254703141296"
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
              Fill in the project form →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
