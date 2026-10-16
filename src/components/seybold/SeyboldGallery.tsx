'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { siteConfigSeyboldEn } from '../../siteConfig.seybold.en'

export function SeyboldGallery({ config }: { config?: any }) {
  const siteConfig = config || siteConfigSeyboldEn
  const [activeFilter, setActiveFilter] = useState<'all' | 'trees' | 'equipment' | 'property'>('all')

  const galleryItems = [
    {
      src: '/images/seybold/giant-stump-stihl-chainsaw.jpg',
      category: 'trees',
      title: siteConfig.lang === 'ru' ? 'Спил дуба-великана шиной STIHL' : 'Giant Live Oak Dismantled with STIHL Saw',
      caption: siteConfig.lang === 'ru' ? 'Ствол диаметром более 1.5 метра (обхват 15 футов под строительство бассейна)' : 'Trunk over 5 feet across cleared for backyard pool installation'
    },
    {
      src: '/images/seybold/fence-stump-grinding.jpg',
      category: 'equipment',
      title: siteConfig.lang === 'ru' ? 'Дробление пня вплотную к забору' : 'Tight Fence-Line Stump Grinding',
      caption: siteConfig.lang === 'ru' ? 'Гидравлическая фреза Vermeer работает в сантиметрах от сетки-рабицы' : 'Vermeer hydraulic cutter pulverizes roots right along fence posts'
    },
    {
      src: '/images/seybold/crew-trucks-fleet.jpg',
      category: 'equipment',
      title: siteConfig.lang === 'ru' ? 'Автопарк пикапов и прицепов' : 'Toyota Tundra & Nissan Titan Fleet',
      caption: siteConfig.lang === 'ru' ? 'Тяжелые тягачи и платформы для оперативной перевозки оборудования' : 'Heavy haulers and dual-axle trailers ready for fast deployment'
    },
    {
      src: '/images/seybold/tree-dismantling.jpg',
      category: 'trees',
      title: siteConfig.lang === 'ru' ? 'Секционное кронирование дуба' : 'Precision Sectional Canopy Pruning',
      caption: siteConfig.lang === 'ru' ? 'Аккуратный спил крупных сучьев без риска падения на строения' : 'Careful limb rigging in dense foliage to safeguard structures'
    },
    {
      src: '/images/seybold/commercial-mower-estate.jpg',
      category: 'property',
      title: siteConfig.lang === 'ru' ? 'Уход за дубовой рощей и поместьем' : 'Commercial Mowing in Oak Grove',
      caption: siteConfig.lang === 'ru' ? 'Профессиональная косилка Wright Stander X на просторных угодьях' : 'High-capacity stand-on mowing maintaining Florida acreage'
    },
    {
      src: '/images/seybold/sps-yard-sign.jpg',
      category: 'property',
      title: siteConfig.lang === 'ru' ? 'Безупречная уборка и фирменный знак' : 'Spotless Lawn & Official SPS Sign',
      caption: siteConfig.lang === 'ru' ? '«No Problems. Only Solutions.» Чисто выметенный и прогребенный газон' : 'Raked, blown, and spotless property following tree extraction'
    },
    {
      src: '/images/seybold/ryan-vermeer-stump.jpg',
      category: 'equipment',
      title: siteConfig.lang === 'ru' ? 'Райан Сейболд за пультом Vermeer' : 'Owner Ryan Operating Vermeer',
      caption: siteConfig.lang === 'ru' ? 'Личный контроль качества на каждом объекте' : 'Hands-on leadership and precision machine control on site'
    },
    {
      src: '/images/seybold/bucket-lift-canopy.jpg',
      category: 'trees',
      title: siteConfig.lang === 'ru' ? 'Высотные работы в люльке' : 'High Bucket Lift Canopy Thinning',
      caption: siteConfig.lang === 'ru' ? 'Безопасное удаление опасных верхушечных ветвей' : 'Safely accessing structural limbs 50+ feet aloft'
    }
  ]

  const filteredItems = galleryItems.filter(item => activeFilter === 'all' || item.category === activeFilter)

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 border border-emerald-300/80 px-3 py-1 text-xs font-bold text-emerald-900 mb-3">
            <span>{siteConfig.lang === 'ru' ? 'Реальные объекты и техника' : 'Real Equipment & Job Sites'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {siteConfig.lang === 'ru' 
              ? 'Фотографии наших работ в округах Манати и Сарасота' 
              : 'Our Projects Across Manatee & Sarasota Counties'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {siteConfig.lang === 'ru'
              ? 'Никаких стоковых картинок: настоящая техника Seybold Property Solutions в деле.'
              : 'Zero stock imagery: actual photographic documentation of our crew, Vermeer tracked loader, and fleet.'}
          </p>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: siteConfig.lang === 'ru' ? 'Все фото (8)' : 'All Photos (8)' },
              { id: 'trees', label: siteConfig.lang === 'ru' ? 'Спил и кронирование' : 'Tree Removal & Pruning' },
              { id: 'equipment', label: siteConfig.lang === 'ru' ? 'Спецтехника и Vermeer' : 'Machinery & Fleet' },
              { id: 'property', label: siteConfig.lang === 'ru' ? 'Благоустройство и газоны' : 'Property & Lawn' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow group flex flex-col justify-between"
            >
              <div className="relative h-60 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
