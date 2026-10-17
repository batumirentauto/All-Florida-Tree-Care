import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBramlittEn } from '../../../siteConfig.bramlitt.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBramlittEn.businessName} | Diamond Cut Palm Shaving & Tree Surgery Green Cove Springs FL`,
  description: `${siteConfigBramlittEn.tagline}. ${siteConfigBramlittEn.hero.subhead}`,
  keywords: [
    'Bramlitt Tree Service',
    'diamond cut palm shaving Green Cove Springs',
    'Sylvester palm pruning Fleming Island',
    'tree removal Clay County FL',
    'Queen palm roof trimming 32043',
    'Derek Bramlitt tree care',
  ],
}

export default function BramlittEnglishPage() {
  return <UniversalCompanyPage config={siteConfigBramlittEn} />
}
