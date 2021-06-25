import axios from "axios";
import { GET_USER_PROFILE } from "../constants";

export const getUserProfile = () => async (dispatch) => {
  try {
    // const { data } = await axios.get("api/users/user");
    // dispatch({
    //   type: GET_USER,
    //   payload: data,
    // });
  } catch (err) {
    console.log("user error:", err);
  }
};
