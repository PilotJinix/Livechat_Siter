// NODE_MODULES
import { Component } from "react";

class NewsSkeleton extends Component {
  render() {
    return (
      <div className="w-full p-0 mb-3 transition-shadow rounded-lg shadow-sm h-36 sm:h-40 sm:p-3 bg-light dark:bg-gray-700 hover:shadow-md">
        <div className="flex w-full h-full text-dark dark:text-light">
          <div className="flex-grow-0 flex-shrink-0 h-full mr-3 overflow-hidden bg-gray-300 rounded-l-lg sm:rounded-lg w-36 animate-pulse dark:bg-gray-600"></div>
          <div className="flex flex-col flex-grow py-2 pr-2 sm:py-0">
            <div className="flex">
              <div className="pt-1 pr-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full shadow-sm md:w-10 md:h-10 dark:bg-gray-600 animate-pulse"></div>
              </div>
              <div className="flex-grow">
                <div className="w-32 h-4 mt-1 mb-2 bg-gray-300 md:w-44 dark:bg-gray-600 animate-pulse"></div>
                <div className="w-20 h-3 bg-gray-300 md:w-32 dark:bg-gray-600 animate-pulse"></div>
                <div></div>
              </div>
            </div>
            <div className="flex-grow my-2 ml-1 overflow-hidden">
              <div className="w-full h-3 mb-1 bg-gray-300 dark:bg-gray-600 animate-pulse"></div>
              <div className="w-1/2 h-3 bg-gray-300 dark:bg-gray-600 animate-pulse"></div>
            </div>
            <div className="flex">
              <div className="flex items-center justify-between h-10 ml-2">
                <div className="bg-gray-300 w-7 h-7 dark:bg-gray-600 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsSkeleton;
