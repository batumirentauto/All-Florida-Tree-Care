import React from 'react'
import type { Metadata } from 'next'
import { siteConfigRealStumpBustersEn } from '../../../siteConfig.real-stump-busters.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigRealStumpBustersEn.businessName} | ${siteConfigRealStumpBustersEn.tagline}`,
  description: `${siteConfigRealStumpBustersEn.tagline}. ${siteConfigRealStumpBustersEn.hero.subhead}`,
  keywords: [
    "Real Stump Busters",
    "tree removal San Antonio TX",
    "tree service San Antonio",
    "stump grinding San Antonio",
    "emergency tree service 78233",
    "Tom tree service",
  ],
}

export default function RealStumpBustersEnglishPage() {
  return <UniversalCompanyPage config={siteConfigRealStumpBustersEn} />
}
