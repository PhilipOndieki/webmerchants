import Link from 'next/link'
import { services } from '@/data/content'

export default function Services(): React.JSX.Element {
  return (
    <section id="services" className="bg-wm-black py-24 lg:py-36">
      <div className="px-6 lg:px-12">
        {/* Section label */}
        <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-6">
          What We Do
        </p>

        {/* H2 */}
        <h2 className="font-display text-[52px] font-light text-wm-off leading-tight">
          Three Services. One Goal.
        </h2>

        {/* Services grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-px bg-wm-border">
          {services.map((service) => (
            <article
              key={service.numeral}
              className="bg-wm-black p-10 flex flex-col gap-6 group border border-wm-border hover:border-gold transition-colors duration-300"
            >
              {/* Roman numeral */}
              <span className="font-display text-[64px] font-light text-gold leading-none select-none">
                {service.numeral}
              </span>

              {/* Title */}
              <h3 className="font-display text-[28px] font-semibold text-white leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-body text-[14px] text-wm-grey leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Hover CTA */}
              <Link
                href={`/services#${service.numeral.toLowerCase()}`}
                className="font-body text-gold text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-auto"
              >
                Learn more →
              </Link>
            </article>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-10 flex justify-end">
          <Link
            href="/services"
            className="font-body text-[12px] uppercase tracking-[0.2em] text-wm-grey hover:text-gold transition-colors duration-200"
          >
            View all services →
          </Link>
        </div>
      </div>
    </section>
  )
}
