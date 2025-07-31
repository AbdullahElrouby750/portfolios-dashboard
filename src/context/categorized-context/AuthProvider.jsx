import { isNullOrUndef } from 'chart.js/helpers';
import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const login = (userData) => setUser(userData);
    const logout = () => setUser(null);
    const isAuthenticated = !!user
    const [loggedOut, setLoggedOut] = useState(false);

    return (
        <AuthContext.Provider value={{user, login, logout, isAuthenticated, loggedOut, setLoggedOut}}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider