import {FETCH_POST_DOWNVOTES, FETCH_POST_UPVOTES} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_POST_UPVOTES:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_POST_DOWNVOTES:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
}
