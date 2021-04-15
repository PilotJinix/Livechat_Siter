// NODE_MODULES
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk, { ThunkMiddleware, ThunkAction } from "redux-thunk";
// LOCAL
import { AppActionTypes } from "./app/types";
import { appReducer } from "./app/reducers";
import { HomeActionTypes } from "./home/types";
import { homeReducer } from "./home/reducers";
// Devtools
import { loadReduxDevTools } from "__src/devtools";

/*
|---------------------------------------------------------------
| Root Reducer and Types
|---------------------------------------------------------------
|
*/

const rootReducer = combineReducers({
  app: appReducer,
  home: homeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type RootActionTypes = AppActionTypes | HomeActionTypes;

export type ThunkResult<R = void> = ThunkAction<R, RootState, unknown, RootActionTypes>;

/*
|---------------------------------------------------------------
| Store
|---------------------------------------------------------------
|
*/

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk as ThunkMiddleware<RootState, RootActionTypes>), loadReduxDevTools())
);

export default store;

// /*
// |---------------------------------------------------------------
// | HOC
// |---------------------------------------------------------------
// |
// */
// const withStoreConnector = connect(
//   (state: RootState) => ({
//     app: state.app,
//   }),
//   {
//     onRegisterAsync: registerAsync,
//     onLoginAsync: loginAsync,
//     onLogoutAsync: logoutAsync,
//     onThemeAsync: themeAsync,
//   }
// );

// export type WithStoreProps = ConnectedProps<typeof withStoreConnector>;

// export const withStore = <T extends WithStoreProps>(WrappedComponent: ComponentType<T>) => {
//   class HOC extends Component<WithStoreProps> {
//     render() {
//       const { ...props } = this.props;
//       return <WrappedComponent {...(props as T)} />;
//     }
//   }

//   return withStoreConnector(HOC);
// };
