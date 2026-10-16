'use client'

import React, { useState } from 'react'
import { siteConfigHardkorEn } from '../../siteConfig.hardkor.en'

export function HardkorGallery({ config }: { config?: any }) {
  const siteConfig = config || siteConfigHardkorEn
  const [activeFilter, setActiveFilter] = useState<'all' | 'storm' | 'climbing' | 'timber'>('all')

  const galleryItems = [
    {
      src: '/images/hardkor/milton-uprooted-oak-roof.jpg',
      category: 'storm',
      title: siteConfig.lang === 'ru' ? 'Ураган Milton: Дуб вырван с корнем на крышу' : 'Hurricane Milton: Uprooted Oak on Roof',
      caption: siteConfig.lang === 'ru' ? 'Многотонное дерево повалено на жилой дом в Сент-Питерсберге. Безопасное снятие без пролома стропил.' : 'Colossal live oak ripped from ground and landed on residential home. Extracted without structural collapse.'
    },
    {
      src: '/images/hardkor/climber-straddling-roof-trunk.jpg',
      category: 'climbing',
      title: siteConfig.lang === 'ru' ? 'Керод Рид на стволе над проломом' : 'Karode Reid Straddling Fallen Trunk',
      caption: siteConfig.lang === 'ru' ? 'Личный контроль на кровле: точный расчет напряжений перед контрольным спилом.' : 'Owner Karode personally securing rigging lines directly on the damaged roofline.'
    },
    {
      src: '/images/hardkor/climber-near-power-lines.jpg',
      category: 'climbing',
      title: siteConfig.lang === 'ru' ? 'Ювелирная работа у высоковольтных линий' : 'Zero-Tolerance Power Line Clearance',
      caption: siteConfig.lang === 'ru' ? 'Арборист на высоте среди опасных веток в считанных сантиметрах от проводов электропередач.' : 'Precise arborist climbing rigging in immediate proximity to energized utility conductors.'
    },
    {
      src: '/images/hardkor/cutting-colossal-stump-stihl.jpg',
      category: 'timber',
      title: siteConfig.lang === 'ru' ? 'Распил ствола-гиганта тяжелой пилой STIHL' : 'Dissecting Colossal Trunk with STIHL Pro Saw',
      caption: siteConfig.lang === 'ru' ? 'Ствол векового дуба диаметром более 1.5 метров разрезан вровень с грунтом.' : 'Heavy-displacement STIHL chainsaw making flush cuts on massive Florida live oak stump.'
    },
    {
      src: '/images/hardkor/climber-horizontal-oak-limb.jpg',
      category: 'climbing',
      title: siteConfig.lang === 'ru' ? 'Выход на горизонтальную ветвь над проездом' : 'Crawling Out on Extended Horizontal Limb',
      caption: siteConfig.lang === 'ru' ? 'Мастерство баланса и арбористического такелажа для разгрузки массивной кроны.' : 'Advanced rope access to trim heavy overhanging limbs without bucket truck access.'
    },
    {
      src: '/images/hardkor/trunk-rounds-between-houses.jpg',
      category: 'timber',
      title: siteConfig.lang === 'ru' ? 'Спил в узком проходе между домами' : 'Zero-Clearance Disassembly Between Homes',
      caption: siteConfig.lang === 'ru' ? 'Многотонный ствол распилен на аккуратные чурбаки в узком коридоре шириной 2 метра без единой царапины на фасадах.' : 'Massive oak segmented into clean rounds in a narrow corridor between two homes without touching siding.'
    },
    {
      src: '/images/hardkor/climber-over-roof-gutter.jpg',
      category: 'climbing',
      title: siteConfig.lang === 'ru' ? 'Спуск сучьев над водосточной системой' : 'Rope Rigging Suspended Over Roof Gutter',
      caption: siteConfig.lang === 'ru' ? 'Плавное стравливание спиленных веток на тормозном блоке без контакта с кровлей.' : 'Controlled friction lowering ensuring heavy branches never strike delicate aluminum gutters.'
    },
    {
      src: '/images/hardkor/storm-damage-blue-house.jpg',
      category: 'storm',
      title: siteConfig.lang === 'ru' ? 'Ликвидация последствий шторма' : 'Post-Hurricane Residential Tree Extraction',
      caption: siteConfig.lang === 'ru' ? 'Аварийный выезд сразу после урагана: расчистка подъездов и снятие угрозы повторных обрушений.' : 'Immediate post-storm emergency dispatch restoring safety and clearing driveways.'
    }
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#0b101d] border-b border-red-500/20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-red-950/80 border border-red-700/60 px-3.5 py-1 text-xs font-bold text-red-300 mb-3 uppercase tracking-wider">
            <span>{siteConfig.lang === 'ru' ? 'Реальные объекты и хроника' : 'Field Photo Documentation'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {siteConfig.lang === 'ru' 
              ? 'Хроника реальных работ Hard Kor в округе Пинеллас' 
              : 'Authentic Field Operations Across Pinellas County'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            {siteConfig.lang === 'ru'
              ? 'Никаких стоковых картинок. Только настоящие фото спасательных операций после ураганов Helene и Milton, сложнейшего арбористического лазания и распила стволов-великанов.'
              : 'Zero stock photos. Pure photographic evidence of hurricane extractions, precision line clearance, and extreme arborist rope access.'}
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: siteConfig.lang === 'ru' ? 'Все работы' : 'All Projects' },
            { id: 'storm', label: siteConfig.lang === 'ru' ? 'Ураганы Milton & Helene' : 'Storm & Roof Rescue' },
            { id: 'climbing', label: siteConfig.lang === 'ru' ? 'Арбористика и альпинизм' : 'Arborist Climbing' },
            { id: 'timber', label: siteConfig.lang === 'ru' ? 'Стволы-великаны и распил' : 'Heavy Timber & Saws' },
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === btn.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-700/40 border border-red-500'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0f172a] rounded-2xl border border-slate-800 overflow-hidden shadow-xl hover:border-red-500/50 hover:shadow-2xl transition-all group flex flex-col justify-between"
            >
              <div className="relative h-64 w-full bg-slate-900 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-white text-base leading-snug group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-400">
            {siteConfig.lang === 'ru'
              ? 'Нужно оценить сложность спила на вашем участке? Пришлите фото дерева напрямую Кероду Риду:'
              : 'Need an evaluation for tree hazard on your property? Send photos directly to Karode Reid:'}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`sms:${siteConfig.phoneRaw}?&body=Photos%20of%20tree%20for%20estimate:`}
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold px-5 py-2.5 text-xs shadow-md shadow-red-700/30 transition-all hover:scale-105"
            >
              <span>{siteConfig.lang === 'ru' ? 'Отправить фото по SMS' : 'Text Photos for Fast Estimate'}</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
