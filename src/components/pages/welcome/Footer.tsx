// NODE_MODULES
import { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowRight,
  faArrowDown,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

// COMPONENTS
import { BrandIcon } from "./BrandIcon";

export const Footer: FC = () => {
  return (
    <footer className="text-neutral-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-neutral-900">
          <BrandIcon />
          <span className="ml-3 text-xl">Livechat_Siter</span>
        </a>
        <p className="text-sm text-neutral-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-neutral-200 sm:py-2 sm:mt-0 mt-4">
          © 2021 Livechat_Siter
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-neutral-500">
            <FontAwesomeIcon className="w-5 h-5" icon={faArrowUp} />
          </a>
          <a className="ml-3 text-neutral-500">
            <FontAwesomeIcon className="w-5 h-5" icon={faArrowRight} />
          </a>
          <a className="ml-3 text-neutral-500">
            <FontAwesomeIcon className="w-5 h-5" icon={faArrowDown} />
          </a>
          <a className="ml-3 text-neutral-500">
            <FontAwesomeIcon className="w-5 h-5" icon={faArrowLeft} />
          </a>
        </span>
      </div>
    </footer>
  );
};
