import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTheUrbanForestersRu } from '../../../../siteConfig.the-urban-foresters.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTheUrbanForestersRu.businessName} | ${siteConfigTheUrbanForestersRu.tagline}`,
  description: `${siteConfigTheUrbanForestersRu.tagline}. ${siteConfigTheUrbanForestersRu.hero.subhead}`,
}

export default function TheUrbanForestersRussianPage() {
  return <UniversalCompanyPage config={siteConfigTheUrbanForestersRu} />
}
