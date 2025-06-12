import React from 'react'
import { motion } from 'motion/react'

function SuccessBTN({ className = "", onClick = () => { }, children }) {
    return (
        <motion.button
            onClick={onClick}
            className={`rounded-lg py-2 font-medium
            transition-colors duration-300 
            ${className} 
            text-neutral-text-light 
            bg-success-default 
            hover:bg-success-dark 
            active:bg-success-active 
            active:border-1 active:border-neutral-borders active:shadow-lg
            dark:bg-success-dark-default 
            dark:hover:bg-success-dark-dark 
            dark:active:bg-success-dark-active`}
            
        >
            {children}
        </motion.button>
    )
}

export default SuccessBTN