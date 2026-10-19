import React from 'react'
import type { Metadata } from 'next'
import { siteConfigYourTreeGuyRu } from '../../../../siteConfig.your-tree-guy.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigYourTreeGuyRu.businessName} | ${siteConfigYourTreeGuyRu.tagline}`,
  description: `${siteConfigYourTreeGuyRu.tagline}. ${siteConfigYourTreeGuyRu.hero.subhead}`,
}

export default function YourTreeGuyRussianPage() {
  return <UniversalCompanyPage config={siteConfigYourTreeGuyRu} />
}
