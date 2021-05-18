import { Variants } from "framer-motion";

export const NavLinkListVariant: Variants = {
  hidden: {
    opacity: 0.5,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

export const NavLinkItemVariant: Variants = {
  hidden: {
    scale: 0.9,
    x: -30,
    opacity: 0.8,
  },
  visible: {
    scale: 1,
    x: 0,
    opacity: 1,
  },
};

export const ModalOverlayVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  leave: {
    opacity: 0,
    transition: {
      delay: 0.2,
    },
  },
};

export const AuthCardVariant: Variants = {
  hidden: {
    scale: 0.7,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
  leave: {
    scale: 0.7,
    opacity: 0,
  },
};

export const NewsListVariant: Variants = {
  hidden: {
    opacity: 0.5,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.03,
    },
  },
};

export const NewsItemVariant: Variants = {
  hidden: {
    y: -30,
    opacity: 0.5,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
