// NODE_MODULES
import { Component } from "react";
import { Link } from "react-router-dom";

class Form extends Component {
  render() {
    return (
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-neutral-800">
        <div className="px-6 py-4">
          <h2 className="text-3xl font-bold text-center text-neutral-700 dark:text-white">
            Livechat_Siter
          </h2>

          <h3 className="mt-1 text-xl font-medium text-center text-neutral-600 dark:text-neutral-200">
            Welcome Back
          </h3>

          <p className="mt-1 text-center text-neutral-500 dark:text-neutral-400">
            Login or create account
          </p>

          <form>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-neutral-700 placeholder-neutral-500 bg-white border border-neutral-300 rounded-md dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 focus:border-primary-500 dark:focus:border-primary-500 focus:outline-none focus:ring"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-neutral-700 placeholder-neutral-500 bg-white border border-neutral-300 rounded-md dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 focus:border-primary-500 dark:focus:border-primary-500 focus:outline-none focus:ring"
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <a className="text-sm text-neutral-600 dark:text-neutral-200 hover:text-neutral-500">
                Forget Password?
              </a>

              <button
                className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-neutral-700 rounded hover:bg-neutral-600 focus:outline-none"
                type="button"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-neutral-100 dark:bg-neutral-700">
          <span className="text-sm text-neutral-600 dark:text-neutral-200">
            Don't have an account?{" "}
          </span>
          <Link
            to="/register"
            className="mx-2 text-sm font-bold text-primary-600 dark:text-primary-400 hover:text-primary-500"
          >
            Register
          </Link>
        </div>
      </div>
    );
  }
}

class Login extends Component {
  render() {
    return (
      <div className="flex justify-center items-center h-screen bg-neutral-100">
        <Form />
      </div>
    );
  }
}

export default Login;
