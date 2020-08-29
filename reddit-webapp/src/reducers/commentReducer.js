import {DOWNVOTE_COMMENT, UPVOTE_COMMENT} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case UPVOTE_COMMENT:
            return { ...state, [action.payload.id]: action.payload };
        case DOWNVOTE_COMMENT:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
};
