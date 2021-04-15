import { ThunkResult } from "../index";
import { HomeActionTypes, NEW_NEWS, LOAD_NEWS, News, Conversation } from "./types";

/*
|---------------------------------------------------------------
| Load News
|---------------------------------------------------------------
|
*/

export const newNews = (): HomeActionTypes => ({
  type: NEW_NEWS,
});

export const newNewsAsync = (): ThunkResult<void> => (dispatch) => {
  dispatch(newNews());
};

export const loadNews = (): HomeActionTypes => ({
  type: LOAD_NEWS,
});

export const loadNewsAsync = (): ThunkResult<void> => (dispatch) => {
  dispatch(loadNews());
};
