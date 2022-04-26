import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import authReducer from "./auth/authReducer";
import serviceReducer from "./service/serviceReducer";
import dentistsReducer from "./dentists/dentistsReducer";
import patientsReducer from "./patients/patientsReducer"

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  authReducer,
  serviceReducer,
  dentistsReducer
  patients: patientsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
