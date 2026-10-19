import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTheLawnGuyRu } from '../../../../siteConfig.the-lawn-guy.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTheLawnGuyRu.businessName} | ${siteConfigTheLawnGuyRu.tagline}`,
  description: `${siteConfigTheLawnGuyRu.tagline}. ${siteConfigTheLawnGuyRu.hero.subhead}`,
}

export default function TheLawnGuyRussianPage() {
  return <UniversalCompanyPage config={siteConfigTheLawnGuyRu} />
}
