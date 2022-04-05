import {
  SET_OPEN_COMMENTS,
  INPUT_FOCUSED,
  SET_PARENT_COMMENT_ID,
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAILURE,
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

import { getUserRecipes } from "./userRecipes";

export const setOpenComments = (value) => ({
  type: SET_OPEN_COMMENTS,
  payload: value,
});

export const postComment =
  (recipeId, comment, parentCommentId) => async (dispatch) => {
    try {
      dispatch({ type: POST_COMMENT_REQUEST });
      await axios.post("api/recipes/comment", {
        recipeId,
        comment,
        parentCommentId,
      });
      dispatch({ type: POST_COMMENT_SUCCESS });
    } catch (err) {
      dispatch({ type: POST_COMMENT_FAILURE });
    }
  };

export const setParentCommentId = (value) => ({
  type: SET_PARENT_COMMENT_ID,
  payload: value,
});

export const setInputFocused = (value) => ({
  type: INPUT_FOCUSED,
  payload: value,
});

export const getRecipe = (value) => async (dispatch) => {
  try {
    dispatch({ type: GET_RECIPE_REQUEST });
    const { data } = await axios.get("api/recipes/recipe", {
      params: { recipe_id: value },
    });
    dispatch({ type: GET_RECIPE_SUCCESS });
  } catch (err) {
    dispatch({ type: GET_RECIPE_FAILURE });
  }
};

export const likeRecipe = (recipe_id) => async (dispatch, getState) => {
  const { category } = getState().userRecipes;
  try {
    dispatch({ type: LIKE_RECIPE_REQUEST });
    await axios.post("api/recipes/like", {
      recipe_id,
    });
    dispatch({ type: LIKE_RECIPE_SUCCESS, payload: recipe_id });
    dispatch(getUserRecipes(null, category));
  } catch (err) {
    dispatch({ type: LIKE_RECIPE_FAILURE });
  }
};

export const unlikeRecipe = (recipe_id) => async (dispatch, getState) => {
  const { category } = getState().userRecipes;
  try {
    dispatch({ type: UNLIKE_RECIPE_REQUEST });
    await axios.delete("api/recipes/like", {
      data: { recipe_id },
    });
    dispatch({ type: UNLIKE_RECIPE_SUCCESS, payload: recipe_id });
    dispatch(getUserRecipes(null, category));
  } catch (err) {
    dispatch({ type: UNLIKE_RECIPE_FAILURE });
  }
};
