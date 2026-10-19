import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSwampRabbitTreeCoRu } from '../../../../siteConfig.swamp-rabbit-tree-co.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSwampRabbitTreeCoRu.businessName} | ${siteConfigSwampRabbitTreeCoRu.tagline}`,
  description: `${siteConfigSwampRabbitTreeCoRu.tagline}. ${siteConfigSwampRabbitTreeCoRu.hero.subhead}`,
}

export default function SwampRabbitTreeCoRussianPage() {
  return <UniversalCompanyPage config={siteConfigSwampRabbitTreeCoRu} />
}
