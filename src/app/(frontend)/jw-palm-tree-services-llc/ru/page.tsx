import React from 'react'
import type { Metadata } from 'next'
import { siteConfigJwPalmTreeServicesLlcRu } from '../../../../siteConfig.jw-palm-tree-services-llc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigJwPalmTreeServicesLlcRu.businessName} | ${siteConfigJwPalmTreeServicesLlcRu.tagline}`,
  description: `${siteConfigJwPalmTreeServicesLlcRu.tagline}. ${siteConfigJwPalmTreeServicesLlcRu.hero.subhead}`,
}

export default function JwPalmTreeServicesLlcRussianPage() {
  return <UniversalCompanyPage config={siteConfigJwPalmTreeServicesLlcRu} />
}
