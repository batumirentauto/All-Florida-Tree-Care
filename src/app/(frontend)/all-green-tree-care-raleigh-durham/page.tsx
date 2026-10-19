import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAllGreenTreeCareRaleighDurhamEn } from '../../../siteConfig.all-green-tree-care-raleigh-durham.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAllGreenTreeCareRaleighDurhamEn.businessName} | ${siteConfigAllGreenTreeCareRaleighDurhamEn.tagline}`,
  description: `${siteConfigAllGreenTreeCareRaleighDurhamEn.tagline}. ${siteConfigAllGreenTreeCareRaleighDurhamEn.hero.subhead}`,
  keywords: [
    "All Green Tree Care Raleigh \u2013 Durham Inc",
    "tree removal Durham NC",
    "tree service Durham",
    "stump grinding Durham",
    "emergency tree service 27713",
    "Green tree service",
  ],
}

export default function AllGreenTreeCareRaleighDurhamEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAllGreenTreeCareRaleighDurhamEn} />
}
