import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMaldonadoEn } from '../../../siteConfig.maldonado.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMaldonadoEn.businessName} | ${siteConfigMaldonadoEn.tagline}`,
  description: `${siteConfigMaldonadoEn.tagline}. ${siteConfigMaldonadoEn.hero.subhead}`,
  keywords: [
    "Maldonado Tree Service",
    "tree removal Houston TX",
    "tree service Houston",
    "stump grinding Houston",
    "emergency tree service 77093",
    "Maldonado tree service",
  ],
}

export default function MaldonadoEnglishPage() {
  return <UniversalCompanyPage config={siteConfigMaldonadoEn} />
}
