import { testimonials } from '@/data/content'

export default function Testimonials(): React.JSX.Element {
  return (
    <section className="bg-wm-dark py-24 lg:py-36">
      <div className="px-6 lg:px-12">
        {/* Section label */}
        <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-6">
          Client Words
        </p>

        {/* H2 */}
        <h2 className="font-display text-[52px] font-light text-wm-off leading-tight">
          Straight From Our Clients.
        </h2>

        {/* Testimonial cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="border-l-2 border-gold pl-8 py-6"
            >
              {/* Opening quote mark */}
              <span
                className="font-display text-[80px] text-gold leading-none block -mb-4"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Quote */}
              <p className="font-body text-[15px] text-[#cccccc] leading-relaxed italic">
                {testimonial.quote}
              </p>

              {/* Attribution */}
              <footer className="mt-6">
                <cite className="not-italic">
                  <p className="font-display text-[14px] text-white font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-gold text-xs uppercase tracking-widest mt-0.5">
                    {testimonial.company}
                  </p>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
