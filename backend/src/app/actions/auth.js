import { LOGIN, LOGOUT } from "../constant";

export const loginAction = (payload) => {
    return {
        type: LOGIN,
        payload: payload
    }
}
export const logoutAction = () => {
    return {
        type: LOGOUT
    }
}
