'use client'

import React from 'react'
import { getTheme } from './themes'

export function UniversalFooter({ config, themeName }: { config: any; themeName?: string }) {
  const theme = getTheme(themeName || config.theme)

  return (
    <footer className="bg-black border-t border-slate-900 text-slate-400 py-12 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Identity */}
          <div className="space-y-3 md:col-span-2">
            <div className="text-base font-black text-white flex items-center gap-2">
              <span className={`h-2.5 w-2.5 rounded-full ${theme.name === 'sky' ? 'bg-sky-400' : theme.name === 'amber' ? 'bg-amber-400' : theme.name === 'teal' ? 'bg-teal-400' : 'bg-emerald-400'}`} />
              <span>{config.legalName || config.businessName}</span>
            </div>
            <p className="text-slate-400 text-xs max-w-md leading-relaxed">
              {config.tagline}. {config.fullAddress}.
            </p>
            <p className="text-[11px] text-slate-500">
              {config.licenseBadge}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              {config.lang === 'ru' ? 'Навигация' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition">{config.lang === 'ru' ? 'Услуги' : 'Services'}</a></li>
              <li><a href="#equipment" className="hover:text-white transition">{config.lang === 'ru' ? 'Спецтехника' : 'Equipment'}</a></li>
              <li><a href="#calculator" className="hover:text-white transition">{config.lang === 'ru' ? 'Калькулятор сметы' : 'Price Estimator'}</a></li>
              <li><a href="#reviews" className="hover:text-white transition">{config.lang === 'ru' ? 'Отзывы Google Maps' : 'Google Maps Reviews'}</a></li>
              <li><a href="#contact" className="hover:text-white transition">{config.lang === 'ru' ? 'Контакты и база' : 'Service Territory'}</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              {config.lang === 'ru' ? 'Диспетчерская' : 'Contact Direct'}
            </h4>
            <div className="space-y-2">
              <div>
                <a href={`tel:${config.phoneRaw}`} className="text-sm font-bold text-white hover:text-emerald-400 transition">
                  {config.phone}
                </a>
              </div>
              <div className="text-slate-400 text-[11px]">
                {config.workingHours}
              </div>
              <div className="pt-2">
                <a
                  href="/"
                  className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition"
                >
                  <span>←</span>
                  <span>{config.lang === 'ru' ? 'Все бригады на портале' : 'All Verified Crews'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {config.legalName || config.businessName}. {config.lang === 'ru' ? 'Все права защищены.' : 'All rights reserved.'}
          </div>
          <div>
            {config.city}, {config.state} • Google Maps Verified Business
          </div>
        </div>
      </div>
    </footer>
  )
}
