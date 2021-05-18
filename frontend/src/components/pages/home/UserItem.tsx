// NODE_MODULES
import { Component } from "react";
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
      <div className={`px-6 py-3 my-2 rounded-md ${active ? "bg-primary-300 scale-105" : "bg-light"}`} onClick={onClick}>
        {user.username}
      </div>
    );
  }
}

export default UserItem;
