import { ThunkResult } from "../index";
import { AppActionTypes, REGISTER, LOGIN, LOGOUT, AUTHENTICATE, AUTH, CONNECTED, THEME, ThemeType, User, Auth } from "./types";
import { setThemeWithToggle } from "__src/theme";
import { setAuth } from "__src/auth";

import { api, AxiosResponse } from "__src/api";

type Response = {
  ok?: boolean;
};

/*
|---------------------------------------------------------------
| Connected
|---------------------------------------------------------------
|
*/

type ConnectedProps = boolean;

export const connected = (state: ConnectedProps = true): AppActionTypes => ({
  type: CONNECTED,
  payload: {
    connect: state,
  },
});

/*
|---------------------------------------------------------------
| User Register
|---------------------------------------------------------------
|
*/

type RegisterProps = {
  user?: User;
  auth?: Auth;
};

export const register = (props: RegisterProps): AppActionTypes => ({
  type: REGISTER,
  payload: {
    user: props.user,
    auth: props.auth,
  },
});

type RegisterDataProps = {
  username: string;
  password: string;
  passwordConfirmation: string;
};

type RegisterDataResponse = {
  user?: User;
  auth?: Auth;
} & Response;

export const registerAsync = (data: RegisterDataProps): ThunkResult<Promise<boolean>> => (dispatch) => {
  return new Promise((resolve) => {
    api
      .post<any, AxiosResponse<RegisterDataResponse>>(`/register`, data)
      .then((response) => {
        if (response.data.ok) {
          dispatch(
            register({
              user: response.data.user,
              auth: response.data.auth,
            })
          );
          setAuth(response.data.auth);
          resolve(true);
        } else {
          console.log(response);
          console.error("register failed");
          resolve(false);
        }
      })
      .catch((errors) => {
        console.error(errors);
        resolve(false);
      });
  });
};

/*
|---------------------------------------------------------------
| User Login
|---------------------------------------------------------------
|
*/

type LoginProps = {
  user?: User;
  auth?: Auth;
};

export const login = (props: LoginProps): AppActionTypes => ({
  type: LOGIN,
  payload: {
    user: props.user,
    auth: props.auth,
  },
});

type LoginDataProps = {
  username: string;
  password: string;
};

type LoginDataResponse = {
  user?: User;
  auth?: Auth;
} & Response;

export const loginAsync = (data: LoginDataProps): ThunkResult<Promise<boolean>> => (dispatch) => {
  return new Promise((resolve) => {
    api
      .post<any, AxiosResponse<LoginDataResponse>>(`/login`, data)
      .then((response) => {
        if (response.data.ok) {
          dispatch(login({ user: response.data.user, auth: response.data.auth }));
          setAuth(response.data.auth);
          resolve(true);
        } else {
          console.log(response);
          console.error("login failed");
          resolve(false);
        }
      })
      .catch((errors) => {
        console.error(errors);
        resolve(false);
      });
  });
};

/*
|---------------------------------------------------------------
| User Logout
|---------------------------------------------------------------
|
*/

export const logout = (): AppActionTypes => ({
  type: LOGOUT,
});

type LogoutDataResponse = {} & Response;

export const logoutAsync = (): ThunkResult<Promise<boolean>> => (dispatch, getState) => {
  return new Promise((resolve) => {
    const app = getState().app;
    const token = app.auth?.token || "";
    api
      .post<any, AxiosResponse<LogoutDataResponse>>(
        `/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.ok) {
          dispatch(logout());
          setAuth();
          resolve(true);
        } else {
          console.log(response);
          console.error("logout failed");
          resolve(false);
        }
      })
      .catch((errors) => {
        console.error(errors);
        resolve(false);
      });
  });
};

/*
|---------------------------------------------------------------
| Authenticate
|---------------------------------------------------------------
|
*/

type AuthenticateProps = {
  user?: User;
  auth?: Auth;
};

export const authenticate = (props: AuthenticateProps): AppActionTypes => ({
  type: AUTHENTICATE,
  payload: {
    user: props.user,
    auth: props.auth,
  },
});

type AuthenticateDataResponse = {
  auth?: {
    defaultGuard: string;
    guards: {
      api: {
        isLoggedIn: boolean;
        isGuest: boolean;
        authenticationAttempted: boolean;
        isAuthenticated: boolean;
        user: User;
      };
    };
  };
} & Response;

export const authenticateAsync = (): ThunkResult<Promise<boolean>> => (dispatch, getState) => {
  return new Promise((resolve) => {
    const app = getState().app;
    const token = app.auth?.token || "";
    api
      .post<any, AxiosResponse<AuthenticateDataResponse>>(
        `/authenticate`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.ok) {
          dispatch(login({ user: response.data.auth?.guards.api.user, auth: app.auth }));
          resolve(true);
        } else {
          console.log(response);
          console.error("current auth is not authenticated then dispatch logout");
          dispatch(logout());
          resolve(false);
        }
      })
      .catch((errors) => {
        dispatch(logout());
        console.error(errors);
        resolve(false);
      });
  });
};

/*
|---------------------------------------------------------------
| Auth
|---------------------------------------------------------------
|
*/

type AuthProps = Auth;

export const auth = (auth: AuthProps): AppActionTypes => ({
  type: AUTH,
  payload: {
    auth: auth,
  },
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
