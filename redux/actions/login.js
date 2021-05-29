import axios from "axios";
import jwt_decode from "jwt-decode";
import * as SecureStore from "expo-secure-store";
import {
  LOGIN_USERNAME_CHANGE,
  LOGIN_USERNAME_ERROR,
  LOGIN_PASSWORD_CHANGE,
  LOGIN_PASSWORD_ERROR,
} from "../constants";
import setAuthToken from "../../utils/setAuthToken";
import { setCurrentUser } from "./auth";

export const loginUsernameChange = (value) => ({
  type: LOGIN_USERNAME_CHANGE,
  payload: value,
});

export const loginPasswordChange = (value) => ({
  type: LOGIN_PASSWORD_CHANGE,
  payload: value,
});

export const getAuth = () => async (dispatch, getState) => {
  const { username, password } = getState().login;

  try {
    let {
      data: { token },
    } = await axios.post("http://localhost:3000/api/users/login", {
      username,
      password,
    });
    // Store token in local secure store
    SecureStore.setItemAsync("jwtToken", token);

    // Add token to auth header for future requests
    setAuthToken(token);
    const decodedToken = jwt_decode(token);
    dispatch(setCurrentUser(decodedToken));
  } catch ({ response: { data } }) {
    if (data.type === "username") {
      dispatch({
        type: LOGIN_USERNAME_ERROR,
        payload: data.message,
      });
    } else if (data.type === "password") {
      dispatch({
        type: LOGIN_PASSWORD_ERROR,
        payload: data.message,
      });
    }
  }
};
