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
  isFollowing: 0,
  num_followers: "",
  num_followings: "",
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PROFILE_REQUEST:
      return initialState;
    case GET_USER_PROFILE_SUCCESS:
      console.log(action.payload);
      return { ...state, ...action.payload, isLoading: false };
    case GET_USER_PROFILE_FAILURE:
      return initialState;
    default:
      return state;
  }
};
export const selectId = (state) => state.userProfile.id;
export const selectEmail = (state) => state.userProfile.email;
export const selectUsername = (state) => `@${state.userProfile.username}`;
export const selectFullname = (state) => state.userProfile.fullname;
export const selectImageUrl = (state) => state.userProfile.image_url;
export const selectNumFollowers = (state) => state.userProfile.num_followers;
export const selectNumFollowings = (state) => state.userProfile.num_followings;
export const selectIsFollowing = (state) => state.userProfile.isFollowing;
export default userProfileReducer;
