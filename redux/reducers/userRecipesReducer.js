import {
  GET_USER_RECIPES_REQUEST,
  GET_USER_RECIPES_SUCCESS,
  GET_USER_RECIPES_FAILURE,
  PROFILE_CATEGORY_CHANGE,
} from "../constants";

const initialState = { isLoading: false, category: "", recipes: [] };

const userRecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_RECIPES_REQUEST:
      return { ...state, isLoading: true };
    case GET_USER_RECIPES_SUCCESS:
      return { ...state, recipes: action.payload, isLoading: false };
    case GET_USER_RECIPES_FAILURE:
      return state;
    case PROFILE_CATEGORY_CHANGE:
      return { ...state, category: action.payload };
    default:
      return state;
  }
};

export default userRecipesReducer;
