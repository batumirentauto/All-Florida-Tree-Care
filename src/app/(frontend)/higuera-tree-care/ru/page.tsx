import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHigueraTreeCareRu } from '../../../../siteConfig.higuera-tree-care.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigHigueraTreeCareRu.businessName} | ${siteConfigHigueraTreeCareRu.tagline}`,
  description: `${siteConfigHigueraTreeCareRu.tagline}. ${siteConfigHigueraTreeCareRu.hero.subhead}`,
}

export default function HigueraTreeCareRussianPage() {
  return <UniversalCompanyPage config={siteConfigHigueraTreeCareRu} />
}
