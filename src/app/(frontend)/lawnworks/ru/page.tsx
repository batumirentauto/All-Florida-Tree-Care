import React from 'react'
import type { Metadata } from 'next'
import { siteConfigLawnworksRu } from '../../../../siteConfig.lawnworks.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigLawnworksRu.businessName} | ${siteConfigLawnworksRu.tagline}`,
  description: `${siteConfigLawnworksRu.tagline}. ${siteConfigLawnworksRu.hero.subhead}`,
}

export default function LawnworksRussianPage() {
  return <UniversalCompanyPage config={siteConfigLawnworksRu} />
}
