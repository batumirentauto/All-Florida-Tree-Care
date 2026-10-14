'use client'

import React, { useState } from 'react'
import { siteConfig as defaultSiteConfig } from '../siteConfig'
import type { SiteConfig } from '../types/siteConfig'

export const LeadForm: React.FC<{ config?: SiteConfig }> = ({ config }) => {
  const siteConfig = config || defaultSiteConfig
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: siteConfig.services[0]?.title || '',
    cityOrZip: '',
    notes: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="estimate-form" className="py-20 bg-[#080d1a] scroll-mt-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/90 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-950/60 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-400">
              {siteConfig.ui.formCategory}
            </span>
            <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-white">
              {siteConfig.ui.formTitle}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              {siteConfig.ui.formSub}
            </p>
          </div>

          {submitted ? (
            <div className="mt-8 rounded-2xl border border-amber-500/40 bg-amber-950/40 p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-2xl font-black">
                ✓
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">
                {siteConfig.ui.formSuccessTitle}
              </h3>
              <p className="mt-2 text-sm text-slate-300 max-w-lg mx-auto">
                {siteConfig.ui.formSuccessSub}
              </p>
              <div className="mt-6">
                <a
                  href={`sms:${siteConfig.phoneRaw}?&body=${encodeURIComponent(siteConfig.lang === 'ru' ? `Здравствуйте, отправил заявку на сайте по услуге ${formData.service}.` : `Hi All Florida Tree Care, I just submitted an estimate request on your website for ${formData.service}.`)}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 px-5 py-3 text-sm font-black text-slate-950 hover:brightness-110 transition shadow-lg shadow-amber-500/25"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{siteConfig.ui.formTextPhotosNow}</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-300 tracking-wider">
                    {siteConfig.ui.formName} <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={siteConfig.lang === 'ru' ? 'Например, Александр' : 'e.g. John Miller'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-300 tracking-wider">
                    {siteConfig.ui.formPhone} <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={siteConfig.phone}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-300 tracking-wider">
                    {siteConfig.ui.formService}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                  >
                    {siteConfig.services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* City or Zip */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-300 tracking-wider">
                    {siteConfig.ui.formCityZip} <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={siteConfig.lang === 'ru' ? 'Например, Сарасота или Брейдентон' : 'e.g. Bradenton 34205'}
                    value={formData.cityOrZip}
                    onChange={(e) => setFormData({ ...formData, cityOrZip: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                </div>
              </div>

              {/* Notes & Description */}
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 tracking-wider">
                  {siteConfig.ui.formNotes}
                </label>
                <textarea
                  rows={3}
                  placeholder={siteConfig.lang === 'ru' ? 'Например: 2 дубовых пня на заднем дворе, калитка 90 см...' : 'e.g. 2 oak stumps in backyard, 36-inch gate...'}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                />
              </div>

              {/* Submit CTA */}
              <div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 px-6 py-4 text-base font-black text-slate-950 shadow-xl shadow-amber-500/25 transition hover:brightness-110 active:scale-98"
                >
                  {siteConfig.ui.formSubmit}
                </button>
              </div>

              {/* Secondary alternative text note */}
              <div className="pt-2 text-center text-xs text-slate-400">
                {siteConfig.ui.formUrgent}{' '}
                <a
                  href={`sms:${siteConfig.phoneRaw}?&body=${encodeURIComponent(siteConfig.lang === 'ru' ? 'Здравствуйте, отправляю фото пня/дерева для расчета стоимости:' : 'Hi All Florida Tree Care, here are photos of my tree/stump for an estimate:')}`}
                  className="font-bold text-amber-400 underline underline-offset-2 hover:text-amber-300"
                >
                  {siteConfig.ui.tapToText} {siteConfig.phone}
                </a>.
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
