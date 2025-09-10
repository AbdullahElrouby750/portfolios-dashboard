import React from 'react'

function CardHeader({title, type, typeValues}) {
    return (
        <div className=' w-full h-1/6 bg-neutral-dark-borders p-1.5 flex flex-col'>
            <p className=' w-full text-start me-1'>Title :<span className=' text-brand-dark-default'>  {title}</span></p>
            <p className=' w-full text-start me-1'>Type : <span className=' text-brand-dark-default'> {typeValues[type]}</span></p>
        </div>
    )
}

export default CardHeader