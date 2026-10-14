import { siteConfigEn } from './siteConfig.en.js'
import { siteConfigRu } from './siteConfig.ru.js'

/**
 * -------------------------------------------------------------
 * LANGUAGE SWITCHER / ЯЗЫК САЙТА:
 * 'ru' — Русскоязычная версия (для удобной проверки)
 * 'en' — Оригинальная английская версия (US Contractor)
 * -------------------------------------------------------------
 */
export const activeLanguage = 'en' // 'en' — официальная версия для США, 'ru' — для проверки

export const siteConfig = activeLanguage === 'ru' ? siteConfigRu : siteConfigEn
export { siteConfigEn, siteConfigRu }
