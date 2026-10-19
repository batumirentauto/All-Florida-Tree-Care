import React from 'react'
import type { Metadata } from 'next'
import { siteConfigYourTreeGuyEn } from '../../../siteConfig.your-tree-guy.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigYourTreeGuyEn.businessName} | ${siteConfigYourTreeGuyEn.tagline}`,
  description: `${siteConfigYourTreeGuyEn.tagline}. ${siteConfigYourTreeGuyEn.hero.subhead}`,
  keywords: [
    "Your Tree Guy",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Felix tree service",
  ],
}

export default function YourTreeGuyEnglishPage() {
  return <UniversalCompanyPage config={siteConfigYourTreeGuyEn} />
}
