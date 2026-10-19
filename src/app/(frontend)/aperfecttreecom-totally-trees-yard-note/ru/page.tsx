import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAperfecttreecomTotallyTreesYardNoteRu } from '../../../../siteConfig.aperfecttreecom-totally-trees-yard-note.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAperfecttreecomTotallyTreesYardNoteRu.businessName} | ${siteConfigAperfecttreecomTotallyTreesYardNoteRu.tagline}`,
  description: `${siteConfigAperfecttreecomTotallyTreesYardNoteRu.tagline}. ${siteConfigAperfecttreecomTotallyTreesYardNoteRu.hero.subhead}`,
}

export default function AperfecttreecomTotallyTreesYardNoteRussianPage() {
  return <UniversalCompanyPage config={siteConfigAperfecttreecomTotallyTreesYardNoteRu} />
}
