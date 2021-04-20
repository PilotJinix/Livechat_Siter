import { AppState, AppActionTypes, REGISTER, LOGIN, LOGOUT, AUTHENTICATE, AUTH, CONNECTED, THEME, Auth } from "./types";

/*
|---------------------------------------------------------------
| Initial State
|---------------------------------------------------------------
|
*/

const initialState: AppState = {
  theme: "light",
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
        user: action.payload.user,
        loggenIn: true,
      };

    case LOGIN:
      console.log("action.payload.user");
      console.log(action.payload.user);

      return {
        ...state,
        user: action.payload.user,
        auth: action.payload.auth,
        loggenIn: true,
      };

    case LOGOUT:
      return {
        ...state,
        user: undefined,
        auth: undefined,
        loggenIn: false,
      };

    case AUTHENTICATE:
      return {
        ...state,
        user: action.payload.user,
        auth: action.payload.auth,
      };

    case AUTH:
      return {
        ...state,
        auth: action.payload.auth,
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
