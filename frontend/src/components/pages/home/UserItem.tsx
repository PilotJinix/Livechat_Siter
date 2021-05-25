// NODE_MODULES
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// Types
import { User } from "__src/store/home/types";

interface Props {
  user: User;
  active?: boolean;
  onClick: () => void;
}

class UserItem extends Component<Props> {
  render() {
    const { user, active, onClick } = this.props;
    return (
      <div
        className={`flex items-center px-6 py-2 my-2.5 rounded-md ${
          active ? "bg-primary dark:bg-gray-300 text-light dark:text-gray-800" : "bg-light dark:bg-gray-600 dark:text-gray-400"
        }`}
        onClick={onClick}
      >
        <FontAwesomeIcon className="w-9 h-9 p-1.5 bg-gray-100 text-dark rounded-full" icon={faUser} />
        <div className="ml-3">{user.username}</div>
      </div>
    );
  }
}

export default UserItem;
