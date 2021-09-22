import { combineReducers } from "redux";
import basketsParams from "./basketsParams";
import columns from "./columns";
import futurConfig from "./futurConfig";

export default combineReducers({
  basketsParams,
  columns,
  futurConfig
});
