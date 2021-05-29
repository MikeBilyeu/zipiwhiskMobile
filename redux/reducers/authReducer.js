import { AUTH_LOGIN, AUTH_LOGOUT } from "../constants";

const initialState = {
  isAuth: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      if (Object.keys(action.payload).length !== 0) {
        return { isAuth: true };
      }
    case AUTH_LOGOUT:
      return { isAuth: false };
    default:
      return state;
  }
};

export default authReducer;
