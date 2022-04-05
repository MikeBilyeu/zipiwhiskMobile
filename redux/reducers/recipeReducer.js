import {
  SET_OPEN_COMMENTS,
  SET_PARENT_COMMENT_ID,
  INPUT_FOCUSED,
} from "../constants";

const initialState = {
  openComments: false,
  inputFocused: false,
  parentCommentId: null,
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPEN_COMMENTS:
      return {
        inputFocused: false,
        parentCommentId: null,
        openComments: action.payload,
      };
    case SET_PARENT_COMMENT_ID:
      return { ...state, parentCommentId: action.payload };
    case INPUT_FOCUSED:
      return { ...state, inputFocused: action.payload };
    default:
      return state;
  }
};

export default recipeReducer;
