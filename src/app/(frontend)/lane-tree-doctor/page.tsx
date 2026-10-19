import React from 'react'
import type { Metadata } from 'next'
import { siteConfigLaneTreeDoctorEn } from '../../../siteConfig.lane-tree-doctor.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigLaneTreeDoctorEn.businessName} | ${siteConfigLaneTreeDoctorEn.tagline}`,
  description: `${siteConfigLaneTreeDoctorEn.tagline}. ${siteConfigLaneTreeDoctorEn.hero.subhead}`,
  keywords: [
    "Lane Tree Doctor",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Julie tree service",
  ],
}

export default function LaneTreeDoctorEnglishPage() {
  return <UniversalCompanyPage config={siteConfigLaneTreeDoctorEn} />
}
