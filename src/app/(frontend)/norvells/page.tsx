import React from 'react'
import type { Metadata } from 'next'
import { siteConfigNorvellsEn } from '../../../siteConfig.norvells.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigNorvellsEn.businessName} | ${siteConfigNorvellsEn.tagline}`,
  description: `${siteConfigNorvellsEn.tagline}. ${siteConfigNorvellsEn.hero.subhead}`,
  keywords: [
    "Norvell's Tree & Landscape Services LLC",
    "tree removal Spartanburg SC",
    "tree service Spartanburg",
    "stump grinding Spartanburg",
    "emergency tree service 29306",
    "Stevie tree service",
  ],
}

export default function NorvellsEnglishPage() {
  return <UniversalCompanyPage config={siteConfigNorvellsEn} />
}
