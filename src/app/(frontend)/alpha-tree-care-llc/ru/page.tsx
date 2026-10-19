import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAlphaTreeCareLlcRu } from '../../../../siteConfig.alpha-tree-care-llc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAlphaTreeCareLlcRu.businessName} | ${siteConfigAlphaTreeCareLlcRu.tagline}`,
  description: `${siteConfigAlphaTreeCareLlcRu.tagline}. ${siteConfigAlphaTreeCareLlcRu.hero.subhead}`,
}

export default function AlphaTreeCareLlcRussianPage() {
  return <UniversalCompanyPage config={siteConfigAlphaTreeCareLlcRu} />
}
