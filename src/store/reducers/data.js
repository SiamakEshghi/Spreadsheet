import { SET_VALUE, SET_FORMULA } from '../actions/actionTypes';
import { updateData } from './utils/dataUtils';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  let updatedData;
  switch (action.type) {
    case SET_VALUE:
      updatedData = {
        ...state,
        [action.label]: {
          ...state[action.label],
          value: action.value,
        },
      };
      updatedData = updateData(action.label, updatedData);
      return updatedData;

    case SET_FORMULA:
      updatedData = {
        ...state,
        [action.label]: {
          ...state[action.label],
          formula: action.formula,
        },
      };
      updatedData = updateData(action.label, updatedData);
      return updatedData;
    default:
      return state;
  }
};
