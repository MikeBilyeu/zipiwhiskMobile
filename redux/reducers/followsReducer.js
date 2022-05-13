import {
  GET_FOLLOWERS_REQUEST,
  GET_FOLLOWERS_SUCCESS,
  GET_FOLLOWERS_FAILURE,
  GET_FOLLOWINGS_REQUEST,
  GET_FOLLOWINGS_SUCCESS,
  GET_FOLLOWINGS_FAILURE,
  FOLLOW_USER_REQUEST,
  UNFOLLOW_USER_REQUEST,
  GET_NUM_FOLLOWERS,
  GET_NUM_FOLLOWINGS,
} from "../constants";

import { followFromUsers, unfollowFromUsers } from "../../utils/reducerUtils";

const initialState = {
  followers: { isLoading: false, users: [], totalNum: 0 },
  followings: { isLoading: false, users: [], totalNum: 0 },
};

const followsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOLLOWERS_REQUEST:
      return {
        ...state,
        followers: { ...state.followers, isLoading: true },
      };
    case GET_FOLLOWERS_SUCCESS:
      return {
        ...state,
        followers: {
          ...state.followers,
          isLoading: false,
          users: action.payload,
        },
      };
    case GET_FOLLOWERS_FAILURE:
      return {
        ...state,
        followers: initialState.followers,
      };
    case GET_FOLLOWINGS_REQUEST:
      return { ...state, followings: { ...state.followings, isLoading: true } };
    case GET_FOLLOWINGS_SUCCESS:
      return {
        ...state,
        followings: {
          ...state.followings,
          isLoading: false,
          users: action.payload,
        },
      };
    case GET_FOLLOWINGS_FAILURE:
      return {
        ...state,
        followings: initialState.followings,
      };
    case FOLLOW_USER_REQUEST:
      return {
        ...state,
        followers: {
          ...state.followers,
          users: followFromUsers(state.followers.users, action.payload),
        },
        followings: {
          ...state.followings,
          users: followFromUsers(state.followings.users, action.payload),
        },
      };
    case UNFOLLOW_USER_REQUEST:
      return {
        ...state,
        followers: {
          ...state.followers,
          users: unfollowFromUsers(state.followers.users, action.payload),
        },
        followings: {
          ...state.followings,
          users: unfollowFromUsers(state.followings.users, action.payload),
        },
      };
    case GET_NUM_FOLLOWERS:
      return {
        ...state,
        followers: { ...state.followers, totalNum: action.payload },
      };
    case GET_NUM_FOLLOWINGS:
      return {
        ...state,
        followings: { ...state.followings, totalNum: action.payload },
      };
    default:
      return state;
  }
};

export const selectNumFollowers = (state) => state.follows.followers.totalNum;
export const selectNumFollowings = (state) => state.follows.followings.totalNum;
export const selectIsLoadingFollowers = (state) =>
  state.follows.followers.isLoading;
export const selectFollowers = (state) => state.follows.followers.users;
export const selectIsLoadingFollowings = (state) =>
  state.follows.followings.isLoading;
export const selectFollowings = (state) => state.follows.followings.users;
export default followsReducer;
