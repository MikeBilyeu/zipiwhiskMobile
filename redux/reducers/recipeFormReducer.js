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

const initialState = {
  id: null,
  media_url: "",
  media_type: "",
  recipe_name: "",
  servings: "",
  ingredients: "",
  instructions: "",
  totalTime: "",
  keywords: "",
  categories: [
    { name: "Breakfast", selected: false },
    { name: "Lunch", selected: false },
    { name: "Dinner", selected: false },
    { name: "Dessert", selected: false },
    { name: "Beverage", selected: false },
  ],
};

const recipeFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIPE_NAME_CHANGE:
      return { ...state, recipe_name: action.payload };
    case MEDIA_CHANGE:
      return {
        ...state,
        media_url: action.payload.media_url,
        media_type: action.payload.media_type,
      };
    case SERVINGS_CHANGE:
      return { ...state, servings: action.payload };
    case INGREDIENTS_CHANGE:
      return { ...state, ingredients: action.payload };
    case INSTRUCTIONS_CHANGE:
      return { ...state, instructions: action.payload };
    case TOTAL_TIME_CHANGE:
      return { ...state, totalTime: action.payload };
    case KEYWORDS_CHANGE:
      return { ...state, keywords: action.payload };
    case CATEGORIES_CHANGE:
      let i = action.payload;
      let newList = [...state.categories];
      newList[i].selected = !newList[i].selected;
      return { ...state, categoires: newList };
    default:
      return state;
  }
};
export default recipeFormReducer;
