import axios from "axios";
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_SAVES_REQUEST,
  GET_SAVES_SUCCESS,
  GET_SAVES_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  PROFILE_CATEGORY_CHANGE,
  GET_FOLLOWERS_REQUEST,
  GET_FOLLOWERS_SUCCESS,
  GET_FOLLOWERS_FAILURE,
  GET_FOLLOWINGS_REQUEST,
  GET_FOLLOWINGS_SUCCESS,
  GET_FOLLOWINGS_FAILURE,
} from "../constants";

export const getUser = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_REQUEST });
    const { data } = await axios.get("api/users/user");

    dispatch({
      type: GET_USER_SUCCESS,
      payload: data,
    });
    dispatch(getUserRecipes());
  } catch (err) {
    dispatch({
      type: GET_USER_FAILURE,
      payload: err.response.data,
    });
  }
};

export const checkUsername = (username, actionType) => async (dispatch) => {
  try {
    await axios.get("api/users/username", {
      params: { username },
    });
  } catch ({ response: { data } }) {
    if (data.type === "username") {
      dispatch({
        type: actionType,
        payload: data.message,
      });
    }
  }
};

export const getUserRecipes = (category) => async (dispatch) => {
  dispatch(getSaves(category));
  dispatch(getPosts(category));
};

export const getSaves = (category) => async (dispatch) => {
  try {
    dispatch({ type: GET_SAVES_REQUEST });
    const { data } = await axios.get("api/recipes/saved", {
      params: { category: category },
    });
    dispatch({ type: GET_SAVES_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_SAVES_FAILURE });
  }
};

export const getPosts = (category) => async (dispatch) => {
  try {
    dispatch({ type: GET_POSTS_REQUEST });
    const { data } = await axios.get("api/recipes/posted", {
      params: { category: category },
    });
    dispatch({ type: GET_POSTS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_POSTS_FAILURE });
  }
};

export const categoryChange = (value) => async (dispatch, getState) => {
  dispatch({ type: PROFILE_CATEGORY_CHANGE, payload: value });
  let { categoryFilter } = getState().user;
  dispatch(getUserRecipes(categoryFilter));
};

export const getFollowers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_FOLLOWERS_REQUEST });
    const { data } = await axios.get("api/users/followers");
    dispatch({ type: GET_FOLLOWERS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_FOLLOWERS_FAILURE });
  }
};

export const getFollowings = () => async (dispatch) => {
  try {
    dispatch({ type: GET_FOLLOWINGS_REQUEST });
    const { data } = await axios.get("api/users/followings");
    dispatch({ type: GET_FOLLOWINGS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_FOLLOWINGS_FAILURE });
  }
};
