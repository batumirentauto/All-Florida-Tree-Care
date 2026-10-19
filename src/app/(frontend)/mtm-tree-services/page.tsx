import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMtmTreeServicesEn } from '../../../siteConfig.mtm-tree-services.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMtmTreeServicesEn.businessName} | ${siteConfigMtmTreeServicesEn.tagline}`,
  description: `${siteConfigMtmTreeServicesEn.tagline}. ${siteConfigMtmTreeServicesEn.hero.subhead}`,
  keywords: [
    "MTM Tree Services",
    "tree removal Charlotte NC",
    "tree service Charlotte",
    "stump grinding Charlotte",
    "emergency tree service 28226",
    "Lead Arborist tree service",
  ],
}

export default function MtmTreeServicesEnglishPage() {
  return <UniversalCompanyPage config={siteConfigMtmTreeServicesEn} />
}
