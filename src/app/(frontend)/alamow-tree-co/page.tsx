import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAlamowTreeCoEn } from '../../../siteConfig.alamow-tree-co.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAlamowTreeCoEn.businessName} | ${siteConfigAlamowTreeCoEn.tagline}`,
  description: `${siteConfigAlamowTreeCoEn.tagline}. ${siteConfigAlamowTreeCoEn.hero.subhead}`,
  keywords: [
    "Alamow & Tree Co.",
    "tree removal San Antonio TX",
    "tree service San Antonio",
    "stump grinding San Antonio",
    "emergency tree service 78248",
    "Lead Arborist tree service",
  ],
}

export default function AlamowTreeCoEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAlamowTreeCoEn} />
}
