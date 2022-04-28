import {
  GET_FEED_RECIPES_REQUEST,
  GET_FEED_RECIPES_SUCCESS,
  GET_FEED_RECIPES_FAILURE,
  LIKE_RECIPE_REQUEST,
  UNLIKE_RECIPE_REQUEST,
  SAVE_RECIPE_REQUEST,
  UNSAVE_RECIPE_REQUEST,
  REFRESH_FEED_RECIPES_REQUEST,
  REFRESH_FEED_RECIPES_SUCCESS,
  REFRESH_FEED_RECIPES_FAILURE,
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
  offsetNum: 0,
};

const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case REFRESH_FEED_RECIPES_REQUEST:
      return {
        ...state,
        isRefreshing: true,
      };
    case REFRESH_FEED_RECIPES_SUCCESS:
      return {
        isRefreshing: false,
        offsetNum: 1,
        recipes: action.payload,
      };
    case GET_FEED_RECIPES_REQUEST:
      return { ...state, isLoading: true };
    case GET_FEED_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: [...state.recipes, ...action.payload],
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
    case GET_FEED_RECIPES_FAILURE:
    case REFRESH_FEED_RECIPES_FAILURE:
    default:
      return state;
  }
};

export const selectRecipes = (state) => state.feedRecipes.recipes;
export const selectIsRefreshing = (state) => state.feedRecipes.isRefreshing;

export default feedReducer;
