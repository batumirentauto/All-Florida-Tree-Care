'use client'

import React, { useState } from 'react'
import { getTheme } from './themes'

export function UniversalCalculator({ config, themeName }: { config: any; themeName?: string }) {
  const theme = getTheme(themeName || config.theme)

  const [serviceType, setServiceType] = useState('hazard-removal')
  const [treeSize, setTreeSize] = useState('medium')
  const [proximity, setProximity] = useState('tight')
  const [cleanup, setCleanup] = useState('full-haul')

  // Realist calculation logic
  const calculateEstimate = () => {
    let baseMin = 450
    let baseMax = 900

    if (serviceType === 'hazard-removal') {
      if (treeSize === 'small') { baseMin = 350; baseMax = 700 }
      else if (treeSize === 'medium') { baseMin = 750; baseMax = 1500 }
      else { baseMin = 1600; baseMax = 3600 }
    } else if (serviceType === 'pruning-trimming') {
      if (treeSize === 'small') { baseMin = 250; baseMax = 450 }
      else if (treeSize === 'medium') { baseMin = 450; baseMax = 850 }
      else { baseMin = 850; baseMax = 1800 }
    } else if (serviceType === 'stump-grinding') {
      if (treeSize === 'small') { baseMin = 150; baseMax = 300 }
      else if (treeSize === 'medium') { baseMin = 280; baseMax = 550 }
      else { baseMin = 550; baseMax = 1200 }
    } else if (serviceType === 'brush-chipping') {
      if (treeSize === 'small') { baseMin = 200; baseMax = 400 }
      else if (treeSize === 'medium') { baseMin = 400; baseMax = 800 }
      else { baseMin = 800; baseMax = 1600 }
    }

    if (proximity === 'roofline') {
      baseMin = Math.round(baseMin * 1.3)
      baseMax = Math.round(baseMax * 1.35)
    } else if (proximity === 'tight') {
      baseMin = Math.round(baseMin * 1.15)
      baseMax = Math.round(baseMax * 1.2)
    }

    if (cleanup === 'keep-wood') {
      baseMin = Math.round(baseMin * 0.9)
      baseMax = Math.round(baseMax * 0.92)
    }

    return { min: baseMin, max: baseMax }
  }

  const estimate = calculateEstimate()

  const serviceOptions = config.lang === 'ru' ? [
    { id: 'hazard-removal', label: 'Удаление дерева', desc: 'Безопасный спил сухостоя или аварийного ствола' },
    { id: 'pruning-trimming', label: 'Санитарная обрезка', desc: 'Формирование кроны, удаление опасных сучьев' },
    { id: 'stump-grinding', label: 'Дробление пня', desc: 'Измельчение пня на глубину ниже уровня газона' },
    { id: 'brush-chipping', label: 'Измельчение веток', desc: 'Переработка завалов веток и спила в щепу' },
  ] : [
    { id: 'hazard-removal', label: 'Tree Removal', desc: 'Controlled takedown of dead or hazardous trees' },
    { id: 'pruning-trimming', label: 'Pruning & Trimming', desc: 'Crown thinning, deadwooding & elevation' },
    { id: 'stump-grinding', label: 'Stump Grinding', desc: 'Below-grade root ball and stump pulverization' },
    { id: 'brush-chipping', label: 'Brush Chipping', desc: 'High-volume branch pile chipping & clearing' },
  ]

  const sizeOptions = config.lang === 'ru' ? [
    { id: 'small', label: 'Небольшое (до 6 м)', desc: 'Пальма, декоративное или молодое дерево' },
    { id: 'medium', label: 'Среднее (6–15 м)', desc: 'Стандартное зрелое дерево во дворе' },
    { id: 'large', label: 'Крупное (от 15+ м)', desc: 'Высокая сосна, дуб или массивный ствол' },
  ] : [
    { id: 'small', label: 'Small (Under 20 ft)', desc: 'Palm, ornamental, or young fruit tree' },
    { id: 'medium', label: 'Medium (20–50 ft)', desc: 'Standard mature residential yard tree' },
    { id: 'large', label: 'Large (50+ ft)', desc: 'Colossal pine, live oak or hazardous giant' },
  ]

  const proximityOptions = config.lang === 'ru' ? [
    { id: 'open', label: 'Свободный доступ', desc: 'Вдали от заборов, проводов и построек' },
    { id: 'tight', label: 'Ограниченный доступ', desc: 'Рядом с забором, клумбами или воротами' },
    { id: 'roofline', label: 'Вплотную к дому / ЛЭП', desc: 'Нависает над крышей или электропроводами' },
  ] : [
    { id: 'open', label: 'Open Yard Space', desc: 'Clear perimeter away from any buildings' },
    { id: 'tight', label: 'Tight Property Access', desc: 'Near fences, garden beds or tight side gates' },
    { id: 'roofline', label: 'Over Roof / Powerlines', desc: 'Complex rigging required to protect structures' },
  ]

  const cleanupOptions = config.lang === 'ru' ? [
    { id: 'full-haul', label: 'Полный вывоз и уборка', desc: 'Ветки в щепорез, чисто граблями и воздуходувкой' },
    { id: 'keep-wood', label: 'Оставить дрова на участке', desc: 'Ствол распиливается на чурки для камина' },
  ] : [
    { id: 'full-haul', label: 'Full Haul & Spotless Rake', desc: 'All limbs chipped and hauled, turf raked' },
    { id: 'keep-wood', label: 'Keep Firewood Rounds', desc: 'Trunk bucked into manageable firewood logs' },
  ]

  return (
    <section id="calculator" className={`py-16 sm:py-24 ${theme.bgBody} border-b ${theme.borderSubtle} text-white`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-1.5 rounded-full ${theme.badgeBg} ${theme.badgeBorder} border px-3.5 py-1 text-xs font-bold ${theme.badgeText} mb-3 uppercase tracking-wider`}>
            <span>{config.lang === 'ru' ? 'Экспресс-расчет стоимости' : '10-Second Price Estimator'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {config.lang === 'ru' ? 'Узнайте ориентировочную вилку цен онлайн' : 'Calculate Your Tree Care Estimate Instantly'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            {config.lang === 'ru' 
              ? 'Выберите параметры задачи для мгновенного предварительного ориентира без скрытых наценок.'
              : 'Select your project scope below to view transparent ballpark pricing before our in-person visit.'}
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls (8 cols) */}
          <div className={`lg:col-span-8 ${theme.bgCard} rounded-2xl border ${theme.borderSubtle} p-6 sm:p-8 space-y-8 shadow-xl`}>
            {/* Step 1: Service Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                1. {config.lang === 'ru' ? 'Тип требуемой услуги' : 'Select Required Service'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setServiceType(opt.id)}
                    className={`text-left p-3.5 rounded-xl border transition-all ${
                      serviceType === opt.id
                        ? `${theme.badgeBg} ${theme.borderAccent} ring-1 ${theme.name === 'sky' ? 'ring-sky-500' : theme.name === 'amber' ? 'ring-amber-500' : theme.name === 'teal' ? 'ring-teal-500' : 'ring-emerald-500'}`
                        : `${theme.bgCardAlt} border-slate-800 hover:border-slate-700`
                    }`}
                  >
                    <div className="font-bold text-sm text-white">{opt.label}</div>
                    <div className="text-[11px] text-slate-400 mt-1">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Tree Size */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                2. {config.lang === 'ru' ? 'Высота и масштаб дерева' : 'Tree Height & Dimensions'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {sizeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setTreeSize(opt.id)}
                    className={`text-left p-3.5 rounded-xl border transition-all ${
                      treeSize === opt.id
                        ? `${theme.badgeBg} ${theme.borderAccent} ring-1 ${theme.name === 'sky' ? 'ring-sky-500' : theme.name === 'amber' ? 'ring-amber-500' : theme.name === 'teal' ? 'ring-teal-500' : 'ring-emerald-500'}`
                        : `${theme.bgCardAlt} border-slate-800 hover:border-slate-700`
                    }`}
                  >
                    <div className="font-bold text-sm text-white">{opt.label}</div>
                    <div className="text-[11px] text-slate-400 mt-1">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Proximity & Access */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                3. {config.lang === 'ru' ? 'Сложность доступа и препятствия' : 'Site Hazards & Access Proximity'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {proximityOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setProximity(opt.id)}
                    className={`text-left p-3.5 rounded-xl border transition-all ${
                      proximity === opt.id
                        ? `${theme.badgeBg} ${theme.borderAccent} ring-1 ${theme.name === 'sky' ? 'ring-sky-500' : theme.name === 'amber' ? 'ring-amber-500' : theme.name === 'teal' ? 'ring-teal-500' : 'ring-emerald-500'}`
                        : `${theme.bgCardAlt} border-slate-800 hover:border-slate-700`
                    }`}
                  >
                    <div className="font-bold text-sm text-white">{opt.label}</div>
                    <div className="text-[11px] text-slate-400 mt-1">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Debris Cleanup */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                4. {config.lang === 'ru' ? 'Уборка порубочных остатков' : 'Debris & Wood Disposal'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cleanupOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setCleanup(opt.id)}
                    className={`text-left p-3.5 rounded-xl border transition-all ${
                      cleanup === opt.id
                        ? `${theme.badgeBg} ${theme.borderAccent} ring-1 ${theme.name === 'sky' ? 'ring-sky-500' : theme.name === 'amber' ? 'ring-amber-500' : theme.name === 'teal' ? 'ring-teal-500' : 'ring-emerald-500'}`
                        : `${theme.bgCardAlt} border-slate-800 hover:border-slate-700`
                    }`}
                  >
                    <div className="font-bold text-sm text-white">{opt.label}</div>
                    <div className="text-[11px] text-slate-400 mt-1">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Estimate Card (4 cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            <div className={`${theme.bgCard} rounded-2xl border ${theme.borderAccent} p-6 sm:p-7 shadow-2xl relative overflow-hidden`}>
              <div className={`text-xs font-bold uppercase tracking-wider ${theme.badgeText} mb-2`}>
                {config.lang === 'ru' ? 'Ориентировочная смета' : 'Estimated Price Range'}
              </div>

              <div className="flex items-baseline gap-2 my-3">
                <span className="text-3xl sm:text-4xl font-black text-white">
                  ${estimate.min} – ${estimate.max}
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {config.lang === 'ru'
                  ? 'Итоговая цена подтверждается при визуальном осмотре или по фото. Никаких скрытых сборов за утилизацию.'
                  : 'Confirmed in writing during our free on-site consultation or immediate photo review. Zero surprise fees.'}
              </p>

              <div className="mt-6 space-y-2.5">
                <a
                  href={`tel:${config.phoneRaw}`}
                  className={`w-full flex items-center justify-center gap-2 rounded-xl ${theme.btnPrimary} ${theme.btnPrimaryHover} text-white font-bold py-3.5 text-sm shadow-md ${theme.btnShadow} transition-all`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{config.lang === 'ru' ? 'Заказать выезд:' : 'Call'} {config.phone}</span>
                </a>

                <a
                  href={`sms:${config.phoneRaw}?&body=${encodeURIComponent(
                    config.lang === 'ru'
                      ? `Здравствуйте! Мой ориентир по калькулятору $${estimate.min}-$${estimate.max}. Хочу отправить фото дерева:`
                      : `Hello, my calculator estimate was $${estimate.min}-$${estimate.max}. Here are photos of the tree:`
                  )}`}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold py-3 text-sm border border-slate-700 transition-all"
                >
                  <svg className={`w-4 h-4 ${theme.accentText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>{config.lang === 'ru' ? 'Отправить фото по SMS' : 'Text Photos for Fast Quote'}</span>
                </a>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${theme.name === 'sky' ? 'bg-sky-400' : theme.name === 'amber' ? 'bg-amber-400' : theme.name === 'teal' ? 'bg-teal-400' : 'bg-emerald-400'}`}></span>
                <span>{config.lang === 'ru' ? 'Бесплатный расчет за 15 минут' : '15-Minute Response Time'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
