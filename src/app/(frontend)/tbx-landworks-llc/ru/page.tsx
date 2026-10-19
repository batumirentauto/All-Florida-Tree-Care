import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTbxLandworksLlcRu } from '../../../../siteConfig.tbx-landworks-llc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTbxLandworksLlcRu.businessName} | ${siteConfigTbxLandworksLlcRu.tagline}`,
  description: `${siteConfigTbxLandworksLlcRu.tagline}. ${siteConfigTbxLandworksLlcRu.hero.subhead}`,
}

export default function TbxLandworksLlcRussianPage() {
  return <UniversalCompanyPage config={siteConfigTbxLandworksLlcRu} />
}
