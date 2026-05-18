import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { blogArticles } from '@/data/blogContent'

export const metadata: Metadata = {
  title: 'Web Design & SEO Insights for Kenyan Businesses | Webmerchants Blog',
  description:
    'Expert articles on web design, SEO, and digital marketing for Kenyan businesses and SMEs. Written by Philip Ondieki, Nairobi based full stack developer.',
  keywords: [
    'web design blog Kenya',
    'SEO tips Kenya',
    'digital marketing Kenya',
    'website advice Nairobi',
  ],
  alternates: { canonical: 'https://webmerchants.co.ke/blog' },
  openGraph: {
    title: 'Web Design & SEO Insights for Kenyan Businesses | Webmerchants Blog',
    description:
      'Expert articles on web design, SEO, and digital marketing for Kenyan businesses and SMEs.',
    url: 'https://webmerchants.co.ke/blog',
    siteName: 'Webmerchants',
    locale: 'en_KE',
    type: 'website',
  },
}

export default function BlogPage(): React.JSX.Element {
  const [featured, ...rest] = blogArticles

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-wm-black py-24 lg:py-36 pt-36 lg:pt-48">
        <div className="px-6 lg:px-12">
          <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-6">
            Webmerchants Insights
          </p>
          <h1 className="font-display text-[64px] font-light text-wm-off leading-tight max-w-3xl">
            Digital Insights for Kenyan Businesses.
          </h1>
          <p className="font-body text-[15px] text-wm-grey max-w-xl leading-relaxed mt-8">
            No fluff. Practical web design and SEO advice written specifically for the Kenyan market.
          </p>
        </div>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="bg-wm-dark border-y border-wm-border">
          <Link
            href={`/blog/${featured.slug}`}
            className="block px-6 lg:px-12 py-16 lg:py-24 group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center hover:bg-wm-black/40 transition-colors duration-300"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-body text-[11px] text-gold uppercase tracking-[0.2em] border border-gold px-3 py-1">
                  Featured
                </span>
                <span className="font-body text-[11px] text-wm-grey uppercase tracking-[0.15em]">
                  {featured.category}
                </span>
              </div>
              <h2 className="font-display text-[42px] font-light text-white leading-tight mb-6">
                {featured.title}
              </h2>
              <p className="font-body text-[15px] text-wm-grey leading-relaxed mb-8">
                {featured.excerpt}
              </p>
              <span className="font-body text-[12px] text-gold uppercase tracking-widest group-hover:text-gold-light transition-colors duration-200">
                Read article →
              </span>
            </div>
            <div className="border border-wm-border p-8 lg:p-12 flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <span className="font-body text-[11px] text-wm-grey uppercase tracking-[0.15em]">
                  {new Date(featured.date).toLocaleDateString('en-KE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span className="font-body text-[11px] text-gold uppercase tracking-[0.15em]">
                  {featured.readTime} read
                </span>
              </div>
              <p className="font-display text-[32px] italic text-wm-off leading-snug">
                &ldquo;{featured.content.find((s) => s.type === 'quote')?.text ?? featured.excerpt}&rdquo;
              </p>
              <p className="font-body text-[12px] text-gold uppercase tracking-[0.2em]">
                {featured.author} · Nairobi, Kenya
              </p>
            </div>
          </Link>
        </section>
      )}

      {/* Articles grid */}
      <section className="bg-wm-dark py-24 lg:py-36">
        <div className="px-6 lg:px-12">
          <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-12">
            All Articles
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="border border-wm-border p-8 hover:border-gold transition-colors duration-200 flex flex-col group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-body text-[11px] text-wm-grey uppercase tracking-[0.15em]">
                    {new Date(post.date).toLocaleDateString('en-KE', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="font-body text-[11px] text-gold uppercase tracking-[0.15em]">
                    {post.readTime}
                  </span>
                </div>
                <span className="font-body text-[10px] text-gold uppercase tracking-[0.2em] mb-3">
                  {post.category}
                </span>
                <h2 className="font-display text-[22px] text-white leading-snug mb-4 flex-1">
                  {post.title}
                </h2>
                <p className="font-body text-[13px] text-wm-grey leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="font-body text-[12px] text-gold uppercase tracking-widest group-hover:text-gold-light transition-colors duration-200">
                  Read article →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-wm-black py-24">
        <div className="px-6 lg:px-12 text-center">
          <p className="font-body text-[15px] text-wm-grey mb-6">
            Want us to write about a specific topic?
          </p>
          <a
            href="https://wa.me/254703141296?text=Hi%20Webmerchants%2C%20I%27d%20like%20to%20suggest%20a%20blog%20topic."
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-[0.2em] uppercase text-gold hover:text-gold-light transition-colors duration-200"
          >
            Suggest a topic →
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}