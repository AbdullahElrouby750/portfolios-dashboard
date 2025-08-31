import React from 'react'
import { motion } from 'motion/react'

const variants = {
    initial: { opacity: 0 },
    simi_bg: {
        opacity: 0.5,
        transition: { duration: 0.25 }
    },
    simi_bg_rm: {
        opacity: 0,
        transition: { duration: 0.25 }
    },
}

function PreventClickLayer({ className }) {
    return (
        <motion.div className={` w-full h-full absolute z-2 ${className} `}
            variants={variants}
            initial={'initial'}
            animate={'simi_bg'}
            exit={'simi_bg_rm'}
        ></motion.div>
    )
}

export default PreventClickLayer