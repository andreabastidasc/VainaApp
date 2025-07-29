import { useState } from 'react'
import move from 'lodash-move'

import { meanings } from './data/entries'
import CardStack from './components/CardStack'
import LanguageSwitcher from './components/LanguageSwitcher'


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
        <div className="h-[100vh] bg-yellow-300 relative flex flex-col justify-center items-center">
            <div className='flex flex-row items-center justify-between absolute z-20 top-0 w-full rounded-lg shadow-md bg-white/10 backdrop-blur-md px-4 py-2 sm:max-h-[76px] lg:max-h-[88px]'>
                <img
                    src="/vaina.png"
                    alt="logo"
                    className="w-auto h-15 lg:h-18 object-contain"
                />
                <LanguageSwitcher />
            </div>
           
            <CardStack 
                cards={ cards } 
                onNext={ handleNext } 
            />
        </div>
    )
}
