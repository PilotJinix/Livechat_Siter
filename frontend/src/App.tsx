// NODE_MODULES
import { Component, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
// STORE
import { RootState } from "__src/store";
import { connected, authenticateAsync } from "__src/store/app/actions";
import { loadNewsAsync, loadUserAsync } from "__src/store/home/actions";
// LOCAL
import { main } from "__src/socket";
// COMPONENTS
const Home = lazy(() => import("__src/components/pages/home"));
// const Welcome = lazy(() => import("__src/components/pages/welcome"));
// const Login = lazy(() => import("__src/components/pages/login"));
// const Register = lazy(() => import("__src/components/pages/register"));
// const Dashboard = lazy(() => import("__src/components/pages/dashboard"));

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

    setTimeout(() => {
      loadNewsAsync();
    }, 5000);

    loadUserAsync();
  };

  componentWillUnmount() {
    main.disconnect();
  }

  render() {
    if (typeof this.props.app.loggenIn === "undefined") {
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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <div>About Page</div>
          </Route>

          <Route path="/contact">
            <div>Contact Page</div>
          </Route>

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
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
