import jwt_decode from "jwt-decode";
import setAuthToken from "./setAuthToken";
import * as SecureStore from "expo-secure-store";
import store from "../redux/store";
import { setCurrentUser, logout } from "../redux/actions/auth";

export const checkAuthToken = async () => {
  try {
    // Check for token to keep user logged in
    const token = await SecureStore.getItemAsync("jwtToken");

    if (token) {
      // Set auth token header auth
      setAuthToken(token);
      const decodedToken = jwt_decode(token);
      store.dispatch(setCurrentUser(decodedToken));

      // Check for expired token
      const currentTime = Date.now() / 1000; // to get in milliseconds
      if (jwt_decode(token).exp < currentTime) {
        // Logout user
        store.dispatch(logout());
      }
    }
  } catch (err) {
    console.log("error:", err);
  }
};
