import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHawkinberryEn } from '../../../siteConfig.hawkinberry.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigHawkinberryEn.businessName} | Spider Lift Tree Pruning, Tight Access & Utility Clearance Jax Beach`,
  description: `${siteConfigHawkinberryEn.tagline}. ${siteConfigHawkinberryEn.hero.subhead}`,
  keywords: [
    'Hawkinberry Tree Company',
    'spider lift tree service Jacksonville Beach',
    'tree trimming Ponte Vedra',
    'tight access tree removal Duval County',
    'power line tree pruning 32250',
    'Jeff Hawkinberry tree care',
  ],
}

export default function HawkinberryEnglishPage() {
  return <UniversalCompanyPage config={siteConfigHawkinberryEn} />
}
