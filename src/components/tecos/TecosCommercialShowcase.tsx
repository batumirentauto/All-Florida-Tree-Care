import React from 'react'
import { siteConfigTecosEn } from '../../siteConfig.tecos.en'
import type { SiteConfig } from '../../types/siteConfig'

export const TecosCommercialShowcase: React.FC<{ config?: SiteConfig }> = ({ config }) => {
  const siteConfig = config || siteConfigTecosEn

  return (
    <section id="showcase" className="py-16 bg-[#070a12] border-y border-yellow-500/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Visual Case Study Before & After Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border-2 border-yellow-500/30 bg-slate-950 p-2 shadow-2xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <img
                  src="/images/tecos/before-after-oak.jpg"
                  alt="Commercial oak trimming before and after at medical clinic 6124"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="rounded bg-black/80 px-2.5 py-1 text-[11px] font-bold text-yellow-400 border border-yellow-500/40">
                    {siteConfig.lang === 'ru' ? 'До и После: офис 6124' : 'Before & After: Office 6124'}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-black/85 p-2.5 border border-slate-800 text-[11px] text-slate-300">
                  <strong className="text-white">{siteConfig.lang === 'ru' ? 'Результат:' : 'Outcome:'}</strong>{' '}
                  {siteConfig.lang === 'ru'
                    ? 'Сформированная крона, чистый тротуар и полная безопасность для пациентов клиники.'
                    : 'Balanced canopy, clean sidewalks, and safe pedestrian clearance for clinic patients.'}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Commercial Property Capabilities */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded bg-yellow-400/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-yellow-400 border border-yellow-500/30">
              <span>{siteConfig.lang === 'ru' ? 'Кейс коммерческого объекта' : 'Commercial Case Study'}</span>
            </div>

            <h3 className="mt-3 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              {siteConfig.lang === 'ru'
                ? 'Кронирование дубов у офисов и клиник без остановки бизнеса'
                : 'Commercial Tree Care with Zero Business Disruption'}
            </h3>

            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              {siteConfig.lang === 'ru'
                ? 'Для медицинских центров, офисных парков и сообществ HOA критически важно сохранить парковочные места и доступ для клиентов. Бригада Дона работает поэтапно с ограждением рабочих зон.'
                : 'For clinics, retail plazas, and HOA communities, maintaining open parking spaces and safe customer entry is essential. Don phases the work so operations continue smoothly.'}
            </p>

            {/* Testimonial Quote */}
            <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/60 p-4 relative">
              <div className="text-yellow-400 text-2xl font-serif leading-none mb-2">“</div>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                {siteConfig.lang === 'ru'
                  ? 'Кронировали крупный дуб перед входом в клинику за 2 дня. Парковка и тротуары для пациентов оставались чистыми и безопасными. Мы были довольны аккуратностью и сразу наняли их спилить деревья и у себя дома.'
                  : 'Trimmed a very large oak tree in front of our commercial medical office quickly within 2 days. The parking lot and sidewalks were kept completely neat and safe for our patients. We were so impressed we immediately hired them for our home trees too!'}
              </p>
              <div className="mt-3 flex items-center justify-between border-t border-slate-800 pt-2 text-[11px]">
                <span className="font-bold text-white">Anti Aging And Ketamine Center</span>
                <span className="text-yellow-400 font-medium">Bradenton, FL</span>
              </div>
            </div>

            {/* 3 Quick Commercial Facts */}
            <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs">
              <div className="rounded-lg border border-slate-800 bg-slate-950 p-2.5">
                <div className="text-yellow-400 font-mono font-black text-sm">2 DAYS</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{siteConfig.lang === 'ru' ? 'Срок работы' : 'Job Duration'}</div>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-950 p-2.5">
                <div className="text-yellow-400 font-mono font-black text-sm">100%</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{siteConfig.lang === 'ru' ? 'Открытый проезд' : 'Open Access'}</div>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-950 p-2.5">
                <div className="text-yellow-400 font-mono font-black text-sm">HOA/B2B</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{siteConfig.lang === 'ru' ? 'Безнал/счета' : 'Direct Billing'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
