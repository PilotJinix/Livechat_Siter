// NODE_MODULES
import { Component } from "react";

class ConversationList extends Component {
  render() {
    return <div className="w-96 h-full overflow-x-hidden overflow-y-auto themed-scrollbar">{this.props.children}</div>;
  }
}

export default ConversationList;
