import { createStore, combineReducers } from "redux";
import recipeFormReducer from "../reducers/recipeFormReducer";
import authReducer from "../reducers/authReducer";

const rootReducer = combineReducers({
  recipeForm: recipeFormReducer,
  auth: authReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
