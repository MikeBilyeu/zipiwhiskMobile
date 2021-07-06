import axios from "axios";
import {
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
} from "../constants";

export const getUserProfile = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_PROFILE_REQUEST });
    const { data } = await axios.get("api/users/user", {
      params: {
        id,
      },
    });
    dispatch({
      type: GET_USER_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_USER_PROFILE_FAILURE,
      payload: data,
    });
    console.log("user error:", err);
  }
};

export const followUser = (following_id) => async (dispatch) => {
  try {
    const { data } = await axios.post("api/users/follow", { following_id });
  } catch (err) {
    console.log("Follow error:", err);
  }
};

export const unfollowUser = (following_id) => async (dispatch) => {
  try {
    const { data } = await axios.post("api/users/unfollow", { following_id });
  } catch (err) {
    console.log("Follow error:", err);
  }
};
