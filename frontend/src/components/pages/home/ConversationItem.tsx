// NODE_MODULES
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// Types
import { Conversation } from "__src/store/home/types";

interface Props {
  conversation: Conversation;
  active?: boolean;
  onClick: () => void;
}

class ConversationItem extends Component<Props> {
  render() {
    const { conversation, active, onClick } = this.props;
    const newestMessage = conversation.messages ? conversation.messages[conversation.messages.length - 1].message : "";
    return (
      <div
        className={`flex w-full items-center px-6 py-2 my-2.5 rounded-md ${
          active ? "bg-primary dark:bg-gray-300 text-light dark:text-gray-800" : "bg-light dark:bg-gray-600 dark:text-gray-400"
        }`}
        onClick={onClick}
      >
        <FontAwesomeIcon className="w-9 h-9 p-1.5 bg-gray-100 text-dark rounded-full" icon={faUser} />
        <div className="ml-3 flex-grow w-1/2">
          <div>{conversation.title}</div>
          <div className="text-sm truncate px-1">{newestMessage}</div>
        </div>
      </div>
    );
  }
}

export default ConversationItem;
