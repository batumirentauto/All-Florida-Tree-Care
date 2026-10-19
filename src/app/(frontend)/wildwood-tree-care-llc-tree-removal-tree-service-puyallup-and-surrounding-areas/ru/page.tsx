import React from 'react'
import type { Metadata } from 'next'
import { siteConfigWildwoodTreeCareLlcTreeRemovalTreeServicePuyallupAndSurroundingAreasRu } from '../../../../siteConfig.wildwood-tree-care-llc-tree-removal-tree-service-puyallup-and-surrounding-areas.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigWildwoodTreeCareLlcTreeRemovalTreeServicePuyallupAndSurroundingAreasRu.businessName} | ${siteConfigWildwoodTreeCareLlcTreeRemovalTreeServicePuyallupAndSurroundingAreasRu.tagline}`,
  description: `${siteConfigWildwoodTreeCareLlcTreeRemovalTreeServicePuyallupAndSurroundingAreasRu.tagline}. ${siteConfigWildwoodTreeCareLlcTreeRemovalTreeServicePuyallupAndSurroundingAreasRu.hero.subhead}`,
}

export default function WildwoodTreeCareLlcTreeRemovalTreeServicePuyallupAndSurroundingAreasRussianPage() {
  return <UniversalCompanyPage config={siteConfigWildwoodTreeCareLlcTreeRemovalTreeServicePuyallupAndSurroundingAreasRu} />
}
