'use client'

import React from 'react'
import { StarRating } from '../StarRating'
import { siteConfigHardkorEn } from '../../siteConfig.hardkor.en'

export function HardkorFooter({ config }: { config?: any }) {
  const siteConfig = config || siteConfigHardkorEn

  return (
    <footer id="contact" className="bg-[#050811] text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-red-500/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-red-600 to-red-700 text-white flex flex-col items-center justify-center font-black shadow-md border border-red-500/40">
                <span className="text-[13px] tracking-tight leading-none">HKT</span>
                <span className="text-[7.5px] font-extrabold tracking-widest text-red-200 uppercase leading-none mt-0.5">ELITE</span>
              </div>
              <div>
                <span className="text-base font-black text-white block">
                  Hard Kor Tree Care
                </span>
                <span className="text-xs text-red-400 font-medium">
                  {siteConfig.slogan}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {siteConfig.lang === 'ru'
                ? 'Промышленный захват ломовозом, автокран, профессиональный арбористический альпинизм и ликвидация последствий ураганов в округе Пинеллас.'
                : 'Knuckle-boom claw truck extraction, compact crane rigging, extreme arborist climbing, and rapid hurricane storm response across Pinellas County.'}
            </p>

            <div className="flex items-center gap-2 text-xs">
              <StarRating value={4.9} size="xs" />
              <span className="font-bold text-white">4.9</span>
              <span className="text-slate-400">({siteConfig.reviewCount} Google reviews)</span>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {siteConfig.lang === 'ru' ? 'Основные услуги' : 'Arborist Services'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-red-400 transition">
                  {siteConfig.lang === 'ru' ? 'Снятие деревьев с крыш' : 'Fallen Tree Roof Extractions'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition">
                  {siteConfig.lang === 'ru' ? 'Вывоз ломовозом-клешней' : 'Grapple Claw Heavy Hauling'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition">
                  {siteConfig.lang === 'ru' ? 'Спил в стесненных дворах' : 'Zero-Clearance Crane Rigging'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition">
                  {siteConfig.lang === 'ru' ? 'Ручной подъем и спил' : 'Arborist Rope Rigging'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition">
                  {siteConfig.lang === 'ru' ? 'Отчет сертифицированного арбориста' : 'Certified Arborist Reports'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {siteConfig.lang === 'ru' ? 'Округ Пинеллас' : 'Pinellas Coverage'}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>St. Petersburg (База / HQ)</li>
              <li>Gulfport & Historic Oaks</li>
              <li>Pinellas Park & High Point</li>
              <li>Clearwater & Dunedin</li>
              <li>Largo & Seminole</li>
              <li>St. Pete Beach & Barrier Islands</li>
              <li className="pt-2">
                <a href="/" className="text-red-400 hover:text-red-300 font-bold transition flex items-center gap-1">
                  <span>←</span>
                  <span>{siteConfig.lang === 'ru' ? 'Каталог всех 5 бригад Флориды' : 'All 5 Florida Tree Crews'}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Emergency Dispatch */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {siteConfig.lang === 'ru' ? 'Прямой контакт' : 'Direct Contact'}
            </h4>

            <div>
              <div className="text-[11px] text-slate-500 uppercase tracking-wider">
                {siteConfig.lang === 'ru' ? 'Круглосуточный диспетчер' : '24/7 Rapid Phone'}
              </div>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="text-base font-black text-red-400 hover:text-red-300 transition"
              >
                {siteConfig.phone}
              </a>
            </div>

            <div>
              <div className="text-[11px] text-slate-500 uppercase tracking-wider">
                {siteConfig.lang === 'ru' ? 'Операционная база' : 'Headquarters & Base'}
              </div>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-300 hover:text-red-400 transition block leading-relaxed"
              >
                {siteConfig.fullAddress}
              </a>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] text-slate-300 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                <span>{siteConfig.lang === 'ru' ? 'Выезды 24/7 во время штормов' : '24/7 Storm & Hurricane Dispatch'}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom micro bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>St. Petersburg, FL</span>
            <span>•</span>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition"
            >
              Google Maps
            </a>
            <span>•</span>
            <a href="/" className="hover:text-red-400 transition">
              {siteConfig.lang === 'ru' ? 'Все бригады' : 'All Crews'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
