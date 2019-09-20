import { SET_CURRENT_USER } from "./UserConstant";

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});
