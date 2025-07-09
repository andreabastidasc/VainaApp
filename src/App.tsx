import './App.css'
import { useTranslation } from 'react-i18next'


export default function App() {
  const { t, i18n } = useTranslation()

  return (
        <div className="min-h-screen bg-sky-50 p-6">
            <div className="flex justify-end gap-2 mb-6">
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

            <h1 className="text-3xl font-bold mb-2 text-sky-800">VainaApp</h1>
            <h2 className="text-xl font-semibold">{ t('word') }</h2>
            <p className="mb-4">{ t('definition') }</p>

            <h3 className="font-semibold">{ t('examples') }:</h3>
            <ul className="list-disc ml-6 mt-2">
                <li>{ t('sentence1') }</li>
            </ul>
        </div>
  )
}
