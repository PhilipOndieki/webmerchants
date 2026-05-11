import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Philip Ondieki — Web Developer Nairobi | Webmerchants Kenya',
  description:
    'Philip Ondieki is a full-stack developer and founder of Webmerchants, a premium web agency based in Nairobi Kenya. 2x hackathon winner. CS50 certified. Building websites that win business for Kenyan brands.',
  keywords: [
    'web developer Nairobi',
    'Philip Ondieki',
    'Webmerchants founder',
    'Kenyan web developer',
    'full stack developer Kenya',
  ],
  alternates: { canonical: 'https://webmerchants.co.ke/about' },
  openGraph: {
    title: 'About Philip Ondieki — Web Developer Nairobi | Webmerchants Kenya',
    description:
      'Philip Ondieki is a full-stack developer and founder of Webmerchants, a premium web agency based in Nairobi Kenya.',
    url: 'https://webmerchants.co.ke/about',
    siteName: 'Webmerchants',
    locale: 'en_KE',
    type: 'website',
  },
}

export default function AboutPage(): React.JSX.Element {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-wm-black py-24 lg:py-36 pt-36 lg:pt-48">
        <div className="px-6 lg:px-12">
          <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-6">The Developer</p>
          <h1 className="font-display text-[64px] font-light text-wm-off leading-tight max-w-3xl">
            Premium Web Development,<br />Built in Nairobi.
          </h1>
          <p className="font-body text-[15px] text-wm-grey max-w-lg leading-relaxed mt-8">
            Webmerchants is built by Philip Ondieki — a full-stack developer, IT manager, and
            two-time hackathon winner based in Nairobi, Kenya. This is not an agency with dozens of
            outsourced developers. When you work with Webmerchants, you work directly with Philip.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-wm-dark py-10 border-y border-wm-border">
        <div className="px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '15+', label: 'Projects Delivered' },
              { number: '2', label: 'Hackathon Wins' },
              { number: '5+', label: 'Years Experience' },
              { number: '100%', label: 'Client Retention' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-[48px] text-gold leading-none">{stat.number}</p>
                <p className="font-body text-[11px] text-wm-grey uppercase tracking-[0.15em] mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="bg-wm-black py-24 lg:py-36">
        <div className="px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-4">The Story</p>
            <h2 className="font-display text-[42px] font-light text-wm-off leading-tight">
              Why Webmerchants Exists.
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-body text-[15px] text-wm-grey leading-relaxed">
              Kenyan businesses deserve world-class websites. For too long, the choice has been
              between expensive foreign agencies that do not understand the local market, and cheap freelancers
              who disappear after payment. Webmerchants was built to be the third option.
            </p>
            <p className="font-body text-[15px] text-wm-grey leading-relaxed">
              Philip Ondieki started building web platforms while studying Real Estate at the
              Technical University of Kenya. What began as side projects grew into production platforms —
              EveShield (1st Place, PowerHack 2025), MamaShield (Most Astounding Project, GEGIS 2026),
              and platforms serving thousands of users across Kenya.
            </p>
            <p className="font-body text-[15px] text-wm-grey leading-relaxed">
              Today, Webmerchants works with Kenyan startups, NGOs, engineering firms, and
              established businesses that are serious about their digital presence. Every site is built
              with Nairobi in mind — fast on 3G, optimised for Google Kenya, and ready for M-Pesa.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-wm-dark py-24 lg:py-36">
        <div className="px-6 lg:px-12">
          <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-4">Credentials</p>
          <h2 className="font-display text-[42px] font-light text-wm-off leading-tight mb-16">
            Built on Proven Results.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                title: '1st Place — PowerHack 2025',
                desc: 'EveShield: Community-powered emergency response platform for women\'s safety across Africa.',
              },
              {
                title: 'Most Astounding Project — GEGIS 2026',
                desc: 'MamaShield: Streamlit dashboard analysing Kenya DHS 2022 data on maternal health outcomes.',
              },
              {
                title: 'Harvard CS50 Certified',
                desc: 'Introduction to Computer Science — Harvard University\'s flagship programming course.',
              },
              {
                title: 'Power Learn Project Certified',
                desc: 'Full-stack development and software engineering certification.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="border border-wm-border p-8 hover:border-gold transition-colors duration-200"
              >
                <h3 className="font-display text-[22px] text-white mb-3">{card.title}</h3>
                <p className="font-body text-[14px] text-wm-grey leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-wm-black py-24 lg:py-36">
        <div className="px-6 lg:px-12">
          <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-4">What We Stand For</p>
          <h2 className="font-display text-[42px] font-light text-wm-off leading-tight mb-16">
            Four Principles. No Exceptions.
          </h2>
          <div className="flex flex-col gap-0">
            {[
              {
                title: 'Speed',
                desc: 'We respect your time. Starter sites in 2 weeks. No endless back-and-forth.',
              },
              {
                title: 'Transparency',
                desc: 'Fixed pricing. No hidden fees. You know the cost before we start.',
              },
              {
                title: 'Local-first',
                desc: 'Every site is optimised for Kenyan users — mobile, 3G, Google Kenya, M-Pesa.',
              },
              {
                title: 'Craftsmanship',
                desc: 'We build to last. Clean code, scalable architecture, documentation included.',
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-wm-border pt-6 pb-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
                <h3 className="font-display text-[22px] text-white">{item.title}</h3>
                <p className="font-body text-[14px] text-wm-grey leading-relaxed lg:col-span-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-wm-dark py-24">
        <div className="px-6 lg:px-12 text-center">
          <h2 className="font-display text-[48px] font-light text-wm-off leading-tight mb-6">
            Work Directly with Philip.
          </h2>
          <p className="font-body text-[15px] text-wm-grey max-w-lg mx-auto leading-relaxed mb-10">
            No account managers. No junior developers. Your project, Philip&apos;s full attention.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://wa.me/254703141296"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-[0.2em] uppercase bg-[#25D366] text-white px-10 py-4 hover:opacity-90 transition-opacity"
            >
              Start a Conversation →
            </a>
            <Link
              href="/work"
              className="font-body text-xs tracking-[0.2em] uppercase text-wm-grey hover:text-gold transition-colors duration-200"
            >
              See our work →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
