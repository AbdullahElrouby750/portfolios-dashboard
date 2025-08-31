import React from 'react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import BrandColorBTN from '../BTNs/BrandColorBTN'

function Card() {
    return (
        <div className=' w-1/4 aspect-4/6 rounded-2xl text-neutral-text-light overflow-hidden'>
            <CardHeader />
            <CardBody >
                <BrandColorBTN className=' w-full rounded-none'>More Info</BrandColorBTN>
            </CardBody>
            <CardFooter />
        </div>
    )
}

export default Card