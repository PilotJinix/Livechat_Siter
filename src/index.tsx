// NODE_MODULES
import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
// LOCAL
import store from "__src/store";
import { theme } from "__src/store/app/actions";
import { loadFirstTheme } from "__src/theme";
import "__src/assets/css/style.css";
// COMPONENTS
import App from "__src/App";

/*
|---------------------------------------------------------------
| load theme from localStorage
|---------------------------------------------------------------
|
*/
store.dispatch(theme(loadFirstTheme()));

/*
|---------------------------------------------------------------
| Render App at #root HTMLDivElement
|---------------------------------------------------------------
|
*/
render(
  <StrictMode>
    {/*
    /// ReduxStore Provider
    */}
    <Provider store={store}>
      {/*
      /// BrowserRouter
      */}
      <Router>
        {/*
        /// App with Routes
        */}
        <App />
      </Router>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
