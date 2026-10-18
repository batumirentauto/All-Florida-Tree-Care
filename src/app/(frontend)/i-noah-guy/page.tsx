import React from 'react'
import type { Metadata } from 'next'
import { siteConfigINoahGuyEn } from '../../../siteConfig.i-noah-guy.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigINoahGuyEn.businessName} | ${siteConfigINoahGuyEn.tagline}`,
  description: `${siteConfigINoahGuyEn.tagline}. ${siteConfigINoahGuyEn.hero.subhead}`,
  keywords: [
    "I NOAH GUY TREE & OUTDOORS LLC",
    "tree removal Jacksonville FL",
    "tree service Jacksonville",
    "stump grinding Jacksonville",
    "emergency tree service 32218",
    "Noah tree service",
  ],
}

export default function INoahGuyEnglishPage() {
  return <UniversalCompanyPage config={siteConfigINoahGuyEn} />
}
