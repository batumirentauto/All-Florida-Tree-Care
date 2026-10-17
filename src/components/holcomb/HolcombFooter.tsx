'use client'

import React from 'react'
import { StarRating } from '../StarRating'
import { siteConfigHolcombEn } from '../../siteConfig.holcomb.en'

export function HolcombFooter({ config }: { config?: any }) {
  const siteConfig = config || siteConfigHolcombEn

  return (
    <footer id="contact" className="bg-[#050e09] text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-emerald-500/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-emerald-950/80">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-600 to-green-800 text-white flex flex-col items-center justify-center font-black shadow-md border border-emerald-400/40">
                <span className="text-[13px] tracking-tight leading-none">HTT</span>
                <span className="text-[7.5px] font-extrabold tracking-widest text-emerald-100 uppercase leading-none mt-0.5">TIMBER</span>
              </div>
              <div>
                <span className="text-base font-black text-white block">
                  Holcomb Timber & Tree
                </span>
                <span className="text-xs text-emerald-400 font-medium">
                  {siteConfig.slogan}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {siteConfig.lang === 'ru'
                ? 'Техническая валка высоких пихт, такелажный спуск двухметровых секвой вблизи домов, расчистка штормовых завалов и переработка веток в округе Лейн.'
                : 'Technical high-timber falling, sectional redwood rigging near residential structures, emergency storm logging, and high-volume chipping in Lane County.'}
            </p>

            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-emerald-300 transition"
            >
              <span className="font-semibold text-white">Google Maps</span>
              <StarRating value={siteConfig.ratingValue || 5.0} size="xs" />
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
                <a href="#services" className="hover:text-emerald-300 transition">
                  {siteConfig.lang === 'ru' ? 'Валка пихт Дугласа 30+ м' : '100+ Ft Douglas Fir Takedowns'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-300 transition">
                  {siteConfig.lang === 'ru' ? 'Спуск гигантских секвой' : 'Colossal Redwood Dismantling'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-300 transition">
                  {siteConfig.lang === 'ru' ? 'Снятие деревьев с крыш' : 'Emergency Storm Logging'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-300 transition">
                  {siteConfig.lang === 'ru' ? 'Пожаробезопасное прореживание' : 'Defensible Space Thinning'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-300 transition">
                  {siteConfig.lang === 'ru' ? 'Дробление веток и вывоз' : 'Commercial Brush Chipping'}
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
              <li>Pleasant Hill & Edenvale (97455)</li>
              <li>Eugene & Campus Districts (97401-05)</li>
              <li>Springfield & Thurston (97477-78)</li>
              <li>Cottage Grove & Creswell (97424)</li>
              <li>Dexter, Lowell & Fall Creek (97431)</li>
              <li>Newport & Central Coast (97365)</li>
            </ul>
          </div>

          {/* Col 4: Contacts & Direct Dispatch */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {siteConfig.lang === 'ru' ? 'Связь с Тони Холкомбом' : 'Direct Dispatch'}
            </h4>
            <div className="text-xs text-slate-300 space-y-1">
              <div className="font-bold text-white">{siteConfig.legalName}</div>
              <div className="text-slate-400">{siteConfig.fullAddress}</div>
              <div className="text-emerald-400 font-mono text-sm pt-1 font-bold">
                {siteConfig.phone}
              </div>
              <div className="text-[11px] text-slate-400 pt-1">
                {siteConfig.workingHours}
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-700 text-white font-bold py-2.5 px-4 text-xs shadow-md hover:from-emerald-500 hover:to-green-600 transition"
              >
                <span>{siteConfig.ui?.callTony || siteConfig.phone}</span>
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
            <a href="#hero" className="hover:text-emerald-300 transition">
              {siteConfig.lang === 'ru' ? 'Наверх ↑' : 'Back to top ↑'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
