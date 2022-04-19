import {
  GET_FEED_RECIPES_REQUEST,
  GET_FEED_RECIPES_SUCCESS,
  GET_FEED_RECIPES_FAILURE,
  LIKE_RECIPE_SUCCESS,
  UNLIKE_RECIPE_SUCCESS,
  SAVE_RECIPE_SUCCESS,
  UNSAVE_RECIPE_SUCCESS,
  REFRESH_FEED_RECIPES_REQUEST,
  REFRESH_FEED_RECIPES_SUCCESS,
  REFRESH_FEED_RECIPES_FAILURE,
} from "../constants";

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
    case LIKE_RECIPE_SUCCESS:
      return {
        ...state,
        recipes: state.recipes.map((r) =>
          r.id === action.payload
            ? { ...r, liked: 1, numLikes: r.numLikes + 1 }
            : r
        ),
      };
    case UNLIKE_RECIPE_SUCCESS:
      return {
        ...state,
        recipes: state.recipes.map((r) =>
          r.id === action.payload
            ? { ...r, liked: 0, numLikes: r.numLikes - 1 }
            : r
        ),
      };

    case SAVE_RECIPE_SUCCESS:
      return {
        ...state,
        recipes: state.recipes.map((r) =>
          r.id === action.payload
            ? { ...r, saved: 1, numSaves: r.numSaves + 1 }
            : r
        ),
      };
    case UNSAVE_RECIPE_SUCCESS:
      return {
        ...state,
        recipes: state.recipes.map((r) =>
          r.id === action.payload
            ? { ...r, saved: 0, numSaves: r.numSaves - 1 }
            : r
        ),
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
