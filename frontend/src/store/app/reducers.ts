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
        loggedIn: true,
      };

    case LOGIN:
      console.log("action.payload.user");
      console.log(action.payload.user);

      return {
        ...state,
        user: action.payload.user,
        auth: action.payload.auth,
        loggedIn: true,
      };

    case LOGOUT:
      return {
        ...state,
        user: undefined,
        auth: undefined,
        loggedIn: false,
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
