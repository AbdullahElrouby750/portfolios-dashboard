import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import AuthsPagesLayout from '../component/AuthsPagesLayout'
import FormLayout from '../component/signup/FormLayout'
import { useAuthPost } from '../../../shared/hooks/APIs hooks/useAuthApi'
import UserDataForm from '../component/signup/userDataForm';
import Welcoming from '../component/Welcoming';
import QuickAuthBtn from '../component/QuickAuthBtn';
import SimpleAuthTitle from '../component/SimpleAuthTitle'
import LoadingScrean from '../../../shared/components/state-screens/LoadingScreen'
import { githubOAuthLink, googleOAuthLink } from '../../../constants/quickAuthLinks'

function Signup() {
    const { mutate: signup, isPending: signupLoading, error: signupErr } = useAuthPost(['normal', 'signup']);

    if (signupLoading)
        return <LoadingScrean loadingText={"Creating Your Account"} />

    return (
        <AuthsPagesLayout>
            <Welcoming loginOrSignUp={false} />
            <div className=' w-full h-2/3 flex flex-col items-center justify-around '>
                <QuickAuthBtn btnText={"Login with google"} ThisBrandIcon={FcGoogle} goToLink={googleOAuthLink} />
                <QuickAuthBtn btnText={"Login with gitHub"} ThisBrandIcon={FaGithub} goToLink={githubOAuthLink} />
            </div>
            <FormLayout>
                <SimpleAuthTitle />
                <UserDataForm signupFn={signup} />
            </FormLayout>
        </AuthsPagesLayout>
    )
}

export default Signup