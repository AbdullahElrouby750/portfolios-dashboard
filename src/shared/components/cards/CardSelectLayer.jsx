import { useState } from 'react'
import BrandColorBTN from '../BTNs/BrandColorBTN'
import selectCardFn from './utils/selectCardFn'

function CardSelectLayer({ setUpdateLlists, cardId, cardTitle, cardType, cardOldState, typeValues }) {
    const [cardUpdateableState, setTempCardState] = useState(cardOldState)
    return (
        <div className={` w-full h-full absolute z-3 flex flex-col justify-around items-center rounded-2xl`}>
            <div className={` w-full h-full absolute inset-0 backdrop-blur-md rounded-2xl`}></div>
            <div className='w-full px-4 flex flex-col justify-around items-start z-4'>
                <p className=' text-neutral-text-dark text-xl font-bold '>Title: <span className=' text-brand-default'>{cardTitle}</span></p>
                <p className=' text-neutral-text-dark text-xl font-bold '>Type: <span className=' text-brand-default'>{typeValues[cardType]}</span></p>
                <p className=' text-neutral-text-dark text-xl font-bold '>State: <span className=' text-brand-default'>{cardUpdateableState.toString()}</span></p>
            </div>
            <BrandColorBTN className=' w-3/4 z-4' onClick={() => selectCardFn(setUpdateLlists, cardId, cardUpdateableState, setTempCardState)}>{cardUpdateableState ?  'Remove from ' : 'Add to ' } Portfolio</BrandColorBTN>
        </div>
    )
}

export default CardSelectLayer