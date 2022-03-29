import {
  GET_FEED_RECIPES_REQUEST,
  GET_FEED_RECIPES_SUCCESS,
  GET_FEED_RECIPES_FAILURE,
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
    case GET_FEED_RECIPES_FAILURE:
      return state;
    default:
      return state;
  }
};

export default feedReducer;
