import { AppReducer, Action } from "./types";
import { SET_APP_NAME } from "./constants";

const initialState: AppReducer = {
  appName: "petstore",
};

export function appReducer(state = initialState, action: Action): AppReducer {
  switch (action.type) {
    case SET_APP_NAME:
      return {
        ...state,
        appName: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}