// NODE_MODULES
import { Component } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
// Variants
import { NavLinkItemVariant } from "./variants";

export type Nav = {
  title: string;
  path: string;
  icon: IconDefinition;
  exact?: boolean;
  auth?: boolean;
};

type Props = {
  nav: Nav;
};

class NavLinkItem extends Component<Props> {
  render() {
    const { nav } = this.props;
    return (
      <motion.li variants={NavLinkItemVariant} className="p-2">
        <NavLink
          className="flex items-center justify-center px-3 py-2 text-gray-500 rounded-lg lg:justify-start dark:text-gray-400 hover:bg-primary-200 dark:hover:bg-gray-600"
          activeClassName="!bg-primary dark:!bg-gray-800 hover:!bg-primary dark:hover:!bg-gray-800 !text-gray-100 dark:!text-gray-200"
          to={nav.path}
          exact={nav.exact}
        >
          <FontAwesomeIcon className="w-5 h-5 mx-1 md:my-1 lg:my-0" icon={nav.icon} />
          <span className="hidden ml-1 lg:block">{nav.title}</span>
        </NavLink>
      </motion.li>
    );
  }
}

export default NavLinkItem;
