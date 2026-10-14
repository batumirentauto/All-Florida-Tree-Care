import React from 'react'
import { siteConfig } from '../../siteConfig'
import type { Metadata } from 'next'
import './styles.css'

export const metadata: Metadata = {
  title: `${siteConfig.businessName} | ${siteConfig.shortName}`,
  description: `${siteConfig.tagline}. ${siteConfig.hero.subhead}`,
  keywords: [
    'tree removal Palmetto FL',
    'stump grinding Bradenton',
    'emergency tree service Sarasota',
    'bucket truck tree trimming',
    'palm tree trimming Manatee County',
    'hazardous tree takedown',
  ],
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-neutral-950 font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
