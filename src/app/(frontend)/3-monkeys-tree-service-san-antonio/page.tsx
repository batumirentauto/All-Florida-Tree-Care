import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCompany3MonkeysTreeServiceSanAntonioEn } from '../../../siteConfig.3-monkeys-tree-service-san-antonio.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCompany3MonkeysTreeServiceSanAntonioEn.businessName} | ${siteConfigCompany3MonkeysTreeServiceSanAntonioEn.tagline}`,
  description: `${siteConfigCompany3MonkeysTreeServiceSanAntonioEn.tagline}. ${siteConfigCompany3MonkeysTreeServiceSanAntonioEn.hero.subhead}`,
  keywords: [
    "3 Monkeys Tree Service San Antonio",
    "tree removal San Antonio TX",
    "tree trimming San Antonio",
    "stump grinding San Antonio",
    "Sergio tree service",
  ],
}

export default function Company3MonkeysTreeServiceSanAntonioEnglishPage() {
  return <UniversalCompanyPage config={siteConfigCompany3MonkeysTreeServiceSanAntonioEn} />
}
