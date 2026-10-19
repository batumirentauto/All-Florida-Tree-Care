import React from 'react'
import type { Metadata } from 'next'
import { siteConfigParadiseLookLlcEn } from '../../../siteConfig.paradise-look-llc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigParadiseLookLlcEn.businessName} | ${siteConfigParadiseLookLlcEn.tagline}`,
  description: `${siteConfigParadiseLookLlcEn.tagline}. ${siteConfigParadiseLookLlcEn.hero.subhead}`,
  keywords: [
    "Paradise Look LLC",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function ParadiseLookLlcEnglishPage() {
  return <UniversalCompanyPage config={siteConfigParadiseLookLlcEn} />
}
