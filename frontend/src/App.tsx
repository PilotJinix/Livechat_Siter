// NODE_MODULES
import { Component, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
// STORE
import { RootState } from "__src/store";
import { connected } from "__src/store/app/actions";
import { newNews } from "__src/store/home/actions";
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
  componentDidMount() {
    main.on("connect", () => {
      console.log("main namespace connected successfully");
      this.props.connected(true);

      setTimeout(() => {
        this.props.newNews();
        this.props.newNews();
        this.props.newNews();
        this.props.newNews();
      }, 3000);
    });

    main.on("disconnect", () => {
      this.props.connected(false);
    });
  }

  componentWillUnmount() {
    main.disconnect();
  }

  render() {
    return (
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <div>Login Page</div>
          </Route>

          <Route path="/register">
            <div>Register Page</div>
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
  }),
  {
    connected,
    newNews,
  }
);

type ConnectorProps = ConnectedProps<typeof connector>;

export default connector(App);
