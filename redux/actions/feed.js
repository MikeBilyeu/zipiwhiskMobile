import {
  GET_FEED_RECIPES_REQUEST,
  GET_FEED_RECIPES_SUCCESS,
  GET_FEED_RECIPES_FAILURE,
  REFRESH_FEED_RECIPES_REQUEST,
  REFRESH_FEED_RECIPES_SUCCESS,
} from "../constants";
import axios from "axios";

export const getFeedRecipes = () => async (dispatch, getState) => {
  const userId = getState().user.id;
  const offsetNum = getState().feedRecipes.offsetNum;
  try {
    dispatch({ type: GET_FEED_RECIPES_REQUEST });
    const { data } = await axios.get("api/recipes/feed", {
      params: { user_id: userId, offsetNum: offsetNum },
    });
    dispatch({ type: GET_FEED_RECIPES_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_FEED_RECIPES_FAILURE });
  }
};

export const refreshFeedRecipes = () => async (dispatch, getState) => {
  const userId = getState().user.id;
  try {
    dispatch({ type: REFRESH_FEED_RECIPES_REQUEST });
    const { data } = await axios.get("api/recipes/feed", {
      params: { user_id: userId, offsetNum: 0 },
    });
    setTimeout(() => {
      dispatch({ type: REFRESH_FEED_RECIPES_SUCCESS, payload: data });
    }, 5000);
  } catch (err) {
    dispatch({ type: REFRESH_FEED_RECIPES_FAILURE });
  }
};
