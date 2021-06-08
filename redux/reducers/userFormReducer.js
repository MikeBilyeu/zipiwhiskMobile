import {
  GET_USER_SUCCESS,
  FULLNAME_CHANGE,
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
  image_url: "",
  image_urlError: null,
  recipeUnit: "US",
  restriction: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        fullname: action.payload.fullname,
        image_url: action.payload.image_url,
        recipeUnit: action.payload.recipeUnit,
        restriction: action.payload.restriction,
      };
    case USERNAME_CHANGE:
      return { ...state, usernameError: null, username: action.payload };
    case USERNAME_ERROR:
      return { ...state, usernameError: action.payload };
    case FULLNAME_CHANGE:
      return { ...state, fullname: action.payload };
    case IMAGE_URL_CHANGE:
      return { ...state, image_url: action.payload };
    case EDIT_USER_REQUEST:
      return { ...state, isLoading: true };
    case EDIT_USER_SUCCESS:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
export default userReducer;
