import {SIGN_OUT, SIGN_IN, FETCH_POSTS} from "./types";
import reddit from "../api/reddit";
import history from "../history";
import { getUser, addUser, removeUser } from "../user";

export const signIn = formValues => {
    const user = getUser();
    if (user && user.jwt) {
        history.push("/");
        return {
            type: SIGN_IN,
            payload: user
        };
    }
    return async dispatch => {
        const response = await reddit.post("/api/auth/login", formValues);
        dispatch({ type:SIGN_IN, payload: response.data });
        addUser(response.data);
        history.push("/");
    };
};

export const signOut = () => {
    removeUser();
    return {
        type: SIGN_OUT
    };
};

export const fetchPosts = () => async dispatch => {
    const response = await reddit.get("/api/guest/posts");
    dispatch( {type: FETCH_POSTS, payload: response.data} );
};
