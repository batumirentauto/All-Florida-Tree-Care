'use client'

import React, { useState } from 'react'
import { siteConfigSeyboldEn } from '../../siteConfig.seybold.en'

export function SeyboldCalculator({ config }: { config?: any }) {
  const siteConfig = config || siteConfigSeyboldEn

  const [serviceType, setServiceType] = useState('removal')
  const [treeSize, setTreeSize] = useState('medium')
  const [accessType, setAccessType] = useState('easy')
  const [urgency, setUrgency] = useState('standard')

  // Ballpark calculation logic based on Florida local tree service economics
  const calculateEstimate = () => {
    let baseMin = 350
    let baseMax = 600

    if (serviceType === 'removal') {
      if (treeSize === 'small') { baseMin = 350; baseMax = 700 }
      else if (treeSize === 'medium') { baseMin = 750; baseMax = 1500 }
      else { baseMin = 1600; baseMax = 3200 }
    } else if (serviceType === 'stump') {
      if (treeSize === 'small') { baseMin = 150; baseMax = 250 }
      else if (treeSize === 'medium') { baseMin = 250; baseMax = 450 }
      else { baseMin = 450; baseMax = 800 }
    } else if (serviceType === 'moss') {
      if (treeSize === 'small') { baseMin = 300; baseMax = 500 }
      else if (treeSize === 'medium') { baseMin = 500; baseMax = 950 }
      else { baseMin = 950; baseMax = 1800 }
    } else if (serviceType === 'emergency') {
      baseMin = 850; baseMax = 2200
    } else if (serviceType === 'renovation') {
      baseMin = 900; baseMax = 2800
    }

    if (accessType === 'fence') {
      baseMin = Math.round(baseMin * 1.15)
      baseMax = Math.round(baseMax * 1.2)
    } else if (accessType === 'backyard') {
      baseMin = Math.round(baseMin * 1.1)
      baseMax = Math.round(baseMax * 1.15)
    }

    if (urgency === 'emergency') {
      baseMin = Math.round(baseMin * 1.25)
      baseMax = Math.round(baseMax * 1.3)
    }

    return { min: baseMin, max: baseMax }
  }

  const estimate = calculateEstimate()

  const smsText = encodeURIComponent(
    siteConfig.lang === 'ru'
      ? `Здравствуйте, Райан! Расчет с сайта Seybold: Услуга: ${serviceType}, Размер: ${treeSize}, Доступ: ${accessType}, Срочность: ${urgency}. Ориентир сметы: $${estimate.min}–$${estimate.max}. Хочу вызвать Айреса на бесплатный осмотр:`
      : `Hello Ryan! Online estimate from Seybold: Service: ${serviceType}, Size: ${treeSize}, Access: ${accessType}, Urgency: ${urgency}. Estimated range: $${estimate.min}–$${estimate.max}. Requesting a free onsite visit:`
  )

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-emerald-50/40 border-b border-slate-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 border border-emerald-300/80 px-3 py-1 text-xs font-bold text-emerald-900 mb-2">
            <span>{siteConfig.lang === 'ru' ? 'Быстрый предварительный расчет' : 'Instant Job Estimator'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {siteConfig.lang === 'ru' 
              ? 'Оцените стоимость работ за 1 минуту' 
              : 'Calculate Your Tree Care & Property Estimate'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            {siteConfig.lang === 'ru'
              ? 'Без обязательств: выберите параметры, узнайте ориентир и отправьте фото Райану Сейболду для подтверждения фиксированной сметы.'
              : 'No obligation: select your project specs to see a transparent ballpark range, then text photos to Ryan for an exact quote.'}
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Options Area (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Option 1: Service Type */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  1. {siteConfig.lang === 'ru' ? 'Тип требуемой услуги' : 'Type of Service Needed'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'removal', label: siteConfig.lang === 'ru' ? 'Спил дерева' : 'Tree Removal' },
                    { id: 'stump', label: siteConfig.lang === 'ru' ? 'Дробление пня' : 'Stump Grinding' },
                    { id: 'moss', label: siteConfig.lang === 'ru' ? 'Очистка от мха' : 'Moss Removal' },
                    { id: 'emergency', label: siteConfig.lang === 'ru' ? 'Экстренный спил' : 'Emergency 24/7' },
                    { id: 'renovation', label: siteConfig.lang === 'ru' ? 'Расчистка двора' : 'Yard Renovation' },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setServiceType(opt.id)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold transition text-left border ${
                        serviceType === opt.id
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Size & Scope */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  2. {siteConfig.lang === 'ru' ? 'Размер дерева / масштаб' : 'Tree Size / Project Scope'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'small', label: siteConfig.lang === 'ru' ? 'Малое (<25 фт)' : 'Small (<25 ft)' },
                    { id: 'medium', label: siteConfig.lang === 'ru' ? 'Среднее (25–50 фт)' : 'Medium (25–50 ft)' },
                    { id: 'large', label: siteConfig.lang === 'ru' ? 'Гигант (50+ фт)' : 'Large / Giant (50+ ft)' },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setTreeSize(opt.id)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold transition text-center border ${
                        treeSize === opt.id
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 3: Access & Proximity */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  3. {siteConfig.lang === 'ru' ? 'Доступность и окружение' : 'Property Access & Proximity'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'easy', label: siteConfig.lang === 'ru' ? 'Открытый двор' : 'Open Front Yard' },
                    { id: 'backyard', label: siteConfig.lang === 'ru' ? 'Задний двор (калитка)' : 'Backyard Gate' },
                    { id: 'fence', label: siteConfig.lang === 'ru' ? 'Вплотную к забору' : 'Tight to Fence/Pool' },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setAccessType(opt.id)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold transition text-center border ${
                        accessType === opt.id
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 4: Timing */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  4. {siteConfig.lang === 'ru' ? 'Сроки выезда' : 'Scheduling Urgency'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'standard', label: siteConfig.lang === 'ru' ? 'Плановый выезд (1–3 дня)' : 'Standard (1–3 Days)' },
                    { id: 'emergency', label: siteConfig.lang === 'ru' ? 'Срочно / Сегодня 24/7' : 'Emergency Same-Day 24/7' },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setUrgency(opt.id)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold transition text-center border ${
                        urgency === opt.id
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Result Panel (5 cols) */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-emerald-200 p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-md">
                  {siteConfig.lang === 'ru' ? 'Предварительный ориентир' : 'Estimated Ballpark Range'}
                </span>

                <div className="mt-4">
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-mono">
                    ${estimate.min} – ${estimate.max}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {siteConfig.lang === 'ru' 
                      ? 'Включает работу техники Vermeer, вывоз остатков и уборку газона.' 
                      : 'Includes Vermeer tracked machinery, full debris hauling & blow cleanup.'}
                  </div>
                </div>

                <div className="mt-6 space-y-2 text-xs text-slate-600 border-t border-slate-200 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{siteConfig.lang === 'ru' ? 'Выезд оценщика Айреса — $0 (бесплатно)' : 'Free Onsite Assessment by Aires ($0)'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{siteConfig.lang === 'ru' ? 'Гарантия сохранности дерна без колеи' : 'Turf protection guarantee (zero ruts)'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{siteConfig.lang === 'ru' ? 'Скидка при заказе спила + дробления' : 'Combined tree removal + stump discount'}</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-8 space-y-2.5">
                <a
                  href={`sms:${siteConfig.phoneRaw}?&body=${smsText}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-3 text-xs shadow-md shadow-emerald-700/20 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>{siteConfig.lang === 'ru' ? 'Отправить расчет Райану по SMS' : 'Text Estimate to Ryan Seybold'}</span>
                </a>

                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold px-4 py-3 text-xs border border-slate-300 transition"
                >
                  <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{siteConfig.lang === 'ru' ? `Позвонить: ${siteConfig.phone}` : `Call: ${siteConfig.phone}`}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
