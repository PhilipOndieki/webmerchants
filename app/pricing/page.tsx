'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { addOns } from '@/data/content'

interface QuoteForm {
  name: string
  email: string
  phone: string
  businessType: string
  pages: string
  features: string[]
  timeline: string
  message: string
}

const EMPTY_FORM: QuoteForm = {
  name: '',
  email: '',
  phone: '',
  businessType: '',
  pages: '',
  features: [],
  timeline: '',
  message: '',
}

const FEATURE_OPTIONS = [
  'M-Pesa / Payment integration',
  'E-commerce / Online store',
  'Blog or News section',
  'Booking or Appointment system',
  'WhatsApp chat widget',
  'Google Maps integration',
  'Admin dashboard',
  'SEO setup',
  'Multilingual (English + Swahili)',
  'Custom animations',
]

const PAGES_LABELS: Record<string, string> = {
  '1-5': '1 to 5 pages',
  '6-10': '6 to 10 pages',
  '11-20': '11 to 20 pages',
  '20+': '20+ pages',
  'unsure': 'Not sure yet',
}

const TIMELINE_LABELS: Record<string, string> = {
  'asap': 'As soon as possible',
  '2-4weeks': '2 to 4 weeks',
  '1-2months': '1 to 2 months',
  'flexible': 'Flexible',
}

function buildWhatsAppMessage(form: QuoteForm): string {
  const lines: string[] = []

  lines.push('Hi Webmerchants! I would like to request a custom quote.')
  lines.push('')
  lines.push(`*Name:* ${form.name}`)
  lines.push(`*Email:* ${form.email}`)
  if (form.phone) lines.push(`*Phone:* ${form.phone}`)
  if (form.businessType) lines.push(`*Business type:* ${form.businessType}`)
  if (form.pages) lines.push(`*Pages needed:* ${PAGES_LABELS[form.pages] ?? form.pages}`)
  if (form.features.length > 0) {
    lines.push(`*Features required:*`)
    form.features.forEach((f) => lines.push(`  - ${f}`))
  }
  if (form.timeline) lines.push(`*Preferred timeline:* ${TIMELINE_LABELS[form.timeline] ?? form.timeline}`)
  if (form.message) {
    lines.push('')
    lines.push(`*Additional notes:* ${form.message}`)
  }

  return lines.join('\n')
}

