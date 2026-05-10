import { processSteps } from '@/data/content'

export default function HowWeWork(): React.JSX.Element {
  return (
    <section id="process" className="bg-wm-dark py-24 lg:py-36">
      <div className="px-6 lg:px-12">
        {/* Section label */}
        <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-6">
          Our Process
        </p>

        {/* H2 */}
        <h2 className="font-display text-[52px] font-light text-wm-off leading-tight">
          From Brief to Launch in 5 Steps.
        </h2>

        {/* Desktop horizontal timeline */}
        <div className="mt-16 hidden lg:block">
          <div className="relative flex">
            {/* Connecting line */}
            <div
              className="absolute top-5 left-5 right-5 h-px bg-wm-border"
              aria-hidden="true"
            />

            {processSteps.map((step) => (
              <div key={step.step} className="flex-1 flex flex-col items-center group relative">
                {/* Step circle */}
                <div className="relative z-10">
                  <div className="w-10 h-10 border border-gold bg-wm-dark flex items-center justify-center font-display text-gold text-sm group-hover:bg-gold group-hover:text-wm-black transition-all duration-200">
                    {step.step}
                  </div>
                  {/* Duration badge on hover */}
                  <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gold text-wm-black font-body text-[10px] px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap uppercase tracking-wider">
                    {step.duration}
                  </span>
                </div>

                {/* Step content */}
                <div className="mt-6 px-4 text-center">
                  <h3 className="font-display text-[18px] text-white font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-[13px] text-wm-grey leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="mt-12 lg:hidden flex flex-col">
          {processSteps.map((step, index) => (
            <div key={step.step} className="flex gap-6 relative">
              {/* Left line — not on last item */}
              {index < processSteps.length - 1 && (
                <div
                  className="absolute left-5 top-10 bottom-0 w-px bg-wm-border"
                  aria-hidden="true"
                />
              )}

              {/* Step circle */}
              <div className="flex-shrink-0 w-10 h-10 border border-gold bg-wm-dark flex items-center justify-center font-display text-gold text-sm z-10">
                {step.step}
              </div>

              {/* Step content */}
              <div className="pb-10">
                <span className="font-body text-[10px] text-gold uppercase tracking-[0.2em]">
                  {step.duration}
                </span>
                <h3 className="font-display text-[20px] text-white font-semibold mt-1 mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-[14px] text-wm-grey leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
