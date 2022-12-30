import React from 'react';

import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {


    // const data = localStorage.getItem('data')
     const data = {auth: "asdf"}
    if (data) {
        return true
    } else {
        return false
    }
}

const PreventPublicRoute = (props) => {

    const auth = useAuth()

    return auth ? <Navigate to="/" /> : <Outlet />
}

export default PreventPublicRoute;
