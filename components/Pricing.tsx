import Link from 'next/link'

export default function Pricing(): React.JSX.Element {
  return (
    <section id="pricing" className="bg-wm-black py-24 lg:py-36">
      <div className="px-6 lg:px-12">
        {/* Section label */}
        <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-6">
          Pricing
        </p>

        {/* H2 */}
        <h2 className="font-display text-[52px] font-light text-wm-off leading-tight">
          No Packages. No Guesswork.<br />
          <em className="text-gold italic">Just a Price Built for You.</em>
        </h2>

        <p className="font-body text-[15px] text-wm-grey max-w-xl leading-relaxed mt-8 mb-16">
          Every business is different. We do not believe in forcing your project into a
          pre-set package. Tell us what you need and we will send you a detailed,
          fixed-price quote within 24 hours.
        </p>

        {/* Three-step visual */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-wm-border mb-16">
          {[
            { step: '01', title: 'Submit Your Requirements', body: 'Tell us about your business, the pages you need, and any features like M-Pesa or booking systems.' },
            { step: '02', title: 'We Send a Fixed Quote', body: 'Our team reviews your brief and sends a clear, itemised price within 24 hours.' },
            { step: '03', title: 'You Decide', body: 'No pressure. If the quote works for you, we start. The consultation is always free.' },
          ].map((item) => (
            <div key={item.step} className="bg-wm-black border border-wm-border p-10 flex flex-col gap-4">
              <span className="font-display text-[56px] text-gold leading-none">{item.step}</span>
              <h3 className="font-display text-[20px] text-white leading-snug">{item.title}</h3>
              <p className="font-body text-[13px] text-wm-grey leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="/pricing"
            className="font-body text-xs tracking-[0.2em] uppercase bg-gold text-wm-black px-10 py-4 hover:bg-gold-light transition-colors duration-200"
          >
            Get My Custom Quote →
          </Link>
          <a
            href="https://wa.me/254796422627?text=Hi%20Webmerchants%2C%20I%27d%20like%20to%20discuss%20pricing%20for%20my%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-[0.2em] uppercase text-[#25D366] hover:opacity-80 transition-opacity"
          >
            Or WhatsApp us directly →
          </a>
        </div>
      </div>
    </section>
  )
}