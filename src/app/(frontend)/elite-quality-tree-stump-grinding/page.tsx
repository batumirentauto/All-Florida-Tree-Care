import React from 'react'
import type { Metadata } from 'next'
import { siteConfigEliteQualityTreeStumpGrindingEn } from '../../../siteConfig.elite-quality-tree-stump-grinding.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigEliteQualityTreeStumpGrindingEn.businessName} | ${siteConfigEliteQualityTreeStumpGrindingEn.tagline}`,
  description: `${siteConfigEliteQualityTreeStumpGrindingEn.tagline}. ${siteConfigEliteQualityTreeStumpGrindingEn.hero.subhead}`,
  keywords: [
    "Elite Quality Tree & Stump-Grinding Llc",
    "tree removal Sarasota FL",
    "tree service Sarasota",
    "stump grinding Sarasota",
    "emergency tree service 34231",
    "Lead Arborist tree service",
  ],
}

export default function EliteQualityTreeStumpGrindingEnglishPage() {
  return <UniversalCompanyPage config={siteConfigEliteQualityTreeStumpGrindingEn} />
}
