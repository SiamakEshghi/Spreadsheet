import { combineReducers } from "redux";

import dataReducer from "./data";
import titleReducer from "./title";
import errorReducer from "./error";
import activeCellReducer from "./activeCell";

export default combineReducers({
  data: dataReducer,
  title: titleReducer,
  error: errorReducer,
  activeCell: activeCellReducer,
});
