import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTlgRu } from '../../../../siteConfig.tlg.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTlgRu.businessName} | ${siteConfigTlgRu.tagline}`,
  description: `${siteConfigTlgRu.tagline}. ${siteConfigTlgRu.hero.subhead}`,
}

export default function TlgRussianPage() {
  return <UniversalCompanyPage config={siteConfigTlgRu} />
}
