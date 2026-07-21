import Link from 'next/link'

export default function Hero(): React.JSX.Element {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/webmerchants2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
      }}
    >
      {/* Main content */}
      <div className="relative z-10 px-6 lg:px-12 pt-32 pb-40">

        {/* H1 */}
        <h1
          className="font-display font-light text-wm-off leading-[1.1] max-w-3xl animate-fade-up"
          style={{
            fontSize: 'clamp(56px, 5.5vw, 72px)',
            animationDelay: '0.25s',
          }}
        >
          Digital Solutions
          <br />
          That Elevate Brands
          <br />
          And <em className="text-gold italic">Drive Growth.</em>
        </h1>

        {/* Subtext */}
        <p
          className="font-body text-white text-[15px] leading-relaxed max-w-md mt-8 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          Strategic web design. Smart development. Measurable impact.
        </p>

        {/* CTA */}
        <div
          className="flex items-center mt-10 animate-fade-up"
          style={{ animationDelay: '0.55s' }}
        >
          <Link
            href="/work"
            className="font-body text-xs tracking-[0.2em] uppercase bg-gold text-wm-black px-10 py-4 hover:bg-gold-light transition-colors duration-200"
          >
            Let&apos;s Work Together →
          </Link>
        </div>
      </div>
    </section>
  )
}