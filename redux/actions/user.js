import axios from "axios";
import { GET_USER, USERNAME_CHANGE, FULLNAME_CHANGE } from "../constants";

export const usernameChange = (value) => ({
  type: USERNAME_CHANGE,
  payload: value,
});

export const fullnameChange = (value) => ({
  type: FULLNAME_CHANGE,
  payload: value,
});

export const getUser = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/users/user");
    dispatch({
      type: GET_USER,
      payload: data,
    });
  } catch (err) {
    console.log("user error:", err);
  }
};
