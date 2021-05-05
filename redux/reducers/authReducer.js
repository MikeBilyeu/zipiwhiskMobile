import { AUTH_LOGOUT } from "../constants";

const initialState = {
  isAuth: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGOUT:
      return { isAuth: false };
    default:
      return state;
  }
};
export default authReducer;
