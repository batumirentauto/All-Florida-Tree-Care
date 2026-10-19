import React from 'react'
import type { Metadata } from 'next'
import { siteConfigPensacolaTreeServiceEn } from '../../../siteConfig.pensacola-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigPensacolaTreeServiceEn.businessName} | ${siteConfigPensacolaTreeServiceEn.tagline}`,
  description: `${siteConfigPensacolaTreeServiceEn.tagline}. ${siteConfigPensacolaTreeServiceEn.hero.subhead}`,
  keywords: [
    "Pensacola Tree Service LLC",
    "tree removal Pensacola FL",
    "tree service Pensacola",
    "stump grinding Pensacola",
    "emergency tree service 32514",
    "David tree service",
  ],
}

export default function PensacolaTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigPensacolaTreeServiceEn} />
}
