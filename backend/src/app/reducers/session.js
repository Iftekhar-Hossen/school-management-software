import { SESSION } from "../constant";

let initialState = null;


const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SESSION:
            localStorage.removeItem("data");
            sessionStorage.removeItem("data");
            if (action.payload.remember) {
                localStorage.setItem("data", JSON.stringify(action.payload));
            } else {
                sessionStorage.setItem("data", JSON.stringify(action.payload));
            }
            return (state = action.payload);
        default:
            return state;
    }
};

export default sessionReducer;
