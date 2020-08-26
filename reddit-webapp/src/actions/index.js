import {SIGN_OUT, SIGN_IN, FETCH_POSTS} from "./types";
import reddit from "../api/reddit";
import history from "../history";

export const signIn = formValues => async dispatch => {
    const response = await reddit.post("/api/auth/login", formValues);
    dispatch({ type: SIGN_IN, payload: response.data });
    history.push("/");
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const fetchPosts = () => async dispatch => {
    const response = await reddit.post("/api/posts");
    dispatch( {type: FETCH_POSTS, payload: response.data} );
};
