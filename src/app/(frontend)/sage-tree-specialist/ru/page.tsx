import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSageTreeSpecialistRu } from '../../../../siteConfig.sage-tree-specialist.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSageTreeSpecialistRu.businessName} | ${siteConfigSageTreeSpecialistRu.tagline}`,
  description: `${siteConfigSageTreeSpecialistRu.tagline}. ${siteConfigSageTreeSpecialistRu.hero.subhead}`,
}

export default function SageTreeSpecialistRussianPage() {
  return <UniversalCompanyPage config={siteConfigSageTreeSpecialistRu} />
}
