import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBramlittRu } from '../../../../siteConfig.bramlitt.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBramlittRu.businessName} | Алмазная стрижка пальм и обрезка у крыш в Грин-Коув-Спрингс`,
  description: `${siteConfigBramlittRu.tagline}. ${siteConfigBramlittRu.hero.subhead}`,
}

export default function BramlittRussianPage() {
  return <UniversalCompanyPage config={siteConfigBramlittRu} />
}
