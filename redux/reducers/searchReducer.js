import {
  GET_SEARCH_RECIPES_REQUEST,
  GET_SEARCH_RECIPES_SUCCESS,
  GET_SEARCH_RECIPES_FAILURE,
  LIKE_RECIPE_REQUEST,
  UNLIKE_RECIPE_REQUEST,
  SAVE_RECIPE_REQUEST,
  UNSAVE_RECIPE_REQUEST,
  REFRESH_SEARCH_RECIPES_REQUEST,
  REFRESH_SEARCH_RECIPES_SUCCESS,
  REFRESH_SEARCH_RECIPES_FAILURE,
  SEARCH_CATEGORY_CHANGE,
  SEARCH_CHANGE,
} from "../constants";

import {
  saveFromRecipes,
  unsaveFromRecipes,
  likeFromRecipes,
  unlikeFromRecipes,
} from "../../utils/reducerUtils";

const initialState = {
  isLoading: false,
  isRefreshing: false,
  recipes: [],
  users: [],
  offsetNum: 0,
  searchFilter: "",
  categoryFilter: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case REFRESH_SEARCH_RECIPES_REQUEST:
      return {
        ...state,
        isRefreshing: true,
      };
    case REFRESH_SEARCH_RECIPES_SUCCESS:
      return {
        isRefreshing: false,
        offsetNum: 1,
        recipes: action.payload,
      };
    case GET_SEARCH_RECIPES_REQUEST:
      return { ...state, isLoading: true };
    case GET_SEARCH_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        isLoading: false,
        isRefreshing: false,
        offsetNum: state.offsetNum + 1,
      };
    case LIKE_RECIPE_REQUEST:
      return {
        ...state,
        recipes: likeFromRecipes(state.recipes, action.payload),
      };
    case UNLIKE_RECIPE_REQUEST:
      return {
        ...state,
        recipes: unlikeFromRecipes(state.recipes, action.payload),
      };

    case SAVE_RECIPE_REQUEST:
      return {
        ...state,
        recipes: saveFromRecipes(state.recipes, action.payload),
      };
    case UNSAVE_RECIPE_REQUEST:
      return {
        ...state,
        recipes: unsaveFromRecipes(state.recipes, action.payload),
      };
    case SEARCH_CATEGORY_CHANGE:
      return { ...state, categoryFilter: action.payload };
    case SEARCH_CHANGE:
      return { ...state, searchFilter: action.payload };
    case GET_SEARCH_RECIPES_FAILURE:
    case REFRESH_SEARCH_RECIPES_FAILURE:
    default:
      return state;
  }
};

export const selectRecipes = (state) => state.search.recipes;
export const selectIsRefreshing = (state) => state.search.isRefreshing;
export const selectIsLoading = (state) => state.search.isLoading;
export const selectInputFilter = (state) => state.search.selectInputFilter;
export const selectcategoryFilter = (state) => state.search.categoryFilter;
export const selectSearchFilter = (state) => state.search.searchFilter;

export default searchReducer;
