// NODE_MODULES
import { StrictMode, lazy, Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import localizedFormat from "dayjs/plugin/localizedFormat";
// LOCAL
import store from "__src/store";
import { theme, auth } from "__src/store/app/actions";
import { loadFirstTheme } from "__src/theme";
import { loadFirstAuth } from "__src/auth";
import "__src/assets/css/style.css";
// COMPONENTS
const App = lazy(() => import("__src/App"));
// const App = lazy(() => import("__src/components/examples"));

// dayjs plugin
dayjs.locale("id");
dayjs.extend(localizedFormat);
dayjs.extend(updateLocale);
dayjs.extend(relativeTime);

/*
|---------------------------------------------------------------
| dispatch first from localStorage
|---------------------------------------------------------------
|
*/
store.dispatch(theme(loadFirstTheme()));
store.dispatch(auth(loadFirstAuth()));

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
        <Suspense fallback={null}>
          <App />
        </Suspense>
      </Router>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
