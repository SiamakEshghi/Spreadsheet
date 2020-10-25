import { SET_VALUE, SET_FORMULA } from "./actionTypes";

export const setValue = (label, value) => {
  return {
    type: SET_VALUE,
    label,
    value,
  };
};

export const setFormula = (label, formula) => {
  return {
    type: SET_FORMULA,
    label,
    formula,
  };
};
