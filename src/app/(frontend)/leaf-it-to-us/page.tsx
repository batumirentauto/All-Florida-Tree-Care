import React from 'react'
import type { Metadata } from 'next'
import { siteConfigLeafItToUsEn } from '../../../siteConfig.leaf-it-to-us.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigLeafItToUsEn.businessName} | ${siteConfigLeafItToUsEn.tagline}`,
  description: `${siteConfigLeafItToUsEn.tagline}. ${siteConfigLeafItToUsEn.hero.subhead}`,
  keywords: [
    "Leaf It To Us Tree Service",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Jose tree service",
  ],
}

export default function LeafItToUsEnglishPage() {
  return <UniversalCompanyPage config={siteConfigLeafItToUsEn} />
}
