'use client'

import React, { useState } from 'react'
import { siteConfigReynoldsEn } from '../../siteConfig.reynolds.en'

export function ReynoldsCalculator({ config }: { config?: any }) {
  const siteConfig = config || siteConfigReynoldsEn

  const [serviceType, setServiceType] = useState('removal')
  const [projectScale, setProjectScale] = useState('medium')
  const [accessType, setAccessType] = useState('tight')
  const [urgency, setUrgency] = useState('standard')

  // Ballpark calculation logic for Sarasota County tree surgery & landscape upgrades
  const calculateEstimate = () => {
    let baseMin = 450
    let baseMax = 800

    if (serviceType === 'removal') {
      if (projectScale === 'small') { baseMin = 400; baseMax = 750 }
      else if (projectScale === 'medium') { baseMin = 800; baseMax = 1600 }
      else { baseMin = 1700; baseMax = 3500 }
    } else if (serviceType === 'oak-thinning') {
      if (projectScale === 'small') { baseMin = 450; baseMax = 850 }
      else if (projectScale === 'medium') { baseMin = 850; baseMax = 1800 }
      else { baseMin = 1800; baseMax = 3600 }
    } else if (serviceType === 'pool-clearance') {
      if (projectScale === 'small') { baseMin = 350; baseMax = 650 }
      else if (projectScale === 'medium') { baseMin = 650; baseMax = 1250 }
      else { baseMin = 1300; baseMax = 2400 }
    } else if (serviceType === 'hedge') {
      if (projectScale === 'small') { baseMin = 350; baseMax = 700 }
      else if (projectScale === 'medium') { baseMin = 700; baseMax = 1400 }
      else { baseMin = 1400; baseMax = 2800 }
    } else if (serviceType === 'palm-transplant') {
      if (projectScale === 'small') { baseMin = 600; baseMax = 1200 }
      else if (projectScale === 'medium') { baseMin = 1200; baseMax = 2500 }
      else { baseMin = 2500; baseMax = 5000 }
    } else if (serviceType === 'landscape-renovation') {
      if (projectScale === 'small') { baseMin = 900; baseMax = 1800 }
      else if (projectScale === 'medium') { baseMin = 1800; baseMax = 4200 }
      else { baseMin = 4200; baseMax = 9500 }
    }

    if (accessType === 'roof') {
      baseMin = Math.round(baseMin * 1.25)
      baseMax = Math.round(baseMax * 1.3)
    } else if (accessType === 'tight') {
      baseMin = Math.round(baseMin * 1.15)
      baseMax = Math.round(baseMax * 1.2)
    }

    if (urgency === 'urgent') {
      baseMin = Math.round(baseMin * 1.2)
      baseMax = Math.round(baseMax * 1.25)
    }

    return { min: baseMin, max: baseMax }
  }

  const estimate = calculateEstimate()

  const smsText = encodeURIComponent(
    siteConfig.lang === 'ru'
      ? `Здравствуйте, Роберт! Онлайн расчет со страницы Reynolds: Услуга: ${serviceType}, Масштаб: ${projectScale}, Доступ: ${accessType}, Срочность: ${urgency}. Ориентир сметы: $${estimate.min}–$${estimate.max}. Адрес объекта в Сарасоте:`
      : `Hello Rob! Online quote estimate from Reynolds page: Service: ${serviceType}, Scale: ${projectScale}, Access: ${accessType}, Urgency: ${urgency}. Estimated range: $${estimate.min}–$${estimate.max}. Property address in Sarasota:`
  )

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-[#080e1a] border-b border-sky-500/20 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-950/80 border border-sky-700/60 px-3.5 py-1 text-xs font-bold text-sky-300 mb-3 uppercase tracking-wider">
            <span>{siteConfig.lang === 'ru' ? 'Быстрый расчет сметы' : 'Instant Job Estimator'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {siteConfig.lang === 'ru' 
              ? 'Ориентировочная стоимость работ за 60 секунд' 
              : 'Calculate Your Tree Care & Landscape Estimate'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            {siteConfig.lang === 'ru'
              ? 'Как отмечает риелтор Трой Роббинс: цены Роберта выгоднее конкурентов при безупречном качестве. Рассчитайте вилку и отправьте фото напрямую Роберту Рейнольдсу.'
              : 'As confirmed by realtor Troy Robbins: our prices consistently beat competing bids with uncompromising quality. Select your scope and text photos to Rob.'}
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
                    { id: 'oak-thinning', label: siteConfig.lang === 'ru' ? 'Ветрозащита дубов' : 'Oak Thinning' },
                    { id: 'pool-clearance', label: siteConfig.lang === 'ru' ? 'Солнце у бассейна' : 'Pool Clearance' },
                    { id: 'hedge', label: siteConfig.lang === 'ru' ? 'Стрижка изгороди' : 'Hedge Trimming' },
                    { id: 'palm-transplant', label: siteConfig.lang === 'ru' ? 'Посадка пальм' : 'Palm Transplant' },
                    { id: 'landscape-renovation', label: siteConfig.lang === 'ru' ? 'Благоустройство' : 'Landscape Makeover' },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setServiceType(opt.id)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                        serviceType === opt.id
                          ? 'bg-gradient-to-r from-sky-600 to-emerald-600 text-white shadow-md shadow-sky-700/30 border border-sky-400'
                          : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800 border border-slate-800'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Project Scale */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                  2. {siteConfig.lang === 'ru' ? 'Размер дерева / Масштаб' : 'Tree Size / Project Scale'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'small', label: siteConfig.lang === 'ru' ? 'До 6 метров' : 'Small (<20 ft)' },
                    { id: 'medium', label: siteConfig.lang === 'ru' ? '6–15 метров' : 'Medium (20–45 ft)' },
                    { id: 'large', label: siteConfig.lang === 'ru' ? '15+ м / Поместье' : 'Large (45+ ft / Estate)' },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setProjectScale(opt.id)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-center ${
                        projectScale === opt.id
                          ? 'bg-gradient-to-r from-sky-600 to-emerald-600 text-white shadow-md border border-sky-400'
                          : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800 border border-slate-800'
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
                  3. {siteConfig.lang === 'ru' ? 'Сложность доступа и окружение' : 'Site Access & Proximity'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'open', label: siteConfig.lang === 'ru' ? 'Открытый газон' : 'Open Lawn' },
                    { id: 'tight', label: siteConfig.lang === 'ru' ? 'Забор / Бассейн' : 'Fence / Pool Cage' },
                    { id: 'roof', label: siteConfig.lang === 'ru' ? 'Над крышей дома' : 'Over Roofline' },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setAccessType(opt.id)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-center ${
                        accessType === opt.id
                          ? 'bg-gradient-to-r from-sky-600 to-emerald-600 text-white shadow-md border border-sky-400'
                          : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800 border border-slate-800'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 4: Urgency */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                  4. {siteConfig.lang === 'ru' ? 'Срочность выполнения' : 'Schedule Urgency'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'standard', label: siteConfig.lang === 'ru' ? 'Планово (на этой неделе)' : 'Standard (This Week)' },
                    { id: 'urgent', label: siteConfig.lang === 'ru' ? 'Срочно / До шторма' : 'Urgent / Pre-Storm Priority' },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setUrgency(opt.id)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-center ${
                        urgency === opt.id
                          ? 'bg-gradient-to-r from-sky-600 to-emerald-600 text-white shadow-md border border-sky-400'
                          : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800 border border-slate-800'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Output Area (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#080e1a] to-[#0c1424] p-6 sm:p-7 rounded-2xl border border-sky-500/30 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-400">
                    {siteConfig.lang === 'ru' ? 'Ориентировочная вилка' : 'Estimated Investment'}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Sarasota, FL</span>
                </div>

                <div className="mt-4 pb-4 border-b border-slate-800">
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    ${estimate.min} – ${estimate.max}
                  </div>
                  <p className="mt-1.5 text-[11px] text-slate-300 leading-snug">
                    {siteConfig.lang === 'ru'
                      ? 'Включает спил/обрезку, вывоз бревен челюстным захватом, чистку под грабли и утилизацию.'
                      : 'Includes bucket takedown, hydraulic log loading, thorough ground cleanup & haul-away.'}
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="text-emerald-400">✓</span>
                    <span>{siteConfig.lang === 'ru' ? 'Личный выезд и контроль Роба' : 'Personal direct oversight by Rob'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="text-emerald-400">✓</span>
                    <span>{siteConfig.lang === 'ru' ? 'Цены выгоднее конкурентов (кейс риелтора)' : 'Prices beat competing quotes (realtor verified)'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="text-emerald-400">✓</span>
                    <span>{siteConfig.lang === 'ru' ? 'Полная уборка под грабли и воздуходув' : 'Spotless rake & blow yard cleanup'}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-2.5 pt-4 border-t border-slate-800">
                <a
                  href={`sms:${siteConfig.phoneRaw}?&body=${smsText}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-600 hover:from-sky-400 hover:to-emerald-500 text-white font-black py-3 px-4 text-xs sm:text-sm shadow-lg shadow-sky-700/30 transition-all hover:scale-[1.02]"
                >
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>{siteConfig.lang === 'ru' ? 'Отправить фото Робу в SMS' : 'Text Photos to Rob for Quote'}</span>
                </a>

                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold py-2.5 px-4 text-xs transition-all"
                >
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{siteConfig.ui?.callRob || siteConfig.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
