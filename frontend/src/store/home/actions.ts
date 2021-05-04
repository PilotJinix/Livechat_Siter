import { ThunkResult } from "../index";
import {
  HomeActionTypes,
  NEW_NEWS,
  LOAD_NEWS,
  LOAD_USER,
  NewsState,
  UserState,
  ConversationState,
  LOAD_CONVERSATION,
  SELECT_CONVERSATION,
} from "./types";

import { api, AxiosResponse } from "__src/api";

/*
|---------------------------------------------------------------
| New News
|---------------------------------------------------------------
|
*/

export const newNews = (): HomeActionTypes => ({
  type: NEW_NEWS,
});

/*
|---------------------------------------------------------------
| Load News
|---------------------------------------------------------------
|
*/

type LoadNewsProps = NewsState;

export const loadNews = (newsState: LoadNewsProps): HomeActionTypes => ({
  type: LOAD_NEWS,
  payload: {
    news: newsState,
  },
});

export const loadNewsAsync = (): ThunkResult<void> => (dispatch, getState) => {
  const home = getState().home;
  const page = home.news?.meta.next_page_url || "";
  const hasNext = home.news?.meta.next_page_url;
  if (!home.news || hasNext) {
    api
      .post<any, AxiosResponse<NewsState>>(`/news${page}`)
      .then((response) => {
        dispatch(loadNews(response.data));
      })
      .catch((errors) => {
        console.error(errors);
      });
  }
};

/*
|---------------------------------------------------------------
| Load User
|---------------------------------------------------------------
|
*/

type LoadUserProps = UserState;

export const loadUser = (userState: LoadUserProps): HomeActionTypes => ({
  type: LOAD_USER,
  payload: {
    user: userState,
  },
});

export const loadUserAsync = (): ThunkResult<void> => (dispatch, getState) => {
  const home = getState().home;
  // const page = home.users?.meta.next_page_url || "";
  // const hasNext = home.users?.meta.next_page_url;
  if (!home.users) {
    api
      .post<any, AxiosResponse<UserState>>(`/users`)
      .then((response) => {
        dispatch(loadUser({ data: response.data as any }));
      })
      .catch((errors) => {
        console.error(errors);
      });
  }
};

/*
|---------------------------------------------------------------
| Load Conversation
|---------------------------------------------------------------
|
*/

type LoadConversationProps = ConversationState;

export const loadConversation = (conversationState: LoadConversationProps): HomeActionTypes => ({
  type: LOAD_CONVERSATION,
  payload: {
    conversation: conversationState,
  },
});

export const loadConversationAsync = (): ThunkResult<void> => (dispatch, getState) => {
  const { app, home } = getState();
  const token = app.auth?.token || "";
  // const page = home.news?.meta.next_page_url || "";
  // const hasNext = home.conversations?.meta.next_page_url;
  if (!home.conversations /* || hasNext*/) {
    api
      .post<any, AxiosResponse<ConversationState>>(
        `/conversations`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        dispatch(loadConversation({ data: response.data as any }));
      })
      .catch((errors) => {
        console.error(errors);
      });
  }
};

/*
|---------------------------------------------------------------
| Select Conversation
|---------------------------------------------------------------
|
*/

export const selectConversation = (id: number): HomeActionTypes => ({
  type: SELECT_CONVERSATION,
  payload: {
    id: id,
  },
});
