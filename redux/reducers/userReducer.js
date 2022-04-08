import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_RECIPES_REQUEST,
  GET_USER_RECIPES_SUCCESS,
  GET_USER_RECIPES_FAILURE,
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
  recipeData: { isLoading: false, category: "", recipes: [] },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return initialState;
    case GET_USER_SUCCESS:
      return { ...state, ...action.payload, isLoading: false };
    case GET_USER_FAILURE:
      return initialState;
    case GET_USER_RECIPES_REQUEST:
      return {
        ...state,
        recipeData: { ...state.recipeData, isLoading: true },
      };
    case GET_USER_RECIPES_SUCCESS:
      return {
        ...state,
        recipeData: {
          ...state.recipeData,
          recipes: action.payload,
          isLoading: false,
        },
      };
    case GET_USER_RECIPES_FAILURE:
      return {
        ...state,
        recipeData: { isLoading: false, category: "", recipes: [] },
      };
    case PROFILE_CATEGORY_CHANGE:
      return {
        ...state,
        recipeData: { ...state.recipeData, category: action.payload },
      };
    default:
      return state;
  }
};

export const selectId = (state) => state.user.id;
export const selectEmail = (state) => state.user.email;
export const selectUsername = (state) => `@${state.user.username}`;
export const selectFullname = (state) => state.user.fullname;
export const selectImageUrl = (state) => state.user.image_url;
export const selectNumFollowers = (state) => state.user.num_followers;
export const selectNumFollowings = (state) => state.user.num_followings;
export const selectRecipeDataIsLoading = (state) =>
  state.user.recipeData.isLoading;
export const selectCategory = (state) => state.user.recipeData.category;
export const selectRecipes = (state) => state.user.recipeData.recipes;
export default userReducer;
