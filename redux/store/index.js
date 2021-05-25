import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import recipeFormReducer from "../reducers/recipeFormReducer";
import authReducer from "../reducers/authReducer";
import userReducer from "../reducers/userReducer";
import userProfileReducer from "../reducers/userProfileReducer";

const rootReducer = combineReducers({
  recipeForm: recipeFormReducer,
  auth: authReducer,
  user: userReducer,
  userProfile: userProfileReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
