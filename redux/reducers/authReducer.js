import {
  LOGIN_REQEUST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../constants";

const initialState = {
  isAuth: true,
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQEUST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      if (Object.keys(action.payload).length !== 0) {
        return { isAuth: true, isLoading: false };
      }
    case LOGOUT:
      return { ...state, isAuth: false };
    default:
      return state;
  }
};

export default authReducer;
