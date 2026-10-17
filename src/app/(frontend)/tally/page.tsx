import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTallyEn } from '../../../siteConfig.tally.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTallyEn.businessName} | Hydraulic Crane Tree Removal, CAT Grapple & Pine Dismantling Tallahassee FL`,
  description: `${siteConfigTallyEn.tagline}. ${siteConfigTallyEn.hero.subhead}`,
  keywords: [
    'Tally Trees',
    'crane tree removal Tallahassee FL',
    'tree service Leon County',
    'pine tree removal 32301',
    'CAT loader tree work',
    'emergency tree clearing Tallahassee',
  ],
}

export default function TallyEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTallyEn} />
}
