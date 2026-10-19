import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHigueraTreeCareEn } from '../../../siteConfig.higuera-tree-care.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigHigueraTreeCareEn.businessName} | ${siteConfigHigueraTreeCareEn.tagline}`,
  description: `${siteConfigHigueraTreeCareEn.tagline}. ${siteConfigHigueraTreeCareEn.hero.subhead}`,
  keywords: [
    "Higuera Tree Care",
    "tree removal Chula Vista CA",
    "tree service Chula Vista",
    "stump grinding Chula Vista",
    "emergency tree service 91911",
    "Rodrigo tree service",
  ],
}

export default function HigueraTreeCareEnglishPage() {
  return <UniversalCompanyPage config={siteConfigHigueraTreeCareEn} />
}
