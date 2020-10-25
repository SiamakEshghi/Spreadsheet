import { SET_TITLE } from "./actionTypes";

export const setTitle = (label, value, formula) => {
  return {
    type: SET_TITLE,
    label,
    value,
    formula,
  };
};
