// NODE_MODULES
import { Component, lazy, Suspense } from "react";
import { connect, ConnectedProps } from "react-redux";
// STORE
import { RootState } from "__src/store";
import { connected, authenticateAsync } from "__src/store/app/actions";
import {
  loadNewsAsync,
  loadUserAsync,
  newMessage,
  newConversation,
  selectConversation,
  loadConversationAsync,
} from "__src/store/home/actions";
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
    const {
      connected,
      loadNewsAsync,
      loadUserAsync,
      authenticateAsync,
      home,
      newMessage,
      newConversation,
      selectConversation,
    } = this.props;

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
      if (data.id) this.props.selectConversation(data.id);
      newConversation({ ...data });
      main.emit(
        "conversation:join",
        {
          conversations: [data.id],
        },
        (res) => {
          if (res.ok) {
            console.log(`join to conversation rooms`, res.data);
          } else {
            console.log(res.err);
          }
        }
      );
    });
  };

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { app, home } = this.props;
    const { connected, hasJoin } = this.state;

    const dataConversation = home.conversations?.data;
    if (!hasJoin.conversation && dataConversation) {
      this.setState(
        (state) => ({ hasJoin: { ...state.hasJoin, conversation: true } }),
        () => {
          const ids = dataConversation.map((conv) => conv.id);
          main.emit(
            "conversation:join",
            {
              conversations: ids,
            },
            (res) => {
              if (res.ok) {
                console.log(`join to conversation rooms`, res.data);
              } else {
                this.setState((state) => ({ hasJoin: { ...state.hasJoin, conversation: false } }));
                console.log(res.err);
              }
            }
          );
        }
      );
    }

    if (prevProps.app.loggedIn !== app.loggedIn && app.loggedIn) {
      if (!hasJoin.user) {
        this.setState(
          (state) => ({ hasJoin: { ...state.hasJoin, user: true } }),
          () => {
            if (app.user) {
              main.emit("user:join", { user_id: app.user.id }, (res) => {
                if (res.ok) {
                  console.log(`join to user room ${res.data}`);
                } else {
                  this.setState((state) => ({ hasJoin: { ...state.hasJoin, user: false } }));
                  console.log(res.err);
                }
              });
            }
          }
        );
      }
      if (!home.conversations) this.props.loadConversationAsync();
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
    selectConversation,
    loadConversationAsync,
  }
);

type ConnectorProps = ConnectedProps<typeof connector>;

export default connector(App);
