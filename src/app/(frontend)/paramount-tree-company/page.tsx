import React from 'react'
import type { Metadata } from 'next'
import { siteConfigParamountTreeCompanyEn } from '../../../siteConfig.paramount-tree-company.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigParamountTreeCompanyEn.businessName} | ${siteConfigParamountTreeCompanyEn.tagline}`,
  description: `${siteConfigParamountTreeCompanyEn.tagline}. ${siteConfigParamountTreeCompanyEn.hero.subhead}`,
  keywords: [
    "Paramount Tree Company",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Michael tree service",
  ],
}

export default function ParamountTreeCompanyEnglishPage() {
  return <UniversalCompanyPage config={siteConfigParamountTreeCompanyEn} />
}
