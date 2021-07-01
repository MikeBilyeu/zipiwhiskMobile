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
