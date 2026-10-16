'use client'

import React from 'react'
import { StarRating } from '../StarRating'
import { siteConfigReynoldsEn } from '../../siteConfig.reynolds.en'

export function ReynoldsFooter({ config }: { config?: any }) {
  const siteConfig = config || siteConfigReynoldsEn

  return (
    <footer id="contact" className="bg-[#050811] text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-sky-500/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-500 to-emerald-600 text-white flex flex-col items-center justify-center font-black shadow-md border border-sky-400/40">
                <span className="text-[13px] tracking-tight leading-none">RRL</span>
                <span className="text-[7.5px] font-extrabold tracking-widest text-emerald-100 uppercase leading-none mt-0.5">ELITE</span>
              </div>
              <div>
                <span className="text-base font-black text-white block">
                  Robert Reynolds
                </span>
                <span className="text-xs text-emerald-400 font-medium">
                  {siteConfig.slogan}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {siteConfig.lang === 'ru'
                ? 'Профессиональный спил деревьев автовышкой, челюстной захват бревен, защита дубов от ураганов и комплексное благоустройство поместий в округе Сарасота.'
                : 'Articulated high-boom tree removal, hydraulic log loading, hurricane oak mitigation, and complete estate landscape curb appeal across Sarasota County.'}
            </p>

            <div className="flex items-center gap-2 text-xs">
              <StarRating value={siteConfig.ratingValue || 4.7} size="xs" />
              <span className="text-slate-400">({siteConfig.reviewCount} {siteConfig.lang === 'ru' ? 'отзывов в Google' : 'Google reviews'})</span>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {siteConfig.lang === 'ru' ? 'Специализированные услуги' : 'Core Services'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-sky-300 transition">
                  {siteConfig.lang === 'ru' ? 'Спил деревьев над крышами' : 'Hazardous Tree Removal'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition">
                  {siteConfig.lang === 'ru' ? 'Прореживание дубов к ураганам' : 'Hurricane Oak Thinning'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition">
                  {siteConfig.lang === 'ru' ? 'Солнце у бассейна над забором' : 'Pool & Fence Clearance'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition">
                  {siteConfig.lang === 'ru' ? 'Стрижка живых изгородей до 4м' : 'High-Reach Hedge Sculpting'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition">
                  {siteConfig.lang === 'ru' ? 'Высадка пальм New Holland' : 'Mature Palm Transplanting'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition">
                  {siteConfig.lang === 'ru' ? 'Преображение перед продажей' : 'Realtor Curb Appeal Makeovers'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact & Ashton HQ */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {siteConfig.lang === 'ru' ? 'Контакты и депо' : 'Dispatch & Depot'}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div>
                <span className="text-slate-400 block text-[11px]">
                  {siteConfig.lang === 'ru' ? 'Прямой вызов (на грузовике):' : 'Direct Dispatch Line:'}
                </span>
                <a href={`tel:${siteConfig.phoneRaw}`} className="text-sm font-black text-sky-400 hover:underline">
                  {siteConfig.phone}
                </a>
              </div>

              <div>
                <span className="text-slate-400 block text-[11px]">
                  {siteConfig.lang === 'ru' ? 'Городской офис:' : 'Main Office:'}
                </span>
                <a href={`tel:9419601147`} className="text-xs font-bold text-slate-200 hover:underline">
                  {siteConfig.phoneAlt}
                </a>
              </div>

              <div className="pt-1">
                <span className="text-slate-400 block text-[11px]">
                  {siteConfig.lang === 'ru' ? 'Операционная база (Ashton Center):' : 'Depot & Fleet Yard:'}
                </span>
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  {siteConfig.fullAddress}
                </a>
              </div>

              <div className="pt-1">
                <span className="text-slate-400 block text-[11px]">
                  {siteConfig.lang === 'ru' ? 'Часы работы:' : 'Hours of Operation:'}
                </span>
                <span className="text-slate-300">{siteConfig.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Network Hub & Credentials */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {siteConfig.lang === 'ru' ? 'Сеть All Florida' : 'Florida Network'}
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <p>
                {siteConfig.lang === 'ru'
                  ? 'Robert Reynolds Landscape, Inc. входит в каталог проверенных арбористических бригад All Florida Tree Care Network.'
                  : 'Robert Reynolds Landscape, Inc. is a vetted premier service partner in the All Florida Tree Care Network.'}
              </p>

              <div className="pt-2">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-sky-400 text-white font-bold px-4 py-2 text-xs transition"
                >
                  <span>←</span>
                  <span>{siteConfig.lang === 'ru' ? 'Все бригады Флориды' : 'All Florida Crews Hub'}</span>
                </a>
              </div>

              <div className="pt-2 text-[11px] text-emerald-400 font-semibold">
                ✓ {siteConfig.licenseBadge}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {siteConfig.legalName}. {siteConfig.lang === 'ru' ? 'Все права защищены.' : 'All rights reserved.'}
          </div>
          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-slate-400 transition">
              {siteConfig.lang === 'ru' ? 'Наверх ↑' : 'Back to Top ↑'}
            </a>
            <span>•</span>
            <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition">
              Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
