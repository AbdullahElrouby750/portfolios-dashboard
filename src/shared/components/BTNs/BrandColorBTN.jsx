import React from 'react'
import { motion } from 'motion/react'

function BrandColorBTN({ className = "", onClick = () => { }, children, disabled, type }) {
    return (
        <motion.button
            type={type ?? 'button'}
            onClick={onClick}
            disabled={disabled}
            className={`rounded-lg py-2 font-medium
            transition-colors duration-300 
            ${className} 
            text-neutral-text-dark 
            bg-brand-default 
            hover:bg-brand-dark 
            active:bg-brand-active 
            active:border-1 active:border-neutral-dark-borders active:shadow-lg
            dark:bg-brand-dark-default 
            dark:hover:bg-brand-dark-dark 
            dark:active:bg-brand-dark-active
            disabled:bg-brand-disabled disabled:hover:bg-brand-disabled disabled:active:bg-brand-disabled
            `}

        >
            {children}
        </motion.button>
    )
}

export default BrandColorBTN