import React from 'react'
import type { Metadata } from 'next'
import { siteConfigPuregreenTreeServiceEn } from '../../../siteConfig.puregreen-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigPuregreenTreeServiceEn.businessName} | ${siteConfigPuregreenTreeServiceEn.tagline}`,
  description: `${siteConfigPuregreenTreeServiceEn.tagline}. ${siteConfigPuregreenTreeServiceEn.hero.subhead}`,
  keywords: [
    "PureGreen Tree Service",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Mark tree service",
  ],
}

export default function PuregreenTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigPuregreenTreeServiceEn} />
}
