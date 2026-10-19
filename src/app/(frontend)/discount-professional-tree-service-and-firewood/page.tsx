import React from 'react'
import type { Metadata } from 'next'
import { siteConfigDiscountProfessionalTreeServiceAndFirewoodEn } from '../../../siteConfig.discount-professional-tree-service-and-firewood.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigDiscountProfessionalTreeServiceAndFirewoodEn.businessName} | ${siteConfigDiscountProfessionalTreeServiceAndFirewoodEn.tagline}`,
  description: `${siteConfigDiscountProfessionalTreeServiceAndFirewoodEn.tagline}. ${siteConfigDiscountProfessionalTreeServiceAndFirewoodEn.hero.subhead}`,
  keywords: [
    "Discount Professional Tree Service and Firewood",
    "tree removal Austell GA",
    "tree service Austell",
    "stump grinding Austell",
    "emergency tree service 30168",
    "David tree service",
  ],
}

export default function DiscountProfessionalTreeServiceAndFirewoodEnglishPage() {
  return <UniversalCompanyPage config={siteConfigDiscountProfessionalTreeServiceAndFirewoodEn} />
}
