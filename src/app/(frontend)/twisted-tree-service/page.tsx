import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTwistedTreeServiceEn } from '../../../siteConfig.twisted-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTwistedTreeServiceEn.businessName} | ${siteConfigTwistedTreeServiceEn.tagline}`,
  description: `${siteConfigTwistedTreeServiceEn.tagline}. ${siteConfigTwistedTreeServiceEn.hero.subhead}`,
  keywords: [
    "Twisted Tree Service",
    "tree removal Macon GA",
    "tree service Macon",
    "stump grinding Macon",
    "emergency tree service 31216",
    "Twisted tree service",
  ],
}

export default function TwistedTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTwistedTreeServiceEn} />
}
