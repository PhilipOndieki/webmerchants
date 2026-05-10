import { bizServices } from '@/data/content'

export default function BizRegistration(): React.JSX.Element {
  return (
    <section id="biz-reg" className="bg-wm-mid py-24 lg:py-36">
      <div className="px-6 lg:px-12">
        {/* New service badge */}
        <div className="mb-6 inline-block">
          <span className="font-body text-[10px] uppercase tracking-[0.2em] bg-gold text-wm-black px-4 py-1.5">
            New Service
          </span>
        </div>

        {/* H2 */}
        <h2 className="font-display text-[52px] font-light text-wm-off leading-tight">
          We Also Register Your Business.
        </h2>

        {/* Subtitle */}
        <p className="font-body text-[15px] text-wm-grey mt-4 max-w-xl leading-relaxed">
          From company name search to certificate of incorporation — we handle it all.
        </p>

        {/* Services grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bizServices.map((service) => (
            <div
              key={service.title}
              className="border border-wm-border p-8 flex flex-col gap-4 hover:border-gold transition-colors duration-300 group"
            >
              {/* Icon */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d={service.iconPath} />
              </svg>

              {/* Title */}
              <h3 className="font-display text-[18px] text-white leading-snug">
                {service.title}
              </h3>

              {/* Price */}
              <p className="font-display text-[22px] text-gold">
                KSh {service.price.toLocaleString()}
              </p>

              {/* CTA */}
              <a
                href="#contact"
                className="font-body text-gold text-xs uppercase tracking-widest mt-auto group-hover:opacity-70 transition-opacity"
              >
                Get started →
              </a>
            </div>
          ))}
        </div>

        {/* Bundle box */}
        <div className="mt-10 border border-gold p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <h3 className="font-display text-[24px] text-white">Bundle all 4 services</h3>
            <p className="font-body text-[12px] text-wm-grey mt-1 uppercase tracking-widest">
              Save KSh 2,000
            </p>
          </div>
          <div className="flex items-center gap-6">
            <p className="font-display text-[36px] text-gold leading-none">KSh 14,500</p>
            <a
              href="#contact"
              className="font-body text-[10px] uppercase tracking-[0.2em] bg-gold text-wm-black px-6 py-3 hover:bg-gold-light transition-colors whitespace-nowrap"
            >
              Get the bundle →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
