import fr from './fr.json'
import en from './en.json'

type MessageSchema = typeof fr
export default defineI18nConfig<MessageSchema>(() => ({
    legacy: false,
    locale: 'fr',
    messages: {
        en: en,
        fr: fr
    }
}))