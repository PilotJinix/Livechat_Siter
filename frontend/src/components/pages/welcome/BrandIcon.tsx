// NODE_MODULES
import { FC } from "react";

import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";

export const BrandIcon: FC<Omit<FontAwesomeIconProps, "icon">> = (props) => {
  return (
    <FontAwesomeIcon
      className={
        props.className ||
        "w-10 h-10 text-white p-2 bg-primary-500 rounded-full"
      }
      icon={faSmile}
    />
  );
};
