import { FULLNAME_CHANGE, USERNAME_CHANGE } from "../constants";

const initialState = {
  id: 1,
  email: "smith99@gmail.com",
  username: "smith99",
  fullname: "Jake smith",
  image: "https://randomuser.me/api/portraits/men/32.jpg",
  recipeUnit: "US",
  restriction: null,
  numFollowers: "1,520",
  numFollowing: "250",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERNAME_CHANGE:
      return { ...state, username: action.payload };
    case FULLNAME_CHANGE:
      return { ...state, fullname: action.payload };
    default:
      return state;
  }
};
export default userReducer;
