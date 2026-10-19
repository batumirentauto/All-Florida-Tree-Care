import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAlamowTreeCoRu } from '../../../../siteConfig.alamow-tree-co.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAlamowTreeCoRu.businessName} | ${siteConfigAlamowTreeCoRu.tagline}`,
  description: `${siteConfigAlamowTreeCoRu.tagline}. ${siteConfigAlamowTreeCoRu.hero.subhead}`,
}

export default function AlamowTreeCoRussianPage() {
  return <UniversalCompanyPage config={siteConfigAlamowTreeCoRu} />
}
