import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBigDogStumpTreeRu } from '../../../../siteConfig.big-dog-stump-tree.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBigDogStumpTreeRu.businessName} | ${siteConfigBigDogStumpTreeRu.tagline}`,
  description: `${siteConfigBigDogStumpTreeRu.tagline}. ${siteConfigBigDogStumpTreeRu.hero.subhead}`,
}

export default function BigDogStumpTreeRussianPage() {
  return <UniversalCompanyPage config={siteConfigBigDogStumpTreeRu} />
}
