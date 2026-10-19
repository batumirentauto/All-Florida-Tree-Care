import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHernandezLawncareAndMorellcEn } from '../../../siteConfig.hernandez-lawncare-and-morellc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigHernandezLawncareAndMorellcEn.businessName} | ${siteConfigHernandezLawncareAndMorellcEn.tagline}`,
  description: `${siteConfigHernandezLawncareAndMorellcEn.tagline}. ${siteConfigHernandezLawncareAndMorellcEn.hero.subhead}`,
  keywords: [
    "Hernandez Lawncare And More,LLC",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function HernandezLawncareAndMorellcEnglishPage() {
  return <UniversalCompanyPage config={siteConfigHernandezLawncareAndMorellcEn} />
}
