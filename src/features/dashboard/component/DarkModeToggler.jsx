import React, { useState } from 'react'
import {FiMoon, FiSun} from 'react-icons/fi'

function DarkModeToggler() {
    const [darkMode, setDarkMode] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    return (
        <div className=' cursor-pointer flex justify-center items-center w-10 h-10 absolute top-1/70 right-1/15'>
            <label htmlFor="#modeToggler">
                {darkMode ? <FiMoon className=' cursor-pointer w-10 h-10 text-red-700' /> : <FiSun className='w-10 h-10 cursor-pointer'/>}
            </label>
            <input className=' hidden' type="checkbox" name="" id="#modeToggler" onChange={() => {
                setDarkMode(!darkMode)
                document.documentElement.classList.toggle('dark')
                }} checked={darkMode}/>
        </div>
    )
}

export default DarkModeToggler