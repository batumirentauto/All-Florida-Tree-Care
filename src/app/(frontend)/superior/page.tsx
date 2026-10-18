import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSuperiorEn } from '../../../siteConfig.superior.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSuperiorEn.businessName} | ${siteConfigSuperiorEn.tagline}`,
  description: `${siteConfigSuperiorEn.tagline}. ${siteConfigSuperiorEn.hero.subhead}`,
  keywords: [
    "Superior Tree Service aka little tree lady",
    "tree removal Senoia GA",
    "tree service Senoia",
    "stump grinding Senoia",
    "emergency tree service 30276",
    "Naomi tree service",
  ],
}

export default function SuperiorEnglishPage() {
  return <UniversalCompanyPage config={siteConfigSuperiorEn} />
}
