import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTlgEn } from '../../../siteConfig.tlg.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTlgEn.businessName} | ${siteConfigTlgEn.tagline}`,
  description: `${siteConfigTlgEn.tagline}. ${siteConfigTlgEn.hero.subhead}`,
  keywords: [
    "TLG Tree Service LLC",
    "tree removal Raleigh NC",
    "tree service Raleigh",
    "stump grinding Raleigh",
    "emergency tree service 27615",
    "Oliver tree service",
  ],
}

export default function TlgEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTlgEn} />
}
