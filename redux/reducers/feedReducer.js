import {
  GET_FEED_RECIPES_REQUEST,
  GET_FEED_RECIPES_SUCCESS,
  GET_FEED_RECIPES_FAILURE,
  LIKE_RECIPE_SUCCESS,
  UNLIKE_RECIPE_SUCCESS,
} from "../constants";

const initialState = { isLoading: false, recipes: [], offsetNum: 0 };

const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEED_RECIPES_REQUEST:
      return { ...state, isLoading: true };
    case GET_FEED_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: [...state.recipes, ...action.payload],
        isLoading: false,
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
    case GET_FEED_RECIPES_FAILURE:
      return state;
    default:
      return state;
  }
};

export default feedReducer;
