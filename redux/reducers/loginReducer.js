import {
  AUTH_LOGIN,
  LOGIN_USERNAME_CHANGE,
  LOGIN_USERNAME_ERROR,
  LOGIN_PASSWORD_CHANGE,
  LOGIN_PASSWORD_ERROR,
} from "../constants";

const initialState = {
  username: null,
  usernameError: null,
  password: null,
  passwordError: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return initialState;
    case LOGIN_USERNAME_CHANGE:
      return {
        ...state,
        usernameError: null,
        passwordError: null,
        username: action.payload,
      };
    case LOGIN_USERNAME_ERROR:
      return {
        ...state,
        usernameError: action.payload,
      };
    case LOGIN_PASSWORD_CHANGE:
      return {
        ...state,
        passwordError: null,
        password: action.payload,
      };
    case LOGIN_PASSWORD_ERROR:
      return { ...state, passwordError: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
