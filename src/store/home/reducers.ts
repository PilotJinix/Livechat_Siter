import { HomeState, HomeActionTypes, NEW_NEWS, LOAD_NEWS, News } from "./types";

/*
|---------------------------------------------------------------
| Initial State
|---------------------------------------------------------------
|
*/

const initialState: HomeState = {};

/*
|---------------------------------------------------------------
| Home Reducers
|---------------------------------------------------------------
|
*/

let newsCount = 1;

export const homeReducer = (state: HomeState = initialState, action: HomeActionTypes): HomeState => {
  switch (action.type) {
    case NEW_NEWS:
      newsCount++;
      return {
        ...state,
        news: [
          {
            id: newsCount,
            authorId: 1,
            title: `new news ${newsCount}`,
            content:
              "content new content new content new content new content new content new content new content new content new content new content new content new content new content new content new content new content new content new content new content new content new content new content new content new content new content new content new content new",
            thumbnail: "thumbnail new",
            slug: "new-news",
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime(),
          },
          ...(state.news ? state.news : []),
        ],
      };

    case LOAD_NEWS:
      return {
        ...state,
        news: state.news,
      };

    default:
      return state;
  }
};
