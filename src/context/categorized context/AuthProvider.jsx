import { isNullOrUndef } from 'chart.js/helpers';
import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const login = (userData) => setUser(userData);
    const logout = () => setUser(null);
    const isAuthenticated = () => !isNullOrUndef(user)

    return (
        <AuthContext.Provider value={{user, login, logout, isAuthenticated}}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider