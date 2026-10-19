import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAllenTreeServiceEn } from '../../../siteConfig.allen-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAllenTreeServiceEn.businessName} | ${siteConfigAllenTreeServiceEn.tagline}`,
  description: `${siteConfigAllenTreeServiceEn.tagline}. ${siteConfigAllenTreeServiceEn.hero.subhead}`,
  keywords: [
    "Allen Tree Service",
    "tree removal Cary NC",
    "tree service Cary",
    "stump grinding Cary",
    "emergency tree service 27518",
    "Scott tree service",
  ],
}

export default function AllenTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAllenTreeServiceEn} />
}
