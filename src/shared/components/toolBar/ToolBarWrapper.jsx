import React from 'react'

function ToolBarWrapper({children}) {
    return (
        <div className=' w-full h-10 flex items-center justify-around text-xl
        dark:text-neutral-text-light border-b-neutral-borders border-b-2'>
            {children}
        </div>
    )
}

export default ToolBarWrapper