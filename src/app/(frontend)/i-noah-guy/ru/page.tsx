import React from 'react'
import type { Metadata } from 'next'
import { siteConfigINoahGuyRu } from '../../../../siteConfig.i-noah-guy.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigINoahGuyRu.businessName} | ${siteConfigINoahGuyRu.tagline}`,
  description: `${siteConfigINoahGuyRu.tagline}. ${siteConfigINoahGuyRu.hero.subhead}`,
}

export default function INoahGuyRussianPage() {
  return <UniversalCompanyPage config={siteConfigINoahGuyRu} />
}
