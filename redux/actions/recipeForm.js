import {
  MEDIA_TYPE_CHANGE,
  IMAGE_CHANGE,
  VIDEO_CHANGE,
  CAPTION_CHANGE,
  RECIPE_NAME_CHANGE,
  SERVINGS_CHANGE,
  INGREDIENTS_CHANGE,
  INSTRUCTIONS_CHANGE,
  CATEGORIES_CHANGE,
  SUBMIT_RECIPE_REQUEST,
  SUBMIT_RECIPE_SUCCESS,
  SUBMIT_RECIPE_FAILURE,
} from "../constants";
import axios from "axios";
import { getSavedRecipes } from "./userRecipes";
import { getFeedRecipes } from "./feed";
import { InteractionManager } from "react-native";

export const mediaTypeChange = (value) => ({
  type: MEDIA_TYPE_CHANGE,
  payload: value,
});

export const imageChange = (value) => ({
  type: IMAGE_CHANGE,
  payload: value,
});
export const videoChange = (value) => ({
  type: VIDEO_CHANGE,
  payload: value,
});

export const captionChange = (value) => ({
  type: CAPTION_CHANGE,
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

export const categoriesChange = (value) => ({
  type: CATEGORIES_CHANGE,
  payload: value,
});

export const submitRecipe = (navigation) => async (dispatch, getState) => {
  let recipe = getState().recipeForm;

  try {
    dispatch({ type: SUBMIT_RECIPE_REQUEST });
    //Post Recipe
    const { data } = await axios.post("api/recipes/create", { recipe });
    dispatch(getSavedRecipes());
    dispatch(getFeedRecipes());

    navigation.navigate("Home");
    InteractionManager.runAfterInteractions(() => {
      dispatch({ type: SUBMIT_RECIPE_SUCCESS });
    });
  } catch (err) {
    dispatch({ type: SUBMIT_RECIPE_FAILURE });
    console.log(err);
  }
};
