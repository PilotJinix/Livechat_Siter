// LOCAL
import { AUTH_KEY } from "__src/configs";
import { Auth } from "__src/store/app/types";

const defaultValue: Auth = {
  type: "bearer",
  token: "",
  expires_at: "",
};

export const getAuth = () => {
  let value: Auth;
  try {
    value = JSON.parse(window.localStorage.getItem(AUTH_KEY) as any);
  } catch (error) {
    value = defaultValue;
  }
  return value;
};

export const setAuth = (auth: Auth = defaultValue) => {
  try {
    window.localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
  } catch (error) {
    console.warn(`Error setting localStorage key “${AUTH_KEY}”:`, error);
  }
};

export const loadFirstAuth = () => {
  let current = getAuth();
  setAuth(current);
  return current;
};
