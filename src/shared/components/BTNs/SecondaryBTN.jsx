import React from 'react'
import { motion } from 'motion/react'

function SecondaryBTN({ className = "", onClick = () => { }, children }) {
    return (
        <motion.button
            onClick={onClick}
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
            dark:active:bg-secondary-dark-active`}

        >
            {children}
        </motion.button>
    )
}

export default SecondaryBTN