import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCompany3MonkeysTreeServiceSanAntonioRu } from '../../../../siteConfig.3-monkeys-tree-service-san-antonio.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCompany3MonkeysTreeServiceSanAntonioRu.businessName} | ${siteConfigCompany3MonkeysTreeServiceSanAntonioRu.tagline}`,
  description: `${siteConfigCompany3MonkeysTreeServiceSanAntonioRu.tagline}. ${siteConfigCompany3MonkeysTreeServiceSanAntonioRu.hero.subhead}`,
}

export default function Company3MonkeysTreeServiceSanAntonioRussianPage() {
  return <UniversalCompanyPage config={siteConfigCompany3MonkeysTreeServiceSanAntonioRu} />
}
