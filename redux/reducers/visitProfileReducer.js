import {
  GET_VISIT_PROFILE_REQUEST,
  GET_VISIT_PROFILE_SUCCESS,
  GET_VISIT_PROFILE_FAILURE,
  GET_VISIT_PROFILE_RECIPES_REQUEST,
  GET_VISIT_PROFILE_RECIPES_SUCCESS,
  GET_VISIT_PROFILE_RECIPES_FAILURE,
} from "../constants";

const initialState = {
  isLoading: true,
  id: null,
  username: "",
  fullname: "",
  image_url: "",
  isFollowing: 0,
  num_followers: "",
  num_followings: "",
  recipeData: { isLoading: false, recipes: [] },
};

const visitProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VISIT_PROFILE_REQUEST:
      return initialState;
    case GET_VISIT_PROFILE_SUCCESS:
      console.log(action.payload);
      return { ...state, ...action.payload, isLoading: false };
    case GET_VISIT_PROFILE_RECIPES_REQUEST:
      return {
        ...state,
        recipeData: { ...state.recipeData, isLoading: true },
      };
    case GET_VISIT_PROFILE_RECIPES_SUCCESS:
      return {
        ...state,
        recipeData: {
          recipes: action.payload,
          isLoading: false,
        },
      };
    case GET_VISIT_PROFILE_RECIPES_FAILURE:
      return {
        ...state,
        recipeData: { isLoading: false, recipes: [] },
      };
    case GET_VISIT_PROFILE_FAILURE:
      return initialState;
    default:
      return state;
  }
};
export const selectId = (state) => state.visitUserProfile.id;
export const selectEmail = (state) => state.visitUserProfile.email;
export const selectUsername = (state) =>
  state.visitUserProfile.username && `@${state.visitUserProfile.username}`;
export const selectFullname = (state) => state.visitUserProfile.fullname;
export const selectImageUrl = (state) => state.visitUserProfile.image_url;
export const selectNumFollowers = (state) =>
  state.visitUserProfile.num_followers;
export const selectNumFollowings = (state) =>
  state.visitUserProfile.num_followings;
export const selectIsFollowing = (state) => state.visitUserProfile.isFollowing;
export const selectRecipeDataIsLoading = (state) =>
  state.visitUserProfile.recipeData.isLoading;
export const selectRecipes = (state) =>
  state.visitUserProfile.recipeData.recipes;
export default visitProfileReducer;
