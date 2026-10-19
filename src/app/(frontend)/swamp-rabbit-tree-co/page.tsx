import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSwampRabbitTreeCoEn } from '../../../siteConfig.swamp-rabbit-tree-co.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSwampRabbitTreeCoEn.businessName} | ${siteConfigSwampRabbitTreeCoEn.tagline}`,
  description: `${siteConfigSwampRabbitTreeCoEn.tagline}. ${siteConfigSwampRabbitTreeCoEn.hero.subhead}`,
  keywords: [
    "Swamp Rabbit Tree Co",
    "tree removal Greenville SC",
    "tree service Greenville",
    "stump grinding Greenville",
    "emergency tree service 29607",
    "Lead Arborist tree service",
  ],
}

export default function SwampRabbitTreeCoEnglishPage() {
  return <UniversalCompanyPage config={siteConfigSwampRabbitTreeCoEn} />
}
