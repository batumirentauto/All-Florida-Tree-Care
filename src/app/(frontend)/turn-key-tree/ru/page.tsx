import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTurnKeyTreeRu } from '../../../../siteConfig.turn-key-tree.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTurnKeyTreeRu.businessName} | ${siteConfigTurnKeyTreeRu.tagline}`,
  description: `${siteConfigTurnKeyTreeRu.tagline}. ${siteConfigTurnKeyTreeRu.hero.subhead}`,
}

export default function TurnKeyTreeRussianPage() {
  return <UniversalCompanyPage config={siteConfigTurnKeyTreeRu} />
}
