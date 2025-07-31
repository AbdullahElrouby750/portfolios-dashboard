import { useEffect } from "react";
import { Navigate } from "react-router";
import { useAuthGet, useAuthPost } from "../../../shared/hooks/APIs hooks/useAuthApi";
import useAuth from "../../../shared/hooks/conetext-hooks/useAuth";
import LoadingScrean from "../../../shared/components/state-screens/LoadingScreen";
import LoginLayout from "../component/login/LoginLayout";


function Login() {
        const {login, setLoggedOut, loggedOut} = useAuth();
        const { data, isLoading, isSuccess, error:QuickLoginError } = useAuthGet('/user' ,['currentUser', 'auth']);
        useEffect(()=>{
            
            if(data && !QuickLoginError && !loggedOut){
                console.log('from if login', data)
                login(data)
            }
        },[data, login, QuickLoginError, loggedOut]);

        
    const {mutate, isPending,  error: simpleloginError} = useAuthPost(['normal','login'], setLoggedOut);

    if (isLoading || isPending)
        return <LoadingScrean loadingText={'logging in'}/>
    if (isSuccess && !loggedOut)
        return <Navigate to={'/dashboard'} />
    return <LoginLayout simpleLogInMutate={mutate} logInError={QuickLoginError || simpleloginError}/>
}

export default Login