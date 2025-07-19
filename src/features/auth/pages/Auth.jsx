import { useEffect } from "react";
import { Navigate } from "react-router";
import { useAuthGet } from "../../../shared/hooks/APIs hooks/useAuthApi";
import useAuth from "../../../shared/hooks/conetext-hooks/useAuth";


function Auth() {
    const {login} = useAuth();
    const { data, isLoading, isError } = useAuthGet('/user' ,['currentUser', 'auth']);

    useEffect(()=>{
        console.log("from useEffect")
        if(data){
            console.log("from if", data)
            login(data)
        }
    },[data, login])

    if (isLoading)
        return <div className=" h-full w-full flex justify-center align-middle">Logging in...</div>
    if (isError)
        return <Navigate to={'/login'} />
    return (
        <Navigate to={'/dashboard'} />
    )
}

export default Auth