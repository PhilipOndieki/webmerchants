import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { caseStudies } from '@/data/content'

export function generateStaticParams(): { slug: string }[] {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const cs = caseStudies.find((c) => c.slug === params.slug)
  if (!cs) return {}
  return {
    title: `${cs.title} — Web Design Case Study Kenya | Webmerchants`,
    description: `How Webmerchants built a high-performance website for ${cs.title} in Kenya. ${cs.result}`,
    keywords: [`${cs.title}`, 'web design Kenya', 'case study', 'Nairobi web agency'],
    alternates: { canonical: `https://webmerchants.co.ke/work/${cs.slug}` },
    openGraph: {
      title: `${cs.title} — Web Design Case Study | Webmerchants`,
      description: cs.result,
      url: `https://webmerchants.co.ke/work/${cs.slug}`,
      type: 'article',
    },
  }
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string }
}): React.JSX.Element {
  const cs = caseStudies.find((c) => c.slug === params.slug)
  if (!cs) notFound()

  const currentIndex = caseStudies.findIndex((c) => c.slug === params.slug)
  const nextIndex = (currentIndex + 1) % caseStudies.length
  const nextProject = caseStudies[nextIndex]

  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-wm-black pt-28 lg:pt-36 pb-0 px-6 lg:px-12">
        <p className="font-body text-[11px] text-wm-grey uppercase tracking-[0.15em]">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">→</span>
          <Link href="/work" className="hover:text-gold transition-colors">Our Work</Link>
          <span className="mx-2">→</span>
          <span>{cs.title}</span>
        </p>
      </div>

      {/* Hero image */}
      <section className="bg-wm-black py-12">
        <div className="px-6 lg:px-12">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={cs.imageUrl}
              alt={cs.title}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Hero text */}
      <section className="bg-wm-black pb-16">
        <div className="px-6 lg:px-12">
          <span className="font-body text-[11px] text-gold uppercase tracking-[0.2em] block mb-4">
            {cs.category}
          </span>
          <h1 className="font-display text-[56px] font-light text-wm-off leading-tight max-w-3xl">
            {cs.title}
          </h1>
        </div>
      </section>

      {/* Content grid */}
      <section className="bg-wm-dark py-24 lg:py-36">
        <div className="px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main content — 2/3 width */}
          <div className="lg:col-span-2 flex flex-col gap-12">
            {[
              { label: 'The Challenge', text: cs.problem },
              { label: 'Our Approach', text: cs.solution },
              { label: 'The Result', text: cs.result },
            ].map((section) => (
              <div key={section.label}>
                <span className="font-body text-[11px] text-gold uppercase tracking-[0.2em] block mb-4">
                  {section.label}
                </span>
                <p className="font-body text-[15px] text-wm-grey leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}

            {/* Metric card */}
            <div className="border border-gold p-8 mt-4">
              <p className="font-display text-[80px] text-gold leading-none">{cs.metric}</p>
              <p className="font-body text-[12px] text-wm-grey uppercase tracking-[0.2em] mt-2">
                Key result
              </p>
            </div>
          </div>

          {/* Sidebar — 1/3 width */}
          <aside className="lg:sticky lg:top-24 flex flex-col gap-8 h-fit">
            <div>
              <p className="font-body text-[10px] text-gold uppercase tracking-[0.2em] mb-4">Stack</p>
              <div className="flex flex-wrap gap-2">
                {cs.stack.split(' · ').map((tech) => (
                  <span
                    key={tech}
                    className="font-body text-[12px] text-wm-grey border border-wm-border px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-body text-[10px] text-gold uppercase tracking-[0.2em] mb-2">Category</p>
              <p className="font-body text-[14px] text-gold">{cs.category}</p>
            </div>

            <a
              href={cs.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[12px] uppercase tracking-[0.2em] text-wm-grey hover:text-gold transition-colors duration-200"
            >
              Visit {cs.title} →
            </a>
          </aside>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-wm-black py-24">
        <div className="px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h2 className="font-display text-[42px] font-light text-wm-off leading-tight mb-6">
                Ready to achieve similar results?
              </h2>
              <Link
                href="/contact"
                className="font-body text-xs tracking-[0.2em] uppercase bg-gold text-wm-black px-10 py-4 hover:bg-gold-light transition-colors duration-200 inline-block"
              >
                Start a Project →
              </Link>
            </div>

            {/* Next project */}
            {nextProject && (
              <div className="border-t border-wm-border pt-8 lg:border-t-0 lg:pt-0 lg:border-l lg:border-wm-border lg:pl-12">
                <p className="font-body text-[10px] text-wm-grey uppercase tracking-[0.2em] mb-4">
                  Next project
                </p>
                <Link
                  href={`/work/${nextProject.slug}`}
                  className="group"
                >
                  <span className="font-body text-[11px] text-gold uppercase tracking-[0.15em] block mb-2">
                    {nextProject.category}
                  </span>
                  <h3 className="font-display text-[28px] text-white group-hover:text-gold transition-colors duration-200 leading-tight">
                    {nextProject.title} →
                  </h3>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
