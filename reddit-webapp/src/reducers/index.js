import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import postReducer from "./postReducer";
import voteReducer from "./voteReducer";

export default combineReducers({
    auth: authReducer,
    posts: postReducer,
    votes: voteReducer,
    form: formReducer
});
