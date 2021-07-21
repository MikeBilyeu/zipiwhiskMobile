import {
  MEDIA_CHANGE,
  RECIPE_NAME_CHANGE,
  SERVINGS_CHANGE,
  INGREDIENTS_CHANGE,
  INSTRUCTIONS_CHANGE,
  TOTAL_TIME_CHANGE,
  KEYWORDS_CHANGE,
  CATEGORIES_CHANGE,
} from "../constants";
import parseTimeInput from "../../utils/parseTimeInput";

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

export const totalTimeChange = (value) => ({
  type: TOTAL_TIME_CHANGE,
  payload: parseTimeInput(value),
});

export const keywordsChange = (value) => ({
  type: KEYWORDS_CHANGE,
  payload: value,
});

export const categoriesChange = (value) => ({
  type: CATEGORIES_CHANGE,
  payload: value,
});
