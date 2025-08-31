import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import BrandColorBTN from '../BTNs/BrandColorBTN'
import { useLocation, useNavigate } from 'react-router';

const variants = {
    start: { y: '-155%' },
    show: {
        y: '10%',
        transition: { duration: 0.5 }
    },
    hide: {
        y: '-155%',
        transition: { duration: 0.150 }
    }
}
function ModalWrapper({ children, show }) {

    const ref = useRef(null)
    

    return (
        <motion.div className=' w-3/4 absolute z-3 p-5
        dark:bg-neutral-background bg-neutral-dark-background rounded-2xl
        flex flex-col justify-around items-center
        '
            variants={variants}
            initial="start"
            animate={show ? "show" : "hide"}
            ref={ref}
        >
            {children}
        </motion.div>
    )
}

export default ModalWrapper