import { Component } from "react";
import { createPortal } from "react-dom";

const root = document.getElementById("modal-root") as HTMLElement;

class Modal extends Component {
  el: HTMLElement = document.createElement("div");

  componentDidMount() {
    root.appendChild(this.el);
  }

  componentWillUnmount() {
    root.removeChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Modal;
