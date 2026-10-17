import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAllwoodEn } from '../../../siteConfig.allwood.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAllwoodEn.businessName} | Live Oak Felling, Vermeer Stump Grinding & Clearing St. Johns FL`,
  description: `${siteConfigAllwoodEn.tagline}. ${siteConfigAllwoodEn.hero.subhead}`,
  keywords: [
    'Allwood Tree Service',
    'tree removal Jacksonville FL',
    'live oak pruning St Johns FL',
    'stump grinding Fruit Cove',
    'Vermeer stump milling Mandarin',
    'emergency tree service 32259',
    'James Allwood tree care',
  ],
}

export default function AllwoodEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAllwoodEn} />
}
