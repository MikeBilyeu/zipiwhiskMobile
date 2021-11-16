import { SET_OPEN_COMMENTS } from "../constants";

export const setOpenComments = (value) => ({
  type: SET_OPEN_COMMENTS,
  payload: value,
});
