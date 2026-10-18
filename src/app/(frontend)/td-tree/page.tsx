import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTdTreeEn } from '../../../siteConfig.td-tree.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTdTreeEn.businessName} | ${siteConfigTdTreeEn.tagline}`,
  description: `${siteConfigTdTreeEn.tagline}. ${siteConfigTdTreeEn.hero.subhead}`,
  keywords: [
    "T & D Professional Tree Removal",
    "tree removal Saucier MS",
    "tree service Saucier",
    "stump grinding Saucier",
    "emergency tree service 39574",
    "Timothy & Don tree service",
  ],
}

export default function TdTreeEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTdTreeEn} />
}
