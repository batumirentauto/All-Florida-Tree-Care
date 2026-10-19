import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGeneralTreeServiceIncEn } from '../../../siteConfig.general-tree-service-inc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGeneralTreeServiceIncEn.businessName} | ${siteConfigGeneralTreeServiceIncEn.tagline}`,
  description: `${siteConfigGeneralTreeServiceIncEn.tagline}. ${siteConfigGeneralTreeServiceIncEn.hero.subhead}`,
  keywords: [
    "General Tree Service, Inc.",
    "tree removal Greensboro NC",
    "tree service Greensboro",
    "stump grinding Greensboro",
    "emergency tree service 27407",
    "Delfino tree service",
  ],
}

export default function GeneralTreeServiceIncEnglishPage() {
  return <UniversalCompanyPage config={siteConfigGeneralTreeServiceIncEn} />
}
