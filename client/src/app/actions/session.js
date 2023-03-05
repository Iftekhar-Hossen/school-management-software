import { SESSION } from "../constant";

export const sessionAction = (payload) => {
    return {
        type: SESSION,
        payload: payload
    }
}
