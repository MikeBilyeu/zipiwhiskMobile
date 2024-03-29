import {
  GET_USER_STATE,
  USERNAME_CHANGE,
  USERNAME_ERROR,
  FULLNAME_CHANGE,
  RESTRICTION_CHANGE,
  IMAGE_URL_CHANGE,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,
} from "../constants";
import axios from "axios";
import { InteractionManager } from "react-native";
import { checkUsername, getUser } from "./user";

export const getUserState = () => (dispatch, getState) => {
  const data = getState().user;

  dispatch({
    type: GET_USER_STATE,
    payload: data,
  });
};

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

export const restrictionChange = (value) => ({
  type: RESTRICTION_CHANGE,
  payload: value,
});

export const imageUrlChange = (value) => ({
  type: IMAGE_URL_CHANGE,
  payload: value,
});

export const editProfile = (goBack) => async (dispatch, getState) => {
  const { fullname, username, restriction, image_url } = getState().userForm;
  const { image_url: prev_image_url } = getState().user;

  const data = { fullname, username, restriction, image_url, prev_image_url };
  try {
    dispatch({ type: EDIT_USER_REQUEST });
    await axios.put("api/users/edit", data);
    dispatch(getUser());
    goBack();
    InteractionManager.runAfterInteractions(() => {
      dispatch({ type: EDIT_USER_SUCCESS });
    });
  } catch (err) {
    dispatch({ type: EDIT_USER_FAILURE });
  }
};
