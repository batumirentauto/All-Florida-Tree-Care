import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMendezBrothersEn } from '../../../siteConfig.mendez-brothers.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMendezBrothersEn.businessName} | ${siteConfigMendezBrothersEn.tagline}`,
  description: `${siteConfigMendezBrothersEn.tagline}. ${siteConfigMendezBrothersEn.hero.subhead}`,
  keywords: [
    "Mendez Brothers Tree Service",
    "tree removal Fresno CA",
    "tree service Fresno",
    "stump grinding Fresno",
    "emergency tree service 93722",
    "Lead Arborist tree service",
  ],
}

export default function MendezBrothersEnglishPage() {
  return <UniversalCompanyPage config={siteConfigMendezBrothersEn} />
}
