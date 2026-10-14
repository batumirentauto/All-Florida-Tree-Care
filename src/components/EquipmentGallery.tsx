import { siteConfig as defaultSiteConfig } from '../siteConfig'
import type { SiteConfig } from '../types/siteConfig'

export const EquipmentGallery: React.FC<{ config?: SiteConfig }> = ({ config }) => {
  const siteConfig = config || defaultSiteConfig
  return (
    <section id="equipment" className="py-20 bg-neutral-950 border-t border-neutral-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-3.5 py-1.5 text-xs font-semibold text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{siteConfig.gallery.badge}</span>
          </div>
          <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            {siteConfig.gallery.title}
          </h2>
          <p className="mt-3 text-base text-neutral-300 leading-relaxed">
            {siteConfig.gallery.subhead}
          </p>
        </div>

        {/* 6 Photo Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.gallery.items.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 transition duration-300 hover:border-neutral-700 hover:bg-neutral-900 shadow-xl"
            >
              {/* Photo Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Floating Badge */}
                <div className="absolute top-3 right-3">
                  <span className="rounded-md bg-neutral-950/85 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-emerald-400 border border-neutral-700/80 shadow">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Text Description */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-300">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400">
                  <span>{siteConfig.lang === 'ru' ? '📍 Округ Манати / Сарасота' : '📍 Manatee / Sarasota County'}</span>
                  <span className="font-mono text-emerald-400">{siteConfig.licenseBadge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold">
              ✓
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {siteConfig.lang === 'ru'
                  ? 'Все работы выполняет опытная команда на собственной спецтехнике'
                  : 'Every job is operated by our experienced crew with dedicated commercial machinery'}
              </h4>
              <p className="text-xs text-neutral-400">
                {siteConfig.lang === 'ru'
                  ? 'Без случайных наемных рабочих, без задержек и без скрытых доплат за вывоз щепы.'
                  : 'No day-labor surprises, no delays, and no unexpected debris disposal charges.'}
              </p>
            </div>
          </div>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-500"
          >
            <span>{siteConfig.lang === 'ru' ? 'Позвонить сейчас' : 'Call Directly'}</span>
            <span className="font-mono text-emerald-200">({siteConfig.phone})</span>
          </a>
        </div>
      </div>
    </section>
  )
}
