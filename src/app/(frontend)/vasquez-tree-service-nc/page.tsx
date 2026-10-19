import React from 'react'
import type { Metadata } from 'next'
import { siteConfigVasquezTreeServiceNcEn } from '../../../siteConfig.vasquez-tree-service-nc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigVasquezTreeServiceNcEn.businessName} | ${siteConfigVasquezTreeServiceNcEn.tagline}`,
  description: `${siteConfigVasquezTreeServiceNcEn.tagline}. ${siteConfigVasquezTreeServiceNcEn.hero.subhead}`,
  keywords: [
    "Vasquez Tree Service NC",
    "tree removal Raleigh NC",
    "tree service Raleigh",
    "stump grinding Raleigh",
    "emergency tree service 27604",
    "Israel tree service",
  ],
}

export default function VasquezTreeServiceNcEnglishPage() {
  return <UniversalCompanyPage config={siteConfigVasquezTreeServiceNcEn} />
}
