// NODE_MODULES
import { Component } from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as yup from "yup";

export interface LoginFormValues {
  username: string;
  password: string;
}

const loginSchema = yup.object().shape({
  username: yup.string().min(2, "Too Short!").max(64, "Too long!").required("Required"),
  password: yup.string().min(8, "Too Short!").max(16, "Too long!").required("Required"),
});

export type OnLoginFormSubmit = (values: LoginFormValues, formikHelpers: FormikHelpers<LoginFormValues>) => void;

interface Props {
  onSubmit: OnLoginFormSubmit;
}

interface State {}

class LoginForm extends Component<Props, State> {
  initialValues: LoginFormValues = {
    username: "",
    password: "",
  };

  render() {
    return (
      <Formik initialValues={this.initialValues} validationSchema={loginSchema} onSubmit={this.props.onSubmit}>
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
                <a href="#" tabIndex={-1} className="text-xs text-gray-600 dark:text-gray-300 hover:underline">
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
    );
  }
}

export default LoginForm;
