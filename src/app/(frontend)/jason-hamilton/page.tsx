import React from 'react'
import type { Metadata } from 'next'
import { siteConfigJasonHamiltonEn } from '../../../siteConfig.jason-hamilton.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigJasonHamiltonEn.businessName} | ${siteConfigJasonHamiltonEn.tagline}`,
  description: `${siteConfigJasonHamiltonEn.tagline}. ${siteConfigJasonHamiltonEn.hero.subhead}`,
  keywords: [
    "Jason Hamilton Tree Service",
    "tree removal Tallahassee FL",
    "tree service Tallahassee",
    "stump grinding Tallahassee",
    "emergency tree service 32309",
    "Jason tree service",
  ],
}

export default function JasonHamiltonEnglishPage() {
  return <UniversalCompanyPage config={siteConfigJasonHamiltonEn} />
}
