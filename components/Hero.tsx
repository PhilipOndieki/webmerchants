import Link from 'next/link'

export default function Hero(): React.JSX.Element {
  const stats = [
    { number: '15+', label: 'Projects Delivered' },
    { number: '2 Weeks', label: 'Starter Delivery' },
    { number: '100%', label: 'Client Retention' },
  ]

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-wm-black overflow-hidden">
      {/* Grid texture overlay */}
      <div className="absolute inset-0 hero-grid pointer-events-none" aria-hidden="true" />

      {/* Main content */}
      <div className="relative z-10 px-6 lg:px-12 pt-24 pb-40">

        {/* H1 */}
        <h1
          className="font-display font-light text-wm-off leading-[1.05] max-w-4xl animate-fade-up"
          style={{
            fontSize: 'clamp(80px, 8vw, 96px)',
            animationDelay: '0.25s',
          }}
        >
          Your Competitors Have a Website.
          <br />
          <em className="text-gold italic">Yours Should Win.</em>
        </h1>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center gap-5 mt-12 animate-fade-up"
          style={{ animationDelay: '0.55s' }}
        >
          <Link
            href="/work"
            className="font-body text-xs tracking-[0.2em] uppercase bg-gold text-wm-black px-10 py-4 hover:bg-gold-light transition-colors duration-200"
          >
            View Our Work
          </Link>
          <Link
            href="/pricing"
            className="font-body text-xs tracking-[0.2em] uppercase text-white hover:text-gold transition-colors duration-200"
          >
            Get a Free Quote →
          </Link>
        </div>
      </div>

      {/* Stats — bottom right */}
      <div
        className="absolute bottom-20 right-12 hidden lg:flex flex-col gap-8 animate-fade-in"
        style={{ animationDelay: '0.9s' }}
      >
        {stats.map((stat) => (
          <div key={stat.label} className="text-right">
            <p className="font-display text-[42px] text-white leading-none">{stat.number}</p>
            <p className="font-body text-[10px] text-wm-grey uppercase tracking-widest mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}