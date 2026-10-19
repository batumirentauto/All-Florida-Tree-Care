import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSanchezAndSonsServicesEn } from '../../../siteConfig.sanchez-and-sons-services.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSanchezAndSonsServicesEn.businessName} | ${siteConfigSanchezAndSonsServicesEn.tagline}`,
  description: `${siteConfigSanchezAndSonsServicesEn.tagline}. ${siteConfigSanchezAndSonsServicesEn.hero.subhead}`,
  keywords: [
    "Sanchez and Sons Services, LLC",
    "tree removal Austin TX",
    "tree service Austin",
    "stump grinding Austin",
    "emergency tree service 78745",
    "Jeremy tree service",
  ],
}

export default function SanchezAndSonsServicesEnglishPage() {
  return <UniversalCompanyPage config={siteConfigSanchezAndSonsServicesEn} />
}
