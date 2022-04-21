import {
  SET_OPEN_COMMENTS,
  SET_PARENT_COMMENT_ID,
  INPUT_FOCUSED,
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
} from "../constants";

const initialState = {
  openComments: false,
  inputFocused: false,
  parentCommentId: null,
  comments: [],
  loadingComments: true,
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPEN_COMMENTS:
      return {
        inputFocused: false,
        parentCommentId: null,
        openComments: action.payload,
      };
    case GET_COMMENTS_REQUEST:
      return { ...state, comments: [], loadingComments: true };
    case GET_COMMENTS_SUCCESS:
      return { ...state, comments: action.payload, loadingComments: false };
    case GET_COMMENTS_FAILURE:
      return { ...state, comments: [], loadingComments: false };
    case SET_PARENT_COMMENT_ID:
      return { ...state, parentCommentId: action.payload };
    case INPUT_FOCUSED:
      return { ...state, inputFocused: action.payload };
    default:
      return state;
  }
};

export const selectOpenComments = (state) => state.recipe.openComments;
export const selectInputFocused = (state) => state.recipe.inputFocused;
export const selectParentCommentId = (state) => state.recipe.parentCommentId;
export const selectLoadingComments = (state) => state.recipe.loadingComments;
export const selectComments = (state) => state.recipe.comments;

export default recipeReducer;
