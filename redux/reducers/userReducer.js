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
  numFollowers: "1,520",
  numFollowing: "250",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return initialState;
    case GET_USER_SUCCESS:
      return { ...action.payload, isLoading: false };
    case GET_USER_FAILURE:
      return initialState;
    default:
      return state;
  }
};

export const selectEmail = (state) => state.user.email;
export default userReducer;
