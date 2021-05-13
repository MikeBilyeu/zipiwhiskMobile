import axios from "axios";
import {
  AUTH_LOGOUT,
  LOGIN_USERNAME_CHANGE,
  LOGIN_PASSWORD_CHANGE,
  SIGNUP_EMAIL_CHANGE,
  SIGNUP_USERNAME_CHANGE,
  SIGNUP_PASSWORD_CHANGE,
} from "../constants";

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

export const userLogin = () => async (dispatch, getState) => {
  const { login } = getState().auth;

  try {
    let {
      data: { token },
    } = await axios.post("http://localhost:3000/api/users/login", login);

    //localStorage.setItem("jwtToken", token);

    // // Add token to auth header for future requests
    // setAuthToken(token);
    // const decodedToken = jwt_decode(token);
    // dispatch(setCurrentUser(decodedToken));
  } catch (err) {
    console.log("error:", err);
  }
};
