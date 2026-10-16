'use client'

import React, { useState } from 'react'
import { siteConfigReynoldsEn } from '../../siteConfig.reynolds.en'

export function ReynoldsGallery({ config }: { config?: any }) {
  const siteConfig = config || siteConfigReynoldsEn
  const [activeFilter, setActiveFilter] = useState<'all' | 'trees' | 'palms' | 'machinery'>('all')

  const galleryItems = [
    {
      src: '/images/reynolds/fleet-truck-livery.jpg',
      category: 'machinery',
      title: siteConfig.lang === 'ru' ? 'Фирменный автопарк с номерами (941) 356-2761' : 'Official Reynolds Livery Fleet (941) 356-2761',
      caption: siteConfig.lang === 'ru' ? 'Собственный грузовик-тяжеловоз, полностью укомплектованный пилами STIHL и спецоборудованием.' : 'Company-owned commercial hauler truck fully outfitted with pro saws and extraction rigging.'
    },
    {
      src: '/images/reynolds/bucket-truck-action.jpg',
      category: 'trees',
      title: siteConfig.lang === 'ru' ? 'Автовышка 14+ метров над жилым домом' : 'Articulated Bucket Boom Over Roofline',
      caption: siteConfig.lang === 'ru' ? 'Безопасный спил нависающих крон над черепичной кровлей без риска падения веток.' : 'Aerial boom takedown of hazardous overhanging live oak limbs safely above residential tiles.'
    },
    {
      src: '/images/reynolds/log-grapple-heavy-timber.jpg',
      category: 'machinery',
      title: siteConfig.lang === 'ru' ? 'Челюстной захват бревен векового дуба' : 'Hydraulic Grapple Lifting Heavy Timber',
      caption: siteConfig.lang === 'ru' ? 'Механизированная погрузка многотонных стволов прямо с газона без повреждения дерна.' : 'Mechanized loading of colossal trunk sections cleanly off turf without wheel rutting.'
    },
    {
      src: '/images/reynolds/new-holland-palm-install.jpg',
      category: 'palms',
      title: siteConfig.lang === 'ru' ? 'Посадка крупномерной пальмы Bismarckia' : 'New Holland Loader Seating Giant Palm',
      caption: siteConfig.lang === 'ru' ? 'Погрузчик New Holland заводит многотонную экзотическую пальму с сохраненным корневым комом.' : 'Heavy compact loader transplanting colossal mature Bismarckia palm specimen into estate courtyard.'
    },
    {
      src: '/images/reynolds/arborist-climber-canopy.jpg',
      category: 'trees',
      title: siteConfig.lang === 'ru' ? 'Арборист на высоте с пилой STIHL' : 'Precision Canopy Arborist with STIHL Saw',
      caption: siteConfig.lang === 'ru' ? 'Высотное прореживание дуба перед ураганом для снятия парусности и защиты построек.' : 'High canopy selective crown reduction reducing wind resistance before hurricane season.'
    },
    {
      src: '/images/reynolds/commercial-mower-lawn.jpg',
      category: 'palms',
      title: siteConfig.lang === 'ru' ? 'Идеальный газон и уход за поместьями' : 'Commercial Zero-Turn Lawn Manicuring',
      caption: siteConfig.lang === 'ru' ? 'Преображение участка перед продажей: идеальные полосы, стрижка кромок и чистота.' : 'Curb appeal transformation favored by Sarasota realtors before listing properties.'
    }
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#0a1120] border-b border-sky-500/20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-950/80 border border-sky-700/60 px-3.5 py-1 text-xs font-bold text-sky-300 mb-3 uppercase tracking-wider">
            <span>{siteConfig.lang === 'ru' ? 'Фотохроника реальных работ' : 'Authentic Field Gallery'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {siteConfig.lang === 'ru' 
              ? 'Реальные объекты Robert Reynolds в Сарасоте' 
              : 'Authentic Sarasota Operations & Estate Transformations'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            {siteConfig.lang === 'ru'
              ? 'Только настоящие фотографии нашей техники, автовышки, посадки пальм и работ на участках клиентов в округе Сарасота.'
              : 'Zero stock photography. Real photos of our company-owned bucket boom, hydraulic grapples, palm loaders, and estate projects.'}
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: siteConfig.lang === 'ru' ? 'Все фотографии' : 'All Photos' },
              { id: 'trees', label: siteConfig.lang === 'ru' ? 'Спил и автовышка' : 'Tree Surgery & Boom' },
              { id: 'palms', label: siteConfig.lang === 'ru' ? 'Пальмы и ландшафт' : 'Palms & Curb Appeal' },
              { id: 'machinery', label: siteConfig.lang === 'ru' ? 'Парк спецтехники' : 'Heavy Equipment' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-gradient-to-r from-sky-500 to-emerald-600 text-white shadow-md shadow-sky-600/30'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0f172a] rounded-2xl border border-slate-800 overflow-hidden shadow-lg hover:border-sky-500/50 transition-all flex flex-col group"
            >
              <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
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
