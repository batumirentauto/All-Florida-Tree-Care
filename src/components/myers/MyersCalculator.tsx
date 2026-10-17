'use client'

import React, { useState } from 'react'
import { siteConfigMyersEn } from '../../siteConfig.myers.en'

export function MyersCalculator({ config }: { config?: any }) {
  const siteConfig = config || siteConfigMyersEn

  const [serviceType, setServiceType] = useState('dying-cedar')
  const [projectScale, setProjectScale] = useState('single')
  const [accessType, setAccessType] = useState('residential')
  const [debrisHandling, setDebrisHandling] = useState('chip-haul')

  // Ballpark calculation logic for Coos Bay, Oregon coastal tree surgery
  const calculateEstimate = () => {
    let baseMin = 450
    let baseMax = 850

    if (serviceType === 'dying-cedar') {
      if (projectScale === 'single') { baseMin = 400; baseMax = 800 }
      else if (projectScale === 'few') { baseMin = 900; baseMax = 1800 }
      else { baseMin = 2200; baseMax = 4800 }
    } else if (serviceType === 'coastal-hazard') {
      if (projectScale === 'single') { baseMin = 450; baseMax = 950 }
      else if (projectScale === 'few') { baseMin = 1100; baseMax = 2200 }
      else { baseMin = 2500; baseMax = 5500 }
    } else if (serviceType === 'multi-tree') {
      if (projectScale === 'single') { baseMin = 600; baseMax = 1200 }
      else if (projectScale === 'few') { baseMin = 1400; baseMax = 2800 }
      else { baseMin = 3200; baseMax = 7500 }
    } else if (serviceType === 'brush-chipping') {
      if (projectScale === 'single') { baseMin = 250; baseMax = 500 }
      else if (projectScale === 'few') { baseMin = 450; baseMax = 850 }
      else { baseMin = 850; baseMax = 1600 }
    } else if (serviceType === 'stump-grinding') {
      if (projectScale === 'single') { baseMin = 180; baseMax = 350 }
      else if (projectScale === 'few') { baseMin = 350; baseMax = 700 }
      else { baseMin = 700; baseMax = 1400 }
    }

    if (accessType === 'tight') {
      baseMin = Math.round(baseMin * 1.2)
      baseMax = Math.round(baseMax * 1.25)
    } else if (accessType === 'multi-unit') {
      baseMin = Math.round(baseMin * 1.15)
      baseMax = Math.round(baseMax * 1.2)
    }

    if (debrisHandling === 'keep-chips') {
      baseMin = Math.round(baseMin * 0.9)
      baseMax = Math.round(baseMax * 0.92)
    }

    return { min: baseMin, max: baseMax }
  }

  const estimate = calculateEstimate()

  const serviceOptions = siteConfig.lang === 'ru' ? [
    { id: 'dying-cedar', label: 'Спил увядающего кедра', desc: 'Сложный спуск хрупких сучьев над забором или крышей' },
    { id: 'coastal-hazard', label: 'Аварийное дерево на побережье', desc: 'Удаление опасных наклоненных стволов' },
    { id: 'multi-tree', label: 'Комплекс от 3 до 30+ деревьев', desc: 'Многоквартирные дома, ТСЖ и коммерческие зоны' },
    { id: 'brush-chipping', label: 'Дробление куч веток щепорезом', desc: 'Быстрая переработка завалов сучьев в щепу' },
    { id: 'stump-grinding', label: 'Дробление пней ниже уровня грунта', desc: 'Фрезерование на 20–30 см вглубь под новый газон' },
  ] : [
    { id: 'dying-cedar', label: 'Dying Cedar Dismantling', desc: 'Precision sectional lowering of brittle cedar limbs' },
    { id: 'coastal-hazard', label: 'Coastal Hazard Tree Removal', desc: 'Piecemeal takedown of leaning or split trees' },
    { id: 'multi-tree', label: 'Commercial Scale (3 to 30+ Trees)', desc: 'Apartment complexes, HOA tracts & multi-tree parcels' },
    { id: 'brush-chipping', label: 'Limb & Branch Pile Chipping', desc: 'High-throughput commercial chipper on your site' },
    { id: 'stump-grinding', label: 'Subsurface Stump Grinding', desc: 'Deep root milling 8–12 inches below turf grade' },
  ]

  const scaleOptions = siteConfig.lang === 'ru' ? [
    { id: 'single', label: '1 дерево / 1 пень', desc: 'Точечная ювелирная работа' },
    { id: 'few', label: '2–5 деревьев', desc: 'Стандартный жилой участок' },
    { id: 'large', label: '6–30+ деревьев', desc: 'Масштабный проект под ключ' },
  ] : [
    { id: 'single', label: '1 Tree / 1 Stump', desc: 'Targeted single-day removal' },
    { id: 'few', label: '2 – 5 Trees', desc: 'Standard residential property' },
    { id: 'large', label: '6 – 30+ Trees', desc: 'Large multi-tree residential project' },
  ]

  const accessOptions = siteConfig.lang === 'ru' ? [
    { id: 'open', label: 'Открытый заезд', desc: 'Свободный подъезд автовышки' },
    { id: 'tight', label: 'Узкий двор / заборы', desc: 'Блочный такелажный спуск' },
    { id: 'multi-unit', label: 'Жилой комплекс / парковка', desc: 'Координация безопасности жильцов' },
  ] : [
    { id: 'open', label: 'Open Yard Driveway', desc: 'Direct bucket truck positioning' },
    { id: 'tight', label: 'Tight Residential Fenceline', desc: 'Aerial roping & sectional lowering' },
    { id: 'multi-unit', label: 'Multi-Family Complex', desc: 'Active parking lot & building clearance' },
  ]

  const debrisOptions = siteConfig.lang === 'ru' ? [
    { id: 'chip-haul', label: 'Измельчить и вывезти всё', desc: 'Идеальная чистота участка под грабли и воздуходувки' },
    { id: 'keep-chips', label: 'Оставить щепу на участке', desc: 'Мульча для прибрежного сада (скидка на работы)' },
  ] : [
    { id: 'chip-haul', label: 'Chip & Complete Haul-Away', desc: 'Full yard swept & blown spotless upon completion' },
    { id: 'keep-chips', label: 'Retain Wood Chips Onsite', desc: 'Nutrient-rich cedar mulch for garden beds (discount)' },
  ]

  const smsText = encodeURIComponent(
    siteConfig.lang === 'ru'
      ? `Здравствуйте, Патрик! Рассчитал ориентировочную смету ($${estimate.min} – $${estimate.max}) на калькуляторе. Хочу отправить фото для точной оценки.`
      : `Hello Patrick, I used your online estimator ($${estimate.min} – $${estimate.max}). I would like to text photos for a confirmed quote.`
  )

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-[#071120] border-b border-sky-500/20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-950/80 border border-sky-700/60 px-3.5 py-1 text-xs font-bold text-sky-300 mb-3 uppercase tracking-wider">
            <span>{siteConfig.lang === 'ru' ? 'Экспресс-калькулятор сметы' : 'Instant Cost Estimator'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {siteConfig.lang === 'ru'
              ? 'Предварительный расчет стоимости работ в Coos County за 10 секунд'
              : 'Calculate Your Tree Service Estimate in 10 Seconds'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            {siteConfig.lang === 'ru'
              ? 'Честные прибрежные расценки (по отзывам клиентов в Google — часто почти в 2 раза выгоднее конкурентов благодаря собственной технике).'
              : 'Fair coastal Oregon pricing. Verified by local clients like Clark Andersen as coming in significantly below competitor estimates.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Service Type */}
            <div className="bg-[#0b172a] p-5 sm:p-6 rounded-2xl border border-sky-900/40 shadow-lg">
              <label className="block text-xs font-bold uppercase tracking-wider text-sky-300 mb-3">
                1. {siteConfig.lang === 'ru' ? 'Тип работ по дереву' : 'Select Service Type'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {serviceOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setServiceType(opt.id)}
                    className={`text-left p-3 rounded-xl border transition-all ${
                      serviceType === opt.id
                        ? 'bg-sky-950 border-sky-400 text-white shadow-md'
                        : 'bg-black/40 border-sky-950/80 text-slate-300 hover:border-sky-700/60'
                    }`}
                  >
                    <div className="text-xs font-bold">{opt.label}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Project Scale */}
            <div className="bg-[#0b172a] p-5 sm:p-6 rounded-2xl border border-sky-900/40 shadow-lg">
              <label className="block text-xs font-bold uppercase tracking-wider text-sky-300 mb-3">
                2. {siteConfig.lang === 'ru' ? 'Объем проекта' : 'Project Scale & Tree Count'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {scaleOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setProjectScale(opt.id)}
                    className={`text-left p-3 rounded-xl border transition-all ${
                      projectScale === opt.id
                        ? 'bg-sky-950 border-sky-400 text-white shadow-md'
                        : 'bg-black/40 border-sky-950/80 text-slate-300 hover:border-sky-700/60'
                    }`}
                  >
                    <div className="text-xs font-bold">{opt.label}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Access / Site Location */}
            <div className="bg-[#0b172a] p-5 sm:p-6 rounded-2xl border border-sky-900/40 shadow-lg">
              <label className="block text-xs font-bold uppercase tracking-wider text-sky-300 mb-3">
                3. {siteConfig.lang === 'ru' ? 'Условия подъезда и окружение' : 'Site Access & Surroundings'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {accessOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setAccessType(opt.id)}
                    className={`text-left p-3 rounded-xl border transition-all ${
                      accessType === opt.id
                        ? 'bg-sky-950 border-sky-400 text-white shadow-md'
                        : 'bg-black/40 border-sky-950/80 text-slate-300 hover:border-sky-700/60'
                    }`}
                  >
                    <div className="text-xs font-bold">{opt.label}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Debris Handling */}
            <div className="bg-[#0b172a] p-5 sm:p-6 rounded-2xl border border-sky-900/40 shadow-lg">
              <label className="block text-xs font-bold uppercase tracking-wider text-sky-300 mb-3">
                4. {siteConfig.lang === 'ru' ? 'Утилизация веток и порубочных остатков' : 'Debris & Mulch Handling'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {debrisOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setDebrisHandling(opt.id)}
                    className={`text-left p-3 rounded-xl border transition-all ${
                      debrisHandling === opt.id
                        ? 'bg-sky-950 border-sky-400 text-white shadow-md'
                        : 'bg-black/40 border-sky-950/80 text-slate-300 hover:border-sky-700/60'
                    }`}
                  >
                    <div className="text-xs font-bold">{opt.label}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Box (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-[#0b172a] rounded-2xl border-2 border-sky-500/40 p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-sky-900/40">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                  {siteConfig.lang === 'ru' ? 'Ориентир сметы' : 'Ballpark Estimate'}
                </span>
                <span className="text-[11px] text-sky-400 bg-sky-950 px-2 py-0.5 rounded font-mono border border-sky-800">
                  Coos County, OR
                </span>
              </div>

              <div className="text-center py-2">
                <div className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                  ${estimate.min} – ${estimate.max}
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  {siteConfig.lang === 'ru'
                    ? 'Включает такелажный спил, работу автовышки, измельчение веток и финальную уборку воздуходувками.'
                    : 'Includes precision sectional takedown, bucket boom access, chipper processing, and immaculate cleanup.'}
                </p>
              </div>

              {/* Guarantees List */}
              <div className="space-y-2.5 pt-4 border-t border-sky-900/40 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0" />
                  <span>{siteConfig.lang === 'ru' ? 'Собственная техника без наценок за аренду' : 'Company-owned equipment with zero rental markup'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0" />
                  <span>{siteConfig.lang === 'ru' ? 'Опыт безопасного спила 30+ деревьев у жилых домов' : 'Proven experience clearing 30+ trees near buildings'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0" />
                  <span>{siteConfig.lang === 'ru' ? 'Лицензия Oregon CCB и коммерческая страховка' : 'Full Oregon CCB registration & liability insurance'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-sky-900/40">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold py-3.5 text-sm shadow-lg shadow-sky-700/30 transition-all hover:scale-[1.02]"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{siteConfig.ui?.callPat || `Call (${siteConfig.phone})`}</span>
                </a>

                <a
                  href={`sms:${siteConfig.phoneRaw}?&body=${smsText}`}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-sky-400 font-bold py-3 text-xs transition-all"
                >
                  <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>{siteConfig.lang === 'ru' ? 'Отправить фото дерева в SMS' : 'Text Photos of Tree for Confirmation'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
