import {
  SET_OPEN_COMMENTS,
  GET_RECIPE_REQUEST,
  GET_RECIPE_SUCCESS,
  GET_RECIPE_FAILURE,
  LIKE_RECIPE_REQUEST,
  LIKE_RECIPE_SUCCESS,
  LIKE_RECIPE_FAILURE,
  UNLIKE_RECIPE_REQUEST,
  UNLIKE_RECIPE_SUCCESS,
  UNLIKE_RECIPE_FAILURE,
} from "../constants";
import axios from "axios";

export const setOpenComments = (value) => ({
  type: SET_OPEN_COMMENTS,
  payload: value,
});

export const getRecipe = (value) => async (dispatch) => {
  dispatch({ type: GET_RECIPE_REQUEST });
  try {
    const { data } = await axios.get("api/recipes/recipe", {
      params: { recipe_id: value },
    });
    dispatch({ type: GET_RECIPE_SUCCESS });
  } catch (err) {
    dispatch({ type: GET_RECIPE_FAILURE });
  }
};

export const likeRecipe = (recipe_id) => async (dispatch) => {
  try {
    dispatch({ type: LIKE_RECIPE_REQUEST });
    const { data } = await axios.post("api/recipes/like", {
      recipe_id,
    });
    dispatch({ type: LIKE_RECIPE_SUCCESS });
  } catch (err) {
    dispatch({ type: LIKE_RECIPE_FAILURE });
  }
};

export const unlikeRecipe = (recipe_id) => async (dispatch) => {
  try {
    dispatch({ type: UNLIKE_RECIPE_REQUEST });
    const { data } = await axios.delete("api/recipes/like", {
      data: { recipe_id },
    });
    dispatch({ type: UNLIKE_RECIPE_SUCCESS });
  } catch (err) {
    dispatch({ type: UNLIKE_RECIPE_FAILURE });
  }
};
