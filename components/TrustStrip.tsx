import { trustClients } from '@/data/content'

export default function TrustStrip(): React.JSX.Element {
  return (
    <section className="bg-wm-dark border-y border-wm-border py-8">
      <div className="px-6 lg:px-12">
        <p className="font-body text-[10px] uppercase tracking-[0.25em] text-wm-grey text-center mb-6">
          Trusted by Kenyan businesses
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {trustClients.map((client) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-[18px] text-wm-grey hover:text-gold transition-colors duration-200 tracking-wide"
            >
              {client.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
