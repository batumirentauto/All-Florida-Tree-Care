import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCamposTreeServiceEn } from '../../../siteConfig.campos-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCamposTreeServiceEn.businessName} | ${siteConfigCamposTreeServiceEn.tagline}`,
  description: `${siteConfigCamposTreeServiceEn.tagline}. ${siteConfigCamposTreeServiceEn.hero.subhead}`,
  keywords: [
    "Campos tree service",
    "tree removal Mesquite TX",
    "tree service Mesquite",
    "stump grinding Mesquite",
    "emergency tree service 75150",
    "Campos tree service",
  ],
}

export default function CamposTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigCamposTreeServiceEn} />
}
