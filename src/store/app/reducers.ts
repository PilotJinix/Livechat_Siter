import { AppState, AppActionTypes, REGISTER, LOGIN, LOGOUT, TOKEN, CONNECTED, THEME } from "./types";

/*
|---------------------------------------------------------------
| Initial State
|---------------------------------------------------------------
|
*/

const initialState: AppState = {
  user: {},
  theme: "light",
  loggenIn: false,
  connected: false,
};

/*
|---------------------------------------------------------------
| App Reducers
|---------------------------------------------------------------
|
*/

export const appReducer = (state: AppState = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        user: {
          username: action.payload.username,
        },
        token: "new token",
      };

    case LOGIN:
      return {
        ...state,
        user: {
          username: action.payload.username,
        },
        token: action.payload.token,
        loggenIn: true,
      };

    case LOGOUT:
      return {
        ...state,
        user: {
          username: undefined,
        },
        token: undefined,
        loggenIn: false,
      };

    case TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };

    case CONNECTED:
      return {
        ...state,
        connected: action.payload.connect,
      };

    case THEME:
      return {
        ...state,
        theme: action.payload.theme,
      };

    default:
      return state;
  }
};
