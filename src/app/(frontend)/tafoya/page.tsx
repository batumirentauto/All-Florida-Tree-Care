import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTafoyaEn } from '../../../siteConfig.tafoya.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTafoyaEn.businessName} | ${siteConfigTafoyaEn.tagline}`,
  description: `${siteConfigTafoyaEn.tagline}. ${siteConfigTafoyaEn.hero.subhead}`,
  keywords: [
    "Tafoya's Tree Service & Stump Grinding",
    "tree removal Houston TX",
    "tree service Houston",
    "stump grinding Houston",
    "emergency tree service 77038",
    "Nester Tafoya tree service",
  ],
}

export default function TafoyaEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTafoyaEn} />
}
