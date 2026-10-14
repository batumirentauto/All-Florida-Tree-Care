import React from 'react'
import { siteConfig } from '../../siteConfig'
import type { Metadata } from 'next'
import './styles.css'

export const metadata: Metadata = {
  title: `${siteConfig.businessName} | Tree Removal & Stump Grinding`,
  description: `${siteConfig.tagline}. ${siteConfig.hero.subhead}`,
  keywords: [
    'stump grinding',
    'tree removal',
    'root clearing',
    'Bradenton',
    'Sarasota',
    'commercial track grinder',
    'Florida arborist',
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
