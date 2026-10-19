import React from 'react'
import type { Metadata } from 'next'
import { siteConfigDiscountProfessionalTreeServiceAndFirewoodRu } from '../../../../siteConfig.discount-professional-tree-service-and-firewood.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigDiscountProfessionalTreeServiceAndFirewoodRu.businessName} | ${siteConfigDiscountProfessionalTreeServiceAndFirewoodRu.tagline}`,
  description: `${siteConfigDiscountProfessionalTreeServiceAndFirewoodRu.tagline}. ${siteConfigDiscountProfessionalTreeServiceAndFirewoodRu.hero.subhead}`,
}

export default function DiscountProfessionalTreeServiceAndFirewoodRussianPage() {
  return <UniversalCompanyPage config={siteConfigDiscountProfessionalTreeServiceAndFirewoodRu} />
}
