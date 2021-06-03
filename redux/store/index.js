import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import recipeFormReducer from "../reducers/recipeFormReducer";
import authReducer from "../reducers/authReducer";
import userReducer from "../reducers/userReducer";
import userFormReducer from "../reducers/userFormReducer";
import userProfileReducer from "../reducers/userProfileReducer";
import loginReducer from "../reducers/loginReducer";
import signupReducer from "../reducers/signupReducer";

const rootReducer = combineReducers({
  recipeForm: recipeFormReducer,
  auth: authReducer,
  login: loginReducer,
  signup: signupReducer,
  user: userReducer,
  userForm: userFormReducer,
  userProfile: userProfileReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
