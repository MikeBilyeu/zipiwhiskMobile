import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import recipeFormReducer from "../reducers/recipeFormReducer";
import authReducer from "../reducers/authReducer";
import userReducer from "../reducers/userReducer";
import userFormReducer from "../reducers/userFormReducer";
import visitProfileReducer from "../reducers/visitProfileReducer";
import loginReducer from "../reducers/loginReducer";
import signupReducer from "../reducers/signupReducer";
import recipeReducer from "../reducers/recipeReducer";
import feedReducer from "../reducers/feedReducer";
import followsReducer from "../reducers/followsReducer";
import activityReducer from "../reducers/activityReducer";
import searchReducer from "../reducers/searchReducer";

const rootReducer = combineReducers({
  recipeForm: recipeFormReducer,
  auth: authReducer,
  login: loginReducer,
  signup: signupReducer,
  user: userReducer,
  userForm: userFormReducer,
  visitProfile: visitProfileReducer,
  recipe: recipeReducer,
  feedRecipes: feedReducer,
  search: searchReducer,
  follows: followsReducer,
  activity: activityReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
