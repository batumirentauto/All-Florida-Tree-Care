import React from 'react'
import type { Metadata } from 'next'
import { siteConfigValeriosTreeServiceMoreRu } from '../../../../siteConfig.valerios-tree-service-more.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigValeriosTreeServiceMoreRu.businessName} | ${siteConfigValeriosTreeServiceMoreRu.tagline}`,
  description: `${siteConfigValeriosTreeServiceMoreRu.tagline}. ${siteConfigValeriosTreeServiceMoreRu.hero.subhead}`,
}

export default function ValeriosTreeServiceMoreRussianPage() {
  return <UniversalCompanyPage config={siteConfigValeriosTreeServiceMoreRu} />
}
