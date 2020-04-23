import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import enUs from './en/us'
import ptBr from './pt/br'

i18n
	// detect user language
	.use(LanguageDetector)
	// pass the instance to react-i18next
	.use(initReactI18next)
	// init i18next
	.init({
		resources : {
			en: {
				translation: enUs,
				us: enUs
			},
			pt: {
				translation: ptBr,
				br: ptBr
			}
		},
		lng: 'en',
		fallbackLng: 'en',
		debug: true,
		interpolation: {
			escapeValue: false,
		},
		react: {
			useSuspense: false,
		},
		returnEmptyString: true,
		returnObjects:  true
	})

export default i18n