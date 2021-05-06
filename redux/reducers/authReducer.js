import { AUTH_LOGOUT, FULLNAME_CHANGE, USERNAME_CHANGE } from "../constants";

const initialState = {
  isAuth: true,
  user: {
    id: 1,
    email: "smith99@gmail.com",
    username: "smith99",
    fullname: "Jake smith",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    recipeUnit: "US",
    restriction: null,
    numFollowers: "1,520",
    numFollowing: "250",
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGOUT:
      return { isAuth: false };
    case USERNAME_CHANGE:
      return { ...state, user: { ...state.user, username: action.payload } };
    case FULLNAME_CHANGE:
      return { ...state, user: { ...state.user, fullname: action.payload } };
    default:
      return state;
  }
};
export default authReducer;
