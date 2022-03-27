import {
  GET_USER_RECIPES_REQUEST,
  GET_USER_RECIPES_SUCCESS,
  GET_USER_RECIPES_FAILURE,
  PROFILE_CATEGORY_CHANGE,
} from "../constants";
import axios from "axios";

export const getUserRecipes = (userId, category) => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_RECIPES_REQUEST });
    const { data } = await axios.get("api/recipes/saved", {
      params: { user_id: userId, category: category },
    });
    dispatch({ type: GET_USER_RECIPES_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_USER_RECIPES_FAILURE });
  }
};

export const categoryChange = (value) => ({
  type: PROFILE_CATEGORY_CHANGE,
  payload: value,
});
