import { SET_APP_NAME } from "./constants";

export interface AppReducer {
  appName: string;
}

export interface SetAppName {
  type: SET_APP_NAME;
  payload: string;
}

export type Action = SetAppName;
