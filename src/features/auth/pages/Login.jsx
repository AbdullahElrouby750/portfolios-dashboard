import { useEffect } from "react";
import { Navigate } from "react-router";
import { useAuthGet } from "../../../shared/hooks/APIs hooks/useAuthApi";
import useAuth from "../../../shared/hooks/conetext-hooks/useAuth";


function Login() {
        const {login} = useAuth();
        const { data, isLoading, isSuccess } = useAuthGet('/user' ,['currentUser', 'auth']);
        useEffect(()=>{
            if(data){
                login(data)
            }
        },[data, login])

    if (isLoading)
        return <div className=" h-full w-full flex justify-center align-middle">Logging in...</div>
    if (isSuccess)
        return <Navigate to={'/dashboard'} />
    return (
        <div >
            <a href="http://localhost:3000/auth/google">login with google</a>
        </div>
    )
}

export default Login