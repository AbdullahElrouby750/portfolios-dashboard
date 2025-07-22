import React from 'react'

function FormLayout({ children }) {
    return (
        <div className=' p-2.5 flex flex-col justify-around items-center'>
            {children}
        </div>
    )
}

export default FormLayout