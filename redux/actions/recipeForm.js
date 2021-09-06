import {
  MEDIA_CHANGE,
  RECIPE_NAME_CHANGE,
  SERVINGS_CHANGE,
  INGREDIENTS_CHANGE,
  INSTRUCTIONS_CHANGE,
  TIME_HR_CHANGE,
  TIME_MIN_CHANGE,
  KEYWORDS_CHANGE,
  CATEGORIES_CHANGE,
  SUBMIT_RECIPE_REQUEST,
  SUBMIT_RECIPE_SUCCESS,
  SUBMIT_RECIPE_FAILURE,
} from "../constants";
import axios from "axios";
//import s3Upload from "../utils/s3Upload";

import { parseHourInput, parseMinuteInput } from "../../utils/parseTimeInput";

export const changeMedia = (value) => ({
  type: MEDIA_CHANGE,
  payload: value,
});

export const recipeNameChange = (value) => ({
  type: RECIPE_NAME_CHANGE,
  payload: value,
});

export const servingsChange = (value) => ({
  type: SERVINGS_CHANGE,
  payload: value,
});

export const ingredientsChange = (value) => ({
  type: INGREDIENTS_CHANGE,
  payload: value,
});

export const instructionsChange = (value) => ({
  type: INSTRUCTIONS_CHANGE,
  payload: value,
});

export const timeHrChange = (value) => ({
  type: TIME_HR_CHANGE,
  payload: value,
});

export const timeMinChange = (value) => ({
  type: TIME_MIN_CHANGE,
  payload: value,
});

export const keywordsChange = (value) => ({
  type: KEYWORDS_CHANGE,
  payload: value,
});

export const categoriesChange = (value) => ({
  type: CATEGORIES_CHANGE,
  payload: value,
});

export const submitRecipe = () => async (dispatch, getState) => {
  let recipe = getState().recipeForm;
  const { id } = getState().user;

  dispatch({ type: SUBMIT_RECIPE_REQUEST });

  // Upload recipe media to S3 Bucket and return url
  // recipe.media_url = await dispatch(
  //   s3Upload(recipe.media_url, "recipe-media/", id)
  // );

  try {
    await axios.post("api/recipes/create", { recipe });
    dispatch({ type: SUBMIT_RECIPE_SUCCESS });
  } catch (err) {
    dispatch({ type: SUBMIT_RECIPE_FAILURE });
    console.log(err);
  }
};
