import React from "react";
import ThemProvider from "./categorized context/ThemProvider";
import AuthProvider from "./categorized context/AuthProvider";

function AppProvider({ children }) {
    return (
        <AuthProvider>
            <ThemProvider>
                {children}
            </ThemProvider>
        </AuthProvider>
    )
}

export default AppProvider;
