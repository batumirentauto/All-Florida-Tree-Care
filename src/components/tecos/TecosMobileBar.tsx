import React from 'react'
import { siteConfigTecosEn } from '../../siteConfig.tecos.en'
import type { SiteConfig } from '../../types/siteConfig'

export const TecosMobileBar: React.FC<{ config?: SiteConfig }> = ({ config }) => {
  const siteConfig = config || siteConfigTecosEn

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-yellow-500/30 bg-[#090d16]/95 px-4 py-3 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-2 gap-3">
        {/* Call Don Now */}
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 px-3 py-3 text-xs font-black uppercase tracking-wider text-slate-950 shadow-lg shadow-yellow-500/20 transition active:scale-95"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span>{siteConfig.ui.callBrad}</span>
        </a>

        {/* Text Photos for Quote */}
        <a
          href={`sms:${siteConfig.phoneRaw}?&body=${encodeURIComponent(siteConfig.lang === 'ru' ? 'Здравствуйте, отправляю фото пня/дерева для расчета стоимости:' : `Hi ${siteConfig.shortName}, here are photos of my tree/stump for an estimate:`)}`}
          className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-3 py-3 text-xs font-bold uppercase tracking-wider text-slate-200 shadow-lg transition active:scale-95 hover:border-yellow-400/50 hover:text-yellow-300"
        >
          <svg
            className="h-4 w-4 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>{siteConfig.ui.textPhotos}</span>
        </a>
      </div>
    </div>
  )
}
