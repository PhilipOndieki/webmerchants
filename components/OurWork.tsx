import Image from 'next/image'
import { projects } from '@/data/content'

export default function OurWork(): React.JSX.Element {
  return (
    <section id="work" className="bg-wm-black py-24 lg:py-36">
      <div className="px-6 lg:px-12">
        {/* Section label */}
        <p className="font-body text-gold text-xs tracking-[0.28em] uppercase mb-6">
          Selected Work
        </p>

        {/* H2 */}
        <h2 className="font-display text-[52px] font-light text-wm-off leading-tight">
          Clients Who Now Lead Their Market.
        </h2>

        {/* Asymmetric grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-px bg-wm-border">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative overflow-hidden group bg-wm-border ${
                index === 0 ? 'lg:row-span-2 min-h-[500px]' : 'min-h-[280px]'
              }`}
              aria-label={`Visit ${project.title}`}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                unoptimized
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                sizes={index === 0 ? '50vw' : '50vw'}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-wm-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="font-body text-[11px] text-gold uppercase tracking-[0.2em] mb-3">
                  {project.category}
                </span>
                <h3 className="font-display text-[32px] text-white leading-tight mb-3">
                  {project.title}
                </h3>
                <p className="font-body text-[12px] text-wm-grey mb-6">{project.stack}</p>
                <span className="font-body text-gold text-xs tracking-widest uppercase">
                  Visit site →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
