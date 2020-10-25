import { SET_ACTIVE_CELL, REMOVE_ACTIVE_CELL } from "./actionTypes";

export const setActiveCell = (label) => {
  return {
    type: SET_ACTIVE_CELL,
    label,
  };
};

export const removeActiveCell = () => {
  return {
    type: REMOVE_ACTIVE_CELL,
  };
};
