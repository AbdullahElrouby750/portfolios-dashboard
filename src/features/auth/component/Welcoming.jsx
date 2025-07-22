import React from 'react'
import brandIcon from '../../../assets/iconBrand.png'
import { Link } from 'react-router'

function Welcoming({ loginOrSignUp }) {
    return (
        <>
            <div className=' flex items-center'>
                <div className=' w-1/8 mr-0.5'>
                    <img src={brandIcon} alt="my logo" srcset="" />
                </div>
                <p className=' text-2xl font-medium text-brand-default'>ouby's dashboard</p>
            </div>

            <div>
                <p className=' text-brand-default text-3xl'>{loginOrSignUp ? 'Log in to your Account' : 'Create your account'}</p>
                <p className=' font-medium text-lg'>
                    {loginOrSignUp ? "Don't have an account?" : "Have an account?"}
                    <Link className=' underline underline-offset-2 text-blue-700 hover:text-blue-500 active:text-blue-300 transition-colors' to={loginOrSignUp ? '/signup' : '/login'}>{loginOrSignUp ? "sign up" : "Log in now"}</Link>
                </p>
            </div>
        </>
    )
}

export default Welcoming