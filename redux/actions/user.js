import axios from "axios";
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from "../constants";

export const getUser = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_REQUEST });
    const { data } = await axios.get("api/users/user");

    dispatch({
      type: GET_USER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_USER_FAILURE,
      payload: err.response.data,
    });
    console.log("user error:", err);
  }
};

export const checkUsername = (username, actionType) => async (dispatch) => {
  try {
    await axios.get("users/username", {
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
