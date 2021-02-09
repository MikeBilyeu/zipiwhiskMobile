import { IMAGE_CHANGE } from "../constants";

const initialState = {
  imagePath: null,
};

const recipeFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_CHANGE:
      return {
        ...state,
        imagePath: action.payload,
      };
    default:
      return state;
  }
};
export default recipeFormReducer;
