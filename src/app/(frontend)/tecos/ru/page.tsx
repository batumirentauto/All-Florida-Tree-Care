import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTecosRu } from '../../../../siteConfig.tecos.ru.js'
import { TecosHeader } from '../../../../components/tecos/TecosHeader'
import { TecosHero } from '../../../../components/tecos/TecosHero'
import { TecosEquipmentSpecs } from '../../../../components/tecos/TecosEquipmentSpecs'
import { TecosCommercialShowcase } from '../../../../components/tecos/TecosCommercialShowcase'
import { TecosCalculator } from '../../../../components/tecos/TecosCalculator'
import { TecosServices } from '../../../../components/tecos/TecosServices'
import { TecosGallery } from '../../../../components/tecos/TecosGallery'
import { TecosTextEstimate } from '../../../../components/tecos/TecosTextEstimate'
import { TecosReviews } from '../../../../components/tecos/TecosReviews'
import { TecosServiceAreas } from '../../../../components/tecos/TecosServiceAreas'
import { TecosLeadForm } from '../../../../components/tecos/TecosLeadForm'
import { TecosFooter } from '../../../../components/tecos/TecosFooter'
import { TecosMobileBar } from '../../../../components/tecos/TecosMobileBar'

export const metadata: Metadata = {
  title: `${siteConfigTecosRu.businessName} | ${siteConfigTecosRu.shortName}`,
  description: `${siteConfigTecosRu.tagline}. ${siteConfigTecosRu.hero.subhead}`,
  keywords: [
    'спил деревьев Брейдентон',
    'удаление деревьев автокраном Сарасота',
    'дробление пней Vermeer Лейквуд-Ранч',
    'кронирование дубов Флорида',
    'обрезка пальм Брейдентон',
    'аварийный спил деревьев',
    'Tecos Total Tree LLC',
  ],
}

export default function TecosRussianPage() {
  const config = siteConfigTecosRu

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-yellow-400 selection:text-slate-950 font-sans antialiased">
      {/* Back to Hub shortcut bar */}
      <div className="bg-black/90 border-b border-yellow-500/20 py-1.5 px-4 text-xs text-slate-400 flex items-center justify-between">
        <a href="/" className="inline-flex items-center gap-1.5 text-yellow-400 hover:text-yellow-300 font-bold transition">
          <span>←</span>
          <span>Каталог всех бригад (Hub)</span>
        </a>
        <div className="flex items-center gap-2">
          <span className="text-slate-500">Язык:</span>
          <a href="/tecos" className="text-slate-400 hover:text-white transition text-[10px] font-semibold">EN</a>
          <span className="font-black text-slate-950 bg-yellow-400 px-1.5 py-0.5 rounded text-[10px]">RU</span>
        </div>
      </div>

      {/* Bespoke Industrial Header */}
      <TecosHeader config={config} />

      {/* Main landing content */}
      <main>
        {/* Heavy Equipment Hero with Triple Bento Showcase */}
        <TecosHero config={config} />

        {/* 4 Technical Equipment Specs & Practical Comparison Grid */}
        <TecosEquipmentSpecs config={config} />

        {/* Commercial Clinic 6124 Case Study Showcase */}
        <TecosCommercialShowcase config={config} />

        {/* Standalone Interactive Job Estimator (#calculator) */}
        <TecosCalculator config={config} />

        {/* 6 Core Contractor Services with High-Vis Yellow Accents */}
        <TecosServices config={config} />

        {/* Real Equipment & Jobs Gallery */}
        <TecosGallery config={config} />

        {/* 3-Step Visual Photo Estimate Process */}
        <TecosTextEstimate config={config} />

        {/* Verified Google Reviews with 4.5 Stars Header */}
        <TecosReviews config={config} />

        {/* Service Area Locations Cloud with Bradenton Base */}
        <TecosServiceAreas config={config} />

        {/* High-CRO Carbon & Yellow Lead Capture Form */}
        <TecosLeadForm config={config} />
      </main>

      {/* Industrial Footer */}
      <TecosFooter config={config} />

      {/* Fixed bottom action bar for mobile devices */}
      <TecosMobileBar config={config} />
    </div>
  )
}
