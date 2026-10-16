import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHardkorRu } from '../../../../siteConfig.hardkor.ru.js'
import { HardkorHeader } from '../../../../components/hardkor/HardkorHeader'
import { HardkorHero } from '../../../../components/hardkor/HardkorHero'
import { HardkorSpecs } from '../../../../components/hardkor/HardkorSpecs'
import { HardkorServices } from '../../../../components/hardkor/HardkorServices'
import { HardkorCalculator } from '../../../../components/hardkor/HardkorCalculator'
import { HardkorGallery } from '../../../../components/hardkor/HardkorGallery'
import { HardkorReviews } from '../../../../components/hardkor/HardkorReviews'
import { HardkorServiceAreas } from '../../../../components/hardkor/HardkorServiceAreas'
import { HardkorFooter } from '../../../../components/hardkor/HardkorFooter'
import { HardkorMobileBar } from '../../../../components/hardkor/HardkorMobileBar'

export const metadata: Metadata = {
  title: `${siteConfigHardkorRu.businessName} | Профессиональный спил деревьев, автокран и вывоз ломовозом`,
  description: `${siteConfigHardkorRu.tagline}. ${siteConfigHardkorRu.hero.subhead}`,
  keywords: [
    'спил деревьев Сент-Питерсберг Флорида',
    'Hard Kor Tree Care',
    'экстренный спил деревьев Пинеллас',
    'снятие упавших деревьев с крыши',
    'вывоз бревен ломовозом с захватом',
    'Керод Рид арборист',
    'спил деревьев после урагана Milton Helene',
    'отчет сертифицированного арбориста Флорида',
  ],
}

export default function HardkorRussianPage() {
  const config = siteConfigHardkorRu

  return (
    <div className="min-h-screen bg-[#090d16] text-white selection:bg-red-600 selection:text-white font-sans antialiased">
      {/* Very Top Row: All Crews Navigation & Language Switcher */}
      <div className="bg-black border-b border-slate-800 text-xs">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-2 sm:px-6">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 bg-red-600 text-white hover:bg-red-500 font-bold px-3 py-1 rounded shadow transition text-xs"
          >
            <span>←</span>
            <span>Все бригады</span>
          </a>
          <div className="flex items-center gap-2">
            <span className="text-slate-400 hidden xs:inline">Язык:</span>
            <a href="/hard-kor" className="text-slate-400 hover:text-white transition text-[11px] font-semibold px-1.5 py-0.5">EN</a>
            <span className="font-black text-white bg-red-700 px-2 py-0.5 rounded text-[11px]">RU</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <HardkorHeader config={config} />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section with Asymmetric Bento Showcase */}
        <HardkorHero config={config} />

        {/* Heavy Rigging & Equipment Specs */}
        <HardkorSpecs config={config} />

        {/* 6 Core Services + Hurricane Recovery Banner */}
        <HardkorServices config={config} />

        {/* Interactive Instant Estimator */}
        <HardkorCalculator config={config} />

        {/* Real Photo Gallery of Storm & Arborist Operations */}
        <HardkorGallery config={config} />

        {/* Verified 4.9 Google Reviews */}
        <HardkorReviews config={config} />

        {/* Service Territory & FAQ Accordion */}
        <HardkorServiceAreas config={config} />
      </main>

      {/* Footer */}
      <HardkorFooter config={config} />

      {/* Mobile Floating Action Bar */}
      <HardkorMobileBar config={config} />
    </div>
  )
}
