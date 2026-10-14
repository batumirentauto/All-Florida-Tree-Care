import React from 'react'
import { siteConfig } from '../siteConfig'

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-950 pb-16 pt-10 sm:pb-24 sm:pt-16">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-25">
        <div className="h-[450px] w-[650px] rounded-full bg-emerald-700/20 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Value Proposition & High CRO actions */}
          <div className="lg:col-span-7">
            {/* County / Experience Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-3.5 py-1.5 text-xs font-semibold text-emerald-300">
              <svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{siteConfig.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.2]">
              {siteConfig.hero.headline}
            </h1>

            {/* Subhead - strictly factual contractor language */}
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-neutral-300">
              {siteConfig.hero.subhead}
            </p>

            {/* Grounded trade bullet points */}
            <ul className="mt-6 space-y-2.5 text-sm text-neutral-200">
              <li className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-900/80 text-emerald-400 border border-emerald-700/60 text-xs">✓</span>
                <span><strong>Владелец лично на объекте</strong> — никакой перепродажи заказов и субподрядчиков</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-900/80 text-emerald-400 border border-emerald-700/60 text-xs">✓</span>
                <span><strong>Ширина всего 89 см</strong> — проезжает в стандартные калитки без снятия забора</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-900/80 text-emerald-400 border border-emerald-700/60 text-xs">✓</span>
                <span><strong>Фрезерование на 20–35 см ниже дерна</strong> — площадка готова под газон или забор</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-900/80 text-emerald-400 border border-emerald-700/60 text-xs">✓</span>
                <span><strong>Защитные экраны</strong> — сохраняем окна, полив, купола бассейнов и трубы в безопасности</span>
              </li>
            </ul>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-6 py-4 text-base font-bold text-white shadow-xl shadow-emerald-950/40 transition hover:bg-emerald-500 active:scale-98"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{siteConfig.hero.ctaCall}</span>
              </a>

              <a
                href="#text-estimate"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-amber-500/60 bg-amber-500/10 px-6 py-4 text-base font-bold text-amber-300 transition hover:bg-amber-500/20 active:scale-98"
              >
                <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{siteConfig.hero.ctaText}</span>
              </a>
            </div>

            <p className="mt-3 text-xs text-neutral-400 flex items-center gap-2">
              <span className="text-emerald-400 font-bold">Быстрый ответ:</span>
              <span>Пришлите 2 фото по SMS/WhatsApp — назовем фиксированную цену без выезда.</span>
            </p>
          </div>

          {/* Right Column: Technical Equipment Spec & Direct Snapshot Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-neutral-800 bg-neutral-900/90 p-6 shadow-2xl backdrop-blur-xl">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                    Характеристики оборудования
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Самоходный измельчитель пней
                  </h3>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/30">
                  Готов к выезду
                </span>
              </div>

              {/* Spec Rows */}
              <div className="mt-4 space-y-3.5 text-sm">
                <div className="flex items-center justify-between rounded-lg bg-neutral-950/70 p-3 border border-neutral-800/80">
                  <span className="text-neutral-400">Ширина проезда</span>
                  <span className="font-bold text-white">89 см (проходит в калитку)</span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-neutral-950/70 p-3 border border-neutral-800/80">
                  <span className="text-neutral-400">Давление на почву</span>
                  <span className="font-bold text-emerald-400">Резиновые гусеницы (без колеи)</span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-neutral-950/70 p-3 border border-neutral-800/80">
                  <span className="text-neutral-400">Глубина фрезерования</span>
                  <span className="font-bold text-white">До 35 см ниже уровня земли</span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-neutral-950/70 p-3 border border-neutral-800/80">
                  <span className="text-neutral-400">Боковые корни</span>
                  <span className="font-bold text-white">Удаление поверхностных корней</span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-neutral-950/70 p-3 border border-neutral-800/80">
                  <span className="text-neutral-400">Защита от щепы</span>
                  <span className="font-bold text-white">Тяжелые дефлекторные шторы</span>
                </div>
              </div>

              {/* Direct Owner Guarantee Box */}
              <div className="mt-5 rounded-xl border border-emerald-900/60 bg-emerald-950/40 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-600 font-bold text-white text-sm">
                    БФ
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-emerald-300">
                      Личная гарантия владельца
                    </h4>
                    <p className="mt-1 text-xs text-neutral-300 leading-relaxed">
                      &laquo;Я лично выгружаю спецтехнику, управляю фрезой, берегу ваши поливочные трубы и аккуратно убираю щепу после работы.&raquo;
                    </p>
                    <span className="mt-1 block text-xs font-semibold text-neutral-400">
                      — Брэд Фредерик, владелец
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
