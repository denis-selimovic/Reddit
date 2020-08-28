import _ from 'lodash';
import {DOWNVOTE, FETCH_POSTS, FETCH_USER_POSTS, UPVOTE} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case UPVOTE:
            return { ...state, [action.payload.id]: action.payload };
        case DOWNVOTE:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_USER_POSTS:
            return { ..._.mapKeys(action.payload, 'id') };
        default:
            return state;
    }
}
