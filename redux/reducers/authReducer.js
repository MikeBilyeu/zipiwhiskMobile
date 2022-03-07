import {
  LOGIN_SUCCESS,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  VERIFY_FAILURE,
  LOGOUT,
} from "../constants";

const initialState = {
  isAuth: false,
  isVerified: false,
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuth: true };
    case VERIFY_SUCCESS:
      return { ...state, isVerified: true, isLoading: false };
    case VERIFY_REQUEST:
      return { ...state, isVerified: false, isLoading: true };
    case VERIFY_FAILURE:
      return { ...state, isVerified: false, isLoading: false };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
