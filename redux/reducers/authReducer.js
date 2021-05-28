import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  LOGIN_USERNAME_CHANGE,
  LOGIN_USERNAME_ERROR,
  LOGIN_PASSWORD_CHANGE,
  LOGIN_PASSWORD_ERROR,
  SIGNUP_EMAIL_CHANGE,
  SIGNUP_USERNAME_CHANGE,
  SIGNUP_PASSWORD_CHANGE,
} from "../constants";

const initialState = {
  isAuth: true,
  login: {
    username: null,
    usernameError: null,
    password: null,
    passwordError: null,
  },
  signup: {
    email: null,
    username: null,
    password: null,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      if (Object.keys(action.payload).length !== 0) {
        return {
          ...state,
          isAuth: true,
        };
      }
      return initialState;
    case AUTH_LOGOUT:
      return { ...initialState, isAuth: false };
    case LOGIN_USERNAME_CHANGE:
      return {
        ...state,
        login: {
          ...state.login,
          usernameError: null,
          passwordError: null,
          username: action.payload,
        },
      };
    case LOGIN_USERNAME_ERROR:
      return {
        ...state,
        login: { ...state.login, usernameError: action.payload },
      };
    case LOGIN_PASSWORD_CHANGE:
      return {
        ...state,
        login: {
          ...state.login,
          passwordError: null,
          password: action.payload,
        },
      };
    case LOGIN_PASSWORD_ERROR:
      return {
        ...state,
        login: { ...state.login, passwordError: action.payload },
      };
    case SIGNUP_EMAIL_CHANGE:
      return { ...state, signup: { ...state.signup, email: action.payload } };
    case SIGNUP_USERNAME_CHANGE:
      return {
        ...state,
        signup: { ...state.signup, username: action.payload },
      };
    case SIGNUP_PASSWORD_CHANGE:
      return {
        ...state,
        signup: { ...state.signup, password: action.payload },
      };
    default:
      return state;
  }
};

export default authReducer;
