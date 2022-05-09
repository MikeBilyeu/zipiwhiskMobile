import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_SAVES_REQUEST,
  GET_SAVES_SUCCESS,
  GET_SAVES_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  PROFILE_CATEGORY_CHANGE,
  LIKE_RECIPE_REQUEST,
  UNLIKE_RECIPE_REQUEST,
  SAVE_RECIPE_REQUEST,
  UNSAVE_RECIPE_REQUEST,
  GET_FOLLOWERS_REQUEST,
  GET_FOLLOWERS_SUCCESS,
  GET_FOLLOWERS_FAILURE,
  GET_FOLLOWINGS_REQUEST,
  GET_FOLLOWINGS_SUCCESS,
  GET_FOLLOWINGS_FAILURE,
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAILURE,
  UNFOLLOW_USER_REQUEST,
  UNFOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_FAILURE,
} from "../constants";

import {
  saveFromRecipes,
  unsaveFromRecipes,
  likeFromRecipes,
  unlikeFromRecipes,
  followFromUsers,
  unfollowFromUsers,
} from "../../utils/reducerUtils";

const initialState = {
  isLoading: true,
  id: null,
  email: "",
  username: "",
  fullname: "",
  image_url: "",
  recipeUnit: "US",
  restriction: null,
  followers: { isLoading: false, users: [] },
  followings: { isLoading: false, users: [] },
  categoryFilter: "",
  savesData: { isLoading: false, recipes: [] },
  postsData: { isLoading: false, recipes: [] },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return initialState;
    case GET_USER_SUCCESS:
      return { ...state, ...action.payload, isLoading: false };
    case GET_USER_FAILURE:
      return initialState;
    case GET_SAVES_REQUEST:
      return {
        ...state,
        savesData: { ...state.savesData, isLoading: true },
      };
    case GET_SAVES_SUCCESS:
      return {
        ...state,
        savesData: {
          recipes: action.payload,
          isLoading: false,
        },
      };
    case GET_SAVES_FAILURE:
      return {
        ...state,
        savesData: { isLoading: false, recipes: [] },
      };

    case GET_POSTS_REQUEST:
      return {
        ...state,
        postsData: { ...state.postsData, isLoading: true },
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        postsData: {
          recipes: action.payload,
          isLoading: false,
        },
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        postsData: { isLoading: false, recipes: [] },
      };
    case PROFILE_CATEGORY_CHANGE:
      return {
        ...state,
        categoryFilter: action.payload,
      };
    case LIKE_RECIPE_REQUEST:
      return {
        ...state,
        savesData: {
          ...state.savesData,
          recipes: likeFromRecipes(state.savesData.recipes, action.payload),
        },
        postsData: {
          ...state.postsData,
          recipes: likeFromRecipes(state.postsData.recipes, action.payload),
        },
      };
    case UNLIKE_RECIPE_REQUEST:
      return {
        ...state,
        savesData: {
          ...state.savesData,
          recipes: unlikeFromRecipes(state.savesData.recipes, action.payload),
        },
        postsData: {
          ...state.postsData,
          recipes: unlikeFromRecipes(state.postsData.recipes, action.payload),
        },
      };

    case SAVE_RECIPE_REQUEST:
      return {
        ...state,
        savesData: {
          ...state.savesData,
          recipes: saveFromRecipes(state.savesData.recipes, action.payload),
        },
        postsData: {
          ...state.postsData,
          recipes: saveFromRecipes(state.postsData.recipes, action.payload),
        },
      };
    case UNSAVE_RECIPE_REQUEST:
      return {
        ...state,
        savesData: {
          ...state.savesData,
          recipes: unsaveFromRecipes(state.savesData.recipes, action.payload),
        },
        postsData: {
          ...state.postsData,
          recipes: unsaveFromRecipes(state.postsData.recipes, action.payload),
        },
      };
    case GET_FOLLOWERS_REQUEST:
      return { ...state, followers: { isLoading: true, users: [] } };
    case GET_FOLLOWERS_SUCCESS:
      return {
        ...state,
        followers: { isLoading: false, users: action.payload },
      };
    case GET_FOLLOWERS_FAILURE:
      return {
        ...state,
        followers: { isLoading: false, users: [] },
      };
    case GET_FOLLOWINGS_REQUEST:
      return { ...state, following: { isLoading: true, users: [] } };
    case GET_FOLLOWINGS_SUCCESS:
      return {
        ...state,
        followings: { isLoading: false, users: action.payload },
      };
    case GET_FOLLOWINGS_FAILURE:
      return {
        ...state,
        followings: { isLoading: false, users: [] },
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
    default:
      return state;
  }
};

export const selectId = (state) => state.user.id;
export const selectEmail = (state) => state.user.email;
export const selectUsername = (state) =>
  state.user.username && `@${state.user.username}`;
export const selectFullname = (state) => state.user.fullname;
export const selectImageUrl = (state) => state.user.image_url;
export const selectNumFollowers = (state) => state.user.followers.users.length;
export const selectNumFollowings = (state) =>
  state.user.followings.users.length;
export const selectIsLoadingFollowers = (state) =>
  state.user.followers.isLoading;
export const selectFollowers = (state) => state.user.followers.users;
export const selectIsLoadingFollowings = (state) =>
  state.user.followings.isLoading;
export const selectFollowings = (state) => state.user.followings.users;
export const selectIsLoadingSaves = (state) => state.user.savesData.isLoading;
export const selectIsLoadingPosts = (state) => state.user.postsData.isLoading;
export const selectSaves = (state) => state.user.savesData.recipes;
export const selectPosts = (state) => state.user.postsData.recipes;
export const selectCategory = (state) => state.user.categoryFilter;
export default userReducer;
