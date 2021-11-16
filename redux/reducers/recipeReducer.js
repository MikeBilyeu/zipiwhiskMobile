import { SET_OPEN_COMMENTS } from "../constants";

const initialState = { openComments: false };

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPEN_COMMENTS:
      return { ...state, openComments: action.payload };
    default:
      return state;
  }
};

export default recipeReducer;
