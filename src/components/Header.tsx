import React from 'react'
import { siteConfig } from '../siteConfig'

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800 bg-neutral-950/95 backdrop-blur-md">
      {/* Top micro-bar for trust & license */}
      <div className="border-b border-neutral-800/80 bg-neutral-900/60 px-4 py-1.5 text-xs text-neutral-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              {siteConfig.licenseBadge}
            </span>
            <span className="hidden text-neutral-500 sm:inline">•</span>
            <span className="hidden text-neutral-400 sm:inline">
              Опыт: {siteConfig.experienceYears}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400" aria-label="5 звезд из 5">
              {'★★★★★'}
            </div>
            <span className="font-semibold text-neutral-200">
              {siteConfig.rating}
            </span>
            <span className="text-neutral-400">
              ({siteConfig.reviewCount} отзывов в Google)
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div>
          <a href="#" className="group block focus:outline-none">
            <span className="block text-base font-extrabold tracking-tight text-white group-hover:text-emerald-400 sm:text-xl">
              {siteConfig.businessName}
            </span>
            <span className="hidden text-xs text-neutral-400 md:block">
              {siteConfig.tagline}
            </span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          {/* Quick text quote button (desktop/tablet) */}
          <a
            href={`sms:${siteConfig.phoneRaw}?&body=Здравствуйте,%20отправляю%20фото%20пня/дерева%20для%20расчета%20стоимости:`}
            className="hidden items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-3.5 py-2 text-sm font-semibold text-neutral-200 transition hover:border-emerald-500 hover:text-white lg:inline-flex"
          >
            <svg
              className="h-4 w-4 text-emerald-400"
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
            Оценка по фото
          </a>

          {/* Primary phone call button */}
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-emerald-500 active:scale-95"
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
            <span>{siteConfig.phone}</span>
          </a>
        </div>
      </div>
    </header>
  )
}
