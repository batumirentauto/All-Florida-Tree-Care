import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTbxLandworksLlcEn } from '../../../siteConfig.tbx-landworks-llc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTbxLandworksLlcEn.businessName} | ${siteConfigTbxLandworksLlcEn.tagline}`,
  description: `${siteConfigTbxLandworksLlcEn.tagline}. ${siteConfigTbxLandworksLlcEn.hero.subhead}`,
  keywords: [
    "TBX Landworks LLC",
    "tree removal Athens GA",
    "tree service Athens",
    "stump grinding Athens",
    "emergency tree service 30605",
    "Ty tree service",
  ],
}

export default function TbxLandworksLlcEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTbxLandworksLlcEn} />
}
