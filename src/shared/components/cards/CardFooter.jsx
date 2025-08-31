import React from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import BrandColorIcons from '../Icons/BrandColorIcon'

//todo: add delete and edit icons
function CardFooter() {
    return (
        <div className=' w-full h-2/6 bg-neutral-dark-borders p-1.5'>
            <p className=' w-full text-start me-1'>By:</p>
            <p className=' w-full text-start me-1'>since:</p>
            <p className=' w-full text-start me-1'>portfolio:</p>
            <div className=' w-full h-1/2 flex justify-around items-center'>
                <BrandColorIcons Icon={FaEdit} className={' text-2xl text-yellow-500 hover:text-yellow-400 active:text-yellow-600 cursor-pointer'}/>
                <BrandColorIcons Icon={FaTrash} className={' text-2xl text-danger-default hover:text-danger-dark-default active:text-danger-active cursor-pointer'}/>
            </div>
        </div>
    )
}

export default CardFooter