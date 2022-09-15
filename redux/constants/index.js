//RECIPE FORM ACTIONS
export const MEDIA_TYPE_CHANGE = "MEDIA_TYPE_CHANGE";
export const IMAGE_CHANGE = "IMAGE_CHANGE";
export const VIDEO_CHANGE = "VIDEO_CHANGE";
export const CAPTION_CHANGE = "CAPTION_CHANGE";
export const RECIPE_NAME_CHANGE = "RECIPE_NAME_CHANGE";
export const SERVINGS_CHANGE = "SERVINGS_CHANGE";
export const INGREDIENTS_CHANGE = "INGREDIENTS_CHANGE";
export const INSTRUCTIONS_CHANGE = "INSTRUCTIONS_CHANGE";
export const CATEGORIES_CHANGE = "CATEGORIES_CHANGE";
export const SUBMIT_RECIPE_REQUEST = "SUBMIT_RECIPE_REQUEST";
export const SUBMIT_RECIPE_SUCCESS = "SUBMIT_RECIPE_SUCCESS";
export const SUBMIT_RECIPE_FAILURE = "SUBMIT_RECIPE_FAILURE";

//USER ACTIONS
export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";
export const GET_SAVES_REQUEST = "GET_SAVES_REQUEST";
export const GET_SAVES_SUCCESS = "GET_SAVES_SUCCESS";
export const GET_SAVES_FAILURE = "GET_SAVES_FAILURE";
export const REFRESH_SAVES_REQUEST = "REFRESH_SAVES_REQUEST";
export const REFRESH_SAVES_SUCCESS = "REFRESH_SAVES_SUCCESS";
export const REFRESH_SAVES_FAILURE = "REFRESH_SAVES_FAILURE";
export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

export const PROFILE_CATEGORY_CHANGE = "PROFILE_CATEGORY_CHANGE";
export const GET_ACTIVITY_REQUEST = "GET_ACTIVITY_REQUEST";
export const GET_ACTIVITY_SUCCESS = "GET_ACTIVITY_SUCCESS";
export const GET_ACTIVITY_FAILURE = "GET_ACTIVITY_FAILURE";

//USER FORM ACTIONS
export const GET_USER_STATE = "GET_USER_STATE";
export const USERNAME_CHANGE = "USERNAME_CHANGE";
export const USERNAME_ERROR = "USERNAME_ERROR";
export const FULLNAME_CHANGE = "FULLNAME_CHANGE";
export const RESTRICTION_CHANGE = "RESTRICTION_CHANGE";
export const IMAGE_URL_CHANGE = "IMAGE_URL_CHANGE";
export const EDIT_USER_REQUEST = "EDIT_USER_REQUEST";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_FAILURE = "EDIT_USER_FAILURE";

//FOLLOW ACTIONS
export const FOLLOW_USER_REQUEST = "FOLLOW_USER_REQUEST";
export const FOLLOW_USER_SUCCESS = "FOLLOW_USER_SUCCESS";
export const FOLLOW_USER_FAILURE = "FOLLOW_USER_FAILURE";
export const UNFOLLOW_USER_REQUEST = "UNFOLLOW_USER_REQUEST";
export const UNFOLLOW_USER_SUCCESS = "UNFOLLOW_USER_SUCCESS";
export const UNFOLLOW_USER_FAILURE = "UNFOLLOW_USER_FAILURE";
export const GET_FOLLOWERS_REQUEST = "GET_FOLLOWERS_REQUEST";
export const GET_FOLLOWERS_SUCCESS = "GET_FOLLOWERS_SUCCESS";
export const GET_FOLLOWERS_FAILURE = "GET_FOLLOWERS_FAILURE";
export const GET_FOLLOWINGS_REQUEST = "GET_FOLLOWINGS_REQUEST";
export const GET_FOLLOWINGS_SUCCESS = "GET_FOLLOWINGS_SUCCESS";
export const GET_FOLLOWINGS_FAILURE = "GET_FOLLOWINGs_FAILURE";
export const GET_NUM_FOLLOWERS = "GET_NUM_FOLLOWERS";
export const GET_NUM_FOLLOWINGS = "GET_NUM_FOLLOWINGS";

//VISIT PROFILE ACTIONS - viewing another users profile
export const GET_VISIT_PROFILE_REQUEST = "GET_VISIT_PROFILE_REQUEST";
export const GET_VISIT_PROFILE_SUCCESS = "GET_VISIT_PROFILE_SUCCESS";
export const GET_VISIT_PROFILE_FAILURE = "GET_VISIT_PROFILE_FAILURE";
export const GET_VISIT_PROFILE_RECIPES_REQUEST =
  "GET_VISIT_PROFILE_RECIPES_REQUEST";
export const GET_VISIT_PROFILE_RECIPES_SUCCESS =
  "GET_VISIT_PROFILE_RECIPES_SUCCESS";
export const GET_VISIT_PROFILE_RECIPES_FAILURE =
  "GET_VISIT_PROFILE_RECIPES_FAILURE";

