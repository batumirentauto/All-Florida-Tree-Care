import React from 'react'
import type { Metadata } from 'next'
import { siteConfigPiedmontTreeExpertsRu } from '../../../../siteConfig.piedmont-tree-experts.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigPiedmontTreeExpertsRu.businessName} | ${siteConfigPiedmontTreeExpertsRu.tagline}`,
  description: `${siteConfigPiedmontTreeExpertsRu.tagline}. ${siteConfigPiedmontTreeExpertsRu.hero.subhead}`,
}

export default function PiedmontTreeExpertsRussianPage() {
  return <UniversalCompanyPage config={siteConfigPiedmontTreeExpertsRu} />
}
