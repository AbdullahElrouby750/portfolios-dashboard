import React from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import BrandColorIcons from '../Icons/BrandColorIcon'


const dateOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
};
//todo: add delete and edit icons
function CardFooter({ by, since, portfolio, editFn, deleteFn }) {
    return (
        <div className=' w-full h-2/6 bg-neutral-dark-borders p-1.5'>
            <p className=' w-full text-nowrap text-start me-1'>By : <span className=' text-brand-dark-default'> {by}</span></p>
            <p className=' w-full text-nowrap text-start me-1'>since : <span className=' text-brand-dark-default'> {new Date(since).toLocaleString('en-GB', dateOptions)}</span></p>
            <p className=' w-full text-nowrap text-start me-1'>portfolio : <span className=' text-brand-dark-default'> {portfolio.toString()}</span></p>
            <div className=' w-full h-1/2 flex justify-around items-center'>
                <BrandColorIcons Icon={FaEdit} className={' text-2xl text-yellow-500 hover:text-yellow-400 active:text-yellow-600 cursor-pointer'} />
                <BrandColorIcons Icon={FaTrash} className={' text-2xl text-danger-default hover:text-danger-dark-default active:text-danger-active cursor-pointer'} />
            </div>
        </div>
    )
}

export default CardFooter