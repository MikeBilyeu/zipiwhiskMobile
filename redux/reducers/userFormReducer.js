import {
  GET_USER_SUCCESS,
  FULLNAME_CHANGE,
  USERNAME_CHANGE,
  USERNAME_ERROR,
} from "../constants";

const initialState = {
  username: "smith99",
  usernameError: null,
  fullname: "Jake smith",
  fullnameError: null,
  image_url: "https://randomuser.me/api/portraits/men/32.jpg",
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
    default:
      return state;
  }
};
export default userReducer;
