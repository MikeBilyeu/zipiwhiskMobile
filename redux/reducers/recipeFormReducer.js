import {
  IMAGE_CHANGE,
  VIDEO_CHANGE,
  RECIPE_NAME_CHANGE,
  SERVINGS_CHANGE,
  INGREDIENTS_CHANGE,
  INSTRUCTIONS_CHANGE,
  TOTAL_TIME_CHANGE,
  KEYWORDS_CHANGE,
  CATEGORIES_CHANGE,
} from "../constants";

const initialState = {
  imagePath: null,
  videoPath: null,
  recipeName: null,
  servings: null,
  ingredients: null,
  instructions: null,
  totalTime: null,
  keywords: null,
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
    case IMAGE_CHANGE:
      return { ...state, imagePath: action.payload, videoPath: null };
    case VIDEO_CHANGE:
      return { ...state, imagePath: null, videoPath: action.payload };
    case RECIPE_NAME_CHANGE:
      return { ...state, recipeName: action.payload };
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
