import {
  SET_OPEN_COMMENTS,
  GET_RECIPE_REQUEST,
  GET_RECIPE_SUCCESS,
  GET_RECIPE_FAILURE,
} from "../constants";
import axios from "axios";

export const setOpenComments = (value) => ({
  type: SET_OPEN_COMMENTS,
  payload: value,
});

export const getSavedRecipes = (value) => async (dispatch) => {
  //  dispatch({ type: GET_RECIPE_REQUEST });
  try {
    const { data } = await axios.get("api/recipes/saved", {
      params: { user_id: value },
    });
    // dispatch({ type: GET_RECIPE_SUCCESS });
  } catch (err) {
    // dispatch({ type: GET_RECIPE_FAILURE });
  }
};

export const getRecipe = (value) => async (dispatch) => {
  dispatch({ type: GET_RECIPE_REQUEST });
  try {
    const { data } = await axios.get("api/recipes/recipe", {
      params: { recipe_id: value },
    });
    console.log(data);
    dispatch({ type: GET_RECIPE_SUCCESS });
  } catch (err) {
    dispatch({ type: GET_RECIPE_FAILURE });
  }
};
