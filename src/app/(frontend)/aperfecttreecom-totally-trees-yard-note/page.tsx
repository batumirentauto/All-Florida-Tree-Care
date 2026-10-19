import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAperfecttreecomTotallyTreesYardNoteEn } from '../../../siteConfig.aperfecttreecom-totally-trees-yard-note.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAperfecttreecomTotallyTreesYardNoteEn.businessName} | ${siteConfigAperfecttreecomTotallyTreesYardNoteEn.tagline}`,
  description: `${siteConfigAperfecttreecomTotallyTreesYardNoteEn.tagline}. ${siteConfigAperfecttreecomTotallyTreesYardNoteEn.hero.subhead}`,
  keywords: [
    "aPerfectTree.com Totally Trees Yard Note Tree Service, LLC",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function AperfecttreecomTotallyTreesYardNoteEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAperfecttreecomTotallyTreesYardNoteEn} />
}
