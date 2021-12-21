import { combineReducers } from "redux";
import categoryReducer from "./category.reducer";
import clientReducer from "./clients.reducer";
export default combineReducers({ categoryReducer, clientReducer });
