import { useEffect } from "react";
import { Navigate } from "react-router";
import { useAuthGet } from "../../../shared/hooks/APIs hooks/useAuthApi";
import useAuth from "../../../shared/hooks/conetext-hooks/useAuth";
import LoadingScrean from "../../../shared/components/state-screens/LoadingScreen";


function Auth() {
    const { login, loggedOut, setLoggedOut } = useAuth();
    const { data, isLoading, error } = useAuthGet('/user', ['currentUser', 'auth'], true);
    setLoggedOut(false);
    useEffect(() => {
        console.log("from useEffect")
        if (data && !error && !loggedOut) {
            console.log("from if auth", data)
            login(data)
        }
    }, [data, login, error, loggedOut])

    if (isLoading)
        return <LoadingScrean loadingText={'logging in'} />
    if (error || !loggedOut)
        return <Navigate to={'/login'} />
    return (
        <Navigate to={'/dashboard'} />
    )
}

export default Auth