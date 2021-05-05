import { AUTH_LOGOUT } from "../constants";

export function logout() {
  return {
    type: AUTH_LOGOUT,
  };
}
