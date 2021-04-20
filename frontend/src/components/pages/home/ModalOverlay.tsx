// NODE_MODULES
import { Component } from "react";
import { motion } from "framer-motion";
// Variants
import { ModalOverlayVariant } from "./variants";

interface Props {
  onOverlayClick: () => void;
}

class ModalOverlay extends Component<Props> {
  render() {
    return (
      <motion.div
        variants={ModalOverlayVariant}
        initial="hidden"
        animate="visible"
        exit="leave"
        layout
        className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-gray-700 bg-opacity-60 dark:bg-opacity-80"
        onClick={(e) => {
          e.target == e.currentTarget && this.props.onOverlayClick();
        }}
      >
        {this.props.children}
      </motion.div>
    );
  }
}

export default ModalOverlay;