export default function PricingPage(): React.JSX.Element {
  const [form, setForm] = useState<QuoteForm>(EMPTY_FORM)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ): void => {
    const { name, value } = e.target as HTMLInputElement
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const toggleFeature = (feature: string): void => {
    setForm((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const message = buildWhatsAppMessage(form)
    const encoded = encodeURIComponent(message)
    window.open(`https://wa.me/254796422627?text=${encoded}`, '_blank')
  }

  const inputClass =
    'font-body text-sm text-white bg-wm-black border border-wm-border px-4 py-3 w-full focus:border-gold transition-colors duration-200 outline-none placeholder:text-wm-grey'

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-end"
        style={{
          backgroundImage: 'url(/pricing.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-wm-black/70" aria-hidden="true" />

        <div className="relative z-10 px-6 lg:px-12 pb-24 pt-36">
          <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-6">
            Custom Pricing
          </p>
          <h1 className="font-display text-[64px] font-light text-wm-off leading-tight max-w-3xl">
            Your Website Is Unique.<br />
            <em className="text-gold italic">Your Quote Should Be Too.</em>
          </h1>
          <p className="font-body text-[15px] text-wm-grey max-w-xl leading-relaxed mt-8">
            We do not believe in one-size-fits-all packages. Tell us what you need,
            and we will send you a detailed, fixed-price quote within 24 hours.
            No obligation. No pressure.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-wm-dark py-16 border-y border-wm-border">
        <div className="px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Submit Your Requirements', body: 'Fill in the form below. Tell us about your business, the pages you need, and any special features.' },
              { step: '02', title: 'Sent Straight to WhatsApp', body: 'Clicking the button opens WhatsApp with your requirements pre-filled. Hit send and we receive it instantly.' },
              { step: '03', title: 'You Decide', body: 'No obligation. If the quote works for you, we start. If not, no hard feelings the consultation is free.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <span className="font-display text-[48px] text-gold leading-none flex-shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-display text-[20px] text-white mb-2">{item.title}</h3>
                  <p className="font-body text-[13px] text-wm-grey leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote-form" className="bg-wm-black py-24 lg:py-36">
        <div className="px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — context */}
          <div>
            <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-4">
              What Shapes Your Quote
            </p>
            <h2 className="font-display text-[38px] font-light text-wm-off leading-tight mb-8">
              We Price on What You Actually Need.
            </h2>
            <div className="flex flex-col gap-0">
              {[
                { label: 'Number of pages', desc: 'A 5-page brochure site is a different scope from a 20-page platform with user accounts.' },
                { label: 'Features & integrations', desc: 'M-Pesa, booking systems, e-commerce, admin dashboards; each adds real development time.' },
                { label: 'Design complexity', desc: 'A clean corporate site differs from a heavily animated landing page. Both are valid but they just cost differently.' },
                { label: 'Timeline', desc: 'Rush delivery is possible but costs more. Flexible timelines get you a better rate.' },
              ].map((item) => (
                <div key={item.label} className="border-t border-wm-border py-5">
                  <p className="font-body text-[13px] text-white uppercase tracking-[0.1em] mb-1">{item.label}</p>
                  <p className="font-body text-[13px] text-wm-grey leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 border border-wm-border p-6">
              <p className="font-body text-[12px] text-wm-grey uppercase tracking-[0.15em] mb-2">Prefer to talk first?</p>
              <a
                href="https://wa.me/254796422627?text=Hi%20Webmerchants%2C%20I%27d%20like%20to%20discuss%20pricing%20for%20my%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[14px] text-[#25D366] hover:opacity-80 transition-opacity"
              >
                WhatsApp us, we respond within 2 hours
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <p className="font-body text-[13px] text-wm-grey leading-relaxed mb-6">
              Fill in your requirements below. Clicking the button opens WhatsApp with everything pre-filled, just hit send.
            </p>
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className={inputClass}
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone / WhatsApp Number"
                className={inputClass}
              />
              <input
                type="text"
                name="businessType"
                value={form.businessType}
                onChange={handleChange}
                placeholder="Type of Business (e.g. Law firm, Restaurant, NGO)"
                required
                className={inputClass}
              />
              <select
                name="pages"
                value={form.pages}
                onChange={handleChange}
                required
                className={`${inputClass} ${form.pages === '' ? 'text-wm-grey' : 'text-white'}`}
              >
                <option value="" disabled>Approximate Number of Pages</option>
                <option value="1-5">1 to 5 pages</option>
                <option value="6-10">6 to 10 pages</option>
                <option value="11-20">11 to 20 pages</option>
                <option value="20+">20+ pages</option>
                <option value="unsure">Not sure yet</option>
              </select>

              {/* Feature checkboxes */}
              <div className="border border-wm-border p-4">
                <p className="font-body text-[11px] text-wm-grey uppercase tracking-[0.15em] mb-4">
                  Features You Need (select all that apply)
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {FEATURE_OPTIONS.map((feature) => (
                    <label key={feature} className="flex items-center gap-3 cursor-pointer group">
                      <span
                        onClick={() => toggleFeature(feature)}
                        className={`w-4 h-4 border flex-shrink-0 flex items-center justify-center transition-colors duration-150 cursor-pointer ${
                          form.features.includes(feature)
                            ? 'border-gold bg-gold'
                            : 'border-wm-border group-hover:border-gold'
                        }`}
                      >
                        {form.features.includes(feature) && (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                            <path d="M1 4l3 3 5-6" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                      <span
                        onClick={() => toggleFeature(feature)}
                        className="font-body text-[13px] text-wm-grey group-hover:text-white transition-colors duration-150"
                      >
                        {feature}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <select
                name="timeline"
                value={form.timeline}
                onChange={handleChange}
                className={`${inputClass} ${form.timeline === '' ? 'text-wm-grey' : 'text-white'}`}
              >
                <option value="" disabled>Preferred Timeline</option>
                <option value="asap">As soon as possible</option>
                <option value="2-4weeks">2 to 4 weeks</option>
                <option value="1-2months">1 to 2 months</option>
                <option value="flexible">Flexible</option>
              </select>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Anything else we should know about your project?"
                rows={4}
                className={`${inputClass} resize-none`}
              />

              <button
                type="submit"
                className="font-body text-sm tracking-widest uppercase bg-[#25D366] text-white w-full py-4 hover:opacity-90 transition-opacity mt-2 flex items-center justify-center gap-3"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send My Quote Request on WhatsApp →
              </button>
              <p className="font-body text-[11px] text-wm-grey text-center italic">
                Opens WhatsApp with your details pre-filled. Free. No obligation.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-wm-dark py-24 lg:py-36">
        <div className="px-6 lg:px-12">
          <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-4">Optional Add-Ons</p>
          <h2 className="font-display text-[40px] font-light text-wm-off leading-tight mb-4">
            Common Extras to Consider.
          </h2>
          <p className="font-body text-[15px] text-wm-grey max-w-xl leading-relaxed mb-16">
            Include any of these in your requirements form and we will factor them into your quote.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {addOns.map((addon) => (
              <div
                key={addon.title}
                className="border border-wm-border p-8 hover:border-gold transition-colors duration-200"
              >
                <h3 className="font-display text-[20px] text-white mb-3">{addon.title}</h3>
                <p className="font-body text-[13px] text-wm-grey leading-relaxed">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-wm-dark py-24 lg:py-36">
        <div className="px-6 lg:px-12">
          <h2 className="font-display text-[40px] font-light text-wm-off leading-tight mb-16">
            Questions About How We Price.
          </h2>
          <div className="max-w-3xl flex flex-col gap-0">
            {[
              {
                q: 'Why do you not show fixed prices?',
                a: 'Because fixed packages almost always mean you pay for things you do not need, or miss things you do. A 5-page brochure site for a law firm is a completely different scope from a 5-page site with a booking system and M-Pesa checkout. We quote per project so you pay for exactly what your business requires.',
              },
              {
                q: 'How quickly will I get my quote?',
                a: 'Within 24 hours on business days. If you send your brief on a Friday evening, you will have your quote by Monday morning.',
              },
              {
                q: 'Is the quote really free?',
                a: 'Completely free. No strings attached. If you decide not to proceed, we part ways with no hard feelings.',
              },
              {
                q: 'Can I pay in instalments?',
                a: 'Yes. For larger projects we typically structure payments as 50% to start, 30% at design approval, and 20% at launch.',
              },
              {
                q: 'Do you accept M-Pesa?',
                a: 'Yes. We accept M-Pesa Paybill, bank transfer, and card payments.',
              },
              {
                q: 'Do I own my website after it is built?',
                a: 'Fully. We hand over all source code, login credentials, and documentation. You are never dependent on us to keep your site running.',
              },
            ].map((faq) => (
              <details key={faq.q} className="border-t border-wm-border py-6">
                <summary className="font-body text-[14px] text-white cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-gold ml-4 flex-shrink-0">+</span>
                </summary>
                <p className="font-body text-[14px] text-wm-grey leading-relaxed mt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-wm-black py-24">
        <div className="px-6 lg:px-12 text-center">
          <h2 className="font-display text-[48px] font-light text-wm-off leading-tight mb-6">
            Ready to Get Your Quote?
          </h2>
          <p className="font-body text-[15px] text-wm-grey max-w-lg mx-auto leading-relaxed mb-10">
            Fill in your requirements above or WhatsApp us directly. Either way, you will have a clear price within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://wa.me/254796422627"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-[0.2em] uppercase bg-[#25D366] text-white px-10 py-4 hover:opacity-90 transition-opacity"
            >
              Chat on WhatsApp →
            </a>
            <Link
              href="#quote-form"
              className="font-body text-xs tracking-[0.2em] uppercase text-wm-grey hover:text-gold transition-colors duration-200"
            >
              Fill in the requirements form →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}