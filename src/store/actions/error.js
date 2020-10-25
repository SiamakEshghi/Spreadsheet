import { SET_ERROR, REMOVE_ERROR } from "./actionTypes";

export const setError = (errorMessage) => {
  return {
    type: SET_ERROR,
    errorMessage,
  };
};

export const removeError = () => {
  return {
    type: REMOVE_ERROR,
  };
};
