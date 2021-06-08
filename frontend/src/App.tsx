// NODE_MODULES
import { Component, lazy, Suspense } from "react";
import { connect, ConnectedProps } from "react-redux";
// STORE
import { RootState } from "__src/store";
import { connected, authenticateAsync } from "__src/store/app/actions";
import { loadNewsAsync, loadUserAsync, newMessage, newConversation } from "__src/store/home/actions";
// LOCAL
import { main } from "__src/socket";
// COMPONENTS
const Home = lazy(() => import("__src/components/pages/home"));

type Props = {} & ConnectorProps;

type State = {
  connected: boolean;
  hasJoin: {
    user: boolean;
    conversation: boolean;
  };
};

class App extends Component<Props, State> {
  state: State = {
    connected: false,
    hasJoin: {
      user: false,
      conversation: false,
    },
  };

  componentDidMount = async () => {
    const { connected, loadNewsAsync, loadUserAsync, authenticateAsync, home, newMessage, newConversation } = this.props;

    const ok = await authenticateAsync();

    main.on("connect", () => {
      this.setState({ connected: true });
      // connected();
    });

    main.on("disconnect", () => {
      this.setState({
        connected: false,
        hasJoin: {
          user: false,
          conversation: false,
        },
      });
      // connected(false);
    });

    loadNewsAsync();
    loadUserAsync();

    main.on("message:new", (data) => {
      newMessage({ ...data });
    });

    main.on("conversation:new", (data) => {
      console.log(`on conversation:new`);
      console.log(data);
      newConversation({ ...data });
    });
  };

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { app, home } = this.props;
    const { connected, hasJoin } = this.state;

    console.log(this.state);

    const dataConversation = home.conversations?.data;
    if (prevState.connected !== connected || prevProps.app.loggedIn !== app.loggedIn || dataConversation) {
      if (!hasJoin.conversation && connected && dataConversation) {
        const ids = dataConversation.map((conv) => conv.id);
        main.emit(
          "conversation:join",
          {
            conversations: ids,
          },
          (res) => {
            if (res.ok) {
              this.setState((state) => ({ hasJoin: { ...state.hasJoin, conversation: true } }));
            } else {
              console.log(res.err);
            }
          }
        );
      }
      if (!hasJoin.user && app.loggedIn && connected && app.user?.id) {
        main.emit("user:join", { user_id: app.user.id }, (res) => {
          if (res.ok) {
            console.log(`user join to room ${res.data}`);
            this.setState((state) => ({ hasJoin: { ...state.hasJoin, user: true } }));
          } else {
            console.log(res.err);
          }
        });
      }
    }
  }

  componentWillUnmount() {
    main.disconnect();
  }

  render() {
    if (typeof this.props.app.loggedIn === "undefined") {
      return (
        <div className="flex items-center justify-center w-full h-screen bg-light dark:bg-dark">
          <div className="w-3.5 h-3.5 mx-1 rounded-full bg-primary animate-bounce-step-1"></div>
          <div className="w-3.5 h-3.5 mx-1 rounded-full bg-primary animate-bounce-step-2"></div>
          <div className="w-3.5 h-3.5 mx-1 rounded-full bg-primary animate-bounce-step-3"></div>
        </div>
      );
    }

    return (
      <Suspense fallback={null}>
        <Home />
      </Suspense>
    );
  }
}

const connector = connect(
  (state: RootState) => ({
    app: state.app,
    home: state.home,
  }),
  {
    connected,
    loadNewsAsync,
    loadUserAsync,
    authenticateAsync,
    newMessage,
    newConversation,
  }
);

type ConnectorProps = ConnectedProps<typeof connector>;

export default connector(App);
