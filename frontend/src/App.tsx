// NODE_MODULES
import { Component, lazy, Suspense } from "react";
import { connect, ConnectedProps } from "react-redux";
// STORE
import { RootState } from "__src/store";
import { connected, authenticateAsync } from "__src/store/app/actions";
import { loadNewsAsync, loadUserAsync } from "__src/store/home/actions";
// LOCAL
import { main } from "__src/socket";
// COMPONENTS
const Home = lazy(() => import("__src/components/pages/home"));

type Props = {} & ConnectorProps;

type State = {};

class App extends Component<Props, State> {
  componentDidMount = async () => {
    const { connected, loadNewsAsync, loadUserAsync, authenticateAsync } = this.props;

    const ok = await authenticateAsync();

    main.on("connect", () => {
      console.log("main namespace connected successfully");
      connected();
    });

    main.on("disconnect", () => {
      connected(false);
    });

    loadNewsAsync();
    loadUserAsync();
  };

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
  }
);

type ConnectorProps = ConnectedProps<typeof connector>;

export default connector(App);
