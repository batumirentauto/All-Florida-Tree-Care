import React from 'react'
import { siteConfig } from '../../siteConfig'
import type { Metadata } from 'next'
import './styles.css'

export const metadata: Metadata = {
  title: `${siteConfig.businessName} | ${siteConfig.shortName}`,
  description: `${siteConfig.tagline}. ${siteConfig.hero.subhead}`,
  keywords: [
    'спил деревьев',
    'дробление пней',
    'удаление корней',
    'корчевание',
    'измельчитель пней',
    'Сарасота',
    'Брейдентон',
  ],
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="ru" className="dark">
      <body className="min-h-screen bg-neutral-950 font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
