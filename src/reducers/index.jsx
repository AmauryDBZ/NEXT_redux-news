import { combineReducers } from "redux";
import fetchNews from './fetchNews'

const allReducers = combineReducers({
  fetch: fetchNews
});

export default allReducers;
