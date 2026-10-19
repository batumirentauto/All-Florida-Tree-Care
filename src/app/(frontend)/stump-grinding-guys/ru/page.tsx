import React from 'react'
import type { Metadata } from 'next'
import { siteConfigStumpGrindingGuysRu } from '../../../../siteConfig.stump-grinding-guys.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigStumpGrindingGuysRu.businessName} | ${siteConfigStumpGrindingGuysRu.tagline}`,
  description: `${siteConfigStumpGrindingGuysRu.tagline}. ${siteConfigStumpGrindingGuysRu.hero.subhead}`,
}

export default function StumpGrindingGuysRussianPage() {
  return <UniversalCompanyPage config={siteConfigStumpGrindingGuysRu} />
}
