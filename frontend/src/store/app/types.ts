/*
|---------------------------------------------------------------
| Type
|---------------------------------------------------------------
|
*/

export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const AUTHENTICATE = "AUTHENTICATE";
export const AUTH = "AUTH";

export const CONNECTED = "CONNECTED";
export const THEME = "THEME";

export type ThemeType = "light" | "dark";

export type User = {
  id: number;
  username: string;
  role: "admin" | "common";
  avatar: string | null;
  created_at: string;
  updated_at: string;
};

export type Auth = {
  type: "bearer";
  token: string;
  expires_at: string;
};

/*
|---------------------------------------------------------------
| App State
|---------------------------------------------------------------
|
*/

export interface AppState {
  user?: User;
  auth?: Auth;
  loggenIn?: boolean;
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
    user?: User;
    auth?: Auth;
  };
}

export interface LoginAction {
  type: typeof LOGIN;
  payload: {
    user?: User;
    auth?: Auth;
  };
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export interface AuthenticateAction {
  type: typeof AUTHENTICATE;
  payload: {
    user?: User;
    auth?: Auth;
  };
}

export interface AuthAction {
  type: typeof AUTH;
  payload: {
    auth?: Auth;
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

export type AppActionTypes =
  | RegisterAction
  | LoginAction
  | LogoutAction
  | AuthenticateAction
  | AuthAction
  | ConnectedAction
  | ThemeAction;
