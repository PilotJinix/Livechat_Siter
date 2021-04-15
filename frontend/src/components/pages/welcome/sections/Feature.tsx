// NODE_MODULES
import { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartArea,
  faChartBar,
  faChartLine,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export const Feature: FC = () => {
  return (
    <section className="text-neutral-600 body-font">
      <div className="container px-5 py-24 max-w-6xl mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-neutral-900 mb-20">
          Feature Feature Feature
        </h1>
        <div className="flex flex-wrap md:space-y-0 space-y-6">
          {/* Feature 1 */}
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mb-4 flex-shrink-0">
              <FontAwesomeIcon className="w-6 h-6" icon={faChartArea} />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-neutral-900 text-lg title-font font-medium mb-2">
                Feature Chart Area
              </h2>
              <p className="leading-relaxed text-base">
                Fontawesome font awesome font awesome font awesome font awesome
                font awesome font awesome font awesome font awesome font awesome
                font awesome.
              </p>
              <a className="mt-3 text-primary-500 inline-flex items-center">
                Learn More
                <FontAwesomeIcon className="w-4 h-4 ml-2" icon={faArrowRight} />
              </a>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mb-4 flex-shrink-0">
              <FontAwesomeIcon className="w-6 h-6" icon={faChartBar} />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-neutral-900 text-lg title-font font-medium mb-2">
                Feature Chart Bar
              </h2>
              <p className="leading-relaxed text-base">
                Fontawesome font awesome font awesome font awesome font awesome
                font awesome font awesome font awesome font awesome font awesome
                font awesome.
              </p>
              <a className="mt-3 text-primary-500 inline-flex items-center">
                Learn More
                <FontAwesomeIcon className="w-4 h-4 ml-2" icon={faArrowRight} />
              </a>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mb-4 flex-shrink-0">
              <FontAwesomeIcon className="w-6 h-6" icon={faChartLine} />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-neutral-900 text-lg title-font font-medium mb-2">
                Feature Chart Line
              </h2>
              <p className="leading-relaxed text-base">
                Fontawesome font awesome font awesome font awesome font awesome
                font awesome font awesome font awesome font awesome font awesome
                font awesome.
              </p>
              <a className="mt-3 text-primary-500 inline-flex items-center">
                Learn More
                <FontAwesomeIcon className="w-4 h-4 ml-2" icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
