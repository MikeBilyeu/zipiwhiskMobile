import {
  LOGIN_REQEUST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  IS_VERIFIED,
  LOGOUT,
} from "../constants";

const initialState = {
  isAuth: false,
  isVerified: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQEUST:
      return initialState;
    case LOGIN_SUCCESS:
      return { ...state, isAuth: true };
    case IS_VERIFIED:
      return { ...state, isVerified: true };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
