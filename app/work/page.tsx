import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { caseStudies } from '@/data/content'

export const metadata: Metadata = {
  title: 'Our Work, Web Design Portfolio Kenya | Webmerchants Nairobi',
  description:
    'See the websites we have built for Kenyan businesses, from AgriTech e-commerce to engineering firms and research institutions. Based in Nairobi, Kenya.',
  keywords: [
    'web design portfolio Kenya',
    'website examples Nairobi',
    'Kenyan web agency portfolio',
  ],
  alternates: { canonical: 'https://webmerchants.co.ke/work' },
  openGraph: {
    title: 'Our Work, Web Design Portfolio Kenya | Webmerchants Nairobi',
    description:
      'See the websites we have built for Kenyan businesses.',
    url: 'https://webmerchants.co.ke/work',
    siteName: 'Webmerchants',
    locale: 'en_KE',
    type: 'website',
  },
}

export default function WorkPage(): React.JSX.Element {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-end"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-wm-black/70" aria-hidden="true" />

        <div className="relative z-10 px-6 lg:px-12 pb-24 pt-36">
          <h1 className="font-display text-[64px] font-light text-wm-off leading-tight max-w-3xl">
            Websites That Work for Kenyan Businesses.
          </h1>
          <p className="font-body text-[15px] text-wm-grey max-w-xl leading-relaxed mt-8">
            Every project here is live, ranked on Google, and generating real business results
            for Kenyan clients. Karibu, see what we build.
          </p>
        </div>
      </section>
      {/* Case studies */}
      <section className="bg-wm-dark py-24 lg:py-36">
        <div className="px-6 lg:px-12 flex flex-col gap-24">
          {caseStudies.map((cs, index) => (
            <article key={cs.slug} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Image — alternates left/right */}
              <div className={`relative aspect-video overflow-hidden ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <Image
                  src={cs.imageUrl}
                  alt={cs.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <span className="font-body text-[11px] text-gold uppercase tracking-[0.2em] block mb-4">
                  {cs.category}
                </span>
                <h2 className="font-display text-[40px] font-light text-white leading-tight mb-4">
                  {cs.title}
                </h2>

                <div className="flex flex-col gap-6 mb-10">
                  {[
                    { label: 'Problem', text: cs.problem },
                    { label: 'Solution', text: cs.solution },
                    { label: 'Result', text: cs.result },
                  ].map((section) => (
                    <div key={section.label}>
                      <span className="font-body text-[10px] text-gold uppercase tracking-[0.2em] block mb-2">
                        {section.label}
                      </span>
                      <p className="font-body text-[14px] text-wm-grey leading-relaxed">
                        {section.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Metric */}
                <div className="border border-gold p-6 mb-8 inline-block">
                  <p className="font-display text-[48px] text-gold leading-none">{cs.metric}</p>
                </div>

                <div className="flex flex-wrap gap-6">
                  <a
                    href={cs.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-[12px] uppercase tracking-[0.2em] text-wm-grey hover:text-gold transition-colors duration-200"
                  >
                    Visit live site →
                  </a>
                  <Link
                    href={`/work/${cs.slug}`}
                    className="font-body text-[12px] uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors duration-200"
                  >
                    Read case study →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-wm-black py-24 lg:py-36">
        <div className="px-6 lg:px-12 text-center">
          <h2 className="font-display text-[48px] font-light text-wm-off leading-tight mb-6">
            Your Business Could Be Next.
          </h2>
          <p className="font-body text-[15px] text-wm-grey max-w-lg mx-auto leading-relaxed mb-10">
            We have capacity for 2 new clients this quarter. Tuwasiliane, let&apos;s connect.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/contact"
              className="font-body text-xs tracking-[0.2em] uppercase bg-gold text-wm-black px-10 py-4 hover:bg-gold-light transition-colors duration-200"
            >
              Start a Project →
            </Link>
            <Link
              href="/pricing"
              className="font-body text-xs tracking-[0.2em] uppercase text-wm-grey hover:text-gold transition-colors duration-200"
            >
              See our pricing →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
