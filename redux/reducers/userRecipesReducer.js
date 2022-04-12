import {
  GET_USER_RECIPES_REQUEST,
  GET_USER_RECIPES_SUCCESS,
  GET_USER_RECIPES_FAILURE,
  PROFILE_CATEGORY_CHANGE,
} from "../constants";

const initialState = { isLoading: false, category: "", recipes: [] };

const userRecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const selectIsLoading = (state) => state.userRecipes.isLoading;
export const selectCategory = (state) => state.userRecipes.category;
export const selectRecipes = (state) => state.userRecipes.recipes;

export default userRecipesReducer;
