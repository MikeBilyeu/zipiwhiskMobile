import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_SAVES_REQUEST,
  GET_SAVES_SUCCESS,
  GET_SAVES_FAILURE,
  GET_LIKES_REQUEST,
  GET_LIKES_SUCCESS,
  GET_LIKES_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  PROFILE_CATEGORY_CHANGE,
} from "../constants";

const initialState = {
  isLoading: true,
  id: null,
  email: "",
  username: "",
  fullname: "",
  image_url: "",
  recipeUnit: "US",
  restriction: null,
  num_followers: "",
  num_followings: "",
  categoryFilter: "",
  savesData: { isLoading: false, recipes: [] },
  likesData: { isLoading: false, recipes: [] },
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

    case GET_LIKES_REQUEST:
      return {
        ...state,
        likesData: { ...state.likesData, isLoading: true },
      };
    case GET_LIKES_SUCCESS:
      return {
        ...state,
        likesData: {
          recipes: action.payload,
          isLoading: false,
        },
      };
    case GET_LIKES_FAILURE:
      return {
        ...state,
        likesData: { isLoading: false, recipes: [] },
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
export const selectNumFollowers = (state) => state.user.num_followers;
export const selectNumFollowings = (state) => state.user.num_followings;
export const selectIsLoadingSaves = (state) => state.user.savesData.isLoading;
export const selectIsLoadingLikes = (state) => state.user.likesData.isLoading;
export const selectIsLoadingPosts = (state) => state.user.postsData.isLoading;
export const selectSaves = (state) => state.user.savesData.recipes;
export const selectLikes = (state) => state.user.likesData.recipes;
export const selectPosts = (state) => state.user.postsData.recipes;
export const selectCategory = (state) => state.user.categoryFilter;
export default userReducer;
