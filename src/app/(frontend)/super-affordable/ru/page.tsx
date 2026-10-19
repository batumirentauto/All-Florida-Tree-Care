import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSuperAffordableRu } from '../../../../siteConfig.super-affordable.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSuperAffordableRu.businessName} | ${siteConfigSuperAffordableRu.tagline}`,
  description: `${siteConfigSuperAffordableRu.tagline}. ${siteConfigSuperAffordableRu.hero.subhead}`,
}

export default function SuperAffordableRussianPage() {
  return <UniversalCompanyPage config={siteConfigSuperAffordableRu} />
}
