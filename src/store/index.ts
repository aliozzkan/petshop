import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import logger from "redux-logger";
import { appReducer } from "./app/reducer";
import { fetchReducer } from "./fetch/reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allEnhancers = composeEnhancers(applyMiddleware(thunk));

export interface Store {
  app: ReturnType<typeof appReducer>;
  fetch: ReturnType<typeof fetchReducer>;
}

export type store = Store;
export const store = createStore(
  combineReducers({
    app: appReducer,
    fetch: fetchReducer
  }),
  allEnhancers
);
