import axios from "axios";
import {
  GET_FOLLOWERS_REQUEST,
  GET_FOLLOWERS_SUCCESS,
  GET_FOLLOWERS_FAILURE,
  GET_FOLLOWINGS_REQUEST,
  GET_FOLLOWINGS_SUCCESS,
  GET_FOLLOWINGS_FAILURE,
  GET_NUM_FOLLOWERS,
  GET_NUM_FOLLOWINGS,
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAILURE,
  UNFOLLOW_USER_REQUEST,
  UNFOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_FAILURE,
} from "../constants";

export const getFollowers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_FOLLOWERS_REQUEST });
    const { data } = await axios.get("api/users/followers");
    dispatch({ type: GET_FOLLOWERS_SUCCESS, payload: data });
    dispatch(getNumFollowers());
  } catch (err) {
    dispatch({ type: GET_FOLLOWERS_FAILURE });
  }
};

export const getFollowings = () => async (dispatch) => {
  try {
    dispatch({ type: GET_FOLLOWINGS_REQUEST });
    const { data } = await axios.get("api/users/followings");
    dispatch({ type: GET_FOLLOWINGS_SUCCESS, payload: data });
    dispatch(getNumFollowings());
  } catch (err) {
    dispatch({ type: GET_FOLLOWINGS_FAILURE });
  }
};

export const getNumFollowers = () => async (dispatch) => {
  try {
    const { data } = await axios.get("api/users/numfollowers");
    dispatch({ type: GET_NUM_FOLLOWERS, payload: data });
  } catch (err) {}
};

export const getNumFollowings = () => async (dispatch) => {
  try {
    const { data } = await axios.get("api/users/numfollowings");
    dispatch({ type: GET_NUM_FOLLOWINGS, payload: data });
  } catch (err) {}
};

export const followUser = (following_id) => async (dispatch) => {
  try {
    dispatch({ type: FOLLOW_USER_REQUEST, payload: following_id });
    await axios.post("api/users/follow", { following_id });
    dispatch({ type: FOLLOW_USER_SUCCESS, payload: following_id });
    dispatch(getNumFollowings());
  } catch (err) {
    dispatch({ type: FOLLOW_USER_FAILURE });
  }
};

export const unfollowUser = (following_id) => async (dispatch) => {
  try {
    dispatch({ type: UNFOLLOW_USER_REQUEST, payload: following_id });
    await axios.post("api/users/unfollow", { following_id });
    dispatch({ type: UNFOLLOW_USER_SUCCESS, payload: following_id });
    dispatch(getNumFollowings());
  } catch (err) {
    dispatch({ type: UNFOLLOW_USER_FAILURE });
  }
};
