// LOCAL
import { THEME_KEY } from "__src/configs";
import { ThemeType } from "__src/store/app/types";

export const getTheme = () => {
  let value: ThemeType;
  try {
    value = (window.localStorage.getItem(THEME_KEY) as ThemeType) || "light";
  } catch (error) {
    value = "light";
  }
  return value;
};

export const addDarkClass = () => {
  document.documentElement.classList.add("dark");
};

export const toggleDarkClass = () => {
  document.documentElement.classList.toggle("dark");
};

export const setTheme = (newTheme: ThemeType) => {
  try {
    newTheme = newTheme === "dark" || newTheme === "light" ? newTheme : "light";
    window.localStorage.setItem(THEME_KEY, newTheme);
  } catch (error) {
    console.warn(`Error setting localStorage key “${THEME_KEY}”:`, error);
  }
};

export const setThemeWithToggle = (themeType: ThemeType) => {
  try {
    window.localStorage.setItem(THEME_KEY, themeType);
  } catch (error) {
    console.warn(`Error setting localStorage key “${THEME_KEY}”:`, error);
  }
  toggleDarkClass();
};

export const loadFirstTheme = () => {
  let current = getTheme();
  setTheme(current);
  if (current == "dark") addDarkClass();
  return current;
};

// export const themeListener = (store: ) => {
//   const handleStorageChange = () => {
//     themee(getTheme());
//   };

//   window.addEventListener("storage", handleStorageChange);

//   // this is a custom event, triggered in writeValueToLocalStorage
//   window.addEventListener("local-storage", handleStorageChange);

//   return () => {
//     window.removeEventListener("storage", handleStorageChange);
//     window.removeEventListener("local-storage", handleStorageChange);
//   };
// };
