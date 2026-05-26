'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

const GA_ID = 'AW-18178763626'

/**
 * Fires a gtag page_view event on every client-side route change.
 * Rendered only in production (guarded in layout.tsx).
 * Must be a Client Component because it uses usePathname.
 */
export default function GoogleAdsPageTracker(): null {
  const pathname = usePathname()
  const isFirstRender = useRef(true)

  useEffect(() => {
    // Skip the very first render — gtag('config', ...) in layout.tsx
    // already fires the initial page_view on hard load.
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return

    window.gtag('event', 'page_view', {
      send_to: GA_ID,
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [pathname])

  return null
}