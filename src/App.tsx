// NODE_MODULES
import { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// COMPONENTS
import { Welcome } from "./components/pages/welcome";
import { Login } from "./components/pages/login";
import { Register } from "./components/pages/register";

export const App: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};
