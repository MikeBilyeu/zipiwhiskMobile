import { LOGIN_SUCCESS, LOGOUT } from "../constants";
import { getUser } from "./user";
import * as SecureStore from "expo-secure-store";
import setAuthToken from "../../utils/setAuthToken";

export const logout = () => async (dispatch) => {
  await SecureStore.deleteItemAsync("jwtToken");
  setAuthToken();
  dispatch({ type: LOGOUT });
};

export const setCurrentUser = (decodedToken) => async (dispatch) => {
  const isAuth = Object.keys(decodedToken).length !== 0;

  if (isAuth) {
    dispatch({
      type: LOGIN_SUCCESS,
    });
    dispatch(getUser());
  }
};
