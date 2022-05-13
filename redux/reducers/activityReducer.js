import {
  GET_ACTIVITY_REQUEST,
  GET_ACTIVITY_SUCCESS,
  GET_ACTIVITY_FAILURE,
  FOLLOW_USER_REQUEST,
  UNFOLLOW_USER_REQUEST,
} from "../constants";

import { followFromUsers, unfollowFromUsers } from "../../utils/reducerUtils";

const initialState = {
  isLoading: false,
  data: [],
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTIVITY_REQUEST:
      return { isLoading: true, data: [] };

    case GET_ACTIVITY_SUCCESS:
      return { isLoading: false, data: action.payload };

    case GET_ACTIVITY_FAILURE:
      return { isLoading: false, data: [] };

    case FOLLOW_USER_REQUEST:
      return {
        ...state,
        data: followFromUsers(state.data, action.payload),
      };
    case UNFOLLOW_USER_REQUEST:
      return {
        ...state,
        data: unfollowFromUsers(state.data, action.payload),
      };

    default:
      return state;
  }
};

export const selectActivity = (state) => state.activity.data;
export const selectIsLoadingActivity = (state) => state.activity.isLoading;

export default activityReducer;
