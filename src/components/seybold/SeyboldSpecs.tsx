'use client'

import React from 'react'
import Image from 'next/image'
import { siteConfigSeyboldEn } from '../../siteConfig.seybold.en'

export function SeyboldSpecs({ config }: { config?: any }) {
  const siteConfig = config || siteConfigSeyboldEn

  return (
    <section id="equipment" className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 border border-emerald-300/80 px-3 py-1 text-xs font-bold text-emerald-900 mb-3">
            <span>{siteConfig.lang === 'ru' ? 'Техническое превосходство' : 'The SPS Precision Standard'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {siteConfig.lang === 'ru' 
              ? 'Промышленная мощность без ущерба для вашего газона' 
              : 'Industrial Power Engineered to Protect Your Lawn'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {siteConfig.lang === 'ru'
              ? 'Вместо 4-тонных колесных машин, распахивающих дерн, мы инвестировали в компактную гусеничную технику Vermeer и специализированные вышки, сохраняющие ландшафт в первозданном виде.'
              : 'Instead of heavy wheeled tractors that tear deep ruts into Florida sod, we deploy compact tracked Vermeer engineering and stabilized aerial lifts designed for zero turf damage.'}
          </p>
        </div>

        {/* 4 Equipment & Engineering Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {siteConfig.equipment.map((item: any, idx: number) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Photo showcase with badge */}
                <div className="relative h-56 sm:h-64 w-full bg-slate-100 overflow-hidden group">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center rounded-md bg-white/95 backdrop-blur-sm px-2.5 py-1 text-xs font-bold text-emerald-900 shadow-xs border border-slate-200/60">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Content info */}
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Spec Chips */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t border-slate-100">
                    {item.specs.map((spec: any, sIdx: number) => (
                      <div key={sIdx} className="bg-slate-50 rounded-xl p-2.5 border border-slate-200/70">
                        <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                          {spec.label}
                        </div>
                        <div className="text-xs font-bold text-slate-800 mt-0.5 leading-snug">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Comparison Callout */}
        <div className="mt-12 bg-white rounded-2xl border border-emerald-200 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                {siteConfig.lang === 'ru' ? 'Практическое сравнение' : 'Practical Property Protection'}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {siteConfig.lang === 'ru' 
                  ? 'Почему гусеничный Vermeer CTX100 лучше колесного трактора?' 
                  : 'Why Does Tracked Vermeer Beat Conventional Wheeled Loaders?'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {siteConfig.lang === 'ru'
                  ? 'Колесный погрузчик при резком повороте точечно давит на грунт с силой до 40+ PSI, срезая дерн до корней и повреждая трубы полива. Гусеницы Vermeer распределяют нагрузку всего до 3.8–4.5 PSI — это легче шага взрослого человека. Бревна вывозятся быстро, а лужайка остается ровной и зеленой.'
                  : 'Traditional skid steers exert 35–45+ PSI through 4 rubber tires during zero-point turns, slicing through grass roots and crushing sprinkler lines. Vermeer rubber tracks disperse operating weight down to ~4.0 PSI—less ground pressure than an adult human footprint.'}
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="#calculator"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-3 text-xs shadow-md shadow-emerald-700/20 transition-all"
              >
                <span>{siteConfig.lang === 'ru' ? 'Рассчитать выезд бригады' : 'Get Lawn-Safe Estimate'}</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
