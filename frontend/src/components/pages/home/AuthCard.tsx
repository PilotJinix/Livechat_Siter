// NODE_MODULES
import { Component } from "react";
import { motion } from "framer-motion";
// Variants
import { AuthCardVariant } from "./variants";

class AuthCard extends Component {
  render() {
    return (
      <motion.div
        variants={AuthCardVariant}
        initial="hidden"
        animate="visible"
        exit="leave"
        layout
        className="relative w-full p-6 m-2 rounded-lg shadow-lg sm:h-auto bg-light sm:m-0 sm:w-96 dark:bg-dark"
      >
        {this.props.children}
      </motion.div>
    );
  }
}

export default AuthCard;
