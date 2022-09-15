import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_SAVES_REQUEST,
  GET_SAVES_SUCCESS,
  GET_SAVES_FAILURE,
  REFRESH_SAVES_REQUEST,
  REFRESH_SAVES_SUCCESS,
  REFRESH_SAVES_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  REFRESH_POSTS_REQUEST,
  REFRESH_POSTS_SUCCESS,
  REFRESH_POSTS_FAILURE,
  PROFILE_CATEGORY_CHANGE,
  LIKE_RECIPE_REQUEST,
  UNLIKE_RECIPE_REQUEST,
  SAVE_RECIPE_REQUEST,
  UNSAVE_RECIPE_REQUEST,
} from "../constants";

import {
  saveFromRecipes,
  unsaveFromRecipes,
  likeFromRecipes,
  unlikeFromRecipes,
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
  categoryFilter: "",
  savesData: { isLoading: false, isRefreshing: false, recipes: [] },
  postsData: { isLoading: false, isRefreshing: false, recipes: [] },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return initialState;
    case GET_USER_SUCCESS:
      return { ...state, ...action.payload, isLoading: false };
    case GET_USER_FAILURE:
      return initialState;
    case REFRESH_SAVES_REQUEST:
      return {
        ...state,
        savesData: { ...state.savesData, isRefreshing: true },
      };
    case REFRESH_SAVES_SUCCESS:
      return {
        ...state,
        savesData: {
          isLoading: false,
          isRefreshing: false,
          recipes: action.payload,
        },
      };
    case REFRESH_POSTS_REQUEST:
      return {
        ...state,
        postssData: { ...state.postsData, isRefreshing: true },
      };
    case REFRESH_POSTS_SUCCESS:
      return {
        ...state,
        postsData: {
          isLoading: false,
          isRefreshing: false,
          recipes: action.payload,
        },
      };
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
          isRefreshing: false,
        },
      };
    case GET_SAVES_FAILURE:
      return {
        ...state,
        savesData: { isLoading: false, isRefreshing: false, recipes: [] },
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
          isRefreshing: false,
        },
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        postsData: { isLoading: false, isRefreshing: false, recipes: [] },
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
export const selectIsRefreshingSaves = (state) =>
  state.user.savesData.isRefreshing;
export const selectIsRefreshingPosts = (state) =>
  state.user.postsData.isRefreshing;
export const selectIsLoadingSaves = (state) => state.user.savesData.isLoading;
export const selectIsLoadingPosts = (state) => state.user.postsData.isLoading;
export const selectSaves = (state) => state.user.savesData.recipes;
export const selectPosts = (state) => state.user.postsData.recipes;
export const selectCategory = (state) => state.user.categoryFilter;
export default userReducer;
