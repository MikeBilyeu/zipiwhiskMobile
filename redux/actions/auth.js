import { LOGIN_SUCCESS, LOGOUT } from "../constants";
import { getUser } from "./user";

export const logout = () => ({
  type: LOGOUT,
});

export const setCurrentUser = (decodedToken) => async (dispatch) => {
  const isAuth = Object.keys(decodedToken).length !== 0;
  if (isAuth) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: decodedToken,
    });
    dispatch(getUser());
  }
};
