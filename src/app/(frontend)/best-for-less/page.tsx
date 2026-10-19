import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBestForLessEn } from '../../../siteConfig.best-for-less.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBestForLessEn.businessName} | ${siteConfigBestForLessEn.tagline}`,
  description: `${siteConfigBestForLessEn.tagline}. ${siteConfigBestForLessEn.hero.subhead}`,
  keywords: [
    "Best For Less Tree Care",
    "tree removal Vancouver WA",
    "tree service Vancouver",
    "stump grinding Vancouver",
    "emergency tree service 98661",
    "James tree service",
  ],
}

export default function BestForLessEnglishPage() {
  return <UniversalCompanyPage config={siteConfigBestForLessEn} />
}
