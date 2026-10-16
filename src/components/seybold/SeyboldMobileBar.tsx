'use client'

import React from 'react'
import { siteConfigSeyboldEn } from '../../siteConfig.seybold.en'

export function SeyboldMobileBar({ config }: { config?: any }) {
  const siteConfig = config || siteConfigSeyboldEn

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-lg">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 text-white font-bold py-2.5 px-2 text-xs shadow-sm active:scale-95 transition"
        >
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="truncate">{siteConfig.lang === 'ru' ? 'Позвонить' : 'Call 24/7'}</span>
        </a>

        <a
          href={`sms:${siteConfig.phoneRaw}?&body=${encodeURIComponent(siteConfig.lang === 'ru' ? 'Здравствуйте, Райан! Хочу отправить фото для расчета стоимости работ:' : 'Hello Ryan, I would like to text photos for a tree service quote:')}`}
          className="flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 text-white font-bold py-2.5 px-2 text-xs shadow-sm active:scale-95 transition"
        >
          <svg className="w-3.5 h-3.5 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="truncate">{siteConfig.lang === 'ru' ? 'SMS с фото' : 'Text Photos'}</span>
        </a>
      </div>
    </div>
  )
}
