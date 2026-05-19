'use client'

import { WA_BASE_URL, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_RAW } from '@/constants'

export default function Contact(): React.JSX.Element {
  return (
    <section id="contact" className="bg-wm-black py-24 lg:py-36">
      <div className="px-6 lg:px-12">
        <h2 className="font-display text-[52px] font-light text-wm-off leading-tight mb-4">
          Let&apos;s Build Something.
        </h2>
        <p className="font-body text-[15px] text-wm-grey max-w-lg leading-relaxed mb-16">
          Tell us about your business and we will tell you exactly what you need.
          The fastest way to reach us is WhatsApp.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — WhatsApp primary CTA */}
          <div className="flex flex-col gap-8">
            <a
              href={WA_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-body text-xs uppercase tracking-[0.15em] px-6 py-5 hover:opacity-90 transition-opacity w-full justify-center"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
            <p className="font-body text-[11px] text-wm-grey italic -mt-4">
              Most clients reach us on WhatsApp first. We respond within 2 hours.
            </p>

            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <span className="font-body text-gold text-[10px] uppercase tracking-widest mt-1 w-20 flex-shrink-0">
                  Location
                </span>
                <span className="font-body text-[14px] text-wm-grey">Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-body text-gold text-[10px] uppercase tracking-widest mt-1 w-20 flex-shrink-0">
                  Email
                </span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-body text-[14px] text-wm-grey hover:text-gold transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-body text-gold text-[10px] uppercase tracking-widest mt-1 w-20 flex-shrink-0">
                  Phone
                </span>
                <a
                  href={`tel:${CONTACT_PHONE_RAW}`}
                  className="font-body text-[14px] text-wm-grey hover:text-gold transition-colors"
                >
                  {CONTACT_PHONE}
                </a>
              </li>
            </ul>
          </div>

          {/* Right — quote CTA */}
          <div className="border border-wm-border p-10 flex flex-col justify-between gap-10">
            <div>
              <p className="font-body text-[11px] text-gold uppercase tracking-[0.2em] mb-4">
                Ready for a quote?
              </p>
              <p className="font-display text-[32px] font-light text-wm-off leading-snug">
                Tell us what you need and we will send a detailed, fixed price within 24 hours.
              </p>
            </div>
            <a
              href="/pricing"
              className="font-body text-xs tracking-[0.2em] uppercase bg-gold text-wm-black px-10 py-4 hover:bg-gold-light transition-colors duration-200 text-center"
            >
              Get My Custom Quote →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}