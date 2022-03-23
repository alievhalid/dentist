import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import authReducer from "./auth/authReducer";


const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
