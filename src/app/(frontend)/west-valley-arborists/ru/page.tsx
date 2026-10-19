import React from 'react'
import type { Metadata } from 'next'
import { siteConfigWestValleyArboristsRu } from '../../../../siteConfig.west-valley-arborists.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigWestValleyArboristsRu.businessName} | ${siteConfigWestValleyArboristsRu.tagline}`,
  description: `${siteConfigWestValleyArboristsRu.tagline}. ${siteConfigWestValleyArboristsRu.hero.subhead}`,
}

export default function WestValleyArboristsRussianPage() {
  return <UniversalCompanyPage config={siteConfigWestValleyArboristsRu} />
}
