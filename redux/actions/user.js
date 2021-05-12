import { USERNAME_CHANGE, FULLNAME_CHANGE } from "../constants";

export const usernameChange = (value) => ({
  type: USERNAME_CHANGE,
  payload: value,
});

export const fullnameChange = (value) => ({
  type: FULLNAME_CHANGE,
  payload: value,
});
