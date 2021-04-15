// NODE_MODULES
import { Component, MouseEventHandler } from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

type ButtonProps = Props;

type ButtonIconProps = Props &
  Pick<FontAwesomeIconProps, "icon"> & { align?: "left" | "right" };

type IconButtonProps = Props & Pick<FontAwesomeIconProps, "icon">;

export class PrimaryButton extends Component<ButtonProps> {
  render() {
    const { disabled, children } = this.props;
    return (
      <button
        {...this.props}
        className={`btn btn-primary rounded-xl shadow-sm transition-colors ${
          disabled && "disabled"
        }`}
      >
        {children}
      </button>
    );
  }
}

export class SecondaryButton extends Component<ButtonProps> {
  render() {
    const { disabled, children } = this.props;
    return (
      <button
        {...this.props}
        className={`btn btn-secondary rounded-xl shadow-sm transition-colors ${
          disabled && "disabled"
        }`}
      >
        {children}
      </button>
    );
  }
}

export class LightButton extends Component<ButtonProps> {
  render() {
    const { disabled, children } = this.props;
    return (
      <button
        {...this.props}
        className={`btn btn-light rounded-xl shadow-sm transition-colors ${
          disabled && "disabled"
        }`}
      >
        {children}
      </button>
    );
  }
}

export class DarkButton extends Component<ButtonProps> {
  render() {
    const { disabled, children } = this.props;
    return (
      <button
        {...this.props}
        className={`btn btn-dark rounded-xl shadow-sm transition-colors ${
          disabled && "disabled"
        }`}
      >
        {children}
      </button>
    );
  }
}

export class PrimaryButtonIcon extends Component<ButtonIconProps> {
  render() {
    const { icon, align, disabled, children } = this.props;
    const _align = align || "left";
    return (
      <button
        {...this.props}
        className={`btn ${
          _align === "left" ? "flex-row" : "flex-row-reverse"
        } btn-primary rounded-xl shadow-sm transition-colors ${
          disabled && "disabled"
        }`}
      >
        <FontAwesomeIcon
          className={`w-6 h-6 ${_align === "left" ? "mr-2" : "ml-2"}`}
          icon={icon}
        />
        {children}
      </button>
    );
  }
}

export class LightButtonIcon extends Component<ButtonIconProps> {
  render() {
    const { icon, align, disabled, children } = this.props;
    const _align = align || "left";
    return (
      <button
        {...this.props}
        className={`btn ${
          _align === "left" ? "flex-row" : "flex-row-reverse"
        } btn-light rounded-xl shadow-sm transition-colors ${
          disabled && "disabled"
        }`}
      >
        <FontAwesomeIcon
          className={`w-6 h-6 ${_align === "left" ? "mr-2" : "ml-2"}`}
          icon={icon}
        />
        {children}
      </button>
    );
  }
}

export class PrimaryIconButton extends Component<IconButtonProps> {
  render() {
    const { icon, disabled } = this.props;
    return (
      <button
        {...this.props}
        className={`btn w-10 h-10 btn-primary rounded-xl shadow-sm transition-colors ${
          disabled && "disabled"
        }`}
      >
        <FontAwesomeIcon className="w-6 h-6" icon={icon} />
      </button>
    );
  }
}

export class LightIconButton extends Component<IconButtonProps> {
  render() {
    const { icon, disabled } = this.props;
    return (
      <button
        {...this.props}
        className={`btn w-10 h-10 btn-light rounded-xl shadow-sm transition-colors ${
          disabled && "disabled"
        }`}
      >
        <FontAwesomeIcon className="w-6 h-6" icon={icon} />
      </button>
    );
  }
}
