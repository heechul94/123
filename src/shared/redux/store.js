import { combineReducers, createStore } from "redux";
import fanLetter from "./modules/fanLetter";
import selector from "./modules/selector";
const rootReducer = combineReducers({ fanLetter, selector });
const store = createStore(rootReducer);

export default store;
