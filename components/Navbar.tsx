'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/data/content'

export default function Navbar(): React.JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return (): void => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = (): void => setMenuOpen(false)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 lg:px-12 h-[72px] transition-all duration-300 ${
          scrolled
            ? 'bg-wm-black border-b border-wm-border'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 group">
          <span className="font-display text-[22px] text-wm-off tracking-tight">W</span>
          <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            className="flex-shrink-0 mt-0.5"
            aria-hidden="true"
          >
            <circle cx="3" cy="3" r="3" fill="#C9A84C" />
          </svg>
          <span className="font-display text-[22px] text-wm-off tracking-tight group-hover:text-gold transition-colors">
            Webmerchants
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-body text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 ${
                  pathname === link.href ? 'text-gold' : 'text-wm-grey hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="font-body text-[11px] uppercase tracking-[0.18em] bg-gold text-wm-black px-6 py-3 hover:bg-gold-light transition-colors duration-200"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={(): void => setMenuOpen(true)}
          aria-label="Open menu"
          className="lg:hidden flex flex-col gap-[5px] p-2"
        >
          <span className="block w-6 h-px bg-wm-off" />
          <span className="block w-6 h-px bg-wm-off" />
          <span className="block w-4 h-px bg-gold" />
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-wm-black z-50 flex flex-col items-center justify-center lg:hidden">
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="absolute top-6 right-6 text-wm-grey hover:text-gold transition-colors text-3xl leading-none"
          >
            ×
          </button>
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={`font-display text-5xl transition-colors duration-200 tracking-wide ${
                    pathname === link.href ? 'text-gold' : 'text-wm-off hover:text-gold'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-12 font-body text-[11px] uppercase tracking-[0.2em] bg-gold text-wm-black px-8 py-4 hover:bg-gold-light transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </>
  )
}
