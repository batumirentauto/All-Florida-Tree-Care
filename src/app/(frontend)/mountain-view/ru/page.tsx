import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMountainViewRu } from '../../../../siteConfig.mountain-view.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMountainViewRu.businessName} | ${siteConfigMountainViewRu.tagline}`,
  description: `${siteConfigMountainViewRu.tagline}. ${siteConfigMountainViewRu.hero.subhead}`,
}

export default function MountainViewRussianPage() {
  return <UniversalCompanyPage config={siteConfigMountainViewRu} />
}
