import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAllenTreeServiceRu } from '../../../../siteConfig.allen-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAllenTreeServiceRu.businessName} | ${siteConfigAllenTreeServiceRu.tagline}`,
  description: `${siteConfigAllenTreeServiceRu.tagline}. ${siteConfigAllenTreeServiceRu.hero.subhead}`,
}

export default function AllenTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigAllenTreeServiceRu} />
}
