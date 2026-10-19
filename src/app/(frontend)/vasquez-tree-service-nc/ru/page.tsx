import React from 'react'
import type { Metadata } from 'next'
import { siteConfigVasquezTreeServiceNcRu } from '../../../../siteConfig.vasquez-tree-service-nc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigVasquezTreeServiceNcRu.businessName} | ${siteConfigVasquezTreeServiceNcRu.tagline}`,
  description: `${siteConfigVasquezTreeServiceNcRu.tagline}. ${siteConfigVasquezTreeServiceNcRu.hero.subhead}`,
}

export default function VasquezTreeServiceNcRussianPage() {
  return <UniversalCompanyPage config={siteConfigVasquezTreeServiceNcRu} />
}
