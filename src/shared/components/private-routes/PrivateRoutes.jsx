import { Navigate, Outlet } from "react-router";
import useAuth from '../../hooks/conetext-hooks/useAuth'
function PrivateRoutes() {
    // const isAuthenticated = false; // For testing purposes, set to true
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

export default PrivateRoutes