import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import postReducer from "./postReducer";
import postVoterReducer from "./postVoterReducer";
import commentVoterReducer from "./commentVoterReducer";

export default combineReducers({
    auth: authReducer,
    posts: postReducer,
    votes: postVoterReducer,
    commentVotes: commentVoterReducer,
    form: formReducer
});
