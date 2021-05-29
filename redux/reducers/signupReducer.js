import {
  SIGNUP_EMAIL_CHANGE,
  SIGNUP_EMAIL_ERROR,
  SIGNUP_USERNAME_CHANGE,
  SIGNUP_USERNAME_ERROR,
  SIGNUP_PASSWORD_CHANGE,
  SIGNUP_PASSWORD_ERROR,
} from "../constants";

const initialState = {
  email: null,
  emailError: null,
  username: null,
  usernameError: null,
  password: null,
  passwordError: null,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_EMAIL_CHANGE:
      return {
        ...state,
        emailError: null,
        email: action.payload,
      };
    case SIGNUP_EMAIL_ERROR:
      return { ...state, emailError: action.payload };
    case SIGNUP_USERNAME_CHANGE:
      return {
        ...state,
        usernameError: null,
        username: action.payload,
      };
    case SIGNUP_USERNAME_ERROR:
      return {
        ...state,
        usernameError: action.payload,
      };
    case SIGNUP_PASSWORD_CHANGE:
      return {
        ...state,
        passwordError: null,
        password: action.payload,
      };
    case SIGNUP_PASSWORD_ERROR:
      return { ...state, passwordError: action.payload };
    default:
      return state;
  }
};

export default signupReducer;
