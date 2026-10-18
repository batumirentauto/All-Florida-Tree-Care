import React from 'react'
import type { Metadata } from 'next'
import { siteConfigWatereeEn } from '../../../siteConfig.wateree.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigWatereeEn.businessName} | ${siteConfigWatereeEn.tagline}`,
  description: `${siteConfigWatereeEn.tagline}. ${siteConfigWatereeEn.hero.subhead}`,
  keywords: [
    "Wateree Tree RemovalLLC",
    "tree removal Lugoff SC",
    "tree service Lugoff",
    "stump grinding Lugoff",
    "emergency tree service 29078",
    "David tree service",
  ],
}

export default function WatereeEnglishPage() {
  return <UniversalCompanyPage config={siteConfigWatereeEn} />
}
