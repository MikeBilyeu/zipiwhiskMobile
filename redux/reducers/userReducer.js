import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from "../constants";

const initialState = {
  isLoading: true,
  id: 1,
  email: "smith99@gmail.com",
  username: "smith99",
  fullname: "Jake smith",
  image_url: "https://randomuser.me/api/portraits/men/32.jpg",
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
export default userReducer;
