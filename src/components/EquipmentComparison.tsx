import React from 'react'
import { siteConfig } from '../siteConfig'

export const EquipmentComparison: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-900/60 border-y border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Real Contractor Insights
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            {siteConfig.realisticComparison.title}
          </h2>
          <p className="mt-3 text-base text-neutral-300">
            Home improvement centers advertise small wheeled grinders for rent. Here is what happens in the Florida heat compared to a dedicated commercial track machine.
          </p>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* DIY / Rental Yard */}
          <div className="rounded-2xl border border-red-900/40 bg-neutral-950/80 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div>
                  <span className="text-xs font-semibold uppercase text-red-400">
                    The High-Effort Option
                  </span>
                  <h3 className="text-xl font-bold text-neutral-200">
                    DIY Home Center Rental
                  </h3>
                </div>
                <span className="rounded-full bg-red-950/80 border border-red-800/80 px-3 py-1 text-xs font-semibold text-red-300">
                  Hidden Time Sink
                </span>
              </div>

              <ul className="mt-6 space-y-4">
                {siteConfig.realisticComparison.diyRental.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-neutral-300">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-950 text-red-400 border border-red-800/80 text-xs font-bold">
                      ✕
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-xl bg-neutral-900/90 p-4 border border-neutral-800 text-xs text-neutral-400">
              <strong className="text-neutral-200 block mb-1">Trade Reality:</strong>
              Most customers who try renting spend $250+ on rental, fuel, and trailer hitches, only to call a professional when the grinder gets stuck on lateral oak roots.
            </div>
          </div>

          {/* Brad's Commercial Grinder */}
          <div className="rounded-2xl border-2 border-emerald-500/50 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            {/* Top highlight ribbon */}
            <div className="absolute -top-3.5 right-6 rounded-full bg-emerald-500 px-3.5 py-1 text-xs font-extrabold text-neutral-950 uppercase tracking-wider shadow">
              Recommended Choice
            </div>

            <div>
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div>
                  <span className="text-xs font-semibold uppercase text-emerald-400">
                    The Factual Contractor Way
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Brad&apos;s Commercial Track Machine
                  </h3>
                </div>
                <span className="rounded-full bg-emerald-950/80 border border-emerald-800/80 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Owner on the Controls
                </span>
              </div>

              <ul className="mt-6 space-y-4">
                {siteConfig.realisticComparison.commercialWay.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-neutral-100">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-900 text-emerald-300 border border-emerald-600 text-xs font-bold">
                      ✓
                    </span>
                    <span className="font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-xl bg-emerald-950/30 p-4 border border-emerald-800/40 text-xs text-emerald-200">
              <div className="flex items-center justify-between">
                <span><strong>No deposit. No trailer. No sore back.</strong> Brad handles the entire process.</span>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="ml-3 shrink-0 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-500"
                >
                  Call Brad
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
