import { USERNAME_CHANGE, USERNAME_ERROR, FULLNAME_CHANGE } from "../constants";
import { checkUsername } from "./user";

export const usernameChange = (value) => (dispatch, getState) => {
  const { username } = getState().user;
  dispatch({ type: USERNAME_CHANGE, payload: value });
  if (value !== username) {
    dispatch(checkUsername(value, USERNAME_ERROR));
  }
};

export const fullnameChange = (value) => ({
  type: FULLNAME_CHANGE,
  payload: value,
});
