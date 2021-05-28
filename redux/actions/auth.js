import axios from "axios";
import jwt_decode from "jwt-decode";
import * as SecureStore from "expo-secure-store";
import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  LOGIN_USERNAME_CHANGE,
  LOGIN_USERNAME_ERROR,
  LOGIN_PASSWORD_CHANGE,
  LOGIN_PASSWORD_ERROR,
  SIGNUP_EMAIL_CHANGE,
  SIGNUP_USERNAME_CHANGE,
  SIGNUP_PASSWORD_CHANGE,
} from "../constants";
import setAuthToken from "../../utils/setAuthToken";
import { getUser } from "./user";

export const logout = () => ({
  type: AUTH_LOGOUT,
});

export const loginUsernameChange = (value) => ({
  type: LOGIN_USERNAME_CHANGE,
  payload: value,
});

export const loginPasswordChange = (value) => ({
  type: LOGIN_PASSWORD_CHANGE,
  payload: value,
});

export const signupEmailChange = (value) => ({
  type: SIGNUP_EMAIL_CHANGE,
  payload: value,
});

export const signupUsernameChange = (value) => ({
  type: SIGNUP_USERNAME_CHANGE,
  payload: value,
});

export const signupPasswordChange = (value) => ({
  type: SIGNUP_PASSWORD_CHANGE,
  payload: value,
});

export const registerUser = () => async (dispatch, getState) => {
  const { signup } = getState().auth;

  console.log("data:", signup);

  try {
    await axios.post("http://localhost:3000/api/users/register", signup);
    // dispatch(
    //   loginUser({
    //     email: userData.email,
    //     password: userData.password,
    //   })
    // );
  } catch (err) {
    console.log("error:", err);
    // dispatch({
    //   type: GET_ERRORS,
    //   payload: err.response.data,
    // });
  }
};

export const getAuth = () => async (dispatch, getState) => {
  const { login } = getState().auth;

  try {
    let {
      data: { token },
    } = await axios.post("http://localhost:3000/api/users/login", login);
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