//AUTH ACTIONS
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";
export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";
export const VERIFY_FAILURE = "VERIFY_FAILURE";

//LOGIN ACTIONS
export const LOGIN_USERNAME_CHANGE = "LOGIN_USERNAME_CHANGE";
export const LOGIN_USERNAME_ERROR = "LOGIN_USERNAME_ERROR";
export const LOGIN_PASSWORD_CHANGE = "LOGIN_PASSWORD_CHANGE";
export const LOGIN_PASSWORD_ERROR = "LOGIN_PASSWORD_ERROR";

//SINGUP ACTIONS
export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const SIGNUP_EMAIL_CHANGE = "SIGNUP_EMAIL_CHANGE";
export const SIGNUP_EMAIL_ERROR = "SIGNUP_EMAIL_ERROR";
export const SIGNUP_USERNAME_CHANGE = "SIGNUP_USERNAME_CHANGE";
export const SIGNUP_USERNAME_ERROR = "SIGNUP_USERNAME_ERROR";
export const SIGNUP_PASSWORD_CHANGE = "SIGNUP_PASSWORD_CHANGE";
export const SIGNUP_PASSWORD_ERROR = "SIGNUP_PASSWORD_ERROR";

//RECIPE ACTIONS
export const GET_RECIPE_REQUEST = "GET_RECIPE_REQUEST";
export const GET_RECIPE_SUCCESS = "GET_RECIPE_SUCCESS";
export const GET_RECIPE_FAILURE = "GET_RECIPE_FAILURE";
export const LIKE_RECIPE_REQUEST = "LIKE_RECIPE_REQUEST";
export const LIKE_RECIPE_SUCCESS = "LIKE_RECIPE_SUCCESS";
export const LIKE_RECIPE_FAILURE = "LIKE_RECIPE_FAILURE";
export const UNLIKE_RECIPE_REQUEST = "UNLIKE_RECIPE_REQUEST";
export const UNLIKE_RECIPE_SUCCESS = "UNLIKE_RECIPE_SUCCESS";
export const UNLIKE_RECIPE_FAILURE = "UNLIKE_RECIPE_FAILURE";
export const SAVE_RECIPE_REQUEST = "SAVE_RECIPE_REQUEST";
export const SAVE_RECIPE_SUCCESS = "SAVE_RECIPE_SUCCESS";
export const SAVE_RECIPE_FAILURE = "SAVE_RECIPE_FAILURE";
export const UNSAVE_RECIPE_REQUEST = "UNSAVE_RECIPE_REQUEST";
export const UNSAVE_RECIPE_SUCCESS = "UNSAVE_RECIPE_SUCCESS";
export const UNSAVE_RECIPE_FAILURE = "UNSAVE_RECIPE_FAILURE";
export const GET_COMMENTS_REQUEST = "GET_COMMENTS_REQUEST";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_FAILURE = "GET_COMMENTS_FAILURE";
export const POST_COMMENT_REQUEST = "POST_COMMENT_REQUEST";
export const POST_COMMENT_SUCCESS = "POST_COMMENT_SUCCESS";
export const POST_COMMENT_FAILURE = "POST_COMMENT_FAILURE";
export const SET_PARENT_COMMENT_ID = "SET_PARENT_COMMENT_ID";
export const INPUT_FOCUSED = "INPUT_FOCUSED";

//FEED ACTIONS
export const GET_FEED_RECIPES_REQUEST = "GET_FEED_RECIPES_REQUEST";
export const GET_FEED_RECIPES_SUCCESS = "GET_FEED_RECIPES_SUCCESS";
export const GET_FEED_RECIPES_FAILURE = "GET_FEED_RECIPES_FAILURE";
export const REFRESH_FEED_RECIPES_REQUEST = "REFRESH_FEED_RECIPES_REQUEST";
export const REFRESH_FEED_RECIPES_SUCCESS = "REFRESH_FEED_RECIPES_SUCCESS";
export const REFRESH_FEED_RECIPES_FAILURE = "REFRESH_FEED_RECIPES_FAILURE";

//SEARCH ACTIONS
export const GET_SEARCH_RECIPES_REQUEST = "GET_SEARCH_RECIPES_REQUEST";
export const GET_SEARCH_RECIPES_SUCCESS = "GET_SEARCH_RECIPES_SUCCESS";
export const GET_SEARCH_RECIPES_FAILURE = "GET_SEARCH_RECIPES_FAILURE";
export const REFRESH_SEARCH_RECIPES_REQUEST = "REFRESH_SEARCH_RECIPES_REQUEST";
export const REFRESH_SEARCH_RECIPES_SUCCESS = "REFRESH_SEARCH_RECIPES_SUCCESS";
export const REFRESH_SEARCH_RECIPES_FAILURE = "REFRESH_SEARCH_RECIPES_FAILURE";
export const SEARCH_CATEGORY_CHANGE = "SEARCH_CATEGORY_CHANGE";
export const SEARCH_CHANGE = "SEARCH_CHANGE";
