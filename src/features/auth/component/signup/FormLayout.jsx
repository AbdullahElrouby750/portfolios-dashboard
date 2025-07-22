import React from 'react'

function FormLayout({ children }) {
    return (
        <div className=' p-2.5 h-2/3 flex flex-col justify-around items-center'>
            {children}
        </div>
    )
}

export default FormLayout