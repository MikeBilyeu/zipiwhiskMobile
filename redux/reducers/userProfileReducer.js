import { GET_USER_PROFILE } from "../constants";

const initialState = {
  id: 1,
  username: "smith99",
  fullname: "Jake smith",
  image_url: "https://randomuser.me/api/portraits/men/32.jpg",
  numFollowers: "1,520",
  numFollowing: "250",
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PROFILE:
      return action.payload;
    default:
      return state;
  }
};
export default userProfileReducer;
