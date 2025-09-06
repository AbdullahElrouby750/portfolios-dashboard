import React from "react";
import AuthProvider from "./categorized-context/AuthProvider";
import ProjectsProvider from "./categorized-context/TheStoreContext";

function AppProvider({ children }) {
    return (
        <AuthProvider>
            <ProjectsProvider>
                {children}
            </ProjectsProvider>
        </AuthProvider>
    )
}

export default AppProvider;
