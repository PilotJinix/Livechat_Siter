// NODE_MODULES
import { Fragment, Component, createRef } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import { Menu, Transition } from "@headlessui/react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faThLarge, faComment, faUsers, faCog, faChevronDown } from "@fortawesome/free-solid-svg-icons";
// STORE
import { RootState } from "__src/store";
import { loginAsync, registerAsync, logoutAsync } from "__src/store/app/actions";
import { loadNewsAsync, loadConversationAsync, selectConversation } from "__src/store/home/actions";
// SOCKET
// import { main } from "__src/socket";
// COMPONENTS
import ThemeTogglerButton from "__src/components/atoms/ThemeTogglerButton";
import Modal from "__src/components/advanceds/Portal";
import AuthCard from "./AuthCard";
import ModalOverlay from "./ModalOverlay";
import RegisterForm, { OnRegisterFormSubmit } from "./RegisterForm";
import LoginForm, { OnLoginFormSubmit } from "./LoginForm";

import NavLinkList from "./NavLinkList";
import NavLinkItem, { Nav } from "./NavLinkItem";

import NewsSkeleton from "./NewsSkeleton";
import NewsList from "./NewsList";
import NewsItem from "./NewsItem";

const navs: Nav[] = [
  {
    title: "Home",
    path: "/",
    icon: faThLarge,
    exact: true,
  },
  {
    title: "Conversations",
    path: "/conversations",
    icon: faComment,
    auth: true,
  },
  {
    title: "Users",
    path: "/users",
    icon: faUsers,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: faCog,
    auth: true,
  },
];

type Props = {} & ConnectorProps;

type State = {
  openNavbars: boolean;
  openLoginModal: boolean;
  openRegisterModal: boolean;
};

