import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGrahamTreeServicesIncEn } from '../../../siteConfig.graham-tree-services-inc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGrahamTreeServicesIncEn.businessName} | ${siteConfigGrahamTreeServicesIncEn.tagline}`,
  description: `${siteConfigGrahamTreeServicesIncEn.tagline}. ${siteConfigGrahamTreeServicesIncEn.hero.subhead}`,
  keywords: [
    "Graham Tree Services Inc",
    "tree removal San Leandro CA",
    "tree service San Leandro",
    "stump grinding San Leandro",
    "emergency tree service 94577",
    "Lead Arborist tree service",
  ],
}

export default function GrahamTreeServicesIncEnglishPage() {
  return <UniversalCompanyPage config={siteConfigGrahamTreeServicesIncEn} />
}
