// NODE_MODULES
import { Component } from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as yup from "yup";

export interface RegisterFormValues {
  username: string;
  password: string;
  passwordConfirmation: string;
}

const registerSchema = yup.object().shape({
  username: yup.string().min(2, "Too Short!").max(64, "Too long!").required("Required"),
  password: yup.string().min(8, "Too Short!").max(16, "Too long!").required("Required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password don't match!")
    .required("Required"),
});

export type OnRegisterFormSubmit = (values: RegisterFormValues, formikHelpers: FormikHelpers<RegisterFormValues>) => void;

interface Props {
  onSubmit: OnRegisterFormSubmit;
}

interface State {}

class RegisterForm extends Component<Props, State> {
  initialValues: RegisterFormValues = {
    username: "",
    password: "",
    passwordConfirmation: "",
  };

  render() {
    return (
      <Formik initialValues={this.initialValues} validationSchema={registerSchema} onSubmit={this.props.onSubmit}>
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
              <label htmlFor="passwordConfirmation" className="block text-base text-gray-800 dark:text-gray-100">
                Confirm Password
              </label>
              <Field
                type="text"
                id="passwordConfirmation"
                name="passwordConfirmation"
                className="block w-full mt-2 border border-gray-300 rounded-lg dark:border-gray-600 text-dark dark:text-light bg-light dark:bg-dark"
              />
              {errors.passwordConfirmation && touched.passwordConfirmation && (
                <div className="mt-1 text-sm font-normal text-dark dark:text-light">{errors.passwordConfirmation}</div>
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
    );
  }
}

export default RegisterForm;
