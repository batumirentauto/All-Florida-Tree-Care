import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCamposTreeServiceRu } from '../../../../siteConfig.campos-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCamposTreeServiceRu.businessName} | ${siteConfigCamposTreeServiceRu.tagline}`,
  description: `${siteConfigCamposTreeServiceRu.tagline}. ${siteConfigCamposTreeServiceRu.hero.subhead}`,
}

export default function CamposTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigCamposTreeServiceRu} />
}
