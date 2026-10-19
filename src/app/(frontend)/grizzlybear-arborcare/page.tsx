import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGrizzlybearArborcareEn } from '../../../siteConfig.grizzlybear-arborcare.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGrizzlybearArborcareEn.businessName} | ${siteConfigGrizzlybearArborcareEn.tagline}`,
  description: `${siteConfigGrizzlybearArborcareEn.tagline}. ${siteConfigGrizzlybearArborcareEn.hero.subhead}`,
  keywords: [
    "Grizzlybear Arborcare",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Joe tree service",
  ],
}

export default function GrizzlybearArborcareEnglishPage() {
  return <UniversalCompanyPage config={siteConfigGrizzlybearArborcareEn} />
}
