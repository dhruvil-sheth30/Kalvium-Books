// Updated Action Type Names
import { SET_USER_REGISTRATION, UNREGISTER_USER } from "./Types";

// Updated Action Creators
export const registerUser = (details) => {
  return { type: SET_USER_REGISTRATION, payload: details };
};

export const removeRegisteredUser = () => {
  return { type: UNREGISTER_USER };
};
