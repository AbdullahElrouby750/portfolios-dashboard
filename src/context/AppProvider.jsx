import React from "react";
import AuthProvider from "./categorized-context/AuthProvider";

function AppProvider({ children }) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}

export default AppProvider;
