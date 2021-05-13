import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import recipeFormReducer from "../reducers/recipeFormReducer";
import authReducer from "../reducers/authReducer";
import userReducer from "../reducers/userReducer";

const rootReducer = combineReducers({
  recipeForm: recipeFormReducer,
  auth: authReducer,
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
