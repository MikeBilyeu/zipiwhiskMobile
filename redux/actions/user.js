import axios from "axios";
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_SAVES_REQUEST,
  GET_SAVES_SUCCESS,
  GET_SAVES_FAILURE,
  PROFILE_CATEGORY_CHANGE,
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

export const categoryChange = (value) => async (dispatch, getState) => {
  dispatch({ type: PROFILE_CATEGORY_CHANGE, payload: value });
  let { categoryFilter } = getState().user;
  dispatch(getUserRecipes(categoryFilter));
};
