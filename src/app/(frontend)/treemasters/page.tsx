import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreemastersEn } from '../../../siteConfig.treemasters.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreemastersEn.businessName} | ${siteConfigTreemastersEn.tagline}`,
  description: `${siteConfigTreemastersEn.tagline}. ${siteConfigTreemastersEn.hero.subhead}`,
  keywords: [
    "Treemasters",
    "tree removal San Rafael CA",
    "tree service San Rafael",
    "stump grinding San Rafael",
    "emergency tree service 94901",
    "Lead Arborist tree service",
  ],
}

export default function TreemastersEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTreemastersEn} />
}
