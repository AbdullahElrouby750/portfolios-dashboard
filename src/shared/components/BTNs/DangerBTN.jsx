import React from 'react'
import { motion } from 'motion/react'

function DangerBTN({ className = "", onClick = () => { }, children, disabled }) {
    return (
        <motion.button
            onClick={onClick}
            disabled={disabled}
            className={`rounded-lg py-2 font-medium
            transition-colors duration-300 
            ${className} 
            text-neutral-text-light 
            bg-danger-default 
            hover:bg-danger-dark 
            active:bg-danger-active 
            active:border-1 active:border-neutral-borders active:shadow-lg
            dark:bg-danger-dark-default 
            dark:hover:bg-danger-dark-dark 
            dark:active:bg-danger-dark-active
            $disabled:bg-brand-disabled disabled:hover:bg-brand-disabled disabled:active:bg-brand-disabled`}

        >
            {children}
        </motion.button>
    )
}

export default DangerBTN