// NODE_MODULES
import { Component, MouseEventHandler } from "react";

type Props = {
  src?: string;
  alt?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

class Avatar extends Component<Props> {
  render() {
    return (
      <button className="block relative" onClick={this.props.onClick}>
        <img
          className="mx-auto object-cover rounded-full w-16 h-16"
          src={this.props.src}
          alt={this.props.alt}
        />
      </button>
    );
  }
}

export default Avatar;
