import React from 'react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import BrandColorBTN from '../BTNs/BrandColorBTN'
import { de } from '@faker-js/faker'

function Card({cardData, cardKeys, typeValues, loggedInUserData, userUploadedByData, editFn, deleteFn}) {
    return (
        <div className=' w-70 min-w-60 max-w-80 min-h-100 rounded-2xl text-neutral-text-light overflow-hidden flex-wrap'>
            <CardHeader title={cardData[cardKeys.title]} type={cardData[cardKeys.type]} typeValues={typeValues}/>
            <CardBody screenShot={cardData[cardKeys.bodyCover]} imgOrPdf>
                <BrandColorBTN className=' w-full rounded-none'>More Info</BrandColorBTN>
            </CardBody>
            <CardFooter 
                by={userUploadedByData[cardKeys.by]} 
                since={cardData[cardKeys.since]} 
                portfolio={cardData[cardKeys.portfolio]} 
                userRole={loggedInUserData.role}
                editFn={editFn}
                deleteFn={deleteFn}
                elementData={cardData}
                />
        </div>
    )
}

export default Card