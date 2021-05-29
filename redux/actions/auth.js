import { AUTH_LOGIN, AUTH_LOGOUT } from "../constants";
import { getUser } from "./user";

export const logout = () => ({
  type: AUTH_LOGOUT,
});

export const setCurrentUser = (decodedToken) => async (dispatch) => {
  const isAuth = Object.keys(decodedToken).length !== 0;
  if (isAuth) {
    dispatch({
      type: AUTH_LOGIN,
      payload: decodedToken,
    });
    dispatch(getUser());
  }
};
