import React from 'react'
import type { Metadata } from 'next'
import { siteConfigArbortrueEn } from '../../../siteConfig.arbortrue.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigArbortrueEn.businessName} | ${siteConfigArbortrueEn.tagline}`,
  description: `${siteConfigArbortrueEn.tagline}. ${siteConfigArbortrueEn.hero.subhead}`,
  keywords: [
    "ArborTrue",
    "tree removal Houston TX",
    "tree service Houston",
    "stump grinding Houston",
    "emergency tree service 77019",
    "Arbor tree service",
  ],
}

export default function ArbortrueEnglishPage() {
  return <UniversalCompanyPage config={siteConfigArbortrueEn} />
}
