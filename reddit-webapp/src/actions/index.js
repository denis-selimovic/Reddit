import {SIGN_OUT, SIGN_IN, FETCH_POSTS, UPVOTE, DOWNVOTE, FETCH_POST_UPVOTES, FETCH_POST_DOWNVOTES} from "./types";
import reddit from "../api/reddit";
import history from "../history";
import { getUser, addUser, removeUser } from "../user";

export const signIn = formValues => {
    const user = getUser();
    if (user && user.token) {
        history.push("/");
        return {
            type: SIGN_IN,
            payload: user
        };
    }
    return async dispatch => {
        const response = await reddit.post("/api/auth/login", formValues);
        addUser(response.data);
        dispatch({ type:SIGN_IN, payload: response.data });
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

export const upvote = id => async dispatch => {
    try {
        const response = await reddit.post(`/api/posts/upvote?post=${id}`, {}, {
            headers: {
                Authorization: `Bearer ${getUser().token}`
            }
        });
        dispatch({ type: UPVOTE, payload: response.data });
    }
    catch (err) {

    }
};

export const downvote = id => async dispatch => {
    try {
        const response = await reddit.post(`/api/posts/downvote?post=${id}`, {}, {
            headers: {
                Authorization: `Bearer ${getUser().token}`
            }
        });
        dispatch({ type: DOWNVOTE, payload: response.data });
    }
    catch (err) {

    }
};

export const fetchPostUpvotes = () => async dispatch => {
    const response = await reddit.get("/api/users/post/upvotes", {
        headers: {
            Authorization: `Bearer ${getUser().token}`
        }
    });
    dispatch({ type: FETCH_POST_UPVOTES, payload: response.data })
};

export const fetchPostDownvotes = () => async dispatch => {
    const response = await reddit.get("/api/users/post/downvotes", {
        headers: {
            Authorization: `Bearer ${getUser().token}`
        }
    });
    dispatch({ type: FETCH_POST_DOWNVOTES, payload: response.data })
};
