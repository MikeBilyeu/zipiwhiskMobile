import {
  AUTH_LOGOUT,
  LOGIN_USERNAME_CHANGE,
  LOGIN_PASSWORD_CHANGE,
  SIGNUP_EMAIL_CHANGE,
  SIGNUP_USERNAME_CHANGE,
  SIGNUP_PASSWORD_CHANGE,
} from "../constants";

const initialState = {
  isAuth: true,
  login: {
    username: null,
    password: null,
  },
  signup: {
    email: null,
    username: null,
    password: null,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGOUT:
      return { ...initialState, isAuth: false };
    case LOGIN_USERNAME_CHANGE:
      return { ...state, login: { ...state.login, username: action.payload } };
    case LOGIN_PASSWORD_CHANGE:
      return { ...state, login: { ...state.login, password: action.payload } };
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
