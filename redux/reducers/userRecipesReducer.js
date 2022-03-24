import {
  GET_USER_RECIPES_REQUEST,
  GET_USER_RECIPES_SUCCESS,
  GET_USER_RECIPES_FAILURE,
} from "../constants";

const initialState = { isLoading: false, recipes: [] };

const userRecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_RECIPES_REQUEST:
      return { ...state, isLoading: true };
    case GET_USER_RECIPES_SUCCESS:
      return { recipes: action.payload, isLoading: false };
    case GET_USER_RECIPES_FAILURE:
      return state;
    default:
      return state;
  }
};

export default userRecipesReducer;
