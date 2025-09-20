//eslint-disable-next-line
import { motion } from 'motion/react'

const variants = {
    normal: { x: 0 },
    error: {
        x: [0, 5, 5, -5, 5, -5, 5, -5, 5, -5, 0],
        transition: { duration: 0.5 }
    }
};

function TextArea({
    value, setValue,
    error, setError,
    errMsg, setErrMsg,
    lable, fieldName, placeholder, required = false,
    customOnChange = null, customOnBlur = null, onKeyPress = null,
    className, lightBg }) {

    return (
        <div className={`relative flex flex-col justify-start align-top px-5 py-3 ${className}`}>
            <motion.label className={` text-neutral-text-${lightBg ? 'dark' : 'light'} dark:text-neutral-dark-text-${lightBg ? 'dark' : 'light'} 
            ms-1.5 ${error && 'text-danger-dark-default dark:text-danger-dark-dark-default'}`}>
                {lable}{required && <span className='text-danger-default'>*</span>}
            </motion.label>
            <motion.textarea
                className={`w-full rounded-lg ps-5 mb-1 h-10 border-brand-default dark:border-brand-dark-default border-2 
                placeholder:text-brand-default dark:placeholder:text-brand-dark-default
                    text-neutral-text-${lightBg ? 'dark' : 'light'} dark: text-neutral-dark-text-${lightBg ? 'dark' : 'light'} 
                    focus:outline-none focus:border-brand-default dark:focus:border-brand-dark-default
                    ${error && 'border-danger-default dark:border-danger-dark-default  border-2'}
                    ${className}`}
                value={value}
                placeholder={placeholder ?? `Enter ${lable ?? 'this field'}'s value`}
                required={required}
                onChange={customOnChange ? (e) => customOnChange(e, null, fieldName, required) : (e) => {
                    setValue(e.target.value);
                    if (!e.target.value) {
                        setError(true);
                        setErrMsg(`${lable ?? 'Thiis value'} is required!`);
                    }  else {
                        setError(false);
                    }
                }}
                onBlur={customOnBlur ? (e) => customOnBlur(e, null, fieldName, required) : (e) => {
                    if (!e.target.value) {
                        setError(true);
                        setErrMsg(`${lable ?? 'This value'} is required!`);
                    }  else {
                        setError(false);
                    }
                }}
                onKeyPress={onKeyPress ? onKeyPress : () => { }}
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

export default TextArea