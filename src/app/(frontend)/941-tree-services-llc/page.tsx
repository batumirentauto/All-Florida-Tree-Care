import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCompany941TreeServicesLlcEn } from '../../../siteConfig.941-tree-services-llc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCompany941TreeServicesLlcEn.businessName} | ${siteConfigCompany941TreeServicesLlcEn.tagline}`,
  description: `${siteConfigCompany941TreeServicesLlcEn.tagline}. ${siteConfigCompany941TreeServicesLlcEn.hero.subhead}`,
  keywords: [
    "941 Tree Services LLC",
    "tree removal Sarasota FL",
    "tree service Sarasota",
    "stump grinding Sarasota",
    "emergency tree service 34235",
    "Lead Arborist tree service",
  ],
}

export default function Company941TreeServicesLlcEnglishPage() {
  return <UniversalCompanyPage config={siteConfigCompany941TreeServicesLlcEn} />
}
