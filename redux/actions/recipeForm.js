import {
  IMAGE_CHANGE,
  RECIPE_NAME_CHANGE,
  SERVINGS_CHANGE,
  INGREDIENTS_CHANGE,
  INSTRUCTIONS_CHANGE,
  TOTAL_TIME_CHANGE,
  KEYWORDS_CHANGE,
  CATEGORIES_CHANGE,
} from "../constants";

export function changeImage(value) {
  return {
    type: IMAGE_CHANGE,
    payload: value,
  };
}

export function recipeNameChange(value) {
  return {
    type: RECIPE_NAME_CHANGE,
    payload: value,
  };
}

export function servingsChange(value) {
  return {
    type: SERVINGS_CHANGE,
    payload: value,
  };
}

export function ingredientsChange(value) {
  return {
    type: INGREDIENTS_CHANGE,
    payload: value,
  };
}

export function instructionsChange(value) {
  return {
    type: INSTRUCTIONS_CHANGE,
    payload: value,
  };
}

export function totalTimeChange(value) {
  return {
    type: TOTAL_TIME_CHANGE,
    payload: value,
  };
}

export function keywordsChange(value) {
  return {
    type: KEYWORDS_CHANGE,
    payload: value,
  };
}

export function categoriesChange(value) {
  return {
    type: CATEGORIES_CHANGE,
    payload: value,
  };
}
