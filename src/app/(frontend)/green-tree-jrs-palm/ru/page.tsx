import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGreenTreeJrsPalmRu } from '../../../../siteConfig.green-tree-jrs-palm.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGreenTreeJrsPalmRu.businessName} | ${siteConfigGreenTreeJrsPalmRu.tagline}`,
  description: `${siteConfigGreenTreeJrsPalmRu.tagline}. ${siteConfigGreenTreeJrsPalmRu.hero.subhead}`,
}

export default function GreenTreeJrsPalmRussianPage() {
  return <UniversalCompanyPage config={siteConfigGreenTreeJrsPalmRu} />
}
