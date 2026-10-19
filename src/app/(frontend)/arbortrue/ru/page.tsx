import React from 'react'
import type { Metadata } from 'next'
import { siteConfigArbortrueRu } from '../../../../siteConfig.arbortrue.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigArbortrueRu.businessName} | ${siteConfigArbortrueRu.tagline}`,
  description: `${siteConfigArbortrueRu.tagline}. ${siteConfigArbortrueRu.hero.subhead}`,
}

export default function ArbortrueRussianPage() {
  return <UniversalCompanyPage config={siteConfigArbortrueRu} />
}
