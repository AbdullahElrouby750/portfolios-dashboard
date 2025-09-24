import React from 'react'
import { motion } from 'motion/react'

function DangerBTN({ className = "", onClick = () => { }, children, disabled, type, lightBg }) {
    return (
        <motion.button
            type={type ?? 'button'}
            onClick={onClick}
            disabled={disabled}
            className={`rounded-lg py-2 font-medium
            transition-colors duration-300 
            ${className} 
            ${lightBg ? 'text-neutral-text-dark' : 'text-neutral-text-light'}
            bg-danger-default 
            hover:bg-danger-dark 
            active:bg-danger-active 
            active:border-1 active:border-neutral-borders active:shadow-lg
            ${lightBg ? 'dark:text-neutral-dark-text-dark' : ' dark:text-neutral-dark-text-light'}
            dark:bg-danger-dark-default 
            dark:hover:bg-danger-dark-dark 
            dark:active:bg-danger-dark-active
            disabled:bg-brand-disabled disabled:hover:bg-brand-disabled disabled:active:bg-brand-disabled
            hover:cursor-pointer
            `}

        >
            {children}
        </motion.button>
    )
}

export default DangerBTN