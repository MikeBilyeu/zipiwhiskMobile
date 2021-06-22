import {
  GET_USER_STATE,
  USERNAME_CHANGE,
  USERNAME_ERROR,
  FULLNAME_CHANGE,
  IMAGE_URL_CHANGE,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,
} from "../constants";
import axios from "axios";
import { checkUsername, getUser } from "./user";
import { RNS3 } from "react-native-aws3";
const keys = require("../../backend/config/keys");

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

export const imageUrlChange = (value) => ({
  type: IMAGE_URL_CHANGE,
  payload: value,
});

//AWS S3 Image Upload
const profileImageUpload = (imageURI, userId) => async () => {
  return RNS3.put(
    {
      uri: imageURI,
      name: userId,
      type: "image/jpeg",
    },
    {
      keyPrefix: "profile-image/",
      bucket: "zipiwhisk-media",
      region: "us-east-2",
      accessKey: keys.accessKey,
      secretKey: keys.secretKey,
      successActionStatus: 201,
    }
  ).then((response) => {
    if (response.status !== 201) {
      //throw error
      alert("Sorry, Failed to upload image");
    }
    let { location } = response.body.postResponse;
    return location;
  });
};

export const editProfile = (goBack) => async (dispatch, getState) => {
  let { fullname, username, image_url } = getState().userForm;
  const { image_url: user_image_url } = getState().user;
  const { id } = getState().user;

  dispatch({ type: EDIT_USER_REQUEST });

  if (image_url && image_url !== user_image_url) {
    image_url = await dispatch(profileImageUpload(image_url, id));
  }

  const data = { fullname, username, image_url };
  try {
    await axios.put("http://192.168.1.2:3000/api/users/edit", data);
    dispatch({ type: EDIT_USER_SUCCESS });
    dispatch(getUser());
    goBack();
  } catch (err) {
    dispatch({ type: EDIT_USER_FAILURE });
    console.log(err);
  }
};
