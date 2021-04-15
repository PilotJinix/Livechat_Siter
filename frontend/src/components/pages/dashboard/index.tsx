// NODE_MODULES
import { Component, FC, useState } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faComment,
  faUsers,
  faCog,
  faPowerOff,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const SidebarLink: FC<NavLinkProps & Pick<FontAwesomeIconProps, "icon">> = (
  props
) => {
  return (
    <motion.li
      className="w-full"
      variants={{
        hidden: {
          x: -20,
          opacity: 0,
        },
        visible: {
          x: 0,
          opacity: 1,
        },
      }}
    >
      <NavLink
        {...props}
        className="flex items-center px-4 py-2 my-1 hover:bg-gray-200 text-gray-400 dark:text-gray-500 hover:text-gray-500 rounded-xl"
        activeClassName="bg-gray-200 dark:bg-gray-700 text-dark dark:text-light hover:text-dark"
      >
        <FontAwesomeIcon className="w-5 h-5" icon={props.icon} />
        <span className="mx-4 text-lg font-normal">{props.children}</span>
      </NavLink>
    </motion.li>
  );
};

const Sidebar: FC = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className="flex flex-col justify-between items-stretch bg-white dark:bg-gray-800 w-64 h-screen">
      {/* H */}
      <div className="flex items-center justify-start w-auto mx-3 mt-10">
        <FontAwesomeIcon
          className="w-10 h-10 text-dark dark:text-light"
          icon={faThLarge}
        />
        <span className="text-dark dark:text-light ml-4 text-2xl font-bold">
          Application
        </span>
      </div>
      {/* M */}
      <nav className="flex flex-col justify-between w-auto mx-3 my-6">
        <motion.ul
          className="flex flex-col justify-between"
          variants={{
            hidden: {
              opacity: 0.5,
            },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          <SidebarLink exact to="/my/" icon={faThLarge}>
            Dashboard
          </SidebarLink>
          <SidebarLink exact to="/my/chat" icon={faComment}>
            Chat
          </SidebarLink>
          <SidebarLink exact to="/my/users" icon={faUsers}>
            Users
          </SidebarLink>
          <SidebarLink exact to="/my/settings" icon={faCog}>
            Settings
          </SidebarLink>
        </motion.ul>
      </nav>
      {/* F */}
      <div className="flex flex-col mt-auto w-auto mx-3 mb-10">
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
  );
};

class Dashboard extends Component {
  render() {
    return (
      <div className="w-full relative bg-light dark:bg-dark">
        <div className="flex flex-col sm:flex-row sm:justify-around">
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default Dashboard;
