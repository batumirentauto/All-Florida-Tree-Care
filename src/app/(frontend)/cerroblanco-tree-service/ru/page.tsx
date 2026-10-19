import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCerroblancoTreeServiceRu } from '../../../../siteConfig.cerroblanco-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCerroblancoTreeServiceRu.businessName} | ${siteConfigCerroblancoTreeServiceRu.tagline}`,
  description: `${siteConfigCerroblancoTreeServiceRu.tagline}. ${siteConfigCerroblancoTreeServiceRu.hero.subhead}`,
}

export default function CerroblancoTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigCerroblancoTreeServiceRu} />
}
