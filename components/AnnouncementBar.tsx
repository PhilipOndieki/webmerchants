'use client'

import { useState } from 'react'

export default function AnnouncementBar(): React.JSX.Element | null {
  const [dismissed, setDismissed] = useState<boolean>(false)

  if (dismissed) return null

  return (
    <div className="w-full bg-gold text-wm-black py-2.5 px-6 flex items-center justify-center relative z-50">
      <p className="font-body text-[11px] uppercase tracking-[0.2em] text-center">
        Now accepting new clients for Q3 2026 —{' '}
        <a
          href="https://wa.me/254796422627"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:opacity-70 transition-opacity"
        >
          WhatsApp us today
        </a>
      </p>
      <button
        type="button"
        onClick={(): void => setDismissed(true)}
        aria-label="Dismiss announcement"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-wm-black hover:opacity-60 transition-opacity text-lg leading-none"
      >
        ×
      </button>
    </div>
  )
}
