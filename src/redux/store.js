import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../redux/auth/authReducer";
import { blogsReducer } from "../redux/blogs/blogsReducer";

const rootElement = combineReducers({ authReducer, blogsReducer });

export const store = legacy_createStore(rootElement, applyMiddleware(thunk));
