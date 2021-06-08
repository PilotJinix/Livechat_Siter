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
  SELECT_USER,
  NEW_MESSAGE,
  NEW_CONVERSATION,
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
| Select User
|---------------------------------------------------------------
|
*/

export const selectUser = (id: number): HomeActionTypes => ({
  type: SELECT_USER,
  payload: {
    id: id,
  },
});

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

export const loadConversationAsync = (callback?: () => void): ThunkResult<void> => (dispatch, getState) => {
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
        dispatch(loadConversation({ data: response.data as any }));
      })
      .catch((errors) => {
        console.error(errors);
      })
      .finally(() => {
        callback && callback();
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

/*
|---------------------------------------------------------------
| New Conversation
|---------------------------------------------------------------
|
*/

type NewConversationProps = {
  id: number;
  creatorId: number;
  title: string;
  created_at: number;
  updated_at: number;
  deleted_at: number;
  messages?: {
    id: number;
    sender_id: number;
    conversation_id: number;
    message: string;
    created_at: number;
    updated_at: number;
    deleted_at: number | null;
  }[];
  participants?: {
    id: number;
    user_id: number;
    conversation_id: number;
    created_at: number;
    updated_at: number;
  }[];
};

export const newConversation = (props: NewConversationProps): HomeActionTypes => ({
  type: NEW_CONVERSATION,
  payload: {
    ...props,
  },
});

/*
|---------------------------------------------------------------
| New Message
|---------------------------------------------------------------
|
*/

type NewMessageProps = {
  id: number;
  sender_id: number;
  conversation_id: number;
  message: string;
  created_at: number;
  updated_at: number;
  deleted_at: number;
};

export const newMessage = (props: NewMessageProps): HomeActionTypes => ({
  type: NEW_MESSAGE,
  payload: {
    ...props,
  },
});
