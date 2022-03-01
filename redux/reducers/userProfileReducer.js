import {
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
} from "../constants";

const initialState = {
  isLoading: true,
  isVerified: false,
  id: null,
  username: "",
  fullname: "",
  image_url: "",
  following: 0,
  numFollowers: "1,520",
  numFollowing: "250",
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PROFILE_REQUEST:
      return initialState;
    case GET_USER_PROFILE_SUCCESS:
      return { ...state, ...action.payload, isLoading: false };
    case GET_USER_PROFILE_FAILURE:
      return initialState;
    default:
      return state;
  }
};
export default userProfileReducer;
