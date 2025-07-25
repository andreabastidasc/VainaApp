import { useTranslation } from 'react-i18next'


export default function LanguageSwitcher() {
    const { i18n } = useTranslation()

    return (
        <div className="flex justify-end gap-2 absolute top-4 right-4 z-20">
            {['es', 'en', 'fr', 'pt'].map((lng) => (
                <button
                    key={ lng }
                    onClick={ () => i18n.changeLanguage(lng) }
                    className="bg-white px-3 py-1 rounded shadow text-sm hover:bg-gray-100"
                >
                    { lng.toUpperCase() }
                </button>
            ))}
        </div>
    )
}
