import React from 'react'
import type { Metadata } from 'next'
import { siteConfigLimbwalkersRu } from '../../../../siteConfig.limbwalkers.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigLimbwalkersRu.businessName} | ${siteConfigLimbwalkersRu.tagline}`,
  description: `${siteConfigLimbwalkersRu.tagline}. ${siteConfigLimbwalkersRu.hero.subhead}`,
}

export default function LimbwalkersRussianPage() {
  return <UniversalCompanyPage config={siteConfigLimbwalkersRu} />
}
