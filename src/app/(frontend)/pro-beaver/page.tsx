import React from 'react'
import type { Metadata } from 'next'
import { siteConfigProBeaverEn } from '../../../siteConfig.pro-beaver.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigProBeaverEn.businessName} | ${siteConfigProBeaverEn.tagline}`,
  description: `${siteConfigProBeaverEn.tagline}. ${siteConfigProBeaverEn.hero.subhead}`,
  keywords: [
    "Pro Beaver Tree Service",
    "tree removal Waxhaw NC",
    "tree service Waxhaw",
    "stump grinding Waxhaw",
    "emergency tree service 28173",
    "Ivan tree service",
  ],
}

export default function ProBeaverEnglishPage() {
  return <UniversalCompanyPage config={siteConfigProBeaverEn} />
}
