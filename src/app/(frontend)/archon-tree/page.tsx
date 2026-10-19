import React from 'react'
import type { Metadata } from 'next'
import { siteConfigArchonTreeEn } from '../../../siteConfig.archon-tree.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigArchonTreeEn.businessName} | ${siteConfigArchonTreeEn.tagline}`,
  description: `${siteConfigArchonTreeEn.tagline}. ${siteConfigArchonTreeEn.hero.subhead}`,
  keywords: [
    "ARCHON TREE",
    "tree removal Olalla WA",
    "tree service Olalla",
    "stump grinding Olalla",
    "emergency tree service 98359",
    "Archon tree service",
  ],
}

export default function ArchonTreeEnglishPage() {
  return <UniversalCompanyPage config={siteConfigArchonTreeEn} />
}
