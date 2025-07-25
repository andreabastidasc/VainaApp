import { useState } from 'react'
import move from 'lodash-move'

import LanguageSwitcher from './components/LanguageSwitcher'
import CardStack from './components/CardStack'
import { meanings } from './data/entries'

const CARD_COLORS = ['#facc15', '#4ade80', '#a78bfa']


export default function App() {
    const initialCards = meanings.map((meaning, i) => ({
        meaning,
        color: CARD_COLORS[i % CARD_COLORS.length],
    }))
    const [cards, setCards] = useState(initialCards)

    function handleNext(fromIndex: number) {
        setCards((prev) => move(prev, fromIndex, prev.length - 1))
    }

    return (
        <div className="min-h-screen bg-yellow-300 flex items-center justify-center py-6 relative">
            <LanguageSwitcher />
            <CardStack 
                cards={ cards } 
                onNext={ handleNext } 
            />
        </div>
    )
}
