'use client'

import React, { useState } from 'react'
import { siteConfigHolcombEn } from '../../siteConfig.holcomb.en'

export function HolcombCalculator({ config }: { config?: any }) {
  const siteConfig = config || siteConfigHolcombEn

  const [serviceType, setServiceType] = useState('tall-fir')
  const [treeSize, setTreeSize] = useState('large')
  const [proximity, setProximity] = useState('tight')
  const [slashOption, setSlashOption] = useState('chip-haul')

  // Ballpark calculation logic for Oregon Pacific Northwest timber & tree surgery
  const calculateEstimate = () => {
    let baseMin = 500
    let baseMax = 950

    if (serviceType === 'tall-fir') {
      if (treeSize === 'small') { baseMin = 450; baseMax = 800 }
      else if (treeSize === 'medium') { baseMin = 850; baseMax = 1600 }
      else { baseMin = 1600; baseMax = 3200 }
    } else if (serviceType === 'redwood-cedar') {
      if (treeSize === 'small') { baseMin = 600; baseMax = 1100 }
      else if (treeSize === 'medium') { baseMin = 1200; baseMax = 2200 }
      else { baseMin = 2200; baseMax = 4500 }
    } else if (serviceType === 'storm-clearing') {
      if (treeSize === 'small') { baseMin = 400; baseMax = 750 }
      else if (treeSize === 'medium') { baseMin = 750; baseMax = 1500 }
      else { baseMin = 1500; baseMax = 3000 }
    } else if (serviceType === 'defensible-space') {
      if (treeSize === 'small') { baseMin = 500; baseMax = 950 }
      else if (treeSize === 'medium') { baseMin = 950; baseMax = 1900 }
      else { baseMin = 1900; baseMax = 3800 }
    } else if (serviceType === 'chipping-only') {
      if (treeSize === 'small') { baseMin = 300; baseMax = 550 }
      else if (treeSize === 'medium') { baseMin = 550; baseMax = 950 }
      else { baseMin = 950; baseMax = 1800 }
    }

    // Proximity to buildings / powerlines
    if (proximity === 'eves') {
      baseMin = Math.round(baseMin * 1.3)
      baseMax = Math.round(baseMax * 1.35)
    } else if (proximity === 'tight') {
      baseMin = Math.round(baseMin * 1.15)
      baseMax = Math.round(baseMax * 1.2)
    }

    // Slash processing & wood handling
    if (slashOption === 'buck-stack') {
      baseMin = Math.round(baseMin * 1.1)
      baseMax = Math.round(baseMax * 1.15)
    } else if (slashOption === 'leave-chips') {
      baseMin = Math.round(baseMin * 0.92)
      baseMax = Math.round(baseMax * 0.95)
    }

    return { min: baseMin, max: baseMax }
  }

  const estimate = calculateEstimate()

  const serviceOptions = siteConfig.lang === 'ru' ? [
    { id: 'tall-fir', label: 'Валка пихты Дугласа (до 30+ м)', desc: 'Спуск сухих вершин и зависших ветвей (widow makers)' },
    { id: 'redwood-cedar', label: 'Спил крупной секвойи / кедра', desc: 'Стволы большого диаметра (до 1.5–2 м) рядом с домом' },
    { id: 'storm-clearing', label: 'Удаление штормового завала', desc: 'Снятие упавшего ствола с крыши дачи или гаража' },
    { id: 'defensible-space', label: 'Прореживание кроны / Пожаробезопасность', desc: 'Удаление нижних ветвей и расчистка периметра участка' },
    { id: 'chipping-only', label: 'Дробление веток измельчителем', desc: 'Быстрая переработка больших куч ветвей в щепу' },
  ] : [
    { id: 'tall-fir', label: 'Tall Douglas Fir Takedown', desc: '100+ ft firs, dead tops & widow maker extraction' },
    { id: 'redwood-cedar', label: 'Colossal Redwood or Cedar', desc: 'Massive trunk girth (up to 6-ft) near house eves' },
    { id: 'storm-clearing', label: 'Emergency Storm Wood Clearance', desc: 'Removing fallen timber off cabin roofs or driveways' },
    { id: 'defensible-space', label: 'Defensible Space & Thinning', desc: 'Fire hazard reduction buffers and canopy elevation' },
    { id: 'chipping-only', label: 'Commercial Brush Chipping', desc: 'Pulverizing large branch piles into clean wood mulch' },
  ]

  const sizeOptions = siteConfig.lang === 'ru' ? [
    { id: 'small', label: 'До 12–15 м', desc: 'Небольшие деревья / умеренные ветви' },
    { id: 'medium', label: '15–25 м', desc: 'Стандартные хвойные деревья' },
    { id: 'large', label: '25–35+ м', desc: 'Вековые пихты и толстые секвойи' },
  ] : [
    { id: 'small', label: 'Under 40 Ft', desc: 'Small tree or moderate branch volume' },
    { id: 'medium', label: '40 – 80 Ft', desc: 'Typical mature forest evergreen' },
    { id: 'large', label: '80 – 120+ Ft', desc: 'Massive old-growth fir or thick redwood' },
  ]

  const proximityOptions = siteConfig.lang === 'ru' ? [
    { id: 'open', label: 'Открытая площадка', desc: 'Свободный сектор для естественной валки' },
    { id: 'tight', label: 'Забор / ЛЭП рядом', desc: 'Требуется направленный спил с оттяжкой' },
    { id: 'eves', label: 'Вплотную к карнизу / крыше', desc: 'Ювелирный пофрагментный спуск канатами' },
  ] : [
    { id: 'open', label: 'Open Yard', desc: 'Clear drop zone for directional felling' },
    { id: 'tight', label: 'Near Fence / Utility Line', desc: 'Requires directional rope pulls & control' },
    { id: 'eves', label: 'Inches From Roof / Driveway', desc: 'Surgical friction rigging straight down' },
  ]

  const slashOptions = siteConfig.lang === 'ru' ? [
    { id: 'chip-haul', label: 'Измельчить и вывезти всё', desc: 'Полная уборка участка граблями под ключ' },
    { id: 'leave-chips', label: 'Оставить щепу на участке', desc: 'Полезная мульча для грядок и дорожек (скидка)' },
    { id: 'buck-stack', label: 'Распилить ствол на дрова', desc: 'Чурки для топки камина или бани' },
  ] : [
    { id: 'chip-haul', label: 'Chip & Complete Haul-Away', desc: 'Turnkey site cleanup: chipped, blown & hauled' },
    { id: 'leave-chips', label: 'Keep Fresh Mulch Onsite', desc: 'Nutrient-rich chips left for your landscaping' },
    { id: 'buck-stack', label: 'Buck Logs for Firewood', desc: 'Stems cut to stove length & stacked onsite' },
  ]

  const smsText = encodeURIComponent(
    siteConfig.lang === 'ru'
      ? `Здравствуйте, Тони! Рассчитал предварительную смету ($${estimate.min} – $${estimate.max}) на работы с деревом. Хочу отправить фото для точного подтверждения.`
      : `Hello Tony, I used your online estimator ($${estimate.min} – $${estimate.max}). I would like to text photos of my tree for a confirmed quote.`
  )

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-[#07130c] border-b border-emerald-500/20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 px-3.5 py-1 text-xs font-bold text-emerald-300 mb-3 uppercase tracking-wider">
            <span>{siteConfig.lang === 'ru' ? 'Экспресс-калькулятор сметы' : 'Instant Cost Estimator'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {siteConfig.lang === 'ru'
              ? 'Предварительный расчет стоимости валки в округе Лейн за 10 секунд'
              : 'Calculate Your Timber & Tree Service Estimate in 10 Seconds'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            {siteConfig.lang === 'ru'
              ? 'Прозрачные расценки без наценок и скрытых доплат. Тони Холкомб лично подтверждает смету при осмотре объекта.'
              : 'Transparent Lane County estimates based on real operational metrics. Tony Holcomb provides written estimates that match your final bill.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Service Type */}
            <div className="bg-[#0c1e13] p-5 sm:p-6 rounded-2xl border border-emerald-900/40 shadow-lg">
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-300 mb-3">
                1. {siteConfig.lang === 'ru' ? 'Тип лесотехнических работ' : 'Select Service Type'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {serviceOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setServiceType(opt.id)}
                    className={`text-left p-3 rounded-xl border transition-all ${
                      serviceType === opt.id
                        ? 'bg-emerald-950 border-emerald-400 text-white shadow-md'
                        : 'bg-black/40 border-emerald-950/80 text-slate-300 hover:border-emerald-700/60'
                    }`}
                  >
                    <div className="text-xs font-bold">{opt.label}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Tree Height / Scale */}
            <div className="bg-[#0c1e13] p-5 sm:p-6 rounded-2xl border border-emerald-900/40 shadow-lg">
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-300 mb-3">
                2. {siteConfig.lang === 'ru' ? 'Высота или масштаб дерева' : 'Tree Height & Trunk Scale'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {sizeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setTreeSize(opt.id)}
                    className={`text-left p-3 rounded-xl border transition-all ${
                      treeSize === opt.id
                        ? 'bg-emerald-950 border-emerald-400 text-white shadow-md'
                        : 'bg-black/40 border-emerald-950/80 text-slate-300 hover:border-emerald-700/60'
                    }`}
                  >
                    <div className="text-xs font-bold">{opt.label}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Proximity & Tightness */}
            <div className="bg-[#0c1e13] p-5 sm:p-6 rounded-2xl border border-emerald-900/40 shadow-lg">
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-300 mb-3">
                3. {siteConfig.lang === 'ru' ? 'Близость к строениям и ЛЭП' : 'Proximity to Roofs & Structures'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {proximityOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setProximity(opt.id)}
                    className={`text-left p-3 rounded-xl border transition-all ${
                      proximity === opt.id
                        ? 'bg-emerald-950 border-emerald-400 text-white shadow-md'
                        : 'bg-black/40 border-emerald-950/80 text-slate-300 hover:border-emerald-700/60'
                    }`}
                  >
                    <div className="text-xs font-bold">{opt.label}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Slash & Wood Handling */}
            <div className="bg-[#0c1e13] p-5 sm:p-6 rounded-2xl border border-emerald-900/40 shadow-lg">
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-300 mb-3">
                4. {siteConfig.lang === 'ru' ? 'Что делаем с древесиной и ветками' : 'Debris & Wood Handling'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {slashOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSlashOption(opt.id)}
                    className={`text-left p-3 rounded-xl border transition-all ${
                      slashOption === opt.id
                        ? 'bg-emerald-950 border-emerald-400 text-white shadow-md'
                        : 'bg-black/40 border-emerald-950/80 text-slate-300 hover:border-emerald-700/60'
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
            <div className="bg-[#0c1e13] rounded-2xl border-2 border-emerald-500/40 p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-emerald-900/40">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  {siteConfig.lang === 'ru' ? 'Ориентир сметы' : 'Ballpark Estimate'}
                </span>
                <span className="text-[11px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded font-mono border border-emerald-800">
                  Lane County, OR
                </span>
              </div>

              <div className="text-center py-2">
                <div className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                  ${estimate.min} – ${estimate.max}
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  {siteConfig.lang === 'ru'
                    ? 'Включает валку, такелажные работы, измельчение веток и финальную уборку граблями.'
                    : 'Includes technical falling, roping rigging, chipper processing, and immaculate cleanup.'}
                </p>
              </div>

              {/* Guarantees List */}
              <div className="space-y-2.5 pt-4 border-t border-emerald-900/40 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>{siteConfig.lang === 'ru' ? 'Смета строго соответствует итоговому счету' : 'Estimate matches final invoice 100%'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>{siteConfig.lang === 'ru' ? 'Никаких царапин на дорожках и повреждений газона' : 'Driveway & turf surface protection guaranteed'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>{siteConfig.lang === 'ru' ? 'Лицензия Oregon CCB и коммерческая страховка' : 'Full Oregon CCB licensing & liability insurance'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-emerald-900/40">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold py-3.5 text-sm shadow-lg shadow-emerald-700/30 transition-all hover:scale-[1.02]"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{siteConfig.ui?.callTony || `Call (${siteConfig.phone})`}</span>
                </a>

                <a
                  href={`sms:${siteConfig.phoneRaw}?&body=${smsText}`}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-emerald-400 font-bold py-3 text-xs transition-all"
                >
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
