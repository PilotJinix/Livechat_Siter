// NODE_MODULES
import { Component } from "react";
// Types
import { User } from "__src/store/home/types";

interface Props {
  user: User;
}

class UserCard extends Component<Props> {
  render() {
    const { user } = this.props;
    return <div>User Card {user.username}</div>;
  }
}

export default UserCard;
