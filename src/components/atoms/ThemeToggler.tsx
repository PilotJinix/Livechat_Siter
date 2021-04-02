// NODE_MODULES
import { FC, ChangeEventHandler } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import useLocalStorage from "__src/components/hooks/useLocalStorage";

export const ThemeToggler: FC = () => {
  const [isDarkTheme, setDarkTheme] = useLocalStorage<boolean>(
    "isDarkTheme",
    false
  );

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle("dark");
  };

  return <button onClick={toggleTheme}>Toggle</button>;
};

{
  /* <div className="mb-3">
      <div className="relative inline-block w-10 mr-2 align-middle select-none">
        <input
          type="checkbox"
          name="toggle"
          id="Blue"
          className="outline-none focus:outline-none right-4 checked:right-0 absolute block w-6 h-6 rounded-full bg-white checked:bg-primary-500 border-2 appearance-none cursor-pointer"
          onChange={toggleTheme}
        />
        <label
          htmlFor="Blue"
          className="block overflow-hidden h-6 rounded-full bg-neutral-300 cursor-pointer"
        ></label>
      </div>
    </div> */
}

{
  /* {isDarkTheme ? (
            <FontAwesomeIcon className="w-12 h-12" icon={faMoon} />
          ) : (
            <FontAwesomeIcon className="w-12 h-12" icon={faSun} />
          )} */
}
