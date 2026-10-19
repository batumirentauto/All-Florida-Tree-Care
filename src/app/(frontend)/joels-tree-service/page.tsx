import React from 'react'
import type { Metadata } from 'next'
import { siteConfigJoelsTreeServiceEn } from '../../../siteConfig.joels-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigJoelsTreeServiceEn.businessName} | ${siteConfigJoelsTreeServiceEn.tagline}`,
  description: `${siteConfigJoelsTreeServiceEn.tagline}. ${siteConfigJoelsTreeServiceEn.hero.subhead}`,
  keywords: [
    "Joel's tree service",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function JoelsTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigJoelsTreeServiceEn} />
}
