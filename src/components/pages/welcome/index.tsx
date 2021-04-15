// NODE_MODULES
import { FC, Component, useEffect, useState } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBell,
  faBars,
  faTimes,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
// COMPONENTS
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Hero, Feature, OurTeam } from "./sections";

import {
  PrimaryButton,
  SecondaryButton,
  LightButton,
  DarkButton,
  PrimaryIconButton,
  LightIconButton,
  PrimaryButtonIcon,
  LightButtonIcon,
} from "__src/components/atoms/Button";

const DesktopNavlink: FC<NavLinkProps> = (props) => {
  return (
    <NavLink
      {...props}
      className="px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 text-sm font-medium rounded-xl transition-colors duration-75"
      activeClassName="text-dark dark:text-light bg-light dark:bg-dark"
    >
      {props.children}
    </NavLink>
  );
};
const MobileNavlink: FC<NavLinkProps> = (props) => {
  return (
    <NavLink
      {...props}
      className="block px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-base font-medium rounded-xl transition-colors duration-75"
      activeClassName="bg-light dark:bg-dark text-dark dark:text-light"
    >
      {props.children}
    </NavLink>
  );
};

const Navbars = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const [dark, setDark] = useState(false);

  const match = "(min-width: 640px)";

  const [isMatchMedia, setMatchMedia] = useState(
    window.matchMedia(match).matches
  );

  const handler = (e: MediaQueryListEvent) => {
    setMatchMedia(e.matches);
  };

  useEffect(() => {
    window.matchMedia(match).addEventListener("change", handler);

    return () => {
      window.matchMedia(match).removeEventListener("change", handler);
    };
  }, []);

  useEffect(() => {
    if (isMatchMedia) {
      setOpenNavbar(false);
    }
  });

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 transition-colors duration-75">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 rounded-xl transition-colors duration-75"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => {
                setOpenNavbar(!openNavbar);
              }}
            >
              <FontAwesomeIcon
                className="h-6 w-6"
                icon={openNavbar ? faTimes : faBars}
              />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-start sm:items-stretch">
            <div className="flex-shrink-0 flex items-center pl-2 sm:pl-0 pr-2">
              <span className="lg:mr-3 text-dark dark:text-light transition-colors duration-75">
                <FontAwesomeIcon className="w-8 h-8" icon={faHome} />
              </span>
              <span className="hidden lg:flex lg:justify-center lg:items-center h-8 text-dark dark:text-light font-bold text-xl transition-colors duration-75">
                Application
              </span>
            </div>
            {/* Desktop Navbars Menu */}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <DesktopNavlink exact to="/">
                  Welcome
                </DesktopNavlink>

                <DesktopNavlink exact to="/my">
                  My
                </DesktopNavlink>

                <DesktopNavlink exact to="/about">
                  About
                </DesktopNavlink>

                <DesktopNavlink exact to="/contact">
                  Contact
                </DesktopNavlink>
              </div>
            </div>
          </div>
          <div className="mr-12 sm:mr-0">
            <button
              className="flex justify-center items-center w-10 h-10 bg-light dark:bg-dark hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-400 dark:text-gray-500 rounded-xl transition-colors duration-75"
              onClick={() => {
                setDark(!dark);
                document.documentElement.classList.toggle("dark");
              }}
            >
              <FontAwesomeIcon icon={dark ? faMoon : faSun} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbars Menu */}
      <div className={openNavbar ? "block" : "hidden"} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <MobileNavlink exact to="/">
            Welcome
          </MobileNavlink>

          <MobileNavlink exact to="/my">
            My
          </MobileNavlink>

          <MobileNavlink exact to="/about">
            About
          </MobileNavlink>

          <MobileNavlink exact to="/contact">
            Contact
          </MobileNavlink>
        </div>
      </div>
    </nav>
  );
};

type Props = {};

type State = {};

class Welcome extends Component<Props, State> {
  render() {
    return <Navbars />;
  }
}

export default Welcome;
