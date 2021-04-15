import { ThunkResult } from "../index";
import { AppActionTypes, REGISTER, LOGIN, LOGOUT, TOKEN, CONNECTED, THEME, ThemeType } from "./types";
import { setThemeWithToggle } from "__src/theme";

/*
|---------------------------------------------------------------
| Connected
|---------------------------------------------------------------
|
*/

type ConnectedProps = boolean;

export const connected = (token: ConnectedProps): AppActionTypes => ({
  type: CONNECTED,
  payload: {
    connect: token,
  },
});

/*
|---------------------------------------------------------------
| Token
|---------------------------------------------------------------
|
*/

type TokenProps = string;

export const token = (token: TokenProps): AppActionTypes => ({
  type: TOKEN,
  payload: {
    token: token,
  },
});

/*
|---------------------------------------------------------------
| User Register
|---------------------------------------------------------------
|
*/

type RegisterProps = {
  username?: string;
  password?: string;
};

export const register = (props: RegisterProps): AppActionTypes => ({
  type: REGISTER,
  payload: {
    username: "username register",
    password: "password register",
  },
});

/*
|---------------------------------------------------------------
| User Login
|---------------------------------------------------------------
|
*/

type LoginProps = {
  username: string;
  token?: string;
};

export const login = ({ username, token }: LoginProps): AppActionTypes => ({
  type: LOGIN,
  payload: {
    username,
    token,
  },
});

/*
|---------------------------------------------------------------
| User Logout
|---------------------------------------------------------------
|
*/

export const logout = (): AppActionTypes => ({
  type: LOGOUT,
});

/*
|---------------------------------------------------------------
| Change Theme
|---------------------------------------------------------------
|
*/

type ThemeProps = ThemeType;

export const theme = (newTheme: ThemeProps): AppActionTypes => ({
  type: THEME,
  payload: {
    theme: newTheme,
  },
});

export const themeAsync = (): ThunkResult<void> => (dispatch, getState) => {
  const newTheme = getState().app.theme == "dark" ? "light" : "dark";
  setThemeWithToggle(newTheme);
  dispatch(theme(newTheme));
};
