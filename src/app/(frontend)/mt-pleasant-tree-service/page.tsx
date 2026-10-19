import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMtPleasantTreeServiceEn } from '../../../siteConfig.mt-pleasant-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMtPleasantTreeServiceEn.businessName} | ${siteConfigMtPleasantTreeServiceEn.tagline}`,
  description: `${siteConfigMtPleasantTreeServiceEn.tagline}. ${siteConfigMtPleasantTreeServiceEn.hero.subhead}`,
  keywords: [
    "Mt Pleasant Tree Service",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function MtPleasantTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigMtPleasantTreeServiceEn} />
}
