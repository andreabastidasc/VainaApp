import { motion } from 'framer-motion'

import CardContent from './CardContent'
import type { Meaning } from '../types/Meanings'

const OFFSET_X = 12
const SCALE_FACTOR = 0.04

type CardItemProps = {
    meaning: Meaning
    cardColor: string
    index: number
    total: number
    isFront: boolean
    onNext: (index: number) => void
}

export default function CardItem({ 
    meaning,
    cardColor, 
    index, 
    total, 
    isFront, 
    onNext 
}: CardItemProps) {
    return (
        <motion.li
            key={ index }
            className="absolute w-full h-[600px] rounded-3xl shadow-xl p-8"
            style={{
                backgroundColor: cardColor,
                cursor: isFront ? 'grab' : 'default',
                listStyle: 'none',
            }}
            animate={{
                left: index * -OFFSET_X,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: total - index,
                y: 0,
            }}
            dragConstraints={ { top: -10, bottom: 0 } }
            onDragEnd={ () => isFront && onNext(index) }
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            drag={ isFront ? 'y' : false }
            dragElastic={ 0.2 }
            dragDirectionLock={true}
        >
            <CardContent 
                meaning={ meaning } 
                showButton={ isFront } 
                onNextClick={ () => onNext(index) } 
            />
        </motion.li>
    )
}
