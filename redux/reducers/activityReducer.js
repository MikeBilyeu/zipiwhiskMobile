import {
  GET_ACTIVITY_REQUEST,
  GET_ACTIVITY_SUCCESS,
  GET_ACTIVITY_FAILURE,
} from "../constants";

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

    default:
      return state;
  }
};

export const selectActivity = (state) => state.activity.data;
export const selectIsLoadingActivity = (state) => state.activity.isLoading;

export default activityReducer;
