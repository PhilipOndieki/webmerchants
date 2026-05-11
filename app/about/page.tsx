import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Webmerchants — Web Design Agency Nairobi | Built in Kenya',
  description:
    'Webmerchants is a team of Kenyan web developers and digital strategists based in Nairobi. 2x hackathon winners. CS50 certified. Building websites that win business for Kenyan brands across all 47 counties.',
  keywords: [
    'web developer Nairobi',
    'Webmerchants team',
    'Kenyan web agency',
    'full stack developers Kenya',
    'web design studio Nairobi',
  ],
  alternates: { canonical: 'https://webmerchants.co.ke/about' },
  openGraph: {
    title: 'About Webmerchants — Web Design Agency Nairobi | Built in Kenya',
    description:
      'Webmerchants is a team of Kenyan web developers and digital strategists based in Nairobi.',
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
          <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-6">
            Who We Are
          </p>
          <h1 className="font-display text-[64px] font-light text-wm-off leading-tight max-w-3xl">
            A Team of Kenyan Developers.<br />
            <em className="text-gold italic">Built to Win Here.</em>
          </h1>
          <p className="font-body text-[15px] text-wm-grey max-w-lg leading-relaxed mt-8">
            We are not a faceless global agency that treats Kenya as a footnote.
            We are a tight-knit group of developers, designers, and digital strategists
            who grew up here, built careers here, and understand exactly what it takes
            to win business in this market.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-wm-dark py-10 border-y border-wm-border">
        <div className="px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '15+', label: 'Projects Delivered' },
              { number: '5+', label: 'Years in Market' },
              { number: '47', label: 'Counties We Serve' },
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

      {/* Origin story */}
      <section className="bg-wm-black py-24 lg:py-36">
        <div className="px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-4">
              The Story
            </p>
            <h2 className="font-display text-[42px] font-light text-wm-off leading-tight">
              We Got Tired of Watching Good Kenyan Businesses Lose Online.
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-body text-[15px] text-wm-grey leading-relaxed">
              It started with a question none of us could stop asking: why do so many brilliant
              Kenyan businesses have terrible websites? A hardware store in Eldoret doing
              KSh 3 million a month, invisible on Google. A Nairobi law firm charging premium rates,
              with a site that last looked modern in 2013. A Mombasa tour operator whose
              competitorsm half as experienced, were getting all the international bookings.
            </p>
            <p className="font-body text-[15px] text-wm-grey leading-relaxed">
              The answer was always the same: the foreign agencies were too expensive and too
              disconnected from local realities. The local freelancers were too unreliable who are great
              at taking a deposit, poor at delivering. There was no serious, accountable, technically
              excellent web team that understood Kenya the way a Kenyan does.
            </p>
            <p className="font-body text-[15px] text-wm-grey leading-relaxed">
              So we built one. Webmerchants was founded on a single belief: that a Kenyan business
              with a world-class website wins. Not sometimes. Every time. Our job is to give every
              client that unfair advantage: responsive, mobile-first, Google Kenya optimised,
              and built to last.
            </p>
          </div>
        </div>
      </section>

      {/* What makes us different — editorial list */}
      <section className="bg-wm-dark py-24 lg:py-36">
        <div className="px-6 lg:px-12">
          <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-4">
            The Difference
          </p>
          <h2 className="font-display text-[42px] font-light text-wm-off leading-tight mb-16">
            We Are Not Like Other Agencies.<br />Here Is Why That Matters.
          </h2>

          <div className="flex flex-col gap-0">
            {[
              {
                number: '01',
                title: 'We Know the Kenyan Customer',
                body: 'We know the 3G speeds in Kisumu. We know that most of your clients will land on your site via a mid-range Android on Safaricom. We build for that reality, not for a fast fibre connection in London.',
              },
              {
                number: '02',
                title: 'We Stay After the Launch',
                body: 'Most freelancers vanish the moment the final payment clears. We include 30 days of post-launch support on every project and offer ongoing maintenance for clients who want a long-term partner.',
              },
              {
                number: '03',
                title: 'We Speak Both Languages',
                body: 'We understand the Kenyan business owner as well as we understand the code. We ask the right questions before we write a single line about your customers, your competitors, your margins. A website built without that context is just decoration.',
              },
              {
                number: '04',
                title: 'We Have Built at Scale for Kenya',
                body: 'From e-commerce platforms processing hundreds of M-Pesa orders weekly, to civic platforms serving thousands of Kenyans across 47 counties we have operated at real production scale, under real Kenyan network conditions. We do not practice on your business.',
              },
            ].map((item) => (
              <div
                key={item.number}
                className="border-t border-wm-border pt-6 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-4 group"
              >
                <span className="font-body text-[11px] text-gold uppercase tracking-[0.2em] lg:col-span-1 mt-1">
                  {item.number}
                </span>
                <div className="lg:col-span-11 grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <h3 className="font-display text-[24px] text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-body text-[14px] text-wm-grey leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-wm-dark py-24 lg:py-36">
        <div className="px-6 lg:px-12">
          <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-4">
            What We Stand For
          </p>
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
                desc: 'Fixed pricing. No hidden fees. You know the full cost before we write a single line of code.',
              },
              {
                title: 'Local-first',
                desc: 'Every site is optimised for Kenyan users — mobile, 3G, Google Kenya, M-Pesa. Always.',
              },
              {
                title: 'Craftsmanship',
                desc: 'We build to last. Clean code, scalable architecture, documentation handed over at launch.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border-t border-wm-border pt-6 pb-6 grid grid-cols-1 lg:grid-cols-3 gap-4"
              >
                <h3 className="font-display text-[22px] text-white">{item.title}</h3>
                <p className="font-body text-[14px] text-wm-grey leading-relaxed lg:col-span-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto pull-quote */}
      <section className="bg-wm-black py-24 lg:py-36 border-y border-wm-border">
        <div className="px-6 lg:px-12 max-w-4xl">
          <p className="font-display text-[36px] lg:text-[52px] font-light text-wm-off leading-tight italic">
            &ldquo;Kenya has no shortage of brilliant businesses. It has a shortage of brilliant websites.
            We are here to fix that one client at a time, one county at a time.&rdquo;
          </p>
          <p className="font-body text-[12px] text-gold uppercase tracking-[0.25em] mt-8">
            The Webmerchants Team · Nairobi, Kenya
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-wm-dark py-24">
        <div className="px-6 lg:px-12 text-center">
          <h2 className="font-display text-[48px] font-light text-wm-off leading-tight mb-6">
            Work With a Team That Gets It.
          </h2>
          <p className="font-body text-[15px] text-wm-grey max-w-lg mx-auto leading-relaxed mb-10">
            No account managers passing messages. No offshore developers guessing what Kenyan customers want.
            Just a focused team that builds, ships, and delivers.
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