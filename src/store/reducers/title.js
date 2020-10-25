import { SET_TITLE } from "../actions/actionTypes";

const INITIAL_STATE = {
  label: "",
  value: "",
  formula: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TITLE:
      return {
        label: action.label,
        value: action.value,
        formula: action.formula,
      };
    default:
      return state;
  }
};
