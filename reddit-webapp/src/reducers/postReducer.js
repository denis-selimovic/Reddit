import _ from 'lodash';
import { FETCH_POSTS } from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        default:
            return state;
    }
}
