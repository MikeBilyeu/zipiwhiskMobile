import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  IS_VERIFIED,
} from "../constants";
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
  try {
    if (isAuth) {
      dispatch(getUser());

      await axios.get("api/users/isVerified");

      dispatch({ type: IS_VERIFIED });
      dispatch({
        type: LOGIN_SUCCESS,
      });
    }
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE });
  }
};
