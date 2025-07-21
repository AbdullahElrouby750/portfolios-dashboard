import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import brandIcon from '../../../../assets/iconBrand.png'
import BrandColorBTN from '../../../../shared/components/BTNs/BrandColorBTN'
import Inputs from '../../../../shared/components/inputs/Inputs'
import QuickLoginBtn from './QuickLoginBtn'

const emailRegex = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");
const passwordRegex = new RegExp('^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$');

function LoginLayout({simpleLogInMutate, logInError}) {
    const [emailVal, setEmailVal] = useState(null);
    const [emailErr, setEmailErr] = useState(false);
    const [emailErrMsg, setEmailErrMsg] = useState('');
    const [passVal, setPassVal] = useState(null);
    const [passErr, setPassErr] = useState(false);
    const [passErrMsg, setPassErrMsg] = useState('');

    return (
        <div className='w-full h-lvh flex justify-center items-center bg-gradient-to-bl from-neutral-dark-background to-brand-dark'>
            <motion.div className=' flex flex-col h-8/10 w-fit transition-all duration-500 
            justify-evenly bg-neutral-background rounded-2xl px-3.5 py-1.5
            shadow-2xl shadow-brand-light/90 ring'>
                <div className=' flex items-center'>
                    <div className=' w-1/8 mr-0.5'>
                        <img src={brandIcon} alt="my logo" srcset="" />
                    </div>
                    <p className=' text-2xl font-medium text-brand-default'>ouby's dashboard</p>
                </div>

                <div>
                    <p className=' text-brand-default text-3xl'>Log in to your Account</p>
                    <p className=' font-medium text-lg'>Don't have an account? <Link className=' underline underline-offset-2 text-blue-700 hover:text-blue-500 active:text-blue-300 transition-colors' to={'/signup'}>sign up</Link></p>
                </div>

                <div className=' w-full h-1/4 flex flex-col items-center justify-around '>
                    <QuickLoginBtn btnText={"Login with google"} ThisBrandIcon={FcGoogle} goToLink={"http://localhost:3000/auth/google"} />
                    <QuickLoginBtn btnText={"Login with gitHub"} ThisBrandIcon={FaGithub} goToLink={"http://localhost:3000/auth/google"} />
                </div>

                <div>
                    <div className=' w-full flex justify-around items-center'>
                        <div className=' bg-gray-400 w-10 h-0.25 border-0'></div>
                        <p className=" text-neutral-text-dark w-3/4 text-center">Or with email and password</p>
                        <div className=' bg-gray-400 w-10 h-0.25 border-0'></div>
                    </div>

                    <div>
                        <Inputs 
                            value={emailVal} 
                            setValue={setEmailVal} 
                            error={emailErr} 
                            setError={setEmailErr} 
                            errMsg={emailErrMsg} 
                            setErrMsg={setEmailErrMsg} 
                            lable={"Email"} 
                            type={"email"} 
                            placeholder={"ex: john@doe.com"} 
                            required
                            regex={emailRegex}
                            lightBg
                            />
                        <Inputs 
                            value={passVal} 
                            setValue={setPassVal} 
                            error={passErr} 
                            setError={setPassErr} 
                            errMsg={passErrMsg} 
                            setErrMsg={setPassErrMsg} 
                            lable={"Password"} 
                            type={"password"} 
                            placeholder={"enter your password here..."} 
                            required
                            regex={passwordRegex}
                            lightBg
                            />

                            <BrandColorBTN 
                            onClick={() => (!emailErr && !passErr && emailVal && passVal) && simpleLogInMutate({path:'/login', data:{email:emailVal, password: passVal}})} 
                            className=' w-1/4'
                            disabled={emailErr || passErr || !(emailVal && passVal)}>
                                Login
                                </BrandColorBTN>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default LoginLayout

