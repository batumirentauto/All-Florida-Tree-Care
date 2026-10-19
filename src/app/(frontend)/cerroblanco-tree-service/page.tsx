import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCerroblancoTreeServiceEn } from '../../../siteConfig.cerroblanco-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCerroblancoTreeServiceEn.businessName} | ${siteConfigCerroblancoTreeServiceEn.tagline}`,
  description: `${siteConfigCerroblancoTreeServiceEn.tagline}. ${siteConfigCerroblancoTreeServiceEn.hero.subhead}`,
  keywords: [
    "Cerroblanco Tree Service LLC",
    "tree removal Altamonte Springs FL",
    "tree service Altamonte Springs",
    "stump grinding Altamonte Springs",
    "emergency tree service 32701",
    "Orlando tree service",
  ],
}

export default function CerroblancoTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigCerroblancoTreeServiceEn} />
}
