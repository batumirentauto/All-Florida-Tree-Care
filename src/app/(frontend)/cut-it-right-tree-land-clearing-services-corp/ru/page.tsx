import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCutItRightTreeLandClearingServicesCorpRu } from '../../../../siteConfig.cut-it-right-tree-land-clearing-services-corp.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCutItRightTreeLandClearingServicesCorpRu.businessName} | ${siteConfigCutItRightTreeLandClearingServicesCorpRu.tagline}`,
  description: `${siteConfigCutItRightTreeLandClearingServicesCorpRu.tagline}. ${siteConfigCutItRightTreeLandClearingServicesCorpRu.hero.subhead}`,
}

export default function CutItRightTreeLandClearingServicesCorpRussianPage() {
  return <UniversalCompanyPage config={siteConfigCutItRightTreeLandClearingServicesCorpRu} />
}
