import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAffordableTreeServiceIncTreeServiceMiamiDadeBrowardRu } from '../../../../siteConfig.affordable-tree-service-inc-tree-service-miami-dade-broward.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAffordableTreeServiceIncTreeServiceMiamiDadeBrowardRu.businessName} | ${siteConfigAffordableTreeServiceIncTreeServiceMiamiDadeBrowardRu.tagline}`,
  description: `${siteConfigAffordableTreeServiceIncTreeServiceMiamiDadeBrowardRu.tagline}. ${siteConfigAffordableTreeServiceIncTreeServiceMiamiDadeBrowardRu.hero.subhead}`,
}

export default function AffordableTreeServiceIncTreeServiceMiamiDadeBrowardRussianPage() {
  return <UniversalCompanyPage config={siteConfigAffordableTreeServiceIncTreeServiceMiamiDadeBrowardRu} />
}
