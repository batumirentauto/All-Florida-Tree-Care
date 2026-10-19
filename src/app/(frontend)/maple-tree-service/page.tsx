import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMapleTreeServiceEn } from '../../../siteConfig.maple-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMapleTreeServiceEn.businessName} | ${siteConfigMapleTreeServiceEn.tagline}`,
  description: `${siteConfigMapleTreeServiceEn.tagline}. ${siteConfigMapleTreeServiceEn.hero.subhead}`,
  keywords: [
    "Maple Tree Service",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function MapleTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigMapleTreeServiceEn} />
}
