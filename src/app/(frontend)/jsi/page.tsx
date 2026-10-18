import React from 'react'
import type { Metadata } from 'next'
import { siteConfigJsiEn } from '../../../siteConfig.jsi.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigJsiEn.businessName} | ${siteConfigJsiEn.tagline}`,
  description: `${siteConfigJsiEn.tagline}. ${siteConfigJsiEn.hero.subhead}`,
  keywords: [
    "JSI Tree Service LLC",
    "tree removal Morganton NC",
    "tree service Morganton",
    "stump grinding Morganton",
    "emergency tree service 28655",
    "Nathan tree service",
  ],
}

export default function JsiEnglishPage() {
  return <UniversalCompanyPage config={siteConfigJsiEn} />
}