class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      openNavbars: false,
      openLoginModal: false,
      openRegisterModal: false,
    };
  }

  newListContainerRef = createRef<HTMLDivElement>();

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps.home.news?.data) {
      if (prevProps.home.news.data.length !== this.props.home.news?.data.length) {
        this.newListContainerRef.current?.scrollBy({
          top: 200,
          behavior: "smooth",
        });
      }
    }
  }

  // Navbars Handlers
  handleOpenNavbars = () => {
    this.setState({ openNavbars: true });
  };
  handleCloseNavbars = () => {
    this.setState({ openNavbars: false });
  };
  // Login Modal Handlers
  handleOpenLoginModal = () => {
    this.setState({ openLoginModal: true });
  };
  handleOpenRegisterModal = () => {
    this.setState({ openRegisterModal: true });
  };
  // Register Modal Handlers
  handleCloseLoginModal = () => {
    this.setState({ openLoginModal: false });
  };
  handleCloseRegisterModal = () => {
    this.setState({ openRegisterModal: false });
  };
  // Handle Switch Login or Register
  handleToggleSwitchAuthType = () => {
    this.setState((state) => ({ openLoginModal: !state.openLoginModal, openRegisterModal: !state.openRegisterModal }));
  };

  // Handle Register Form Submit
  handleOnRegisterFormSubmit: OnRegisterFormSubmit = async (values, actions) => {
    const ok = await this.props.registerAsync(values);
    if (ok) this.handleCloseRegisterModal();
    actions.setSubmitting(false);
  };
  // Handle Login Form Submit
  handleOnLoginFormSubmit: OnLoginFormSubmit = async (values, actions) => {
    const ok = await this.props.loginAsync(values);
    if (ok) this.handleCloseLoginModal();
    actions.setSubmitting(false);
  };
  // Hand;e Logout Form Submit
  handleOnLogoutFormSubmit = async () => {
    const ok = await this.props.logoutAsync();
    // if ok then reset conversations data
    // if (ok) window.location.reload();
  };

  render() {
    const { openNavbars, openLoginModal, openRegisterModal } = this.state;
    const {
      app: { user, loggedIn },
      home: { news, users, conversations },
    } = this.props;
    return (
      <>
        <div className="relative w-full h-screen m-auto overflow-hidden bg-gray-200 max-w-screen-2xl dark:bg-dark">
          <div className="flex items-start justify-between h-full">
            {/*
          /// Aside
          */}
            <aside className="flex-grow-0 flex-shrink-0 hidden w-20 h-full py-3 pl-3 lg:w-52 md:block themed-scrollbar">
              <div className="flex flex-col items-center w-full h-full rounded-lg shadow-sm bg-light dark:bg-gray-700">
                <div className="w-full h-20"></div>
                <div className="flex-grow w-full h-auto my-3">
                  <NavLinkList>
                    {navs.map((nav) => {
                      if (nav.auth && !loggedIn) {
                        return null;
                      }
                      return <NavLinkItem key={nav.path} nav={nav} />;
                    })}
                  </NavLinkList>
                </div>
                <div className="w-full h-20">
                  <div className="flex items-center justify-center w-full h-full">
                    <ThemeTogglerButton />
                  </div>
                </div>
              </div>
            </aside>
            {/*
          /// Main
          */}
            <main className="flex-grow block h-full py-3 pl-3 pr-3 md:pl-6 themed-scrollbar">
              <div className="flex flex-col items-center justify-start w-full h-full">
                {/* Header */}
                <div className="w-full h-14">
                  <div className="w-full h-full rounded-lg shadow-sm bg-light dark:bg-gray-700">
                    <div className="flex items-center justify-between h-full px-4">
                      <div className="">Search</div>
                      <div className="flex items-center">
                        {loggedIn ? (
                          <>
                            <Menu as="div" className="relative inline-block text-left">
                              {({ open }) => (
                                <>
                                  <div>
                                    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                      {user && user.username}
                                      <FontAwesomeIcon
                                        className="-mr-1 ml-2 h-5 w-5 text-gray-300"
                                        aria-hidden="true"
                                        icon={faChevronDown}
                                      />
                                    </Menu.Button>
                                  </div>

                                  <Transition
                                    show={open}
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                  >
                                    <Menu.Items
                                      static
                                      className="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                                    >
                                      <div className="py-1">
                                        <Menu.Item>
                                          {({ active }) => (
                                            <Link
                                              to="/settings/account"
                                              className={`${
                                                active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                                              } block px-4 py-2 text-sm`}
                                            >
                                              Account settings
                                            </Link>
                                          )}
                                        </Menu.Item>
                                        <Menu.Item>
                                          {({ active }) => (
                                            <button
                                              onClick={this.handleOnLogoutFormSubmit}
                                              className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"}
                        block w-full text-left px-4 py-2 text-sm`}
                                            >
                                              Logout
                                            </button>
                                          )}
                                        </Menu.Item>
                                      </div>
                                    </Menu.Items>
                                  </Transition>
                                </>
                              )}
                            </Menu>
                          </>
                        ) : (
                          <>
                            <button
                              className="hidden px-4 py-2 mx-1 font-medium tracking-wide transition-colors rounded-lg sm:block text-light bg-primary hover:bg-primary-400 dark:bg-gray-800 dark:hover:bg-gray-600"
                              onClick={this.handleOpenLoginModal}
                            >
                              Login
                            </button>
                            <button
                              className="hidden px-4 py-2 mx-1 font-medium tracking-wide transition-colors rounded-lg sm:block text-light bg-primary hover:bg-primary-400 dark:bg-gray-800 dark:hover:bg-gray-600"
                              onClick={this.handleOpenRegisterModal}
                            >
                              Register
                            </button>
                          </>
                        )}
                        <button className="flex items-center justify-center ml-4 sm:hidden">
                          <FontAwesomeIcon className="w-6 h-6 text-gray-400 dark:text-gray-500" icon={faBars} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Main */}
                <div className="w-full h-full pt-3 overflow-hidden md:pt-5">
                  <AnimateSharedLayout type="crossfade">
                    <Switch>
                      <Route
                        exact
                        path={["/news/:slug", "/"]}
                        render={({ history, match }) => {
                          const { slug } = match.params as any;
                          const selectedNews = news && news.data.find((n) => n.slug === slug);
                          return (
                            <div className="w-full h-full relative">
                              <div
                                ref={this.newListContainerRef}
                                className="w-full h-full overflow-x-hidden overflow-y-auto themed-scrollbar"
                              >
                                {news ? (
                                  <NewsList>
                                    {news.data.map((_news) => (
                                      <NewsItem key={_news.id} news={_news} />
                                    ))}
                                    {this.props.home.news?.meta.next_page_url && (
                                      <div className="flex justify-center items-center">
                                        <button
                                          className="bg-primary px-4 py-2 rounded-md"
                                          onClick={() => {
                                            this.props.loadNewsAsync();
                                          }}
                                        >
                                          Load More
                                        </button>
                                      </div>
                                    )}
                                  </NewsList>
                                ) : (
                                  <>
                                    <NewsSkeleton />
                                    <NewsSkeleton />
                                    <NewsSkeleton />
                                  </>
                                )}
                              </div>
                              <AnimatePresence>
                                {slug && (
                                  <motion.div
                                    key="item"
                                    initial={{
                                      opacity: 0,
                                    }}
                                    animate={{
                                      opacity: 1,
                                      transition: {
                                        duration: 0.1,
                                      },
                                    }}
                                    exit={{
                                      opacity: 0,
                                    }}
                                    className="absolute p-10 top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50"
                                  >
                                    {selectedNews ? (
                                      <motion.div
                                        initial={{
                                          opacity: 0,
                                        }}
                                        animate={{
                                          opacity: 1,
                                          transition: {
                                            delay: 0.1,
                                            duration: 0.1,
                                          },
                                        }}
                                        exit={{
                                          opacity: 0,
                                        }}
                                        className="relative w-full h-56 p-6 m-2 rounded-lg shadow-lg sm:h-auto bg-light sm:m-0 dark:bg-dark"
                                      >
                                        <button
                                          className="absolute top-3 right-3"
                                          onClick={() => {
                                            history.goBack();
                                          }}
                                        >
                                          <FontAwesomeIcon
                                            className="w-5 h-5 text-dark hover:text-gray-700 dark:text-light dark:hover:text-gray-200"
                                            icon={faTimes}
                                          />
                                        </button>
                                        <h1 className="mt-2 text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
                                          {selectedNews.title}
                                        </h1>
                                        <div className="text-3xl">Text</div>
                                        <div className="text-xl">{selectedNews.content}</div>
                                      </motion.div>
                                    ) : (
                                      <div>Loading With Slug Spinner</div>
                                    )}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        }}
                      ></Route>

                      <Route path="/users">
                        <div className="w-full h-full relative">
                          <div className="w-72 h-full overflow-x-hidden overflow-y-auto themed-scrollbar">
                            {users ? (
                              <div>
                                {users.data.map((user) => {
                                  return (
                                    <div key={user.id} className="px-6 py-2 my-2 rounded-md bg-light">
                                      {user.username}
                                    </div>
                                  );
                                })}
                              </div>
                            ) : (
                              <div>Loading User Data</div>
                            )}
                          </div>
                        </div>
                      </Route>

                      <Route
                        path="/conversations"
                        render={() => {
                          if (!conversations) this.props.loadConversationAsync();

                          const selectedConversation = conversations?.data.find((conv) => {
                            return conv.id == conversations.selectedId;
                          });

                          return loggedIn ? (
                            <div className="flex w-full h-full relative">
                              <div className="w-72 h-full overflow-x-hidden overflow-y-auto themed-scrollbar">
                                {conversations ? (
                                  <div>
                                    {conversations.data.map((conversation) => {
                                      return (
                                        <div
                                          key={conversation.id}
                                          className="px-6 py-2 my-2 rounded-md bg-light"
                                          onClick={() => {
                                            this.props.selectConversation(conversation.id);
                                          }}
                                        >
                                          {conversation.title}
                                        </div>
                                      );
                                    })}
                                  </div>
                                ) : (
                                  <div>Loading Conversation Data</div>
                                )}
                              </div>
                              <div className="flex-grow w-full h-full ml-2">
                                {selectedConversation ? (
                                  <div className="p-2 bg-light w-full h-full rounded-lg">
                                    <div className="border-b-2 border-primary px-2 py-4">{selectedConversation.title}</div>
                                    <div>
                                      {selectedConversation.messages?.map((message) => {
                                        const isMe = message.sender_id == user?.id;
                                        console.log(`message.senderId == user?.id`);
                                        console.log(`${message.sender_id} == ${user?.id}`);

                                        return (
                                          <div
                                            key={message.id}
                                            className={`flex ${isMe ? "justify-end" : "justify-start"} my-2`}
                                          >
                                            <div className="px-3.5 py-1.5 bg-primary inline-block text-light">
                                              {message.message}
                                            </div>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                ) : (
                                  <div>Start Chat with other</div>
                                )}
                              </div>
                            </div>
                          ) : (
                            <Redirect to="/" />
                          );
                        }}
                      />

                      <Route
                        path="/settings"
                        render={() => {
                          return loggedIn ? (
                            <div className="w-full h-full relative">
                              <h1>Settings</h1>
                            </div>
                          ) : (
                            <Redirect to="/" />
                          );
                        }}
                      />

                      <Route path="*">
                        <Redirect to="/" />
                      </Route>
                    </Switch>
                  </AnimateSharedLayout>
                </div>
              </div>
            </main>
          </div>
        </div>
        {/* MODAL */}
        <AnimatePresence>
          {openLoginModal && (
            <Modal>
              <ModalOverlay key="login-modal" onOverlayClick={this.handleCloseLoginModal}>
                <AuthCard>
                  <h1 className="mt-2 text-2xl font-bold text-center text-gray-800 dark:text-gray-100">Login</h1>
                  <button className="absolute top-3 right-3" onClick={this.handleCloseLoginModal}>
                    <FontAwesomeIcon
                      className="w-5 h-5 text-dark hover:text-gray-700 dark:text-light dark:hover:text-gray-200"
                      icon={faTimes}
                    />
                  </button>
                  <div className="mt-6">
                    <LoginForm onSubmit={this.handleOnLoginFormSubmit} />
                  </div>
                  <p className="mt-8 text-sm font-light text-center text-gray-400">
                    Don't have an account ?{" "}
                    <button
                      className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
                      onClick={this.handleToggleSwitchAuthType}
                    >
                      Create One
                    </button>
                  </p>
                </AuthCard>
              </ModalOverlay>
            </Modal>
          )}
          {openRegisterModal && (
            <Modal>
              <ModalOverlay key="register-modal" onOverlayClick={this.handleCloseRegisterModal}>
                <AuthCard>
                  <h1 className="mt-2 text-2xl font-bold text-center text-gray-800 dark:text-gray-100">Register</h1>
                  <button className="absolute top-3 right-3" onClick={this.handleCloseRegisterModal}>
                    <FontAwesomeIcon
                      className="w-5 h-5 text-dark hover:text-gray-700 dark:text-light dark:hover:text-gray-200"
                      icon={faTimes}
                    />
                  </button>
                  <div className="mt-6">
                    <RegisterForm onSubmit={this.handleOnRegisterFormSubmit} />
                  </div>
                  <p className="mt-8 text-sm font-light text-center text-gray-400">
                    Already have an account ?{" "}
                    <button
                      className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
                      onClick={this.handleToggleSwitchAuthType}
                    >
                      Login Now
                    </button>
                  </p>
                </AuthCard>
              </ModalOverlay>
            </Modal>
          )}
        </AnimatePresence>
      </>
    );
  }
}

const connector = connect(
  (state: RootState) => ({
    app: state.app,
    home: state.home,
  }),
  {
    loginAsync,
    registerAsync,
    logoutAsync,
    loadNewsAsync,
    loadConversationAsync,
    selectConversation,
  }
);

type ConnectorProps = ConnectedProps<typeof connector>;

export default connector(Home);
