import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSuttonsEn } from '../../../siteConfig.suttons.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSuttonsEn.businessName} | ${siteConfigSuttonsEn.tagline}`,
  description: `${siteConfigSuttonsEn.tagline}. ${siteConfigSuttonsEn.hero.subhead}`,
  keywords: [
    "Sutton's Tree Service Inc",
    "tree removal Midway Park NC",
    "tree service Midway Park",
    "stump grinding Midway Park",
    "emergency tree service 28544",
    "Mr. Sutton tree service",
  ],
}

export default function SuttonsEnglishPage() {
  return <UniversalCompanyPage config={siteConfigSuttonsEn} />
}
