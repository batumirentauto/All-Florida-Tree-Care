import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSquirrelTreeServicesRu } from '../../../../siteConfig.squirrel-tree-services.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSquirrelTreeServicesRu.businessName} | ${siteConfigSquirrelTreeServicesRu.tagline}`,
  description: `${siteConfigSquirrelTreeServicesRu.tagline}. ${siteConfigSquirrelTreeServicesRu.hero.subhead}`,
}

export default function SquirrelTreeServicesRussianPage() {
  return <UniversalCompanyPage config={siteConfigSquirrelTreeServicesRu} />
}
