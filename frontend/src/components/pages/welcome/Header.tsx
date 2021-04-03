// NODE_MODULES
import { FC } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

// COMPONENTS
import { BrandIcon } from "./BrandIcon";

export const Header: FC = () => {
  return (
    <header className="text-neutral-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-neutral-900 mb-4 md:mb-0">
          <BrandIcon />
          <span className="ml-3 text-xl">Livechat_Siter</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-neutral-900">
            Welcome
          </Link>
          <Link to="/login" className="mr-5 hover:text-neutral-900">
            Login
          </Link>
          <Link to="/register" className="mr-5 hover:text-neutral-900">
            Register
          </Link>
        </nav>
        <button className="inline-flex items-center bg-neutral-100 border-0 py-1 px-3 focus:outline-none hover:bg-neutral-200 rounded text-base mt-4 md:mt-0">
          Login
          <FontAwesomeIcon className="w-4 h-4 ml-1" icon={faSignInAlt} />
        </button>
      </div>
    </header>
  );
};
