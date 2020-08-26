import { SIGN_OUT, SIGN_IN } from "./types";

export const signIn = jwtToken => {
    return {
        type: SIGN_IN,
        payload: jwtToken
    };
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
}
