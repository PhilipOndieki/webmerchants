import type { Metadata } from 'next'
import Link from 'next/link'
import { WA_BASE_URL } from '@/constants'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { blogArticles } from '@/data/blogContent'

export function generateStaticParams(): { slug: string }[] {
  return blogArticles.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = blogArticles.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Webmerchants Kenya`,
    description: post.excerpt,
    keywords: ['web design Kenya', 'SEO Kenya', post.category, 'Nairobi web agency'],
    alternates: { canonical: `https://webmerchants.co.ke/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://webmerchants.co.ke/blog/${post.slug}`,
      siteName: 'Webmerchants',
      locale: 'en_KE',
      type: 'article',
    },
  }
}

export default function BlogArticlePage({
  params,
}: {
  params: { slug: string }
}): React.JSX.Element {
  const post = blogArticles.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const currentIndex = blogArticles.findIndex((p) => p.slug === params.slug)
  const nextPost = blogArticles[(currentIndex + 1) % blogArticles.length]

  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-wm-black pt-28 lg:pt-36 pb-0 px-6 lg:px-12">
        <p className="font-body text-[11px] text-wm-grey uppercase tracking-[0.15em]">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">→</span>
          <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
          <span className="mx-2">→</span>
          <span className="text-wm-grey">{post.category}</span>
        </p>
      </div>

      {/* Article hero */}
      <section className="bg-wm-black py-16 lg:py-24">
        <div className="px-6 lg:px-12 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-body text-[11px] text-gold uppercase tracking-[0.2em] border border-gold px-3 py-1">
              {post.category}
            </span>
            <span className="font-body text-[11px] text-wm-grey uppercase tracking-[0.15em]">
              {post.readTime} read
            </span>
          </div>
          <h1 className="font-display text-[52px] lg:text-[64px] font-light text-wm-off leading-tight mb-8">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 border-t border-wm-border pt-6">
            <div>
              <p className="font-body text-[13px] text-white">{post.author}</p>
              <p className="font-body text-[11px] text-wm-grey uppercase tracking-[0.15em] mt-0.5">
                {new Date(post.date).toLocaleDateString('en-KE', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article body + sidebar */}
      <section className="bg-wm-dark py-16 lg:py-24">
        <div className="px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Main article content */}
          <article className="lg:col-span-8 flex flex-col gap-8">
            {post.content.map((section, index) => {
              if (section.type === 'paragraph') {
                return (
                  <p
                    key={index}
                    className="font-body text-[16px] text-wm-grey leading-[1.85]"
                  >
                    {section.text}
                  </p>
                )
              }

              if (section.type === 'heading') {
                return (
                  <h2
                    key={index}
                    className="font-display text-[34px] font-light text-wm-off leading-tight mt-4"
                  >
                    {section.text}
                  </h2>
                )
              }

              if (section.type === 'subheading') {
                return (
                  <h3
                    key={index}
                    className="font-display text-[24px] text-white leading-snug mt-2"
                  >
                    {section.text}
                  </h3>
                )
              }

              if (section.type === 'quote') {
                return (
                  <blockquote
                    key={index}
                    className="border-l-2 border-gold pl-8 py-4"
                  >
                    <p className="font-display text-[24px] lg:text-[28px] italic text-wm-off leading-snug">
                      &ldquo;{section.text}&rdquo;
                    </p>
                  </blockquote>
                )
              }

              if (section.type === 'list' && section.items) {
                return (
                  <ul key={index} className="flex flex-col gap-4">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="text-gold flex-shrink-0 mt-1.5 font-body text-[10px]">◆</span>
                        <span className="font-body text-[15px] text-wm-grey leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )
              }

              if (section.type === 'stat') {
                return (
                  <div
                    key={index}
                    className="border border-gold p-8 flex flex-col lg:flex-row items-start gap-6"
                  >
                    <p className="font-display text-[72px] text-gold leading-none flex-shrink-0">
                      {section.stat}
                    </p>
                    <p className="font-body text-[15px] text-wm-grey leading-relaxed self-center">
                      {section.statLabel}
                    </p>
                  </div>
                )
              }

              return null
            })}

            {/* Bottom CTA */}
            <div className="border-t border-wm-border pt-12 mt-4">
              <p className="font-body text-[13px] text-wm-grey uppercase tracking-[0.15em] mb-4">
                Ready to act on this?
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={WA_BASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs tracking-[0.2em] uppercase bg-[#25D366] text-white px-8 py-4 hover:opacity-90 transition-opacity"
                >
                  Chat on WhatsApp →
                </a>
                <Link
                  href="/contact"
                  className="font-body text-xs tracking-[0.2em] uppercase bg-gold text-wm-black px-8 py-4 hover:bg-gold-light transition-colors duration-200"
                >
                  Get a Free Quote →
                </Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-8">

            {/* Article info card */}
            <div className="border border-wm-border p-6">
              <p className="font-body text-[10px] text-gold uppercase tracking-[0.2em] mb-4">
                About This Article
              </p>
              <ul className="flex flex-col gap-3">
                <li className="flex justify-between items-center border-b border-wm-border pb-3">
                  <span className="font-body text-[12px] text-wm-grey uppercase tracking-[0.1em]">Author</span>
                  <span className="font-body text-[13px] text-white">{post.author}</span>
                </li>
                <li className="flex justify-between items-center border-b border-wm-border pb-3">
                  <span className="font-body text-[12px] text-wm-grey uppercase tracking-[0.1em]">Category</span>
                  <span className="font-body text-[13px] text-gold">{post.category}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-body text-[12px] text-wm-grey uppercase tracking-[0.1em]">Read time</span>
                  <span className="font-body text-[13px] text-white">{post.readTime}</span>
                </li>
              </ul>
            </div>

            {/* Other articles */}
            <div className="border border-wm-border p-6">
              <p className="font-body text-[10px] text-gold uppercase tracking-[0.2em] mb-4">
                More Articles
              </p>
              <ul className="flex flex-col gap-0">
                {blogArticles
                  .filter((p) => p.slug !== post.slug)
                  .slice(0, 4)
                  .map((related) => (
                    <li key={related.slug} className="border-t border-wm-border first:border-t-0">
                      <Link
                        href={`/blog/${related.slug}`}
                        className="block py-4 group"
                      >
                        <span className="font-body text-[10px] text-gold uppercase tracking-[0.15em] block mb-1">
                          {related.category}
                        </span>
                        <span className="font-body text-[13px] text-wm-grey group-hover:text-white transition-colors duration-200 leading-snug line-clamp-2 block">
                          {related.title}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/254796422627"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#25D366] p-6 hover:bg-[#25D366]/5 transition-colors duration-200 group"
            >
              <p className="font-body text-[10px] text-[#25D366] uppercase tracking-[0.2em] mb-2">
                Free Consultation
              </p>
              <p className="font-body text-[14px] text-white leading-snug mb-3">
                Talk to us about your website on WhatsApp. We respond within 2 hours.
              </p>
              <span className="font-body text-[12px] text-[#25D366] uppercase tracking-widest group-hover:opacity-80 transition-opacity">
                Start a conversation →
              </span>
            </a>
          </aside>
        </div>
      </section>

      {/* Next article */}
      {nextPost && (
        <section className="bg-wm-black border-t border-wm-border py-16">
          <div className="px-6 lg:px-12">
            <p className="font-body text-[10px] text-wm-grey uppercase tracking-[0.2em] mb-4">
              Next Article
            </p>
            <Link href={`/blog/${nextPost.slug}`} className="group">
              <span className="font-body text-[11px] text-gold uppercase tracking-[0.15em] block mb-2">
                {nextPost.category}
              </span>
              <h3 className="font-display text-[32px] lg:text-[42px] font-light text-white group-hover:text-gold transition-colors duration-200 leading-tight max-w-3xl">
                {nextPost.title} →
              </h3>
            </Link>
          </div>
        </section>
      )}

      <Footer />
    </>
  )
}