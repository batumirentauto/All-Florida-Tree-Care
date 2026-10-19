import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSanchezAndSonsServicesRu } from '../../../../siteConfig.sanchez-and-sons-services.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSanchezAndSonsServicesRu.businessName} | ${siteConfigSanchezAndSonsServicesRu.tagline}`,
  description: `${siteConfigSanchezAndSonsServicesRu.tagline}. ${siteConfigSanchezAndSonsServicesRu.hero.subhead}`,
}

export default function SanchezAndSonsServicesRussianPage() {
  return <UniversalCompanyPage config={siteConfigSanchezAndSonsServicesRu} />
}
