import React from 'react'
import type { Metadata } from 'next'
import { siteConfigJesseScottsRu } from '../../../../siteConfig.jesse-scotts.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigJesseScottsRu.businessName} | ${siteConfigJesseScottsRu.tagline}`,
  description: `${siteConfigJesseScottsRu.tagline}. ${siteConfigJesseScottsRu.hero.subhead}`,
}

export default function JesseScottsRussianPage() {
  return <UniversalCompanyPage config={siteConfigJesseScottsRu} />
}
