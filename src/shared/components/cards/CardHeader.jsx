import React from 'react'

function CardHeader() {
    return (
        <div className=' w-full h-1/5 bg-neutral-dark-borders p-1.5 flex flex-col'>
            <p className=' w-full text-start me-1'>Title:</p>
            <p className=' w-full text-start me-1'>Type:</p>
        </div>
    )
}

export default CardHeader