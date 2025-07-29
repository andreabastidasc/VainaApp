import CardItem from './CardItem'
import type { Meaning } from '../types/Meanings'

type CardStackProps = {
    cards: { meaning: Meaning; color: string }[]
    onNext: (index: number) => void
}

export default function CardStack({ 
    cards, 
    onNext 
}: CardStackProps) {
    return (
        <div className="relative w-full max-w-[400px]  h-[calc(80vh-76px)] flex items-center justify-center pl-2 mt-7">
            <ul className="relative w-[80%] h-[100%]">
                { cards.slice(0, 3).map((card, index) => (
                    <CardItem
                        key={ index }
                        total={ Math.min(3, cards.length) } 
                        cardColor={ card.color }
                        meaning={ card.meaning }
                        index={ index }
                        isFront={ index === 0 }
                        onNext={ onNext }
                    />
                )) }
            </ul>
        </div>
    )
}
