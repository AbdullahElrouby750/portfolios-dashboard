const navigateToModal = (location, navigate, to, state, setRequest, apiFn, data = null, type, path, checkPath, modalText = '') => {
    setRequest({ apiFn, type, data, path, modalText });
    if (!location.pathname.includes(`${checkPath}/${to}`)) navigate(`${to}`, { state: state })
}

export default navigateToModal