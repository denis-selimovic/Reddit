import {FETCH_COMMENT_VOTES} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_COMMENT_VOTES:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
};
