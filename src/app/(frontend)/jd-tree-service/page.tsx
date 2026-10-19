import React from 'react'
import type { Metadata } from 'next'
import { siteConfigJdTreeServiceEn } from '../../../siteConfig.jd-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigJdTreeServiceEn.businessName} | ${siteConfigJdTreeServiceEn.tagline}`,
  description: `${siteConfigJdTreeServiceEn.tagline}. ${siteConfigJdTreeServiceEn.hero.subhead}`,
  keywords: [
    "JD Tree Service",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "John tree service",
  ],
}

export default function JdTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigJdTreeServiceEn} />
}
