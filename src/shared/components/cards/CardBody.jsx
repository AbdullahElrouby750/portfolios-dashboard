import React from 'react'
import projectPlaceholder from '../../../assets/projectPlaceholder.jpg'

const envMode = import.meta.env.MODE
const baseURL = envMode === 'development' ? import.meta.env.VITE_UPLOADS_URL_LOCAL : import.meta.env.VITE_UPLOADS_URL_SERVER

function CardBody({ children, screenShot, imgOrPdf }) {
    return (
        <div className=' w-full h-1/2 bg-neutral-dark-background flex flex-col justify-between items-center'>
            <div className=' w-full h-9/11 bg-cover'>
                <img className=' w-full h-full' src={screenShot ? (baseURL + screenShot) : projectPlaceholder} alt="" />
            </div>
            {children}
        </div>
    )
}

export default CardBody