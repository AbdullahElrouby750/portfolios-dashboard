import React from 'react'
import { motion } from 'motion/react'

function SuccessBTN({ className = "", onClick = () => { }, children, disabled, type, lightBg }) {
    return (
        <motion.button
            type={type ?? 'button'}
            onClick={onClick}
            disabled={disabled}
            className={`rounded-lg py-2 font-medium
            transition-colors duration-300 
            ${className} 
            ${lightBg ? 'text-neutral-text-dark' : 'text-neutral-text-light'}
            bg-success-default 
            hover:bg-success-dark 
            active:bg-success-active 
            active:border-1 active:border-neutral-borders active:shadow-lg
            ${lightBg ? 'dark:text-neutral-dark-text-dark' : ' dark:text-neutral-dark-text-light'}
            dark:bg-success-dark-default 
            dark:hover:bg-success-dark-dark 
            dark:active:bg-success-dark-active
            disabled:bg-brand-disabled disabled:hover:bg-brand-disabled disabled:active:bg-brand-disabled
            hover:cursor-pointer`}
            
        >
            {children}
        </motion.button>
    )
}

export default SuccessBTN