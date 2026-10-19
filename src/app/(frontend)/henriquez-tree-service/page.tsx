import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHenriquezTreeServiceEn } from '../../../siteConfig.henriquez-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigHenriquezTreeServiceEn.businessName} | ${siteConfigHenriquezTreeServiceEn.tagline}`,
  description: `${siteConfigHenriquezTreeServiceEn.tagline}. ${siteConfigHenriquezTreeServiceEn.hero.subhead}`,
  keywords: [
    "Henriquez Tree Service",
    "tree removal Bakersfield CA",
    "tree service Bakersfield",
    "stump grinding Bakersfield",
    "emergency tree service 93307",
    "Henriquez tree service",
  ],
}

export default function HenriquezTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigHenriquezTreeServiceEn} />
}
