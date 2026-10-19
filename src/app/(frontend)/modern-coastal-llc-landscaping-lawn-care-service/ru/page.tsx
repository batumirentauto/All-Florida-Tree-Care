import React from 'react'
import type { Metadata } from 'next'
import { siteConfigModernCoastalLlcLandscapingLawnCareServiceRu } from '../../../../siteConfig.modern-coastal-llc-landscaping-lawn-care-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigModernCoastalLlcLandscapingLawnCareServiceRu.businessName} | ${siteConfigModernCoastalLlcLandscapingLawnCareServiceRu.tagline}`,
  description: `${siteConfigModernCoastalLlcLandscapingLawnCareServiceRu.tagline}. ${siteConfigModernCoastalLlcLandscapingLawnCareServiceRu.hero.subhead}`,
}

export default function ModernCoastalLlcLandscapingLawnCareServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigModernCoastalLlcLandscapingLawnCareServiceRu} />
}
