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
        <div className="relative w-full max-w-[400px] flex items-center justify-center h-[80vh]">
            <ul className="relative w-[80%] h-[600px]">
                {cards.map((card, index) => (
                    <CardItem
                        key={ index }
                        cardColor={ card.color }
                        meaning={ card.meaning }
                        index={ index }
                        total={ cards.length }
                        isFront={ index === 0 }
                        onNext={ onNext }
                    />
                ))}
            </ul>
        </div>
    )
}
