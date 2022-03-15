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
  let { fullname, username, restriction, image_url } = getState().userForm;
  // const { image_url: user_image_url } = getState().user;
  // const { id } = getState().user;

  // if (image_url && image_url !== user_image_url) {
  //   image_url = await dispatch(s3Upload(image_url, "profile-image/", id));
  // }
  // console.log("IMAGE URL", image_url);

  const data = { fullname, username, restriction, image_url };
  try {
    dispatch({ type: EDIT_USER_REQUEST });
    await axios.put("api/users/edit", data);
    dispatch({ type: EDIT_USER_SUCCESS });
    dispatch(getUser());
    goBack();
  } catch (err) {
    dispatch({ type: EDIT_USER_FAILURE });
    console.log(err);
  }
};
