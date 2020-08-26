import { SIGN_OUT, SIGN_IN } from "./types";
import reddit from "../api/reddit";

export const signIn = formValues => async dispatch => {
    const response = await reddit.post("/api/auth/login", formValues);
    dispatch({ type: SIGN_IN, payload: response.data.token });
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
}
