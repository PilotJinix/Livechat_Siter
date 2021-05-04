/*
|---------------------------------------------------------------
| Type
|---------------------------------------------------------------
|
*/

export const NEW_CONVERSATION = "NEW_CONVERSATION";
export const LOAD_CONVERSATION = "LOAD_CONVERSATION";
export const SELECT_CONVERSATION = "SELECT_CONVERSATION";

export const NEW_MESSAGE = "NEW_MESSAGE";
export const LOAD_MESSAGE = "LOAD_MESSAGE";

export const NEW_NEWS = "NEW_NEWS";
export const LOAD_NEWS = "LOAD_NEWS";

export const LOAD_USER = "LOAD_USER";

export const NEW_COMMENT = "NEW_COMMENT";
export const LOAD_COMMENT = "LOAD_COMMENT";

export type ThemeType = "light" | "dark";

export type User = {
  id: number;
  username: string;
  role: "admin" | "common";
  avatar: string | null;
  created_at: string;
  updated_at: string;
};

export type Comment = {
  id: number;
  news_id: number;
  user_id: number;
  comment: string;
  created_at: string;
  updated_at: string;
};

export type NewsMeta = {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
  first_page_url: string | null;
  last_page_url: string | null;
  next_page_url: string | null;
  previous_page_url: string | null;
};

export type News = {
  id: number;
  author_id: number;
  title: string;
  content: string;
  slug: string;
  thumbnail: string;
  created_at: string;
  updated_at: string;
  comments?: Comment[];
  author?: User;
};

export type Participant = {
  id: number;
  user_id: number;
  conversation_id: number;
  createdAt: number;
  updatedAt: number;
  user?: User;
};

export type Message = {
  id: number;
  sender_id: number;
  conversation_id: number;
  message: string;
  createdAt: number;
  updatedAt: number;
  deletedAt: number;
  sender?: User;
};

export type ConversationMeta = {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
  first_page_url: string | null;
  last_page_url: string | null;
  next_page_url: string | null;
  previous_page_url: string | null;
};

export type Conversation = {
  id: number;
  creatorId: number;
  title: string;
  createdAt: number;
  updatedAt: number;
  deletedAt: number;
  messages?: Message[];
  participant?: Participant[];
};

export type UserState = {
  data: User[];
};

export type NewsState = {
  meta: NewsMeta;
  data: News[];
  selectedId?: number;
};

export type ConversationState = {
  // meta: ConversationMeta;
  data: Conversation[];
  selectedId?: number;
};

/*
|---------------------------------------------------------------
| Home State
|---------------------------------------------------------------
|
*/

export interface HomeState {
  news?: NewsState;
  conversations?: ConversationState;
  users?: UserState;
}

/*
|---------------------------------------------------------------
| In Home Action
|---------------------------------------------------------------
|
*/

export interface NewConversationAction {
  type: typeof NEW_CONVERSATION;
}

export interface LoadConversationAction {
  type: typeof LOAD_CONVERSATION;
  payload: {
    conversation: ConversationState;
  };
}

export interface SelectConversationAction {
  type: typeof SELECT_CONVERSATION;
  payload: {
    id: number;
  };
}

export interface NewNewsAction {
  type: typeof NEW_NEWS;
}

export interface LoadNewsAction {
  type: typeof LOAD_NEWS;
  payload: {
    news: NewsState;
  };
}

export interface LoadUserAction {
  type: typeof LOAD_USER;
  payload: {
    user: UserState;
  };
}

/*
|---------------------------------------------------------------
| Type HomeAction
|---------------------------------------------------------------
|
*/

export type HomeActionTypes =
  | NewConversationAction
  | LoadConversationAction
  | SelectConversationAction
  | NewNewsAction
  | LoadNewsAction
  | LoadUserAction;
