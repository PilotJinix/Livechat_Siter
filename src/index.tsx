// NODE_MODULES
import { StrictMode } from "react";
import { render } from "react-dom";
import { HashRouter as Router } from "react-router-dom";

// LOCAL
import "./assets/css/style.css";

// COMPONENTS
import { App } from "./App";

render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById("root")
);
