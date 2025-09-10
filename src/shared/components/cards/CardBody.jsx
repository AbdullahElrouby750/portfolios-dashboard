import React from 'react'
import projectPlaceholder from '../../../assets/projectPlaceholder.jpg'

const serverURL = import.meta.env.vite_UPLOADS_URL

function CardBody({ children, screenShot, imgOrPdf }) {
    console.log('(serverURL + screenShot):: ', (import.meta.env.VITE_UPLOADS_URL + screenShot))
    return (
        <div className=' w-full h-1/2 bg-neutral-dark-background flex flex-col justify-between items-center'>
            <div className=' w-full h-9/11 bg-cover'>
                <img className=' w-full h-full' src={screenShot ? (import.meta.env.VITE_UPLOADS_URL + screenShot) : projectPlaceholder} alt="" />
            </div>
            {children}
        </div>
    )
}

export default CardBody