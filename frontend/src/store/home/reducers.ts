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

let newsCount = 0;

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
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh arcu, consequat vitae mi in, cursus semper magna. In pulvinar condimentum arcu eu faucibus. Phasellus maximus nibh vel consectetur congue. Pellentesque semper vel mauris vitae pharetra. Fusce eros nisi, accumsan vel convallis in, accumsan ut nisi. Proin sollicitudin eros leo, ut semper felis aliquam bibendum. Vestibulum quis nunc porttitor, pulvinar risus at, ultricies neque. Fusce in ullamcorper augue. In ut mi orci. Aenean ut mi maximus lacus vulputate sagittis. Nullam justo dolor, vehicula ac massa eget, ullamcorper laoreet lacus. Nunc at mi sed dolor sollicitudin consequat. Etiam porta elit quis purus pretium, in pharetra turpis ullamcorper. Fusce pellentesque metus quis nunc maximus tristique. Duis hendrerit metus ut viverra porta.",
            thumbnail: "/thumbnail.jpg",
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
