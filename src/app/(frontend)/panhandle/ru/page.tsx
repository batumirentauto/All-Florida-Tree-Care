import React from 'react'
import type { Metadata } from 'next'
import { siteConfigPanhandleRu } from '../../../../siteConfig.panhandle.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigPanhandleRu.businessName} | ${siteConfigPanhandleRu.tagline}`,
  description: `${siteConfigPanhandleRu.tagline}. ${siteConfigPanhandleRu.hero.subhead}`,
}

export default function PanhandleRussianPage() {
  return <UniversalCompanyPage config={siteConfigPanhandleRu} />
}
