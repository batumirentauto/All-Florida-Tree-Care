'use client'

import React from 'react'
import { StarRating } from '../StarRating'
import { siteConfigMyersEn } from '../../siteConfig.myers.en'

export function MyersFooter({ config }: { config?: any }) {
  const siteConfig = config || siteConfigMyersEn

  return (
    <footer id="contact" className="bg-[#040914] text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-sky-500/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-sky-950/80">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white flex flex-col items-center justify-center font-black shadow-md border border-sky-400/40">
                <span className="text-[13px] tracking-tight leading-none">PMT</span>
                <span className="text-[7.5px] font-extrabold tracking-widest text-sky-100 uppercase leading-none mt-0.5">COOS</span>
              </div>
              <div>
                <span className="text-base font-black text-white block">
                  Patrick Myers
                </span>
                <span className="text-xs text-sky-400 font-medium">
                  {siteConfig.slogan}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {siteConfig.lang === 'ru'
                ? 'Профессиональный спил аварийных деревьев автовышкой, безопасный спуск сухих кедров, масштабная расчистка 30+ деревьев и измельчение веток в Coos Bay.'
                : 'Professional hazardous tree removal by aerial boom, precision dying cedar surgery, 30+ tree commercial clearing, and high-volume chipping in Coos Bay.'}
            </p>

            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-sky-300 transition"
            >
              <span className="font-semibold text-white">Google Maps</span>
              <StarRating value={siteConfig.ratingValue || 4.7} size="xs" />
              <span className="text-slate-400">({siteConfig.reviewCount} {siteConfig.lang === 'ru' ? 'отзывов' : 'reviews'})</span>
            </a>
          </div>

          {/* Col 2: Services Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {siteConfig.lang === 'ru' ? 'Специализированные услуги' : 'Core Services'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-sky-300 transition">
                  {siteConfig.lang === 'ru' ? 'Спил аварийных деревьев' : 'Hazardous Coastal Tree Removal'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition">
                  {siteConfig.lang === 'ru' ? 'Удаление сухих кедров' : 'Dying Western Red Cedar Surgery'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition">
                  {siteConfig.lang === 'ru' ? 'Комплексы 30+ деревьев' : 'Commercial Complex Clearance'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition">
                  {siteConfig.lang === 'ru' ? 'Дробление веток щепорезом' : 'High-Capacity Wood Chipping'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition">
                  {siteConfig.lang === 'ru' ? 'Дробление пней вглубь' : 'Subsurface Stump Grinding'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Territory Coverage */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {siteConfig.lang === 'ru' ? 'Зона обслуживания' : 'Service Coverage'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Coos Bay (HQ on S 2nd St, 97420)</li>
              <li>North Bend & Airport Area (97459)</li>
              <li>Bandon-by-the-Sea (97411)</li>
              <li>Coquille & Myrtle Point (97423)</li>
              <li>Charleston Harbor & Shore Acres (97420)</li>
              <li>Lakeside & Tenmile Lake (97449)</li>
            </ul>
          </div>

          {/* Col 4: Contacts & Direct Dispatch */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {siteConfig.lang === 'ru' ? 'Связь с Патриком Майерсом' : 'Direct Dispatch'}
            </h4>
            <div className="text-xs text-slate-300 space-y-1">
              <div className="font-bold text-white">{siteConfig.legalName}</div>
              <div className="text-slate-400">{siteConfig.fullAddress}</div>
              <div className="text-sky-400 font-mono text-sm pt-1 font-bold">
                {siteConfig.phone}
              </div>
              <div className="text-[11px] text-slate-400 pt-1">
                {siteConfig.workingHours}
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold py-2.5 px-4 text-xs shadow-md hover:from-sky-400 hover:to-blue-500 transition"
              >
                <span>{siteConfig.ui?.callPat || siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom micro bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {siteConfig.legalName}. {siteConfig.licenseBadge}.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="text-slate-400 hover:text-white transition flex items-center gap-1"
            >
              <span>←</span>
              <span>{siteConfig.lang === 'ru' ? 'Все бригады (Каталог Hub)' : 'All Crews (Hub Catalog)'}</span>
            </a>
            <span className="text-slate-700">•</span>
            <a href="#hero" className="hover:text-sky-300 transition">
              {siteConfig.lang === 'ru' ? 'Наверх ↑' : 'Back to top ↑'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
