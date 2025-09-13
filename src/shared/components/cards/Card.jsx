import React from 'react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import BrandColorBTN from '../BTNs/BrandColorBTN'

function Card({cardData, cardKeys, typeValues, loggedInUserData, userUploadedByData}) {
    return (
        <div className=' w-1/4 aspect-4/6 rounded-2xl text-neutral-text-light overflow-hidden'>
            <CardHeader title={cardData[cardKeys.title]} type={cardData[cardKeys.type]} typeValues={typeValues}/>
            <CardBody screenShot={cardData[cardKeys.bodyCover]} imgOrPdf>
                <BrandColorBTN className=' w-full rounded-none'>More Info</BrandColorBTN>
            </CardBody>
            <CardFooter by={userUploadedByData[cardKeys.by]} since={cardData[cardKeys.since]} portfolio={cardData[cardKeys.portfolio]} userRole={loggedInUserData.role}/>
        </div>
    )
}

export default Card