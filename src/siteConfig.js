import { siteConfigEn } from './siteConfig.en.js'
import { siteConfigRu } from './siteConfig.ru.js'

/**
 * -------------------------------------------------------------
 * LANGUAGE CONFIGURATION:
 * Default root language is 'en' (English for USA visitors).
 * Russian version is available at dedicated route '/ru'.
 * -------------------------------------------------------------
 */
export const activeLanguage = 'en'

export const siteConfig = activeLanguage === 'ru' ? siteConfigRu : siteConfigEn
export { siteConfigEn, siteConfigRu }
