import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import authReducer from "./auth/authReducer";
import serviceReducer from "./service/serviceReducer";


const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  authReducer,
  serviceReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
