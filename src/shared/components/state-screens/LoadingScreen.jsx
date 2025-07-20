import React from 'react'
import { motion } from 'framer-motion'

function LoadingScrean({ loadingText }) {
    const parentVariants = {
        start: { y: 0 },
        bounce: {
            y: [0, -10, 0],
            transition: {
                staggerChildren: 0.1,
                repeat: Infinity,
                duration:0.8
            }
        }
    }

    return (
        <motion.div className=' w-full h-full absolute flex justify-center items-center bg-neutral-background dark:bg-neutral-dark-background'>
            <motion.p className=' text-brand-default dark:text-brand-dark text-5xl flex w-full justify-center'>
                {loadingText}
                <motion.div className='flex justify-around w-1/22' variants={parentVariants} initial="start" animate="bounce" >
                    <motion.span className=' font-extrabold' variants={parentVariants}>.</motion.span>
                    <motion.span className=' font-extrabold' variants={parentVariants}>.</motion.span>
                    <motion.span className=' font-extrabold' variants={parentVariants}>.</motion.span>
                </motion.div>
            </motion.p>
        </motion.div>
    )
}

export default LoadingScrean