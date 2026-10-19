import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTuckerEnterpriseRu } from '../../../../siteConfig.tucker-enterprise.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTuckerEnterpriseRu.businessName} | ${siteConfigTuckerEnterpriseRu.tagline}`,
  description: `${siteConfigTuckerEnterpriseRu.tagline}. ${siteConfigTuckerEnterpriseRu.hero.subhead}`,
}

export default function TuckerEnterpriseRussianPage() {
  return <UniversalCompanyPage config={siteConfigTuckerEnterpriseRu} />
}
