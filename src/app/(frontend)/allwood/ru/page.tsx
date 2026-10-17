import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAllwoodRu } from '../../../../siteConfig.allwood.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAllwoodRu.businessName} | Спил дубов, дробление пней фрезой Vermeer в Сент-Джонс и Джексонвилле`,
  description: `${siteConfigAllwoodRu.tagline}. ${siteConfigAllwoodRu.hero.subhead}`,
}

export default function AllwoodRussianPage() {
  return <UniversalCompanyPage config={siteConfigAllwoodRu} />
}
