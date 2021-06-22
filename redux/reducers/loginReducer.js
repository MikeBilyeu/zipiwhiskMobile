import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOING_FAILURE,
  LOGIN_USERNAME_CHANGE,
  LOGIN_USERNAME_ERROR,
  LOGIN_PASSWORD_CHANGE,
  LOGIN_PASSWORD_ERROR,
} from "../constants";

const initialState = {
  isLoading: false,
  username: null,
  usernameError: null,
  password: null,
  passwordError: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return initialState;
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
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
