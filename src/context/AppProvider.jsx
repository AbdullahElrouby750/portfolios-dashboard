import React from "react";
import AuthProvider from "./categorized-context/AuthProvider";
import TheStoreContext from "./categorized-context/TheStoreContext";

function AppProvider({ children }) {
    return (
        <AuthProvider>
            <TheStoreContext>
                {children}
            </TheStoreContext>
        </AuthProvider>
    )
}

export default AppProvider;
