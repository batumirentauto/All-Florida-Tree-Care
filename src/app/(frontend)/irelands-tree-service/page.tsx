import React from 'react'
import type { Metadata } from 'next'
import { siteConfigIrelandsTreeServiceEn } from '../../../siteConfig.irelands-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigIrelandsTreeServiceEn.businessName} | ${siteConfigIrelandsTreeServiceEn.tagline}`,
  description: `${siteConfigIrelandsTreeServiceEn.tagline}. ${siteConfigIrelandsTreeServiceEn.hero.subhead}`,
  keywords: [
    "Ireland's Tree Service",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Dave tree service",
  ],
}

export default function IrelandsTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigIrelandsTreeServiceEn} />
}
