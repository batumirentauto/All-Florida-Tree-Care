'use client'

import React, { useState } from 'react'
import { siteConfigHardkorEn } from '../../siteConfig.hardkor.en'

export function HardkorCalculator({ config }: { config?: any }) {
  const siteConfig = config || siteConfigHardkorEn

  const [serviceType, setServiceType] = useState('removal')
  const [treeSize, setTreeSize] = useState('medium')
  const [accessType, setAccessType] = useState('tight')
  const [urgency, setUrgency] = useState('standard')

  // Ballpark calculation logic for St. Pete / Pinellas arborist & heavy claw extraction
  const calculateEstimate = () => {
    let baseMin = 400
    let baseMax = 750

    if (serviceType === 'removal') {
      if (treeSize === 'small') { baseMin = 400; baseMax = 800 }
      else if (treeSize === 'medium') { baseMin = 850; baseMax = 1750 }
      else { baseMin = 1800; baseMax = 3800 }
    } else if (serviceType === 'emergency') {
      if (treeSize === 'small') { baseMin = 650; baseMax = 1200 }
      else if (treeSize === 'medium') { baseMin = 1200; baseMax = 2600 }
      else { baseMin = 2400; baseMax = 5200 }
    } else if (serviceType === 'trimming') {
      if (treeSize === 'small') { baseMin = 300; baseMax = 550 }
      else if (treeSize === 'medium') { baseMin = 550; baseMax = 1100 }
      else { baseMin = 1100; baseMax = 2200 }
    } else if (serviceType === 'claw') {
      baseMin = 450; baseMax = 1100
    } else if (serviceType === 'crane') {
      baseMin = 1500; baseMax = 4200
    }

    if (accessType === 'roof') {
      baseMin = Math.round(baseMin * 1.25)
      baseMax = Math.round(baseMax * 1.3)
    } else if (accessType === 'tight') {
      baseMin = Math.round(baseMin * 1.15)
      baseMax = Math.round(baseMax * 1.2)
    }

    if (urgency === 'emergency') {
      baseMin = Math.round(baseMin * 1.2)
      baseMax = Math.round(baseMax * 1.25)
    }

    return { min: baseMin, max: baseMax }
  }

  const estimate = calculateEstimate()

  const smsText = encodeURIComponent(
    siteConfig.lang === 'ru'
      ? `Здравствуйте, Керод! Онлайн расчет Hard Kor: Услуга: ${serviceType}, Размер: ${treeSize}, Доступ: ${accessType}, Срочность: ${urgency}. Ориентир: $${estimate.min}–$${estimate.max}. Адрес в Пинеллас:`
      : `Hello Karode! Online estimate from Hard Kor: Service: ${serviceType}, Size: ${treeSize}, Access: ${accessType}, Urgency: ${urgency}. Estimated range: $${estimate.min}–$${estimate.max}. Pinellas address:`
  )

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-[#090d16] border-b border-red-500/20 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-red-950/80 border border-red-700/60 px-3.5 py-1 text-xs font-bold text-red-300 mb-3 uppercase tracking-wider">
            <span>{siteConfig.lang === 'ru' ? 'Быстрый расчет сметы' : 'Instant Job Estimator'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {siteConfig.lang === 'ru' 
              ? 'Ориентировочная стоимость работ за 60 секунд' 
              : 'Calculate Your Tree Extraction & Storm Estimate'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            {siteConfig.lang === 'ru'
              ? 'Без скрытых наценок: укажите параметры задачи, получите прозрачный диапазон и отправьте фото напрямую Кероду Риду для точной фиксации сметы.'
              : 'Zero hidden fees: select project details to view an upfront range, then text job photos directly to Karode Reid for guaranteed quote.'}
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="bg-[#0f172a] rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Options Area (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Option 1: Service Type */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                  1. {siteConfig.lang === 'ru' ? 'Тип требуемой услуги' : 'Type of Service Needed'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'removal', label: siteConfig.lang === 'ru' ? 'Спил дерева' : 'Tree Removal' },
                    { id: 'emergency', label: siteConfig.lang === 'ru' ? 'Снятие с крыши' : 'Storm / Roof Strike' },
                    { id: 'trimming', label: siteConfig.lang === 'ru' ? 'Кронирование' : 'Crown Pruning' },
                    { id: 'claw', label: siteConfig.lang === 'ru' ? 'Вывоз ломовозом' : 'Claw-Truck Haul' },
                    { id: 'crane', label: siteConfig.lang === 'ru' ? 'Работа автокраном' : 'Crane Rigging' },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setServiceType(opt.id)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold transition text-left border ${
                        serviceType === opt.id
                          ? 'bg-red-600 text-white border-red-500 shadow-lg shadow-red-700/30'
                          : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Size & Scope */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                  2. {siteConfig.lang === 'ru' ? 'Диаметр ствола и высота' : 'Tree Caliber & Stature'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'small', label: siteConfig.lang === 'ru' ? 'До 25 фт' : 'Small (<25 ft)' },
                    { id: 'medium', label: siteConfig.lang === 'ru' ? '25–50 фт (дуб)' : 'Medium (25–50 ft)' },
                    { id: 'large', label: siteConfig.lang === 'ru' ? '50+ фт (гигант)' : 'Colossal (50+ ft)' },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setTreeSize(opt.id)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold transition text-center border ${
                        treeSize === opt.id
                          ? 'bg-red-600 text-white border-red-500 shadow-lg shadow-red-700/30'
                          : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 3: Access & Proximity */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                  3. {siteConfig.lang === 'ru' ? 'Сложность доступа и строения' : 'Proximity & Risk Hazards'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'open', label: siteConfig.lang === 'ru' ? 'Открытый газон' : 'Open Lawn' },
                    { id: 'tight', label: siteConfig.lang === 'ru' ? 'Узкий двор/забор' : 'Tight Zero-Lot' },
                    { id: 'roof', label: siteConfig.lang === 'ru' ? 'Над крышей/ЛЭП' : 'Over Roof / Wires' },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setAccessType(opt.id)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold transition text-center border ${
                        accessType === opt.id
                          ? 'bg-red-600 text-white border-red-500 shadow-lg shadow-red-700/30'
                          : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 4: Timing */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                  4. {siteConfig.lang === 'ru' ? 'Срочность мобилизации' : 'Mobilization Urgency'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'standard', label: siteConfig.lang === 'ru' ? 'Планово (1–3 дня)' : 'Standard (1–3 Days)' },
                    { id: 'emergency', label: siteConfig.lang === 'ru' ? 'Аварийно 24/7 (сейчас)' : 'Emergency 24/7 Immediate' },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setUrgency(opt.id)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold transition text-center border ${
                        urgency === opt.id
                          ? 'bg-red-600 text-white border-red-500 shadow-lg shadow-red-700/30'
                          : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Result Panel (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#131b2e] rounded-2xl border border-red-500/40 p-6 sm:p-7 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-300 bg-red-950 border border-red-800/80 px-2.5 py-1 rounded-md">
                  {siteConfig.lang === 'ru' ? 'Ориентировочный расчет' : 'Estimated Ballpark Range'}
                </span>

                <div className="mt-5">
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight font-mono text-red-400">
                    ${estimate.min} – ${estimate.max}
                  </div>
                  <div className="text-xs text-slate-300 mt-1.5">
                    {siteConfig.lang === 'ru' 
                      ? 'Включает арбористический спуск частями, распил стволов STIHL и уборку территории.' 
                      : 'Includes arborist friction lowering, heavy STIHL sectioning & rake cleanup.'}
                  </div>
                </div>

                <div className="mt-6 space-y-2.5 text-xs text-slate-300 border-t border-slate-800 pt-5">
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 font-bold">✓</span>
                    <span>{siteConfig.lang === 'ru' ? 'Осмотр и замер владельцем Керодом Ридом ($0)' : 'Direct Owner Assessment by Karode Reid ($0)'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 font-bold">✓</span>
                    <span>{siteConfig.lang === 'ru' ? 'Официальный запрет на взвинчивание цен в шторм' : 'Strict Zero Hurricane Price-Gouging Policy'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 font-bold">✓</span>
                    <span>{siteConfig.lang === 'ru' ? 'Вывоз многотонных бревен ломовозом-клешней' : 'Mechanized multi-ton claw-truck haul away'}</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-8 space-y-3">
                <a
                  href={`sms:${siteConfig.phoneRaw}?&body=${smsText}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black px-4 py-3.5 text-xs shadow-lg shadow-red-700/40 transition-all hover:scale-[1.02]"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>{siteConfig.lang === 'ru' ? 'Отправить расчет Кероду по SMS' : 'Text Estimate to Karode Reid'}</span>
                </a>

                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold px-4 py-3 text-xs border border-slate-700 transition"
                >
                  <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{siteConfig.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
