// NODE_MODULES
import { Component } from "react";
import { motion } from "framer-motion";
// Variants
import { NewsListVariant } from "./variants";

class NewsList extends Component {
  render() {
    return (
      <motion.div variants={NewsListVariant} initial="hidden" animate="visible">
        {this.props.children}
      </motion.div>
    );
  }
}

export default NewsList;
