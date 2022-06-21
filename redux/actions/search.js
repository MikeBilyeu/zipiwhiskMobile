import {
  GET_SEARCH_RECIPES_REQUEST,
  GET_SEARCH_RECIPES_SUCCESS,
  GET_SEARCH_RECIPES_FAILURE,
  REFRESH_SEARCH_RECIPES_REQUEST,
  REFRESH_SEARCH_RECIPES_SUCCESS,
  SEARCH_CATEGORY_CHANGE,
  SEARCH_CHANGE,
} from "../constants";
import axios from "axios";

export const getSearchRecipes =
  (category, searchFilter) => async (dispatch, getState) => {
    const userId = getState().user.id;
    const offsetNum = getState().search.offsetNum;
    try {
      dispatch({ type: GET_SEARCH_RECIPES_REQUEST });
      const { data } = await axios.get("api/recipes/search", {
        params: {
          user_id: userId,
          offsetNum: offsetNum,
          category: category,
          searchFilter: searchFilter,
        },
      });
      dispatch({ type: GET_SEARCH_RECIPES_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: GET_SEARCH_RECIPES_FAILURE });
    }
  };

export const refreshSearchRecipes = () => async (dispatch, getState) => {
  const userId = getState().user.id;
  try {
    dispatch({ type: REFRESH_SEARCH_RECIPES_REQUEST });
    const { data } = await axios.get("api/recipes/feed", {
      params: { user_id: userId, offsetNum: 0 },
    });
    setTimeout(() => {
      dispatch({ type: REFRESH_SEARCH_RECIPES_SUCCESS, payload: data });
    }, 5000);
  } catch (err) {
    dispatch({ type: REFRESH_SEARCH_RECIPES_FAILURE });
  }
};

export const categoryChange = (value) => async (dispatch, getState) => {
  dispatch({ type: SEARCH_CATEGORY_CHANGE, payload: value });
  let { categoryFilter } = getState().search;
  dispatch(getSearchRecipes(categoryFilter, null));
};

export const submitSearch = () => async (dispatch, getState) => {
  let { searchFilter } = getState().search;
  dispatch(getSearchRecipes(null, searchFilter));
};

export const searchChange = (value) => ({
  type: SEARCH_CHANGE,
  payload: value,
});
