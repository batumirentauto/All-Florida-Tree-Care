import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTuckerEnterpriseEn } from '../../../siteConfig.tucker-enterprise.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTuckerEnterpriseEn.businessName} | ${siteConfigTuckerEnterpriseEn.tagline}`,
  description: `${siteConfigTuckerEnterpriseEn.tagline}. ${siteConfigTuckerEnterpriseEn.hero.subhead}`,
  keywords: [
    "Tucker Enterprise Services",
    "tree removal Oldsmar FL",
    "tree service Oldsmar",
    "stump grinding Oldsmar",
    "emergency tree service 34677",
    "Lead Arborist tree service",
  ],
}

export default function TuckerEnterpriseEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTuckerEnterpriseEn} />
}
