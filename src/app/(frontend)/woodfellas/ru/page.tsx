import React from 'react'
import type { Metadata } from 'next'
import { siteConfigWoodfellasRu } from '../../../../siteConfig.woodfellas.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigWoodfellasRu.businessName} | ${siteConfigWoodfellasRu.tagline}`,
  description: `${siteConfigWoodfellasRu.tagline}. ${siteConfigWoodfellasRu.hero.subhead}`,
}

export default function WoodfellasRussianPage() {
  return <UniversalCompanyPage config={siteConfigWoodfellasRu} />
}
