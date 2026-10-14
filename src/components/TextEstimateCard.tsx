import React from 'react'
import { siteConfig } from '../siteConfig'

export const TextEstimateCard: React.FC = () => {
  return (
    <section id="text-estimate" className="relative scroll-mt-24 py-16 bg-neutral-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 sm:p-10 shadow-2xl">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-300">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Самый быстрый способ оценки
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white">
              {siteConfig.howEstimatesWork.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-300">
              Не нужно ждать замерщика в рабочие часы. Отправьте 2 фото с телефона и получите точную фиксированную смету за 15 минут.
            </p>
          </div>

          {/* 3 Step Visual Flow */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Step 1 */}
            <div className="relative rounded-xl border border-neutral-800 bg-neutral-900/90 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/80 font-mono font-bold text-lg">
                    01
                  </span>
                  <span className="text-xs uppercase font-semibold text-neutral-400">Фотографии</span>
                </div>
                <h3 className="mt-4 text-base font-bold text-white">
                  Сделайте 2 фото
                </h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  {siteConfig.howEstimatesWork.step1}
                </p>
              </div>
              <div className="mt-4 rounded-lg bg-neutral-950/70 p-2.5 text-xs text-neutral-400 border border-neutral-800">
                💡 Совет: 1 общий план с забором/домом и 1 фото основания пня крупно.
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-xl border border-neutral-800 bg-neutral-900/90 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-950 text-amber-400 border border-amber-800/80 font-mono font-bold text-lg">
                    02
                  </span>
                  <span className="text-xs uppercase font-semibold text-neutral-400">Условия</span>
                </div>
                <h3 className="mt-4 text-base font-bold text-white">
                  Диаметр и препятствия
                </h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  {siteConfig.howEstimatesWork.step2}
                </p>
              </div>
              <div className="mt-4 rounded-lg bg-neutral-950/70 p-2.5 text-xs text-neutral-400 border border-neutral-800">
                📏 Измерьте рулеткой или шагами ширину спила в самом широком месте.
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-xl border border-neutral-800 bg-neutral-900/90 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/80 font-mono font-bold text-lg">
                    03
                  </span>
                  <span className="text-xs uppercase font-semibold text-neutral-400">Смета</span>
                </div>
                <h3 className="mt-4 text-base font-bold text-white">
                  Фиксированная цена
                </h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  {siteConfig.howEstimatesWork.step3}
                </p>
              </div>
              <div className="mt-4 rounded-lg bg-neutral-950/70 p-2.5 text-xs text-neutral-400 border border-neutral-800">
                ⚡ Личный ответ владельца. Фиксированная сумма в смете не изменится на месте.
              </div>
            </div>
          </div>

          {/* Action Callout */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <a
              href={`sms:${siteConfig.phoneRaw}?&body=Здравствуйте,%20отправляю%20фото%20пня/дерева%20для%20расчета%20стоимости:`}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-amber-500 px-8 py-4 text-base font-extrabold text-neutral-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400 active:scale-98"
            >
              <svg className="h-5 w-5 text-neutral-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Отправить фото Брэду: {siteConfig.phone}</span>
            </a>

            <span className="text-xs text-neutral-400">
              Удобнее позвонить? <a href={`tel:${siteConfig.phoneRaw}`} className="text-emerald-400 font-semibold underline underline-offset-2">Звоните прямо сейчас: {siteConfig.phone}</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
