import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTurnKeyTreeEn } from '../../../siteConfig.turn-key-tree.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTurnKeyTreeEn.businessName} | ${siteConfigTurnKeyTreeEn.tagline}`,
  description: `${siteConfigTurnKeyTreeEn.tagline}. ${siteConfigTurnKeyTreeEn.hero.subhead}`,
  keywords: [
    "Turn Key Tree",
    "tree removal Pensacola FL",
    "tree service Pensacola",
    "stump grinding Pensacola",
    "emergency tree service 32526",
    "Josh tree service",
  ],
}

export default function TurnKeyTreeEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTurnKeyTreeEn} />
}
