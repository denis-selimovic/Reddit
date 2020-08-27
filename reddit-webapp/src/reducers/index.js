import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import postReducer from "./postReducer";
import userTopicsReducer from "./userTopicsReducer";

export default combineReducers({
    auth: authReducer,
    posts: postReducer,
    userTopics: userTopicsReducer,
    form: formReducer
});
