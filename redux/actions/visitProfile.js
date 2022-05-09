import axios from "axios";
import {
  GET_VISIT_PROFILE_REQUEST,
  GET_VISIT_PROFILE_SUCCESS,
  GET_VISIT_PROFILE_FAILURE,
  GET_VISIT_PROFILE_RECIPES_REQUEST,
  GET_VISIT_PROFILE_RECIPES_SUCCESS,
  GET_VISIT_PROFILE_RECIPES_FAILURE,
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAILURE,
  UNFOLLOW_USER_REQUEST,
  UNFOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_FAILURE,
} from "../constants";

export const getVisitProfile = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_VISIT_PROFILE_REQUEST });
    const { data } = await axios.get("api/users/user", {
      params: {
        id,
      },
    });
    dispatch({
      type: GET_VISIT_PROFILE_SUCCESS,
      payload: data,
    });
    dispatch(getVisitProfileRecipes(id));
  } catch (err) {
    dispatch({
      type: GET_VISIT_PROFILE_FAILURE,
      payload: data,
    });
    console.log("user error:", err);
  }
};

export const followUser = (following_id) => async (dispatch) => {
  try {
    dispatch({ type: FOLLOW_USER_REQUEST, payload: following_id });
    await axios.post("api/users/follow", { following_id });
    dispatch({ type: FOLLOW_USER_SUCCESS, payload: following_id });
  } catch (err) {
    dispatch({ type: FOLLOW_USER_FAILURE });
  }
};

export const unfollowUser = (following_id) => async (dispatch) => {
  try {
    dispatch({ type: UNFOLLOW_USER_REQUEST, payload: following_id });
    await axios.post("api/users/unfollow", { following_id });
    dispatch({ type: UNFOLLOW_USER_SUCCESS, payload: following_id });
  } catch (err) {
    dispatch({ type: UNFOLLOW_USER_FAILURE });
  }
};

export const getVisitProfileRecipes = (userId) => async (dispatch) => {
  try {
    dispatch({ type: GET_VISIT_PROFILE_RECIPES_REQUEST });
    const { data } = await axios.get("api/recipes/saved", {
      params: { user_id: userId },
    });
    dispatch({ type: GET_VISIT_PROFILE_RECIPES_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_VISIT_PROFILE_RECIPES_FAILURE });
  }
};
