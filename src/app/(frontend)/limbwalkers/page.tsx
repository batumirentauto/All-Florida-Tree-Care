import React from 'react'
import type { Metadata } from 'next'
import { siteConfigLimbwalkersEn } from '../../../siteConfig.limbwalkers.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigLimbwalkersEn.businessName} | ${siteConfigLimbwalkersEn.tagline}`,
  description: `${siteConfigLimbwalkersEn.tagline}. ${siteConfigLimbwalkersEn.hero.subhead}`,
  keywords: [
    "Limbwalkers Tree & Crane Service",
    "tree removal Morganton NC",
    "tree service Morganton",
    "stump grinding Morganton",
    "emergency tree service 28655",
    "Caleb tree service",
  ],
}

export default function LimbwalkersEnglishPage() {
  return <UniversalCompanyPage config={siteConfigLimbwalkersEn} />
}
