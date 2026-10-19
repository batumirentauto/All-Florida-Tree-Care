import React from 'react'
import type { Metadata } from 'next'
import { siteConfigParamountTreeCompanyRu } from '../../../../siteConfig.paramount-tree-company.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigParamountTreeCompanyRu.businessName} | ${siteConfigParamountTreeCompanyRu.tagline}`,
  description: `${siteConfigParamountTreeCompanyRu.tagline}. ${siteConfigParamountTreeCompanyRu.hero.subhead}`,
}

export default function ParamountTreeCompanyRussianPage() {
  return <UniversalCompanyPage config={siteConfigParamountTreeCompanyRu} />
}
