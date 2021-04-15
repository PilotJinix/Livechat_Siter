// NODE_MODULES
import { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faComment, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
// STORE
import { RootState } from "__src/store";
import { login, register } from "__src/store/app/actions";
import { loadNewsAsync, newNewsAsync } from "__src/store/home/actions";
// SOCKET
import { main } from "__src/socket";
// COMPONENTS
import ThemeTogglerButton from "__src/components/atoms/ThemeTogglerButton";
import Modal from "__src/components/advanceds/Portal";

interface LoginFormProps {
  username: string;
  password: string;
}

const initialLoginFormValues: LoginFormProps = {
  username: "",
  password: "",
};

const loginSchema = yup.object().shape({
  username: yup.string().min(2, "Too Short!").max(64, "Too long!").required("Required"),
  password: yup.string().min(8, "Too Short!").max(16, "Too long!").required("Required"),
});

interface RegisterFormProps {
  username: string;
  password: string;
  retypePassword: string;
}

const initialRegisterFormValues: RegisterFormProps = {
  username: "",
  password: "",
  retypePassword: "",
};

const registerSchema = yup.object().shape({
  username: yup.string().min(2, "Too Short!").max(64, "Too long!").required("Required"),
  password: yup.string().min(8, "Too Short!").max(16, "Too long!").required("Required"),
  retypePassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password don't match!")
    .required("Required"),
});

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

  handleOpenNavbars = () => {
    this.setState((state) => ({ openNavbars: !state.openNavbars }));
  };

  handleLoginForm: (values: LoginFormProps, actions: FormikHelpers<LoginFormProps>) => void | Promise<any> = (
    values,
    actions
  ) => {
    if (this.props.app.connected) {
      main.emit(
        "user:login",
        {
          username: values.username,
          password: values.password,
        },
        (res) => {
          if (res.ok) {
            // Redux Action
            this.props.login({
              username: values.username,
              token: res.data?.token,
            });
            this.handleCloseLoginModal();
          } else {
            alert(res.msg);
          }
        }
      );
    } else {
      alert("not connected to the server");
    }
    actions.setSubmitting(false);
  };

  handleNewNews = () => {
    this.props.newNewsAsync();
  };

  handleLoadNews = () => {
    this.props.loadNewsAsync();
  };

  handleOpenLoginModal = () => {
    this.setState({ openLoginModal: true });
  };

  handleCloseLoginModal = () => {
    this.setState({ openLoginModal: false });
  };

  handleOpenRegisterModal = () => {
    this.setState({ openRegisterModal: true });
  };

  handleCloseRegisterModal = () => {
    this.setState({ openRegisterModal: false });
  };

  handleSwitchLogin = () => {
    this.setState({ openLoginModal: true, openRegisterModal: false });
  };

  handleSwitchRegister = () => {
    this.setState({ openLoginModal: false, openRegisterModal: true });
  };

  render() {
    const { openNavbars, openLoginModal, openRegisterModal } = this.state;
    const {
      app: { loggenIn },
      home: { news },
    } = this.props;
    return (
      <>
        <div className="relative w-full h-screen overflow-hidden bg-gray-200 max-w-screen-2xl dark:bg-dark">
          <div className="flex items-start justify-between h-full">
            {/*
          /// Aside
          */}
            <aside className="flex-grow-0 flex-shrink-0 hidden w-20 h-full py-4 pl-4 md:w-52 md:block themed-scrollbar">
              <div className="w-full h-full rounded-lg shadow-sm bg-light dark:bg-gray-700">
                <ThemeTogglerButton />
                <button onClick={this.handleNewNews}>New</button>
                <button onClick={this.handleLoadNews}>Load</button>
              </div>
            </aside>
            {/*
          /// Main
          */}
            <main className="flex-grow block h-full py-4 pl-4 pr-4 md:pl-6 themed-scrollbar">
              <div className="flex flex-col items-center justify-start w-full h-full">
                <div className="w-full h-14">
                  <div className="w-full h-full rounded-lg shadow-sm bg-light dark:bg-gray-700">
                    <div className="flex items-center justify-between h-full px-4">
                      <div className="bg-primary-500">Search ? </div>
                      <div className="flex items-center">
                        {loggenIn ? (
                          <>
                            <button>Profile</button>
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
                        <button className="flex items-center justify-center ml-4 md:hidden">
                          <FontAwesomeIcon className="w-6 h-6" icon={faBars} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full pt-6 overflow-hidden">
                  <div className="flex flex-row w-full h-full">
                    <div className="flex-grow h-full pr-3 overflow-x-hidden overflow-y-auto themed-scrollbar">
                      <AnimatePresence initial={false}>
                        {news ? (
                          news.map((v, i, { length }) => {
                            return (
                              <motion.div
                                layout
                                initial={{ scale: 0.9, opacity: 0.3 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0.3 }}
                                key={v.id}
                                className={`w-full h-40 sm:h-48 ${
                                  length == i + 1 ? "" : "mb-4"
                                } rounded-lg shadow-sm p-0 sm:p-2 lg:p-4 bg-light dark:bg-gray-700 hover:shadow-md transition-shadow`}
                              >
                                <div className="flex w-full h-full text-dark dark:text-light">
                                  <div className="flex-grow-0 flex-shrink-0 h-full mr-3 overflow-hidden rounded-l-lg sm:rounded-lg w-36 bg-light">
                                    <img className="object-cover w-full h-full shadow-sm" src="/favicon.ico" alt="" />
                                  </div>
                                  <div className="flex flex-col flex-grow py-2 pr-3 lg:py-0 sm:pr-1">
                                    <div className="flex">
                                      <div className="pt-1 pr-3">
                                        <div className="w-10 h-10 rounded-full shadow-sm">
                                          <img className="object-cover w-full h-full" src="/favicon.ico" alt="" />
                                        </div>
                                      </div>
                                      <div className="flex-grow">
                                        <h5 className="font-bold">{v.title}</h5>
                                        <p className="text-sm tracking-wide">{dayjs(v.createdAt).format("HH:mm:ss")}</p>
                                      </div>
                                    </div>
                                    <div className="flex-grow my-2 ml-1 overflow-hidden">
                                      <p className="leading-5 text-gray-600 break-words whitespace-pre-line dark:text-gray-300">
                                        {v.content}
                                      </p>
                                    </div>
                                    <div className="flex">
                                      <div className="flex items-center justify-between h-10 ml-2 text-gray-400 dark:text-gray-500">
                                        <span className="mr-1 text-xl">{v.comments?.length || 0}</span>
                                        <FontAwesomeIcon className="w-6 h-6" icon={faComment} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })
                        ) : (
                          <div className="flex items-center justify-center w-full">
                            <FontAwesomeIcon
                              className="w-6 h-6 text-gray-400 animate-spin dark:text-gray-500"
                              icon={faSpinner}
                            />
                          </div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 hidden w-20 h-full pl-3 md:block lg:w-44">
                      <div className="w-full h-full rounded-lg shadow-sm bg-light dark:bg-gray-700">Users</div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        {/* MODAL */}
        <AnimatePresence>
          {openLoginModal && (
            <Modal>
              <motion.div
                layout
                key="login-modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0.2 } }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-gray-700 bg-opacity-60 dark:bg-opacity-80"
                onClick={(e) => {
                  e.target == e.currentTarget && this.handleCloseLoginModal();
                }}
              >
                <motion.div
                  layout
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1, transition: { delay: 0.2 } }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="relative w-full p-6 m-2 rounded-lg shadow-lg sm:h-auto bg-light sm:m-0 sm:w-96 dark:bg-dark"
                >
                  <h1 className="mt-2 text-2xl font-bold text-center text-gray-800 dark:text-gray-100">Login</h1>
                  <button className="absolute top-3 right-3" onClick={this.handleCloseLoginModal}>
                    <FontAwesomeIcon
                      className="w-5 h-5 text-dark hover:text-gray-700 dark:text-light dark:hover:text-gray-200"
                      icon={faTimes}
                    />
                  </button>
                  <div className="mt-6">
                    <Formik
                      initialValues={initialLoginFormValues}
                      validationSchema={loginSchema}
                      onSubmit={this.handleLoginForm}
                    >
                      {({ errors, touched }) => (
                        <Form>
                          <div>
                            <label htmlFor="username" className="block text-base text-gray-800 dark:text-gray-100">
                              Username
                            </label>
                            <Field
                              type="text"
                              id="username"
                              name="username"
                              className="block w-full mt-2 border border-gray-300 rounded-lg dark:border-gray-600 text-dark dark:text-light bg-light dark:bg-dark"
                            />
                            {errors.username && touched.username && (
                              <div className="mt-1 text-sm font-normal text-dark dark:text-light">{errors.username}</div>
                            )}
                          </div>

                          <div className="mt-4">
                            <div className="flex items-center justify-between">
                              <label htmlFor="password" className="block text-base text-gray-800 dark:text-gray-100">
                                Password
                              </label>
                              <a href="#" className="text-xs text-gray-600 dark:text-gray-300 hover:underline">
                                Forget Password ?
                              </a>
                            </div>
                            <Field
                              type="text"
                              id="password"
                              name="password"
                              className="block w-full mt-2 border border-gray-300 rounded-lg dark:border-gray-600 text-dark dark:text-light bg-light dark:bg-dark"
                            />
                            {errors.password && touched.password && (
                              <div className="mt-1 text-sm font-normal text-dark dark:text-light">{errors.password}</div>
                            )}
                          </div>

                          <div className="mt-6">
                            <button
                              type="submit"
                              className="w-full px-4 py-2 tracking-wide transition-colors duration-200 rounded-lg bg-primary-500 text-light hover:bg-primary-400"
                            >
                              Login
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                  <p className="mt-8 text-sm font-light text-center text-gray-400">
                    Don't have an account ?{" "}
                    <button
                      className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
                      onClick={this.handleSwitchRegister}
                    >
                      Create One
                    </button>
                  </p>
                </motion.div>
              </motion.div>
            </Modal>
          )}
          {openRegisterModal && (
            <Modal>
              <motion.div
                layout
                key="register-modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0.2 } }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-gray-700 bg-opacity-60 dark:bg-opacity-80"
                onClick={(e) => {
                  e.target == e.currentTarget && this.handleCloseRegisterModal();
                }}
              >
                <motion.div
                  layout
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1, transition: { delay: 0.2 } }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="relative w-full p-6 m-2 rounded-lg shadow-lg sm:h-auto bg-light sm:m-0 sm:w-96 dark:bg-dark"
                >
                  <h1 className="mt-2 text-2xl font-bold text-center text-gray-800 dark:text-gray-100">Register</h1>
                  <button className="absolute top-3 right-3" onClick={this.handleCloseRegisterModal}>
                    <FontAwesomeIcon
                      className="w-5 h-5 text-dark hover:text-gray-700 dark:text-light dark:hover:text-gray-200"
                      icon={faTimes}
                    />
                  </button>
                  <div className="mt-6">
                    <Formik
                      initialValues={initialRegisterFormValues}
                      validationSchema={registerSchema}
                      onSubmit={(values, actions) => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                      }}
                    >
                      {({ errors, touched }) => (
                        <Form>
                          <div>
                            <label htmlFor="username" className="block text-base text-gray-800 dark:text-gray-100">
                              Username
                            </label>
                            <Field
                              type="text"
                              id="username"
                              name="username"
                              className="block w-full mt-2 border border-gray-300 rounded-lg dark:border-gray-600 text-dark dark:text-light bg-light dark:bg-dark"
                            />
                            {errors.username && touched.username && (
                              <div className="mt-1 text-sm font-normal text-dark dark:text-light">{errors.username}</div>
                            )}
                          </div>

                          <div className="mt-4">
                            <label htmlFor="password" className="block text-base text-gray-800 dark:text-gray-100">
                              Password
                            </label>
                            <Field
                              type="text"
                              id="password"
                              name="password"
                              className="block w-full mt-2 border border-gray-300 rounded-lg dark:border-gray-600 text-dark dark:text-light bg-light dark:bg-dark"
                            />
                            {errors.password && touched.password && (
                              <div className="mt-1 text-sm font-normal text-dark dark:text-light">{errors.password}</div>
                            )}
                          </div>

                          <div className="mt-4">
                            <label htmlFor="retypePassword" className="block text-base text-gray-800 dark:text-gray-100">
                              Retype Password
                            </label>
                            <Field
                              type="text"
                              id="retypePassword"
                              name="retypePassword"
                              className="block w-full mt-2 border border-gray-300 rounded-lg dark:border-gray-600 text-dark dark:text-light bg-light dark:bg-dark"
                            />
                            {errors.retypePassword && touched.retypePassword && (
                              <div className="mt-1 text-sm font-normal text-dark dark:text-light">{errors.retypePassword}</div>
                            )}
                          </div>

                          <div className="mt-6">
                            <button
                              type="submit"
                              className="w-full px-4 py-2 tracking-wide transition-colors duration-200 rounded-lg bg-primary-500 text-light hover:bg-primary-400"
                            >
                              Register
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                  <p className="mt-8 text-sm font-light text-center text-gray-400">
                    Already have an account ?{" "}
                    <button
                      className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
                      onClick={this.handleSwitchLogin}
                    >
                      Login Now
                    </button>
                  </p>
                </motion.div>
              </motion.div>
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
    login,
    register,
    newNewsAsync,
    loadNewsAsync,
  }
);

type ConnectorProps = ConnectedProps<typeof connector>;

export default connector(Home);

// const Index = () => (
// <div className="flex items-center justify-center px-4 py-8">
//   <div className="p-6 bg-white rounded shadow-lg md:w-80 dark:bg-gray-800">
//     <h1 className="text-lg font-bold text-gray-800 dark:text-gray-100">Permission required</h1>
//     <p className="py-4 text-base font-medium text-gray-800 dark:text-gray-100">Oops! you dont have access!</p>
//     <p className="text-sm font-medium text-gray-600 dark:text-gray-100">Request access for the file</p>
//     <div className="items-center justify-between pt-6 sm:flex">
//       <button className="py-3.5 w-full  dark:text-gray-100 text-gray-600 leading-3 focus:outline-none hover:opacity-90 text-sm font-semibold border-gray-600 rounded  border">
//         Dismiss
//       </button>
//       <button className="py-3.5 w-full sm:mt-0 mt-2 sm:ml-2 leading-3 text-white focus:outline-none hover:opacity-90 text-sm font-semibold border rounded border-indigo-700 bg-indigo-700">
//         Request Access
//       </button>
//     </div>
//   </div>
// </div>
// );
