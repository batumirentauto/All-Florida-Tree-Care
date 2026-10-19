import React from 'react'
import type { Metadata } from 'next'
import { siteConfigWestValleyArboristsEn } from '../../../siteConfig.west-valley-arborists.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigWestValleyArboristsEn.businessName} | ${siteConfigWestValleyArboristsEn.tagline}`,
  description: `${siteConfigWestValleyArboristsEn.tagline}. ${siteConfigWestValleyArboristsEn.hero.subhead}`,
  keywords: [
    "West Valley Arborists",
    "tree removal Campbell CA",
    "tree service Campbell",
    "stump grinding Campbell",
    "emergency tree service 95008",
    "Lead Arborist tree service",
  ],
}

export default function WestValleyArboristsEnglishPage() {
  return <UniversalCompanyPage config={siteConfigWestValleyArboristsEn} />
}
