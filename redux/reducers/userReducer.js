import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
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
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return initialState;
    case GET_USER_SUCCESS:
      console.log(action.payload);
      return { ...action.payload, isLoading: false };
    case GET_USER_FAILURE:
      return initialState;
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
export default userReducer;
