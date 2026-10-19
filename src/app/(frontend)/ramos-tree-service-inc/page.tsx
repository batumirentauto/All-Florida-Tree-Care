import React from 'react'
import type { Metadata } from 'next'
import { siteConfigRamosTreeServiceIncEn } from '../../../siteConfig.ramos-tree-service-inc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigRamosTreeServiceIncEn.businessName} | ${siteConfigRamosTreeServiceIncEn.tagline}`,
  description: `${siteConfigRamosTreeServiceIncEn.tagline}. ${siteConfigRamosTreeServiceIncEn.hero.subhead}`,
  keywords: [
    "Ramos Tree Service Inc.",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Pedro tree service",
  ],
}

export default function RamosTreeServiceIncEnglishPage() {
  return <UniversalCompanyPage config={siteConfigRamosTreeServiceIncEn} />
}
