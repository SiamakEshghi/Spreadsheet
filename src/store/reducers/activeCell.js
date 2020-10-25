import { SET_ACTIVE_CELL, REMOVE_ACTIVE_CELL } from "../actions/actionTypes";

const INITIAL_STATE = {
  label: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_CELL:
      return {
        label: action.label,
      };
    case REMOVE_ACTIVE_CELL:
      return {
        label: "",
      };
    default:
      return state;
  }
};
