import React from 'react'
import type { Metadata } from 'next'
import { siteConfigLaneTreeDoctorRu } from '../../../../siteConfig.lane-tree-doctor.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigLaneTreeDoctorRu.businessName} | ${siteConfigLaneTreeDoctorRu.tagline}`,
  description: `${siteConfigLaneTreeDoctorRu.tagline}. ${siteConfigLaneTreeDoctorRu.hero.subhead}`,
}

export default function LaneTreeDoctorRussianPage() {
  return <UniversalCompanyPage config={siteConfigLaneTreeDoctorRu} />
}
