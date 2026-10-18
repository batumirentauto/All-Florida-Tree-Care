import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMorgansRu } from '../../../../siteConfig.morgans.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMorgansRu.businessName} | ${siteConfigMorgansRu.tagline}`,
  description: `${siteConfigMorgansRu.tagline}. ${siteConfigMorgansRu.hero.subhead}`,
}

export default function MorgansRussianPage() {
  return <UniversalCompanyPage config={siteConfigMorgansRu} />
}
