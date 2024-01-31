import { combineReducers, createStore } from "redux";
import fanLetter from "./modules/fanLetter";
const rootReducer = combineReducers({ fanLetter });
const store = createStore(rootReducer);

export default store;
