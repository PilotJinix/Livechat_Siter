/*
|---------------------------------------------------------------
| Type
|---------------------------------------------------------------
|
*/

export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const TOKEN = "TOKEN";
export const CONNECTED = "CONNECTED";
export const THEME = "THEME";

export type ThemeType = "light" | "dark";

/*
|---------------------------------------------------------------
| App State
|---------------------------------------------------------------
|
*/

export interface AppState {
  user: {
    username?: string;
  };
  token?: string;
  loggenIn: boolean;
  connected: boolean;
  theme: ThemeType;
}

/*
|---------------------------------------------------------------
| In App Action
|---------------------------------------------------------------
|
*/

export interface RegisterAction {
  type: typeof REGISTER;
  payload: {
    username: string;
    password: string;
  };
}

export interface LoginAction {
  type: typeof LOGIN;
  payload: {
    username: string;
    token?: string;
  };
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export interface TokenAction {
  type: typeof TOKEN;
  payload: {
    token: string;
  };
}

export interface ConnectedAction {
  type: typeof CONNECTED;
  payload: {
    connect: boolean;
  };
}

export interface ThemeAction {
  type: typeof THEME;
  payload: {
    theme: ThemeType;
  };
}

/*
|---------------------------------------------------------------
| Type AppAction
|---------------------------------------------------------------
|
*/

export type AppActionTypes = RegisterAction | LoginAction | LogoutAction | TokenAction | ConnectedAction | ThemeAction;
