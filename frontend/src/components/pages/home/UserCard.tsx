// NODE_MODULES
import { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane, faUser } from "@fortawesome/free-solid-svg-icons";
// Types
import { User } from "__src/store/home/types";
// STORE
import { RootState } from "__src/store";
import { selectConversation } from "__src/store/home/actions";
import { Conversation } from "__src/store/home/types";
// SOCKET
import { main } from "__src/socket";

type Props = {
  user: User;
  normalizedConversations?: Conversation[];
  history: () => void;
} & ConnectorProps;

type State = {
  newConversation: boolean;
};

class UserCard extends Component<Props, State> {
  state: State = {
    newConversation: false,
  };

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps.user.id !== this.props.user.id) {
      this.setState({ newConversation: false });
    }
  }

  render() {
    const { app, user: _user, normalizedConversations, history } = this.props;
    const { newConversation } = this.state;
    const { user } = app;
    return (
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex">
          <div className="w-9 h-9 rounded-full p-1 bg-gray-200">
            <FontAwesomeIcon className="w-full h-full" icon={faUser} />
          </div>
          <span className="ml-2">{_user.username}</span>
        </div>
        <div className="flex justify-end">
          <FontAwesomeIcon
            className="w-6 h-6"
            icon={faEnvelope}
            onClick={() => {
              if (normalizedConversations && _user.id !== user?.id) {
                const found = normalizedConversations.find((c) => {
                  const a = c.participants?.find((p) => p.user_id == user?.id);
                  const b = c.participants?.find((p) => p.user_id == _user.id);
                  return a && b ? true : false;
                });
                console.log(found);
                if (found) {
                  this.props.selectConversation(found.id);
                  history();
                } else {
                  this.setState({ newConversation: true });
                  console.log("should emit new conversation");
                }
              }
            }}
          />
        </div>
        <div>
          {newConversation && (
            <div className="w-full">
              <form
                onSubmit={(e) => {
                  type ConversationMessageForm = {
                    message: {
                      value: string;
                    };
                    reset: () => void;
                  };
                  e.preventDefault();
                  if (user) {
                    const data = (e.target as any) as ConversationMessageForm;
                    if (data.message.value && data.message.value !== "") {
                      main.emit(
                        "conversation:new",
                        {
                          user_id: user.id,
                          title: `${user.id}-${_user.id}`,
                          // write di be
                          participants: [user.id, _user.id],
                          message: data.message.value,
                        },
                        (res) => {
                          if (res.ok) {
                            data.reset();
                            console.log("emit conv conversation:new ok");
                            history();
                          }
                        }
                      );
                    }
                  }
                }}
              >
                <div className="flex p-2 justify-between">
                  <textarea name="message" className="flex-grow rounded-lg" rows={2}></textarea>
                  <button type="submit" className="w-16 p-2">
                    <FontAwesomeIcon className="w-6 h-6 text-primary" icon={faPaperPlane} />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const connector = connect(
  (state: RootState) => ({
    app: state.app,
  }),
  {
    selectConversation,
  }
);

type ConnectorProps = ConnectedProps<typeof connector>;

export default connector(UserCard);
