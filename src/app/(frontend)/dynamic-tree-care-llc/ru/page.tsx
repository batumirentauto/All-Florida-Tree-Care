import React from 'react'
import type { Metadata } from 'next'
import { siteConfigDynamicTreeCareLlcRu } from '../../../../siteConfig.dynamic-tree-care-llc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigDynamicTreeCareLlcRu.businessName} | ${siteConfigDynamicTreeCareLlcRu.tagline}`,
  description: `${siteConfigDynamicTreeCareLlcRu.tagline}. ${siteConfigDynamicTreeCareLlcRu.hero.subhead}`,
}

export default function DynamicTreeCareLlcRussianPage() {
  return <UniversalCompanyPage config={siteConfigDynamicTreeCareLlcRu} />
}
