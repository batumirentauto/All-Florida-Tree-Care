import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCheapGuyTreeAndStumpRemovalEn } from '../../../siteConfig.cheap-guy-tree-and-stump-removal.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCheapGuyTreeAndStumpRemovalEn.businessName} | ${siteConfigCheapGuyTreeAndStumpRemovalEn.tagline}`,
  description: `${siteConfigCheapGuyTreeAndStumpRemovalEn.tagline}. ${siteConfigCheapGuyTreeAndStumpRemovalEn.hero.subhead}`,
  keywords: [
    "Cheap Guy Tree and Stump Removal",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function CheapGuyTreeAndStumpRemovalEnglishPage() {
  return <UniversalCompanyPage config={siteConfigCheapGuyTreeAndStumpRemovalEn} />
}
