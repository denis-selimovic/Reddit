import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import postReducer from "./postReducer";
import userTopicsReducer from "./userTopicsReducer";
import commentReducer from "./commentReducer";

export default combineReducers({
    auth: authReducer,
    posts: postReducer,
    userTopics: userTopicsReducer,
    comments: combineReducers,
    form: formReducer
});
