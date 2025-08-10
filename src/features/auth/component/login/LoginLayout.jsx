import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import BrandColorBTN from '../../../../shared/components/BTNs/BrandColorBTN'
import Inputs from '../../../../shared/components/inputs/Inputs'
import QuickAuthBtn from '../QuickAuthBtn'
import AuthsPagesLayout from '../AuthsPagesLayout'
import Welcoming from '../Welcoming'
import SimpleAuthTitle from '../SimpleAuthTitle'
import { googleOAuthLink, githubOAuthLink } from '../../../../constants/quickAuthLinks'

const emailRegex = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");
const passwordRegex = new RegExp('^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$');

function LoginLayout({ simpleLogInMutate, logInError }) {
    const [emailVal, setEmailVal] = useState(null);
    const [emailErr, setEmailErr] = useState(false);
    const [emailErrMsg, setEmailErrMsg] = useState('');
    const [passVal, setPassVal] = useState(null);
    const [passErr, setPassErr] = useState(false);
    const [passErrMsg, setPassErrMsg] = useState('');

    return (
        <AuthsPagesLayout>

            <Welcoming loginOrSignUp={true} />

            <div className=' w-full h-1/4 flex flex-col items-center justify-around '>
                <QuickAuthBtn btnText={"Login with google"} ThisBrandIcon={FcGoogle} goToLink={googleOAuthLink} />
                <QuickAuthBtn btnText={"Login with github"} ThisBrandIcon={FaGithub} goToLink={githubOAuthLink} />
            </div>

            <div>
                <SimpleAuthTitle />

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
                        placeholder={"Ex: john@doe.com"}
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
                        placeholder={"Enter your password here..."}
                        required
                        regex={passwordRegex}
                        lightBg
                    />

                    <BrandColorBTN
                        onClick={() => (!emailErr && !passErr && emailVal && passVal) && simpleLogInMutate({ path: '/login', data: { email: emailVal, password: passVal } })}
                        className=' w-1/4'
                        disabled={emailErr || passErr || !(emailVal && passVal)}>
                        Login
                    </BrandColorBTN>
                </div>
            </div>

        </AuthsPagesLayout>
    )
}

export default LoginLayout

