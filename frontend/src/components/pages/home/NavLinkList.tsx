// NODE_MODULES
import { Component } from "react";
import { motion } from "framer-motion";
// Variants
import { NavLinkListVariant } from "./variants";

class NavLinkList extends Component {
  render() {
    return (
      <nav className="w-full p-1">
        <motion.ul variants={NavLinkListVariant} initial="hidden" animate="visible">
          {this.props.children}
        </motion.ul>
      </nav>
    );
  }
}

export default NavLinkList;
