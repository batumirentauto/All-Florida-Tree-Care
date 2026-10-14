import { siteConfig as defaultSiteConfig } from '../siteConfig'
import type { SiteConfig } from '../types/siteConfig'

export const EquipmentGallery: React.FC<{ config?: SiteConfig }> = ({ config }) => {
  const siteConfig = config || defaultSiteConfig
  return (
    <section id="equipment" className="py-20 bg-[#080d1a] border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/60 px-3.5 py-1.5 text-xs font-semibold text-amber-300">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span>{siteConfig.gallery.badge}</span>
          </div>
          <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            {siteConfig.gallery.title}
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            {siteConfig.gallery.subhead}
          </p>
        </div>

        {/* Asymmetrical Editorial Spotlight Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.gallery.items.map((item, idx) => {
            const isFeatured = idx === 0
            return (
              <div
                key={idx}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 transition duration-300 hover:border-amber-500/40 hover:bg-slate-900 shadow-xl ${
                  isFeatured ? 'lg:col-span-2 lg:flex-row' : ''
                }`}
              >
                {/* Photo Container */}
                <div className={`relative w-full overflow-hidden bg-slate-950 ${isFeatured ? 'lg:w-3/5 aspect-[4/3] lg:aspect-auto' : 'aspect-[4/3]'}`}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Floating Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="rounded-md bg-slate-950/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-amber-300 border border-slate-700/80 shadow">
                      {item.badge}
                    </span>
                  </div>
                  {isFeatured && (
                    <div className="absolute bottom-3 left-3">
                      <span className="rounded-md bg-gradient-to-r from-amber-400 to-amber-500 px-2.5 py-1 text-[10px] font-black uppercase text-slate-950 shadow">
                        ★ {siteConfig.lang === 'ru' ? 'Флагман флота компании' : 'Fleet Flagship'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Text Description */}
                <div className={`flex flex-1 flex-col justify-between p-5 sm:p-6 ${isFeatured ? 'lg:w-2/5' : ''}`}>
                  <div>
                    <h3 className={`font-bold text-white group-hover:text-amber-400 transition ${isFeatured ? 'text-lg sm:text-xl' : 'text-base'}`}>
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <span>{siteConfig.lang === 'ru' ? '📍 Округ Манати / Сарасота' : '📍 Manatee / Sarasota County'}</span>
                    <span className="font-mono text-amber-400 font-semibold">{siteConfig.licenseBadge}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-950 text-amber-400 border border-amber-800 font-black">
              ✓
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {siteConfig.lang === 'ru'
                  ? 'Все работы выполняет опытная команда на собственной спецтехнике'
                  : 'Every job is operated by our experienced crew with dedicated commercial machinery'}
              </h4>
              <p className="text-xs text-slate-400">
                {siteConfig.lang === 'ru'
                  ? 'Без случайных наемных рабочих, без задержек и без скрытых доплат за вывоз щепы.'
                  : 'No day-labor surprises, no delays, and no unexpected debris disposal charges.'}
              </p>
            </div>
          </div>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 px-5 py-3 text-sm font-black text-slate-950 shadow-lg shadow-amber-500/20 transition hover:brightness-110 active:scale-98"
          >
            <span>{siteConfig.lang === 'ru' ? 'Позвонить сейчас' : 'Call Directly'}</span>
            <span className="font-mono text-slate-900">({siteConfig.phone})</span>
          </a>
        </div>
      </div>
    </section>
  )
}
