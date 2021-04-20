// NODE_MODULES
import { Component } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
// Types
import { News } from "__src/store/home/types";
// Variants
import { NewsItemVariant } from "./variants";

interface Props {
  news: News;
}

class NewsItem extends Component<Props> {
  render() {
    const { news } = this.props;
    return (
      <motion.div
        variants={NewsItemVariant}
        layout
        className="w-full p-0 mb-3 transition-shadow rounded-lg shadow-sm h-36 sm:h-40 sm:p-3 bg-light dark:bg-gray-700 hover:shadow-md"
      >
        <div className="flex w-full h-full text-dark dark:text-light">
          <div className="flex-grow-0 flex-shrink-0 h-full mr-3 overflow-hidden rounded-l-lg sm:rounded-lg w-36 bg-light">
            <img className="object-cover w-full h-full shadow-sm" src={news.thumbnail} alt="" />
          </div>
          <div className="flex flex-col flex-grow py-2 pr-2 sm:py-0">
            <div className="flex">
              <div className="pt-1 pr-3">
                <div className="w-8 h-8 rounded-full shadow-sm md:w-10 md:h-10">
                  <img className="object-cover w-full h-full" src="/favicon.ico" alt="" />
                </div>
              </div>
              <div className="flex-grow">
                <h6 className="font-bold leading-4 md:text-xl">{news.title}</h6>
                <p className="text-sm tracking-wide text-gray-600 dark:text-gray-300">{dayjs(news.created_at).fromNow()}</p>
              </div>
            </div>
            <div className="flex-grow my-1 ml-1 overflow-hidden">
              <p className="text-sm leading-4 text-gray-600 break-words whitespace-pre-line md:leading-5 dark:text-gray-300">
                {news.content}
              </p>
            </div>
            <div className="flex">
              <div className="flex items-center justify-between h-6 ml-2 text-gray-400 dark:text-gray-500">
                <span className="mr-1 text-base">{news.comments?.length || 0}</span>
                <FontAwesomeIcon className="w-4 h-4" icon={faComment} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default NewsItem;
