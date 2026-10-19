import React from 'react'
import type { Metadata } from 'next'
import { siteConfigJimmisTreeServicesEn } from '../../../siteConfig.jimmis-tree-services.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigJimmisTreeServicesEn.businessName} | ${siteConfigJimmisTreeServicesEn.tagline}`,
  description: `${siteConfigJimmisTreeServicesEn.tagline}. ${siteConfigJimmisTreeServicesEn.hero.subhead}`,
  keywords: [
    "Jimmi's Tree Services",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Jimmi tree service",
  ],
}

export default function JimmisTreeServicesEnglishPage() {
  return <UniversalCompanyPage config={siteConfigJimmisTreeServicesEn} />
}
