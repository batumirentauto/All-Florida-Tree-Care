import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHugemAndCutemRu } from '../../../../siteConfig.hugem-and-cutem.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigHugemAndCutemRu.businessName} | ${siteConfigHugemAndCutemRu.tagline}`,
  description: `${siteConfigHugemAndCutemRu.tagline}. ${siteConfigHugemAndCutemRu.hero.subhead}`,
}

export default function HugemAndCutemRussianPage() {
  return <UniversalCompanyPage config={siteConfigHugemAndCutemRu} />
}
