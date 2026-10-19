import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAllGreenTreeCareRaleighDurhamRu } from '../../../../siteConfig.all-green-tree-care-raleigh-durham.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAllGreenTreeCareRaleighDurhamRu.businessName} | ${siteConfigAllGreenTreeCareRaleighDurhamRu.tagline}`,
  description: `${siteConfigAllGreenTreeCareRaleighDurhamRu.tagline}. ${siteConfigAllGreenTreeCareRaleighDurhamRu.hero.subhead}`,
}

export default function AllGreenTreeCareRaleighDurhamRussianPage() {
  return <UniversalCompanyPage config={siteConfigAllGreenTreeCareRaleighDurhamRu} />
}
