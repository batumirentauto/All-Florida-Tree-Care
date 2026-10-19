import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTheLawnGuyEn } from '../../../siteConfig.the-lawn-guy.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTheLawnGuyEn.businessName} | ${siteConfigTheLawnGuyEn.tagline}`,
  description: `${siteConfigTheLawnGuyEn.tagline}. ${siteConfigTheLawnGuyEn.hero.subhead}`,
  keywords: [
    "The Lawn Guy",
    "tree removal Phenix City AL",
    "tree service Phenix City",
    "stump grinding Phenix City",
    "emergency tree service 36867",
    "Craig tree service",
  ],
}

export default function TheLawnGuyEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTheLawnGuyEn} />
}
