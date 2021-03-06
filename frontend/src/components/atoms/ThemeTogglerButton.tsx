// NODE_MODULES
import { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
// STORE
import { RootState } from "__src/store";
import { themeAsync } from "__src/store/app/actions";
// LOCAL
import {} from "__src/store";

type Props = {} & ConnectorProps;

type State = {};

class ThemeTogglerButton extends Component<Props, State> {
  handleToggle = () => {
    this.props.themeAsync();
  };

  render() {
    return (
      <button
        className="px-3 py-1 bg-gray-100 text-gray-600 dark:text-gray-300 rounded-lg dark:bg-gray-800"
        onClick={this.handleToggle}
      >
        <FontAwesomeIcon icon={this.props.app.theme == "dark" ? faMoon : faSun} />
      </button>
    );
  }
}

const connector = connect(
  (state: RootState) => ({
    app: state.app,
  }),
  {
    themeAsync,
  }
);

export type ConnectorProps = ConnectedProps<typeof connector>;

export default connector(ThemeTogglerButton);
