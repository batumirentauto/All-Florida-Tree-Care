import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSuperAffordableEn } from '../../../siteConfig.super-affordable.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSuperAffordableEn.businessName} | ${siteConfigSuperAffordableEn.tagline}`,
  description: `${siteConfigSuperAffordableEn.tagline}. ${siteConfigSuperAffordableEn.hero.subhead}`,
  keywords: [
    "Super Affordable Tree Service",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Bob tree service",
  ],
}

export default function SuperAffordableEnglishPage() {
  return <UniversalCompanyPage config={siteConfigSuperAffordableEn} />
}
