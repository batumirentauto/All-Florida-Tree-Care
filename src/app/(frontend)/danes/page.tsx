import React from 'react'
import type { Metadata } from 'next'
import { siteConfigDanesEn } from '../../../siteConfig.danes.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigDanesEn.businessName} | Technical Timber Falling, High Climbing & Tree Removal Aumsville OR`,
  description: `${siteConfigDanesEn.tagline}. ${siteConfigDanesEn.hero.subhead}`,
  keywords: [
    'Danes Tree and Excavation Service',
    'tree removal Aumsville OR',
    'timber falling Marion County',
    'Douglas fir climbing Salem OR',
    'tree service Sublimity Stayton',
    'Dane tree service',
  ],
}

export default function DanesEnglishPage() {
  return <UniversalCompanyPage config={siteConfigDanesEn} />
}
