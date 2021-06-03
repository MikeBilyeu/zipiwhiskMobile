import { GET_USER_PROFILE } from "../constants";

const initialState = {
  id: null,
  username: "",
  fullname: "",
  image_url: "",
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
