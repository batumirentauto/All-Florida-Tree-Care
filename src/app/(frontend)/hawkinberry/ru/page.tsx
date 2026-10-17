import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHawkinberryRu } from '../../../../siteConfig.hawkinberry.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigHawkinberryRu.businessName} | Высотная обрезка спайдер-подъемником в Джексонвилл-Бич`,
  description: `${siteConfigHawkinberryRu.tagline}. ${siteConfigHawkinberryRu.hero.subhead}`,
}

export default function HawkinberryRussianPage() {
  return <UniversalCompanyPage config={siteConfigHawkinberryRu} />
}
