import { useEffect } from "react";
import { Navigate } from "react-router";
import { useAuthGet } from "../../../shared/hooks/APIs hooks/useAuthApi";
import useAuth from "../../../shared/hooks/conetext-hooks/useAuth";
import LoadingScrean from "../../../shared/components/state-screens/LoadingScreen";


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
        return <LoadingScrean loadingText={'logging in'}/>
    if (isError)
        return <Navigate to={'/login'} />
    return (
        <Navigate to={'/dashboard'} />
    )
}

export default Auth