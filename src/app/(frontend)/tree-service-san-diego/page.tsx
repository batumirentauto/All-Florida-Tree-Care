import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreeServiceSanDiegoEn } from '../../../siteConfig.tree-service-san-diego.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreeServiceSanDiegoEn.businessName} | ${siteConfigTreeServiceSanDiegoEn.tagline}`,
  description: `${siteConfigTreeServiceSanDiegoEn.tagline}. ${siteConfigTreeServiceSanDiegoEn.hero.subhead}`,
  keywords: [
    "Tree Service San Diego",
    "tree removal San Diego CA",
    "tree service San Diego",
    "stump grinding San Diego",
    "emergency tree service 92109",
    "Lead Arborist tree service",
  ],
}

export default function TreeServiceSanDiegoEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTreeServiceSanDiegoEn} />
}
