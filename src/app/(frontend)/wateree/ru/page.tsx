import React from 'react'
import type { Metadata } from 'next'
import { siteConfigWatereeRu } from '../../../../siteConfig.wateree.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigWatereeRu.businessName} | ${siteConfigWatereeRu.tagline}`,
  description: `${siteConfigWatereeRu.tagline}. ${siteConfigWatereeRu.hero.subhead}`,
}

export default function WatereeRussianPage() {
  return <UniversalCompanyPage config={siteConfigWatereeRu} />
}
