// NODE_MODULES
import { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Button = ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonPrimary: FC<Button & { link?: string }> = (props) => {
  return (
    <button className="bg-primary text-neutral-dark px-4 py-2" {...props}>
      {props.children}
    </button>
  );
};
