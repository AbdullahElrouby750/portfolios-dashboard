import React from 'react'

function AuthsPagesLayout({children}) {
    return (
        <div className='w-full h-lvh flex justify-center items-center bg-gradient-to-bl from-neutral-dark-background to-brand-dark'>
            <div className=' flex flex-col h-10/11 w-fit transition-all duration-500 
            justify-evenly bg-neutral-background rounded-2xl px-3.5 py-1.5
            shadow-2xl shadow-brand-light/90 ring'>
                {children}
            </div>
        </div>
    )
}

export default AuthsPagesLayout