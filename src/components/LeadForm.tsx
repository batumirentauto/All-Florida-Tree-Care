'use client'

import React, { useState } from 'react'
import { siteConfig } from '../siteConfig'

export const LeadForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: siteConfig.services[0]?.title || 'Commercial Stump Grinding',
    cityOrZip: '',
    notes: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated fast client submission with instant CRO feedback
    setSubmitted(true)
  }

  return (
    <section id="estimate-form" className="py-20 bg-neutral-950 scroll-mt-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/90 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
              Straightforward Estimates
            </span>
            <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-white">
              Request Your Free Project Estimate
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-300">
              Brad reviews all submissions personally. No high-pressure sales reps, no hidden dispatch fees.
            </p>
          </div>

          {submitted ? (
            <div className="mt-8 rounded-2xl border border-emerald-500/40 bg-emerald-950/40 p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-neutral-950 text-2xl font-bold">
                ✓
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">
                Estimate Request Received!
              </h3>
              <p className="mt-2 text-sm text-neutral-300 max-w-lg mx-auto">
                Thank you, {formData.name || 'there'}. Brad will review your details and reach out to {formData.phone} shortly.
              </p>
              <div className="mt-6">
                <a
                  href={`sms:${siteConfig.phoneRaw}?&body=Hi%20Brad,%20I%20just%20submitted%20an%20estimate%20request%20on%20your%20site%20for%20${encodeURIComponent(formData.service)}.`}
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-bold text-neutral-950 hover:bg-amber-400 transition"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Text Photos Now for Faster Quote</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-neutral-300 tracking-wider">
                    Full Name <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-neutral-300 tracking-wider">
                    Phone Number <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(941) 555-0123"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-neutral-300 tracking-wider">
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
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
                  <label className="block text-xs font-semibold uppercase text-neutral-300 tracking-wider">
                    City or Zip Code <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bradenton 34205"
                    value={formData.cityOrZip}
                    onChange={(e) => setFormData({ ...formData, cityOrZip: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Notes & Description */}
              <div>
                <label className="block text-xs font-semibold uppercase text-neutral-300 tracking-wider">
                  Details (Stump Count, Gate Width, or Underground Pipes)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. 2 oak stumps in backyard, 36-inch gate, pool enclosure is 10 ft away..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              {/* Submit CTA */}
              <div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-emerald-600 px-6 py-4 text-base font-bold text-white shadow-xl shadow-emerald-950/50 transition hover:bg-emerald-500 active:scale-98"
                >
                  Submit for a Straightforward Estimate
                </button>
              </div>

              {/* Secondary alternative text note */}
              <div className="pt-2 text-center text-xs text-neutral-400">
                Need an immediate reply? You can also{' '}
                <a
                  href={`sms:${siteConfig.phoneRaw}?&body=Hi%20Brad,%20here%20are%20photos%20of%20my%20stump/tree%20for%20an%20estimate:`}
                  className="font-bold text-amber-400 underline underline-offset-2 hover:text-amber-300"
                >
                  text 2 photos directly to {siteConfig.phone}
                </a>.
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
