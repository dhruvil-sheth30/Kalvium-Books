import { SET_USER_REGISTRATION, UNREGISTER_USER } from "./Types";


const initialState = { details: {} };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_REGISTRATION:
      return { ...state, details: action.payload };

    case UNREGISTER_USER:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
