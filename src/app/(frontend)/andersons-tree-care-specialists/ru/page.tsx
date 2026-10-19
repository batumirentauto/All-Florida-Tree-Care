import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAndersonsTreeCareSpecialistsRu } from '../../../../siteConfig.andersons-tree-care-specialists.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAndersonsTreeCareSpecialistsRu.businessName} | ${siteConfigAndersonsTreeCareSpecialistsRu.tagline}`,
  description: `${siteConfigAndersonsTreeCareSpecialistsRu.tagline}. ${siteConfigAndersonsTreeCareSpecialistsRu.hero.subhead}`,
}

export default function AndersonsTreeCareSpecialistsRussianPage() {
  return <UniversalCompanyPage config={siteConfigAndersonsTreeCareSpecialistsRu} />
}
