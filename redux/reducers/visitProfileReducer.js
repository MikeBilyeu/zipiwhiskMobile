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
export const selectId = (state) => state.visitProfile.id;
export const selectEmail = (state) => state.visitProfile.email;
export const selectUsername = (state) =>
  state.visitProfile.username && `@${state.visitProfile.username}`;
export const selectFullname = (state) => state.visitProfile.fullname;
export const selectImageUrl = (state) => state.visitProfile.image_url;
export const selectNumFollowers = (state) => state.visitProfile.num_followers;
export const selectNumFollowings = (state) => state.visitProfile.num_followings;
export const selectIsFollowing = (state) => state.visitProfile.isFollowing;
export const selectRecipeDataIsLoading = (state) =>
  state.visitProfile.recipeData.isLoading;
export const selectRecipes = (state) => state.visitProfile.recipeData.recipes;
export default visitProfileReducer;
