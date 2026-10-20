'use client'

import React from 'react'
import { getTheme } from './themes'
import { UniversalHeader } from './UniversalHeader'
import { UniversalHero } from './UniversalHero'
import { UniversalSpecs } from './UniversalSpecs'
import { UniversalServices } from './UniversalServices'
import { UniversalCalculator } from './UniversalCalculator'
import { UniversalReviews } from './UniversalReviews'
import { UniversalServiceAreas } from './UniversalServiceAreas'
import { UniversalFooter } from './UniversalFooter'
import { UniversalMobileBar } from './UniversalMobileBar'

const NEW_SCRAPE_SLUGS = new Set([
  'a-integrity', 'affordable', 'allens', 'allwood', 'always-grinding',
  'at-ease', 'bartolome', 'best-for-less', 'bigfoot', 'bramlitt',
  'broken-branch', 'clean-cut', 'columbus', 'danes', 'eaton',
  'family-tree', 'furstie', 'grow', 'hawkinberry', 'holcomb',
  'i-noah-guy', 'jsi', 'limbwalkers', 'lm-tree', 'maldonado',
  'morgans', 'myers', 'norvells', 'panhandle', 'pro-beaver',
  'rosales', 'ss-tree', 'stones', 'superior', 'suttons',
  'tafoya', 'tally', 'td-tree', 'tlg', 'tree-wisemen',
  'us-tree', 'wateree', 'woodfellas'
])

export function UniversalCompanyPage({
  config,
  themeName,
  hideTopBar
}: {
  config: any
  themeName?: string
  hideTopBar?: boolean
}) {
  const theme = getTheme(themeName || config.theme)
  const isRu = config.lang === 'ru'

  // Determine language alternate links
  const enUrl = config.enUrl || `/${config.slug}`
  const ruUrl = config.ruUrl || `/${config.slug}/ru`

  const shouldHideTopBar = hideTopBar ?? config.hideTopBar ?? (!isRu && NEW_SCRAPE_SLUGS.has(config.slug))

  return (
    <div className={`min-h-screen ${theme.bgBody} text-white selection:bg-emerald-500 selection:text-white font-sans antialiased`}>
      {/* Rule 4: Mandatory top bar with '← All Crews' / '← Все бригады' and [EN | RU] switcher */}
      {!shouldHideTopBar && (
        <div className="bg-black border-b border-slate-800 text-xs">
          <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-2 sm:px-6">
            <a
              href="/"
              className={`inline-flex items-center gap-1.5 ${theme.btnPrimary} text-white ${theme.btnPrimaryHover} font-bold px-3 py-1 rounded shadow transition text-xs`}
            >
              <span>←</span>
              <span>{isRu ? 'Все бригады' : 'All Crews'}</span>
            </a>

            <div className="flex items-center gap-2">
              <span className="text-slate-400 hidden xs:inline">{isRu ? 'Язык:' : 'Language:'}</span>
              {isRu ? (
                <>
                  <a
                    href={enUrl}
                    className="text-slate-400 hover:text-white transition text-[11px] font-semibold px-1.5 py-0.5"
                  >
                    EN
                  </a>
                  <span className={`font-black text-white ${theme.badgeBg} ${theme.badgeBorder} border px-2 py-0.5 rounded text-[11px]`}>
                    RU
                  </span>
                </>
              ) : (
                <>
                  <span className={`font-black text-white ${theme.badgeBg} ${theme.badgeBorder} border px-2 py-0.5 rounded text-[11px]`}>
                    EN
                  </span>
                  <a
                    href={ruUrl}
                    className="text-slate-400 hover:text-white transition text-[11px] font-semibold px-1.5 py-0.5"
                  >
                    RU
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Header with Sticky Nav */}
      <UniversalHeader config={config} themeName={theme.name} />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section with Asymmetric Bento Showcase */}
        <UniversalHero config={config} themeName={theme.name} />

        {/* Heavy Rigging & Equipment Specs */}
        <UniversalSpecs config={config} themeName={theme.name} />

        {/* Core Services Catalog */}
        <UniversalServices config={config} themeName={theme.name} />

        {/* Instant Tree Work Estimator / Calculator */}
        <UniversalCalculator config={config} themeName={theme.name} />

        {/* Verified Reviews Section */}
        <UniversalReviews config={config} themeName={theme.name} />

        {/* Service Areas & FAQs */}
        <UniversalServiceAreas config={config} themeName={theme.name} />
      </main>

      {/* Footer */}
      <UniversalFooter config={config} themeName={theme.name} />

      {/* Mobile Sticky Quick-Action Bar */}
      <UniversalMobileBar config={config} themeName={theme.name} />
    </div>
  )
}
