import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreeBrothersEn } from '../../../siteConfig.tree-brothers.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreeBrothersEn.businessName} | ${siteConfigTreeBrothersEn.tagline}`,
  description: `${siteConfigTreeBrothersEn.tagline}. ${siteConfigTreeBrothersEn.hero.subhead}`,
  keywords: [
    "Tree Brothers Tree Service",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Ian tree service",
  ],
}

export default function TreeBrothersEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTreeBrothersEn} />
}
