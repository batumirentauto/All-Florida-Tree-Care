import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAffordableTreeServiceIncTreeServiceMiamiRu } from '../../../../siteConfig.affordable-tree-service-inc-tree-service-miami.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAffordableTreeServiceIncTreeServiceMiamiRu.businessName} | ${siteConfigAffordableTreeServiceIncTreeServiceMiamiRu.tagline}`,
  description: `${siteConfigAffordableTreeServiceIncTreeServiceMiamiRu.tagline}. ${siteConfigAffordableTreeServiceIncTreeServiceMiamiRu.hero.subhead}`,
}

export default function AffordableTreeServiceIncTreeServiceMiamiRussianPage() {
  return <UniversalCompanyPage config={siteConfigAffordableTreeServiceIncTreeServiceMiamiRu} />
}
