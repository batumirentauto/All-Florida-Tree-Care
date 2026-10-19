import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHernandezLawncareAndMorellcRu } from '../../../../siteConfig.hernandez-lawncare-and-morellc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigHernandezLawncareAndMorellcRu.businessName} | ${siteConfigHernandezLawncareAndMorellcRu.tagline}`,
  description: `${siteConfigHernandezLawncareAndMorellcRu.tagline}. ${siteConfigHernandezLawncareAndMorellcRu.hero.subhead}`,
}

export default function HernandezLawncareAndMorellcRussianPage() {
  return <UniversalCompanyPage config={siteConfigHernandezLawncareAndMorellcRu} />
}
