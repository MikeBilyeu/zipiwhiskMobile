import axios from "axios";

import {
  SIGNUP_EMAIL_CHANGE,
  SIGNUP_EMAIL_ERROR,
  SIGNUP_USERNAME_CHANGE,
  SIGNUP_USERNAME_ERROR,
  SIGNUP_PASSWORD_CHANGE,
} from "../constants";
import { checkUsername } from "./user";

export const signupEmailChange = (value) => ({
  type: SIGNUP_EMAIL_CHANGE,
  payload: value,
});

export const signupUsernameChange = (value) => (dispatch) => {
  dispatch({
    type: SIGNUP_USERNAME_CHANGE,
    payload: value,
  });
  dispatch(checkUsername(value, SIGNUP_USERNAME_ERROR));
};

export const signupPasswordChange = (value) => ({
  type: SIGNUP_PASSWORD_CHANGE,
  payload: value,
});

export const checkEmail = () => async (dispatch, getState) => {
  const { email } = getState().signup;
  try {
    await axios.get("http://192.168.1.4:3000:3000/api/users/email", {
      params: { email },
    });
  } catch ({ response: { data } }) {
    if (data.type === "email") {
      dispatch({
        type: SIGNUP_EMAIL_ERROR,
        payload: data.message,
      });
    }
  }
};

export const registerUser = () => async (dispatch, getState) => {
  const { email, username, password } = getState().signup;

  try {
    await axios.post("http://192.168.1.4:3000/api/users/register", {
      email,
      username,
      password,
    });
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
