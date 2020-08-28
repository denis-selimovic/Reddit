import {
    SIGN_OUT,
    SIGN_IN,
    FETCH_POSTS,
    UPVOTE,
    DOWNVOTE,
    FETCH_TOPICS,
    SUBSCRIBE,
    UNSUBSCRIBE, FETCH_USER_POSTS, CREATE_POST, DELETE_POST, FETCH_COMMENTS
} from "./types";
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

export const fetchOnSignIn = formValues => async dispatch => {
    await dispatch(signIn(formValues));
    dispatch(fetchPosts());
    dispatch(fetchTopics());
}

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

export const fetchTopics = () => async dispatch => {
    const response = await reddit.get("/api/users/topics", {
        headers: {
            Authorization: `Bearer ${getUser().token}`
        }
    });
    dispatch({ type: FETCH_TOPICS, payload: response.data });
};

export const subscribeToTopic = topic => async dispatch => {
    try {
        const response = await reddit.post(`/api/topic/subscribe?topic=${topic}`, {}, {
            headers: {
                Authorization: `Bearer ${getUser().token}`
            }
        });
        dispatch({ type: SUBSCRIBE, payload: response.data });
    }
    catch (err) {}
};

export const unsubscribeToTopic = topic => async dispatch => {
    try {
        const response = await reddit.post(`/api/topic/unsubscribe?topic=${topic}`, {}, {
            headers: {
                Authorization: `Bearer ${getUser().token}`
            }
        });
        dispatch({ type: UNSUBSCRIBE, payload: response.data });
    }
    catch (err) {}
};

export const fetchUserPosts = () => async dispatch => {
    try {
        const response = await reddit.get(`/api/users/posts`, {
            headers: {
                Authorization: `Bearer ${getUser().token}`
            }
        });
        dispatch({ type: FETCH_USER_POSTS, payload: response.data });
    }
    catch (err) {}
};

export const fetchSubscribedPosts = () => async dispatch => {
    try {
        const response = await reddit.get(`/api/users/subscribed`, {
            headers: {
                Authorization: `Bearer ${getUser().token}`
            }
        });
        dispatch({ type: FETCH_USER_POSTS, payload: response.data });
    }
    catch (err) {}
};

export const createPost = formValues => async dispatch => {
    const { topic, title, text } = formValues;
    const response = await reddit.post(`/api/posts/create?topic=${topic}`, { title, text }, {
        headers: {
            Authorization: `Bearer ${getUser().token}`
        }
    });
    dispatch({ type: CREATE_POST, payload: response.data });
    history.push("/");
};

export const deletePost = (topic, post) => async dispatch => {
    await reddit.delete(`/api/posts/delete?topic=${topic}&post=${post}`, {
        headers: {
            Authorization: `Bearer ${getUser().token}`
        }
    });
    await dispatch({ type: DELETE_POST, payload: post});
    history.push("/");
};

export const fetchComments = id => async dispatch => {
   const response = await reddit.get(`/api/posts/comments/${id}`, {
       headers: {
           Authorization: `Bearer ${getUser().token}`
       }
    });
   dispatch({ type: FETCH_COMMENTS, payload: response.data });
};
