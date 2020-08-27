import { FETCH_POST_VOTES } from "../actions/types";
import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_POST_VOTES:
            return { ..._.mapKeys(action.payload, 'id') };
        default:
            return state;
    }
}
