import React from 'react'
import { motion } from 'motion/react'

function BrandColorBTN({ className = "", onClick = () => { }, children }) {
    return (
        <motion.button
            onClick={onClick}
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
            dark:active:bg-brand-dark-active`}

        >
            {children}
        </motion.button>
    )
}

export default BrandColorBTN