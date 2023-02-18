import { legacy_createStore, applyMiddleware } from "redux";
import reducer from "./src/Redux/reducer";
import thunk from "redux-thunk";
export const store = legacy_createStore(reducer, applyMiddleware(thunk));
