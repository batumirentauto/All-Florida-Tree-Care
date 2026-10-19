import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreeServiceAdvisorEn } from '../../../siteConfig.tree-service-advisor.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreeServiceAdvisorEn.businessName} | ${siteConfigTreeServiceAdvisorEn.tagline}`,
  description: `${siteConfigTreeServiceAdvisorEn.tagline}. ${siteConfigTreeServiceAdvisorEn.hero.subhead}`,
  keywords: [
    "Tree Service Advisor",
    "tree removal Balch Springs TX",
    "tree service Balch Springs",
    "stump grinding Balch Springs",
    "emergency tree service 75180",
    "Luis tree service",
  ],
}

export default function TreeServiceAdvisorEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTreeServiceAdvisorEn} />
}
