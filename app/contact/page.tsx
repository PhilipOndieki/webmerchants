'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { ContactForm } from '@/types'

const EMPTY_FORM: ContactForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
}

export default function ContactPage(): React.JSX.Element {
  const [form, setForm] = useState<ContactForm>(EMPTY_FORM)
  const [success, setSuccess] = useState<boolean>(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ): void => {
    const { name, value } = e.target as HTMLInputElement
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setSuccess(true)
  }

  const inputClass =
    'font-body text-sm text-white bg-wm-black border border-wm-border px-4 py-3 w-full focus:border-gold transition-colors duration-200 outline-none placeholder:text-wm-grey'

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-wm-black py-24 lg:py-36 pt-36 lg:pt-48">
        <div className="px-6 lg:px-12">
          <h1 className="font-display text-[64px] font-light text-wm-off leading-tight max-w-3xl">
            Let&apos;s Build Your Website.
          </h1>
          <p className="font-body text-[15px] text-wm-grey max-w-xl leading-relaxed mt-8">
            Tell us about your business and we will tell you exactly what you need.
            Most clients reach us on WhatsApp, we respond within 2 hours.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="bg-wm-dark py-24 lg:py-36">
        <div className="px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — WhatsApp first */}
          <div>
            <a
              href="https://wa.me/254703141296?text=Hi%20Webmerchants%2C%20I%27d%20like%20to%20discuss%20a%20web%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-body text-xs uppercase tracking-[0.15em] px-6 py-5 hover:opacity-90 transition-opacity w-full"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp — respond within 2 hours →
            </a>
            <p className="font-body text-[11px] text-wm-grey italic mt-3 mb-8 text-center">
              Most clients reach us on WhatsApp first — Karibu
            </p>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-gold/30" />
              <span className="font-body text-[11px] text-wm-grey uppercase tracking-[0.2em]">OR</span>
              <div className="flex-1 h-px bg-gold/30" />
            </div>

            {/* Contact details */}
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <span className="font-body text-gold text-[10px] uppercase tracking-widest mt-1 w-20 flex-shrink-0">Email</span>
                <a
                  href="mailto:info@webmerchants.co.ke"
                  className="font-body text-[14px] text-wm-grey hover:text-gold transition-colors"
                >
                  info@webmerchants.co.ke
                </a>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-body text-gold text-[10px] uppercase tracking-widest mt-1 w-20 flex-shrink-0">Phone</span>
                <a
                  href="tel:+254703141296"
                  className="font-body text-[14px] text-wm-grey hover:text-gold transition-colors"
                >
                  +254 703 141 296 (Piga simu)
                </a>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-body text-gold text-[10px] uppercase tracking-widest mt-1 w-20 flex-shrink-0">Location</span>
                <span className="font-body text-[14px] text-wm-grey">Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-body text-gold text-[10px] uppercase tracking-widest mt-1 w-20 flex-shrink-0">Hours</span>
                <span className="font-body text-[14px] text-wm-grey">Mon–Fri 8am–6pm · Sat 9am–1pm</span>
              </li>
            </ul>
          </div>

          {/* Right — form */}
          <div>
            <p className="font-body text-[11px] text-wm-grey italic mb-6">
              Prefer to talk? WhatsApp us instead.
            </p>
            {success ? (
              <div className="flex flex-col items-center justify-center gap-8 py-12 text-center">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A84C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <h2 className="font-display text-[32px] text-white leading-snug max-w-sm">
                  Thank you, {form.name}. We&apos;ll be in touch within 24 hours.
                </h2>
              </div>
            ) : (
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
                  placeholder="Phone Number"
                  className={inputClass}
                />
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className={`${inputClass} ${form.service === '' ? 'text-wm-grey' : 'text-white'}`}
                >
                  <option value="" disabled>Select a Service</option>
                  <option value="bespoke">Bespoke Website</option>
                  <option value="modernisation">Website Modernisation</option>
                  <option value="seo">SEO</option>
                  <option value="other">Other</option>
                </select>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className={`${inputClass} ${form.budget === '' ? 'text-wm-grey' : 'text-white'}`}
                >
                  <option value="" disabled>Budget Range</option>
                  <option value="starter">KSh 25,000 – 40,000</option>
                  <option value="growth">KSh 40,000 – 80,000</option>
                  <option value="enterprise">KSh 80,000+</option>
                  <option value="unsure">Not sure yet</option>
                </select>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project"
                  rows={5}
                  required
                  className={`${inputClass} resize-none`}
                />
                <button
                  type="submit"
                  className="font-body text-sm tracking-widest uppercase bg-gold text-wm-black w-full py-4 hover:bg-gold-light transition-colors duration-200 mt-2"
                >
                  Send Enquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Response promise strip */}
      <section className="bg-wm-black border-y border-wm-border py-10">
        <div className="px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {[
              'WhatsApp: 2 hours',
              'Email: 24 hours',
              'Quote: Free, always',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-body text-[12px] text-wm-grey uppercase tracking-[0.15em]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
