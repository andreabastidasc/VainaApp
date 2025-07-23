import { useTranslation } from 'react-i18next'
import { ArrowPathIcon } from '@heroicons/react/24/outline'

import type { Meaning } from '../data/entries'

interface CardProps {
    meaning: Meaning;
    onNextClick: () => void;
}

export default function Card({ 
    meaning, 
    onNextClick 
}: CardProps) {
    const { t, i18n } = useTranslation()
    const lang = i18n.language as 'es' | 'en' | 'fr' | 'pt'

    return (
        <div className="bg-yellow-400 text-black p-8 rounded-3xl shadow-xl max-w-xl md:mt-32 md:mb-20 mt-16 mb-28 relative min-h-[400px] md:min-h-[600px] max-h-[600px] h-[80vh] w-[350px] md:h-auto">
            <h1 className="text-5xl font-extrabold mb-2">{ t('word') }</h1>
            <h2 className="text-lg italic font-medium text-gray-800 mb-4">{meaning.label}</h2>
            <p className="text-base mb-4">{ meaning.definitions[lang] }</p>

            <h3 className="text-sm font-semibold mb-1">{ t('examples') }:</h3>
            <div className="text-sm text-left mt-2">
                { meaning.examples[lang].map((example, i) => (
                    <p key={i} className="mb-1">{ example }</p>
                )) }
            </div>

            <div className="mt-6 flex justify-end absolute right-10 bottom-10">
                <button 
                    className="bg-white/50 text-black rounded-full shadow-md text-sm font-semibold hover:bg-gray-100 transition w-14 h-14 flex items-center justify-center cursor-pointer"
                    onClick={ onNextClick }
                    aria-label={ t('nextButton') }
                >
                    <ArrowPathIcon className="w-6 h-6" />
                </button>
            </div>
        </div>
    )
}
