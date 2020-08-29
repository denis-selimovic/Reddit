import {DOWNVOTE_COMMENT, FETCH_POST, UPVOTE_COMMENT} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_POST:
            return action.payload;
        case UPVOTE_COMMENT:
            const commentsAfterUpvote = state.comments.map(c => (c.id === action.payload.id ? action.payload : c));
            return { ...state, comments: commentsAfterUpvote };
        case DOWNVOTE_COMMENT:
            const comments = state.comments.map(c => (c.id === action.payload.id ? action.payload : c));
            return { ...state, comments };
        default:
            return state;
    }
};
