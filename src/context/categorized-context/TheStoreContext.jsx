import React, { createContext, useState } from 'react'

export const TheStoreContext = createContext({
    request: {
        apiFn: () => { },
        data: {},
        type: '',
        path: '',
        modalText: '',
    },
    setRequest: () => { }
});

function ProjectsProvider({ children }) {
    const [request, setRequest] = useState({
        apiFn: () => { },
        data: {},
        type: '',
        path: '',
        modalText: '',
    })
    return (
        <TheStoreContext.Provider value={{ request, setRequest }}>{children}</TheStoreContext.Provider>
    )
}

export default ProjectsProvider