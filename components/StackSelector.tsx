'use client'

import { useState } from 'react'
import { stackOptions } from '@/data/content'

export default function StackSelector(): React.JSX.Element {
  const [selected, setSelected] = useState<string | null>(null)

  const selectedStack = stackOptions.find((s) => s.id === selected) ?? null

  const handleSelect = (id: string): void => {
    setSelected((prev) => (prev === id ? null : id))
  }

  return (
    <section id="stack" className="bg-wm-dark py-24 lg:py-36">
      <div className="px-6 lg:px-12">
        {/* Section label */}
        <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-6">
          Your Preferred Stack
        </p>

        {/* H2 */}
        <h2 className="font-display text-[52px] font-light text-wm-off leading-tight">
          You Choose. We Build.
        </h2>

        {/* Subtitle */}
        <p className="font-body text-[15px] text-wm-grey mt-4 max-w-lg leading-relaxed">
          Select the technology that suits your business — we&apos;re experts in all of them.
        </p>

        {/* Pills */}
        <div className="flex flex-wrap gap-3 mt-10">
          {stackOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={(): void => handleSelect(option.id)}
              className={`font-body text-sm px-6 py-3 transition-all duration-200 ${
                selected === option.id
                  ? 'bg-gold text-wm-black font-medium'
                  : 'border border-wm-border text-wm-grey hover:border-gold hover:text-white'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Benefit text */}
        <div className="mt-8 min-h-[48px] flex items-center">
          {selectedStack === null ? (
            <p className="font-body text-wm-grey italic text-[15px]">
              ← Select a stack to see our recommendation
            </p>
          ) : (
            <p className="font-display text-[22px] italic text-white leading-snug">
              {selectedStack.benefit}
            </p>
          )}
        </div>

        {/* Dynamic CTA */}
        <div className="mt-6 min-h-[24px]">
          {selectedStack !== null && (
            <a
              href="#contact"
              className="font-body text-gold text-sm tracking-widest uppercase hover:opacity-70 transition-opacity"
            >
              Start a {selectedStack.label} project →
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
