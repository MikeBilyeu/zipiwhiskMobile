import axios from "axios";
import {
  GET_VISIT_PROFILE_REQUEST,
  GET_VISIT_PROFILE_SUCCESS,
  GET_VISIT_PROFILE_FAILURE,
  GET_VISIT_PROFILE_RECIPES_REQUEST,
  GET_VISIT_PROFILE_RECIPES_SUCCESS,
  GET_VISIT_PROFILE_RECIPES_FAILURE,
} from "../constants";
import { getNumFollowings } from "./user";

export const getVisitProfile = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_VISIT_PROFILE_REQUEST });
    const { data } = await axios.get("api/users/user", {
      params: {
        id,
      },
    });
    dispatch({
      type: GET_VISIT_PROFILE_SUCCESS,
      payload: data,
    });
    dispatch(getVisitProfileRecipes(id));
  } catch (err) {
    dispatch({
      type: GET_VISIT_PROFILE_FAILURE,
      payload: data,
    });
    console.log("user error:", err);
  }
};

export const getVisitProfileRecipes = (userId) => async (dispatch) => {
  try {
    dispatch({ type: GET_VISIT_PROFILE_RECIPES_REQUEST });
    const { data } = await axios.get("api/recipes/saved", {
      params: { user_id: userId },
    });
    dispatch({ type: GET_VISIT_PROFILE_RECIPES_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_VISIT_PROFILE_RECIPES_FAILURE });
  }
};
