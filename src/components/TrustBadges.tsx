import { siteConfig as defaultSiteConfig } from '../siteConfig'
import type { SiteConfig } from '../types/siteConfig'

const icons = [
  // Heavy bucket truck / certified climber icon
  (
    <svg key="1" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  // Pool cage / solar panel zero damage shield
  (
    <svg key="2" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  // 60+ FT reach crane / boom
  (
    <svg key="3" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  ),
  // Full cleanup & haul away
  (
    <svg key="4" className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
]

export const TrustBadges: React.FC<{ config?: SiteConfig }> = ({ config }) => {
  const siteConfig = config || defaultSiteConfig

  return (
    <section className="relative z-20 mx-auto max-w-7xl px-4 py-12 sm:px-6">
      {/* Section Pre-heading */}
      <div className="mb-8 max-w-2xl">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          {siteConfig.lang === 'ru' ? 'Преимущества All Florida Tree Care' : 'The All Florida Advantage'}
        </span>
        <h2 className="mt-2 text-2xl sm:text-3xl font-black text-white tracking-tight">
          {siteConfig.lang === 'ru'
            ? 'Мощность коммерческой спецтехники и ювелирная защита вашего участка'
            : 'Commercial Equipment Power with Zero Lawn & Structure Damage'}
        </h2>
      </div>

      {/* Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Bento Card 1: Dual Capability (Span 7 cols) */}
        <div className="md:col-span-7 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-950 p-6 sm:p-8 flex flex-col justify-between shadow-xl transition hover:border-amber-500/40">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-lg bg-amber-950/80 border border-amber-800/80 px-3 py-1 text-xs font-bold text-amber-300">
                {siteConfig.lang === 'ru' ? 'Двойная система работы' : 'Dual Capability Fleet'}
              </span>
              <span className="text-xs font-mono text-slate-400">01 / Fleet</span>
            </div>

            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white">
              {siteConfig.lang === 'ru'
                ? 'Автовышка 60+ футов + Бригада сертифицированных альпинистов'
                : '60+ FT Commercial Bucket Truck + Certified Tree Climbers'}
            </h3>

            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              {siteConfig.lang === 'ru'
                ? 'Если дерево высокое и стоит у дороги — автовышка спиливает его без риска. Если дерево во внутреннем дворе за бассейном, куда грузовик не проедет — наши арбористы работают на альпинистском снаряжении без заезда тяжелой техники на газон.'
                : 'Heavy commercial boom handles massive trees over roofs from the driveway. For fenced backyards where heavy trucks cannot drive, our expert climbers access trees safely on rigging with zero turf damage.'}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
            <span className="rounded-md bg-slate-950 px-2.5 py-1 text-xs text-amber-400 font-semibold border border-slate-800">
              ✓ {siteConfig.lang === 'ru' ? 'Высота до 18+ метров' : '60+ Ft Boom Reach'}
            </span>
            <span className="rounded-md bg-slate-950 px-2.5 py-1 text-xs text-cyan-400 font-semibold border border-slate-800">
              ✓ {siteConfig.lang === 'ru' ? 'Узкие проходы и калитки' : 'Backyard Gate Climbers'}
            </span>
            <span className="rounded-md bg-slate-950 px-2.5 py-1 text-xs text-slate-300 font-semibold border border-slate-800">
              ✓ {siteConfig.lang === 'ru' ? 'Сохранение газона' : 'Zero Lawn Ruts'}
            </span>
          </div>
        </div>

        {/* Bento Card 2: Zero Damage Pool Cage Guarantee (Span 5 cols) */}
        <div className="md:col-span-5 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-950 p-6 sm:p-8 flex flex-col justify-between shadow-xl transition hover:border-cyan-500/40">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-lg bg-cyan-950/80 border border-cyan-800/80 px-3 py-1 text-xs font-bold text-cyan-300">
                {siteConfig.lang === 'ru' ? '100% Защита' : 'Zero Damage Guarantee'}
              </span>
              <span className="text-xs font-mono text-slate-400">02 / Safety</span>
            </div>

            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white">
              {siteConfig.lang === 'ru'
                ? 'Защита сеток бассейнов, крыш и солнечных панелей'
                : 'Pool Enclosure, Solar Panel & Roof Protection'}
            </h3>

            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              {siteConfig.lang === 'ru'
                ? 'Используем арбористские тормозные блоки (Rigging) и направляющие тросы. Ни одна ветка не падает свободно: каждая секция аккуратно подвешивается и плавно опускается на землю.'
                : 'Every branch hanging over a lanai screen, pool cage, or solar array is rigged and lowered slowly on arborist pulleys. Nothing is dropped freely.'}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-400 font-bold">
            <span>🛡️ {siteConfig.lang === 'ru' ? 'Ювелирный контролируемый спуск' : 'Controlled Rigging Pulleys'}</span>
          </div>
        </div>

        {/* Bento Card 3: $1,000,000 Insurance (Span 5 cols) */}
        <div className="md:col-span-5 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-950 p-6 sm:p-8 flex flex-col justify-between shadow-xl transition hover:border-amber-500/40">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-lg bg-amber-950/80 border border-amber-800/80 px-3 py-1 text-xs font-bold text-amber-300">
                {siteConfig.lang === 'ru' ? 'Лицензия Флориды' : 'Licensed & Insured'}
              </span>
              <span className="text-xs font-mono text-slate-400">03 / Trust</span>
            </div>

            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white">
              $1,000,000 Liability Policy
            </h3>

            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              {siteConfig.lang === 'ru'
                ? 'Официальная лицензия штата и полный страховой полис коммерческой ответственности на 1 миллион долларов. Мы защищаем клиента от любых рисков.'
                : 'Comprehensive commercial general liability policy. We provide certificates of insurance on request prior to starting any tree removal or crane trimming.'}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
            {siteConfig.lang === 'ru' ? 'Предоставляем COI по запросу в день заказа' : 'COI verified & dispatched on every project'}
          </div>
        </div>

        {/* Bento Card 4: Complete Haul Away & Rake Clean (Span 7 cols) */}
        <div className="md:col-span-7 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-950 p-6 sm:p-8 flex flex-col justify-between shadow-xl transition hover:border-orange-500/40">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-lg bg-orange-950/80 border border-orange-800/80 px-3 py-1 text-xs font-bold text-orange-300">
                {siteConfig.lang === 'ru' ? 'Полный порядок' : 'Total Clean-Up'}
              </span>
              <span className="text-xs font-mono text-slate-400">04 / Clean</span>
            </div>

            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white">
              {siteConfig.lang === 'ru'
                ? 'Полная уборка участка, вывоз стволов и продувка воздуходувками'
                : 'Complete Debris Haul-Away & Yard Raked Clean'}
            </h3>

            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              {siteConfig.lang === 'ru'
                ? 'Мы не оставляем после себя горы щепы или распиленные бревна. Собственный измельчитель и самосвал: грабли, промышленная воздуходувка, участок чище, чем был до нашего приезда.'
                : 'Commercial chipper and debris dump trailer on site. We rake, leaf-blow, and haul every pound of timber and brush away. Your driveway, pool deck, and lawn are left spotless.'}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs">
            <span className="text-orange-400 font-bold">🧹 {siteConfig.lang === 'ru' ? 'Участок чище, чем до начала работ' : 'Left cleaner than when we arrived'}</span>
            <a href={`tel:${siteConfig.phoneRaw}`} className="text-white hover:text-amber-400 font-bold underline transition">
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
