import React from "react";
import { useSelector } from "react-redux";

import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
    const { auth } = useSelector((auth) => auth);
    console.log(auth);
    if (auth != null) {
        return true;
    } else {
        return false;
    }
};

const ProtectedRoutes = () => {
    const auth = useAuth();

    return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
