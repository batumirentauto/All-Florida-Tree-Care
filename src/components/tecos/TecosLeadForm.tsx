'use client'

import React, { useState } from 'react'
import { siteConfigTecosEn } from '../../siteConfig.tecos.en'
import type { SiteConfig } from '../../types/siteConfig'

export const TecosLeadForm: React.FC<{ config?: SiteConfig }> = ({ config }) => {
  const siteConfig = config || siteConfigTecosEn
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Tree Removal (Crane & Rigging)',
    cityZip: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 bg-[#090d16] border-t border-yellow-500/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-3xl border-2 border-yellow-500/30 bg-[#0c121e] p-8 sm:p-12 shadow-2xl">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded bg-yellow-400/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-yellow-400 border border-yellow-500/30">
              {siteConfig.ui.formCategory}
            </span>
            <h2 className="mt-3 text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
              {siteConfig.ui.formTitle}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              {siteConfig.ui.formSub}
            </p>
          </div>

          {submitted ? (
            <div className="mt-10 rounded-2xl border border-yellow-500/50 bg-yellow-950/20 p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-slate-950 text-2xl font-black">
                ✓
              </div>
              <h3 className="mt-4 text-xl font-black uppercase text-white">
                {siteConfig.ui.formSuccessTitle}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                {siteConfig.ui.formSuccessSub}
              </p>
              <div className="mt-6">
                <a
                  href={`sms:${siteConfig.phoneRaw}?&body=${encodeURIComponent(siteConfig.lang === 'ru' ? `Здравствуйте, отправил заявку на сайте по услуге ${formData.service}.` : `Hi ${siteConfig.shortName}, I just submitted an estimate request on your website for ${formData.service}.`)}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 px-6 py-3.5 text-xs font-black uppercase tracking-wider text-slate-950 hover:brightness-110 transition shadow-lg shadow-yellow-500/25"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  </svg>
                  <span>{siteConfig.ui.formTextPhotosNow}</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    {siteConfig.ui.formName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
                    placeholder="John Miller"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    {siteConfig.ui.formPhone} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
                    placeholder="(941) ..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    {siteConfig.ui.formService}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
                  >
                    {siteConfig.services.map((svc) => (
                      <option key={svc.id} value={svc.title}>
                        {svc.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    {siteConfig.ui.formCityZip} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.cityZip}
                    onChange={(e) => setFormData({ ...formData, cityZip: e.target.value })}
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
                    placeholder="Bradenton, 34208"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  {siteConfig.ui.formNotes}
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
                  placeholder="Mature oak tree near roof, tight fence gate, or overhead power lines..."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 px-8 py-4 text-sm font-black uppercase tracking-wider text-slate-950 shadow-xl shadow-yellow-500/25 transition hover:brightness-110 active:scale-98"
                >
                  {siteConfig.ui.formSubmit}
                </button>
              </div>

              <div className="pt-2 text-center text-xs text-slate-400">
                {siteConfig.ui.formUrgent}{' '}
                <a
                  href={`sms:${siteConfig.phoneRaw}?&body=${encodeURIComponent(siteConfig.lang === 'ru' ? 'Здравствуйте, отправляю фото пня/дерева для расчета стоимости:' : `Hi ${siteConfig.shortName}, here are photos of my tree/stump for an estimate:`)}`}
                  className="font-bold text-yellow-400 underline underline-offset-2 hover:text-yellow-300"
                >
                  {siteConfig.ui.tapToText} {siteConfig.phone}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
