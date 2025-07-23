import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Card from './components/Card'
import { meanings } from './data/entries'

export default function App() {
    const { i18n } = useTranslation()
    const [current, setCurrent] = useState(() => getRandomMeaning())

    function getRandomMeaning() {
        return meanings[Math.floor(Math.random() * meanings.length)]
    }

    function handleNext() {
        setCurrent(getRandomMeaning())
    }

    return (
        <div className="min-h-screen bg-yellow-300 flex flex-col items-center justify-center p-6">
            <div className="flex justify-end gap-2 absolute top-4 right-4">
                {['es', 'en', 'fr', 'pt'].map((lng) => (
                    <button
                        key={lng}
                        onClick={ () => i18n.changeLanguage(lng) }
                        className="bg-white px-3 py-1 rounded shadow text-sm hover:bg-gray-100"
                    >
                        { lng.toUpperCase() }
                    </button>
                ))}
            </div>

            <Card 
                meaning={ current } 
                onNextClick={ handleNext }
            />
        </div>
    )
}
