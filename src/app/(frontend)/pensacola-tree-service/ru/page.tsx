import React from 'react'
import type { Metadata } from 'next'
import { siteConfigPensacolaTreeServiceRu } from '../../../../siteConfig.pensacola-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigPensacolaTreeServiceRu.businessName} | ${siteConfigPensacolaTreeServiceRu.tagline}`,
  description: `${siteConfigPensacolaTreeServiceRu.tagline}. ${siteConfigPensacolaTreeServiceRu.hero.subhead}`,
}

export default function PensacolaTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigPensacolaTreeServiceRu} />
}
