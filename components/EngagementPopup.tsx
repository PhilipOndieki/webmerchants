'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const COOKIE_KEY = 'wm_cookie_consent'

export default function CookieBanner(): React.JSX.Element | null {
  const [visible, setVisible] = useState<boolean>(false)
  const [exiting, setExiting] = useState<boolean>(false)

  useEffect(() => {
    // Show only if user has not already made a choice
    if (!localStorage.getItem(COOKIE_KEY)) {
      // Small delay so it does not clash with the engagement popup
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
          animation: wmCookieIn 0.4s ease both;
        }
        .wm-cookie.exiting {
          animation: wmCookieOut 0.3s ease both;
        }
      `}</style>

      {/* Full-width bottom bar — mirrors the Xpert bar style from the screenshot */}
      <div
        className={`wm-cookie${exiting ? ' exiting' : ''} fixed bottom-0 left-0 right-0 z-[998] bg-wm-dark border-t border-wm-border`}
        role="dialog"
        aria-label="Cookie consent"
      >
        {/* Gold top accent line */}
        <div className="h-[2px] w-full bg-gold" />

        <div className="px-6 lg:px-12 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Left — message */}
          <div className="flex items-start gap-4">
            {/* Cookie icon */}
            <span className="text-gold text-lg flex-shrink-0 mt-0.5" aria-hidden="true">
              ◆
            </span>
            <div>
              <p className="font-body text-[13px] text-wm-off leading-snug">
                We use cookies to improve your experience on our website.
              </p>
              <p className="font-body text-[12px] text-wm-grey leading-snug mt-0.5">
                By continuing to browse you agree to our{' '}
                <Link
                  href="/privacy"
                  className="text-gold hover:text-gold-light transition-colors duration-200 underline underline-offset-2"
                >
                  cookie policy
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Right — actions */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <button
              type="button"
              onClick={handleAccept}
              className="font-body text-[11px] uppercase tracking-[0.18em] bg-gold text-wm-black px-6 py-2.5 hover:bg-gold-light transition-colors duration-200"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={handleDecline}
              className="font-body text-[11px] uppercase tracking-[0.18em] text-wm-grey hover:text-gold transition-colors duration-200"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </>
  )
}