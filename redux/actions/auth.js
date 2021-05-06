import { AUTH_LOGOUT, USERNAME_CHANGE, FULLNAME_CHANGE } from "../constants";

export const logout = () => ({
  type: AUTH_LOGOUT,
});

export const usernameChange = (value) => ({
  type: USERNAME_CHANGE,
  payload: value,
});

export const fullnameChange = (value) => ({
  type: USERNAME_CHANGE,
  payload: value,
});
