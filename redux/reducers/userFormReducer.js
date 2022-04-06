import {
  GET_USER_STATE,
  FULLNAME_CHANGE,
  RESTRICTION_CHANGE,
  USERNAME_CHANGE,
  USERNAME_ERROR,
  IMAGE_URL_CHANGE,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,
} from "../constants";

const initialState = {
  isLoading: false,
  username: "",
  usernameError: null,
  fullname: "",
  fullnameError: null,
  imageUrl: "",
  imageUrlError: null,
  recipeUnit: "US",
  restriction: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_STATE:
      return {
        ...state,
        username: action.payload.username,
        fullname: action.payload.fullname,
        imageUrl: action.payload.image_url,
        recipeUnit: action.payload.recipeUnit,
        restriction: action.payload.restriction,
      };
    case USERNAME_CHANGE:
      return { ...state, usernameError: null, username: action.payload };
    case USERNAME_ERROR:
      return { ...state, usernameError: action.payload };
    case FULLNAME_CHANGE:
      return { ...state, fullname: action.payload };
    case RESTRICTION_CHANGE:
      return { ...state, restriction: action.payload };
    case IMAGE_URL_CHANGE:
      return { ...state, imageUrl: action.payload };
    case EDIT_USER_REQUEST:
      return { ...state, isLoading: true };
    case EDIT_USER_SUCCESS:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export const selectIsLoading = (state) => state.userForm.isLoading;
export const selectUsername = (state) => state.userForm.username;
export const selectUsernameError = (state) => state.userForm.usernameError;
export const selectFullname = (state) => state.userForm.fullname;
export const selectFullnameError = (state) => state.userForm.fullnameError;
export const selectRestriction = (state) => state.userForm.restriction;
export const selectImageUrl = (state) => state.userForm.imageUrl;

export default userReducer;
