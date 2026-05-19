import Link from 'next/link'
import { navLinks } from '@/data/content'

export default function Footer(): React.JSX.Element {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Our Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-wm-black border-t border-wm-border py-16">
      <div className="px-6 lg:px-12">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Col 1 — Brand */}
          <div>
            <Link href="/" className="flex items-center gap-1.5">
              <span className="font-display text-[22px] text-wm-off">W</span>
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="3" cy="3" r="3" fill="#C9A84C" />
              </svg>
              <span className="font-display text-[22px] text-wm-off">Webmerchants</span>
            </Link>
            <p className="font-display text-[14px] italic text-wm-grey mt-4 leading-relaxed max-w-[200px]">
              We Make You a Market Champion
            </p>
            <p className="font-body text-[12px] text-wm-grey mt-3 uppercase tracking-widest">
              Nairobi, Kenya
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <p className="font-body text-[11px] text-gold uppercase tracking-[0.2em] mb-4">
              Quick Links
            </p>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-[13px] text-wm-grey hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Get in Touch */}
          <div>
            <p className="font-body text-[11px] text-gold uppercase tracking-[0.2em] mb-4">
              Get in Touch
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:info@webmerchants.co.ke"
                  className="font-body text-[13px] text-wm-grey hover:text-gold transition-colors duration-200"
                >
                  info@webmerchants.co.ke
                </a>
              </li>
              <li>
                <a
                  href="tel:+254796422627"
                  className="font-body text-[13px] text-wm-grey hover:text-gold transition-colors duration-200"
                >
                  +254 796 422 627
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/254796422627"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[13px] text-[#25D366] hover:opacity-70 transition-opacity"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-wm-border mt-12 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="font-body text-[12px] text-wm-grey">
            © 2025 Webmerchants.
          </p>
        </div>
      </div>
    </footer>
  )
}
