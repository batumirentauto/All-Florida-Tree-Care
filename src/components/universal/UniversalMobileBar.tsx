'use client'

import React from 'react'
import { getTheme } from './themes'

export function UniversalMobileBar({ config, themeName }: { config: any; themeName?: string }) {
  const theme = getTheme(themeName || config.theme)

  const smsPrompt = encodeURIComponent(
    config.lang === 'ru'
      ? `Здравствуйте, ${config.ownerFirstName || 'диспетчер'}! Отправляю фото дерева для расчета сметы:`
      : `Hello ${config.ownerFirstName || 'team'}! Sending photos of my tree for an estimate:`
  )

  const callLabel = config.lang === 'ru' 
    ? (config.ownerFirstName ? `Позвонить: ${config.ownerFirstName}` : 'Позвонить') 
    : (config.ownerFirstName ? `Call ${config.ownerFirstName}` : 'Call Now')

  const smsLabel = config.lang === 'ru' ? 'SMS с фото' : 'Text Photos'

  return (
    <div className={`sm:hidden fixed bottom-0 left-0 right-0 z-50 ${theme.bgBody}/95 backdrop-blur-md ${theme.borderSubtle} border-t px-3 py-2.5 shadow-2xl`}>
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${config.phoneRaw}`}
          className={`flex items-center justify-center gap-1.5 rounded-xl ${theme.btnPrimary} ${theme.btnPrimaryHover} text-white font-bold py-2.5 px-2 text-xs ${theme.btnShadow} active:scale-95 transition`}
        >
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="truncate">{callLabel}</span>
        </a>

        <a
          href={`sms:${config.phoneRaw}?&body=${smsPrompt}`}
          className={`flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold py-2.5 px-2 text-xs shadow-sm active:scale-95 transition`}
        >
          <svg className={`w-3.5 h-3.5 shrink-0 ${theme.accentText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="truncate">{smsLabel}</span>
        </a>
      </div>
    </div>
  )
}
