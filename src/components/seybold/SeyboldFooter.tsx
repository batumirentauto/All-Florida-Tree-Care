'use client'

import React from 'react'
import { StarRating } from '../StarRating'
import { siteConfigSeyboldEn } from '../../siteConfig.seybold.en'

export function SeyboldFooter({ config }: { config?: any }) {
  const siteConfig = config || siteConfigSeyboldEn

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex flex-col items-center justify-center font-black shadow-md">
                <span className="text-sm tracking-tight leading-none">SPS</span>
                <span className="text-[8px] font-semibold tracking-wider text-emerald-100 uppercase leading-none mt-0.5">FL</span>
              </div>
              <div>
                <span className="text-base font-black text-white block">
                  Seybold Property Solutions
                </span>
                <span className="text-xs text-emerald-400 font-medium">
                  {siteConfig.slogan}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {siteConfig.lang === 'ru'
                ? 'Профессиональная арбористика, гусеничное дробление пней Vermeer и комплексное благоустройство участков без колеи на газоне.'
                : 'Precision tree care, turf-friendly tracked Vermeer stump grinding, and property renovation serving Manatee & Sarasota counties.'}
            </p>

            <div className="flex items-center gap-2 text-xs">
              <StarRating value={5.0} size="xs" />
              <span className="font-bold text-white">5.0</span>
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
                <a href="#services" className="hover:text-emerald-400 transition">
                  {siteConfig.lang === 'ru' ? 'Спил аварийных деревьев' : 'Hazardous Tree Removal'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition">
                  {siteConfig.lang === 'ru' ? 'Очистка от испанского мха' : 'Spanish Moss Live Oak Rejuvenation'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition">
                  {siteConfig.lang === 'ru' ? 'Гусеничное дробление пней Vermeer' : 'Tracked Vermeer Stump Grinding'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition">
                  {siteConfig.lang === 'ru' ? 'Экстренный выезд 24/7' : '24/7 Emergency Storm Dispatch'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition">
                  {siteConfig.lang === 'ru' ? 'Реновация и планировка участков' : 'Yard Renovation & Dirt Leveling'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts & Dispatch */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {siteConfig.lang === 'ru' ? 'Прямой контакт' : 'Direct Dispatch'}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div>
                <div className="text-[11px] text-slate-500 font-semibold uppercase">
                  {siteConfig.lang === 'ru' ? 'Основной телефон:' : 'Primary Phone:'}
                </div>
                <a href={`tel:${siteConfig.phoneRaw}`} className="text-emerald-400 hover:text-emerald-300 font-bold font-mono text-sm">
                  {siteConfig.phone}
                </a>
              </div>

              <div>
                <div className="text-[11px] text-slate-500 font-semibold uppercase">
                  {siteConfig.lang === 'ru' ? 'Второй номер:' : 'Secondary Phone:'}
                </div>
                <a href={`tel:${siteConfig.phoneSecondaryRaw}`} className="text-slate-300 hover:text-white font-mono">
                  {siteConfig.phoneSecondary}
                </a>
              </div>

              <div>
                <div className="text-[11px] text-slate-500 font-semibold uppercase">
                  {siteConfig.lang === 'ru' ? 'График работы:' : 'Hours of Operation:'}
                </div>
                <div className="text-slate-300">
                  {siteConfig.workingHours}
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Base Location & Hub Link */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {siteConfig.lang === 'ru' ? 'База и Каталог' : 'Base HQ & Catalog'}
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div>
                <span className="text-white font-medium block">
                  {siteConfig.fullAddress}
                </span>
                <span className="text-[11px] text-slate-500">
                  {siteConfig.addressNotes}
                </span>
              </div>

              <div className="pt-2">
                <a
                  href="/"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-400 font-bold px-3 py-1.5 text-xs border border-slate-700 transition"
                >
                  <span>←</span>
                  <span>{siteConfig.lang === 'ru' ? 'Все бригады (Каталог Hub)' : 'All Crews (Hub Catalog)'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>{siteConfig.licenseBadge}</span>
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
