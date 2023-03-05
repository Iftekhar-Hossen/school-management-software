import { SESSION } from "../constant";

let initialState = null;

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SESSION:
            if (action.payload) {
                return (state = action.payload);
            }
        default:
            return state;
    }
};

export default sessionReducer;
