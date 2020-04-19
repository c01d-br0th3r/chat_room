import { combineReducers } from "redux";
import movies from "./moviesReducers";
import page from "./pageReducers";
const rootReducer = combineReducers({
  movies,
  page,
});

export default rootReducer;
