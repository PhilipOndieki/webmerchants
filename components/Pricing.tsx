import Link from 'next/link'
import { pricingTiers } from '@/data/content'

export default function Pricing(): React.JSX.Element {
  return (
    <section id="pricing" className="bg-wm-black py-24 lg:py-36">
      <div className="px-6 lg:px-12">
        {/* Section label */}
        <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-6">
          Transparent Pricing
        </p>

        {/* H2 */}
        <h2 className="font-display text-[52px] font-light text-wm-off leading-tight">
          No Surprises. Just Results.
        </h2>

        {/* Pricing cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-10 flex flex-col relative ${
                tier.featured
                  ? 'border-2 border-gold bg-wm-dark'
                  : 'border border-wm-border bg-wm-black'
              }`}
            >
              {/* Most Popular badge */}
              {tier.featured && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 -translate-y-full pb-1">
                  <span className="font-body text-xs uppercase tracking-[0.15em] bg-gold text-wm-black px-4 py-1.5">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier name */}
              <h3 className="font-display text-[20px] text-white font-semibold mb-2">
                {tier.name}
              </h3>

              {/* M-Pesa badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="font-body text-[10px] uppercase tracking-[0.15em] text-[#25D366] border border-[#25D366]/30 px-2 py-1">
                  M-Pesa Accepted
                </span>
              </div>

              {/* Price */}
              <p className="font-display text-[40px] text-gold leading-none mb-8">
                {tier.price}
              </p>

              {/* Features list */}
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

              {/* Payment plan note — Growth and Enterprise only */}
              {(tier.featured || tier.name === 'Enterprise') && (
                <p className="font-body text-[11px] text-wm-grey italic mb-4">
                  Pay in 3 instalments — ask us how.
                </p>
              )}

              {/* CTA button */}
              <Link
                href="/contact"
                className="font-body text-xs tracking-widest uppercase bg-gold text-wm-black w-full py-4 hover:bg-gold-light transition-colors duration-200 text-center block mt-4"
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
