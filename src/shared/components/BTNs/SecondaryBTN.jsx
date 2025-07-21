import React from 'react'
import { motion } from 'motion/react'

function SecondaryBTN({ className = "", onClick = () => { }, children, disabled  }) {
    return (
        <motion.button
            onClick={onClick}
            disabled={disabled}
            className={`rounded-lg py-2 font-medium
            transition-colors duration-300 
            ${className} 
            text-neutral-text-light 
            bg-secondary-default 
            hover:bg-secondary-dark 
            active:bg-secondary-active 
            active:border-1 active:border-neutral-borders active:shadow-lg
            dark:bg-secondary-dark-default 
            dark:hover:bg-secondary-dark-dark 
            dark:active:bg-secondary-dark-active
            disabled:bg-brand-disabled disabled:hover:bg-brand-disabled disabled:active:bg-brand-disabled`}

        >
            {children}
        </motion.button>
    )
}

export default SecondaryBTN