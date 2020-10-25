import { SET_ERROR, REMOVE_ERROR } from "../actions/actionTypes";

const INITIAL_STATE = {
  errorMessage: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        errorMessage: action.errorMessage,
      };
    case REMOVE_ERROR:
      return {
        errorMessage: "",
      };
    default:
      return state;
  }
};
