'use client'

import React from 'react'
import { siteConfigHardkorEn } from '../../siteConfig.hardkor.en'

export function HardkorSpecs({ config }: { config?: any }) {
  const siteConfig = config || siteConfigHardkorEn

  return (
    <section id="equipment" className="py-16 sm:py-24 bg-[#090d16] border-b border-red-500/20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-red-950/80 border border-red-700/60 px-3.5 py-1 text-xs font-bold text-red-300 mb-3 uppercase tracking-wider">
            <span>{siteConfig.lang === 'ru' ? 'Тяжелый арсенал и техника' : 'Elite Rigging & Extraction Fleet'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {siteConfig.lang === 'ru' 
              ? 'Промышленный захват, автокран и ручной арбористический альпинизм' 
              : 'Heavy Hydraulic Claw-Truck, Compact Cranes & Precision Tree Climbing'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            {siteConfig.lang === 'ru'
              ? 'Мы не нанимаем случайных субподрядчиков. Керод Рид лично руководит работами, совмещая механизированный вывоз ломовозом-клешней и сложнейший такелаж над крышами и линиями электропередач.'
              : 'Owner Karode Reid personally climbs and runs the site. We combine industrial knuckle-boom claw extraction with tight-space crane rigging and zero-footprint arborist rope work.'}
          </p>
        </div>

        {/* 4 Fleet & Rigging Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {siteConfig.equipment.map((item: any, idx: number) => (
            <div
              key={idx}
              className="bg-[#0f172a] rounded-2xl border border-slate-800 shadow-xl hover:border-red-500/50 transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Photo showcase with badge */}
                <div className="relative h-60 sm:h-72 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-black/30" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center rounded-lg bg-red-950/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-red-200 shadow-md border border-red-700/60">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Content info */}
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Spec Chips */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-5 border-t border-slate-800/80">
                    {item.specs.map((spec: any, sIdx: number) => (
                      <div key={sIdx} className="bg-slate-900/90 rounded-xl p-3 border border-slate-800">
                        <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                          {spec.label}
                        </div>
                        <div className="text-xs font-bold text-white mt-0.5 leading-snug">
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

        {/* Hurricane Milton & Helene Field Protocol Callout */}
        <div className="mt-12 bg-gradient-to-br from-[#131b2e] to-[#0f172a] rounded-2xl border border-red-500/30 p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                {siteConfig.lang === 'ru' ? 'Проверенный боевой опыт: Ураганы Helene и Milton' : 'Battle-Tested Field Experience: Hurricanes Helene & Milton'}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {siteConfig.lang === 'ru' 
                  ? 'Как снимаются упавшие дубы без повреждения кровли?' 
                  : 'How Do We Extract Crushed Oaks Without Roof Punctures?'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {siteConfig.lang === 'ru'
                  ? 'Когда многотонный вековой дуб раскалывается и падает на дом, хаотичный распил может разгрузить ветку и проломить стропила. Керод Рид крепит силовые тросы, разгружает напряжение в стволе домкратами и полиспастами, и по частям спускает бревна через направляющие блоки, сохраняя целостность водостоков и перекрытий.'
                  : 'When multi-ton live oaks crush residential roofs, cutting without calculating tension can violently spring the trunk through ceiling joists. Karode Reid secures dynamic arborist rigging, relieves stress with controlled wedge relief cuts, and lowers logs via friction blocks without collapsing roof gutters.'}
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3.5 text-sm shadow-lg shadow-red-700/40 transition-all hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{siteConfig.lang === 'ru' ? 'Вызвать Керода Рида' : 'Call Karode Reid Directly'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
