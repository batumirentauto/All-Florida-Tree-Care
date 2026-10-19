import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHugemAndCutemEn } from '../../../siteConfig.hugem-and-cutem.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigHugemAndCutemEn.businessName} | ${siteConfigHugemAndCutemEn.tagline}`,
  description: `${siteConfigHugemAndCutemEn.tagline}. ${siteConfigHugemAndCutemEn.hero.subhead}`,
  keywords: [
    "Hug'em and Cut'em Tree Service",
    "tree removal Robertsdale AL",
    "tree service Robertsdale",
    "stump grinding Robertsdale",
    "emergency tree service 36567",
    "Tim tree service",
  ],
}

export default function HugemAndCutemEnglishPage() {
  return <UniversalCompanyPage config={siteConfigHugemAndCutemEn} />
}
