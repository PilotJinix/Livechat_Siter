// NODE_MODULES
import { FC } from "react";
import { Link } from "react-router-dom";

export const Hero: FC = () => {
  return (
    <section className="text-neutral-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="w-full max-w-sm h-auto max-h-96 m-auto object-cover object-center rounded"
            alt="hero"
            src="https://source.unsplash.com/random"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-neutral-900">
            Hero
          </h1>
          <p className="mb-8 leading-relaxed">
            Random image by{" "}
            <a
              className="hover:text-primary"
              href="https://source.unsplash.com/"
            >
              source.unsplash.com
            </a>{" "}
            with url{" "}
            <a
              className="hover:text-primary"
              href="https://source.unsplash.com/random"
              target="_blank"
            >
              https://source.unsplash.com/random
            </a>
            .
          </p>
          <div className="flex justify-center">
            <Link
              to="/login"
              className="inline-flex text-white bg-primary-500 border-0 py-2 px-6 focus:outline-none hover:bg-primary-600 rounded text-lg"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="ml-4 inline-flex text-neutral-700 bg-neutral-100 border-0 py-2 px-6 focus:outline-none hover:bg-neutral-200 rounded text-lg"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
