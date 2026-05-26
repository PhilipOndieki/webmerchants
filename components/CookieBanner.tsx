'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const COOKIE_KEY = 'wm_cookie_consent'

export default function CookieBanner(): React.JSX.Element | null {
  const [visible, setVisible] = useState<boolean>(false)
  const [exiting, setExiting] = useState<boolean>(false)

  useEffect(() => {
    if (!localStorage.getItem(COOKIE_KEY)) {
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = (): void => {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    close()
  }

  const handleDecline = (): void => {
    localStorage.setItem(COOKIE_KEY, 'declined')
    close()
  }

  const close = (): void => {
    setExiting(true)
    setTimeout(() => setVisible(false), 300)
  }

  if (!visible) return null

  return (
    <>
      <style>{`
        @keyframes wmCookieIn {
          from { opacity: 0; transform: translateY(100%); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes wmCookieOut {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(100%); }
        }
        .wm-cookie {
          animation: wmCookieIn 0.45s ease both;
        }
        .wm-cookie.exiting {
          animation: wmCookieOut 0.3s ease both;
        }
      `}</style>

      {/* Quarter-screen bottom panel */}
      <div
        className={`wm-cookie${exiting ? ' exiting' : ''} fixed bottom-0 left-0 right-0 z-[998] bg-wm-dark border-t border-wm-border`}
        style={{ minHeight: '25vh' }}
        role="dialog"
        aria-label="Cookie consent"
      >
        {/* Gold top accent bar */}
        <div className="h-[3px] w-full bg-gold" />

        <div className="px-6 lg:px-16 py-10 h-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

          {/* Left — icon + copy */}
          <div className="flex items-start gap-6 max-w-2xl">
            {/* Large decorative diamond */}
            <span
              className="text-gold flex-shrink-0 leading-none"
              style={{ fontSize: '2.5rem', lineHeight: 1 }}
              aria-hidden="true"
            >
              ◆
            </span>

            <div className="flex flex-col gap-3">
              <p className="font-body text-[10px] text-gold uppercase tracking-[0.28em]">
                Cookie Notice
              </p>
              <p className="font-display text-[28px] lg:text-[34px] font-light text-wm-off leading-snug">
                We use cookies to improve your experience on our website.
              </p>
              <p className="font-body text-[14px] text-wm-grey leading-relaxed">
                By continuing to browse you accept our use of cookies in line with our{' '}
                <Link
                  href="/privacy"
                  className="text-gold hover:text-gold-light transition-colors duration-200 underline underline-offset-2"
                >
                  cookie policy
                </Link>
                . You can change your preferences at any time.
              </p>
            </div>
          </div>

          {/* Right — actions stacked */}
          <div className="flex flex-col gap-4 flex-shrink-0 w-full lg:w-auto">
            <button
              type="button"
              onClick={handleAccept}
              className="font-body text-[12px] uppercase tracking-[0.2em] bg-gold text-wm-black px-12 py-4 hover:bg-gold-light transition-colors duration-200 text-center w-full lg:w-auto"
            >
              Accept All Cookies
            </button>
            <button
              type="button"
              onClick={handleDecline}
              className="font-body text-[12px] uppercase tracking-[0.2em] text-wm-grey border border-wm-border px-12 py-4 hover:border-gold hover:text-gold transition-colors duration-200 text-center w-full lg:w-auto"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </>
  )
}