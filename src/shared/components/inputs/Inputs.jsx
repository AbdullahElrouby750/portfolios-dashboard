import React from 'react'
//eslint-disable-next-line
import { motion } from 'motion/react'


function Inputs({
    value, setValue,
    error, setError,
    errMsg, setErrMsg,
    lable, type, placeholder, required,
    customOnChange = null, customOnBlur = null, regex,
    className, lightBg }) {

    const variants = {
        normal: {x: 0},
        error: {
            x:[0, 5, 5, -5, 5, -5, 5, -5, 5, -5, 0],
            transition:{duration: 0.5}
        }
    };
    return (
        <div className={` flex flex-col justify-start align-top px-5 py-3 ${className}`}>
            <motion.label className={` text-neutral-text-${lightBg ? 'dark' : 'light'} dark:text-neutral-dark-text-${lightBg ? 'dark' : 'light'} 
            ms-1.5 ${error && 'text-danger-dark-default dark:text-danger-dark-dark-default'}`}>
                {required && <span className='text-danger-default'>*</span>}{lable}
            </motion.label>
            <motion.input
                className={`w-full rounded-lg ps-5 mb-1 h-10 border-brand-default dark:border-brand-dark-default border-2 
                placeholder:text-brand-default dark:placeholder:text-brand-dark-default
                    ${type === 'file' && `file:border file:rounded-4xl file:px-4 file:p-0.5 file:relative file:top-0.5 file:cursor-pointer
                        file:bg-brand-default dark:file:bg-brand-dark-default 
                        hover:file:bg-brand-dark dark:hover:file:bg-brand-dark-dark 
                        active:file:bg-brand-active dark:active:file:bg-brand-dark-active 
                        file:transition-colors file:duration-300`}
                    text-neutral-text-${lightBg ? 'dark' : 'light'} dark: text-neutral-dark-text-${lightBg ? 'dark' : 'light'} 
                    focus:outline-none focus:border-brand-default dark:focus:border-brand-dark-default
                    ${error && 'border-danger-default dark:border-danger-dark-default  border-2'}
                    `}
                value={value}
                type={type ?? "text"}
                placeholder={placeholder ?? `Enter ${lable ?? 'this field'}'s value`}
                required={required}
                onChange={customOnChange ? customOnChange : (e) => {
                    setValue(e.target.value);
                    if (!e.target.value) {
                        setError(true);
                        setErrMsg(`${lable ?? 'Thiis value'} is required!`);
                    } else if (regex && !regex.test(e.target.value)) {
                        setError(true);
                        setErrMsg(`${lable ?? 'This value'} is not valid, please enter a valid value!`
                        );
                    } else {
                        setError(false);
                    }
                }}
                onBlur={customOnBlur ? customOnBlur : (e) => {
                    if (!e.target.value) {
                        setError(true);
                        setErrMsg(`${lable ?? 'This value'} is required!`);
                    } else if (regex && !regex.test(e.target.value)) {
                        setError(true);
                        setErrMsg(`${lable ?? 'This value'} is not valid, please enter a valid value!`
                        );
                    } else {
                        setError(false);
                    }
                }}
                accept={type === 'file' && 'image/*, .pdf, .doc, .docx, .txt, .csv, .xlsx'}
                variants={variants}
                animate={error ? "error" : "normal"}
            />
            {error && <motion.p className={` text-xs ms-5 
                text-danger-dark-default dark:text-danger-dark-dark-default
                `}>
                {errMsg ?? "Enter, a vailed value"}
            </motion.p>}

        </div>
    )
}

export default Inputs