import { LOGIN, LOGOUT } from "../constant";

let initialState = null;

if (typeof window !== "undefined") {
    if (localStorage.getItem("data") || sessionStorage.getItem("data")) {
        initialState = JSON.parse(
            localStorage.getItem("data") || sessionStorage.getItem("data"),
        );
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            localStorage.removeItem("data");
            sessionStorage.removeItem("data");
            if (action.payload.remember) {
                localStorage.setItem("data", JSON.stringify(action.payload));
            } else {
                sessionStorage.setItem("data", JSON.stringify(action.payload));
            }
            return (state = action.payload);
        case LOGOUT:
            return (state = null);
        default:
            return state;
    }
};

export default authReducer;
