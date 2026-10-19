import React from 'react'
import type { Metadata } from 'next'
import { siteConfigParadiseLookLlcRu } from '../../../../siteConfig.paradise-look-llc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigParadiseLookLlcRu.businessName} | ${siteConfigParadiseLookLlcRu.tagline}`,
  description: `${siteConfigParadiseLookLlcRu.tagline}. ${siteConfigParadiseLookLlcRu.hero.subhead}`,
}

export default function ParadiseLookLlcRussianPage() {
  return <UniversalCompanyPage config={siteConfigParadiseLookLlcRu} />
}
