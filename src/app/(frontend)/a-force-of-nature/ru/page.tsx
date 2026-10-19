import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAForceOfNatureRu } from '../../../../siteConfig.a-force-of-nature.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAForceOfNatureRu.businessName} | ${siteConfigAForceOfNatureRu.tagline}`,
  description: `${siteConfigAForceOfNatureRu.tagline}. ${siteConfigAForceOfNatureRu.hero.subhead}`,
}

export default function AForceOfNatureRussianPage() {
  return <UniversalCompanyPage config={siteConfigAForceOfNatureRu} />
}
