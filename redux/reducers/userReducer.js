import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_SAVED_RECIPES_REQUEST,
  GET_USER_SAVED_RECIPES_SUCCESS,
  GET_USER_SAVED_RECIPES_FAILURE,
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
  savedRecipeData: { isLoading: false, category: "", recipes: [] },
  likedRecipeData: { isLoading: false, category: "", recipes: [] },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return initialState;
    case GET_USER_SUCCESS:
      return { ...state, ...action.payload, isLoading: false };
    case GET_USER_FAILURE:
      return initialState;
    case GET_USER_SAVED_RECIPES_REQUEST:
      return {
        ...state,
        savedRecipeData: { ...state.savedRecipeData, isLoading: true },
      };
    case GET_USER_SAVED_RECIPES_SUCCESS:
      return {
        ...state,
        savedRecipeData: {
          ...state.savedRecipeData,
          recipes: action.payload,
          isLoading: false,
        },
      };
    case GET_USER_SAVED_RECIPES_FAILURE:
      return {
        ...state,
        savedRecipeData: { isLoading: false, category: "", recipes: [] },
      };
    case PROFILE_CATEGORY_CHANGE:
      return {
        ...state,
        savedRecipeData: { ...state.savedRecipeData, category: action.payload },
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
export const selectRecipeDataIsLoading = (state) =>
  state.user.savedRecipeData.isLoading;
export const selectCategory = (state) => state.user.savedRecipeData.category;
export const selectRecipes = (state) => state.user.savedRecipeData.recipes;
export default userReducer;
