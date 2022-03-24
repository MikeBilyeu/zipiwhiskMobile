import {
  GET_USER_RECIPES_REQUEST,
  GET_USER_RECIPES_SUCCESS,
  GET_USER_RECIPES_FAILURE,
} from "../constants";
import axios from "axios";

export const getUserRecipes = (value) => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_RECIPES_REQUEST });
    const { data } = await axios.get("api/recipes/saved", {
      params: { user_id: value },
    });
    dispatch({ type: GET_USER_RECIPES_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_USER_RECIPES_FAILURE });
  }
};
